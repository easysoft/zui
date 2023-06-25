import type {JSX, ComponentChildren} from 'preact';
import type {PickState, PickerStateChanger} from './pick-state';

export interface PickTriggerProps<S extends PickState = PickState> {
    id: string;
    state: S;
    changeState: PickerStateChanger<S>;
    togglePop: (open?: boolean, state?: Partial<S>) => Promise<S>;

    name?: string;

    className?: string;
    style?: JSX.CSSProperties;
    children?: ComponentChildren;
}
