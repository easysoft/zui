import {classes} from '@zui/browser-helpers/src/classes';
import {DTable} from '../../dtable-react';
import {ColInfo} from '../../types/col-info';
import {CustomRenderResult} from '../../types/custom-render-result';
import {DTablePlugin} from '../../types/plugin';
import {RowInfo} from '../../types/row-info';
import {RowProps} from '../../types/row-props';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';
import {RowID} from '../../types/row-data';

function toggleCheckRows(this: DTable, rowID: RowID | (RowID)[], checked?: boolean) {
    let checkedRows: Record<string, boolean> = this.state.checkedRows as Record<string, true> ?? {};
    if (rowID === 'HEADER') {
        if (checked === undefined) {
            checked = !isAllRowChecked.call(this);
        }
        if (checked) {
            this.layout?.allRows.forEach(row => {
                checkedRows[row.id] = true;
            });
        } else {
            checkedRows = {};
        }
    } else {
        const ids = Array.isArray(rowID) ? rowID : [rowID];
        if (checked === undefined) {
            checked = !checkedRows[ids[0]];
        }
        ids.forEach(id => {
            if (checked) {
                checkedRows[id] = true;
            } else {
                delete checkedRows[id];
            }
        });
    }
    this.setState({checkedRows: {...checkedRows}});

    // TODO: Call onCheckChange
}

function isRowChecked(this: DTable, rowID: RowID): boolean {
    const checkedRows: Record<string, boolean> = this.state.checkedRows as Record<string, true>;
    if (!checkedRows) {
        return false;
    }
    return !!checkedRows[rowID];
}

function isAllRowChecked(this: DTable): boolean {
    const checkedRows: Record<string, boolean> = this.state.checkedRows as Record<string, true>;
    if (!checkedRows) {
        return false;
    }
    return Object.keys(checkedRows).length === this.layout?.allRows.length;
}

export interface DTableCheckableOptions {
    checkable?: boolean;
    checkOnClickRow?: boolean;
    onCheckChange?: () => void;
}

export interface DTableCheckableState {
    checkedRows?: Record<string, boolean>;
}

export interface DTableCheckableColSetting {
    checkbox?: boolean;
}

export interface DTableCheckableMethods {
    toggleCheckRows: typeof toggleCheckRows;
    isRowChecked: typeof isRowChecked;
    isAllRowChecked: typeof isAllRowChecked;
}

export const checkable: DTablePlugin<DTableCheckableOptions, DTableCheckableState, DTableCheckableColSetting, DTableCheckableMethods> = {
    name: 'checkable',
    defaultOptions: {checkable: true},
    when: options => !!options.checkable,
    onCreate() {
        this.toggleCheckRows = toggleCheckRows.bind(this);
        this.isRowChecked = isRowChecked.bind(this);
        this.isAllRowChecked = isAllRowChecked.bind(this);
    },
    onRenderCell(result: CustomRenderResult, rowID: RowID, col: ColInfo): CustomRenderResult {
        if (col.setting.checkbox) {
            const checked = this.isRowChecked(rowID);
            const checkbox = (
                <input type="checkbox" checked={checked} />
            );
            result.unshift(checkbox);
            result.push({className: 'has-checkbox'});
        }
        return result;
    },
    onRenderHeaderCell(result: CustomRenderResult, rowID: RowID, col: ColInfo) {
        if (col.setting.checkbox) {
            const checked = this.isAllRowChecked();
            const checkbox = (
                <input type="checkbox" checked={checked} />
            );
            result.unshift(checkbox);
            result.push({className: 'has-checkbox'});
        }
        return result;
    },
    onRenderRow(rowProps: RowProps, rowInfo: RowInfo): RowProps {
        if (this.isRowChecked(rowInfo.id)) {
            rowProps.className = classes(rowProps.className, 'is-checked');
        }
        return rowProps;
    },
    onHeaderCellClick(event) {
        const target = event.target as HTMLElement;
        if (!target) {
            return;
        }
        const checkbox = target.closest<HTMLInputElement>('input[type="checkbox"]');
        if (checkbox) {
            return this.toggleCheckRows('HEADER', checkbox.checked);
        }
    },
    onRowClick(event, {rowID}) {
        const target = event.target as HTMLElement;
        if (!target) {
            return;
        }
        const checkbox = target.closest<HTMLInputElement>('input[type="checkbox"]');
        if (checkbox || this.options.checkOnClickRow) {
            return this.toggleCheckRows(rowID);
        }
    },
};

export default definePlugin<DTableCheckableOptions, DTableCheckableState, DTableCheckableColSetting, DTableCheckableMethods>(checkable);
