import {$, classes} from '@zui/core';
import {SearchBox} from '@zui/search-box/src/components';
import {Menu} from './menu';

import {type ComponentChild, type ComponentChildren, type RenderableProps} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {Item, ItemKey} from '@zui/common-list';
import type {ListItemsSetting, NestedItem, NestedListItem, NestedListProps} from '@zui/list';
import type {SearchBoxOptions} from '@zui/search-box';
import type {SearchMenuOptions, SearchMenuState} from '../types';

export class SearchMenu<T extends SearchMenuOptions = SearchMenuOptions> extends Menu<T, SearchMenuState> {
    static inheritNestedProps = [...Menu.inheritNestedProps, 'isItemMatch', 'search', 'underlineKeys'];

    static defaultProps: Partial<SearchMenuOptions> = {
        ...Menu.defaultProps,
        defaultNestedShow: true,
        wrap: true,
    };

    protected declare _searchKeys: string[];

    protected declare _matchedParents: Set<string>;

    protected declare _showCount: number;

    constructor(props: T) {
        super(props);
        (this.state as SearchMenuState).search = props.search ?? props.defaultSearch;
        this._searchKeys = (this.constructor as typeof SearchMenu).getSearchKeys(this.state.search);
        this._isNestedItemMatch = this._isNestedItemMatch.bind(this);
    }

    componentWillUpdate(nextProps: Readonly<T>): void {
        if (this.isRoot) {
            if (nextProps.search !== undefined && nextProps.search !== this.props.search) {
                this._searchKeys = (this.constructor as typeof SearchMenu).getSearchKeys(nextProps.search);
            }
        }
    }

    componentDidMount(): void {
        super.componentDidMount();
        this._updateMatchedParents();
    }

    componentDidUpdate(): void {
        super.componentDidUpdate();
        this._updateMatchedParents();
    }

    isExpanded(keyPath: string): boolean {
        if (this.props.expandOnSearch && this._searchKeys.length) {
            return true;
        }
        return super.isExpanded(keyPath);
    }

    protected _updateMatchedParents(): void {
        if (!this.isRoot) {
            return;
        }
        const $element = $(this.element);
        const $matchedChildren = $element.find('.item.is-nested.is-not-match').filter((_, element) => this._matchedParents.has(element.getAttribute('z-key-path') || '')).addClass('has-match-child');
        $element.parent().toggleClass('no-match-child', !!this._searchKeys?.length && !$matchedChildren.length && !$element.children('.item').not('.is-not-match').length);
    }

    protected _handleSearchChange = (search: string) => {
        const searchKeys = (this.constructor as typeof SearchMenu).getSearchKeys(search);
        this._searchKeys = searchKeys;
        this.setState({search: searchKeys.join(' ')});
    };

    protected _isItemMatch(props: RenderableProps<T>, item: NestedItem, index: number, parentKey: ItemKey | undefined) {
        const {isItemMatch} = props;
        const isMatch = isItemMatch ? isItemMatch.call(this, item, this._searchKeys, index, parentKey) : (this.constructor as typeof SearchMenu).isItemMatch(item, this._searchKeys, props.searchProps);
        if (this.isRoot && isMatch && parentKey !== undefined) {
            let key = '';
            String(parentKey).split(':').forEach(x => {
                key += `${key.length ? ':' : ''}${x}`;
                this._matchedParents.add(key);
            });
        }
        return isMatch;
    }

    protected _isNestedItemMatch(item: NestedItem, _searchKeys: string[], index: number, parentKey: ItemKey | undefined): boolean {
        return this._isItemMatch(this.props, item, index, parentKey);
    }

    protected _getNestedProps(props: RenderableProps<T>, items: ListItemsSetting, item: NestedItem, expanded: boolean): NestedListProps<NestedListItem> {
        const nestedProps = super._getNestedProps(props, items, item, expanded) as SearchMenuOptions;
        if (this.isRoot) {
            nestedProps.isItemMatch = this._isNestedItemMatch;
            nestedProps.search = this._searchKeys.join(' ');
        }
        return nestedProps;
    }

    protected _getItem(props: RenderableProps<T>, item: NestedItem, index: number): NestedItem | false {
        const finalItem = super._getItem(props, item, index);
        if (!finalItem) {
            return finalItem;
        }
        if (this.isRoot && this.props.limit && this._showCount >= this.props.limit) {
            return false;
        }
        finalItem.hidden = !this._isItemMatch(props, item, index, props.parentKey);
        if (!finalItem.hidden) {
            this._showCount++;
        }
        return finalItem;
    }

