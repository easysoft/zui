import type {ContextMenuOptions} from '@zui/contextmenu/src/types';
import type {BlockFetcher} from './block-fetcher';
import type {BlockSetting} from './block-setting';
import type {MenuItemOptions} from '@zui/menu/src/types';

export type DashboardOptions =  {
    responsive?: boolean;
    blocks?: BlockSetting[];
    grid?: number;
    gap?: number;
    cellHeight?: number;
    cache?: boolean | string;
    blockFetch?: BlockFetcher;
    blockDefaultSize?: [width: number, height: number] | {width: number, height: number};
    blockSizeMap: Record<string, [width: number, height: number] | {width: number, height: number}>;
    blockMenu?: ContextMenuOptions;
    onClickMenu?: (info: {item: MenuItemOptions, event: MouseEvent}) => void;
    onLayoutChange?: (blocks: BlockSetting[]) => void;
};
