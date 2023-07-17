import {ComponentType, RenderableProps} from 'preact';
import {$, delay} from '@zui/core';
import {Pick} from '@zui/pick/src/components';
import {PickTriggerProps} from '@zui/pick/src/types';
import {PickerItemBasic, PickerItemOptions, PickerMenuProps, PickerOptions, PickerSelectProps, PickerState} from '../types';
import '@zui/form-control/src/style/index.css';
import '../style/index.css';
import {PickerMultiSelect} from './picker-multi-select';
import {PickerSingleSelect} from './picker-single-select';
import {PickerMenu} from './picker-menu';

export class Picker extends Pick<PickerState, PickerOptions> {
    static defaultProps = {
        ...Pick.defaultProps,
        className: 'picker',
        valueSplitter: ',',
        limitValueInList: true,
        search: true,
        emptyValue: '',
    };

    static Pop = PickerMenu as typeof Pick.Pop;

    #itemsCacheInfo?: {search?: string, value?: string, items?: PickerOptions['items']};

    #abort?: AbortController;

    #updateTimer = 0;

    #emptyValueSet: Set<string>;

    constructor(props: PickerOptions) {
        super(props);
        $.extend(this.state, {
            loading: false,
            search: '',
            items: props.items,
            selections: [],
        });

        const {valueSplitter = ',', emptyValue = ''} = this.props;
        this.#emptyValueSet = new Set(emptyValue.split(valueSplitter));

        const {items} = this.state;
        if (Array.isArray(items) && items.length) {
            items.forEach(item => item.value = String(item.value)); // Fix item value could be non-string.
            if (props.limitValueInList) {
                const valueSet = new Set(items.map(x => x.value));
                (this.state as PickerState).value = this.valueList.filter(x => valueSet.has(x)).join(props.valueSplitter);
            }
            if (!this.valueList.length && props.required && !props.multiple) {
                (this.state as PickerState).value = items[0].value;
            }
        }
    }

    get value() {
        return this.state.value;
    }

    get valueList(): string[] {
        return this.formatValueList(this.state.value);
    }

    get firstEmptyValue() {
        return this.#emptyValueSet.values().next().value as string;
    }

    isEmptyValue = (value: string) => {
        return this.#emptyValueSet.has(value);
    };

    toggleValue = (value: string, toggle?: boolean) => {
        if (!this.props.multiple) {
            if (toggle || value !== this.value) {
                return this.setValue(value);
            }
            return this.setValue();
        }
        const {valueList} = this;
        const oldIndex = valueList.indexOf(value);
        if (toggle === (oldIndex >= 0)) {
            return;
        }
        if (oldIndex > -1) {
            valueList.splice(oldIndex, 1);
        } else {
            valueList.push(value);
        }
        return this.setValue(valueList);
    };

    deselect = (values: string | string[]) => {
        const {valueList} = this;
        const deselectedSet = new Set(this.formatValueList(values));
        const newValueList = valueList.filter(x => !deselectedSet.has(x));
        this.setValue(newValueList);
    };

    clear = () => {
        this.setValue();
    };

    select = (values: string | string[]) => {
        const valueList = this.formatValueList(values);
        const newValueList = this.props.multiple ? [...this.valueList, ...valueList] : valueList[0];
        return this.setValue(newValueList);
    };

    isSelected = (value: string) => {
        return this.valueList.includes(value);
    };

    async load(): Promise<PickerItemOptions[]> {
        let abort = this.#abort;
        if (abort) {
            abort.abort();
        }
        abort = new AbortController();
        this.#abort = abort;

        const {items: itemsSetting, searchDelay} = this.props;
        const {search} = this.state;
        let items: PickerItemOptions[] = [];
        if (typeof itemsSetting === 'function') {
            await delay(searchDelay || 500);
            if (this.#abort !== abort) {
                return items;
            }
            items = await itemsSetting(search, {signal: abort.signal});
            if (this.#abort !== abort) {
                return items;
            }
        } else if (search.length) {
            const searchKeys = $.unique(search.toLowerCase().split(' ').filter(x => x.length)) as string[];
            if (!searchKeys.length) {
                items = itemsSetting;
            } else {
                items = itemsSetting.reduce<PickerItemOptions[]>((list, item) => {
                    const {
                        value,
                        keys = '',
                        text,
                    } = item;

                    if (searchKeys.every(searchKey => value.toLowerCase().includes(searchKey) || keys.toLowerCase().includes(searchKey) || (typeof text === 'string' && text.toLowerCase().includes(searchKey)))) {
                        list.push(item);
                    }
                    return list;
                }, []);
            }
        } else {
            items = itemsSetting;
        }

        this.#abort = undefined;
        return items;
    }

