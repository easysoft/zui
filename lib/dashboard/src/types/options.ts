import type {ComponentChildren} from 'preact';
import type {ContextMenuOptions} from '@zui/contextmenu/src/types';
import type {BlockFetcher} from './block-fetcher';
import type {BlockSetting} from './block-setting';
import type {MenuItemOptions} from '@zui/menu/src/types';
import type {BlockInfo} from './block-info';

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
    emptyBlockContent?: ComponentChildren | {html: string};
    onClickMenu?: (info: {item: MenuItemOptions, event: MouseEvent}, block: BlockInfo) => void;
    onLayoutChange?: (layout: Record<string, {top: number, left: number, width: number, height: number}>) => void;
    onLoad?: (info: BlockInfo) => void;
    onLoadFail?: (error: Error, info: BlockInfo) => void;
};
