import {$, delay, fetchData, i18n} from '@zui/core';
import {Pick} from '@zui/pick/react';
import {encodeBase64, formatString} from '@zui/helpers';
import {Toolbar} from '@zui/toolbar/react';
import {PickerMultiSelect} from './picker-multi-select';
import {PickerSingleSelect} from './picker-single-select';
import {PickerMenu} from './picker-menu';

import type {ComponentType, RenderableProps} from 'preact';
import type {ListItem, ListItemsFetcher, NestedItem} from '@zui/list';
import type {PickTriggerProps} from '@zui/pick';
import type {PickerItemBasic, PickerItemOptions, PickerMenuProps, PickerOptions, PickerSelectProps, PickerState} from '../types';

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
        clearSearchOnSelect: true,
    };

    static Pop = PickerMenu as typeof Pick.Pop;

    protected _itemsCacheInfo?: {search?: string; value?: string; items?: PickerOptions['items']};

    protected _abort?: AbortController;

    protected _updateTimer = 0;

    protected _destroyed = false;

    protected declare _emptyValueSet: Set<string>;

    protected declare _sharedValueSet: Set<string>;

    constructor(props: O) {
        super(props);

        this.setValue = this.setValue.bind(this);
        this.isEmptyValue = this.isEmptyValue.bind(this);
    }

    get valueList(): string[] {
        if (this.props.multiple) {
            return this.formatValueList(this.state.value);
        }
        const value = this.state.value;
        return this.isEmptyValue(value) ? [] : [value];
    }

    get firstEmptyValue() {
        return this._emptyValueSet.values().next().value as string;
    }

    get searchBox() {
        return (this.trigger as PickerMultiSelect | PickerSingleSelect)?.searchBox;
    }

    get value() {
        return this.props.value ?? this.state.value;
    }

    focusSearch(search?: string) {
        const {searchBox} = this;
        if (searchBox) {
            if (typeof search === 'string') {
                searchBox.setSearch(search);
            } else {
                searchBox.focus();
            }
        }
    }

    getDefaultState(props?: RenderableProps<O>) {
        const sourceProps = props || this.props;
        const {items, valueSplitter = ',', emptyValue = ''} = sourceProps;
        const state = {
            ...super.getDefaultState(props),
            loading: false,
            search: '',
            items: Array.isArray(items) ? items : [],
            selections: [],
        };
        this._emptyValueSet = new Set(typeof emptyValue === 'string' ? emptyValue.split(valueSplitter) : []);

        if (Array.isArray(items) && items.length) {
            const {limitValueInList, required, multiple} = sourceProps;
            if (limitValueInList) {
                const valueMap = getValueMap(items as PickerItemOptions[]);
                state.value = this.formatValueList(state.value, valueSplitter).filter(x => valueMap.has(x)).join(valueSplitter);
                if (required && !multiple && !this.formatValueList(state.value, valueSplitter).length) {
                    state.value = (items[0].value ?? '') as string;
                }
            }
        }

        return state;
    }

    isEmptyValue(value: string) {
        return this._emptyValueSet.has(value);
    }

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
            if (!item.disabled && !item.items) {
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

        const {items: itemsSetting = [], searchDelay} = this.props;
        const {search = ''} = this.state;
        let items: ListItem[] = [];
        if (!Array.isArray(itemsSetting)) {
            abort = new AbortController();
            this._abort = abort;
            await delay(searchDelay || 500);
            if (this._abort !== abort) {
                return items;
            }
            let ajaxSetting = itemsSetting;
            if (typeof ajaxSetting === 'string') {
                ajaxSetting = {url: ajaxSetting};
            }
            if (typeof ajaxSetting === 'object' && ajaxSetting.url) {
                ajaxSetting = {
                    ...ajaxSetting,
                    url: formatString(ajaxSetting.url, {search: encodeURIComponent(search), 'search:base64': encodeBase64(search)}),
                };
            }
            try {
                const loadedItems = await fetchData(ajaxSetting as ListItemsFetcher, [this, search], {signal: abort.signal});
                items = Array.isArray(loadedItems) ? loadedItems : [];
            } catch (error) {
                items = [];
                if (!abort.signal.aborted) {
                    console.warn('[ZUI] Picker: Failed to load items.', this.props.name, {error});
                }
            }
            if (abort.signal.aborted || this._abort !== abort) {
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
                const map = new Map<string, PickerItemOptions>();
                if (Array.isArray(prevState.items) && prevState.items !== newState.items) {
                    getValueMap(prevState.items as PickerItemOptions[], map);
                }
                if (Array.isArray(items)) {
                    getValueMap(items, map);
                    newState.selections = this.formatValueList(newState.value ?? prevState.value).reduce<PickerItemBasic[]>((list, value) => {
                        if (!this.isEmptyValue(value)) {
                            list.push(map.get(value) || {value, text: value});
                        }
                        return list;
                    }, []);
                }
            }
            return newState;
        }, callback);
    }

    async update(force?: boolean) {
        if (this._destroyed) {
            return;
        }
        const {state, props} = this;
        const cache = this._itemsCacheInfo || {};
        const newState: Partial<S> = {};
        this._itemsCacheInfo = cache;
        if (!state.loading && (force || cache.search !== state.search || props.items !== cache.items)) {
            await this.changeState({loading: true} as Partial<S>);
            let loadItems = await this.load();
            if (this._destroyed) {
                return;
            }
            const filterItems = (items: ListItem[]): PickerItemOptions[] => {
                return items.reduce<PickerItemOptions[]>((filteredItems, item) => {
                    const value = typeof item.value === 'number' ? String(item.value) : item.value;
                    if (this.isEmptyValue(value as string)) {
                        return filteredItems;
                    }
                    filteredItems.push({
                        ...item,
                        key: item.key ?? value as string,
                        value,
                        items: Array.isArray(item.items) ? filterItems(item.items as ListItem[]) : item.items,
                    } as PickerItemOptions);
                    return filteredItems;
                }, []);
            };
            loadItems = filterItems(loadItems);
            if (state.search !== this.state.search || props.items !== this.props.items) {
                await this.changeState({loading: false} as Partial<S>);
                return;
            }
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
        if (props.limitValueInList && props.required && !props.multiple && this.isEmptyValue(this.state.value) && Array.isArray(newItems) && newItems.length) {
            newState.value = newItems[0].value;
        }
        if (Object.keys(newState).length) {
            await this.changeState(newState);
        }
    }

    async tryUpdate() {
        if (this._destroyed) {
            return;
        }
        if (this._updateTimer) {
            clearTimeout(this._updateTimer);
        }
        this._updateTimer = window.setTimeout(() => {
            this._updateTimer = 0;
            void this.update();
        }, 50);
    }

    componentDidUpdate(previousProps: Readonly<O>, previousState: Readonly<S>): void {
        super.componentDidUpdate(previousProps, previousState);
        if (previousState.search !== this.state.search) {
            this._abort?.abort();
            this._abort = undefined;
        }
        this.tryUpdate();
    }

    componentDidMount(): void {
        super.componentDidMount();
        this.tryUpdate();

        const {shareSelections} = this.props;
        if (shareSelections) {
            const sharedPickers = Picker.sharedPickers.get(shareSelections) || new Set();
            sharedPickers.add(this as unknown as Picker);
            Picker.sharedPickers.set(shareSelections, sharedPickers);
        }
    }

    componentWillUnmount(): void {
        this._destroyed = true;
        this._abort?.abort();
        this._abort = undefined;
        this._itemsCacheInfo = undefined;
        clearTimeout(this._updateTimer);

        const {shareSelections} = this.props;
        if (shareSelections) {
            const sharedPickers = Picker.sharedPickers.get(shareSelections) || new Set();
            sharedPickers.delete(this as unknown as Picker);
            if (!sharedPickers.size) {
                Picker.sharedPickers.delete(shareSelections);
            }
        }

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
            caretClass: props.caretClass,
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

    protected _handlePickValue = (options: {toggle?: string; select?: string | string[]; diselect?: string | string[]}) => {
        const {toggle, select, diselect} = options;
        if (toggle !== undefined) {
            this.toggleValue(toggle);
        } else if (select !== undefined) {
            this.select(select);
        } else if (diselect !== undefined) {
            this.deselect(diselect);
        }
        if (this.props.multiple) {
            if (this.props.clearSearchOnSelect && this.state.search?.length) {
                this.focusSearch('');
            }
        } else {
            this.toggle(false);
            this.searchBox?.clear();
        }
    };

    protected _getMenuItem = (item: NestedItem) => {
        if (this._sharedValueSet?.has(item.value as string)) {
            return {...item, disabled: true};
        }
        return item;
    };

    protected _getPopProps(props: RenderableProps<O>, state: Readonly<S>): PickerMenuProps<S> {
        if (props.shareSelections) {
            this._sharedValueSet = props.getSharedValues ? new Set(props.getSharedValues(props.shareSelections)) : Picker.getSharedSelections(props.shareSelections);
        }
        return {
            ...super._getPopProps(props, state),
            picker: this as unknown as Picker,
            menu: props.menu,
            tree: props.tree,
            getItem: props.shareSelections ? this._getMenuItem : undefined,
            checkbox: props.checkbox,
            multiple: props.multiple,
            search: props.search,
            maxItemsCount: props.maxItemsCount,
            noNestedPick: props.noNestedPick,
            footer: this._renderToolbar(),
            valueList: this.valueList,
            noFlipAfterShow: true,
            noMatchHint: state.loading ? i18n.getLang('loadingHint') : (props.searchEmptyHint ?? i18n.getLang('searchEmptyHint')),
            exceedLimitHint: props.exceedLimitHint ?? i18n.getLang('exceedLimitHint'),
            onDeselect: this.deselect,
            onSelect: this.select,
            onClear: this.clear,
            onToggleValue: this.toggleValue,
            onSetValue: this.setValue,
            onPick: this._handlePickValue,
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
        return Toolbar.render(toolbar, [], {size: 'sm', relativeTarget: this, getItem: (item) => {
            const nextItem = {...item};
            if (!nextItem.onClick) {
                if (nextItem.key === 'selectAll') {
                    nextItem.onClick = this.selectAll.bind(this);
                    nextItem.disabled = this.isSelectedAll();
                } else if (nextItem.key === 'cancelSelect') {
                    nextItem.onClick = this.deselectAll.bind(this);
                    nextItem.disabled = !this.valueList.length;
                }
            }
            return nextItem;
        }}, this);
    }

    formatValueList(value: unknown, valueSplitter?: string): string[] {
        let list: unknown[];
        if (typeof value === 'string' && value.length) {
            list = value.split(valueSplitter ?? this.props.valueSplitter ?? ',');
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

    static sharedPickers = new Map<string, Set<Picker>>();

    static getSharedSelections(name: string): Set<string> {
        const valueSet = new Set<string>();
        const sharedPickers = Picker.sharedPickers.get(name) || new Set();
        sharedPickers.forEach((picker) => {
            picker.valueList.forEach(value => valueSet.add(value));
        });
        return valueSet;
    }
}
