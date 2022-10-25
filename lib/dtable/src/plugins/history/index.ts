import {definePlugin} from '../../helpers/shared-plugins';
import store, {DTableStoreTypes} from '../store';
import draft, {cloneDraft, DTableDraftRows, DTableDraftTypes, mergeDraft} from '../draft';

import type {DTablePluginTypes, DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {RowData} from '../../types/row';

export interface DTableHistoryItem {
    before: DTableDraftRows;
    after: DTableDraftRows;
}

export interface DTableHistoryTypes extends DTablePluginTypes {
    options: Partial<{
        history?: boolean;
        historyTarget?: 'staging' | 'applied';
        historyThreshold: 10;
        onHistoryApplied: (this: DTableHistory, changes: DTableDraftRows, newDraft: DTableDraftRows, oldDraft: DTableDraftRows) => void;
    }>;
    state: {
        historyItems: (DTableHistoryItem | number)[];
        historyCursor: number;
    };
    data: {
        historyIdx: number;
    };
    methods: {
        undoHistory(this: DTableHistory, callback?: () => void): boolean;
        redoHistory(this: DTableHistory, callback?: () => void): boolean;
        applyHistory(this: DTableHistory, cursor: number, changes: DTableDraftRows, callback?: () => void): void;
        canUndoHistory(this: DTableHistory): boolean;
        canRedoHistory(this: DTableHistory): boolean;
        addHistory(this: DTableHistory, item: DTableHistoryItem): void;
        getHistory(this: DTableHistory, cursor?: number | DTableHistoryItem): DTableHistoryItem | undefined;
    }
}

export type DTableHistoryDependencies = [DTableStoreTypes, DTableDraftTypes];

export type DTableHistory = DTableWithPlugin<DTableHistoryTypes, DTableHistoryDependencies>;

export function diffDraft(newDraft: DTableDraftRows, oldDraft: DTableDraftRows): DTableDraftRows {
    const keys = new Set([...Object.keys(newDraft), ...Object.keys(oldDraft)]);
    return Array.from(keys).reduce<DTableDraftRows>((diffInfo, key) => {
        const newRowData = newDraft[key] || {};
        const oldRowData = oldDraft[key] || {};
        if (newRowData === oldRowData) {
            return diffInfo;
        }
        const rowKeys = new Set([...Object.keys(newRowData), ...Object.keys(oldRowData)]);
        const rowDiffInfo: Record<string, unknown> = {};
        let rowDiffSetted = false;
        rowKeys.forEach(rowKey => {
            const newValue = newRowData[rowKey];
            const oldValue = oldRowData[rowKey];
            if (newValue !== oldValue) {
                rowDiffInfo[rowKey] = newValue;
                rowDiffSetted = true;
            }
        });
        if (rowDiffSetted) {
            diffInfo[key] = rowDiffInfo;
        }

        return diffInfo;
    }, {});
}

export const history: DTablePlugin<DTableHistoryTypes, DTableHistoryDependencies> = {
    name: 'history',
    plugins: [store, draft],
    defaultOptions: {
        history: true,
        historyTarget: 'staging',
        historyThreshold: 10,
    },
    when: options => !!options.history,
    options(options) {
        const {afterApplyDraft, afterStageDraft, historyTarget, history: historyEnabled} = options;
        return {
            afterApplyDraft: historyEnabled && historyTarget === 'applied' ? (changes, newDraft, oldDraft) => {
                if (afterApplyDraft) {
                    afterApplyDraft.call(this, changes, newDraft, oldDraft);
                }
                this.addHistory({after: diffDraft(newDraft, oldDraft), before: diffDraft(oldDraft, newDraft)});
            } : afterApplyDraft,
            afterStageDraft: historyEnabled && historyTarget !== 'applied' ? (changes, newDraft, oldDraft) => {
                if (afterStageDraft) {
                    afterStageDraft.call(this, changes, newDraft, oldDraft);
                }
                this.addHistory({after: diffDraft(newDraft, oldDraft), before: diffDraft(oldDraft, newDraft)});
            } : afterStageDraft,
        };
    },
    data() {
        return {historyIdx: 1};
    },
    state() {
        return {historyCursor: 0, historyItems: []};
    },
    methods: {
        addHistory(item) {
            let {historyCursor, historyItems} = this.state;
            if (historyCursor > 0) {
                const deletedItems = historyItems.splice(0, historyCursor);
                deletedItems.forEach(historyItem => {
                    if (typeof historyItem === 'number') {
                        this.data.store.session.remove(`HISTORY:${this.id}:${historyItem}`);
                    }
                });
                historyCursor = 0;
            }
            historyItems = [item, ...historyItems];

            const {historyThreshold} = this.options;
            if (historyThreshold && historyItems.length > historyThreshold) {
                for (let i = historyThreshold; i < historyItems.length; i++) {
                    const oldItem = historyItems[i];
                    if (typeof oldItem === 'number') {
                        break;
                    }
                    const itemIdx = this.data.historyIdx++;
                    this.data.store.session.set(`HISTORY:${this.id}:${itemIdx}`, oldItem);
                    historyItems[i] = itemIdx;
                }
            }

            this.setState({historyCursor, historyItems});
        },
        getHistory(cursor) {
            if (typeof cursor === 'object') {
                return cursor;
            }
            const {historyCursor, historyItems} = this.state;
            if (cursor === undefined) {
                cursor = historyCursor;
            }
            const item = historyItems[cursor];
            if (typeof item === 'number') {
                return this.data.store.session.get(`HISTORY:${this.id}:${item}`);
            }
            return item;
        },
        applyHistory(historyCursor, changes, callback) {
            const state: Partial<DTableHistory['state']> = {historyCursor};
            const isAppliedTarget = this.options.historyTarget === 'applied';
            const {appliedDraft, stagingDraft} = this.state;
            const oldDraft = cloneDraft((isAppliedTarget ? appliedDraft : stagingDraft) ?? {});
            if (isAppliedTarget) {
                state.appliedDraft = mergeDraft(appliedDraft, changes);
            } else {
                state.stagingDraft = mergeDraft(stagingDraft, changes);
            }
            this.setState(state, () => {
                callback?.();
                const actualChanges = Object.entries(changes).reduce<DTableDraftRows>((record, [rowID, rowData]) => {
                    if (rowData) {
                        const data: RowData = {};
                        Object.entries(rowData).forEach(([prop, value]) => {
                            data[prop] = value === undefined ? this.getCellDraftValue(rowID, prop) : value;
                        });
                        record[rowID] = data;
                    }
                    return record;
                }, {});
                this.options.onHistoryApplied?.call(this, actualChanges, isAppliedTarget ? appliedDraft : stagingDraft ?? {}, oldDraft);
            });
        },
        undoHistory(callback) {
            if (!this.canUndoHistory()) {
                return false;
            }

            const {historyCursor} = this.state;
            const historyItem = this.getHistory(historyCursor);
            if (!historyItem) {
                return false;
            }

            this.applyHistory(historyCursor + 1, cloneDraft(historyItem.before), callback);
            return true;
        },
        redoHistory(callback) {
            if (!this.canRedoHistory()) {
                return false;
            }

            const {historyCursor} = this.state;
            const historyItem = this.getHistory(historyCursor - 1);
            if (!historyItem) {
                return false;
            }

            this.applyHistory(historyCursor - 1, cloneDraft(historyItem.after), callback);
            return true;
        },
        canUndoHistory() {
            const {historyCursor, historyItems} = this.state;
            return historyItems.length > 0 && historyCursor < historyItems.length;
        },
        canRedoHistory() {
            return this.state.historyCursor > 0;
        },
    },
};

const plugin = definePlugin(history);

export default plugin;
