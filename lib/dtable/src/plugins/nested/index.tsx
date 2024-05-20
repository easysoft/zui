import {formatString} from '@zui/helpers';
import {definePlugin} from '../../helpers/shared-plugins';
import {store} from '../store';
import '@zui/css-icons/src/icons/toggle.css';
import './style.css';

import {ComponentChildren, CustomContent, type CustomContentType} from '@zui/core';
import type {DTableSortableTypes} from '../sortable';
import type {DTableCheckableTypes} from '../checkable';
import type {DTableStoreTypes} from '../store';
import type {ColInfo} from '../../types/col';
import type {CustomRenderResult} from '../../types/common';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {RowData, RowID, RowInfo} from '../../types/row';

export const enum NestedRowState {
    unknown = '',
    collapsed = 'collapsed',  // As collapsed parent and show
    expanded = 'expanded',    // As expanded parent and show
    hidden = 'hidden',        // As collapsed parent or child and hidden
    normal = 'normal',        // As expanded child and show
}

export type NestedRowInfo = {
    state: NestedRowState;
    level: number;
} & Partial<{
    children: string[];
    parent: string;
    order: number;
}>;

export type DTableNestedTypes = {
    options: Partial<{
        nested: boolean | 'auto';
        nestedParentKey: string;
        asParentKey: string;
        nestedIndent: number;
        preserveNested: boolean;
        defaultNestedState: Record<RowID, boolean>;
        onNestedChange: () => void;
        onRenderNestedToggle: (this: DTableNested, info: NestedRowInfo | undefined, rowID: string, col: ColInfo, rowData: RowData | undefined) => CustomRenderResult;
    }>,
    state: {
        nestedState: Record<RowID, boolean>;
    },
    col: Partial<{
        nestedToggle: boolean;
        nestedIndent: number | boolean;
        childLabel?: CustomContentType,
    }>,
    data: {
        nestedMap: Map<RowID, NestedRowInfo>,
        nestedRowMap: Map<RowID, RowInfo>,
    },
    methods: {
        getNestedInfo: typeof getNestedInfo;
        toggleRow: typeof toggleRow;
        isAllCollapsed: typeof isAllCollapsed;
        getNestedRowInfo: typeof getNestedRowInfo;
    }
};

export type DTableNestedDependencies = [DTableSortableTypes, DTableCheckableTypes, DTableStoreTypes];

export type DTableNested = DTableWithPlugin<DTableNestedTypes, DTableNestedDependencies>;

function getNestedRowInfo(this: DTableNested, rowID: RowID): NestedRowInfo {
    const info = this.data.nestedMap.get(rowID);
    if (!info || info.state !== NestedRowState.unknown) {
        return info ?? {state: NestedRowState.normal, level: -1};
    }
    if (!info.parent && !info.children) {
        info.state = NestedRowState.normal;
        return info;
    }
    const isRowCollapsed = info.children && this.state.nestedState[rowID];
    let isParentCollapsed = false;
    let {parent} = info;
    while (parent) {
        const parentInfo = getNestedRowInfo.call(this, parent);
        if (parentInfo.state !== NestedRowState.expanded) {
            isParentCollapsed = true;
            break;
        }
        parent = parentInfo.parent;
    }
    info.state = isParentCollapsed ? NestedRowState.hidden : (isRowCollapsed ? NestedRowState.collapsed : (info.children ? NestedRowState.expanded : NestedRowState.normal));
    info.level = info.parent ? (getNestedRowInfo.call(this, info.parent).level + 1) : 0;
    return info;
}

function getNestedInfo(this: DTableNested, rowID?: string): NestedRowInfo | Map<string, NestedRowInfo> {
    if (rowID !== undefined) {
        return getNestedRowInfo.call(this, rowID);
    }
    return this.data.nestedMap;
}

function toggleRow(this: DTableNested, rowID: RowID | RowID[], collapsed?: boolean) {
    let {nestedState} = this.state;
    const {nestedMap} = this.data;
    if (rowID === 'HEADER') {
        if (collapsed === undefined) {
            collapsed = !isAllCollapsed.call(this);
        }
        if (collapsed) {
            const infos = nestedMap.entries();
            for (const [id, info] of infos) {
                if (info.state === NestedRowState.expanded) {
                    nestedState[id] = true;
                }
            }
        } else {
            nestedState = {};
        }
    } else {
        const ids = Array.isArray(rowID) ? rowID : [rowID];
        if (collapsed === undefined) {
            collapsed = !nestedState[ids[0]];
        }
        ids.forEach(id => {
            const info = nestedMap.get(id);
            if (collapsed && info?.children) {
                nestedState[id] = true;
            } else {
                delete nestedState[id];
            }
        });
    }
    this.update({
        dirtyType: 'layout',
        state: {nestedState: {...nestedState}},
    }, () => {
        const {onNestedChange, preserveNested} = this.options;
        onNestedChange?.call(this);
        if (preserveNested) {
            this.data.store.set('nestedState', nestedState);
        }
    });
}