    protected _renderItem(props: RenderableProps<T>, item: Item, index: number): ComponentChildren {
        item.className = [item.className, item.hidden ? 'is-not-match' : ''];
        if (props.underlineKeys && this._searchKeys.length) {
            ['text', 'title', 'subtitle', 'content'].forEach(key => {
                if (typeof item[key] === 'string') {
                    item[key] = (this.constructor as typeof SearchMenu).underlineKeys(this._searchKeys, [item[key] as string]);
                }
            });
        }
        return super._renderItem(props, item, index);
    }

    protected _getWrapClass(props: RenderableProps<T>): ClassNameLike {
        const isSearchMode = this.isRoot && this._searchKeys.length;
        return classes(super._getWrapClass(props), 'search-menu', props.searchBox ? `search-menu-on-${props.searchPlacement || 'top'}` : '', isSearchMode ? 'is-search-mode' : '', isSearchMode && props.expandOnSearch ? 'no-toggle-on-search' : '');
    }

    protected _renderSearchBox(props: RenderableProps<T>): ComponentChildren {
        const {searchBox} = props;
        if (!searchBox || !this.isRoot) {
            return null;
        }
        const searchOptions: SearchBoxOptions = {
            compact: true,
            onChange: this._handleSearchChange,
        };
        if (typeof searchBox === 'object') {
            $.extend(searchOptions, searchBox);
        }
        if (props.search !== undefined) {
            searchOptions.value = this._searchKeys.join(' ');
            searchOptions.disabled = true;
        }
        return <SearchBox key="search" {...searchOptions} />;
    }

    protected _renderWrapperHeader(props: RenderableProps<T>): ComponentChildren {
        const hasHeader = props.header;
        const hasTopSearchBox = this.isRoot && props.searchBox && props.searchPlacement !== 'bottom';
        const {noMatchHint} = props;
        if (!hasHeader && !hasTopSearchBox && !noMatchHint) {
            return null;
        }
        return [
            noMatchHint ? <div key="noMatchHint" className="search-menu-no-match-hint">{noMatchHint}</div> : null,
            (hasHeader || hasTopSearchBox) ? (<header key="header" className="search-menu-header">
                {hasHeader ? super._renderWrapperHeader(props) : null}
                {hasTopSearchBox ? this._renderSearchBox(props) : null}
            </header>) : null,
        ];
    }

    protected _renderWrapperFooter(props: RenderableProps<T>): ComponentChildren {
        const hasFooter = props.footer;
        const hasBottomSearchBox = this.isRoot && props.searchBox && props.searchPlacement === 'bottom';
        if (!hasFooter && !hasBottomSearchBox) {
            return null;
        }
        return (
            <footer key="footer" className="search-menu-footer">
                {hasFooter ? super._renderWrapperFooter(props) : null}
                {this._renderSearchBox(props)}
            </footer>
        );
    }

    protected _beforeRender(props: RenderableProps<T>): void | RenderableProps<T> | undefined {
        if (this.isRoot) {
            this._matchedParents = new Set();
            this._showCount = 0;
        }
        return super._beforeRender(props);
    }

    /**
     * Check whether item is matched.
     *
     * @param item          Item to match.
     * @param searchKeys    Search keys.
     * @returns Whether item is matched.
     */
    static isItemMatch(item: Item, searchKeys: string[], searchProps = ['keys', 'text', 'title', 'subtitle']) {
        if (!searchKeys.length) {
            return true;
        }
        return searchKeys.every(searchKey => searchProps.some(propName => {
            const propValue = item[propName];
            return typeof propValue === 'string' && propValue.length && propValue.toLowerCase().includes(searchKey);
        }));
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

    static underlineKeys(searchKeys: string[], text: string[], className = 'is-match-keys'): ComponentChild[] {
        return searchKeys.reduce<ComponentChild[]>((result, key) => {
            return [...result].reduce<ComponentChild[]>((list, span) => {
                if (typeof span !== 'string') {
                    list.push(span);
                    return list;
                }
                const parts = span.toLowerCase().split(key);
                if (parts.length === 1) {
                    list.push(span);
                    return list;
                }
                let start = 0;
                parts.forEach((part, index) => {
                    if (index) {
                        list.push(<span class={className}>{span.substring(start, start + key.length)}</span>);
                        start += key.length;
                    }
                    list.push(span.substring(start, start + part.length));
                    start += part.length;
                });
                return list;
            }, []);
        }, text);
    }
}
