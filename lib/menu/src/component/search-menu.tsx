import {classes, $} from '@zui/core';
import {SearchBox} from '@zui/search-box/src/components';
import {Menu} from './menu';

import type {ComponentChild, JSX, VNode} from 'preact';
import type {SearchMenuState, MenuItemOptions, SearchMenuOptions, MenuItemProps} from '../types';
import type {SearchBoxOptions} from '@zui/search-box/src/types';
import type {ActionMenuItemOptions} from '@zui/action-menu/src/types';

const isItemMatch = (item: MenuItemProps & {keys?: string}, searchKeys: string[]) => {
    const {keys = '', text} = item;
    return !searchKeys.length || searchKeys.every(searchKey => keys.toLowerCase().includes(searchKey) || (typeof text === 'string' && text.toLowerCase().includes(searchKey)));
};

export class SearchMenu<T extends ActionMenuItemOptions = MenuItemOptions, O extends SearchMenuOptions<T> = SearchMenuOptions<T>, S extends SearchMenuState = SearchMenuState> extends Menu<T, O, S> {
    _searchKeys: string[] = [];

    _handleSearchChange = (search: string) => {
        this._searchKeys = $.unique(search.toLowerCase().split(' ').filter(x => x.length)) as string[];
        this.setState({search});
    };

    renderItem(props: Omit<O, 'items'> & {items: T[];}, item: T, index: number): JSX.Element | VNode<{}> | null {
        if (!isItemMatch(item, this._searchKeys)) {
            return null;
        }
        return super.renderItem(props, item, index);
    }

    beforeRender(): Omit<O, 'items'> & {items: T[];} {
        const {search = true, searchPlacement = 'top', ...options} = super.beforeRender();
        if (!search) {
            return options as Omit<O, 'items'> & {items: T[];};
        }
        options.className = classes(options.className, 'search-menu', `search-menu-on-${searchPlacement || 'top'}`);
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
        return options as Omit<O, 'items'> & {items: T[];};
    }
}
