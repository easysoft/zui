import type {JSX, ComponentChildren} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';
import type {PickerItemBasic} from './picker-item-props';

export type PickerSelectProps = {
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren;
    disabled?: boolean;
    placeholder?: string;
    focused?: boolean;
    selections?: PickerItemBasic[];
    onClick?: (event: MouseEvent) => void;
    onDeselect?: (items: PickerItemBasic[], event: MouseEvent) => void;
};
