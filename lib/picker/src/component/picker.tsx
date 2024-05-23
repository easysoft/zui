import {$, delay, fetchData, i18n} from '@zui/core';
import {Pick} from '@zui/pick/src/components';
import {Toolbar} from '@zui/toolbar/src/component';
import {PickerMultiSelect} from './picker-multi-select';
import {PickerSingleSelect} from './picker-single-select';
import {PickerMenu} from './picker-menu';

import type {ComponentType, RenderableProps} from 'preact';
import type {ListItem, ListItemsFetcher} from '@zui/list';
import type {PickTriggerProps} from '@zui/pick';
import type {PickerItemBasic, PickerItemOptions, PickerMenuProps, PickerOptions, PickerSelectProps, PickerState} from '../types';
import {formatString} from '@zui/helpers/src/format-string';

function getValueMap(items: PickerItemOptions[], userMap?: Map<string, PickerItemOptions>): Map<string, PickerItemOptions> {
    return items.reduce<Map<string, PickerItemOptions>>((map, item) => {
        if (Array.isArray(item.items)) {
            getValueMap(item.items as PickerItemOptions[], map);
        }
        map.set(item.value === undefined ? '' : String(item.value), item);
        return map;
    }, userMap || new Map());
}

export class Picker<S extends PickerState = PickerState, O extends PickerOptions<S> = PickerOptions<S>> extends Pick<S, O> {
    static defaultProps = {
        ...Pick.defaultProps,
        className: 'picker',
        valueSplitter: ',',
        limitValueInList: true,
        search: true,
        emptyValue: '',
        cache: true,
        hotkeys: true,
    };

    static Pop = PickerMenu as typeof Pick.Pop;

    protected _itemsCacheInfo?: {search?: string, value?: string, items?: PickerOptions['items']};

    protected _abort?: AbortController;

    protected _updateTimer = 0;

    protected _emptyValueSet: Set<string>;

    constructor(props: O) {
        super(props);
        $.extend(this.state, {
            loading: false,
            search: '',
            items: props.items,
            selections: [],
        });

        const {valueSplitter = ',', emptyValue = ''} = this.props;
        this._emptyValueSet = new Set(emptyValue.split(valueSplitter));
        this.setValue = this.setValue.bind(this);

        const {items} = this.state;
        if (Array.isArray(items) && items.length) {
            items.forEach(item => {
                if (typeof item.value === 'number') {
                    item.value = String(item.value);
                }
            }); // Fix item value could be non-string.
            if (props.limitValueInList) {
                const valueMap = getValueMap(items);
                (this.state as PickerState).value = this.valueList.filter(x => valueMap.has(x)).join(props.valueSplitter);
            }
            if (!this.valueList.length && props.required && !props.multiple) {
                (this.state as PickerState).value = items[0].value ?? '';
            }
        }
    }

    get valueList(): string[] {
        return this.formatValueList(this.state.value);
    }

    get firstEmptyValue() {
        return this._emptyValueSet.values().next().value as string;
    }

