import {$, Computed, HElement, createRef, fetchData, isFetchSetting, mergeProps, parseSize, toCssSize} from '@zui/core';
import {Draggable, DraggableOptions} from '@zui/dnd';
import {KanbanHeader} from './kanban-header';
import {KanbanBody} from './kanban-body';
import {KanbanLinks} from './kanban-links';
import {getCols, mergeData, getLanes, getColItems, normalizeData} from '../helpers/kanban-helpers';

import type {ComponentChildren, RenderableProps} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {ItemKey} from '@zui/common-list';
import type {KanbanColName, KanbanColOptions, KanbanData, KanbanDataset, KanbanDataFetcher, KanbanDataSetting, KanbanItem, KanbanLaneName, KanbanLaneOptions, KanbanLinkOptions, KanbanProps, KanbanState, KanbanDataMap, KanbanItemsMap, KanbanElementInfo, KanbanDropInfo, KanbanDropSide, KanbanItemInfo} from '../types';
import {createLinkID} from '../helpers/link-helpers';

export type KanbanSnap = {
    date: number;
    kanban: Kanban;
    data: Partial<KanbanData>;
    restore(): void;
};

export class Kanban<P extends KanbanProps = KanbanProps, S extends KanbanState = KanbanState> extends HElement<P, S> {
    static defaultProps: Partial<KanbanProps> = {
        draggable: true,
        sticky: true,
        responsive: true,
        itemKey: 'id',
        colWidth: 200,
        colsGap: 8,
    };

    static customProps = ['onDrop', 'onDragStart'];

    protected declare _loadedSetting: KanbanDataSetting;

    protected _draggable?: Draggable;

    protected _ref = createRef<HTMLElement>();

    protected _raf = 0;

    protected _rob?: ResizeObserver;

    protected declare _hoverTimer: number;

    protected _data = new Computed(this._getData.bind(this), () => {
        const {getCol, colProps, itemCountPerRow, itemGap, getLane, laneProps, itemProps, getItem, getLink, linkProps, responsive} = this.props;
        return [
            this._kanbanData,
            getCol,
            colProps,
            itemCountPerRow,
            itemGap,
            getLane,
            laneProps,
            itemProps,
            getItem,
            linkProps,
            getLink,
            responsive,
        ];
    });

    protected _kanbanData = new Computed(() => {
        const {itemKey, props} = this;
        const {data} = props;
        const {data: stateData, changes} = this.state;
        const kanbanData = (stateData || isFetchSetting(data) ? stateData : normalizeData(data, itemKey)) || ({} as KanbanData);
        if (changes) {
            return mergeData(kanbanData, changes, itemKey) as KanbanData;
        }
        return kanbanData;
    }, () => {
        const {data: stateData, changes, selected} = this.state;
        return [
            stateData,
            changes,
            selected,
            this.props.data,
        ];
    });

    get data() {
        return this._data.cache;
    }

    get itemKey() {
        return this.props.itemKey || 'id';
    }

    componentDidMount() {
        this._afterRender(true);
        this.tryLoad();
        this._initDraggable();

        const {responsive, selectable} = this.props;
        const element = this._ref.current;
        if (element && responsive) {
            const rob = new ResizeObserver(this.updateLayout.bind(this));
            const $container = typeof responsive !== 'boolean' ? $(responsive) : $(element.closest('.kanban-list') || element.parentElement);
            $container.each((_index, ele) => {
                rob.observe(ele);
            });
            this._rob = rob;

            if (!this.state.containerWidth) {
                this.updateLayout();
            }
        }

        if (selectable) {
            $(document).on('click.kanban', this._handleGlobalClick);
        }
    }

    componentDidUpdate(): void {
        this._afterRender(false);
        this.tryLoad();
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
        this._draggable?.destroy();
        this._rob?.disconnect();

        if (this.props.selectable) {
            $(document).off('click.kanban', this._handleGlobalClick);
        }
    }

