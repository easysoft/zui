import {Component, ComponentChild, createRef} from 'preact';
import tinykeys from 'tinykeys';
import {classes, $} from '@zui/core';
import {Menu} from '@zui/menu/src/component/menu';
import {MenuItemProps} from '@zui/menu/src/types';
import {PickerMenuProps} from '../types';
import '@zui/css-icons/src/icons/magnifier.css';
import '@zui/css-icons/src/icons/close.css';

export type PickerMenuState = {
    keys: string,
    show?: boolean,
    hover?: string,
};

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

export class PickerMenu extends Component<PickerMenuProps, PickerMenuState> {
    state: PickerMenuState = {keys: '', show: false};

    #hideTimer = 0;

    #searchInput = createRef<HTMLInputElement>();

    #menu = createRef<Menu>();

    #unbindHotkey?: () => void;

    componentDidMount(): void {
        $(document).on('click', this.#handleDocClick);
        this.show(this.focus.bind(this));

        this.#unbindHotkey = tinykeys(window, {
            Escape: () => {
                if (!this.state.show) {
                    return;
                }
                if (this.state.keys) {
                    this.setState({keys: ''});
                } else {
                    this.hide();
                }
            },
            Enter: () => {
                if (!this.state.show) {
                    return;
                }
                const $hoverItem = this.#getHoverItem();
                if ($hoverItem?.length) {
                    this.select($hoverItem.dataset('value') as string);
                }
            },
            ArrowUp: () => {
                if (!this.state.show) {
                    return;
                }
                const $hoverItem = this.#getHoverItem()?.parent();
                if (!$hoverItem?.length) {
                    return;
                }
                let $prevItem = $hoverItem.prev();
                if (!$prevItem.length) {
                    $prevItem = $hoverItem.parent().children().last();
                }
                this.setHoverItem($prevItem.children('a').dataset('value') as string);
            },
            ArrowDown: () => {
                if (!this.state.show) {
                    return;
                }
                const $hoverItem = this.#getHoverItem()?.parent();
                if (!$hoverItem?.length) {
                    return;
                }
                let $nextItem = $hoverItem.next();
                if (!$nextItem.length) {
                    $nextItem = $hoverItem.parent().children().first();
                }
                this.setHoverItem($nextItem.children('a').dataset('value') as string);
            },
        });

        const menu = this.#getMenuElement();
        if (menu) {
            $(menu).on('mouseenter.pickerMenu.zui', '.menu-item', (event) => {
                const $item = $(event.currentTarget);
                this.setHoverItem($item.children('a').dataset('value') as string);
            });
        }
    }

    componentWillUnmount(): void {
        $(document).off('click', this.#handleDocClick);
        this.#unbindHotkey?.();

        const menu = this.#getMenuElement();
        if (menu) {
            $(menu).off('.pickerMenu.zui');
        }
    }

    show(callback?: () => void) {
        if (this.state.show) {
            callback?.();
            return;
        }
        this.setState({show: true}, callback);
    }

    focus() {
        this.#searchInput.current?.focus();
    }

    hide() {
        if (!this.state.show) {
            return;
        }
        if (this.#hideTimer) {
            window.clearTimeout(this.#hideTimer);
        }
        this.setState({show: false}, () => {
            this.#hideTimer = window.setTimeout(() => {
                this.#hideTimer = 0;
                this.props.onRequestHide?.();
            }, 200);
        });
    }

    select(value: string) {
        const pickerItem = this.props.items.find(x => x.value === value);
        if (pickerItem) {
            this.props.onSelectItem(pickerItem);
        }
    }

    setHoverItem(value: string) {
        this.setState({hover: value}, () => {
            const $hoverItem = this.#getHoverItem();
            if ($hoverItem?.length) {
                $hoverItem[0]!.scrollIntoView({block: 'nearest', behavior: 'smooth'});
            }
        });
    }

    #getMenuElement() {
        return this.#menu.current?.ref.current;
    }

    #getHoverItem() {
        const menu = this.#getMenuElement();
        if (!menu) {
            return;
        }
        return $(menu).find('.menu-item>a.hover');
    }

    #getMenuItems(): MenuItemProps[] {
        const {selections, items} = this.props;
        const selectionsSet = new Set(selections);
        const {keys: keysString, hover} = this.state;
        const searchKeys = keysString.toLowerCase().split(' ').filter(x => x.length);
        let hasHover = false;
        const menuItems = items.reduce<MenuItemProps[]>((list, item) => {
            const {
                value,
                keys,
                text,
                className,
                ...others
            } = item;
            if (!searchKeys.length || searchKeys.every(searchKey => value.toLowerCase().includes(searchKey) || keys?.toLowerCase().includes(searchKey) || (typeof text === 'string' && text.toLowerCase().includes(searchKey)))) {
                let displayText = text ?? value;
                if (typeof displayText === 'string' && searchKeys.length) {
                    displayText = underlineWithSearchKeys(searchKeys, [displayText]);
                }
                if (value === hover) {
                    hasHover = true;
                }
                list.push({
                    key: value,
                    active: selectionsSet.has(value),
                    text: displayText,
                    className: classes(className, {hover: value === hover}),
                    'data-value': value,
                    ...others,
                } as MenuItemProps);
            }
            return list;
        }, []);
        if (!hasHover && menuItems.length) {
            menuItems[0].className = classes(menuItems[0].className, 'hover');
        }
        return menuItems;
    }

    #handleDocClick = (event: MouseEvent) => {
        if ($(event.target as HTMLElement).closest(`#picker-menu-${this.props.id}`).length) {
            return;
        }
        this.hide();
    };

    #handleItemClick = ({item}: {item: MenuItemProps}) => {
        this.select(item.key as string);
    };

    #handleSearchChange = (event: Event) => {
        this.setState({keys: (event.target as HTMLInputElement).value});
    };

    #handleClearBtnClick = (event: MouseEvent) => {
        event.stopPropagation();
        this.setState({keys: ''}, this.focus.bind(this));
    };

    #renderSearch() {
        const {
            search,
            searchHint,
        } = this.props;

        const {keys} = this.state;
        const hasSearch = keys.trim().length;

        if (!search) {
            return null;
        }
        return (
            <div className="picker-menu-search">
                <input
                    className="form-control picker-menu-search-input"
                    type="text"
                    placeholder={searchHint}
                    value={keys}
                    onChange={this.#handleSearchChange}
                    onInput={this.#handleSearchChange}
                    ref={this.#searchInput}
                />
                {hasSearch ? <button type="button" className="btn picker-menu-search-clear square size-sm ghost" onClick={this.#handleClearBtnClick}><span className="close"></span></button> : <span className="magnifier"></span>}
            </div>
        );
    }

    render() {
        const {
            id,
            className,
            style = {},
            maxHeight,
            maxWidth,
            width,
            menu,
            checkbox,
        } = this.props;

        const {show, keys} = this.state;
        const hasSearch = keys.trim().length;
        return (
            <div
                className={classes('picker-menu menu-popup', className, {shown: show, 'has-search': hasSearch})}
                id={`picker-menu-${id}`}
                style={{maxHeight, maxWidth, width, ...style}}
            >
                {this.#renderSearch()}
                <Menu
                    ref={this.#menu}
                    className="picker-menu-list"
                    items={this.#getMenuItems()}
                    onClickItem={this.#handleItemClick}
                    checkbox={checkbox}
                    {...menu}
                />
            </div>
        );
    }
}
