import type {CustomContentType, HElementProps} from '@zui/core';
import type {CheckedType} from './checked-type';

export interface CheckboxProps extends HElementProps {
    type?: 'checkbox' | 'radio' | 'switch';
    id?: string;
    label?: CustomContentType;
    defaultChecked?: CheckedType;
    checked?: CheckedType;
    disabled?: boolean;
    name?: string;
    value?: string;
    onChange?: (event: Event, checked: CheckedType) => void;
}
