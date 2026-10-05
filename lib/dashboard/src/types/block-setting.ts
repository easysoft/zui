import type {ComponentChildren} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {ToolbarOptions} from '@zui/toolbar';
import type {ContextMenuOptions} from '@zui/contextmenu';
import type {BlockFetcher} from './block-fetcher';

export type BlockSetting = {
    id: string | number;
    rootClass?: ClassNameLike;
    headerClass?: ClassNameLike;
    bodyClass?: ClassNameLike;
    width?: number;
    height?: number;
    size?: string | {width: number; height: number} | [width: number, height: number];
    left?: number;
    top?: number;
    fetch?: BlockFetcher;
    title?: string;
    toolbar?: ToolbarOptions;
    placeholder?: ComponentChildren;
    content?: CustomContentType;
    menu?: ContextMenuOptions;
};
