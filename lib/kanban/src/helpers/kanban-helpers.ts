import {mergeProps} from '@zui/core';
import {getUniqueCode} from '@zui/helpers';

import type {KanbanLaneOptions, KanbanColOptions, KanbanItem, KanbanData, KanbanProps, KanbanDataset} from '../types';
import {createLinkID} from './link-helpers';

const cloneMergeInput = <T extends object | undefined>(value: T): T => {
    if (!value) {
        return value;
    }
    const copy = {...value} as Record<string, unknown>;
    Object.keys(copy).forEach((key) => {
        const nested = copy[key];
        if (nested && typeof nested === 'object' && !Array.isArray(nested) && (key === 'style' || key.endsWith('Style') || key === 'attrs' || key.endsWith('Attrs') || key === 'props')) {
            copy[key] = {...nested};
        }
    });
    return copy as T;
};

export function getCols(this: unknown, cols: KanbanColOptions[] | undefined, options: Pick<KanbanProps, 'getCol' | 'colProps' | 'itemCountPerRow' | 'itemGap'>, forEachCol?: (col: KanbanColOptions) => void) {
    if (!cols || !cols.length) {
        return [];
    }
    const {getCol, colProps, itemCountPerRow, itemGap} = options;
    let needSort = false;
    const subCols: KanbanColOptions[] = [];
    const rootColMap = new Map<string, KanbanColOptions>();
    cols = cols.reduce<KanbanColOptions[]>((list, sourceCol, index) => {
        let col = mergeProps({itemGap, itemCountPerRow}, cloneMergeInput(colProps), cloneMergeInput(sourceCol)) as unknown as KanbanColOptions;
        col = {...col, subCols: col.subCols?.map(subCol => ({...subCol}))};
        if (getCol) {
            const result = getCol.call(this, col);
            if (result === false) {
                return list;
            }
            if (result) {
                col = {...result, subCols: result.subCols?.map(subCol => ({...subCol}))};
            }
        }
        if (col.deleted) {
            return list;
        }

        if (typeof col.order === 'number' && Number.isFinite(col.order)) {
            needSort = true;
        } else {
            col = {...col, order: index};
        }
        if (typeof col.name !== 'string') {
            col = {...col, name: String(col.name)};
        }

        forEachCol?.call(this, col);
        if (col.parentName !== undefined) {
            col = {...col, parentName: String(col.parentName)};
            subCols.push(col);
        } else {
            rootColMap.set(col.name, col);
            list.push(col);
        }

        return list;
    }, []);

    subCols.forEach((col) => {
        const parentCol = rootColMap.get(col.parentName!);
        if (parentCol) {
            parentCol.subCols = mergeList(parentCol.subCols, [col], 'name');
        }
    });

    if (needSort) {
        cols.sort(sortByOrder);
        [...rootColMap.values()].forEach((col) => {
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
    lanes = lanes.reduce<KanbanLaneOptions[]>((list, sourceLane, index) => {
        let lane = {...sourceLane};
        if (laneProps) {
            lane = mergeProps({}, cloneMergeInput(laneProps), cloneMergeInput(lane)) as unknown as KanbanLaneOptions;
        }
        if (getLane) {
            const result = getLane.call(this, lane);
            if (result === false) {
                return list;
            }
            if (result) {
                lane = {...result};
            }
        }
        if (lane.deleted) {
            return list;
        }
        if (typeof lane.order === 'number' && Number.isFinite(lane.order)) {
            needSort = true;
        } else {
            lane.order = index;
        }
        if (typeof lane.name !== 'string') {
            lane.name = String(lane.name);
        }
        if (lane.color === undefined) {
            lane.color = `hsl(${(43 * getUniqueCode(lane.name)) % 360}deg 40% 50%)`;
        }
        forEachLane?.call(this, lane);
        list.push(lane);
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
    items = items.reduce<KanbanItem[]>((colItems, sourceItem) => {
        let item = {...sourceItem};
        if (itemProps) {
            item = mergeProps({}, cloneMergeInput(itemProps), cloneMergeInput(item)) as unknown as KanbanItem;
        }
        const result = getItem?.call(this, {col: col.name, lane: lane.name, item, laneInfo: lane, colInfo: col});
        if (result === false) {
            return colItems;
        }
        const finalItem = {...(result ?? item)};
        if (!finalItem.deleted) {
            if (typeof finalItem.order === 'number' && Number.isFinite(finalItem.order)) {
                needSort = true;
            } else {
                finalItem.order = colItems.length;
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
    const orderA = typeof a.order === 'number' && Number.isFinite(a.order) ? a.order : 0;
    const orderB = typeof b.order === 'number' && Number.isFinite(b.order) ? b.order : 0;
    return orderA - orderB;
}

export function mergeList<T extends object>(items: T[] | undefined, newItems: T[] | undefined, itemKey = 'key'): T[] {
    if (!items) {
        return newItems ? [...newItems] : [];
    }
    const finalItems = [...items];
    if (newItems) {
        let order = 0;
        const indexMap = finalItems.reduce((map, item, index) => {
            map.set(String(item[itemKey as keyof T] ?? index), index);
            order = Math.max((item as {order?: number}).order ?? index, order);
            return map;
        }, new Map<string, number>());
        newItems.forEach((item) => {
            const key = String(item[itemKey as keyof T]);
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

function normalizeItems(items: KanbanDataset['items'], itemKey: string): KanbanItem[] {
    if (Array.isArray(items)) {
        return items.map((item) => {
            return {
                ...item,
                [itemKey]: String(item[itemKey]),
            };
        });
    }
    return Object.keys(items).reduce<KanbanItem[]>((list, lane) => {
        const laneItems = items[lane];
        Object.keys(laneItems).forEach((col) => {
            list.push(...(laneItems[col] || []).map((item) => {
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
    const {items = [], ...others} = data;
    return {
        items: normalizeItems(items, itemKey),
        ...others,
    };
}

export function mergeData(data: Partial<KanbanData>, extraData: Partial<KanbanDataset>, itemKey: string): Partial<KanbanData> {
    const lanes = mergeList(data.lanes, extraData.lanes, 'name');
    const cols = mergeList(data.cols, extraData.cols, 'name');
    const links = mergeList(data.links, extraData.links?.map((link) => {
        const finalLink = {...link};
        if (finalLink[itemKey] === undefined) {
            finalLink[itemKey] = createLinkID(finalLink);
        }
        return finalLink;
    }), itemKey);
    const items = mergeList(data.items, normalizeItems(extraData.items || [], itemKey), itemKey);
    return {lanes, cols, items, links};
}
