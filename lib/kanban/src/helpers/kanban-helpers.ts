import {mergeProps} from '@zui/core';
import {getUniqueCode} from '@zui/helpers/src/string-code';

import type {KanbanLaneOptions, KanbanColOptions, KanbanItem, KanbanData, KanbanProps} from '../types';

export function getCols(this: unknown, cols: KanbanColOptions[] | undefined, options: Pick<KanbanProps, 'getCol' | 'colProps'>, forEachCol?: (col: KanbanColOptions) => void) {
    if (!cols || !cols.length) {
        return [];
    }
    const {getCol, colProps} = options;
    let needSort = false;
    const subCols: KanbanColOptions[] = [];
    const rootColMap = new Map<string, KanbanColOptions>();
    cols = cols.reduce<KanbanColOptions[]>((list, col, index) => {
        if (colProps) {
            col = mergeProps({}, colProps, col) as unknown as KanbanColOptions;
        }
        if (getCol) {
            const result = getCol.call(this, col);
            if (result !== false) {
                col = result || col;
            }
        }
        if (col.deleted) {
            return list;
        }

        if (typeof col.width === 'function') {
            col = mergeProps({}, col, {
                width: col.width.call(this, col),
            }) as unknown as KanbanColOptions;
        }
        if (typeof col.order === 'number') {
            needSort = true;
        } else {
            col.order = index;
        }

        forEachCol?.call(this, col);
        if (col.parentName !== undefined) {
            subCols.push(col);
        } else {
            rootColMap.set(col.name, col);
            list.push(col);
        }

        return list;
    }, []);

    subCols.forEach(col => {
        const parentCol = rootColMap.get(col.parentName!);
        if (parentCol) {
            parentCol.subCols = mergeList(parentCol.subCols, [col], 'name');
        }
    });

    if (needSort) {
        cols.sort(sortByOrder);
        [...rootColMap.values()].forEach(col => {
            if (col.subCols) {
                col.subCols.sort(sortByOrder);
            }
        });
    }
    return cols;
}

export function getLanes(this: unknown, lanes: KanbanLaneOptions[] | undefined, options: Pick<KanbanProps, 'getLane' | 'laneProps'>, forEachLane?: (lane: KanbanLaneOptions) => void) {
    if (!lanes || !lanes.length) {
        return [];
    }
    const {getLane, laneProps} = options;
    let needSort = false;
    lanes = lanes.reduce<KanbanLaneOptions[]>((list, lane, index) => {
        if (laneProps) {
            lane = mergeProps({}, laneProps, lane) as unknown as KanbanLaneOptions;
        }
        if (getLane) {
            const result = getLane.call(this, lane);
            if (result !== false) {
                lane = result || lane;
            }
        }
        if (!lane.deleted) {
            if (typeof lane.height === 'function') {
                lane = mergeProps({}, lane, {
                    height: lane.height.call(this, lane),
                }) as unknown as KanbanLaneOptions;
            }
            if (typeof lane.order === 'number') {
                needSort = true;
            } else {
                lane.order = index;
            }
            if (!lane.color) {
                lane = {
                    color: `hsl(${(43 * getUniqueCode(lane.name)) % 360}deg 40% 50%)`,
                    ...lane,
                };
            }
            forEachLane?.call(this, lane);
            list.push(lane);
        }
        return list;
    }, []);
    if (needSort) {
        lanes.sort(sortByOrder);
    }
    return lanes;
}

export function sortByOrder(a: {order?: number}, b: {order?: number}) {
    return a.order! - b.order!;
}

export function mergeList<T extends KanbanLaneOptions | KanbanColOptions | KanbanItem>(items: T[] | undefined, newItems: T[] | undefined, itemKey: string): T[] {
    if (!items) {
        return newItems ? [...newItems ] : [];
    }
    const finalItems = [...items];
    if (newItems) {
        let order = 0;
        const indexMap = finalItems.reduce((map, item, index) => {
            map.set(item[itemKey as keyof T] as string, index);
            order = Math.max(item.order ?? index, order);
            return map;
        }, new Map<string, number>());
        newItems.forEach(item => {
            const key = item[itemKey as keyof T] as string;
            if (indexMap.has(key)) {
                finalItems[indexMap.get(key)!] = {
                    ...finalItems[indexMap.get(key)!],
                    ...item,
                };
            } else {
                finalItems.push({
                    order: order++,
                    ...item,
                });
            }
        });
    }
    return finalItems;
}

export function mergeData(data: Partial<KanbanData>, extraData: Partial<KanbanData>, itemKey: string): Partial<KanbanData> {
    const lanes = mergeList(data.lanes, extraData.lanes, itemKey);
    const cols = mergeList(data.cols, extraData.cols, itemKey);
    const links = mergeList(data.links, extraData.links, itemKey);
    const extraItems = extraData.items || {};
    const items = Object.keys(extraItems).reduce((map, lane) => {
        const laneItems = extraItems[lane];
        map[lane] = {...map[lane]};
        Object.keys(laneItems).forEach((col) => {
            map[lane][col] = mergeList(map[lane][col], laneItems[col], itemKey);
        });
        return map;
    }, {...data.items});
    return {lanes, cols, items, links};
}
