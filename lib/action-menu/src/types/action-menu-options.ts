import type {ComponentType, ComponentChildren, JSX, h as _h, VNode} from 'preact';
import type {ActionMenuItem} from './action-menu-item';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';
import type {CommonActionItem} from './common-action-item';

export type ActionMenuItemRender<T extends ActionMenuItem = CommonActionItem> = ((item: T, h: typeof _h) => VNode | Partial<T>);

export interface ActionMenuOptions<T extends ActionMenuItem = CommonActionItem> {
    name?: string;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    items: T[] | (() => T[]),
    defaultItemProps?: Record<string, Partial<T>>,
    children?: ComponentChildren | (() => ComponentChildren);
    itemRender?: Record<string, ComponentType> | ActionMenuItemRender<T>,
    onClickItem?: (info: {item: T, index: number, event: MouseEvent}) => void;
    beforeRender?: (options: ActionMenuOptions<T>) => (Partial<Omit<ActionMenuOptions<T>, 'onClickItem' | 'beforeRender' | 'beforeDestroy' | 'afterRender'>> | undefined);
    afterRender?: (info: {firstRender: boolean}) => void;
    beforeDestroy?: () => void;
}
