import type {JSX, ComponentChildren} from 'preact';
import type {ClassNameLike} from '@zui/core';
import type {PickState, PickerStateChanger} from './pick-state';

export interface PickTriggerProps<S extends PickState = PickState> {
    id: string;
    state: S;
    disabled?: boolean;
    readonly?: boolean;
    changeState: PickerStateChanger<S>;
    togglePop: (open?: boolean, state?: Partial<S>) => Promise<S>;
    onClick?: (event: MouseEvent) => void | boolean;
    clickType?: 'toggle' | 'open';

    name?: string;

    pickerName?: string;
    className?: ClassNameLike;
    style?: JSX.CSSProperties;
    children?: ComponentChildren;
    attrs?: Record<string, unknown>;
    tagName?: keyof JSX.IntrinsicElements;
}
