import {$} from '@zui/core';
import {SearchBox} from '@zui/search-box/src/components';
import {Menu} from './menu';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {Item, NestedItem} from '@zui/list';
import type {SearchBoxOptions} from '@zui/search-box';
import type {SearchMenuOptions, SearchMenuState} from '../types';

export class SearchMenu<T extends SearchMenuOptions = SearchMenuOptions> extends Menu<T, SearchMenuState> {
    static defaultProps = {
        ...Menu.defaultProps,
        search: true,
    };

    static isItemMatch(item: Item & {keys?: string}, searchKeys: string[]) {
        const {keys = '', text} = item;
        return !searchKeys.length || searchKeys.every(searchKey => keys.toLowerCase().includes(searchKey) || (typeof text === 'string' && text.toLowerCase().includes(searchKey)));
    }

    protected _searchKeys: string[] = [];

    _handleSearchChange = (search: string) => {
        this._searchKeys = $.unique(search.toLowerCase().split(' ').filter(x => x.length)) as string[];
        this.setState({search});
    };

    protected _getItem(props: RenderableProps<T>, item: NestedItem, index: number): NestedItem | undefined {
        if (!(this.constructor as typeof SearchMenu).isItemMatch(item, this._searchKeys)) {
            return;
        }
        return super._getItem(props, item, index);
    }

    protected _getChildren(props: RenderableProps<T>): ComponentChildren {
        let children = super._getChildren(props);
        const {search} = props;
        if (!search) {
            return children;
        }
        children = children || [];
        if (!Array.isArray(children)) {
            children = [children];
        }
        const searchOptions: SearchBoxOptions = {
            onChange: this._handleSearchChange,
        };
        if (typeof search === 'object') {
            $.extend(searchOptions, search);
        }
        (children as ComponentChild[]).push(<SearchBox key="search" {...searchOptions} />);
        return children;
    }

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return [super._getClassName(props), props.search ? `search-menu search-menu-on-${props.searchPlacement || 'top'}` : ''];
    }
}
