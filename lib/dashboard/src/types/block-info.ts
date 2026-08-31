import type {ComponentChildren} from 'preact';
import type {ToolbarOptions} from '@zui/toolbar';
import type {ContextMenuOptions} from '@zui/contextmenu';
import type {BlockFetcher} from './block-fetcher';

export type BlockContentSetting = ComponentChildren | {html: string};

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
    placeholder?: ComponentChildren;
    content?: BlockContentSetting;
    menu?: ContextMenuOptions;
};
