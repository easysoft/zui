import {ClassNameLike} from '@zui/core';
import {MenuOptions} from '@zui/menu/src/types';
import {JSX} from 'preact';
import {PickerItemProps} from './picker-item-props';

export interface PickerMenuProps {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;

    id: string;
    search?: boolean;
    searchDelay?: number;
    width: number | 'auto';
    maxHeight?: number;
    maxWidth?: number;
    minWidth?: number;
    searchHint?: string;
    multiple?: boolean | number;

    selections: string[];
    items: PickerItemProps[];
    menu?: MenuOptions;

    onSelectItem: (item: PickerItemProps) => void;
    onShow?: () => void;
    onShown?: () => void;
    onHide?: () => void;
    onHidden?: () => void;
    onRequestHide?: () => void;
}
