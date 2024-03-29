import {definePlugin} from '../../helpers/shared-plugins';

import type {ColInfo} from '../../types/col';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {RowID, RowData, RowInfo} from '../../types/row';

export type DTableDraftRows = Record<RowID, Partial<RowData>>;

export interface DTableDraftTypes {
    options: Partial<{
        draft: boolean;
        skipRenderDraftCell?: boolean;
        onStageDraft?: (this: DTableDraft, draftRows: DTableDraftRows, stagingDraft: DTableDraftRows) => false | void;
        afterStageDraft?: (this: DTableDraft, draftRows: DTableDraftRows, stagingDraft: DTableDraftRows, oldStageDraft: DTableDraftRows, options: {skipUpdate: boolean}) => void;
        afterApplyDraft?: (this: DTableDraft, draftRows: DTableDraftRows, appliedDraft: DTableDraftRows, oldAppliedDraft: DTableDraftRows) => void;
    }>;
    state: {
        stagingDraft: DTableDraftRows;
        appliedDraft: DTableDraftRows;
    };
    methods: {
        getCellDraftValue(this: DTableDraft, row: RowInfo | string | number, col: ColInfo | string | number): unknown;
        stageDraft(this: DTableDraft, draftRows: DTableDraftRows, options?: {skipUpdate?: boolean, callback?: (stagingDraft: DTableDraftRows) => void}): void;
        applyDraft(this: DTableDraft, draftRows: DTableDraftRows, options?: {skipUpdate?: boolean, callback?: (appliedDraft: DTableDraftRows) => void}): void;
        renderDraftCell: NonNullable<typeof draftPlugin['onRenderCell']>;
        getRowDraftData(this: DTableDraft, row: RowInfo | string | number, options?: {includeIndexCol?: boolean, emptyCellValue?: unknown}): Partial<RowData>;
        getColDraftData(this: DTableDraft, col: ColInfo | string | number, options?: {includeHeaderRow?: boolean, emptyCellValue?: unknown}): Record<string, unknown>;
    }
}

type DTableDraft = DTableWithPlugin<DTableDraftTypes>;

export function mergeDraft(sourceDraft: DTableDraftRows, newDraft: DTableDraftRows): DTableDraftRows {
    return Object.entries(newDraft).reduce((draft, [rowID, data]) => {
        const sourceData = draft[rowID];
        if (sourceData) {
            if (data === undefined) {
                delete draft[rowID];
            } else {
                Object.keys(data).forEach(key => {
                    const value = data[key];
                    if (value === undefined) {
                        delete sourceData[key];
                    } else {
                        sourceData[key] = value;
                    }
                });
            }
        } else if (data !== undefined) {
            draft[rowID] = data;
        }
        return draft;
    }, sourceDraft);
}

export function cloneDraft(sourceDraft: DTableDraftRows): DTableDraftRows {
    return Object.entries(sourceDraft).reduce<DTableDraftRows>((draft, [rowID, data]) => {
        if (draft && typeof data === 'object') {
            draft[rowID] = {...data};
        }
        return draft;
    }, {});
}

