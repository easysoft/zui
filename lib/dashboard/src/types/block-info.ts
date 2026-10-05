import type {ComponentChildren} from 'preact';
import type {ClassNameLike, CustomContentType} from '@zui/core';
import type {ToolbarOptions} from '@zui/toolbar';
import type {ContextMenuOptions} from '@zui/contextmenu';
import type {BlockFetcher} from './block-fetcher';

export type BlockContentSetting = CustomContentType;

export type BlockInfo = {
    id: string;
    width: number;
    height: number;
    left: number;
    top: number;
    needLoad: boolean;
    visible?: boolean;
    loading: boolean;
    fetch?: BlockFetcher;
    title?: string;
    toolbar?: ToolbarOptions;
    rootClass?: ClassNameLike;
    headerClass?: ClassNameLike;
    bodyClass?: ClassNameLike;
    placeholder?: ComponentChildren;
    content?: BlockContentSetting;
    menu?: ContextMenuOptions;
};
