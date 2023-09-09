import {$} from '@zui/core';
import {SearchBox} from '@zui/search-box/src/components';
import {Menu} from './menu';

import type {ComponentChild, ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {NestedItem} from '@zui/list';
import type {SearchBoxOptions} from '@zui/search-box';
import type {SearchMenuOptions, SearchMenuState} from '../types';

export class SearchMenu<T extends SearchMenuOptions = SearchMenuOptions> extends Menu<T, SearchMenuState> {
    protected declare _searchKeys: string[];

    protected declare _searchControlled: boolean;

    constructor(props: T) {
        super(props);
        this._searchControlled = props.search !== undefined;
        (this.state as SearchMenuState).search = this._searchControlled ? props.search : props.defaultSearch;
        this._searchKeys = (this.constructor as typeof SearchMenu).getSearchKeys(this.state.search);
    }

    componentWillUpdate(nextProps: Readonly<T>): void {
        this._searchControlled = nextProps.search !== undefined;
        if (this._searchControlled && nextProps.search !== this.props.search) {
            this._searchKeys = (this.constructor as typeof SearchMenu).getSearchKeys(nextProps.search);
        }
    }

    protected _handleSearchChange = (search: string) => {
        const searchKeys = (this.constructor as typeof SearchMenu).getSearchKeys(search);
        this._searchKeys = searchKeys;
        this.setState({search: searchKeys.join(' ')});
    };

    protected _isItemMatch(props: RenderableProps<T>, item: NestedItem, index: number) {
        const {isItemMatch} = props;
        if (isItemMatch) {
            return isItemMatch.call(this, item, this._searchKeys, index);
        }
        return (this.constructor as typeof SearchMenu).isItemMatch(item, this._searchKeys);
    }

    protected _getItem(props: RenderableProps<T>, item: NestedItem, index: number): NestedItem | false {
        if (!this._isItemMatch(props, item, index)) {
            return false;
        }
        return super._getItem(props, item, index);
    }

    protected _getChildren(props: RenderableProps<T>): ComponentChildren {
        let children = super._getChildren(props);
        const {searchBox} = props;
        if (!searchBox) {
            return children;
        }
        children = children || [];
        if (!Array.isArray(children)) {
            children = [children];
        }
        const searchOptions: SearchBoxOptions = {
            onChange: this._handleSearchChange,
        };
        if (typeof searchBox === 'object') {
            $.extend(searchOptions, searchBox);
        }
        if (this._searchControlled) {
            searchOptions.value = this._searchKeys.join(' ');
            searchOptions.disabled = true;
        }
        (children as ComponentChild[]).push(<SearchBox key="search" {...searchOptions} />);
        return children;
    }

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return [super._getClassName(props), props.searchBox ? `search-menu search-menu-on-${props.searchPlacement || 'top'}` : ''];
    }

    /**
     * Check whether item is matched.
     *
     * @param item          Item to match.
     * @param searchKeys    Search keys.
     * @returns Whether item is matched.
     */
    static isItemMatch(item: Item & {keys?: string}, searchKeys: string[]) {
        if (!searchKeys.length) {
            return true;
        }
        const {keys, text, title, subtitle} = item;
        return searchKeys.every(searchKey => [keys, text, title, subtitle].some(x => typeof x === 'string' && x.length && x.toLowerCase().includes(searchKey)));
    }

    /**
     * Convert search string to search keys.
     *
     * @param search    Search string.
     * @returns Search keys array.
     */
    static getSearchKeys(search: string = ''): string[] {
        return $.unique((search).toLowerCase().split(' ').filter(x => x.length)) as string[];
    }
}
