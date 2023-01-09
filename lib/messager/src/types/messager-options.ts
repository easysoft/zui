import {AlertOptions} from '@zui/alert/src/types';
import {MessagerPlacement} from './messager-placement';

export interface MessagerOptions extends AlertOptions {
    margin?: number;
    type?: string;
    placement?: MessagerPlacement;
    animation?: boolean | string;
    time?: number;
}
