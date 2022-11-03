import {definePlugin} from '../../helpers/shared-plugins';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';

export type ColSortType = 'asc' | 'desc' | boolean;

export type DTableSortTypeTypes = {
    col: {
        sortType: ColSortType;
    }
};

export type DTableSortType = DTableWithPlugin<DTableSortTypeTypes>;

export const colHover: DTablePlugin<DTableSortTypeTypes> = {
    name: 'sort-type',
    onRenderHeaderCell(result, {col}) {
        const {sortType} = col.setting;
        const sortTypeName = sortType === true ? 'none' : sortType;
        if (sortType) {
            result.push(
                <div className={`dtable-sort dtable-sort-${sortTypeName}`} />,
            );
        }
        result.push({outer: true, attrs: {'data-type': col.type || null, 'data-sort': sortTypeName}});
        return result;
    },
};

export default definePlugin(colHover, {buildIn: true});
