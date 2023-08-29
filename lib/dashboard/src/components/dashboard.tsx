import {Component, RefObject, createRef} from 'preact';
import {store} from '@zui/store';
import {$} from '@zui/core';
import {Draggable} from '@zui/dnd';
import {formatString} from '@zui/helpers';
import {Block} from './block';
import {ContextMenu} from '@zui/contextmenu';
import type {DashboardOptions, BlockInfo, DashboardLayout, BlockFetcher, BlockSetting, BlockContentSetting} from '../types';
import '../style';
import {PopoverOptions} from '@zui/popover/src/types';
import {MenuItemOptions} from '@zui/menu/src/types';

export type BlockLocation = [left: number, top: number, width: number, height: number];

export type BlocksMap = Map<string, BlockLocation>;

export type BlockSizeSetting = [width: number, height: number] | {
    width: number;
    height: number;
};

export type DashboardState = {
    dragging?: string;
    dropping?: BlockLocation;
    blocks: BlockInfo[];
};

const isBlockIntersect = ([left1, top1, width1, height1]: BlockLocation, [left2, top2, width2, height2]: BlockLocation) => {
    return !((left1 + width1) <= left2 || (left2 + width2) <= left1 || (top1 + height1) <= top2 || (top2 + height2) <= top1);
};

const compareLocation = (a: BlockLocation, b: BlockLocation) => {
    if (a[1] === b[1]) {
        return a[0] - b[0];
    }
    return a[1] - b[1];
};

const CACHE_PREFIX = 'Dashboard:Block.cache:';

export class Dashboard extends Component<Required<DashboardOptions>, DashboardState> {
    static defaultProps: DashboardOptions = {
        responsive: false,
        cache: true,
        blocks: [],
        grid: 3,
        gap: 16,
        cellHeight: 64,
        blockDefaultSize: [1, 3],
        blockMenu: {items: [{text: 'Refresh', data: {type: 'refresh'}}]},
        blockSizeMap: {
            xs: [1, 3],
            sm: [1, 4],
            md: [1, 5],
            lg: [1, 6],
            xl: [1, 8],
            xsWide: [2, 3],
            smWide: [2, 4],
            mdWide: [2, 5],
            lgWide: [2, 6],
            xlWide: [2, 8],
            xsLong: [3, 3],
            smLong: [3, 4],
            mdLong: [3, 5],
            lgLong: [3, 6],
            xlLong: [3, 8],
        },
    };

    protected _ref: RefObject<HTMLDivElement> = createRef();

    protected _loadTimer = 0;

    protected _draggable?: Draggable;

    protected _dragOffset?: [x: number, y: number];

    protected _dragging?: BlockLocation;

    protected _map: BlocksMap = new Map();

    protected _oldMap: BlocksMap = new Map();

    constructor(props: Required<DashboardOptions>) {
        super(props);
        this.state = {blocks: this._initBlocks(props.blocks)};
    }

    getBlock(id: string) {
        return this.state.blocks.find(block => block.id === id);
    }

    update(info: Partial<BlockInfo> & {id: string}, callback?: () => void) {
        const {id} = info;
        const {blocks} = this.state;
        const index = blocks.findIndex(block => block.id === id);
        if (index < 0) {
            return;
        }
        const block = blocks[index];
        if (info.fetch && info.fetch !== block.fetch && block.needLoad) {
            info.needLoad = false;
        }
        blocks[index] = {...block, ...info};
        this.setState({blocks}, callback);
    }

    delete(id: string) {
        const {blocks} = this.state;
        const index = blocks.findIndex(block => block.id === id);
        if (index < 0) {
            return;
        }
        blocks.splice(index, 1);
        this.setState({blocks});
    }

    add(blocks: BlockSetting | BlockSetting[]) {
        blocks = Array.isArray(blocks) ? blocks : [blocks];
        this.setState({blocks: [...this.state.blocks, ...this._initBlocks(blocks)]});
    }

