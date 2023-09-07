import {ComponentChild, ComponentChildren, RefObject, RenderableProps, createRef} from 'preact';
import {classes, $, CustomContent} from '@zui/core';
import {Menu} from '@zui/menu/src/component/menu';
import {PickPop} from '@zui/pick/src/components';
import '@zui/css-icons/src/icons/close.css';

import type {Item, NestedItem} from '@zui/list';
import type {PickerMenuProps, PickerState} from '../types';

export const underlineKeys = (searchKeys: string[], text: string[], className = 'is-match'): ComponentChild[] => {
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
};


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

    componentDidMount(): void {
        super.componentDidMount();
        const menu = this.element;
        if (menu) {
            $(menu).on('mouseenter.picker.zui', '.menu-item', (event) => {
                const $item = $(event.currentTarget);
                this.setHoverItem($item.children('a').attr('data-value') ?? '');
            });
        }
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
        const menu = this.element;
        if (menu) {
            $(menu).off('.picker.zui');
        }
    }

    setHoverItem(value: string) {
        this.props.changeState({hoverItem: value}, () => {
            const $hoverItem = this._getHoverItem();
            if ($hoverItem?.length) {
                $hoverItem.scrollIntoView({block: 'nearest', behavior: 'smooth'});
            }
        });
    }

    _getHoverItem() {
        const menu = this.element;
        if (!menu) {
            return;
        }
        return $(menu).find('.menu-item>a.hover');
    }

    _getMenuItems(): Item[] {
        const {selections, items, hoverItem: hover, search} = this.props.state;
        const selectionsSet = new Set(selections.map(x => x.value));
        let hasHover = false;
        const hasCheckbox = this.props.menu?.checkbox;
        const searchKeys = $.unique(search.toLowerCase().split(' ').filter(x => x.length)) as string[];
        const getItem = (item: NestedItem) => {
            const {
                key,
                value = '',
                keys,
                text,
                className,
                content,
                ...others
            } = item;
            if (value === hover) {
                hasHover = true;
            }
            let itemItems = others.items;
            let isAllItemsChecked = false;
            if (Array.isArray(itemItems)) {
                isAllItemsChecked = true;
                itemItems = itemItems.map(subItem => {
                    subItem = getItem(subItem);
                    if (!subItem.active) {
                        isAllItemsChecked = false;
                    }
                    return subItem;
                });
            }
            const selected =  isAllItemsChecked || selectionsSet.has(value);
            return {
                key,
                value,
                active: selected,
                checked: hasCheckbox ? selected : undefined,
                text: content ? null : (typeof text === 'string' ? underlineKeys(searchKeys, [text]) : <CustomContent content={text} />),
                className: classes(className, {hover: value === hover}),
                'data-value': value || '',
                content,
                innerComponent: itemItems ? 'div' : 'a',
                ...others,
                items: itemItems,
            };
        };
        const menuItems = items.map(getItem);
        if (!hasHover && menuItems.length) {
            menuItems[0].className = classes(menuItems[0].className, 'hover');
        }
        return menuItems;
    }

    _handleItemClick = ({item, event}: {item: Item, event: MouseEvent}) => {
        const value = item.value as string;
        if (value === undefined || (event.target as HTMLElement).closest('.item-icon,.list-toggle-icon')) {
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

    protected _renderPop(props: RenderableProps<PickerMenuProps>): ComponentChildren {
        const {menu} = props;
        return (
            <Menu
                ref={this._menu}
                className="picker-menu-list"
                items={this._getMenuItems()}
                onClickItem={this._handleItemClick}
                defaultNestedShow
                {...menu}
            />
        );
    }
}
