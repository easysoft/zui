import type {ComponentType, ComponentChildren, JSX, h as _h, VNode} from 'preact';
import type {ActionBasicProps} from './action-basic-props';
import type {ClassNameLike} from '@zui/browser-helpers/src/classes';
import type {ActionMenuItemOptions} from './action-menu-item-options';

export type ActionMenuItemRender<T extends ActionBasicProps = ActionMenuItemOptions> = ((item: T, h: typeof _h) => VNode | Partial<T>);

export interface ActionMenuOptions<T extends ActionBasicProps = ActionMenuItemOptions> {
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