    isEmptyValue = (value: string) => {
        return this._emptyValueSet.has(value);
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

    deselect = (values: string | string[] = []) => {
        const {valueList} = this;
        const deselectedSet = new Set(this.formatValueList(values));
        const newValueList = valueList.filter(x => !deselectedSet.has(x));
        this.setValue(newValueList);
    };

    deselectAll() {
        this.setValue([]);
    }

    clear = () => {
        this.setValue();
    };

    select = (values: string | string[]) => {
        const valueList = this.formatValueList(values);
        const newValueList = this.props.multiple ? [...this.valueList, ...valueList] : valueList[0];
        return this.setValue(newValueList);
    };

    selectAll() {
        const {items} = this.state;
        if (!Array.isArray(items)) {
            return;
        }
        const valueMap = getValueMap(items);
        const newValueList = [...valueMap.values()].reduce<string[]>((list, item) => {
            if (!item.disabled) {
                list.push(item.value as string);
            }
            return list;
        }, []);
        return this.select(newValueList);
    }

    isSelected = (value: string) => {
        return this.valueList.includes(value);
    };

    isSelectedAll() {
        const {items} = this.state;
        if (!Array.isArray(items)) {
            return false;
        }
        const valueMap = getValueMap(items);
        const valueSet = new Set(this.valueList);
        return [...valueMap.values()].every(item => item.disabled || valueSet.has(item.value as string));
    }

    /**
     * @todo Let SearchMenu to load items.
     */
    async load(): Promise<ListItem[]> {
        let abort = this._abort;
        if (abort) {
            abort.abort();
        }
        abort = new AbortController();
        this._abort = abort;

        const {items: itemsSetting = [], searchDelay} = this.props;
        const {search} = this.state;
        let items: ListItem[] = [];
        if (!Array.isArray(itemsSetting)) {
            await delay(searchDelay || 500);
            if (this._abort !== abort) {
                return items;
            }
            let ajaxSetting = itemsSetting;
            if (typeof ajaxSetting === 'string') {
                ajaxSetting = formatString(ajaxSetting, {search: encodeURIComponent(search)});
            }
            items = await fetchData(ajaxSetting as ListItemsFetcher, [this, search], {signal: abort.signal});
            if (this._abort !== abort) {
                return items;
            }
        } else {
            items = itemsSetting;
        }

        this._abort = undefined;
        return items;
    }

    changeState(state: Partial<S> | ((prevState: Readonly<S>) => Partial<S>), callback?: (() => void) | undefined): Promise<S> {
        return super.changeState((prevState) => {
            const newState = typeof state === 'function' ? state(prevState) : state;
            if ((newState.value !== undefined && newState.value !== prevState.value) || (newState.items && newState.items !== prevState.items)) {
                const items = newState.items || prevState.items;
                const map = getValueMap(items);
                newState.selections = this.formatValueList(newState.value ?? prevState.value).reduce<PickerItemBasic[]>((list, value) => {
                    if (!this.isEmptyValue(value)) {
                        list.push(map.get(value) || {value, text: value});
                    }
                    return list;
                }, []);
            }
            return newState;
        }, callback);
    }

    async update(force?: boolean) {
        const {state, props} = this;
        const cache = this._itemsCacheInfo || {};
        const newState: Partial<S> = {};
        this._itemsCacheInfo = cache;
        if (!state.loading && (force || cache.search !== state.search || props.items !== cache.items)) {
            await this.changeState({loading: true} as Partial<S>);
            let loadItems = await this.load();
            loadItems = loadItems.filter(x => {
                x.key = x.key ?? (x.value as string);
                if (typeof x.value === 'number') {
                    x.value = String(x.value);
                }
                if (this.isEmptyValue(x.value as string)) {
                    return false;
                }
                return true;
            });
            newState.loading = false;
            newState.items = loadItems as PickerItemOptions[];
            cache.items = props.items;
            cache.search = state.search;
        } else if (cache.items && !state.open && props.cache === false && !Array.isArray(props.items)) {
            cache.items = undefined;
        }
        if (force || cache.value !== state.value) {
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
        if (this._updateTimer) {
            clearTimeout(this._updateTimer);
        }
        this._updateTimer = window.setTimeout(() => {
            this._updateTimer = 0;
            this.update();
        }, 50);
    }

    componentDidUpdate(previousProps: Readonly<O>, previousState: Readonly<S>): void {
        super.componentDidUpdate(previousProps, previousState);
        this.tryUpdate();
    }

    componentDidMount(): void {
        super.componentDidMount();
        this.tryUpdate();
    }

    componentWillUnmount(): void {
        this._abort?.abort();
        this._abort = undefined;
        this._itemsCacheInfo = undefined;
        clearTimeout(this._updateTimer);
        super.componentWillUnmount();
    }

    protected _handleChange(value: string, oldValue: string) {
        super._handleChange(value, oldValue);
        if (value !== oldValue) {
            const {onDeselect, onSelect, onClear, multiple} = this.props;
            const oldValueList = this.formatValueList(oldValue);
            const valueList = this.valueList;
            if (onClear && !valueList.length && oldValueList.length) {
                onClear.call(this);
            }
            if (onDeselect) {
                const deselectedList = oldValueList.filter(x => !valueList.includes(x));
                if (deselectedList.length) {
                    onDeselect.call(this, multiple ? deselectedList : deselectedList[0]);
                }
            }
            if (onSelect) {
                const selectedList = valueList.filter(x => !oldValueList.includes(x));
                if (selectedList.length) {
                    onSelect.call(this, multiple ? selectedList : selectedList[0]);
                }
            }
        }

    }

    protected _getTriggerProps(props: RenderableProps<O>, state: Readonly<S>): PickerSelectProps<S> {
        return {
            ...super._getTriggerProps(props, state),
            multiple: props.multiple,
            hotkeys: props.hotkeys,
            placeholder: props.placeholder,
            search: props.search,
            display: props.display,
            searchHint: props.searchHint,
            clearable: !!this.valueList.length && !props.required,
            valueList: this.valueList,
            emptyValue: this.firstEmptyValue,
            onDeselect: this.deselect,
            onSelect: this.select,
            onClear: this.clear,
            onToggleValue: this.toggleValue,
            onSetValue: this.setValue,
        };
    }

    protected _getPopProps(props: RenderableProps<O>, state: Readonly<S>): PickerMenuProps<S> {
        return {
            ...super._getPopProps(props, state),
            menu: props.menu,
            tree: props.tree,
            checkbox: props.checkbox,
            multiple: props.multiple,
            search: props.search,
            maxItemsCount: props.maxItemsCount,
            footer: this._renderToolbar(),
            valueList: this.valueList,
            noMatchHint: state.loading ? i18n.getLang('loadingHint') : (props.searchEmptyHint ?? i18n.getLang('searchEmptyHint')),
            onDeselect: this.deselect,
            onSelect: this.select,
            onClear: this.clear,
            onToggleValue: this.toggleValue,
            onSetValue: this.setValue,
        };
    }

    protected _getTrigger(props: RenderableProps<O>): ComponentType<PickTriggerProps<S>> {
        return props.Trigger || (props.multiple ? PickerMultiSelect : PickerSingleSelect) as unknown as ComponentType<PickTriggerProps<S>>;
    }

    protected _renderToolbar() {
        let {toolbar} = this.props;
        if (!toolbar) {
            return null;
        }
        if (toolbar === true) {
            toolbar = [{
                key: 'selectAll',
                text: i18n.getLang('selectAll'),
            }, {
                key: 'cancelSelect',
                text: i18n.getLang('cancelSelect'),
            }];
        }
        return Toolbar.render(toolbar, [], {size: 'sm', getItem: (item) => {
            if (!item.onClick) {
                if (item.key === 'selectAll') {
                    item.onClick = this.selectAll.bind(this);
                    item.disabled = this.isSelectedAll();
                } else if (item.key === 'cancelSelect') {
                    item.onClick = this.deselectAll.bind(this);
                    item.disabled = !this.valueList.length;
                }
            }
            return item;
        }}, this);
    }

    formatValueList(value: unknown): string[] {
        let list: unknown[];
        if (typeof value === 'string' && value.length) {
            list = value.split(this.props.valueSplitter ?? ',');
        } else if (Array.isArray(value)) {
            list = value;
        } else {
            list = [value];
        }
        return ($.unique(list) as unknown[]).reduce<string[]>((values, x) => {
            if (x === null || x === undefined) {
                return values;
            }
            x = typeof x !== 'string' ? String(x) : x;
            if (!this.isEmptyValue(x as string)) {
                values.push(x as string);
            }
            return values;
        }, []);
    }

    formatValue(value: string | string[]): string {
        const list = this.formatValueList(value);
        return list.length ? list.join(this.props.valueSplitter ?? ',') : this.firstEmptyValue;
    }

    setValue(value: unknown = [], silent?: boolean) {
        let valueList = this.formatValueList(value);
        if (valueList.length) {
            const {items, limitValueInList} = this.props;
            if (limitValueInList) {
                const valueMap = getValueMap((Array.isArray(items) ? items : this.state.items) as PickerItemOptions[]);
                valueList = valueList.filter(x => valueMap.has(x));
            }
        }
        const stateValue = this.formatValue(valueList);
        return super.setValue(stateValue, silent);
    }
}
