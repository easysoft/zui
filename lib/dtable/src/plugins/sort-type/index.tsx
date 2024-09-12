import {formatString} from '@zui/helpers';
import {definePlugin} from '../../helpers/shared-plugins';

import type {JSX} from 'preact';
import type {ColInfo} from '../../types/col';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {DTableSortTypes} from '../sort';

export type ColSortType = 'asc' | 'desc' | boolean;

export type DTableSortTypeTypes = {
    col: {
        sortType: ColSortType;
        sortLink?: string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((this: DTableSortType, col: ColInfo, sortType: string, currentSortType: string) => (string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>))),
    },
    options: {
        sortType?: boolean;
        sortLink?: string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>) | ((this: DTableSortType, col: ColInfo, sortType: string, currentSortType: string) => (string | ({url: string} & JSX.HTMLAttributes<HTMLAnchorElement>))),
        orderBy?: Record<string, ColSortType>
    }
};

export type DTableSortType = DTableWithPlugin<DTableSortTypeTypes, [DTableSortTypes]>;

const sortTypePlugin: DTablePlugin<DTableSortTypeTypes, [DTableSortTypes]> = {
    name: 'sort-type',
    defaultOptions: {sortType: true},
    when: options => !!options.sortType && !options.sort,
    onRenderHeaderCell(result, info) {
        const {col} = info;
        const {setting} = col;
        let {sortType: sortTypeSetting} = setting;
        if (col.setting.sort !== undefined || sortTypeSetting === false) {
            return result;
        }
        const {sortLink: defaultSortLink, orderBy} = this.options;
        if (orderBy && orderBy[col.name] !== undefined) {
            sortTypeSetting = orderBy[col.name];
        }
        if (sortTypeSetting) {
            const sortTypeName = sortTypeSetting === true ? 'none' : sortTypeSetting;
            const sortIcon = <div className={`dtable-sort dtable-sort-${sortTypeName}`} />;
            result.push(
                {outer: true, attrs: {'data-sort': sortTypeName}},
            );
            let {sortLink = defaultSortLink} = setting;
            if (sortLink) {
                const nextSortType = sortTypeName === 'asc' ? 'desc' : 'asc';
                if (typeof sortLink === 'function') {
                    sortLink = sortLink.call(this, col as unknown as ColInfo, nextSortType, sortTypeName);
                }
                if (typeof sortLink === 'string') {
                    sortLink = {url: sortLink};
                }
                const {url, ...linkProps} = sortLink;
                result[0] = <a className="dtable-sort-link" href={formatString(url, {...setting, sortType: nextSortType})} {...linkProps}>{result[0]}{sortIcon}</a>;
            } else {
                result.push(sortIcon);
            }
        }
        return result;
    },
};

export const sortType = definePlugin(sortTypePlugin, {buildIn: true});
