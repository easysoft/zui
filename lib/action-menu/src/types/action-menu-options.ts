import type {ComponentType, ComponentChildren, JSX, h as _h, VNode} from 'preact';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';
import type {ActionBasicProps} from './action-basic-props';
import type {ActionMenuItemOptions} from './action-menu-item-options';
import type {ActionMenu} from '../component/action-menu';
import {ActionMenuItemKey} from './action-menu-item-key';

export type ActionMenuItemRender<T extends ActionBasicProps = ActionMenuItemOptions> = ((item: T, h: typeof _h) => VNode | Partial<T>);

export interface ActionMenuOptions<T extends ActionBasicProps = ActionMenuItemOptions> {
    name?: string;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren | (() => ComponentChildren);
    items: T[] | ((menu: ActionMenu<T>) => T[]),
    commonItemProps?: Record<string, Partial<T>>,
    itemRender?: Record<string, ComponentType> | ActionMenuItemRender<T>,
    onClickItem?: (info: {menu: ActionMenu<T>, item: T, index: number, event: MouseEvent}) => void;
    beforeRender?: (info: {menu: ActionMenu<T>, options: ActionMenuOptions<T>}) => (Partial<Omit<ActionMenuOptions<T>, 'onClickItem' | 'beforeRender' | 'beforeDestroy' | 'afterRender'>> | undefined);
    afterRender?: (info: {menu: ActionMenu<T>, firstRender: boolean}) => void;
    beforeDestroy?: (info: {menu: ActionMenu<T>}) => void;
    activeClass?: string;
    activeKey?: ActionMenuItemKey;
    activeIcon?: string;
}
