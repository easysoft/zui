import {ComponentChildren, RefObject, RenderableProps, createRef} from 'preact';
import {classes, $, mergeProps} from '@zui/core';
import {SearchMenu} from '@zui/menu/src/component';
import {SearchTree} from '@zui/tree/src/components';
import {PickPop} from '@zui/pick/src/components';
import '@zui/css-icons/src/icons/close.css';

import type {NestedItem, NestedListItem} from '@zui/list';
import type {MenuOptions, SearchMenuOptions} from '@zui/menu';
import type {PickerMenuProps, PickerState} from '../types';

function getValueMap(items: NestedItem[], userMap?: Map<string, NestedItem>): Map<string, NestedItem> {
    return items.reduce<Map<string, NestedItem>>((map, item) => {
        if (Array.isArray(item.items)) {
            getValueMap(item.items as NestedItem[], map);
        }
        if (typeof item.value === 'string') {
            map.set(item.value as string, item);
        }
        return map;
    }, userMap || new Map());
}

export class PickerMenu extends PickPop<PickerState, PickerMenuProps> {
    protected _menu: RefObject<SearchMenu> = createRef();

    protected declare _hasCheckbox: boolean;

    protected declare _getItemCallback: MenuOptions['getItem'];

    protected declare _renderItemCallback: MenuOptions['beforeRenderItem'];

    protected _disabledSet: Set<string> = new Set();

    _getHoverItem() {
        const menu = this.element;
        if (!menu) {
            return;
        }
        return $(menu).find('.menu-item>a.hover');
    }

    _getItem = (item: NestedItem, index: number) => {
        if (item.parentKey !== undefined) {
            return item;
        }
        const valueSet = new Set(this.props.valueList);
        let subItems = item.items;
        let isAllItemsChecked = false;
        let hasSomeItemsChecked = false;
        if (Array.isArray(subItems)) {
            isAllItemsChecked = true;
            subItems = subItems.reduce<NestedItem[]>((list, subItem, subIndex) => {
                const finalSubItem = this._getItem(subItem, subIndex);
                if (finalSubItem) {
                    if (finalSubItem.active) {
                        hasSomeItemsChecked = true;
                    } else {
                        isAllItemsChecked = false;
                    }
                    list.push(finalSubItem);
                }
                return list;
            }, []);
        }
        const selected = isAllItemsChecked || valueSet.has(item.value as string);
        item = {
            ...item,
            active: selected,
            checked: (this._hasCheckbox || typeof item.checked === 'boolean') ? (isAllItemsChecked ? true : (hasSomeItemsChecked ? 'indeterminate' : selected)) : undefined,
            className: classes(item.className, {hover: item.value !== undefined && item.value === this.props.state.hoverItem}),
            items: subItems,
        };
        if (item.content && item.text) {
            delete item.text;
        }
        const result = this._getItemCallback?.call(this, item, index) ?? item;
        if (!result) {
            return result;
        }
        if (result.disabled) {
            this._disabledSet.add(result.value as string);
        }
        return result;
    };

    _beforeRenderItem = (item: NestedItem, index: number) => {
        return this._renderItemCallback?.call(this, item, index);
    };

    _handleItemClick = ({item, event}: {item: NestedListItem, event: MouseEvent, renderedItem: NestedItem}) => {
        const value = item.value as string;
        const target = event.target as HTMLElement;
        if (item.disabled || value === undefined || target.closest('.item-icon,.nested-toggle-icon,.disabled')) {
            return;
        }
        if (Array.isArray(item.items) && item.items.every(x => this._disabledSet.has(x.value as string))) {
            return;
        }
        const {multiple, onToggleValue, onSelect, togglePop, onDeselect} = this.props;
        if (multiple) {
            if (item.items) {
                const map = getValueMap(item.items as NestedItem[]);
                const values = [...map.values()].filter(x => !x.items && !this._disabledSet.has(x.value as string)).map(x => x.value as string);
                if ($(target).closest('.tree-item').children('.tree').children('.tree-item').children('.tree-item-inner.active').length) {
                    onDeselect(values);
                } else {
                    onSelect(values);
                }
            } else {
                onToggleValue(value);
            }
        } else {
            onSelect(value);
            togglePop(false, {search: ''});
        }
    };

    protected _getClass(props: RenderableProps<PickerMenuProps>): string {
        return classes(
            super._getClass(props),
            'picker-menu',
        );
    }

    protected _getMenuProps(props: RenderableProps<PickerMenuProps>): SearchMenuOptions {
        const {menu, tree, state, checkbox} = props;
        const {items, search} = state;
        return mergeProps({
            ref: this._menu,
            className: 'picker-menu-list',
            underlineKeys: true,
            items: items,
            defaultNestedShow: true,
            search: search,
            onClickItem: this._handleItemClick,
            nestedToggle: '.nested-toggle-icon,.item-icon',
            checkbox,
            searchProps: ['keys', 'text', 'title', 'subtitle', 'value'],
        }, menu, tree);
    }

    protected _renderPop(props: RenderableProps<PickerMenuProps>): ComponentChildren {
        const {tree} = props;
        this._disabledSet.clear();
        const menuProps = this._getMenuProps(props);
        this._hasCheckbox = !!menuProps.checkbox;
        this._getItemCallback = menuProps.getItem;
        this._renderItemCallback = menuProps.beforeRenderItem;
        menuProps.getItem = this._getItem;
        menuProps.beforeRenderItem = this._beforeRenderItem;
        if (tree) {
            return <SearchTree hover {...menuProps} />;
        }
        return <SearchMenu {...menuProps} />;
    }
}
