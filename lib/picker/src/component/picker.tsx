import {Component, createRef} from 'preact';
import {nanoid} from 'nanoid';
import {classes, $, createPortal} from '@zui/core';
import {computePosition, flip, shift, autoUpdate} from '@floating-ui/dom';
import {PickerItemBasic, PickerItemProps, PickerMenuProps, PickerOptions, PickerSelectProps} from '../types';
import {PickerMultiSelect} from './picker-multi-select';
import {PickerSingleSelect} from './picker-single-select';
import {PickerMenu} from './picker-menu';
import '@zui/form-control/src/style/index.css';
import '../style/index.css';

export type PickerState = {
    value?: string;
    open: boolean;
    loading: boolean;
    items: PickerItemProps[];
    search: string,
};

export class Picker extends Component<PickerOptions, PickerState> {
    static defaultProps: Partial<PickerOptions> = {
        container: 'body',
        valueSplitter: ',',
        search: true,
        menuWidth: '100%',
        menuDirection: 'auto',
        menuMaxHeight: 300,
    };

    #asyncId = 0;

    #id = nanoid();

    #menu = createRef<PickerMenu>();

    #autoUpdateMenu?: () => void;

    constructor(props: PickerOptions) {
        super(props);
        this.state = {
            value: this.#formatValue(props.defaultValue) ?? '',
            open: false,
            loading: false,
            search: '',
            items: Array.isArray(props.items) ? props.items : [],
        };
    }

    get value(): string | undefined {
        return this.state.value;
    }

    get valueList(): string[] {
        return this.#formatValueList(this.state.value);
    }

    componentDidMount() {
        this.#afterRender(true);
    }

    componentDidUpdate(): void {
        this.#afterRender();
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
        this.#autoUpdateMenu?.();
        this.#autoUpdateMenu = undefined;
    }

    async loadItemList(): Promise<PickerItemProps[]> {
        let {items} = this.props;
        if (typeof items === 'function') {
            const asyncId = ++this.#asyncId;
            await this.#waitState({loading: true, items: []});
            items = await items();
            if (this.#asyncId !== asyncId) {
                return [];
            }
        }

        const newState: Partial<PickerState> = {};
        if (Array.isArray(items) && this.state.items !== items) {
            newState.items = items;
        }
        if (this.state.loading) {
            newState.loading = false;
        }

        if (Object.keys(newState).length) {
            await this.#waitState(newState);
        }
        return items;
    }

    getItemList(): PickerItemProps[] {
        return this.state.items;
    }

    getItemMap(): Record<string, PickerItemProps> {
        return this.getItemList().reduce<Record<string, PickerItemProps>>((map, item) => {
            map[item.value] = item;
            return map;
        }, {});
    }

    getItemByValue(value: string): PickerItemProps | undefined {
        return this.getItemList().find(item => item.value === value);
    }

    getSelections(): PickerItemProps[] {
        const map = this.getItemMap();
        return this.valueList.map((value) => map[value] || {value});
    }

    async toggle(open?: boolean): Promise<void> {
        if (open === undefined) {
            open = !this.state.open;
        } else if (open === this.state.open) {
            return;
        }
        await this.#waitState({open});
        if (open) {
            this.loadItemList();
        }
    }

    open() {
        return this.toggle(true);
    }

    close() {
        return this.toggle(false);
    }

    toggleValue(value: string, toggle?: boolean) {
        const {valueList} = this;
        const oldIndex = valueList.indexOf(value);
        if (toggle === !!oldIndex) {
            return;
        }
        if (oldIndex > -1) {
            valueList.splice(oldIndex, 1);
        } else {
            valueList.push(value);
        }
        this.setState({value: valueList.join(this.props.valueSplitter ?? ',')});
    }

