import type {CustomContentType} from '@zui/core';
import type {AlertOptions} from '@zui/alert/src/types';
import type {MessagerPlacement} from './messager-placement';

export interface MessagerOptions extends AlertOptions {
    margin?: number;
    type?: string;
    placement?: MessagerPlacement;
    animation?: boolean | string;
    time?: number;
    html?: string;
    message?: CustomContentType;
}