    getDefaultState(props?: RenderableProps<P>): S {
        return {
            loading: false,
            selected: (props || this.props).defaultSelected,
            data: undefined,
            changes: undefined,
            loadFailed: undefined,
        } as S;
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

    updateLayout() {
        if (this._raf) {
            cancelAnimationFrame(this._raf);
        }
        this._raf = requestAnimationFrame(() => {
            this._raf = 0;
            const element = this._ref.current;
            if (element) {
                const {responsive, laneNameWidth = 20} = this.props;
                const $container = typeof responsive !== 'boolean' ? $(responsive) : $(element.closest('.kanban-list') || element.parentElement);
                const container = $container[0];
                let containerWidth = $container.width() - laneNameWidth - (container!.offsetWidth - container!.clientWidth);
                const group = element.closest('.kanban-region');
                if (group) {
                    containerWidth -= group.clientWidth - $(group).width();
                }
                this.setState({containerWidth: containerWidth});
            }
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
        return this.data.colMap.get(String(name));
    }

    getLane(name: KanbanLaneName) {
        name = String(name);
        return this.data.lanes.find(lane => lane.name === name);
    }

    getItem(key: unknown) {
        return this.data.map.get(String(key));
    }

    update(changes: Partial<KanbanDataset>): Promise<S> {
        return this.changeState((prevState) => ({
            changes: mergeData({...prevState.changes}, changes, this.itemKey),
        } as Partial<S>));
    }

    createSnap(): KanbanSnap {
        return {
            date: Date.now(),
            kanban: this as Kanban,
            data: $.extend(true, {}, this._data) as Partial<KanbanData>,
            restore() {
                this.kanban.changeState({changes: this.data} as Partial<S>);
            },
        };
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
                deleted: false,
                ...x,
                ...change,
                [this.itemKey]: createLinkID(x),
            })),
        });
    }

    addLink(link: KanbanLinkOptions | KanbanLinkOptions[]) {
        return this.updateLink(link);
    }

    deleteLink(link: KanbanLinkOptions | KanbanLinkOptions[]) {
        return this.updateLink(link, {deleted: true});
    }

    select(selected: ItemKey | ItemKey[], toggle?: boolean) {
        let newSelected = Array.isArray(selected) ? selected : (selected ? [selected] : []);
        let oldSelected = this.state.selected || [];
        const {onSelect} = this.props;
        return this.changeState((prevState) => {
            oldSelected = prevState.selected || [];
            if (toggle) {
                const oldSelectedSet = new Set(oldSelected);
                const toggleNewSelected = new Set<string>();
                newSelected.forEach(key => {
                    if (oldSelectedSet.has(key)) {
                        oldSelectedSet.delete(key);
                    } else {
                        toggleNewSelected.add(key);
                    }
                });
                newSelected = [...oldSelectedSet, ...toggleNewSelected];
                return {selected: newSelected} as S;
            }
            return {selected: newSelected} as S;
        }, () => {
            onSelect?.(newSelected, oldSelected);
            $(this._ref.current).trigger('kanbanItemSelected', {kanban: this.props.key, selected: newSelected, oldSelected});
        });
    }

    protected _handleGlobalClick = (event: MouseEvent) => {
        const $target = $(event.target as HTMLElement);
        if ($target.closest('.kanban-item').length) {
            return;
        }
        this.select([]);
    };

    protected _getElementInfo(element: HTMLElement): KanbanElementInfo | undefined {
        const $element = $(element);
        const $item = $element.closest('.kanban-item');
        if ($item.length) {
            const key = $item.attr('z-key');
            if (key) {
                const item = this.getItem(key);
                if (item) {
                    return {type: 'item', key, element, item, lane: item.lane, col: item.col};
                }
            }
        }
        const $newItem = $element.closest('.kanban-new-item');
        if ($newItem.length) {
            return {type: 'newItem', element};
        }
        const $col = $element.closest('.kanban-header-col,.kanban-lane-col');
        if ($col.length) {
            return {type: 'col', element, col: $col.attr('z-col') as string, lane: $col.attr('z-lane') as string};
        }
        const lane = $element.closest('.kanban-lane').attr('z-lane');
        if (lane !== undefined) {
            return {type: 'lane', element, lane: lane as string};
        }
    }

    protected _getDropInfo(event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement): KanbanDropInfo | undefined {
        const dragInfo = this._getElementInfo(dragElement);
        if (!dragInfo) {
            return;
        }
        const dropInfo = this._getElementInfo(dropElement);
        if (!dropInfo || dropInfo.element.closest('.kanban') !== this.element) {
            return;
        }
        let side: KanbanDropSide;
        if (dragInfo.type === 'item' && dropInfo.type === 'col') {
            side = 'inside';
        } else {
            const dropBounding = dropElement.getBoundingClientRect();
            if (dragInfo.type === 'col') {
                side = event.clientX < (dropBounding.left + dropBounding.width / 2) ? 'before' : 'after';
            } else {
                side = event.clientY < (dropBounding.top + dropBounding.height / 2) ? 'before' : 'after';
            }
        }
        return {
            side,
            event,
            drag: dragInfo,
            drop: dropInfo,
        };
    }

    protected _getDropChanges(info: KanbanDropInfo): {changes: Partial<KanbanData>, data?: {list: string[], lane: string, col: string}} {
        const {drag, drop} = info;
        const data = this.data;
        const changes: Partial<KanbanData> = {};
        const {itemKey} = this;
        const changeData: {list: string[], lane: string, col: string} = {
            list: [],
            lane: drop.lane!,
            col: drop.col!,
        };
        if (drag.type === 'item') {
            const item = drag.item!;
            const colItems = data.items[drop.lane!][drop.col!];
            const newColItems = [...colItems];
            const newItem: Partial<KanbanItem> = {
                [itemKey]: item[itemKey],
                order: item.order,
            };
            const isSameCol = drop.col === item.col;
            const isSameLane = drop.lane === item.lane;
            if (isSameCol && isSameLane && item[itemKey] === drop.item![itemKey]) {
                return {changes, data: changeData};
            }
            if (!isSameCol) {
                newItem.col = drop.col;
            }
            if (!isSameLane) {
                newItem.lane = drop.lane;
            }
            let changed = false;
            if (drop.type === 'col' && (!isSameLane || !isSameCol)) {
                newColItems.push(newItem);
                changed = true;
            } else if (drop.type === 'item') {
                const dropItem = drop.item!;
                const dragIndex = (drop.col !== item.col || drop.lane !== item.lane) ? -1 : newColItems.findIndex(x => x[itemKey] === item[itemKey]);
                if (dragIndex >= 0) {
                    newColItems.splice(dragIndex, 1);
                }
                const index = newColItems.findIndex(x => x[itemKey] === dropItem[itemKey]);
                newColItems.splice(info.side === 'before' ? index : (index + 1), 0, newItem);
                changed = true;
            }
            if (changed) {
                changes.items = [];
                let prevOrder = -1;
                newColItems.forEach((changeItem, index) => {
                    const order = Math.max(0, prevOrder + 1, changeItem.order ?? index);
                    const oldItem = colItems[index];
                    prevOrder = order;
                    if (oldItem !== changeItem || order !== oldItem.order) {
                        changeItem = {
                            ...changeItem,
                            order,
                        };
                    }
                    if (changeItem !== oldItem) {
                        changes.items!.push(changeItem);
                    }
                    changeData.list.push(changeItem[itemKey] as string);
                });
            }
        } else if (drag.type === 'newItem') {
            const {onDropNewItem} = this.props;
            let newItem: Partial<KanbanItem> | undefined;
            if (onDropNewItem) {
                newItem = onDropNewItem.call(this, info);
            } else {
                newItem = $(drag.element).data();
                if (newItem?.item) {
                    newItem = newItem.item;
                }
            }
            newItem = {
                lane: drop.lane,
                col: drop.col,
                ...newItem,
            };
            if (newItem?.[itemKey]) {
                const colItems = data.items[drop.lane!][drop.col!];
                const newColItems = [...colItems];
                newColItems.push(newItem);
                changes.items = newColItems;
                changeData.list.push(newItem[itemKey] as string);
            }
        }
        return {changes, data: changeData};
    }

    protected _initDraggable() {
        const {draggable} = this.props;
        const element = this._ref.current;
        if (!draggable || !element) {
            return;
        }
        const {dragTypes = ['item', 'newItem'], onDragStart, onDrop, canDrop, dropRules} = this.props;
        const dragTypeList = typeof dragTypes === 'string' ? dragTypes.split(',') : dragTypes;
        const dragTypeSelectors: Record<string, string> = {
            item: '.kanban-item',
            lane: '.kanban-lane-name',
            col: '.kanban-header-col',
            newItem: '.kanban-new-item',
        };
        const userOptions = typeof draggable === 'object' ? draggable : {};
        const updateDropElementAttr = (dropElement: HTMLElement, info?: KanbanDropInfo) => {
            $(dropElement).attr({
                'z-drag-type': info ? info.drag.type : null,
                'z-drop-type': info ? info.drop.type : null,
                'z-drop-side': info ? info.side : null,
            });
        };
        const dragOptions: DraggableOptions = {
            ...userOptions,
            selector: userOptions.selector || dragTypeList.map(x => dragTypeSelectors[x] || '').filter(Boolean).join(','),
            target: userOptions.target || ((dragElement: HTMLElement) => {
                const info = this._getElementInfo(dragElement);
                if (!info) {
                    return;
                }
                const selector = ({
                    lane: '.kanban-lane',
                    col: '.kanban-header-col',
                    item: '.kanban-item,.kanban-items',
                    newItem: '.kanban-item,.kanban-items',
                })[info.type];
                return $(element).find(selector);
            }),
            canDrop: userOptions.canDrop || (canDrop || dropRules) ? ((_event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => {
                const dragInfo = this._getElementInfo(dragElement);
                if (!dragInfo) {
                    return false;
                }
                const dropInfo = this._getElementInfo(dropElement);
                if (!dropInfo || dropInfo.element.closest('.kanban') !== this.element) {
                    return false;
                }
                if (dragInfo.type === 'item' && dropRules) {
                    const dragCol = dragInfo.col!;
                    const dropCol = dropInfo.col!;
                    const dragLane = dragInfo.lane!;
                    const dropLane = dropInfo.lane!;
                    const canDropCols = dropRules[`${dragLane}:${dragCol}`] ?? dropRules[dragCol];
                    if (typeof canDropCols === 'boolean') {
                        return canDropCols;
                    }
                    return !canDropCols || canDropCols.includes(dropCol) || canDropCols.includes(`${dropLane}:${dropCol}`) || canDropCols.includes(`${dropLane}:`);
                }
                if (canDrop) {
                    return canDrop.call(this, dragInfo, dropInfo);
                }
            }) : undefined,
            onDragStart: (event: DragEvent, dragElement: HTMLElement) => {
                const info = this._getElementInfo(dragElement);
                if (!info) {
                    return false;
                }
                if (onDragStart) {
                    return onDragStart.call(this, {event, drag: info});
                }
                return userOptions.onDragStart?.call(this, event, dragElement);
            },
            onDragOver: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => {
                const info = this._getDropInfo(event, dragElement, dropElement);
                if (!info) {
                    return;
                }
                updateDropElementAttr(dropElement, info);
            },
            onDragLeave: (_event: DragEvent, _dragElement: HTMLElement, dropElement: HTMLElement) => {
                updateDropElementAttr(dropElement);
            },
            onDrop: (event: DragEvent, dragElement: HTMLElement, dropElement: HTMLElement) => {
                updateDropElementAttr(dropElement);
                const info = this._getDropInfo(event, dragElement, dropElement);
                if (!info) {
                    return false;
                }
                if (onDrop) {
                    const {changes, data} = this._getDropChanges(info);
                    if (Object.keys(changes).length) {
                        info.data = data;
                        const snap = this.createSnap();
                        if (onDrop.call(this, changes, info, snap.restore) !== false) {
                            this.update(changes);
                        }
                    }
                }
                return userOptions.onDrop?.call(this, event, dragElement, dropElement);
            },
        };
        this._draggable = new Draggable(element, dragOptions);
    }

    protected _afterRender(firstRender: boolean) {
        this.props.afterRender?.call(this, firstRender);
    }

    protected _onAddLink = async (newLink: KanbanLinkOptions) => {
        const {onAddLink} = this.props;
        newLink[this.itemKey] = createLinkID(newLink);
        const result = await onAddLink?.call(this, newLink);
        if (result === false) {
            return;
        }
        this.addLink(newLink);
    };

    protected _onDeleteLink = async (link: KanbanLinkOptions) => {
        const {onDeleteLink} = this.props;
        const result = await onDeleteLink?.call(this, link);
        if (result === false) {
            return;
        }
        this.deleteLink(link);
    };

    protected _getData(): KanbanDataMap {
        const {itemKey, props} = this;
        const kanbanData = this._kanbanData.value;
        let hasSubCols = false;
        const {items = []} = kanbanData;
        const itemsMap: KanbanItemsMap = {};
        const colMap: Map<KanbanColName, KanbanColOptions> = new Map();
        const cols = getCols.call(this, kanbanData.cols, props, col => {
            if (col.parentName !== undefined) {
                hasSubCols = true;
            }
            colMap.set(col.name, col);
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
        const {selected = []} = this.state;
        const selectedSet = new Set(selected);
        const forEachItem = (item: KanbanItem) => {
            item.selected = selectedSet.has(item[itemKey] as string);
        };
        lanes.forEach(lane => {
            const laneItems = itemsMap[lane.name];
            if (!laneItems) {
                return;
            }
            cols.forEach(col => {
                laneItems[col.name] = getColItems.call(this, laneItems[col.name], lane, col, props, forEachItem);
                col.subCols?.forEach(subCol => {
                    laneItems[subCol.name] = getColItems.call(this, laneItems[subCol.name], lane, subCol, props, forEachItem);
                });
            });
        });
        let {links = []} = kanbanData;
        links = links.reduce<KanbanLinkOptions[]>((list, link) => {
            if (!link.deleted && itemMap.has(link.from) && itemMap.has(link.to) && !deletedItemSet.has(link.from) && !deletedItemSet.has(link.to)) {
                if (link[itemKey] === undefined) {
                    link[itemKey] = createLinkID(link);
                }
                const finalLink = props.getLink?.call(this, link) ?? link;
                if (finalLink !== false && !finalLink.deleted) {
                    list.push(finalLink);
                }
            }
            return list;
        }, []);

        return {cols, lanes, items: itemsMap, map: itemMap, colMap, links, hasSubCols};
    }

    protected _layoutCols(cols: KanbanColOptions[], props: RenderableProps<P>): KanbanColOptions[] {
        const {containerWidth = 0} = this.state;
        const {colsGap = 8, minColWidth: defaultMinColWidth = 150, maxColWidth: defaultMaxColWidth = 600, colWidth: defaultColWidth = 200} = props;
        const responsiveCols: KanbanColOptions[] = [];
        let totalWidth = 0;
        const processCol = (col: KanbanColOptions) => {
            const {minWidth = defaultMinColWidth, maxWidth = defaultMaxColWidth} = col;
            let {width = defaultColWidth} = col;
            if (typeof width === 'function') {
                width = width.call(this, col);
            }
            const isAutoCol = width === 'auto';
            if (isAutoCol) {
                width = minWidth;
            } else {
                const [value, unit] = parseSize(width);
                if (unit === '%') {
                    width = containerWidth * value / 100;
                } else {
                    width = value;
                }
            }
            width = Math.min(maxWidth, Math.max(minWidth, width));
            totalWidth += width + (totalWidth ? colsGap : 0);
            col = {...col, width, maxWidth, minWidth};
            if (isAutoCol) {
                responsiveCols.push(col);
            }
            return col;
        };
        cols = cols.map(col => {
            if (col.subCols) {
                return {
                    ...col,
                    subCols: col.subCols.map(processCol),
                };
            }
            return processCol(col);
        });
        if (responsiveCols.length && totalWidth < containerWidth) {
            const extraColWidth = Math.floor((containerWidth - totalWidth) / responsiveCols.length);
            responsiveCols.forEach(col => {
                col.width = Math.min(col.maxWidth!, Math.max(col.minWidth!, col.width as number + extraColWidth));
            });
        }
        return cols;
    }

    protected _layoutLanes(lanes: KanbanLaneOptions[], props: RenderableProps<P>): KanbanLaneOptions[] {
        const {laneHeight, maxLaneHeight, minLaneHeight} = props;
        if (!laneHeight && !maxLaneHeight && !minLaneHeight) {
            return lanes;
        }
        return lanes.map(lane => {
            return {
                height: typeof laneHeight === 'function' ? laneHeight.call(this, lane) : laneHeight,
                maxHeight: maxLaneHeight,
                minHeight: minLaneHeight,
                ...lane,
            };
        });
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return ['kanban', props.className, props.sticky ? 'kanban-sticky' : '', this.data.hasSubCols ? 'has-sub-cols' : ''];
    }

    protected _getProps(props: RenderableProps<P>): Record<string, unknown> {
        const {laneNameWidth, colsGap, lanesGap, selectable, onClickItem, showLinkOnHover} = props;
        return mergeProps(super._getProps(props), {
            ref: this._ref,
            style: {
                '--kanban-lane-name-width': laneNameWidth,
                '--kanban-cols-gap': toCssSize(colsGap),
                '--kanban-lanes-gap': toCssSize(lanesGap),
            },
            onClick: (onClickItem || selectable) ? this._handleClick : undefined,
            onMouseMove: showLinkOnHover ? this._handleMouseMove : undefined,
        });
    }

    protected _handleMouseMove = (event: MouseEvent) => {
        if (this._hoverTimer) {
            clearTimeout(this._hoverTimer);
        }
        const info = this._getElementInfo(event.target as HTMLElement);
        const hover = info?.type === 'item' ? info.key : undefined;
        this._hoverTimer = window.setTimeout(() => {
            if (hover !== this.state.hover) {
                this.setState({hover}, () => {
                    $(this._ref.current).trigger('kanbanItemHover', {kanban: this.props.key, hover});
                });
            }
            this._hoverTimer = 0;
        }, !hover && this.state.hover ? 0 : 20);
    };

    protected _handleClick = (event: MouseEvent) => {
        if ((event.target as HTMLElement).closest('a,button')) {
            return;
        }
        const {onClickItem, selectable} = this.props;
        const info = this._getElementInfo(event.target as HTMLElement);
        if (onClickItem && info?.type === 'item') {
            const result = onClickItem.call(this, event, info as KanbanItemInfo);
            if (result === false) {
                return;
            }
        }

        if (selectable && info?.type === 'item') {
            this.select(info.key!, true);
        }
    };

    protected _renderLinks(props: RenderableProps<P>) {
        const {links = []} = this.data;
        const {editLinks} = props;
        if (!editLinks && !links.length) {
            return;
        }

        const {showLinkOnHover, showLinkOnSelected} = props;
        let filters: string[] | undefined;
        if (showLinkOnSelected || showLinkOnHover) {
            filters = [];
            const {selected, hover} = this.state;
            if (showLinkOnSelected && selected) {
                filters.push(...selected);
            }
            if (showLinkOnHover && hover) {
                filters.push(hover);
            }
            filters = [...new Set(filters)];
        }

        return (
            <KanbanLinks
                key="links"
                links={links}
                filters={filters}
                editLinks={editLinks}
                onDeleteLink={editLinks ? (this._onDeleteLink as (link: KanbanLinkOptions) => void) : undefined}
                onAddLink={editLinks ? this._onAddLink : undefined}
            />
        );
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        const data = this._data.value;
        const {cols, lanes, items} = data;
        const {laneNameWidth} = props;
        const layoutCols = this._layoutCols(cols, props);
        const layoutLanes = this._layoutLanes(lanes, props);
        return [
            <KanbanHeader key="header" cols={layoutCols} />,
            <KanbanBody
                key="body"
                itemRender={props.itemRender}
                getLaneCol={props.getLaneCol}
                cols={layoutCols}
                lanes={layoutLanes}
                items={items}
                hideLaneName={laneNameWidth === 0}
            />,
            this._renderLinks(props),
            props.children,
        ];
    }
}
