import {Component} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import {Menu} from '@zui/menu/src/component/menu';
import {MenuItemOptions} from '@zui/menu/src/types';
import {PickerMenuProps} from '../types';
import '@zui/css-icons/src/icons/magnifier.css';
import '@zui/css-icons/src/icons/close.css';

export type PickerMenuState = {
    keys: string,
    shown?: boolean,
};

export class PickerMenu extends Component<PickerMenuProps, PickerMenuState> {
    state: PickerMenuState = {keys: '', shown: false};

    componentDidMount(): void {
        document.addEventListener('click', this.#handleDocClick);
        this.show();
    }

    componentWillUnmount(): void {
        document.removeEventListener('click', this.#handleDocClick);
    }

    show() {
        if (this.state.shown) {
            return;
        }
        this.setState({shown: true});
    }

    hide() {
        if (!this.state.shown) {
            return;
        }
        this.setState({shown: false}, () => {
            window.setTimeout(() => {
                this.props.onRequestHide?.();
            }, 200);
        });
    }

    #getMenuItems(): MenuItemOptions[] {
        const {selections, items} = this.props;
        const selectionsSet = new Set(selections);
        const searchKeys = this.state.keys.toLowerCase().split(' ').filter(x => x.length);
        return items.reduce<MenuItemOptions[]>((list, item) => {
            const {
                value,
                keys,
                text,
                ...others
            } = item;
            if (!searchKeys.length || searchKeys.every(searchKey => value.toLowerCase().includes(searchKey) || keys?.toLowerCase().includes(searchKey) || (typeof text === 'string' && text.toLowerCase().includes(searchKey)))) {
                let displayText = text ?? value;
                if (typeof displayText === 'string' && searchKeys.length) {
                    displayText = <span dangerouslySetInnerHTML={{__html: searchKeys.reduce((t, s) => t.replace(s, `<span class="picker-menu-item-match">${s}</span>`), displayText)}}></span>;
                }
                list.push({
                    key: value,
                    active: selectionsSet.has(value),
                    text: displayText,
                    ...others,
                });
            }
            return list;
        }, []);
    }

    #handleDocClick = (event: MouseEvent) => {
        if ((event.target as HTMLElement)?.closest(`#picker-menu-${this.props.id}`)) {
            return;
        }
        this.hide();
    };

    #handleItemClick = ({item}: {item: MenuItemOptions}) => {
        const pickerItem = this.props.items.find(x => x.value === item.key);
        if (pickerItem) {
            this.props.onSelectItem(pickerItem);
        }
    };

    #handleSearchChange = (event: Event) => {
        this.setState({keys: (event.target as HTMLInputElement).value});
    };

    #handleClearBtnClick = () => {
        this.setState({keys: ''});
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
        } = this.props;

        const {shown, keys} = this.state;
        const hasSearch = keys.trim().length;
        return (
            <div className={classes('picker-menu', className, {shown, 'has-search': hasSearch})} id={`picker-menu-${id}`} style={{maxHeight, maxWidth, width, ...style}}>
                {search ? (
                    <div className="picker-menu-search">
                        <input className="form-control picker-menu-search-input" type="text" placeholder={searchHint} value={keys} onChange={this.#handleSearchChange} onInput={this.#handleSearchChange} />
                        {hasSearch ? <button type="button" className="btn picker-menu-search-clear" onClick={this.#handleClearBtnClick}><span className="close"></span></button> : <span className="magnifier"></span>}
                    </div>
                ) : null}
                <Menu className="picker-menu-list" items={this.#getMenuItems()} onClickItem={this.#handleItemClick} {...menu} />
            </div>
        );
    }
}
