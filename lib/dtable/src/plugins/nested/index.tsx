import {classes} from '@zui/browser-helpers/src/classes';
import {definePlugin} from '../../helpers/shared-plugins';
import '@zui/css-icons/src/icons/toggle.css';
import './style.css';
import type {ColInfo} from '../../types/col';
import type {CustomRenderResult} from '../../types/common';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';
import type {RowInfo, RowData, RowID, RowProps} from '../../types/row';

export enum NestedRowState {
    unknown = '',
    collapsed = 'collapsed',  // As collapsed parent and show
    expanded = 'expanded',   // As expanded parent and show
    hidden = 'hidden',     // As collapsed parent or child and hidden
    normal = 'normal',     // As expanded child and show
}

export type NestedRowInfo = {
    state: NestedRowState;
    level: number;
} & Partial<{
    children: string[];
    parent: string;
    order: number;
}>;

export type DTableSortableOptions = Partial<{
    checkable: boolean;
    canSortTo: (this: DTableNested, from: RowInfo, to: RowInfo, moveType: string) => boolean;
    beforeCheckRows: (this: DTableNested, ids: string[] | undefined, changes: Record<string, boolean>, checkedRows: Record<string, boolean>) => void;
}>;

export type DTableSortableTypes = {
    options: Partial<DTableSortableOptions & {
        nested: boolean | 'auto';
        nestedParentKey: string;
        asParentKey: string;
        nestedIndent: number;
        onNestedChange: () => void;
        onRenderNestedToggle: (this: DTableNested, info: NestedRowInfo | undefined, rowID: string, col: ColInfo, rowData: RowData | undefined) => CustomRenderResult;
    }>,
    state: {
        collapsedRows?: Record<string, boolean>;
    },
    col: Partial<{
        nestedToggle: boolean;
        nestedIndent: number | boolean;
    }>,
    data: {
        nestedMap: Map<string, NestedRowInfo>,
    },
    methods: {
        getNestedInfo: typeof getNestedInfo;
        toggleRow: typeof toggleRow;
        isAllCollapsed: typeof isAllCollapsed;
        getNestedRowInfo: typeof getNestedRowInfo;
    }
};

export type DTableNested = DTableWithPlugin<DTableSortableTypes>;

function getNestedRowInfo(this: DTableNested, rowID: string): NestedRowInfo {
    const info = this.data.nestedMap.get(rowID);
    if (!info || info.state !== NestedRowState.unknown) {
        return info ?? {state: NestedRowState.normal, level: -1};
    }
    if (!info.parent && !info.children) {
        info.state = NestedRowState.normal;
        return info;
    }
    const collapsedRows = this.state.collapsedRows as (Record<string, true> | undefined);
    const isRowCollapsed = info.children && collapsedRows && collapsedRows[rowID];
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
    info.state = isParentCollapsed ? NestedRowState.hidden : isRowCollapsed ? NestedRowState.collapsed : info.children ? NestedRowState.expanded : NestedRowState.normal;
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
    let collapsedRows: Record<string, boolean> = this.state.collapsedRows as Record<string, true> ?? {};
    const {nestedMap} = this.data;
    if (rowID === 'HEADER') {
        if (collapsed === undefined) {
            collapsed = !isAllCollapsed.call(this);
        }
        if (collapsed) {
            const infos = nestedMap.entries();
            for (const [id, info] of infos) {
                if (info.state === NestedRowState.expanded) {
                    collapsedRows[id] = true;
                }
            }
        } else {
            collapsedRows = {};
        }
    } else {
        const ids = Array.isArray(rowID) ? rowID : [rowID];
        if (collapsed === undefined) {
            collapsed = !collapsedRows[ids[0]];
        }
        ids.forEach(id => {
            const info = nestedMap.get(id);
            if (collapsed && info?.children) {
                collapsedRows[id] = true;
            } else {
                delete collapsedRows[id];
            }
        });
    }
    this.update({
        dirtyType: 'layout',
        state: {collapsedRows: {...collapsedRows}},
    }, () => {
        this.options.onNestedChange?.call(this);
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

const nestedPlugin: DTablePlugin<DTableSortableTypes> = {
    name: 'nested',
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
                const info = checkNestedRow(this, rowID, checked, result);
                if (info?.parent) {
                    updateParentRow(this, info.parent, checked, result, checkedRows);
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
        return {nestedMap: new Map()};
    },
    methods: {
        toggleRow,
        isAllCollapsed,
        getNestedRowInfo,
    },
    beforeLayout() {
        this.data.nestedMap.clear();
    },
    onAddRow(row) {
        const {nestedMap} = this.data;
        const parent = row.data?.[this.options.nestedParentKey ?? 'parent'] as string;
        const info: NestedRowInfo = nestedMap.get(row.id) ?? {
            state: NestedRowState.unknown,
            level: 0,
        };
        info.parent = parent;
        if (row.data?.[this.options.asParentKey ?? 'asParent']) {
            info.children = [];
        }
        nestedMap.set(row.id, info);

        if (parent) {
            let parentInfo = nestedMap.get(parent);
            if (!parentInfo) {
                parentInfo = {
                    state: NestedRowState.unknown,
                    level: 0,
                };
                nestedMap.set(parent, parentInfo);
            }
            if (!parentInfo.children) {
                parentInfo.children = [];
            }
            parentInfo.children.push(row.id);
        }
    },
    onAddRows(rows) {
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
    onRenderCell(result, {col, row}) {
        const {id: rowID, data: rowData} = row;
        const {nestedToggle} = col.setting;
        const info = this.getNestedRowInfo(rowID);
        if (nestedToggle && (info.children || info.parent)) {
            result.unshift(this.options.onRenderNestedToggle?.call(this, info, rowID, col, rowData) ?? (<a role="button" className={`dtable-nested-toggle state${info.children ? '' : ' is-no-child'}`}><span className="toggle-icon"></span></a>));
        }
        if (info.level) {
            let {nestedIndent = nestedToggle} = col.setting;
            if (nestedIndent) {
                if (nestedIndent === true) {
                    nestedIndent = this.options.nestedIndent ?? 12;
                }
                result.unshift(<div className="dtable-nested-indent" style={{width: nestedIndent * info.level + 'px'}} />);
            }
        }
        return result;
    },
    onRenderHeaderCell(result, {row, col}) {
        const {id: rowID} = row;
        if (col.setting.nestedToggle) {
            result.unshift(this.options.onRenderNestedToggle?.call(this, undefined, rowID, col, undefined) ?? (<a type="button" className="dtable-nested-toggle state"><span className="toggle-icon"></span></a>));
        }
        return result;
    },
    onRenderRow({props, row}) {
        const info = this.getNestedRowInfo(row.id);
        return {
            className: classes(props.className, `is-${info.state}`),
            'data-parent': info.parent,
        };
    },
    onRenderHeaderRow({props}): RowProps {
        props.className = classes(props.className, `is-${this.isAllCollapsed() ? NestedRowState.collapsed : NestedRowState.expanded}`);
        return props;
    },
    onHeaderCellClick(event) {
        const target = event.target as HTMLElement;
        if (!target) {
            return;
        }
        const toggleElement = target.closest<HTMLElement>('.dtable-nested-toggle');
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
        const toggleElement = target.closest<HTMLElement>('.dtable-nested-toggle');
        if (!toggleElement) {
            return;
        }
        this.toggleRow(rowID);
        return true;
    },
};

export const nested = definePlugin(nestedPlugin);
