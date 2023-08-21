import {classes, $} from '@zui/core';
import {SearchBox} from '@zui/search-box/src/components';
import {Menu} from './menu';

import type {ComponentChild, JSX, VNode} from 'preact';
import type {SearchMenuState, MenuItemOptions, SearchMenuOptions, MenuItemProps} from '../types';
import type {SearchBoxOptions} from '@zui/search-box/src/types';

const isItemMatch = (item: MenuItemProps & {keys?: string}, searchKeys: string[]) => {
    const {keys = '', text} = item;
    return !searchKeys.length || searchKeys.every(searchKey => keys.toLowerCase().includes(searchKey) || (typeof text === 'string' && text.toLowerCase().includes(searchKey)));
};

export class SearchMenu extends Menu<MenuItemOptions, SearchMenuOptions, SearchMenuState> {
    _searchKeys: string[] = [];

    _handleSearchChange = (search: string) => {
        this._searchKeys = $.unique(search.toLowerCase().split(' ').filter(x => x.length)) as string[];
        this.setState({search});
    };

    renderItem(props: Omit<SearchMenuOptions, 'items'> & {items: MenuItemOptions[];}, item: MenuItemOptions, index: number): JSX.Element | VNode<{}> | null {
        if (!isItemMatch(item, this._searchKeys)) {
            return null;
        }
        return super.renderItem(props, item, index);
    }

    beforeRender(): Omit<SearchMenuOptions, 'items'> & {items: MenuItemOptions[];} {
        const options = super.beforeRender();
        const {search = true} = options;
        if (!search) {
            return options;
        }
        options.className = classes(options.className, 'search-menu', `search-menu-on-${options.searchPlacement || 'top'}`);
        options.children = options.children ? (Array.isArray(options.children) ? options.children : [options.children]) : [];
        const searchOptions: SearchBoxOptions = {
            onChange: this._handleSearchChange,
        };
        if (typeof search === 'object') {
            Object.assign(searchOptions, search);
        }
        (options.children as ComponentChild[]).push(
            <SearchBox key="search" {...searchOptions} />,
        );
        return options;
    }
}
