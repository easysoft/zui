import type {ComponentChildren, VNode} from 'preact';
import type {PickerBasicProps} from './picker-basic-props';

export interface PickerItemProps extends PickerBasicProps {
    icon?: string;
    disabled?: boolean;
    value?: string;
    text?: ComponentChildren;
    keys?: string;
    trailingIcon?: string | VNode;
    className?: string;
}