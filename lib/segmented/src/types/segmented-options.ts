import type {JSX} from 'preact';
import type {ClassNameLike, CustomContentType, HElementProps, IconType} from '@zui/core';

export type SegmentedValue = string | number;

export interface SegmentedItem {
    value: SegmentedValue;
    text?: CustomContentType;
    icon?: IconType;
    disabled?: boolean;
    title?: string;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    /** Accessible name for icon-only or custom content. */
    'aria-label'?: string;
    /** Additional attributes on the radio input. */
    attrs?: JSX.InputHTMLAttributes<HTMLInputElement>;
}

export interface SegmentedOptions extends HElementProps {
    items?: (SegmentedValue | SegmentedItem)[];
    value?: SegmentedValue;
    defaultValue?: SegmentedValue;
    name?: string;
    /** ID of the first input, for FormControl and external labels. */
    id?: string;
    form?: string;
    disabled?: boolean;
    readonly?: boolean;
    required?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    block?: boolean;
    vertical?: boolean;
    shape?: 'default' | 'round';
    onChange?: (value: SegmentedValue, event: Event) => void;
}
