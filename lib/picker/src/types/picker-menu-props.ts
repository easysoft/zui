import {ClassNameLike} from '@zui/browser-helpers/src/classes';
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
    searchHint?: string;

    selections: string[];
    items: PickerItemProps[];
    onSelectItem: (item: PickerItemProps) => void;
    menu?: MenuOptions;

    onShow?: () => void;
    onShown?: () => void;
    onHide?: () => void;
    onHidden?: () => void;
    onRequestHide?: () => void;
}
