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

    protected _firstSelected?: string;

    get menu() {
        return this._menu.current;
    }

    get picker() {
        return this.props.picker;
    }

    componentDidMount(): void {
        super.componentDidMount();
        if (this._firstSelected === undefined) {
            this.menu?.activeNext();
        } else {
            this.menu?.toggleActive(this._firstSelected, true);
        }

        $(this.element).on('activeNext.zui.Picker', () => {
            this.menu?.activeNext();
        }).on('activePrev.zui.Picker', () => {
            this.menu?.activePrev();
        }).on('selectActive.zui.Picker', () => {
            const menu = this.menu;
            if (!menu) {
                return;
            }
            const active = menu.getActiveKey();
            if (active !== undefined) {
                const item = menu.getRenderedItem(active);
                if (item) {
                    $(this.element).find(`.item[z-key-path="${item._keyPath}"]`).trigger('click');
                }
            }
        }).on('hidePop.zui.Picker', () => {
            this.props.togglePop(false);
        });
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
        $(this.element).off('.zui.Picker');
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
                    if (finalSubItem.selected) {
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
            selected,
            hint: typeof item.text === 'string' ? item.text : undefined,
            ...item,
            checked: (this._hasCheckbox || typeof item.checked === 'boolean') ? (isAllItemsChecked ? true : (hasSomeItemsChecked ? 'indeterminate' : selected)) : undefined,
            className: classes(item.className, {hover: item.value !== undefined && item.value === this.props.state.hoverItem}),
            items: subItems,
        };
        if (selected && !item.disabled && this._firstSelected === undefined) {
            this._firstSelected = item.key!;
        }
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
                if ($(target).closest('.item').children('.item-inner.selected').length) {
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
        const {menu, tree, state, checkbox, header, footer, noMatchHint, maxItemsCount, exceedLimitHint} = props;
        const {items, search} = state;

        return mergeProps({
            ref: this._menu,
            className: 'picker-menu-list',
            underlineKeys: true,
            limit: maxItemsCount,
            items: items,
            defaultNestedShow: true,
            activeOnHover: true,
            search: search,
            exceedLimitHint,
            onClickItem: this._handleItemClick,
            nestedToggle: '.nested-toggle-icon,.item-icon',
            checkbox,
            searchProps: ['keys', 'text', 'title', 'subtitle', 'value'],
            header,
            footer,
            noMatchHint,
            relativeTarget: this,
        }, menu, tree);
    }

    protected _renderPop(props: RenderableProps<PickerMenuProps>): ComponentChildren {
        const {tree} = props;
        this._firstSelected = undefined;
        this._disabledSet.clear();
        const menuProps = this._getMenuProps(props);
        this._hasCheckbox = !!menuProps.checkbox;
        this._getItemCallback = menuProps.getItem;
        this._renderItemCallback = menuProps.beforeRenderItem;
        menuProps.getItem = this._getItem;
        menuProps.beforeRenderItem = this._beforeRenderItem;
        if (tree) {
            return <SearchTree {...menuProps} />;
        }
        return <SearchMenu {...menuProps} />;
    }
}
