import type {ComponentChildren} from 'preact';
import type {ToolbarOptions} from '@zui/toolbar/src/types';
import type {ContextMenuOptions} from '@zui/contextmenu/src/types';
import type {BlockFetcher} from './block-fetcher';

export type BlockSetting = {
    id: string | number;
    width?: number;
    height?: number;
    size?: string | {width: number, height: number} | [width: number, height: number];
    left?: number;
    top?: number;
    fetch?: BlockFetcher;
    title?: string;
    toolbar?: ToolbarOptions;
    placeholder?: ComponentChildren;
    content?: ComponentChildren | {html: string};
    menu?: ContextMenuOptions;
};
