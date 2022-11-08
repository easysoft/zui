import {definePlugin} from '../../helpers/shared-plugins';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';

export type ColSortType = 'asc' | 'desc' | boolean;

export type DTableSortTypeTypes = {
    col: {
        sortType: ColSortType;
    }
};

export type DTableSortType = DTableWithPlugin<DTableSortTypeTypes>;

const sortTypePlugin: DTablePlugin<DTableSortTypeTypes> = {
    name: 'sort-type',
    onRenderHeaderCell(result, {col}) {
        const {sortType: sortTypeSetting} = col.setting;
        const sortTypeName = sortTypeSetting === true ? 'none' : sortTypeSetting;
        if (sortTypeSetting) {
            result.push(
                <div className={`dtable-sort dtable-sort-${sortTypeName}`} />,
            );
        }
        result.push({outer: true, attrs: {'data-type': col.type || null, 'data-sort': sortTypeName}});
        return result;
    },
};

export const sortType = definePlugin(sortTypePlugin, {buildIn: true});
