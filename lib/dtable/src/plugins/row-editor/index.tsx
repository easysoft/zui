import {ComponentType, JSX, ComponentChildren} from 'preact';
import {CellInfo, DTablePlugin, DTableWithPlugin, RowData, RowID, RowInfo} from '@zui/dtable/src/types';
import {$} from '@zui/core';
import {definePlugin} from '@zui/dtable/src/helpers/shared-plugins';
import './style.css';

export type RowEditorState = {
    isAppend: boolean;
    id?: RowID;
    data: Partial<RowData>;
};

export type RowEditorTypes = {
    state: {
        rowEditor?: RowEditorState;
    },
    options: {
        onRenderEditRow: (this: DTableRowEditor, state: RowEditorState, row: RowInfo) => ComponentChildren;
        beforeEditRow: (this: DTableRowEditor, state: RowEditorState) => boolean | void;
        onEditRow: (this: DTableRowEditor, state: RowEditorState) => void;
    },
    methods: {
        startEditRow(this: DTableRowEditor, state: Partial<RowEditorState>): void;
        editRow(this: DTableRowEditor, id: RowID, initialData?: Partial<RowData>): void;
        appendRow(this: DTableRowEditor, appendID?: RowID, initialData?: Partial<RowData>): void;
        cancelEditRow(this: DTableRowEditor): void;
        confirmEditRow(this: DTableRowEditor): void;
    }
};

export type DTableRowEditor = DTableWithPlugin<RowEditorTypes>;

const rowEditorPlugin: DTablePlugin<RowEditorTypes> = {
    name: 'rowEditor',
    when: options => !!(options.onEditRow || options.onRenderEditRow),
    methods: {
        startEditRow(state) {
            const rowEditor = {
                data: {},
                isAppend: false,
                ...state,
            };
            if (this.options.beforeEditRow?.call(this, rowEditor) === false) {
                return;
            }
            this.setState({rowEditor});
        },
        editRow(id, initialData) {
            this.startEditRow({
                id,
                data: initialData,
            });
        },
        appendRow(id, initialData) {
            this.startEditRow({
                isAppend: true,
                id,
                data: initialData,
            });
        },
        cancelEditRow() {
            this.setState({rowEditor: undefined});
        },
        confirmEditRow(newData?: Partial<RowData>) {
            const {rowEditor} = this.state;
            if (!rowEditor) {
                return;
            }
            if (newData) {
                Object.assign(rowEditor.data, newData);
            }
            this.options.onEditRow?.call(this, rowEditor);
            this.cancelEditRow();
        },
    },
    beforeRender(layout) {
        const {rowEditor} = this.state;
        if (!rowEditor) {
            return;
        }
        const {bodyChildren = [], visibleRows} = layout;
        const {id} = rowEditor;
        const row = visibleRows.find(x => x.id === id);
        if (!row) {
            return;
        }
        

        layout.bodyChildren = bodyChildren;
    },
};

export const rowEditor = definePlugin(rowEditorPlugin);
