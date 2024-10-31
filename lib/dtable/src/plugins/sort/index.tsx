import {definePlugin} from '../../helpers/shared-plugins';
import {createDate} from '@zui/helpers';

import type {DateLike} from '@zui/helpers';
import type {ColInfo, ColName} from '../../types/col';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {RowInfo} from '../../types';

export type ColSortOrder = 'asc' | 'desc' | 'none';

export type ColSortBy = {name: ColName, order: ColSortOrder};

export type ColSortFn = (this: DTableSort, row1: RowInfo, row2: RowInfo, col: ColInfo) => number;

export type ColSortFnName = string;

export type DTableSortTypes = {
    col: {
        sort: boolean | ColSortFn | ColSortFnName,
    },
    options: {
        sort?: boolean | ColSortFn | Record<ColSortFnName, ColSortFn>;
        sortBy?: ColSortBy | ColSortBy[];
        multiSort?: boolean;
    },
    state: {
        sortBy?: ColSortBy[];
    }
};

export type DTableSort = DTableWithPlugin<DTableSortTypes>;

const defaultSortFns: Record<ColSortFnName, ColSortFn> = {
    default: (row1, row2, col) => {
        const v1 = row1.data?.[col.name];
        const v2 = row2.data?.[col.name];
        if (v1 === v2) {
            return 0;
        }
        if (v1 === undefined || v1 === null) {
            return 1;
        }
        return String(v1).localeCompare(String(v2));
    },
    date: (row1, row2, col) => {
        const v1 = createDate(row1.data?.[col.name] as DateLike ?? 0);
        const v2 = createDate(row2.data?.[col.name] as DateLike ?? 0);
        return v1.getTime() - v2.getTime();
    },
    number: (row1, row2, col) => {
        const v1 = row1.data?.[col.name];
        const v2 = row2.data?.[col.name];
        return Number.parseFloat(v1 as string) - Number.parseFloat(v2 as string);
    },
};

const sortPlugin: DTablePlugin<DTableSortTypes> = {
    name: 'sort',
    defaultOptions: {sort: false},
    when: options => !!options.sort,
    onCreate() {
        const {sortBy} = this.options;
        if (sortBy) {
            this.state.sortBy = Array.isArray(sortBy) ? sortBy : [sortBy];
        }
    },
    onAddRows(rows, cols) {
        const {sortBy} = this.state;
        if (!sortBy || !sortBy.length) {
            return;
        }
        const {sort} = this.options;
        const sortFnMap = {
            ...defaultSortFns,
            ...(typeof sort === 'function' ? {default: sort} : (typeof sort === 'object' ? sort : {})),
        };
        return [...rows].sort((row1, row2) => {
            for (const {name, order} of sortBy) {
                const col = cols.map[name];
                if (!col) {
                    continue;
                }
                let sortFn = col.setting.sort as DTableSortTypes['col']['sort'];
                if (sortFn === true) {
                    sortFn = sortFnMap.default;
                } else if (typeof sortFn === 'string') {
                    sortFn = sortFnMap[sortFn];
                }
                if (!sortFn) {
                    continue;
                }
                const result = sortFn.call(this, row1, row2, col);
                if (result) {
                    return order === 'asc' ? result : -result;
                }
            }
            return 0;
        });
    },
    onHeaderCellClick(event, data) {
        if (!(event.target as HTMLElement).closest('.dtable-sort-link')) {
            return;
        }
        const col = this.getColInfo(data.colName);
        if (!col || !col.setting.sort) {
            return;
        }
        const {sortBy = []} = this.state;
        const oldOrderIndex = sortBy.findIndex(x => x.name === col.name);
        const {multiSort} = this.options;
        let newOrder: ColSortOrder = 'asc';
        if (oldOrderIndex >= 0) {
            const oldOrder = sortBy[oldOrderIndex].order;
            if (oldOrder === 'asc') {
                newOrder = 'desc';
            } else if (oldOrder === 'desc') {
                newOrder = 'none';
            }
            if (multiSort) {
                sortBy.splice(oldOrderIndex, 1);
            }
        }
        if (!multiSort) {
            sortBy.length = 0;
        }
        this.update({dirtyType: 'layout', state: {sortBy: [{name: data.colName, order: newOrder}, ...sortBy].filter(x => x.order !== 'none')}});
    },
    onRenderHeaderCell(result, info) {
        const {col} = info;
        const {sortBy} = this.state;
        const sort = col.setting.sort as DTableSortTypes['col']['sort'];
        if (!sort) {
            return result;
        }
        const order = sortBy?.find(x => x.name === col.name)?.order;
        const sortTypeName = order || 'none';
        const sortIcon = <div className={`dtable-sort dtable-sort-${sortTypeName}`} />;
        result[0] = <a className="dtable-sort-link" href="javascript:;">{result[0]}{sortIcon}</a>;
        result.push(
            {outer: true, attrs: {'data-sort': sortTypeName}},
        );
        return result;
    },
};

export const sort = definePlugin(sortPlugin, {buildIn: true});
