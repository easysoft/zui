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

export class Kanban extends HElement<KanbanProps, KanbanState> {
    static defaultProps: Partial<KanbanProps> = {
        draggable: true,
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
            console.log('this._draggable', this._draggable);
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
        this.setState({loading: true, data: {items: {}, cols: [], lanes: []}}, async () => {
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

    protected _afterRender(firstRender: boolean) {
        this.props.afterRender?.call(this, firstRender);
    }

    protected _getData(props: RenderableProps<KanbanProps>) {
        const {data, getCol, colProps, getLane, laneProps, getItem, itemProps} = props;
        const {data: stateData} = this.state;
        const kanbanData = (stateData || isFetchSetting(data) ? stateData : data) || {} as KanbanData;
        let needSort = false;
        const {items = {}} = kanbanData;
        let {cols = [], lanes = []} = kanbanData;
        cols = cols.map((col, index) => {
            if (colProps) {
                col = mergeProps({}, colProps, col) as unknown as KanbanColOptions;
            }
            if (getCol) {
                const result = getCol.call(this, col);
                if (result !== false) {
                    col = result || col;
                }
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
            return col;
        });
        if (needSort) {
            cols.sort(sortByOrder);
        }
        needSort = false;
        lanes = lanes.map((lane, index) => {
            if (laneProps) {
                lane = mergeProps({}, laneProps, lane) as unknown as KanbanLaneOptions;
            }
            if (getLane) {
                const result = getLane.call(this, lane);
                if (result !== false) {
                    lane = result || lane;
                }
            }
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
                        laneColItems = laneColItems.reduce<KanbanItem[]>((list, item) => {
                            if (itemProps) {
                                item = mergeProps({}, itemProps, item) as unknown as KanbanItem;
                            }
                            const result = getItem?.call(this, {col: col.name, lane: lane.name, item}) ?? item;
                            if (result !== false && !result.deleted) {
                                list.push(result);
                                if (typeof result.order === 'number') {
                                    needSort = true;
                                } else {
                                    result.order = list.length - 1;
                                }
                            }
                            return list;
                        }, []);
                        if (needSort) {
                            laneColItems.sort(sortByOrder);
                        }
                    }
                });
            }
            return lane;
        });
        if (needSort) {
            lanes.sort(sortByOrder);
        }
        this._data = {cols, lanes, items};
        console.log('> data', this._data);
        return this._data;
    }

    protected _getClassName(props: RenderableProps<KanbanProps>): ClassNameLike {
        return ['kanban', props.className];
    }

    protected _getProps(props: RenderableProps<KanbanProps>): Record<string, unknown> {
        return mergeProps(super._getProps(props), {
            ref: this._ref,
            style: {
                '--kanban-lane-name-width': props.laneNameWidth,
            },
        });
    }

    protected _getChildren(props: RenderableProps<KanbanProps>): ComponentChildren {
        const data = this._getData(props);
        return [
            <KanbanHeader key="header" cols={data.cols} />,
            <KanbanBody key="body" itemRender={props.itemRender} {...data} />,
            props.children,
        ];
    }
}