    #waitState(state: Partial<PickerState>): Promise<void> {
        return new Promise((resolve) => {
            this.setState(state, resolve);
        });
    }

    #formatValueList(value?: string | string[]): string[] {
        if (typeof value === 'string') {
            if (!value.length) {
                return [];
            }
            return $.unique(value.split(this.props.valueSplitter ?? ',')) as string[];
        }
        if (Array.isArray(value)) {
            return $.unique(value) as string[];
        }
        return [];
    }

    #formatValue(value?: string | string[]): string | undefined {
        const list = this.#formatValueList(value);
        return list.length ? list.join(this.props.valueSplitter ?? ',') : undefined;
    }

    #getSelectProps(): PickerSelectProps {
        const {placeholder, disabled, multiple} = this.props;
        const {open} = this.state;

        return {
            focused: open,
            placeholder,
            disabled,
            multiple,
            selections: this.getSelections(),
            onClick: this.#handleSelectClick,
            onDeselect: this.#handleDeselect,
        };
    }

    #handleDeselect = (items: PickerItemBasic[]) => {
        const {valueList} = this;
        const deselectedSet = new Set(items.map(item => item.value));
        const newValueList = valueList.filter(x => !deselectedSet.has(x));
        this.setState({value: newValueList.length ? newValueList.join(this.props.valueSplitter ?? ',') : undefined});
    };

    #handleSelectClick = () => {
        requestAnimationFrame(() => this.toggle());
    };

    #handleMenuRequestHide = () => {
        this.close();
    };

    #handleSelectItem = (item: PickerItemProps) => {
        if (this.props.multiple) {
            this.toggleValue(item.value);
        } else {
            this.setState({value: item.value}, () => {
                this.#menu.current?.hide();
            });
        }
    };

    #getMenuProps(): PickerMenuProps {
        const {search, menuClass, menuWidth, menuStyle, menuMaxHeight, menuMaxWidth, multiple, searchHint} = this.props;
        const {items} = this.state;
        return {
            id: this.#id,
            items,
            selections: this.valueList,
            search: search === true || (typeof search === 'number' && search <= items.length),
            searchHint,
            style: menuStyle,
            multiple,
            className: menuClass,
            width: menuWidth === '100%' ? 'auto' : menuWidth,
            maxHeight: menuMaxHeight,
            maxWidth: menuMaxWidth,
            onRequestHide: this.#handleMenuRequestHide,
            onSelectItem: this.#handleSelectItem,
        };
    }

    #renderMenu() {
        const {open} = this.state;
        if (!open) {
            return null;
        }

        const $containerParent = $(this.props.container || 'body');
        let $container = $containerParent.find('.pickers-container');
        if (!$container.length) {
            $container = $('<div>').addClass('pickers-container').appendTo($containerParent);
        }

        const {Menu = PickerMenu} = this.props;
        return createPortal(<Menu {...this.#getMenuProps()} ref={this.#menu} />, $container[0]!);
    }

    #updateMenuPosition() {
        const picker = $(`#picker-${this.#id}`)[0];
        const menu = $(`#picker-menu-${this.#id}`)[0];
        if (!menu || !picker || !this.state.open) {
            if (this.#autoUpdateMenu) {
                this.#autoUpdateMenu();
                this.#autoUpdateMenu = undefined;
            }
            return;
        }

        if (this.#autoUpdateMenu) {
            return;
        }

        this.#autoUpdateMenu = autoUpdate(picker, menu, () => {
            const {menuDirection, menuWidth} = this.props;
            computePosition(picker, menu, {
                placement: `${menuDirection === 'top' ? 'top' : 'bottom'}-start`,
                middleware: [menuDirection === 'auto' ? flip() : null, shift()].filter(Boolean),
            }).then(({x, y}) => {
                $(menu).css({left: x, top: y, width: menuWidth === '100%' ? $(picker).width() : undefined});
            });
            if (menuWidth === '100%') {
                $(menu).css({width: $(picker).width()});
            }
        });
    }

    #afterRender(firstRender = false) {
        this.props.afterRender?.call(this, {firstRender});
        this.#updateMenuPosition();
    }

    render() {
        const {
            className,
            style,
            children,
            multiple,
            Select,
            name,
        } = this.props;

        const SelectComponent = Select || (multiple ? PickerMultiSelect : PickerSingleSelect);
        const selectProps = this.#getSelectProps();
        return (
            <div
                id={`picker-${this.#id}`}
                className={classes('picker', className)}
                style={style}
            >
                {<SelectComponent {...selectProps} />}
                {children}
                {this.#renderMenu()}
                {name ? <input type="hidden" className="picker-value" name={name} value={this.state.value} /> : null}
            </div>
        );
    }
}
