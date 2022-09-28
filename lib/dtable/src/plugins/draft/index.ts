import {definePlugin} from '../../helpers/shared-plugins';

export type DTableDraftRows = Record<RowID, Partial<RowData>>;

export interface DTableDraftTypes extends DTablePluginTypes {
    options: Partial<{
        draft: boolean;
        history?: boolean | number;
        skipRenderDraftCell?: boolean;
        onStageDraft?: (this: DTableDraft, draftRows: DTableDraftRows, stagingDraft: DTableDraftRows) => false | void;
        afterStageDraft?: (this: DTableDraft, draftRows: DTableDraftRows, stagingDraft: DTableDraftRows) => void;
        afterApplyDraft?: (this: DTableDraft, draftRows: DTableDraftRows, appliedDraft: DTableDraftRows) => void;
    }>;
    state: {
        stagingDraft: DTableDraftRows;
        appliedDraft: DTableDraftRows;
    };
    data: {
    },
    methods: {
        getCellDraftValue(this: DTableDraft, row: RowInfo | string | number, col: ColInfo | string | number): unknown;
        stageDraft(this: DTableDraft, draftRows: DTableDraftRows, options?: {skipUpdate?: boolean, callback?: (stagingDraft: DTableDraftRows) => void}): void;
        applyDraft(this: DTableDraft, draftRows: DTableDraftRows, options?: {skipUpdate?: boolean, callback?: (appliedDraft: DTableDraftRows) => void}): void;
        undoDraft(this: DTableDraft): boolean;
        redoDraft(this: DTableDraft): boolean;
        renderDraftCell: NonNullable<typeof draft['onRenderCell']>;
    }
}

type DTableDraft = DTableWithPlugin<DTableDraftTypes>;

export const draft: DTablePlugin<DTableDraftTypes> = {
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
        stageDraft(draftRows, options) {
            const {stagingDraft} = this.state;
            if (this.options.onStageDraft?.call(this, draftRows, stagingDraft) === false) {
                return;
            }
            Object.entries(draftRows).forEach(([rowID, data]) => {
                const oldData = stagingDraft[rowID];
                if (oldData) {
                    if (data === null) {
                        delete stagingDraft[rowID];
                    } else {
                        Object.assign(oldData, data);
                    }
                } else {
                    stagingDraft[rowID] = data;
                }
            });
            const afterUpdate = () => {
                options?.callback?.(draftRows);
                this.options.afterStageDraft?.call(this, draftRows, this.state.stagingDraft);
            };
            if (options?.skipUpdate) {
                afterUpdate();
            } else {
                this.forceUpdate(afterUpdate);
            }
        },
        applyDraft(draftRows: DTableDraftRows, options) {
            const {stagingDraft, appliedDraft} = this.state;
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
                } else {
                    appliedDraft[rowID] = draftRowData;
                }
            });
            const afterUpdate = () => {
                options?.callback?.(draftRows);
                this.options.afterApplyDraft?.call(this, draftRows, this.state.appliedDraft);
            };
            if (options?.skipUpdate) {
                afterUpdate();
            } else {
                this.forceUpdate(afterUpdate);
            }
        },
        undoDraft() {
            return true;
        },
        redoDraft() {
            return true;
        },
        renderDraftCell(result, {col, row}) {
            const cellValue = `${this.getCellDraftValue(row, col) ?? ''}`;
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

const plugin = definePlugin(draft);

export default plugin;