function isAllCollapsed(this: DTableNested): boolean {
    const infos = this.data.nestedMap.values();
    for (const info of infos) {
        if (info.state === NestedRowState.expanded) {
            return false;
        }
    }
    return true;
}

function updateNestedMapOrders(map: Map<string, NestedRowInfo>, lastOrder = 0, ids?: string[], level = 0): number {
    if (!ids) {
        ids = [...map.keys()];
    }
    for (const id of ids) {
        const info = map.get(id);
        if (!info) {
            continue;
        }
        if (info.level === level) {
            info.order = lastOrder++;
        }
        if (info.children?.length) {
            lastOrder = updateNestedMapOrders(map, lastOrder, info.children, level + 1);
        }
    }
    return lastOrder;
}

function checkNestedRow(dtable: DTableNested, rowID: string, checked: boolean, map: Record<string, boolean>): NestedRowInfo | undefined {
    const info = dtable.getNestedRowInfo(rowID);
    if (!info || info.state === NestedRowState.unknown || !info.children) {
        return info;
    }
    info.children.forEach(childID => {
        map[childID] = checked;
        checkNestedRow(dtable, childID, checked, map);
    });
    return info;
}

function updateParentRow(dtable: DTableNested, parentID: string, checked: boolean, map: Record<string, boolean>, checkedRows: Record<string, boolean>) {
    const info = dtable.getNestedRowInfo(parentID);
    if (!info || info.state === NestedRowState.unknown) {
        return;
    }
    const allChildrenMatched = info.children?.every(childID => {
        const childChecked = !!(map[childID] !== undefined ? map[childID] : checkedRows[childID]);
        return checked === childChecked;
    });
    if (allChildrenMatched) {
        map[parentID] = checked;
    }
    if (info.parent) {
        updateParentRow(dtable, info.parent, checked, map, checkedRows);
    }
}

const nestedToggleClass = 'dtable-nested-toggle';

