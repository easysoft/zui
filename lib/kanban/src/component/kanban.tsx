import {$, HElement, createRef, fetchData, isFetchSetting, mergeProps, toCssSize} from '@zui/core';
import {Draggable} from '@zui/dnd';
import {KanbanHeader} from './kanban-header';
import {KanbanBody} from './kanban-body';
import {KanbanLinks} from './kanban-links';
import {KanbanLinkEditor} from './kanban-link-editor';
import {getCols, mergeData, getLanes, getColItems, normalizeData} from '../helpers/kanban-helpers';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {ItemKey} from '@zui/common-list';
import type {KanbanColName, KanbanColOptions, KanbanData, KanbanDataset, KanbanDataFetcher, KanbanDataSetting, KanbanItem, KanbanLaneName, KanbanLaneOptions, KanbanLinkOptions, KanbanProps, KanbanState, KanbanDataMap, KanbanItemsMap} from '../types';

export class Kanban<P extends KanbanProps = KanbanProps, S extends KanbanState = KanbanState> extends HElement<P, S> {
    static defaultProps: Partial<KanbanProps> = {
        draggable: true,
        sticky: true,
        itemKey: 'id',
    };

    protected declare _loadedSetting: KanbanDataSetting;

    protected declare _data: KanbanDataMap;

    protected _draggable?: Draggable;

    protected _ref = createRef<HTMLElement>();

    get itemKey() {
        return this.props.itemKey || 'id';
    }

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
                const newData = normalizeData(await fetchData(data as KanbanDataFetcher, [this], {throws: true}), this.itemKey);
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

    getItem(key: ItemKey) {
        return this._data.map.get(key);
    }

    getData() {
        return this._data;
    }

    update(changes: Partial<KanbanDataset>): Promise<S> {
        console.log('> Kanban.update', changes, this);
        return this.changeState((prevState) => ({
            changes: mergeData(prevState.changes || {}, changes, this.itemKey),
        } as Partial<S>));
    }

    addItem(item: KanbanItem | KanbanItem[], lane?: KanbanLaneName, col?: KanbanColName) {
        return this.updateItem(item, lane, col);
    }

    updateItem(item: KanbanItem | KanbanItem[], lane?: KanbanLaneName, col?: KanbanColName) {
        const list = Array.isArray(item) ? item : [item];
        return this.update({
            items: (lane || col) ? list.map(x => ({
                ...x,
                lane: lane ?? x.lane,
                col: col ?? x.col,
            })) : list,
        });
    }

    deleteItem(itemKey: string | string[]) {
        return this.updateItem(Array.isArray(itemKey) ? itemKey.map(key => ({[this.props.itemKey || 'id']: key, deleted: true})) : {[this.itemKey]: itemKey, deleted: true});
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

    updateLink(link: KanbanLinkOptions | KanbanLinkOptions[], change?: Partial<KanbanLinkOptions>) {
        return this.update({
            links: (Array.isArray(link) ? link : [link]).map(x => ({
                ...x,
                ...change,
                [this.itemKey]: `${x.from}:${x.to}`,
            })),
        });
    }

    addLink(link: KanbanLinkOptions | KanbanLinkOptions[]) {
        return this.updateLink(link);
    }

    deleteLink(link: KanbanLinkOptions | KanbanLinkOptions[]) {
        return this.updateLink(link, {deleted: true});
    }

    protected _afterRender(firstRender: boolean) {
        this.props.afterRender?.call(this, firstRender);
    }

    protected _onAddLink = async (from: string, to: string) => {
        const {onAddLink} = this.props;
        const newLink = {from, to, [this.itemKey]: `${from}:${to}`};
        const result = await onAddLink?.call(this, newLink);
        if (result === false) {
            return;
        }
        this.updateLink(newLink);
    };

    protected _onDeleteLink = async (link: KanbanLinkOptions) => {
        const {onDeleteLink} = this.props;
        const result = await onDeleteLink?.call(this, link);
        if (result === false) {
            return;
        }
        this.deleteLink(link);
    };

    protected _getData(props: RenderableProps<P>): KanbanDataMap {
        const {data} = props;
        const {itemKey} = this;
        const {data: stateData, changes} = this.state;
        let kanbanData = (stateData || isFetchSetting(data) ? stateData : normalizeData(data, itemKey)) || ({} as KanbanData);
        if (changes) {
            kanbanData = mergeData(kanbanData, changes, itemKey) as KanbanData;
        }
        let hasSubCols = false;
        const {items = []} = kanbanData;
        const itemsMap: KanbanItemsMap = {};
        const cols = getCols.call(this, kanbanData.cols, props, col => {
            if (col.parentName !== undefined) {
                hasSubCols = true;
            }
        });
        const lanes = getLanes.call(this, kanbanData.lanes, props, (lane) => {
            itemsMap[lane.name] = cols.reduce<Record<string, KanbanItem[]>>((map, col) => {
                if (col.subCols) {
                    col.subCols.forEach(subCol => {
                        map[subCol.name] = [];
                    });
                } else {
                    map[col.name] = [];
                }
                return map;
            }, {});
        });
        const deletedItemSet = new Set<ItemKey>();
        const itemMap: Map<ItemKey, KanbanItem> = items.reduce((map, item) => {
            if (item.deleted) {
                deletedItemSet.add(item[itemKey] as ItemKey);
                return map;
            }
            map.set(item[itemKey], item);
            const laneItemMap = itemsMap[item.lane!];
            if (laneItemMap) {
                const laneColItems = laneItemMap[item.col!];
                if (laneColItems) {
                    laneColItems.push(item);
                }
            }
            return map;
        }, new Map());
        lanes.forEach(lane => {
            const laneItems = itemsMap[lane.name];
            if (!laneItems) {
                return;
            }
            cols.forEach(col => {
                laneItems[col.name] = getColItems.call(this, laneItems[col.name], lane, col, props);
                col.subCols?.forEach(subCol => {
                    laneItems[subCol.name] = getColItems.call(this, laneItems[subCol.name], lane, subCol, props);
                });
            });
        });
        let {links = []} = kanbanData;
        links = links.reduce<KanbanLinkOptions[]>((list, link) => {
            if (!link.deleted && itemMap.has(link.from) && itemMap.has(link.to) && !deletedItemSet.has(link.from) && !deletedItemSet.has(link.to)) {
                if (link[itemKey] === undefined) {
                    link[itemKey] = `${link.from}:${link.to}`;
                }
                list.push(link);
            }
            return list;
        }, []);
        this._data = {cols, lanes, items: itemsMap, map: itemMap, links, hasSubCols};
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
        const data = this._getData(props);
        const {cols, lanes, items, links} = data;
        const {editLinks} = props;
        console.log('> Kanban.render', {...data, kanban: this});
        return [
            <KanbanHeader key="header" cols={cols} />,
            <KanbanBody
                key="body"
                itemRender={props.itemRender}
                cols={cols}
                lanes={lanes}
                items={items}
            />,
            links?.length ? <KanbanLinks key="links" links={links} onDeleteLink={editLinks ? (this._onDeleteLink as (link: KanbanLinkOptions) => void) : undefined} /> : null,
            editLinks ? <KanbanLinkEditor key="linkEditor" onAddLink={this._onAddLink} /> : null,
            props.children,
        ];
    }
}
