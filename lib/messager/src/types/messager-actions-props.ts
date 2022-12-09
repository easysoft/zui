import {JSX} from 'preact';

export interface MessagerActionsProps {
    name?: string;
    icon?: string;
    text?: string;
    action?: JSX.MouseEventHandler<HTMLAnchorElement>;
}