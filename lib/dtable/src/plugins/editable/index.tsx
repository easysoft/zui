import {createRef, RefObject} from 'preact';
import {definePlugin} from '../../helpers/shared-plugins';
import {draft, DTableDraftTypes, DTableDraftRows} from '../draft';
import './style.css';
import type {DTablePluginTypes, DTableWithPlugin, DTablePlugin, DTableWithPluginColInfo} from '../../types/plugin';

export interface DTableEditableTypes extends DTablePluginTypes {
    options: Partial<{
        editable: boolean | ((rowID: string, colName: string) => boolean);
        headerEditable: boolean;
        onEditCell?: (this: DTableEditable, changeInfo: {rowID: string, colName: string, value: unknown, oldValue: unknown}) => false | void;
        selectAllOnFocus?: boolean;
        onPasteToCell?: (this: DTableEditable, event: ClipboardEvent) => void;
    }>;
    state: {
        editingCell?: {rowID: string, colName: string};
    };
    data: {
        editingInputRef: RefObject<HTMLInputElement>;
        needAutoFocus?: boolean;
    },
    methods: {
        editCell(this: DTableEditable, cell?: {rowID: string, colName: string}): void;
        deleteCells(this: DTableEditable, cells: {rowID: string, colName: string}[], emptyCellValue?: unknown): boolean;
        isCellEditing: (this: DTableEditable, rowID: string, colName: string) => boolean;
        handleEditingInputChange: (this: DTableEditable, event: Event) => void;
        handleEditingInputBlur: (this: DTableEditable, event: Event) => void;
        handleEditingKeyDown: (this: DTableEditable, event: KeyboardEvent) => void;
        renderEditableCell: NonNullable<typeof editablePlugin['onRenderCell']>;
    }
}

export type DTableEditable = DTableWithPlugin<DTableEditableTypes, [DTableDraftTypes]>;

const editablePlugin: DTablePlugin<DTableEditableTypes, [DTableDraftTypes]> = {
    name: 'editable',
    plugins: [draft],
    defaultOptions: {
        editable: true,
        selectAllOnFocus: true,
        history: 20,
        skipRenderDraftCell: true,
    },
    when: options => !!options.editable,
    events: {
        dblclick(event) {
            this.editCell(this.getPointerInfo(event));
        },
    },
    data() {
        return {editingInputRef: createRef<HTMLInputElement>()};
    },
    methods: {
        isCellEditing(rowID, colName) {
            const {editingCell} = this.state;
            return !!editingCell && editingCell.rowID === rowID && editingCell.colName === colName;
        },
        editCell(cell) {
            const {editable: checkEditable, headerEditable} = this.options;
            if (cell && ((typeof checkEditable === 'function' && !checkEditable(cell.rowID, cell.colName)) || (!headerEditable && cell.rowID === 'HEADER'))) {
                cell = undefined;
            }
            this.data.editingInputRef.current = null;
            this.data.needAutoFocus = true;
            this.setState({editingCell: cell ? {colName: cell.colName, rowID: cell.rowID} : undefined});
        },
        deleteCells(cells, emptyCellValue = null) {
            const changes: DTableDraftRows = {};
            cells.forEach((cell) => {
                const rowData = changes[cell.rowID];
                if (rowData) {
                    rowData[cell.colName] = emptyCellValue;
                } else {
                    changes[cell.rowID] = {[cell.colName]: emptyCellValue};
                }
            });
            if (Object.keys(changes).length) {
                this.stageDraft(changes);
                return true;
            }
            return false;
        },
        handleEditingInputChange() {
            const newValue = this.data.editingInputRef.current?.value;
            const {editingCell} = this.state;
            if (typeof newValue !== 'string' || !editingCell) {
                return;
            }
            const {rowID, colName} = editingCell;
            const oldValue = this.getCellDraftValue(rowID, colName);
            if (oldValue === newValue) {
                return;
            }
            if (this.options.onEditCell?.call(this, {
                rowID,
                colName,
                value: newValue,
                oldValue,
            }) === false) {
                return;
            }
            this.stageDraft({[rowID]: {[colName]: newValue}});
        },
        handleEditingInputBlur() {
            this.editCell();
        },
        handleEditingKeyDown(event) {
            if (event.key === 'Enter') {
                this.data.editingInputRef.current?.blur();
            } else if (event.key === 'Esc') {
                this.editCell();
            }
        },
        renderEditableCell(result, {col, row}, h) {
            const {id: rowID} = row;
            if (this.isCellEditing(rowID, col.name)) {
                const cellValue = `${this.getCellDraftValue(rowID, col.name) ?? ''}`;
                const editingBox = (
                    <input
                        ref={this.data.editingInputRef}
                        class="dtable-editing-input"
                        type="text"
                        defaultValue={cellValue}
                        style={{textAlign: col.setting.align}}
                        onChange={this.handleEditingInputChange}
                        onBlur={this.handleEditingInputBlur}
                        onKeyDown={this.handleEditingKeyDown}
                        onPaste={this.options.onPasteToCell}
                    />
                );
                return [{
                    outer: true,
                    className: 'is-editing',
                    children: editingBox,
                }];
            }
            return this.renderDraftCell(result, {row, col: col as unknown as DTableWithPluginColInfo<DTableDraftTypes>}, h);
        },
    },
    onUpdated() {
        const input = this.data.editingInputRef.current;
        if (input && this.data.needAutoFocus) {
            this.data.needAutoFocus = false;
            input.focus({preventScroll: true});
            if (this.options.selectAllOnFocus) {
                input.select();
            }
        }
    },
    onRender() {
        return {
            className: {
                'dtable-editable': this.options.editable,
                'dtable-editing': this.state.editingCell,
            },
        };
    },
    onRenderCell(...args) {
        return this.renderEditableCell(...args);
    },
    onRenderHeaderCell(...args) {
        return this.renderEditableCell(...args);
    },
};

export const editable = definePlugin(editablePlugin);
