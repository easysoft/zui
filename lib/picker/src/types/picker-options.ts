export interface PickerOptions {
    multiple?: boolean,
    placeholder?: string,
    disabled?: boolean,
    items?: boolean,
    autoSelectFirst?: boolean,
    dropWidth?: string,
    minDropWidth?: string,
    maxDropWidth?: string,
    maxDropHeight?: number,
    onInput: (event: MouseEvent) => void,
}
 