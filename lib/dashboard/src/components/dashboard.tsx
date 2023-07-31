import {Component, RefObject, createRef} from 'preact';
import {store} from '@zui/store';
import {$} from '@zui/core';
import {formatString} from '@zui/helpers';
import {Block} from './block';
import {ContextMenu} from '@zui/contextmenu';
import type {DashboardOptions, BlockInfo, DashboardLayout, BlockFetcher, BlockSetting, BlockContentSetting} from '../types';
import '../style';

export type BlockLocation = [left: number, top: number, width: number, height: number];

export type BlocksMap = Map<string, BlockLocation>;

export type BlockSizeSetting = [width: number, height: number] | {
    width: number;
    height: number;
};

export type DashboardState = {
    dragging?: string;
    blocks: BlockInfo[];
};

const isBlockIntersect = ([left1, top1, width1, height1]: BlockLocation, [left2, top2, width2, height2]: BlockLocation) => {
    return !((left1 + width1) <= left2 || (left2 + width2) <= left1 || (top1 + height1) <= top2 || (top2 + height2) <= top1);
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

    map: BlocksMap = new Map();

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
                const response = await fetch(formatString(fetchUrl, block), {
                    headers: {'X-Requested-With': 'XMLHttpRequest'},
                    ...fetchOptions,
                });
                if (!response.ok) {
                    throw new Error(`Server response: ${response.status} ${response.statusText}}`);

                }
                const html = await response.text();
                this.update({id, loading: false, content: {html}}, () => {
                    this._setCache(id, html);
                });
            } catch (error) {
                const content = (
                    <div class="panel center text-danger p-5">Error: {(error as Error).message}</div>
                );
                this.update({id, loading: false, content});
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
        const {blockFetch, blockMenu} = this.props;
        const blocks = blockSettings.map<BlockInfo>((block) => {
            const {
                id,
                size,
                left = -1,
                top = -1,
                fetch = blockFetch,
                menu = blockMenu,
                content,
                ...rest
            } = block;

            const [width, height] = this._getBlockSize(size);
            return {
                id: `${id}`,
                width,
                height,
                left,
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
        this.map.clear();
        let height = 0;
        const {blocks} = this.state;
        blocks.forEach(block => {
            this._layoutBlock(block);
            const [, blockTop, , blockHeight] = this.map.get(block.id)!;
            height = Math.max(height, blockTop + blockHeight);
        });

        return {blocks, height};
    }

    protected _layoutBlock(block: BlockInfo) {
        const map = this.map;
        const {id, left: expectLeft, top: expectTop, width, height} = block;
        if (expectLeft < 0 || expectTop < 0) {
            const [left, top] = this._appendBlock(width, height, expectLeft, expectTop);
            map.set(id, [left, top, width, height]);
        } else {
            this._insertBlock(id, [expectLeft, expectTop, width, height]);
        }
    }

    protected _canPlace(location: BlockLocation) {
        const {dragging} = this.state;
        for (const [blockID, block] of this.map.entries()) {
            if (blockID === dragging) {
                continue;
            }
            if (isBlockIntersect(block, location)) {
                return false;
            }
        }
        return true;
    }

    protected _insertBlock(id: string, location: BlockLocation) {
        this.map.set(id, location);
        for (const [blockID, block] of this.map.entries()) {
            if (blockID === id) {
                continue;
            }
            if (isBlockIntersect(block, location)) {
                block[1] = location[1] + location[3];
                this._insertBlock(blockID, block);
            }
        }
    }

    protected _appendBlock(width: number, height: number, expectLeft: number, expectTop: number) {
        if (expectLeft >= 0 && expectTop >= 0) {
            if (this._canPlace([expectLeft, expectTop, width, height])) {
                return [expectLeft, expectTop];
            }
            expectTop = -1;
        }
        let left = expectLeft < 0 ? 0 : expectLeft;
        let top = expectTop < 0 ? 0 : expectTop;
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
        return [left, top];
    }

    protected _handleDragStart = (event: DragEvent) => {
        const id = event.dataTransfer?.getData('application/id');
        if (id === undefined) {
            return;
        }
        this.setState({dragging: id});
        console.log('handleBlockDragStart', event);
    };

    protected _handleDragEnd = (event: DragEvent) => {
        this.setState({dragging: undefined});
        console.log('handleBlockDragEnd', event);
    };

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
                onClickItem: (info) => {
                    if ((info.item.data?.type) === 'refresh') {
                        this.load(id);
                    }
                    if (onClickBlockMenu) {
                        onClickBlockMenu.call(this, info, block);
                    }
                },
                ...menu,
            },
        });
    };

    componentDidMount(): void {
        this.loadNext();
        $(window).on('scroll', this.tryLoadNext);
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
    }

    render() {
        const {blocks, height: dashboardHeight} = this._layout();
        const {cellHeight, grid} = this.props;
        const map = this.map;
        return (
            <div class="dashboard">
                <div
                    class="dashboard-blocks"
                    style={{height: dashboardHeight * cellHeight}}
                    ref={this._ref}
                >
                    {blocks.map((block, index) => {
                        const {id, menu, content, title} = block;
                        const [left, top, width, height] = map.get(id) || [0, 0, block.width, block.height];
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
                                onDragStart={this._handleDragStart}
                                onDragEnd={this._handleDragEnd}
                                onMenuBtnClick={menu ? this._handleMenuClick : undefined}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}
