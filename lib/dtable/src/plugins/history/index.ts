import {definePlugin} from '../../helpers/shared-plugins';
import store, {DTableStoreTypes} from '../store';
import draft, {cloneDraft, DTableDraftRows, DTableDraftTypes} from '../draft';

export interface DTableHistoryItem {
    before: DTableDraftRows;
    after: DTableDraftRows;
}

export interface DTableHistoryTypes extends DTablePluginTypes {
    options: Partial<{
        history?: boolean;
        historyTarget?: 'staging' | 'applied';
        historyThreshold: 10;
    }>;
    state: {
        historyItems: (DTableHistoryItem | number)[];
        historyCursor: number;
    };
    data: {
        historyIdx: number;
    };
    methods: {
        undoHistory(this: DTableHistory): boolean;
        redoHistory(this: DTableHistory): boolean;
        canUndoHistory(this: DTableHistory): boolean;
        canRedoHistory(this: DTableHistory): boolean;
        addHistory(this: DTableHistory, item: DTableHistoryItem): void;
        getHistory(this: DTableHistory, cursor?: number | DTableHistoryItem): DTableHistoryItem | undefined;
    }
}

export type DTableHistoryDependencies = [DTableStoreTypes, DTableDraftTypes];

export type DTableHistory = DTableWithPlugin<DTableHistoryTypes, DTableHistoryDependencies>;

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
                this.addHistory({after: cloneDraft(newDraft), before: oldDraft});
            } : afterApplyDraft,
            afterStageDraft: historyEnabled && historyTarget !== 'applied' ? (changes, newDraft, oldDraft) => {
                if (afterStageDraft) {
                    afterStageDraft.call(this, changes, newDraft, oldDraft);
                }
                this.addHistory({after: cloneDraft(newDraft), before: oldDraft});
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
        undoHistory() {
            if (!this.canUndoHistory()) {
                return false;
            }

            const {historyCursor} = this.state;
            const historyItem = this.getHistory(historyCursor);
            if (!historyItem) {
                return false;
            }

            const state: Partial<DTableHistory['state']> = {historyCursor: historyCursor + 1};
            const newDraft = cloneDraft(historyItem.before);
            if (this.options.historyTarget === 'applied') {
                state.appliedDraft = newDraft;
            } else {
                state.stagingDraft = newDraft;
            }
            this.setState(state);
            return true;
        },
        redoHistory() {
            if (!this.canRedoHistory()) {
                return false;
            }

            const {historyCursor} = this.state;
            const historyItem = this.getHistory(historyCursor - 1);
            if (!historyItem) {
                return false;
            }

            const state: Partial<DTableHistory['state']> = {historyCursor: historyCursor - 1};
            const newDraft = cloneDraft(historyItem.after);
            if (this.options.historyTarget === 'applied') {
                state.appliedDraft = newDraft;
            } else {
                state.stagingDraft = newDraft;
            }
            this.setState(state);
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
