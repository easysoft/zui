import {$, HElement, createRef, fetchData, isFetchSetting, mergeProps, toCssSize} from '@zui/core';
import {Draggable} from '@zui/dnd';
import {KanbanHeader} from './kanban-header';
import {KanbanBody} from './kanban-body';
import {KanbanLinks} from './kanban-links';
import {getCols, mergeData, sortByOrder, getLanes} from '../helpers/helpers';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {KanbanColName, KanbanColOptions, KanbanData, KanbanDataFetcher, KanbanDataSetting, KanbanItem, KanbanLaneName, KanbanLaneOptions, KanbanLinkOptions, KanbanProps, KanbanState} from '../types';

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
        const {data, getItem, itemProps, itemKey = 'id'} = props;
        const {data: stateData, changes} = this.state;
        let kanbanData = (stateData || isFetchSetting(data) ? stateData : data) || {} as KanbanData;
        if (changes) {
            kanbanData = mergeData(kanbanData, changes, itemKey) as KanbanData;
        }
        let hasSubCols = false;
        const {items = {}} = kanbanData;
        const itemIdSet = new Set<string>();
        const cols = getCols.call(this, kanbanData.cols, props, col => {
            if (col.parentName !== undefined) {
                hasSubCols = true;
            }
        });
        const lanes = getLanes.call(this, kanbanData.lanes, props, (lane) => {
            const laneItems = items[lane.name];
            if (laneItems) {
                cols.forEach(col => {
                    let laneColItems = laneItems[col.name];
                    if (laneColItems) {
                        let needSort = false;
                        laneColItems = laneColItems.reduce<KanbanItem[]>((colItems, item) => {
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
                                itemIdSet.add(String(finalItem[itemKey]));
                            }
                            return colItems;
                        }, []);
                        if (needSort) {
                            laneColItems.sort(sortByOrder);
                        }
                    }
                });
            }
        });
        let {links = []} = kanbanData;
        links = links.reduce<KanbanLinkOptions[]>((list, link) => {
            if (!link.deleted && itemIdSet.has(String(link.from)) && itemIdSet.has(String(link.to))) {
                list.push(link);
            }
            return list;
        }, []);
        this._data = {cols, lanes, items, links, hasSubCols};
        return this._data;
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return ['kanban', props.className, props.sticky ? 'kanban-sticky' : '', this._data.hasSubCols ? 'has-sub-cols' : ''];
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        return mergeProps(super._getProps(props), {
            ref: this._ref,
            style: {
                '--kanban-lane-name-width': props.laneNameWidth,
                '--kanban-cols-gap': props.colsGap ? toCssSize(props.colsGap) : undefined,
                '--kanban-lanes-gap': props.lanesGap ? toCssSize(props.lanesGap) : undefined,
            },
        });
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const {cols, lanes, items, links} = this._getData(props);
        console.log('> Kanban.render', {cols, lanes, items, links});
        return [
            <KanbanHeader key="header" cols={cols} />,
            <KanbanBody
                key="body"
                itemRender={props.itemRender}
                cols={cols}
                lanes={lanes}
                items={items}
            />,
            links?.length ? <KanbanLinks key="links" links={links} /> : null,
            props.children,
        ];
    }
}
