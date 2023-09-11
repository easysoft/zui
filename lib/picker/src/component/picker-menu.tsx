import {ComponentChildren, RefObject, RenderableProps, createRef} from 'preact';
import {classes, $, mergeProps} from '@zui/core';
import {SearchMenu} from '@zui/menu/src/component';
import {SearchTree} from '@zui/tree/src/components';
import {PickPop} from '@zui/pick/src/components';
import '@zui/css-icons/src/icons/close.css';

import type {NestedItem, NestedListItem} from '@zui/list';
import type {PickerMenuProps, PickerState} from '../types';
import {MenuOptions, SearchMenuOptions} from '@zui/menu/src/types';

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
    protected _menu: RefObject<HTMLDivElement> = createRef();

    protected declare _hasCheckbox: boolean;

    protected declare _getItemCallback: MenuOptions['getItem'];

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
        if (Array.isArray(subItems)) {
            isAllItemsChecked = true;
            subItems = subItems.reduce<NestedItem[]>((list, subItem, subIndex) => {
                const finalSubItem = this._getItem(subItem, subIndex);
                if (finalSubItem) {
                    if (!finalSubItem.active) {
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
            checked: (this._hasCheckbox || typeof item.checked === 'boolean') ? selected : undefined,
            className: classes(item.className, {hover: item.value !== undefined && item.value === this.props.state.hoverItem}),
            items: subItems,
        };
        const result = this._getItemCallback?.call(this, item, index);
        return result ?? item;
    };

    _handleItemClick = ({item, event}: {item: NestedListItem, event: MouseEvent}) => {
        const value = item.value as string;
        if (item.disabled || value === undefined || (event.target as HTMLElement).closest('.item-icon,.nested-toggle-icon,.disabled')) {
            return;
        }
        const {multiple, onToggleValue, onSelect, togglePop, onDeselect} = this.props;
        if (multiple) {
            if (item.items) {
                const map = getValueMap(item.items as NestedItem[]);
                const values = [...map.values()].filter(x => !x.items).map(x => x.value as string);
                if ((event.target as HTMLElement).closest('.item-inner.active')) {
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
        const menuProps = this._getMenuProps(props);
        this._hasCheckbox = !!menuProps.checkbox;
        this._getItemCallback = menuProps.getItem;
        menuProps.getItem = this._getItem;
        if (tree) {
            return <SearchTree hover {...menuProps} />;
        }
        return <SearchMenu {...menuProps} />;
    }
}
