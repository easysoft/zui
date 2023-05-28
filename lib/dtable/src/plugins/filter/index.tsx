import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';
import type {DTableWithPlugin, DTablePlugin, DTablePluginTypes} from '../../types/plugin';
import {classes, ClassNameLike} from '@zui/core';
import type {RowInfo} from '../../types/row';
import {ComponentChildren, render} from 'preact';

export type DTableSortableOptions = Partial<{
    checkable: boolean;
    canSortTo: (this: DTableNested, from: RowInfo, to: RowInfo, moveType: string) => boolean;
    beforeCheckRows: (this: DTableNested, ids: string[] | undefined, changes: Record<string, boolean>, checkedRows: Record<string, boolean>) => void;
}>;

export interface DTableFilterTypes extends DTablePluginTypes {
    options: Partial<{
        filterable: boolean;
        filterClassName: ClassNameLike;
        filterHandler: string;
        reset: (event: Event) => void;
        submit: (event: Event) => void;
        onRemove: (this: DTableFilterable, from: RowInfo, to: RowInfo, orders: string[]) => void;
        filter: {icon: string, className: string};

    }>
    col: Partial<{
        filterable: boolean;
        filter: {icon: string, className: string};
        reset: (event: Event) => void;
        submit: (event: Event) => void;
    }>
    methods: {

    }
    state: {
        id: string;
        filterOptions: FilterDataOptions[];
    }
}

export interface FilterDataOptions {
    text: string;
    key: string;
}
let filterOptions = [];
function getFilterOptions(setting = {type: '', name: '', statusMap: {}}, data = []): FilterDataOptions[] {
    let filterOption = [];
    if (setting.type === 'status') {
        for (const key in setting.statusMap) {
            const item: FilterDataOptions = {
                text: setting.statusMap[key],
                key: key,
            };
            filterOption.push(item);
        }
    } else if (setting.type === 'avatarBtn') {
        const dataFilter = data.map(({manager, managerAccount})=>{
            return {text: manager, key: managerAccount};
        });
        filterOption = unique(dataFilter);
    } else {
        const dataFilter = data.map((item)=>{
            return {text: item[setting.name], key: item.id};
        });
        filterOption = unique(dataFilter);
    }
    filterOptions = filterOption;
    return filterOption;
}

function unique(arr: FilterDataOptions[]) {
    if (!arr.length) return [];
    const res = new Map();
    // && !res.has(item.key) && res.set(item.key, 1)
    return arr.filter((item: FilterDataOptions)=> !res.has(item.text) && res.set(item.text, 1));
}

function onInput(e:Event, name: string) {
    const inputValue = e.target.value;
    if (!inputValue) {
        updateList(filterOptions, name);
    } else {
        const filterResult = filterOptions.filter(function (item) {
            return item.text.indexOf(inputValue) !== -1;
        });
        updateList(filterResult, name);
    }
}

function updateList(data = [], id = '') {
    const newList = data.map((item: FilterDataOptions) => {
        return (
            <li class="menu-item not-hide-menu">
                <div class="checkbox-primary">
                    <input type="checkbox" id={item.key} />
                    <label for={item.key}>{item.text}</label>
                </div>
            </li>
        );
    });
    const targetElement = document.querySelector(`#${id} .filter-list`);
    if (!targetElement) return;
    targetElement.innerHTML = '';
    render((newList), targetElement);
}

function renderFilterContent(className = '', filterData = [], name = '') {
    let filterContent:ComponentChildren = null;
    filterContent = (
        <menu class={classes('dropdown-menu menu', 'dtable-filter-content', ...className)}  id={name}>
            <li class="menu-item not-hide-menu">
                <div class="input-control prefix-sm suffix-sm">
                    <span class="input-control-prefix"><i class="icon icon-search"></i></span>
                    <input type="text" class="form-control" placeholder="请填写" onInput={(e) => {onInput(e, name);}}/>
                </div>
            </li>
            <div class="filter-list">
                {filterData.map((item: FilterDataOptions) => {
                    // if (!item.key) {
                    //     return null;
                    // }
                    return (
                        <li class="menu-item not-hide-menu">
                            <div class="checkbox-primary">
                                <input type="checkbox" id={item.key}/>
                                <label for={item.key}>{item.text}</label>
                            </div>
                        </li>
                    );
                })}
            </div>
            <li class="menu-item menu-btns">
                <button type="button" class="btn size-sm filter-reset not-hide-menu" onClick={onReset}>重置</button>
                <button type="button" class="btn size-sm primary filter-submit" onClick={onSubmit}>确定</button>
            </li>
        </menu>
    );
    render((filterContent), document.body);
}

// function handleChecked(event: Event) {
//     if (!event?.target) {
//         return;
//     }
//     if (event.target.checked) {
//         const checkedText = event.target.nextSibling.innerHTML;
//         const pickerSelection = (
//             <div class="picker-selection">
//                 <span class="picker-selection-text">{checkedText}</span>
//                 <span class="icon icon-close picker-selection-remove"></span>
//             </div>
//         );
//         updateInputValue(pickerSelection);
//     }
// }

// function updateInputValue(selection: ComponentChildren) {
//     const targetElement = document.querySelector('.dtable-filter-content .form-control');
//     if (!targetElement) return;
//     render((<div class="picker-selections">{selection}</div>), targetElement.parentNode);
// }

function onReset(event: Event) {
    const target = event.target as HTMLElement;
    if (!target) {
        return;
    }
    const filterContentElement = target.closest<HTMLInputElement>('.dtable-filter-content');

    if (!filterContentElement) {
        return;
    }
    const filterInput = filterContentElement.querySelector('.form-control');
    const checkoboxs = filterContentElement.querySelectorAll('input[type="checkbox"]');
    if (!filterInput || !checkoboxs?.length)  {
        return;
    }
    filterInput.value = '';
    checkoboxs.forEach(checkoboxItem => {
        checkoboxItem.checked = false;
    });
}

function onSubmit() {
    console.log('onSubmit');
}

export type DTableFilterable = DTableWithPlugin<DTableFilterTypes>;

const filterPlugin: DTablePlugin<DTableFilterTypes> = {
    name: 'filterable',
    defaultOptions: {
        filterable: true,
        filterHref: '',
    },
    onRenderHeaderCell(result, {col}) {
        const {filterable: filterTypeSetting, filter = {icon: '', className: ''}, name} = col.setting;
        if (filterTypeSetting) {
            const href = `${name}FilterContent`;
            this.state.id = href;
            const filterIcon = filter.icon || 'icon-filter';
            result.push(
                <button class="dtable-filter" data-toggle="dropdown" href={'#' + href}><i className={classes('icon', filterIcon)}></i></button>,
            );
            if (!this.options.data?.length) return;
            const filterList = getFilterOptions(col.setting, this.options.data) || [];
            this.state.filterOptions = filterList;
            renderFilterContent(filter.className, filterList, href);
        }
        return result;
    },
    when: options => !!options.filterable,
};

export const filterable = definePlugin(filterPlugin);
