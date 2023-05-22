import type {ComponentChildren} from 'preact';
import type {ToolbarOptions} from '@zui/toolbar/src/types';
import type {ContextMenuOptions} from '@zui/contextmenu/src/types';
import type {BlockFetcher} from './block-fetcher';

export type BlockInfo = {
    id: string;
    width: number;
    height: number;
    left: number;
    top: number;
    fetch?: BlockFetcher;
    title?: string;
    toolbar?: ToolbarOptions;
    placeholder?: ComponentChildren;
    content?: ComponentChildren;
    menu?: ContextMenuOptions;
};
