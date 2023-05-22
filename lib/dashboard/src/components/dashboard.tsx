import {Component} from 'preact';
import {Block} from './block';
import type {DashboardOptions, BlockInfo, BlockSetting, DashboardLayout} from '../types';
import '../style';

export type BlockLocation = [left: number, top: number, width: number, height: number];

export type BlocksMap = Map<string, BlockLocation>;

export type DashboardState = {
    dragging?: string;
};

export class Dashboard extends Component<Required<DashboardOptions>, DashboardState> {
    static defaultProps: DashboardOptions = {
        responsive: false,
        blocks: [],
        grid: 12,
        gap: 16,
        leftStop: 4,
        cellHeight: 64,
        blockDefaultSize: [4, 3],
        blockMenu: {items: [{text: 'Refresh', attrs: {'data-type': 'refresh'}}]},
        blockSizeMap: {
            xs: [4, 3],
            sm: [4, 4],
            md: [4, 5],
            lg: [4, 6],
            xl: [4, 8],
            xsWide: [8, 3],
            smWide: [8, 4],
            mdWide: [8, 5],
            lgWide: [8, 6],
            xlWide: [8, 8],
            xsLong: [12, 3],
            smLong: [12, 4],
            mdLong: [12, 5],
            lgLong: [12, 6],
            xlLong: [12, 8],
        },
    };

    #map: BlocksMap = new Map();

    state: DashboardState = {};

    #getBlockSize(size: BlockSetting['size']): [width: number, height: number] {
        const {blockDefaultSize, blockSizeMap} = this.props;
        size = size ?? blockDefaultSize;
        if (typeof size === 'string') {
            size = blockSizeMap[size];
        }
        size = size || blockDefaultSize;
        if (!Array.isArray(size)) {
            size = [size.width, size.height];
        }
        return size;
    }

    #getBlocks() {
        const {blocks: blockSettings, blockFetch, blockMenu} = this.props;
        const blocks = blockSettings.map<BlockInfo>((block) => {
            const {
                id,
                size,
                left = -1,
                top = -1,
                fetch = blockFetch,
                menu = blockMenu,
                ...rest
            } = block;

            const [width, height] = this.#getBlockSize(size);
            return {
                id: `${id}`,
                width,
                height,
                left,
                top,
                fetch,
                menu,
                ...rest,
            };
        });

        return blocks;
    }

    #layout(): DashboardLayout {
        const blocks = this.#getBlocks();
        const {grid, leftStop} = this.props;

        this.#map.clear();
        let height = 0;
        blocks.forEach(block => {
            this.#layoutBlock(block, grid, leftStop);
            const [, blockTop, , blockHeight] = this.#map.get(block.id)!;
            height = Math.max(height, blockTop + blockHeight);
        });

        return {blocks, height};
    }

    #layoutBlock(block: BlockInfo, grid: number, leftStop: number) {
        const map = this.#map;
        const {id, left: expectLeft, top: expectTop, width, height} = block;
        if (expectLeft < 0 || expectTop < 0) {
            const [left, top] = this.#appendBlock(width, height, expectLeft, expectTop, grid, leftStop);
            map.set(id, [left, top, width, height]);
        } else {
            this.#insertBlock(id, [expectLeft, expectTop, width, height]);
        }
    }

    #canPlaceInMap(location: BlockLocation) {
        const {dragging} = this.state;
        for (const [blockID, block] of this.#map.entries()) {
            if (blockID === dragging) {
                continue;
            }
            if (Dashboard.#isBlockIntersect(block, location)) {
                return false;
            }
        }
        return true;
    }

    #insertBlock(id: string, location: BlockLocation) {
        this.#map.set(id, location);
        for (const [blockID, block] of this.#map.entries()) {
            if (blockID === id) {
                continue;
            }
            if (Dashboard.#isBlockIntersect(block, location)) {
                block[1] = location[1] + location[3];
                this.#insertBlock(blockID, block);
            }
        }
    }

    #appendBlock(width: number, height: number, expectLeft: number, expectTop: number, grid: number, leftStop: number) {
        if (expectLeft >= 0 && expectTop >= 0) {
            if (this.#canPlaceInMap([expectLeft, expectTop, width, height])) {
                return [expectLeft, expectTop];
            }
            expectTop = -1;
        }
        let left = expectLeft < 0 ? 0 : expectLeft;
        let top = expectTop < 0 ? 0 : expectTop;
        let found = false;
        while (!found) {
            if (this.#canPlaceInMap([left, top, width, height])) {
                found = true;
                break;
            }
            if (expectLeft < 0) {
                left += leftStop;
            }
            if (left + width > grid) {
                left = 0;
                top += 1;
            }
        }
        return [left, top];
    }

    #handleBlockDragStart = (event: DragEvent) => {
        const id = event.dataTransfer?.getData('application/id');
        if (id === undefined) {
            return;
        }
        this.setState({dragging: id});
        console.log('handleBlockDragStart', event);
    };

    #handleBlockDragEnd = (event: DragEvent) => {
        this.setState({dragging: undefined});
        console.log('handleBlockDragEnd', event);
    };

    render() {
        const {blocks, height: dashboardHeight} = this.#layout();
        const {cellHeight, grid} = this.props;
        const map = this.#map;
        return (
            <div class="dashboard">
                <div class="dashboard-blocks" style={{height: dashboardHeight * cellHeight}}>
                    {blocks.map((block, index) => {
                        const {id} = block;
                        const [left, top, width, height] = map.get(id) || [0, 0, block.width, block.height];
                        return (
                            <Block
                                id={id}
                                index={index}
                                key={block.id}
                                left={`${100 * left / grid}%`}
                                top={cellHeight * top}
                                height={cellHeight * height}
                                width={`${100 * width / grid}%`}
                                block={block}
                                moreMenu
                                onDragStart={this.#handleBlockDragStart}
                                onDragEnd={this.#handleBlockDragEnd}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }

    static #isBlockIntersect([left1, top1, width1, height1]: BlockLocation, [left2, top2, width2, height2]: BlockLocation) {
        return !((left1 + width1) <= left2 || (left2 + width2) <= left1 || (top1 + height1) <= top2 || (top2 + height2) <= top1);
    }
}
