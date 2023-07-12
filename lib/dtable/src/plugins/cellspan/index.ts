import {definePlugin} from '../../helpers/shared-plugins';
import {ColInfo, RowInfo} from '../../types';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';

export type DTableColIndex        = number;
export type DTableRowIndex        = number;
export type DTableColID           = `C${DTableColIndex}`;
export type DTableRowID           = `R${DTableRowIndex}`;
export type DTableCellID          = `${DTableColID}${DTableRowID}`;
export type DTableCellSpanSetting = {colSpan: number, rowSpan: number};
export type DTableCellSpanInfo    = DTableCellSpanSetting & {width: number, height: number};

export type DTableCellSpanTypes = {
    data: {
        overlayedCellSet: Set<DTableCellID>;
        cellSpanMap: Map<DTableCellID, DTableCellSpanInfo>;
    },
    options: {
        getCellSpan?: (this: DTableCellSpan, cell: {row: RowInfo, col: ColInfo}) => Partial<DTableCellSpanSetting> | undefined;
    }
};

export type DTableCellSpan = DTableWithPlugin<DTableCellSpanTypes>;

const cellspanPlugin: DTablePlugin<DTableCellSpanTypes> = {
    name: 'cellspan',
    when: (options) => !!options.getCellSpan,
    data() {
        return {cellSpanMap: new Map(), overlayedCellSet: new Set()};
    },
    onLayout(layout) {
        const {getCellSpan} = this.options;
        if (!getCellSpan) {
            return;
        }
        const {cellSpanMap, overlayedCellSet} = this.data;
        const {rows, cols, rowHeight} = layout;
        cellSpanMap.clear();
        overlayedCellSet.clear();

        const initCellSpanInfo = (colList: ColInfo[], row: RowInfo, rowListIndex: number) => {
            const {index: rowIndex} = row;
            colList.forEach((col, colListIndex) => {
                const {index: colIndex} = col;
                const id: DTableCellID = `C${colIndex}R${rowIndex}`;
                if (overlayedCellSet.has(id)) {
                    return;
                }
                const info = getCellSpan.call(this, {row, col});
                if (!info) {
                    return;
                }
                const colSpan = Math.min(info.colSpan || 1, colList.length - colListIndex);
                const rowSpan = Math.min(info.rowSpan || 1, rows.length - rowListIndex);
                if (colSpan <= 1 && rowSpan <= 1) {
                    return;
                }
                let width = 0;
                for (let i = 0; i < colSpan; i++) {
                    width += colList[colListIndex + i].realWidth;
                    for (let j = 0; j < rowSpan; j++) {
                        const overlayedCellID: DTableCellID = `C${colIndex + i}R${rowIndex + j}`;
                        if (overlayedCellID !== id) {
                            overlayedCellSet.add(overlayedCellID);
                        }
                    }
                }
                cellSpanMap.set(id, {
                    colSpan,
                    rowSpan,
                    width,
                    height: rowHeight * rowSpan,
                });
            });
        };

        rows.forEach((row, rowListIndex) => {
            (['left', 'center', 'right'] as ('left' | 'center' | 'right')[]).forEach((colListName) => {
                initCellSpanInfo(cols[colListName].list, row, rowListIndex);
            });
        });

        console.log('> layout', {
            cellSpanMap,
            overlayedCellSet,
        });
    },
    onRenderCell(result, {row, col}) {
        const id: DTableCellID = `C${col.index}R${row.index}`;
        if (this.data.overlayedCellSet.has(id)) {
            result.length = 0;
            result.push({outer: true, style: {display: 'none'}});
        } else {
            const info = this.data.cellSpanMap.get(id);
            if (info) {
                result.push({
                    outer: true,
                    style: {
                        width: info.width,
                        height: info.height,
                    },
                });
            }
        }
        return result;
    },
};

export const cellspan = definePlugin(cellspanPlugin);
