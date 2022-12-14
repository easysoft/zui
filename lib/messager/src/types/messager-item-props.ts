import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {MessagerActionsProps} from './messager-actions-props';
import {JSX} from 'preact';

export interface MessagerProps {
    className?: ClassNameLike;
    contentClass?: ClassNameLike;
    type?: 'default' | 'primary' | 'danger' | 'success' | 'warning' | 'important' | 'special';
    time?: number;
    message?: string;
    parent?: string;
    icon?: string;
    close?: boolean;
    fade?: boolean;
    scale?: boolean;
    show?: boolean;
    actions?: MessagerActionsProps[];
    onAction?: JSX.MouseEventHandler<HTMLAnchorElement>;
}