    load(id: string, fetcher?: BlockFetcher) {
        const block = this.getBlock(id);
        if (!block || block.loading) {
            return;
        }
        fetcher = fetcher || block.fetch;
        if (typeof fetcher === 'string') {
            fetcher = {url: fetcher};
        } else if (typeof fetcher === 'function') {
            fetcher = fetcher(block.id, block);
        }
        if (!fetcher || !fetcher.url) {
            return;
        }
        const {url, ...fetchOptions} = fetcher;
        this.update({id, loading: true, needLoad: false}, async () => {
            const fetchUrl = formatString(url, block);
            try {
                const html = await $.ajax({
                    url: formatString(fetchUrl, block),
                    ...fetchOptions,
                }) as string;
                this.update({id, loading: false, content: {html}}, () => {
                    this._setCache(id, html);
                    this.props.onLoad?.call(this, html, block);
                });
            } catch (error) {
                const content = (
                    <div class="panel center text-danger p-5">Error: {(error as Error).message}</div>
                );
                this.update({id, loading: false, content}, () => {
                    this.props.onLoadFail?.call(this, error as Error, block);
                });
            }
        });
    }

    reset(blockSettings: BlockSetting[]) {
        this.setState({blocks: this._initBlocks(blockSettings)});
    }

    loadNext() {
        const {blocks} = this.state;
        let needLoadID = '';
        for (const block of blocks) {
            if (block.loading) {
                return;
            }
            if (!block.visible && this._isVisible(block.id)) {
                return this.update({id: block.id, visible: true});
            }
            if (block.needLoad && block.visible) {
                needLoadID = block.id;
                break;
            }
        }
        if (!needLoadID.length) {
            return;
        }
        requestAnimationFrame(() => this.load(needLoadID));
    }

    tryLoadNext = () => {
        clearTimeout(this._loadTimer);
        this._loadTimer = window.setTimeout(() => this.loadNext(), 100);
    };

    protected _isVisible(id: string) {
        return !!$(this._ref.current).find(`.dashboard-block[data-id="${id}"]`).isVisible();
    }

    protected _setCache(id: string, html: string) {
        const {cache} = this.props;
        if (!cache) {
            return;
        }
        try {
            if (typeof cache === 'string') {
                store.set(`${CACHE_PREFIX}${cache}:${id}`, html);
            } else {
                store.session.set(`${CACHE_PREFIX}${id}`, html);
            }
        } catch (error) {
            console.warn('ZUI: Failed to cache block content.', {id, html});
        }
    }

    protected _getCache(id: string): BlockContentSetting | undefined {
        const {cache} = this.props;
        if (!cache) {
            return;
        }
        const cacheHtml = typeof cache === 'string' ? store.get<string>(`${CACHE_PREFIX}${cache}:${id}`) : store.session.get<string>(`${CACHE_PREFIX}${id}`);
        if (cacheHtml) {
            return {html: cacheHtml};
        }
    }

    protected _initBlocks(blockSettings: BlockSetting[]) {
        const {blockFetch, blockMenu, grid} = this.props;
        const blocks = blockSettings.map<BlockInfo>((block) => {
            const {
                id,
                size,
                width: widthSetting,
                height: heightSetting,
                left = -1,
                top = -1,
                fetch = blockFetch,
                menu = blockMenu,
                content,
                ...rest
            } = block;

            const [width, height] = this._getBlockSize((widthSetting && heightSetting) ? {width: widthSetting, height: heightSetting} : size);
            return {
                id: `${id}`,
                width,
                height,
                left: Math.min(left, grid - width),
                top,
                fetch,
                menu,
                content: content ?? this._getCache(`${id}`),
                loading: false,
                needLoad: !!fetch,
                ...rest,
            };
        });

        return blocks;
    }

    protected _getBlockSize(size: BlockSetting['size']): [width: number, height: number] {
        const {blockDefaultSize, blockSizeMap} = this.props;
        size = size ?? blockDefaultSize;
        if (typeof size === 'string') {
            size = blockSizeMap[size];
        }
        size = size || blockDefaultSize!;
        if (!Array.isArray(size)) {
            size = [size.width, size.height];
        }
        return size;
    }