const nestedPlugin: DTablePlugin<DTableNestedTypes, DTableNestedDependencies> = {
    name: 'nested',
    plugins: [store],
    defaultOptions: {
        nested: 'auto',
        nestedParentKey: 'parent',
        asParentKey: 'asParent',
        nestedIndent: 20,
        canSortTo(from, to) {
            const {nestedMap} = this.data;
            const fromInfo = nestedMap.get(from.id);
            const toInfo = nestedMap.get(to.id);
            return fromInfo?.parent === toInfo?.parent;
        },
        beforeCheckRows(ids: string[] | undefined, changes: Record<string, boolean>, checkedRows: Record<string, boolean>) {
            if (!this.options.checkable || !ids?.length) {
                return;
            }
            const result: Record<string, boolean> = {};
            Object.entries(changes).forEach(([rowID, checked]) => {
                const info = checkNestedRow(this as unknown as DTableNested, rowID, checked, result);
                if (info?.parent) {
                    updateParentRow(this as unknown as DTableNested, info.parent, checked, result, checkedRows);
                }
            });
            return result;
        },
    },
    options(options) {
        if (options.nested === 'auto') {
            options.nested = !!options.cols.some(col => col.nestedToggle);
        }
        return options;
    },
    when: options => !!options.nested,
    data() {
        return {nestedMap: new Map(), nestedRowMap: new Map()};
    },
    state() {
        return {nestedState: {}};
    },
    methods: {
        getNestedInfo,
        toggleRow,
        isAllCollapsed,
        getNestedRowInfo,
    },
    onCreate() {
        let {defaultNestedState} = this.options;
        if (this.options.preserveNested) {
            const localNestedState = this.data.store.get('nestedState');
            if (localNestedState) {
                defaultNestedState = localNestedState as typeof defaultNestedState;
            }
        }
        this.state.nestedState = defaultNestedState || {};
    },
    beforeLayout() {
        this.data.nestedMap.clear();
        this.data.nestedRowMap.clear();
    },
    onAddRow(row) {
        this.data.nestedRowMap.set(row.id, row);
    },
    onAddRows(rows) {
        const {nestedMap, nestedRowMap} = this.data;
        rows.forEach(row => {
            const info: NestedRowInfo = nestedMap.get(row.id) ?? {
                state: NestedRowState.unknown,
                level: 0,
            };
            let parentPath = (row.data?.[this.options.nestedParentKey ?? 'parent'] as undefined | (string | number) | (string | number)[]) ?? [];
            if (!Array.isArray(parentPath)) {
                parentPath = [parentPath];
            }
            let parentID: string | undefined;
            parentPath = [...parentPath];
            while (parentPath.length) {
                let lastParentID = parentPath.pop();
                if (lastParentID === undefined) {
                    continue;
                }
                lastParentID = String(lastParentID);
                const parent = nestedRowMap.get(lastParentID);
                if (parent) {
                    parentID = lastParentID;
                    break;
                }
            }

            info.parent = parentID === '0' ? undefined : parentID;
            if (row.data?.[this.options.asParentKey ?? 'asParent']) {
                info.children = [];
            }
            nestedMap.set(row.id, info);

            if (parentID) {
                let parentInfo = nestedMap.get(parentID);
                if (!parentInfo) {
                    parentInfo = {
                        state: NestedRowState.unknown,
                        level: 0,
                    };
                    nestedMap.set(parentID, parentInfo);
                }
                if (!parentInfo.children) {
                    parentInfo.children = [];
                }
                parentInfo.children.push(row.id);
            }
        });

        rows = rows.filter(row => this.getNestedRowInfo(row.id).state !== NestedRowState.hidden);
        updateNestedMapOrders(this.data.nestedMap);
        rows.sort((rowA, rowB) => {
            const infoA = this.getNestedRowInfo(rowA.id);
            const infoB = this.getNestedRowInfo(rowB.id);
            const result = (infoA.order ?? 0) - (infoB.order ?? 0);
            return result === 0 ? (rowA.index - rowB.index) : result;
        });
        return rows;
    },
    onRenderCell(result, cellInfo) {
        const {row, col} = cellInfo;
        const {id: rowID, data: rowData} = row;
        const {nestedToggle, childLabel} = col.setting;
        const info = this.getNestedRowInfo(rowID);
        if (childLabel) {
            const parent = Number(rowData![this.options.nestedParentKey || 'parent']);
            if (!Number.isNaN(parent) && parent > 0) {
                let labelView: ComponentChildren;
                if (typeof childLabel === 'string') {
                    labelView = <span className="dtable-child-label label rounded-full size-sm gray-pale">{formatString(childLabel, rowData)}</span>;
                } else {
                    labelView = <CustomContent className="dtable-child-label" content={childLabel} generatorThis={cellInfo} />;
                }
                result.unshift(labelView);
            }
        }
        if (nestedToggle && (info.children || info.parent)) {
            result.push(
                this.options.onRenderNestedToggle?.call(this, info, rowID, col, rowData) ?? (<a className={`${nestedToggleClass} state${info.children ? '' : ' is-no-child'}`}><span className="toggle-icon"></span></a>),
                {outer: true, className: `is-${info.state}`},
            );
        }
        if (info.level) {
            let {nestedIndent = nestedToggle} = col.setting;
            if (nestedIndent) {
                if (nestedIndent === true) {
                    nestedIndent = this.options.nestedIndent ?? 12;
                }
                result.push(<div className="dtable-nested-indent" style={{width: nestedIndent * info.level + 'px'}} />);
            }
        }
        return result;
    },
    onRenderHeaderCell(result, {row, col}) {
        const {id: rowID} = row;
        if (col.setting.nestedToggle) {
            result.push(
                this.options.onRenderNestedToggle?.call(this, undefined, rowID, col, undefined) ?? (<a className={`${nestedToggleClass} state`}><span className="toggle-icon"></span></a>),
                {outer: true, className: `is-${this.isAllCollapsed() ? NestedRowState.collapsed : NestedRowState.expanded}`},
            );

        }
        return result;
    },
    onHeaderCellClick(event) {
        const target = event.target as HTMLElement;
        if (!target) {
            return;
        }
        const toggleElement = target.closest<HTMLElement>(`.${nestedToggleClass}`);
        if (!toggleElement) {
            return;
        }
        this.toggleRow('HEADER');
        return true;
    },
    onCellClick(event, {rowID}) {
        const target = event.target as HTMLElement;
        if (!target) {
            return;
        }
        const info = this.getNestedRowInfo(rowID);
        if (!info.children) {
            return;
        }
        const toggleElement = target.closest<HTMLElement>(`.${nestedToggleClass}`);
        if (!toggleElement) {
            return;
        }
        this.toggleRow(rowID);
        return true;
    },
};

export const nested = definePlugin(nestedPlugin);
