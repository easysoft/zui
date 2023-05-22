import {JSX} from 'preact';
import type {BlockInfo} from './block-info';

export type BlockProps = {
    id: string;
    style?: JSX.CSSProperties;
    height: number | string;
    width: number | string;
    left: number | string;
    top: number | string;
    block: BlockInfo;
    index: number;
    moreMenu?: string | boolean;
    onDragStart?: (event: DragEvent) => void;
    onDragEnd?: (event: DragEvent) => void;
};