const draftPlugin: DTablePlugin<DTableDraftTypes> = {
    name: 'draft',
    defaultOptions: {
        draft: true,
        selectAllOnFocus: true,
        history: 20,
    },
    when: options => !!options.draft,
    state() {
        return {stagingDraft: {}, appliedDraft: {}};
    },
    methods: {
        getCellDraftValue(row, col) {
            const rowInfo = this.getRowInfo(row);
            if (!rowInfo) {
                return;
            }
            const colInfo = this.getColInfo(col);
            if (!colInfo) {
                return;
            }
            const {id: rowID} = rowInfo;
            const {name: colName} = colInfo;
            const stagingDraft = this.state.stagingDraft[rowID];
            if (stagingDraft && colName in stagingDraft) {
                return stagingDraft[colName];
            }
            const appliedRowData = this.state.appliedDraft[rowID];
            if (appliedRowData && colName in appliedRowData) {
                return appliedRowData[colName];
            }
            return this.getCellValue(rowInfo, colInfo);
        },
        getRowDraftData(row, options) {
            const rowInfo = this.getRowInfo(row);
            if (!rowInfo) {
                return {};
            }
            return this.layout.cols.list.reduce<Partial<RowData>>((data, col) => {
                if (!options?.includeIndexCol && col.name === 'INDEX') {
                    return data;
                }
                const value = this.getCellDraftValue(rowInfo, col);
                data[col.name] = value === undefined ? options?.emptyCellValue : value;
                return data;
            }, {});
        },
        getColDraftData(col, options) {
            const colInfo = this.getColInfo(col);
            if (!colInfo) {
                return {};
            }
            return this.layout.rows.reduce<Partial<RowData>>((data, row) => {
                const value = this.getCellDraftValue(row, colInfo);
                data[row.id] = value === undefined ? options?.emptyCellValue : value;
                return data;
            }, options?.includeHeaderRow ? {HEADER: this.getCellDraftValue('HEADER', colInfo)} : {});
        },
        stageDraft(draftRows, options) {
            const {stagingDraft} = this.state;
            if (this.options.onStageDraft?.call(this, draftRows, stagingDraft) === false) {
                return;
            }
            const oldStageDraft = cloneDraft(stagingDraft);
            mergeDraft(stagingDraft, draftRows);
            const afterUpdate = () => {
                options?.callback?.(draftRows);
                this.options.afterStageDraft?.call(this, draftRows, this.state.stagingDraft, oldStageDraft, {skipUpdate: !!options?.skipUpdate});
            };
            if (options?.skipUpdate) {
                afterUpdate();
            } else {
                this.update(afterUpdate);
            }
        },
        applyDraft(draftRows: DTableDraftRows, options) {
            const {stagingDraft, appliedDraft} = this.state;
            const oldAppliedDraft = cloneDraft(appliedDraft);
            Object.entries(draftRows).forEach(([rowID, draftRowData]) => {
                const stagingRowData = stagingDraft[rowID];
                if (stagingRowData && typeof draftRowData === 'object') {
                    if (draftRowData === null) {
                        delete stagingDraft[rowID];
                    } else {
                        Object.keys(draftRowData).forEach((colName) => {
                            if (stagingRowData[colName] === draftRowData[colName]) {
                                delete stagingRowData[colName];
                            }
                        });
                    }
                    if (!Object.keys(stagingRowData).length) {
                        delete stagingDraft[rowID];
                    }
                }

                const appliedRowData = appliedDraft[rowID];
                if (appliedRowData) {
                    if (draftRowData === null) {
                        delete appliedDraft[rowID];
                    } else {
                        Object.assign(appliedRowData, draftRowData);
                    }
                } else if (draftRowData !== null) {
                    appliedDraft[rowID] = draftRowData;
                }
            });
            const afterUpdate = () => {
                options?.callback?.(draftRows);
                this.options.afterApplyDraft?.call(this, draftRows, this.state.appliedDraft, oldAppliedDraft);
            };
            if (options?.skipUpdate) {
                afterUpdate();
            } else {
                this.forceUpdate(afterUpdate);
            }
        },
        renderDraftCell(result, {col, row}) {
            let cellValue = this.getCellDraftValue(row, col) ?? '';
            if (typeof cellValue === 'string' && !cellValue.length && row.id === 'HEADER') {
                cellValue = col.name;
            }
            result[0] = {children: cellValue as preact.ComponentChild, attrs: {title: cellValue}};
            return result;
        },
    },
    onRenderCell(result, ...args) {
        if (this.options.skipRenderDraftCell) {
            return result;
        }
        return this.renderDraftCell(result, ...args);
    },
    onRenderHeaderCell(result, ...args) {
        if (this.options.skipRenderDraftCell) {
            return result;
        }
        return this.renderDraftCell(result, ...args);
    },
};

export const draft = definePlugin(draftPlugin);
