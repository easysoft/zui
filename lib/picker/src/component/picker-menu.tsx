import {Component, ComponentChild, createRef} from 'preact';
import {classes, $} from '@zui/core';
import {Menu} from '@zui/menu/src/component/menu';
import {MenuItemProps} from '@zui/menu/src/types';
import {PickerMenuProps} from '../types';
import '@zui/css-icons/src/icons/magnifier.css';
import '@zui/css-icons/src/icons/close.css';

export type PickerMenuState = {
    keys: string,
    show?: boolean,
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

    componentDidMount(): void {
        $(document).on('click', this.#handleDocClick);
        this.show(this.focus.bind(this));
    }

    componentWillUnmount(): void {
        $(document).off('click', this.#handleDocClick);
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

    #getMenuItems(): MenuItemProps[] {
        const {selections, items} = this.props;
        const selectionsSet = new Set(selections);
        const searchKeys = this.state.keys.toLowerCase().split(' ').filter(x => x.length);
        return items.reduce<MenuItemProps[]>((list, item) => {
            const {
                value,
                keys,
                text,
                ...others
            } = item;
            if (!searchKeys.length || searchKeys.every(searchKey => value.toLowerCase().includes(searchKey) || keys?.toLowerCase().includes(searchKey) || (typeof text === 'string' && text.toLowerCase().includes(searchKey)))) {
                let displayText = text ?? value;
                if (typeof displayText === 'string' && searchKeys.length) {
                    displayText = underlineWithSearchKeys(searchKeys, [displayText]);
                }
                list.push({
                    key: value,
                    active: selectionsSet.has(value),
                    text: displayText,
                    ...others,
                } as MenuItemProps);
            }
            return list;
        }, []);
    }

    #handleDocClick = (event: MouseEvent) => {
        if ($(event.target as HTMLElement).closest(`#picker-menu-${this.props.id}`).length) {
            return;
        }
        this.hide();
    };

    #handleItemClick = ({item}: {item: MenuItemProps}) => {
        const pickerItem = this.props.items.find(x => x.value === item.key);
        if (pickerItem) {
            this.props.onSelectItem(pickerItem);
        }
    };

    #handleSearchChange = (event: Event) => {
        this.setState({keys: (event.target as HTMLInputElement).value});
    };

    #handleClearBtnClick = (event: MouseEvent) => {
        event.stopPropagation();
        this.setState({keys: ''}, this.focus.bind(this));
    };

    render() {
        const {
            id,
            search,
            className,
            style = {},
            maxHeight,
            maxWidth,
            width,
            menu,
            searchHint,
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
                {search ? (
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
                ) : null}
                <Menu className="picker-menu-list" items={this.#getMenuItems()} onClickItem={this.#handleItemClick} checkbox={checkbox} {...menu} />
            </div>
        );
    }
}