    protected _layout(): DashboardLayout {
        const {blocks, dragging, dropping} = this.state;
        const map = this._map;
        if (map.size) {
            const empty: BlockLocation = [0, 0, 0, 0];
            blocks.sort((a, b) => compareLocation(map.get(a.id) || empty, map.get(b.id) || empty));
        }
        map.clear();
        if (dragging && dropping) {
            map.set(dragging, dropping);
        }
        blocks.forEach((block) => {
            if (block.id !== dragging) {
                this._layoutBlock(block);
            }
        });
        const locations = Array.from(map.entries());
        locations.sort((a, b) => compareLocation(a[1], b[1]));
        let height = 0;
        locations.forEach(([id, location]) => {
            let top = location[1] - 1;
            while (top >= 0 && this._canMove([location[0], top, location[2], location[3]], id)) {
                top--;
            }
            top++;
            location[1] = top;
            height = Math.max(height, top + location[3]);
        });
        if (dropping) {
            height = Math.max(height, dropping[1] + dropping[3]);
        }

        return {blocks, height};
    }

    protected _initDraggable() {
        const blocksElement = this._ref.current!;
        this._draggable = new Draggable(blocksElement, {
            selector: '.dashboard-block',
            target: () => blocksElement,
            beforeDrag: (event, element) => {
                const bounding = element.getBoundingClientRect();
                if ((event.clientY - bounding.top) > 48) {
                    event.preventDefault();
                    return false;
                }
                this._dragOffset = [event.clientX - bounding.left, event.clientY - bounding.top];
            },
            onDragStart: (_event, element) => {
                const id = element.dataset.id;
                if (id === undefined) {
                    return;
                }
                this._dragging = this._map.get(id);
                this.setState({dragging: id});
            },
            onDragOver: (event) => {
                const {cellHeight, grid} = this.props;
                const bounding = blocksElement.getBoundingClientRect();
                const [, , width, height] = this._dragging!;
                const [offsetX, offsetY] = this._dragOffset!;
                const dropLeft = Math.min(grid - width, Math.max(0, Math.round((event.clientX - bounding.left - offsetX) / (bounding.width / grid))));
                const dropTop = Math.max(0, Math.round((event.clientY - bounding.top - offsetY) / cellHeight));
                const oldDropPos = this.state.dropping;
                if (oldDropPos && oldDropPos[0] === dropLeft && oldDropPos[1] === dropTop) {
                    return;
                }
                this.setState({dropping: [dropLeft, dropTop, width, height]});
            },
            onDragEnd: () => {
                const {dragging, dropping} = this.state;
                const newState: Partial<DashboardState> = {dragging: undefined, dropping: undefined};
                const layout: Record<string, {top: number, left: number}> = {};
                if (dragging && dropping) {
                    const {blocks} = this.state;
                    blocks.forEach((block, index) => {
                        const [left, top] = dragging === block.id ? dropping : this._map.get(block.id)!;
                        if (block.left !== left || block.top !== top) {
                            blocks[index] = {...block, left, top};
                            layout[block.id] = {left, top};
                        }
                    });
                    newState.blocks = blocks;
                }
                this.setState(newState, this._checkLayout);
                this._dragging = undefined;
                this._dragOffset = undefined;
            },
        });
    }

    protected _checkLayout = () => {
        const {onLayoutChange} = this.props;
        if (!onLayoutChange) {
            return;
        }
        const {blocks} = this.state;
        const layout: Record<string, {top: number, left: number, width: number, height: number}> = {};
        let layoutChanged = false;
        blocks.forEach((block) => {
            const [left, top, width, height] = this._map.get(block.id)!;
            const oldLocation = this._oldMap.get(block.id);
            if (!oldLocation || oldLocation[0] !== left || oldLocation[1] !== top || oldLocation[2] !== width || oldLocation[3] !== height) {
                layoutChanged = true;
                layout[block.id] = {left, top, width, height};
                this._oldMap.set(block.id, [left, top, width, height]);
            }
        });
        if (layoutChanged) {
            onLayoutChange(layout);
        }
    };

    protected _layoutBlock(block: BlockInfo) {
        const {id, left: expectLeft, top: expectTop, width, height} = block;
        const location: BlockLocation = [expectLeft, expectTop, width, height];
        if (expectLeft < 0 || expectTop < 0) {
            this._appendBlock(id, location);
        } else {
            this._insertBlock(id, location);
        }
    }

    protected _canMove(location: BlockLocation, id?: string) {
        const {dropping} = this.state;
        if (dropping && isBlockIntersect(location, dropping)) {
            return false;
        }
        for (const [blockID, block] of this._map.entries()) {
            if (blockID === id) {
                continue;
            }
            if (isBlockIntersect(block, location)) {
                return false;
            }
        }
        return true;
    }

