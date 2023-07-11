export interface PickState {
    value: string;
    open: boolean | 'opening' | 'closing';
    disabled: boolean;
}

export type PickerStateChanger<S extends PickState = PickState> = (state: Partial<S> | ((prevState: S) => Partial<S>), callback?: () => void) => Promise<S>;
