import {clamp} from '../../helpers/number';
import {definePlugin} from '../../helpers/shared-plugins';
import {mousemove} from '../mousemove';
import './style.css';

import type {DTableMousemoveTypes} from '../mousemove';
import type {ColInfo, ColName} from '../../types/col';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';

export interface DTableResizeTypes {
    options: Partial<{
        colResize: boolean | ((this: DTableResize, colName: ColName) => boolean);
        onColResize: (this: DTableResize, colName: ColName, sizeChange: number, col: ColInfo) => void;
    }>,
    col: {
        colResize?: boolean | ((this: DTableResize, colName: ColName) => boolean);
        extraWidth?: number;
    },
    state: {
        colResizing?: {colName: ColName, startX: number, startSize: number}
        colsSizes: Record<ColName, number>;
    },
    data: {
        colOriginSize: Map<ColName, number>;
    },
    methods: {
        isColResizable(this: DTableResize, col: ColName | ColInfo): boolean | void;
    }
}

export type DTableResize = DTableWithPlugin<DTableResizeTypes, [DTableMousemoveTypes]>;

function updateColSize(table: DTableResize, event: MouseEvent, finish?: boolean): void {
    const {colResizing} = table.state;
    if (!colResizing) {
        return;
    }
    const delta = Math.round(event.clientX - colResizing.startX);
    if (!delta && !finish) {
        return;
    }
    const state: Partial<DTableResize['state']> = {};
    if (finish) {
        state.colResizing = undefined;
    }
    const {colName} = colResizing;
    let col = table.getColInfo(colName);
    if (!col) {
        return table.update({dirtyType: 'layout', state});
    }
    state.colsSizes = {
        ...state.colsSizes,
        [colName]: colResizing.startSize + delta,
    };
    table.update({dirtyType: 'layout', state}, finish ? () => {
        col = table.getColInfo(colName);
        if (col) {
            const originWidth = table.data.colOriginSize.get(colName)!;
            table.options.onColResize?.call(table, colName, col.width - originWidth, col);
        }
    } : undefined);
    event.stopPropagation();
    event.preventDefault();
}

const resizePlugin: DTablePlugin<DTableResizeTypes, [DTableMousemoveTypes]> = {
    name: 'resize',
    when: options => !!options.colResize,
    plugins: [mousemove],
    state() {
        return {colsSizes: {}};
    },
    data() {
        return {colOriginSize: new Map()};
    },
    events: {
        mousedown(event) {
            const splitter = (event.target as HTMLElement).closest('.dtable-col-splitter');
            if (!splitter) {
                return;
            }
            const colName = splitter.closest<HTMLElement>('.dtable-cell')?.dataset.col;
            if (!colName) {
                return;
            }
            this.setState({
                colResizing: {
                    colName: colName,
                    startSize: this.state.colsSizes[colName] ?? 0,
                    startX: event.clientX,
                },
            });
            event.stopPropagation();
            return false;
        },
        dblclick(event) {
            const splitter = (event.target as HTMLElement).closest('.dtable-col-splitter');
            if (!splitter) {
                return;
            }
            const colName = splitter.closest<HTMLElement>('.dtable-cell')?.dataset.col;
            if (!colName) {
                return;
            }
            const {colsSizes} = this.state;
            if (colsSizes[colName]) {
                delete colsSizes[colName];
                this.update({dirtyType: 'layout', state: {
                    colResizing: undefined,
                    colsSizes: {...colsSizes},
                }}, () => {
                    this.options.onColResize?.call(this, colName, 0, this.getColInfo(colName)!);
                });
            }
        },
        document_mouseup(event) {
            if (!this.state.colResizing) {
                return;
            }
            updateColSize(this, event as MouseEvent, true);
            return false;
        },
        document_mousemovesmooth(event) {
            if (!this.state.colResizing) {
                return;
            }
            updateColSize(this as DTableResize, event);
            return false;
        },
    },
    methods: {
        isColResizable(col?: ColName | ColInfo): boolean | void {
            if (typeof col === 'string') {
                col = this.getColInfo(col);
            }
            if (!col) {
                return;
            }
            if (col.sideIndex === this.layout.cols[col.side].list.length - 1) {
                return;
            }
            let colResize = col.setting.colResize ?? this.options.colResize;
            if (typeof colResize === 'function') {
                colResize = colResize.call(this, col.name);
            }
            return !!colResize;
        },
    },
    onRenderHeaderCell(result, {col}) {
        if (this.isColResizable(col)) {
            result.push({
                className: 'has-col-splitter',
                children: <div className="dtable-col-splitter no-cell-event"></div>,
                outer: true,
            });
            if (this.state.colResizing?.colName === col.name) {
                result.push({
                    className: 'has-col-resizing',
                    outer: true,
                });
            }
        }
        return result;
    },
    onRenderCell(result, {col}) {
        if (this.state.colResizing?.colName === col.name) {
            result.push({
                className: 'is-col-resizing',
                outer: true,
            });
        }
        return result;
    },
    onAddCol(col) {
        const sizeChange = this.state.colsSizes[col.name] ?? col.setting.extraWidth;
        if (typeof sizeChange === 'number') {
            this.data.colOriginSize.set(col.name, col.width);
            col.width = clamp(col.width + sizeChange, col.setting.minWidth, col.setting.maxWidth);
        }
    },
    onRender() {
        if (this.state.colResizing) {
            return {className: 'has-col-resizing'};
        }
    },
};

export const resize = definePlugin(resizePlugin);
