import {ComponentChild, ComponentChildren, RefObject, RenderableProps, createRef} from 'preact';
import {classes, $} from '@zui/core';
import {Menu} from '@zui/menu/src/component/menu';
import {MenuItemProps} from '@zui/menu/src/types';
import {PickPop} from '@zui/pick/src/components';
import {PickerMenuProps, PickerState} from '../types';
import '@zui/css-icons/src/icons/close.css';

const underlineWithSearchKeys = (searchKeys: string[], text: string[]): ComponentChild[] => {
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
                    list.push(<span class="picker-menu-item-match">{span.substring(start, start + key.length)}</span>);
                    start += key.length;
                }
                list.push(span.substring(start, start + part.length));
                start += part.length;
            });
            return list;
        }, []);
    }, text);
};

export class PickerMenu extends PickPop<PickerState, PickerMenuProps> {
    #menu: RefObject<HTMLDivElement> = createRef();

    componentDidMount(): void {
        super.componentDidMount();
        const menu = this.element;
        if (menu) {
            $(menu).on('mouseenter.picker.zui', '.menu-item', (event) => {
                const $item = $(event.currentTarget);
                this.setHoverItem($item.children('a').dataset('value') as string);
            });
        }
    }

    componentWillUnmount(): void {
        super.componentDidMount();
        const menu = this.element;
        if (menu) {
            $(menu).off('.picker.zui');
        }
    }

    setHoverItem(value: string) {
        this.props.changeState({hoverItem: value}, () => {
            const $hoverItem = this.#getHoverItem();
            if ($hoverItem?.length) {
                $hoverItem[0]!.scrollIntoView({block: 'nearest', behavior: 'smooth'});
            }
        });
    }

    #getHoverItem() {
        const menu = this.element;
        if (!menu) {
            return;
        }
        return $(menu).find('.menu-item>a.hover');
    }

    #getMenuItems(): MenuItemProps[] {
        const {selections, items, hoverItem: hover, search} = this.props.state;
        const selectionsSet = new Set(selections.map(x => x.value));
        let hasHover = false;
        const searchKeys = $.unique(search.toLowerCase().split(' ').filter(x => x.length)) as string[];
        const menuItems = items.reduce<MenuItemProps[]>((list, item) => {
            const {
                value = '',
                keys,
                text,
                className,
                ...others
            } = item;
            if (value === hover) {
                hasHover = true;
            }
            const displayText = `${text ?? value}`;
            list.push({
                key: value,
                active: selectionsSet.has(value),
                text: underlineWithSearchKeys(searchKeys, [displayText]),
                className: classes(className, {hover: value === hover}),
                'data-value': value,
                ...others,
            } as MenuItemProps);
            return list;
        }, []);
        if (!hasHover && menuItems.length) {
            menuItems[0].className = classes(menuItems[0].className, 'hover');
        }
        return menuItems;
    }

    #handleItemClick = ({item}: {item: MenuItemProps}) => {
        const value = item.key as string;
        const {multiple, onToggleValue, onSelect, togglePop} = this.props;
        if (multiple) {
            onToggleValue(value);
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
                ref={this.#menu}
                className="picker-menu-list"
                items={this.#getMenuItems()}
                onClickItem={this.#handleItemClick}
                {...menu}
            />
        );
    }
}