    async update(force?: boolean) {
        const {state, props} = this;
        const cache = this.#itemsCacheInfo || {};
        const newState: Partial<PickerState> = {};
        this.#itemsCacheInfo = cache;
        if (force || cache.search !== state.search || props.items !== cache.items) {
            newState.items = (await this.load()).filter(x => {
                x.value = String(x.value);
                if (this.isEmptyValue(x.value)) {
                    return false;
                }
                return true;
            });
            newState.loading = false;
            cache.items = props.items;
            cache.search = state.search;
        }
        if (force || cache.value !== state.value) {
            const items = newState.items || state.items;
            const map = new Map(items.map(x => [x.value, x]));
            newState.selections = this.valueList.reduce<PickerItemBasic[]>((list, value) => {
                if (!this.isEmptyValue(value)) {
                    list.push(map.get(value) || {value});
                }
                return list;
            }, []);
            cache.value = state.value;
        }
        const newItems = newState.items;
        if (props.required && !props.multiple && this.isEmptyValue(this.state.value) && Array.isArray(newItems) && newItems.length) {
            newState.value = newItems[0].value;
        }
        if (Object.keys(newState).length) {
            await this.changeState(newState);
        }
    }

    async tryUpdate() {
        if (this.#updateTimer) {
            clearTimeout(this.#updateTimer);
        }
        this.#updateTimer = window.setTimeout(() => {
            this.#updateTimer = 0;
            this.update();
        }, 50);
    }

    componentDidUpdate(previousProps: Readonly<PickerOptions>, previousState: Readonly<PickerState>): void {
        super.componentDidUpdate(previousProps, previousState);
        this.tryUpdate();
    }

    componentDidMount(): void {
        super.componentDidMount();
        this.tryUpdate();
    }

    componentWillUnmount(): void {
        this.#abort?.abort();
        this.#abort = undefined;
        this.#itemsCacheInfo = undefined;
        clearTimeout(this.#updateTimer);
        super.componentWillUnmount();
    }

    protected _getTriggerProps(props: RenderableProps<PickerOptions>, state: Readonly<PickerState>): PickerSelectProps {
        return {
            ...super._getTriggerProps(props, state),
            multiple: props.multiple,
            placeholder: props.placeholder,
            search: props.search,
            searchHint: props.searchHint,
            disabled: props.disabled,
            clearable: !!this.valueList.length && !props.required,
            valueList: this.valueList,
            emptyValue: this.firstEmptyValue,
            onDeselect: this.deselect,
            onSelect: this.select,
            onClear: this.clear,
            onToggleValue: this.toggleValue,
        };
    }

    protected _getPopProps(props: RenderableProps<PickerOptions>, state: Readonly<PickerState>): PickerMenuProps {
        return {
            ...super._getPopProps(props, state),
            menu: props.menu,
            multiple: props.multiple,
            search: props.search,
            searchHint: props.searchHint,
            onDeselect: this.deselect,
            onSelect: this.select,
            onClear: this.clear,
            onToggleValue: this.toggleValue,
        };
    }

    protected _getTrigger(props: RenderableProps<PickerOptions>): ComponentType<PickTriggerProps<PickerState>> {
        return props.Trigger || (props.multiple ? PickerMultiSelect : PickerSingleSelect) as unknown as ComponentType<PickTriggerProps<PickerState>>;
    }

    formatValueList(value: string | string[]): string[] {
        let list: string[] = [];
        if (typeof value === 'string' && value.length) {
            list = $.unique(value.split(this.props.valueSplitter ?? ',')) as string[];
        } else if (Array.isArray(value)) {
            list = $.unique(value) as string[];
        }
        return list.filter(x => !this.isEmptyValue(x));
    }

    formatValue(value: string | string[]): string {
        const list = this.formatValueList(value);
        return list.length ? list.join(this.props.valueSplitter ?? ',') : this.firstEmptyValue;
    }

    setValue(value: unknown = []) {
        if (this.props.disabled) {
            return;
        }
        if (!Array.isArray(value) && typeof value !== 'string') {
            value = value !== null ? String(value) : this.firstEmptyValue;
        }
        const valueList = this.formatValueList(value as string | string[]);
        if (!valueList.length) {
            return this.changeState({value: this.firstEmptyValue});
        }
        const stateValue = this.formatValue(valueList);
        return this.changeState({value: stateValue});
    }
}
