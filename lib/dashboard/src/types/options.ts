import type {ContextMenuOptions} from '@zui/contextmenu/src/types';
import type {BlockFetcher} from './block-fetcher';
import type {BlockSetting} from './block-setting';

export type DashboardOptions =  {
    responsive?: boolean;
    blocks?: BlockSetting[];
    grid?: number;
    gap?: number;
    cellHeight?: number;
    blockFetch?: BlockFetcher;
    blockDefaultSize?: [width: number, height: number] | {width: number, height: number};
    blockSizeMap: Record<string, [width: number, height: number] | {width: number, height: number}>;
    blockMenu?: ContextMenuOptions;
    onLayoutChange?: (blocks: BlockSetting[]) => void;
};
