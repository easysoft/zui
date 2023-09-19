import {$, HElement, createRef, fetchData, isFetchSetting, mergeProps} from '@zui/core';
import {Draggable} from '@zui/dnd';
import {KanbanHeader} from './kanban-header';
import {KanbanBody} from './kanban-body';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {KanbanColName, KanbanColOptions, KanbanData, KanbanDataFetcher, KanbanDataSetting, KanbanItem, KanbanLaneName, KanbanLaneOptions, KanbanProps, KanbanState} from '../types';

function sortByOrder(a: {order?: number}, b: {order?: number}) {
    return a.order! - b.order!;
}

function mergeItemList<T extends KanbanLaneOptions | KanbanColOptions | KanbanItem>(items: T[] | undefined, newItems: T[] | undefined, itemKey: string): T[] {
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

function mergeData(data: Partial<KanbanData>, extraData: Partial<KanbanData>, itemKey: string): Partial<KanbanData> {
    const lanes = mergeItemList(data.lanes, extraData.lanes, itemKey);
    const cols = mergeItemList(data.cols, extraData.cols, itemKey);
    const extraItems = extraData.items || {};
    const items = Object.keys(extraItems).reduce((map, lane) => {
        const laneItems = extraItems[lane];
        map[lane] = {...map[lane]};
        Object.keys(laneItems).forEach((col) => {
            map[lane][col] = mergeItemList(map[lane][col], laneItems[col], itemKey);
        });
        return map;
    }, {...data.items});
    return {lanes, cols, items};
}

export class Kanban<P extends KanbanProps = KanbanProps, S extends KanbanState = KanbanState> extends HElement<P, S> {
    static defaultProps: Partial<KanbanProps> = {
        draggable: true,
        sticky: true,
        itemKey: 'id',
    };

    protected declare _loadedSetting: KanbanDataSetting;

    protected declare _data: KanbanData;

    protected _draggable?: Draggable;

    protected _ref = createRef<HTMLElement>();

    componentDidMount() {
        this._afterRender(true);
        this.tryLoad();

        const {draggable} = this.props;
        if (draggable && this._ref.current) {
            this._draggable = new Draggable(this._ref.current, $.extend({
                selector: '.kanban-item',
            }, typeof draggable === 'object' ? draggable : null));
        }
    }

    componentDidUpdate(): void {
        this._afterRender(false);
        this.tryLoad();
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
        this._draggable?.destroy();
    }

    load(): void {
        const {data, onLoad, onLoadFail} = this.props;
        this._loadedSetting = data;
        this.setState({loading: true}, async () => {
            const newState = {loading: false} as Partial<KanbanState>;
            try {
                const newData = await fetchData(data as KanbanDataFetcher, [this], {throws: true});
                newState.data = onLoad?.call(this, newData) || newData;
            } catch (error) {
                newState.loadFailed = (typeof onLoadFail === 'function' ? (onLoadFail as (error: Error) => CustomContentType | undefined).call(this, error as Error) : onLoadFail) || String(error);
            }
            this.setState(newState);
        });
    }

    tryLoad(): void {
        const {loading} = this.state;
        const {data} = this.props;
        if (loading || !data || !isFetchSetting(data) || data === this._loadedSetting) {
            return;
        }
        this.load();
    }

    getCol(name: KanbanColName) {
        return this._data.cols.find(col => col.name === name);
    }

    getLane(name: KanbanLaneName) {
        return this._data.lanes.find(lane => lane.name === name);
    }

    getData() {
        return this._data;
    }

    update(changes: Partial<KanbanData>): Promise<S> {
        return this.changeState((prevState) => ({
            changes: mergeData(prevState.changes || {}, changes, this.props.itemKey || 'id'),
        } as Partial<S>));
    }

    addItem(lane: KanbanLaneName, col: KanbanColName, item: KanbanItem | KanbanItem[]) {
        return this.updateItem(lane, col, item);
    }

    updateItem(lane: KanbanLaneName, col: KanbanColName, item: KanbanItem | KanbanItem[]) {
        return this.update({
            items: {
                [lane]: {
                    [col]: Array.isArray(item) ? item : [item],
                },
            },
        });
    }

    deleteItem(lane: KanbanLaneName, col: KanbanColName, itemKey: string | string[]) {
        return this.updateItem(lane, col, Array.isArray(itemKey) ? itemKey.map(key => ({[this.props.itemKey || 'id']: key, deleted: true})) : {[this.props.itemKey || 'id']: itemKey, deleted: true});
    }

    updateLane(lane: KanbanLaneOptions | KanbanLaneOptions[]) {
        return this.update({
            lanes: Array.isArray(lane) ? lane : [lane],
        });
    }

    addLane(lane: KanbanLaneOptions | KanbanLaneOptions[]) {
        return this.updateLane(lane);
    }

    deleteLane(lane: KanbanLaneName | KanbanLaneName[]) {
        return this.updateLane(Array.isArray(lane) ? lane.map(name => ({name, deleted: true})) : {name: lane, deleted: true});
    }

    updateCol(col: KanbanColOptions | KanbanColOptions[]) {
        return this.update({
            cols: Array.isArray(col) ? col : [col],
        });
    }

    addCol(col: KanbanColOptions | KanbanColOptions[]) {
        return this.updateCol(col);
    }

    deleteCol(col: KanbanColName | KanbanColName[]) {
        return this.updateCol(Array.isArray(col) ? col.map(name => ({name, deleted: true})) : {name: col, deleted: true});
    }

    protected _afterRender(firstRender: boolean) {
        this.props.afterRender?.call(this, firstRender);
    }

    protected _getData(props: RenderableProps<P>) {
        const {data, getCol, colProps, getLane, laneProps, getItem, itemProps, itemKey = 'id'} = props;
        const {data: stateData, changes} = this.state;
        let kanbanData = (stateData || isFetchSetting(data) ? stateData : data) || {} as KanbanData;
        if (changes) {
            kanbanData = mergeData(kanbanData, changes, itemKey) as KanbanData;
        }
        let needSort = false;
        const {items = {}} = kanbanData;
        let {cols = [], lanes = []} = kanbanData;
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
            if (!col.deleted) {
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
                list.push(col);
            }
            return list;
        }, []);
        if (needSort) {
            cols.sort(sortByOrder);
        }
        needSort = false;
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
                const laneItems = items[lane.name];
                if (laneItems) {
                    cols.forEach(col => {
                        let laneColItems = laneItems[col.name];
                        if (laneColItems) {
                            needSort = false;
                            laneColItems = laneColItems.reduce<KanbanItem[]>((colItems, item) => {
                                if (itemProps) {
                                    item = mergeProps({}, itemProps, item) as unknown as KanbanItem;
                                }
                                const result = getItem?.call(this, {col: col.name, lane: lane.name, item}) ?? item;
                                if (result !== false && !result.deleted) {
                                    colItems.push(result);
                                    if (typeof result.order === 'number') {
                                        needSort = true;
                                    } else {
                                        result.order = colItems.length - 1;
                                    }
                                }
                                return colItems;
                            }, []);
                            if (needSort) {
                                laneColItems.sort(sortByOrder);
                            }
                        }
                    });
                }
                list.push(lane);
            }
            return list;
        }, []);
        if (needSort) {
            lanes.sort(sortByOrder);
        }
        this._data = {cols, lanes, items};
        return this._data;
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return ['kanban', props.className, props.sticky ? 'kanban-sticky' : ''];
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        return mergeProps(super._getProps(props), {
            ref: this._ref,
            style: {
                '--kanban-lane-name-width': props.laneNameWidth,
            },
        });
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const data = this._getData(props);
        return [
            <KanbanHeader key="header" cols={data.cols} />,
            <KanbanBody key="body" itemRender={props.itemRender} {...data} />,
            props.children,
        ];
    }
}
