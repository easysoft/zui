import {classes} from '@zui/browser-helpers/src/classes';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';
import type {CustomRenderResult} from '../../types/common';
import type {DTablePluginTypes, DTableWithPlugin, DTablePlugin} from '../../types/plugin';

export interface DTableCheckableTypes extends DTablePluginTypes {
    options: Partial<{
        checkable: boolean | 'auto';
        checkOnClickRow: boolean;
        canRowCheckable: ((this: DTableCheckable, rowID: string) => boolean);
        beforeCheckRows: (this: DTableCheckable, ids: string[] | undefined, changes: Record<string, boolean>, checkedRows: Record<string, boolean>) => void;
        onCheckChange: (this: DTableCheckable, changes: Record<string, boolean>) => void;
        checkboxRender: (this: DTableCheckable, checked: boolean, rowID: string) => CustomRenderResult;
    }>,
    col: {
        checkbox?: boolean | ((this: DTableCheckable, rowID: string) => boolean);
    }
    methods: {
        toggleCheckRows: typeof toggleCheckRows;
        isRowChecked: typeof isRowChecked;
        isAllRowChecked: typeof isAllRowChecked;
        getChecks: typeof getChecks;
    },
    state: {
        checkedRows: Record<string, true>;
    },
}

export type DTableCheckable = DTableWithPlugin<DTableCheckableTypes>;

function toggleCheckRows(this: DTableCheckable, ids?: string | string[] | boolean, checked?: boolean): Record<string, boolean> {
    if (typeof ids === 'boolean') {
        checked = ids;
        ids = undefined;
    }
    const checkedRows = this.state.checkedRows;
    const changes: Record<string, boolean> = {};
    const {canRowCheckable} = this.options;
    const toggleRow = (id: string, toggle: boolean) => {
        if (canRowCheckable && !canRowCheckable.call(this, id)) {
            return;
        }
        const oldChecked = !!checkedRows[id];
        if (oldChecked === toggle) {
            return;
        }
        if (toggle) {
            checkedRows[id] = true;
        } else {
            delete checkedRows[id];
        }
        changes[id] = toggle;
    };
    if (ids === undefined) {
        if (checked === undefined) {
            checked = !isAllRowChecked.call(this);
        }
        this.layout?.allRows.forEach(({id}) => {
            toggleRow(id, !!checked);
        });
    } else {
        if (!Array.isArray(ids)) {
            ids = [ids];
        }
        ids.forEach(id => {
            toggleRow(id, checked ?? !checkedRows[id]);
        });
    }
    if (Object.keys(changes).length) {
        const beforeCheckResults = this.options.beforeCheckRows?.call(this, ids, changes, checkedRows);
        if (beforeCheckResults) {
            Object.keys(beforeCheckResults).forEach(key => {
                if (beforeCheckResults[key]) {
                    checkedRows[key] = true;
                } else {
                    delete checkedRows[key];
                }
            });
        }
        this.setState({checkedRows: {...checkedRows}}, () => {
            this.options.onCheckChange?.call(this, changes);
        });
    }

    return changes;
}

function isRowChecked(this: DTableCheckable, rowID: string): boolean {
    return this.state.checkedRows[rowID] ?? false;
}

function isAllRowChecked(this: DTableCheckable): boolean {
    const checkedLength = this.getChecks().length;
    const {canRowCheckable} = this.options;
    if (canRowCheckable) {
        return checkedLength === this.layout?.allRows.reduce((length, row) => {
            return length + (canRowCheckable.call(this, row.id) ? 1 : 0);
        }, 0);
    }
    return checkedLength === this.layout?.allRows.length;
}

function getChecks(this: DTableCheckable): string[] {
    return Object.keys(this.state.checkedRows);
}

const checkablePlugin: DTablePlugin<DTableCheckableTypes> = {
    name: 'checkable',
    defaultOptions: {
        checkable: 'auto',
    },
    when: options => !!options.checkable,
    options(options) {
        if (options.checkable === 'auto') {
            options.checkable = !!options.cols.some(col => col.checkbox);
        }
        return options;
    },
    state() {
        return {checkedRows: {}};
    },
    methods: {
        toggleCheckRows,
        isRowChecked,
        isAllRowChecked,
        getChecks,
    },
    i18n: {
        zh_cn: {
            checkedCountInfo: '已选择 {selected} 项',
            totalCountInfo: '共 {total} 项',
        },
        en: {
            checkedCountInfo: 'Selected {selected} items',
            totalCountInfo: 'Total {total} items',
        },
    },
    footer: {
        checkbox() {
            const checked = this.isAllRowChecked();
            return [
                <div style={{padding: '0 calc(3 * var(--space))', display: 'flex', alignItems: 'center'}} onClick={() => this.toggleCheckRows()}><input type="checkbox" checked={checked} /></div>,
            ];
        },
        checkedInfo(_, layout) {
            const checkedCount = this.getChecks().length;
            const texts: string[] = [];
            if (checkedCount) {
                texts.push(this.i18n('checkedCountInfo', {selected: checkedCount}));
            }
            texts.push(this.i18n('totalCountInfo', {total: layout.allRows.length}));
            return [
                <div>{texts.join(', ')}</div>,
            ];
        },
    },
    onRenderCell(result, {row, col}) {
        const {id: rowID} = row;
        const {canRowCheckable} = this.options;
        if (canRowCheckable && !canRowCheckable.call(this, rowID)) {
            return result;
        }
        const {checkbox: checkboxSetting} = col.setting;
        const showCheckbox = typeof checkboxSetting === 'function' ? checkboxSetting.call(this, rowID) : checkboxSetting;
        if (showCheckbox) {
            const checked = this.isRowChecked(rowID);
            const checkbox = this.options.checkboxRender?.call(this, checked, rowID) ?? (
                <input type="checkbox" checked={checked} />
            );
            result.unshift(checkbox);
            result.push({className: 'has-checkbox'});
        }
        return result;
    },
    onRenderHeaderCell(result, {row, col}) {
        const {id: rowID} = row;
        const {checkbox: checkboxSetting} = col.setting;
        const showCheckbox = typeof checkboxSetting === 'function' ? checkboxSetting.call(this, rowID) : checkboxSetting;
        if (showCheckbox) {
            const checked = this.isAllRowChecked();
            const checkbox = this.options.checkboxRender?.call(this, checked, rowID) ?? (
                <input type="checkbox" checked={checked} />
            );
            result.unshift(checkbox);
            result.push({className: 'has-checkbox'});
        }
        return result;
    },
    onRenderRow({props, row}) {
        if (!this.isRowChecked(row.id)) {
            return;
        }
        return {className: classes(props.className, 'is-checked')};
    },
    onHeaderCellClick(event) {
        const target = event.target as HTMLElement;
        if (!target) {
            return;
        }
        const checkbox = target.closest<HTMLInputElement>('input[type="checkbox"],.dtable-checkbox');
        if (checkbox) {
            this.toggleCheckRows(checkbox.checked);
            event.stopPropagation();
        }
    },
    onRowClick(event, {rowID}) {
        const target = event.target as HTMLElement;
        if (!target) {
            return;
        }
        const checkbox = target.closest<HTMLInputElement>('input[type="checkbox"],.dtable-checkbox');
        if (checkbox || this.options.checkOnClickRow) {
            this.toggleCheckRows(rowID);
        }
    },
};

export const checkable = definePlugin(checkablePlugin);
