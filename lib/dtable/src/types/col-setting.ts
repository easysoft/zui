import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {JSX} from 'preact/jsx-runtime';
import {CellRenderCallback} from './cell-render';
export interface ColSetting {
    name: string;
    title?: string,
    width?: number,
    flex?: number, // default value = 1
    minWidth?: number,
    maxWidth?: number,
    sortType?: 'up' | 'down' | 'none' | boolean,
    align?: 'left' | 'center' | 'right',
    data?: Record<string, unknown>,
    style?: JSX.CSSProperties,
    cellStyle?: JSX.CSSProperties,
    className?: ClassNameLike,
    type?: string,
    hidden?: boolean,
    fixed?: 'left' | 'right' | false,
    colHover?: boolean,
    onRenderCell?: CellRenderCallback,
    [prop: string]: unknown;
}
