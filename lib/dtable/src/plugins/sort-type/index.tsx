import type {JSX} from 'preact';
import {definePlugin} from '../../helpers/shared-plugins';
import type {ColInfo} from '../../types/col';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import {formatString} from '@zui/helpers/src/format-string';

export type ColSortType = 'asc' | 'desc' | boolean;

export type DTableSortTypeTypes = {
    col: {
        sortType: ColSortType;
        sortLink?: string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((this: DTableSortType, col: ColInfo, sortType: string, currentSortType: string) => (string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>))),
    },
    options: {
        sortLink?: string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((this: DTableSortType, col: ColInfo, sortType: string, currentSortType: string) => (string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>))),
    }
};

export type DTableSortType = DTableWithPlugin<DTableSortTypeTypes>;

const sortTypePlugin: DTablePlugin<DTableSortTypeTypes> = {
    name: 'sort-type',
    onRenderHeaderCell(result, info) {
        const {row, col} = info;
        const {sortType: sortTypeSetting} = col.setting;
        if (sortTypeSetting) {
            const sortTypeName = sortTypeSetting === true ? 'none' : sortTypeSetting;
            result.push(
                <div className={`dtable-sort dtable-sort-${sortTypeName}`} />,
                {outer: true, attrs: {'data-sort': sortTypeName}},
            );
            let {sortLink = this.options.sortLink} = col.setting;
            if (sortLink) {
                const nextSortType = sortTypeName === 'asc' ? 'desc' : 'asc';
                if (typeof sortLink === 'function') {
                    sortLink = sortLink.call(this, col as ColInfo, nextSortType, sortTypeName);
                }
                if (typeof sortLink === 'string') {
                    sortLink = {url: sortLink};
                }
                const {url, ...linkProps} = sortLink;
                result.push(<a href={formatString(url, info.row.data)} {...linkProps}></a>);
            }
        }
        return result;
    },
};

export const sortType = definePlugin(sortTypePlugin, {buildIn: true});
