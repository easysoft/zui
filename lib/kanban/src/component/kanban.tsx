import {HElement, fetchData, isFetchSetting, mergeProps} from '@zui/core';
import {KanbanHeader} from './kanban-header';
import {KanbanBody} from './kanban-body';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {KanbanColOptions, KanbanData, KanbanDataFetcher, KanbanDataSetting, KanbanLaneOptions, KanbanProps, KanbanState} from '../types';

function sortByOrder(a: {order?: number}, b: {order?: number}) {
    return a.order! - b.order!;
}

export class Kanban extends HElement<KanbanProps, KanbanState> {
    protected declare _loadedSetting: KanbanDataSetting;

    protected declare _data: KanbanData;

    componentDidMount() {
        this._afterRender(true);
        this.tryLoad();
    }

    componentDidUpdate(): void {
        this._afterRender(false);
        this.tryLoad();
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
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

    protected _afterRender(firstRender: boolean) {
        this.props.afterRender?.call(this, firstRender);
    }

    protected _getData(props: RenderableProps<KanbanProps>) {
        const {data, colProps, laneProps} = props;
        const {data: stateData} = this.state;
        const kanbanData = (stateData || isFetchSetting(data) ? stateData : data) || {} as KanbanData;
        let needSort = false;
        const {items = {}} = kanbanData;
        let {cols = [], lanes = []} = kanbanData;
        cols = cols.map((col, index) => {
            if (typeof colProps === 'function') {
                col = colProps.call(this, col);
            } else if (colProps) {
                col = mergeProps({}, colProps, col) as unknown as KanbanColOptions;
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
            if (typeof laneProps === 'function') {
                lane = laneProps.call(this, lane);
            } else if (laneProps) {
                lane = mergeProps({}, laneProps, lane) as unknown as KanbanLaneOptions;
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
                    const laneColItems = laneItems[col.name];
                    if (laneColItems) {
                        laneColItems.sort(sortByOrder);
                    }
                });
            }
            return lane;
        });
        if (needSort) {
            lanes.sort(sortByOrder);
        }
        console.log('> data', {cols, lanes, items});
        return {cols, lanes, items};
    }

    protected _getClassName(props: RenderableProps<KanbanProps>): ClassNameLike {
        return ['kanban', props.className];
    }

    protected _getProps(props: RenderableProps<KanbanProps>): Record<string, unknown> {
        return mergeProps(super._getProps(props), {
            style: {
                '--kanban-lane-name-width': props.laneNameWidth,
            },
        });
    }

    protected _getChildren(props: RenderableProps<KanbanProps>): ComponentChildren {
        const data = this._getData(props);
        return [
            <KanbanHeader key="header" cols={data.cols} />,
            <KanbanBody key="body" {...data} />,
            props.children,
        ];
    }
}
