import type {ComponentType, JSX} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {PickPopProps} from './pick-pop-props';
import type {PickState} from './pick-state';
import type {PickPopLayout} from './pick-pop-layout';
import type {PickPopDirection} from './pick-pop-direction';
import type {PickTriggerProps} from './pick-trigger-props';

export interface PickOptions<S extends PickState = PickState> {
    id?: string;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    afterRender?: (info: {firstRender: boolean}) => void;
    beforeDestroy?: () => void;

    Trigger?: ComponentType<PickTriggerProps<S>>;
    Pop?: ComponentType<PickPopProps<S>>;

    defaultValue?: string;
    name?: string;
    onChange?: (value: string | undefined, oldValue: string | undefined) => void;

    popClass?: ClassNameLike;
    popStyle?: JSX.CSSProperties;
    popContainer?: string | HTMLElement;
    popDirection?: PickPopDirection;
    popWidth?: number | 'auto' | '100%' | (() => number | 'auto');
    popHeight?: number | 'auto' | (() => number | 'auto');
    popMinHeight?: number | string;
    popMaxHeight?: number | string;
    popMaxWidth?: number | string;
    popMinWidth?: number | string;

    onPopLayout?: (layout: PickPopLayout) => PickPopLayout;
    onPopShow?: () => void;
    onPopShown?: () => void;
    onPopHide?: () => void;
    onPopHidden?: () => void;
}
