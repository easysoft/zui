import {JSX} from 'preact';
import {BtnGroupOptions} from '@zui/btn-group/src/types';

export interface MessagerActionsProps extends BtnGroupOptions {
    name?: string;
    icon?: string;
    text?: string;
    action?: JSX.MouseEventHandler<HTMLAnchorElement>;
}
