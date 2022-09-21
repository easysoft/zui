import {classes} from '@zui/browser-helpers/src/classes';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';

type DTableCheckableTypes = {
    options: Partial<{
        checkable: boolean;
        checkOnClickRow: boolean;
        canRowCheckable: ((this: DTableCheckable, rowID: RowID) => boolean);
        beforeCheckRows: (this: DTableCheckable, ids: RowID[] | undefined, changes: Record<RowID, boolean>, checkedRows: Record<RowID, boolean>) => void;
        onCheckChange: (this: DTableCheckable, changes: Record<RowID, boolean>) => void;
        checkboxRender: (this: DTableCheckable, checked: boolean, rowID: RowID) => CustomRenderResult;
    }>,
    col: {
        checkbox?: boolean | ((this: DTableCheckable, rowID: RowID) => boolean);
    }
    methods: {
        toggleCheckRows: typeof toggleCheckRows;
        isRowChecked: typeof isRowChecked;
        isAllRowChecked: typeof isAllRowChecked;
        getChecks: typeof getChecks;
    },
    state: {
        checkedRows: Record<string, true>;
    }
};

type DTableCheckable = DTableWithPlugin<DTableCheckableTypes>;

function toggleCheckRows(this: DTableCheckable, ids?: RowID | RowID[] | boolean, checked?: boolean): Record<RowID, boolean> {
    if (typeof ids === 'boolean') {
        checked = ids;
        ids = undefined;
    }
    const checkedRows = this.state.checkedRows;
    const changes: Record<RowID, boolean> = {};
    const {canRowCheckable} = this.options;
    const toggleRow = (id: RowID, toggle: boolean) => {
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

function isRowChecked(this: DTableCheckable, rowID: RowID): boolean {
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

function getChecks(this: DTableCheckable): RowID[] {
    return Object.keys(this.state.checkedRows);
}

export const checkable: DTablePlugin<DTableCheckableTypes> = {
    name: 'checkable',
    defaultOptions: {checkable: true},
    when: options => !!options.checkable,
    state: {
        checkedRows: {},
    },
    methods: {
        toggleCheckRows,
        isRowChecked,
        isAllRowChecked,
        getChecks,
    },
    onRenderCell(result, {rowID, col}) {
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
    onRenderHeaderCell(result, {rowID, col}) {
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

export default definePlugin(checkable);