    protected _canPlace(location: BlockLocation) {
        const {dragging} = this.state;
        return this._canMove(location, dragging);
    }

    protected _insertBlock(id: string, location: BlockLocation) {
        const {dropping} = this.state;
        if (dropping && isBlockIntersect(location, dropping)) {
            location[1] = dropping[1] + dropping[3];
        }
        while (!this._canPlace(location)) {
            location[1] = location[1] + 1;
        }
        this._map.set(id, location);
    }

    protected _appendBlock(id: string, location: BlockLocation) {
        const [expectLeft, expectTop, width, height] = location;
        let topSetting = expectTop;
        if (expectLeft >= 0 && expectTop >= 0) {
            if (this._canPlace(location)) {
                this._map.set(id, [expectLeft, expectTop, width, height]);
                return;
            }
            topSetting = -1;
        }
        let left = expectLeft < 0 ? 0 : expectLeft;
        let top = topSetting < 0 ? 0 : topSetting;
        let found = false;
        const grid = this.props.grid;
        while (!found) {
            if (this._canPlace([left, top, width, height])) {
                found = true;
                break;
            }
            if (expectLeft < 0) {
                left += 1;
                if (left + width > grid) {
                    left = 0;
                    top += 1;
                }
            } else {
                top += 1;
            }
        }
        this._map.set(id, [left, top, width, height]);
    }

    protected _handleMenuClick = (event: MouseEvent) => {
        const element = (event.target as HTMLElement).closest<HTMLElement>('.dashboard-block');
        if (!element) {
            return;
        }
        const id = element.dataset.id;
        if (!id) {
            return;
        }
        const block = this.getBlock(id);
        if (!block || !block.menu) {
            return;
        }
        const {menu} = block;
        const {onClickMenu: onClickBlockMenu} = this.props;
        ContextMenu.show({
            triggerEvent: event,
            element: event.currentTarget as HTMLElement,
            placement: 'bottom-end',
            menu: {
                onClickItem: (info: {item: MenuItemOptions, event: MouseEvent}) => {
                    if ((info.item.data?.type) === 'refresh') {
                        this.load(id);
                    }
                    if (onClickBlockMenu) {
                        onClickBlockMenu.call(this, info, block);
                    }
                },
                ...menu,
            },
        } as PopoverOptions);
    };

    componentDidMount(): void {
        this.loadNext();
        $(window).on('scroll', this.tryLoadNext);
        this._initDraggable();
        for (const [id, location] of this._map.entries()) {
            this._oldMap.set(id, [...location]);
        }
    }

    componentDidUpdate(previousProps: Readonly<Required<DashboardOptions>>): void {
        if (previousProps.blocks !== this.props.blocks) {
            this.setState({blocks: this._initBlocks(this.props.blocks)});
        } else {
            this.loadNext();
        }
    }

    componentWillUnmount(): void {
        clearTimeout(this._loadTimer);
        $(window).off('scroll', this.tryLoadNext);
        this._draggable!.destroy();
    }

    render() {
        const {blocks, height: dashboardHeight} = this._layout();
        const {cellHeight, grid} = this.props;
        const {dropping, dragging} = this.state;
        const map = this._map;
        return (
            <div class="dashboard">
                <div
                    class="dashboard-blocks"
                    style={{height: dashboardHeight * cellHeight}}
                    ref={this._ref}
                >
                    {dropping ? (
                        <div
                            key="dropping"
                            className="dashboard-drop-shadow"
                            style={{left: `${100 * dropping[0] / grid}%`, top: cellHeight * dropping[1], width: `${100 * dropping[2] / grid}%`, height: cellHeight * dropping[3]}}
                        />
                    ) : null}
                    {blocks.map((block, index) => {
                        const {id, menu, content, title} = block;
                        const [left, top, width, height] = (id === dragging && dropping) ? dropping : (map.get(id) || [0, 0, block.width, block.height]);
                        return (
                            <Block
                                key={block.id}
                                id={id}
                                index={index}
                                left={`${100 * left / grid}%`}
                                top={cellHeight * top}
                                width={`${100 * width / grid}%`}
                                height={cellHeight * height}
                                content={content}
                                title={title}
                                onMenuBtnClick={menu ? this._handleMenuClick : undefined}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
