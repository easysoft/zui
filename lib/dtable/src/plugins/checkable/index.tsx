import {classes} from '@zui/browser-helpers/src/classes';
import {DTable} from '../../dtable-react';
import {ColInfo} from '../../types/col-info';
import {CustomRenderResult} from '../../types/custom-render-result';
import {DTablePlugin} from '../../types/plugin';
import {RowInfo} from '../../types/row-info';
import {RowProps} from '../../types/row-props';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';

function toggleRows(this: DTable, rowID: string | number | (string | number)[], checked?: boolean) {
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
}

function isRowChecked(this: DTable, rowID: string | number): boolean {
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
}

export interface DTableCheckableState {
    checkedRows?: Record<string, boolean>;
}

export interface DTableCheckableColSetting {
    checkbox?: boolean;
}

export interface DTableCheckableMethods {
    toggleRows: typeof toggleRows;
    isRowChecked: typeof isRowChecked;
    isAllRowChecked: typeof isAllRowChecked;
}

export const plugin: DTablePlugin<DTableCheckableOptions, DTableCheckableState, DTableCheckableColSetting, DTableCheckableMethods> = {
    name: 'checkable',
    defaultOptions: {checkable: true},
    onCreate() {
        this.toggleRows = toggleRows.bind(this);
        this.isRowChecked = isRowChecked.bind(this);
        this.isAllRowChecked = isAllRowChecked.bind(this);
    },
    onRenderCell(result: CustomRenderResult, rowID: string | number, col: ColInfo): CustomRenderResult {
        if (col.setting.checkbox) {
            const isHeader = rowID === 'HEADER';
            const checked = isHeader ? this.isAllRowChecked() : this.isRowChecked(rowID);
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
            return this.toggleRows('HEADER', checkbox.checked);
        }
    },
    onRowClick(event, {rowID}) {
        const target = event.target as HTMLElement;
        if (!target) {
            return;
        }
        const checkbox = target.closest<HTMLInputElement>('input[type="checkbox"]');
        if (checkbox || this.options.checkOnClickRow) {
            return this.toggleRows(rowID);
        }
    },
};

export default definePlugin<DTableCheckableOptions, DTableCheckableState, DTableCheckableColSetting, DTableCheckableMethods>(plugin);
