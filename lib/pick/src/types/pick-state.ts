export interface PickState {
    value?: string;
    open: boolean | 'opening' | 'closing';
    focus: boolean;
    disabled: boolean;
}

export type PickerStateChanger<S extends PickState = PickState> = (state: Partial<S> | ((prevState: S) => Partial<S>), callback?: () => void) => Promise<S>;
