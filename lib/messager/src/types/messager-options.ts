import {ClassNameLike} from '@zui/browser-helpers/src/classes';
import {MessagerActionsProps} from './messager-actions-props';
import {JSX} from 'preact';

export interface MessagerProps {
    className?: ClassNameLike;
    contentClass?: ClassNameLike;
    type?: 'default' | 'primary' | 'danger' | 'success' | 'warning' | 'important' | 'special';
    placement?: 'top' | 'center' | 'bottom' | 'left-top' | 'left' | 'left-bottom' | 'right' | 'right-top' | 'right-bottom';
    time?: number;
    message?: string;
    parent?: string;
    icon?: string;
    close?: boolean;
    fade?: boolean;
    scale?: boolean;
    actions?: MessagerActionsProps[];
    onAction?: JSX.MouseEventHandler<HTMLAnchorElement>;
    show?: boolean;
}