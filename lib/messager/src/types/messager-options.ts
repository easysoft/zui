import {MessagerProps} from './messager-item-props';

export interface MessagerOptions extends MessagerProps {
    placement?: 'top' | 'center' | 'bottom' | 'left-top' | 'left' | 'left-bottom' | 'right' | 'right-top' | 'right-bottom';
}
