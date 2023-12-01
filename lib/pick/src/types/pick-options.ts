import type {ComponentType, JSX} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {PickPopProps} from './pick-pop-props';
import type {PickState} from './pick-state';
import type {PickPopLayout} from './pick-pop-layout';
import type {PickTriggerProps} from './pick-trigger-props';
import type {PickPopPlacement} from './pick-pop-placement';

export interface PickOptions<S extends PickState = PickState> {
    id?: string;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    tagName?: keyof JSX.IntrinsicElements;
    pickerName?: string;
    attrs?: Record<string, unknown>;
    clickType?: 'toggle' | 'open';

    afterRender?: (info: {firstRender: boolean}) => void;
    beforeDestroy?: () => void;

    Trigger?: ComponentType<PickTriggerProps<S>>;
    Pop?: ComponentType<PickPopProps<S>>;

    defaultValue?: string;
    disabled?: boolean;
    readonly?: boolean;
    name?: string;
    onChange?: (value: string, oldValue: string) => void;
    onClick?: (event: MouseEvent) => void | boolean;

    hidePopWhenEmpty?: boolean;
    popClass?: ClassNameLike;
    popStyle?: JSX.CSSProperties;
    popContainer?: string | HTMLElement;
    popPlacement?: PickPopPlacement;
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
