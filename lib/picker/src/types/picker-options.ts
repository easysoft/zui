import type {JSX} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';
import type {PickerItemProps} from './picker-item-props';
import type {PickerMenuDirection} from './picker-menu-direction';
import type {PickerLangData} from './picker-lang-data';

export type PickerOptions = {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    container?: string | HTMLElement;
    afterRender?: (info: {firstRender: boolean}) => void;
    beforeDestroy?: () => void;

    name?: string;
    disabled?: boolean;
    multiple?: boolean | number;
    optional?: boolean;
    defaultValue?: string | string[];
    placeholder?: string;
    valueSplitter?: string;
    items: PickerItemProps[] | (() => (Promise<PickerItemProps[]> | PickerItemProps[]));
    itemHeight?: number;
    hotkey?: boolean;
    search?: boolean | number;
    searchDelay?: number;
    onChange?: (value: string | string[], items: PickerItemProps | PickerItemProps[]) => void;
    onDeselect?: (value: string, item: PickerItemProps) => false | void;
    onSelect?: (value: string, item: PickerItemProps) => false | void;
    onFocus?: () => void;
    onNoResults?: (search: string) => string | void;

    lang?: PickerLangData;

    /** Menu width */
    menuWidth: number | 'auto';
    menuMaxHeight?: number;
    menuMaxWidth?: number;
    menuDirection?: PickerMenuDirection;
    menuClass?: ClassNameLike;
    menuStyle?: JSX.CSSProperties;
    onMenuShow?: () => void;
    onMenuShown?: () => void;
    onMenuHide?: () => void;
    onMenuHidden?: () => void;
};
