import type {ClassNameLike, IconType, JSX} from '@zui/core';

export type SearchBoxOptions = {
    id?: string;
    name?: string;
    compact?: boolean;
    className?: ClassNameLike;
    rootClass?: ClassNameLike;
    rootStyle?: JSX.CSSProperties;
    circle?: boolean;
    style?: JSX.CSSProperties;
    delay?: number;
    defaultValue?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean;
    clearIcon?: boolean | IconType;
    searchIcon?: boolean | IconType;
    mergeIcon?: boolean | IconType;
    prefixClass?: ClassNameLike;
    suffixClass?: ClassNameLike;
    onChange?: (value: string, event: Event) => void;
    onClear?: (event: MouseEvent) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
};
