import {classes} from '@zui/browser-helpers/src/classes';
import {CustomRenderResult} from '../../types/custom-render-result';
import {DTablePlugin, DTableWithPlugin} from '../../types/plugin';
import {RowInfo} from '../../types/row-info';
import {RowProps} from '../../types/row-props';
import {definePlugin} from '../../helpers/shared-plugins';
import {RowData, RowID} from '../../types/row-data';
import {ColInfo} from '../../types/col-info';
import './style.css';

enum NestedRowState {
    unknown = '',
    collapsed = 'collapsed',  // As collapsed parent and show
    expanded = 'expanded',   // As expanded parent and show
    hidden = 'hidden',     // As collapsed parent or child and hidden
    normal = 'normal',     // As expanded child and show
}

type NestedRowInfo = {
    state: NestedRowState;
    children?: RowID[];
    parent?: RowID;
    level: number;
    order?: number;
};

type NestedDTable = DTableWithPlugin<DTableNestedOptions & DTableSortableOptions, DTableNestedState> & DTableNestedProps;

function getNestedRowInfo(this: NestedDTable, rowID: RowID): NestedRowInfo {
    const info = this.nestedMap.get(rowID);
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

function toggleRow(this: NestedDTable, rowID: RowID | (RowID)[], collapsed?: boolean) {
    let collapsedRows: Record<string, boolean> = this.state.collapsedRows as Record<string, true> ?? {};
    if (rowID === 'HEADER') {
        if (collapsed === undefined) {
            collapsed = !isAllCollapsed.call(this);
        }
        if (collapsed) {
            const infos = this.nestedMap.entries();
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
            const info = this.nestedMap.get(id);
            if (collapsed && info?.children) {
                collapsedRows[id] = true;
            } else {
                delete collapsedRows[id];
            }
        });
    }
    this.setState({collapsedRows: {...collapsedRows}}, () => {
        this.options.onNestedChange?.call(this);
    });
}

function isAllCollapsed(this: NestedDTable): boolean {
    const infos = this.nestedMap.values();
    for (const info of infos) {
        if (info.state === NestedRowState.expanded) {
            return false;
        }
    }
    return true;
}

function updateNestedMapOrders(map: Map<RowID, NestedRowInfo>, lastOrder = 0, ids?: RowID[]): number {
    if (!ids) {
        ids = [...map.keys()];
    }
    for (const id of ids) {
        const info = map.get(id);
        if (!info || typeof info.order === 'number') {
            continue;
        }
        info.order = lastOrder++;
        if (info.children?.length) {
            lastOrder = updateNestedMapOrders(map, lastOrder, info.children);
        }
    }
    return lastOrder;
}

interface DTableSortableOptions {
    canSortTo?: (this: NestedDTable, from: RowInfo, to: RowInfo, moveType: string) => boolean;
}

export interface DTableNestedOptions {
    nested?: boolean;
    nestedParentKey?: string;
    asParentKey?: string;
    nestedIndent?: number;
    onNestedChange?: () => void;
    onRenderNestedToggle?: (this: NestedDTable, info: NestedRowInfo | undefined, rowID: RowID, col: ColInfo, rowData: RowData | undefined) => CustomRenderResult;
}

export interface DTableNestedState {
    collapsedRows?: Record<string, boolean>;
}

export interface DTableNestedColSetting {
    nestedToggle?: boolean;
    nestedIndent?: number | boolean;
}

export interface DTableNestedProps {
    nestedMap: Map<RowID, NestedRowInfo>,
    toggleRow: typeof toggleRow;
    isAllCollapsed: typeof isAllCollapsed;
    getNestedRowInfo: typeof getNestedRowInfo;
}

export const nested: DTablePlugin<DTableNestedOptions & DTableSortableOptions, DTableNestedState, DTableNestedColSetting, DTableNestedProps> = {
    name: 'nested',
    defaultOptions: {
        nested: true,
        nestedParentKey: 'parent',
        asParentKey: 'asParent',
        nestedIndent: 16,
        canSortTo(from, to) {
            const fromInfo = this.nestedMap.get(from.id);
            const toInfo = this.nestedMap.get(to.id);
            return fromInfo?.parent === toInfo?.parent;
        },
    },
    when: options => !!options.nested,
    onCreate() {
        this.nestedMap = new Map();
        this.toggleRow = toggleRow.bind(this);
        this.isAllCollapsed = isAllCollapsed.bind(this);
        this.getNestedRowInfo = getNestedRowInfo.bind(this);
    },
    beforeLayout() {
        this.nestedMap.clear();
    },
    onAddRow(row) {
        const parent = row.data[this.options.nestedParentKey ?? 'parent'] as RowID;
        const info: NestedRowInfo = this.nestedMap.get(row.id) ?? {
            state: NestedRowState.unknown,
            parent,
            level: 0,
        };
        if (row.data[this.options.asParentKey ?? 'asParent']) {
            info.children = [];
        }
        this.nestedMap.set(row.id, info);

        if (parent) {
            let parentInfo = this.nestedMap.get(parent);
            if (!parentInfo) {
                parentInfo = {
                    state: NestedRowState.unknown,
                    level: 0,
                };
                this.nestedMap.set(parent, parentInfo);
            }
            if (!parentInfo.children) {
                parentInfo.children = [];
            }
            parentInfo.children.push(row.id);
        }
    },
    onAddRows(rows) {
        rows = rows.filter(row => this.getNestedRowInfo(row.id).state !== NestedRowState.hidden);
        updateNestedMapOrders(this.nestedMap);
        rows.sort((rowA, rowB) => {
            const infoA = this.getNestedRowInfo(rowA.id);
            const infoB = this.getNestedRowInfo(rowB.id);
            const result = (infoA.order ?? 0) - (infoB.order ?? 0);
            return result === 0 ? (rowA.index - rowB.index) : result;
        });
        return rows;
    },
    onRenderCell(result, {rowID, col, rowData}): CustomRenderResult {
        const {nestedToggle} = col.setting;
        const info = this.getNestedRowInfo(rowID);
        if (nestedToggle && (info.children || info.parent)) {
            result.unshift(this.options.onRenderNestedToggle?.call(this, info, rowID, col, rowData) ?? (<a role="button" className={`dtable-nested-toggle state${info.children ? '' : ' is-no-child'}`}><span className="dtable-nested-toggle-icon"></span></a>));
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
    onRenderHeaderCell(result, {rowID, col}): CustomRenderResult {
        if (col.setting.nestedToggle) {
            result.unshift(this.options.onRenderNestedToggle?.call(this, undefined, rowID, col, undefined) ?? (<a type="button" className="dtable-nested-toggle state"><span className="dtable-nested-toggle-icon"></span></a>));
        }
        return result;
    },
    onRenderRow({props, row}) {
        const info = this.getNestedRowInfo(row.id);
        return {
            className: classes(props.className, `is-nested-${info.state}`),
            'data-parent': info.parent,
        };
    },
    onRenderHeaderRow({props}): RowProps {
        props.className = classes(props.className, `is-nested-${this.isAllCollapsed() ? NestedRowState.collapsed : NestedRowState.expanded}`);
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

export default definePlugin<DTableNestedOptions, DTableNestedState, DTableNestedColSetting, DTableNestedProps>(nested);
