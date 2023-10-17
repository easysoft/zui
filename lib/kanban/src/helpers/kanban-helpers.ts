import {mergeProps} from '@zui/core';
import {getUniqueCode} from '@zui/helpers/src/string-code';

import type {KanbanLaneOptions, KanbanColOptions, KanbanItem, KanbanData, KanbanProps, KanbanDataset} from '../types';

export function getCols(this: unknown, cols: KanbanColOptions[] | undefined, options: Pick<KanbanProps, 'getCol' | 'colProps' | 'itemCountPerRow' | 'itemGap'>, forEachCol?: (col: KanbanColOptions) => void) {
    if (!cols || !cols.length) {
        return [];
    }
    const {getCol, colProps, itemCountPerRow, itemGap} = options;
    let needSort = false;
    const subCols: KanbanColOptions[] = [];
    const rootColMap = new Map<string, KanbanColOptions>();
    cols = cols.reduce<KanbanColOptions[]>((list, col, index) => {
        col = mergeProps({itemGap, itemCountPerRow}, colProps, col) as unknown as KanbanColOptions;
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
            col.width = col.width.call(this, col);
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

export function getColItems(this: unknown, items: KanbanItem[] | undefined, lane: KanbanLaneOptions, col: KanbanColOptions, options: Pick<KanbanProps, 'itemProps' | 'getItem'>, forEachItem?: (item: KanbanItem) => void) {
    if (!items?.length) {
        return [];
    }
    const {itemProps, getItem} = options;
    let needSort = false;
    items = items.reduce<KanbanItem[]>((colItems, item) => {
        if (itemProps) {
            item = mergeProps({}, itemProps, item) as unknown as KanbanItem;
        }
        const finalItem = getItem?.call(this, {col: col.name, lane: lane.name, item}) ?? item;
        if (finalItem !== false && !finalItem.deleted) {
            if (typeof finalItem.order === 'number') {
                needSort = true;
            } else {
                finalItem.order = colItems.length - 1;
            }
            colItems.push(finalItem);
            forEachItem?.call(this, finalItem);
        }
        return colItems;
    }, []);
    if (needSort) {
        items.sort(sortByOrder);
    }
    return items;
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

function normalizeItems(items: KanbanDataset['items'], itemKey: string) : KanbanItem[] {
    if (Array.isArray(items)) {
        return items.map(item => {
            return {
                ...item,
                [itemKey]: String(item[itemKey]),
            };
        });
    }
    return Object.keys(items).reduce<KanbanItem[]>((list, lane) => {
        const laneItems = items[lane];
        Object.keys(laneItems).forEach((col) => {
            list.push(...(laneItems[col] || []).map(item => {
                return {
                    ...item,
                    lane,
                    col,
                    [itemKey]: String(item[itemKey]),
                };
            }));
        });
        return list;
    }, []);
}

export function normalizeData(data: KanbanDataset, itemKey: string): KanbanData {
    const {items, ...others} = data;
    return {
        items: normalizeItems(items, itemKey),
        ...others,
    };
}

export function mergeData(data: Partial<KanbanData>, extraData: Partial<KanbanDataset>, itemKey: string): Partial<KanbanData> {
    const lanes = mergeList(data.lanes, extraData.lanes, 'name');
    const cols = mergeList(data.cols, extraData.cols, 'name');
    const links = mergeList(data.links, extraData.links, itemKey);
    const items = mergeList(data.items, normalizeItems(extraData.items || [], itemKey), itemKey);
    return {lanes, cols, items, links};
}
