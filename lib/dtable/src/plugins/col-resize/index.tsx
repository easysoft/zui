import {clamp} from '../../helpers/clamp';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';

export interface DTableColResizeTypes extends DTablePluginTypes {
    options: Partial<{
        colResize: boolean;
        onColResize: (this: DTableColResize, colName: ColName, width: number) => void;
    }>,
    state: {
        colResizing?: {colName: ColName, startX: number, startSize: number}
        colsSizes: Record<ColName, number>;
    },
    data: {
        colResizingRaf?: number;
    }
}

export type DTableColResize = DTableWithPlugin<DTableColResizeTypes>;

function updateColSize(table: DTableColResize, event: MouseEvent, finish?: boolean): void {
    const {colResizing} = table.state;
    if (!colResizing) {
        return;
    }
    const delta = Math.round(event.clientX - colResizing.startX);
    if (!delta) {
        return;
    }
    const {colsSizes} = table.state;
    colsSizes[colResizing.colName] = colResizing.startSize + delta;
    if (finish) {
        table.state.colResizing = undefined;
    }
    table.update({dirtyType: 'layout'}, () => {
        table.options.onColResize?.call(table, colResizing.colName, colsSizes[colResizing.colName]);
    });
    event.stopPropagation();
    event.preventDefault();
}

function tryUpdateColSize(table: DTableColResize, event: MouseEvent, finish?: boolean): void {
    if (table.data.colResizingRaf) {
        cancelAnimationFrame(table.data.colResizingRaf);
        table.data.colResizingRaf = undefined;
    }
    if (finish) {
        updateColSize(table, event, finish);
    } else {
        table.data.colResizingRaf = requestAnimationFrame(() => {
            updateColSize(table, event);
            table.data.colResizingRaf = undefined;
        });
    }
}

export const colResize: DTablePlugin<DTableColResizeTypes> = {
    name: 'col-resize',
    defaultOptions: {
        colResize: true,
    },
    when: options => !!options.colResize,
    state() {
        return {colsSizes: {}};
    },
    events: {
        mousedown(event) {
            const splitter = (event.target as HTMLElement).closest('.dtable-col-splitter');
            if (!splitter) {
                return;
            }
            const info = this.getPointerInfo(event);
            if (!info?.colName) {
                return;
            }
            this.setState({
                colResizing: {
                    colName: info.colName,
                    startSize: this.state.colsSizes[info.colName] ?? 0,
                    startX: event.clientX,
                },
            });
            event.stopPropagation();
            return false;
        },
        document_mousemove(event) {
            tryUpdateColSize(this, event as MouseEvent);
            return false;
        },
        document_mouseup(event) {
            tryUpdateColSize(this, event as MouseEvent, true);
            return false;
        },
    },
    onRenderHeaderCell(result, {col}) {
        if (!col.flex) {
            result.push({
                className: 'has-col-splitter',
                children: <div className="dtable-col-splitter no-selectable-trigger"></div>,
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
    onAddCol(col) {
        const {colsSizes} = this.state;
        const sizeChange = colsSizes[col.name];
        if (typeof sizeChange === 'number') {
            col.width = clamp(col.width + sizeChange, col.setting.minWidth, col.setting.maxWidth);
        }
    },
    onRender() {
        if (this.state.colResizing) {
            return {className: 'has-col-resizing'};
        }
    },
};

export default definePlugin(colResize);
