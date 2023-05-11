import {Component, createRef} from 'preact';
import {nanoid} from 'nanoid';
import {classes} from '@zui/browser-helpers/src/classes';
import {PickerItemBasic, PickerItemProps, PickerMenuProps, PickerOptions, PickerSelectProps} from '../types';
import {PickerMultiSelect} from './picker-multi-select';
import {PickerSingleSelect} from './picker-single-select';
import {PickerMenu} from './picker-menu';
import {createUniqList} from '../helpers/create-uniq-list';
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
    static defaultProps = {
        container: 'body',
        valueSplitter: ',',
        search: true,
        menuWidth: 'auto',
        menuMaxHeight: 400,
    };

    #asyncId = 0;

    #id = nanoid();

    #menu = createRef<PickerMenu>();

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
        this.props.afterRender?.call(this, {firstRender: true});
    }

    componentDidUpdate(): void {
        this.props.afterRender?.call(this, {firstRender: false});
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
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
            return createUniqList(value.split(this.props.valueSplitter ?? ','));
        }
        if (Array.isArray(value)) {
            return createUniqList(value);
        }
        return [];
    }

    #formatValue(value?: string | string[]): string | undefined {
        const list = this.#formatValueList(value);
        return list.length ? list.join(this.props.valueSplitter ?? ',') : undefined;
    }

    #getSelectProps(): PickerSelectProps {
        const {placeholder, disabled} = this.props;
        const {open} = this.state;

        return {
            focused: open,
            placeholder,
            disabled,
            selections: this.getSelections(),
            onClick: this.#handleSelectClick,
            onDeselect: this.#handleDeselect,
        };
    }

    #handleDeselect = (items: PickerItemBasic[], event: MouseEvent) => {
        const {valueList} = this;
        const deselectedSet = new Set(items.map(item => item.value));
        const newValueList = valueList.filter(x => !deselectedSet.has(x));
        this.setState({value: newValueList.length ? newValueList.join(this.props.valueSplitter ?? ',') : undefined});
    };

    #handleSelectClick = (event: MouseEvent) => {
        console.log('#handleSelectClick', event);
        this.setState({open: true});
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
        const {search, menuClass, menuWidth, menuStyle, menuMaxHeight, menuMaxWidth} = this.props;
        const {items} = this.state;
        return {
            id: this.#id,
            items,
            selections: this.valueList,
            search: search === true || (typeof search === 'number' && search <= items.length),
            style: menuStyle,
            className: menuClass,
            width: menuWidth,
            maxHeight: menuMaxHeight,
            maxWidth: menuMaxWidth,
            onRequestHide: this.#handleMenuRequestHide,
            onSelectItem: this.#handleSelectItem,
        };
    }

    render() {
        const {
            className,
            style,
            children,
            multiple: multi,
        } = this.props;

        const SelectComponent = multi ? PickerMultiSelect : PickerSingleSelect;

        return (
            <div className={classes('picker', className)} style={style} id={`picker-${this.#id}`}>
                {<SelectComponent {...this.#getSelectProps()} />}
                {children}
                {this.state.open ? <PickerMenu {...this.#getMenuProps()} ref={this.#menu} /> : null}
            </div>
        );
    }
}
