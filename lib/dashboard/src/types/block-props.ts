import type {ClassNameLike} from '@zui/core';
import type {BlockContentSetting} from './block-info';

export type BlockProps = {
    id: string;
    className?: ClassNameLike;
    left: number | string;
    top: number | string;
    index: number;
    width: number | string;
    height: number | string;
    loading?: boolean;
    content: BlockContentSetting;
    title?: string;
    draggable?: boolean;
    onDragStart?: (event: DragEvent) => void;
    onDragEnd?: (event: DragEvent) => void;
    onMenuBtnClick?: (event: MouseEvent) => void;
};
