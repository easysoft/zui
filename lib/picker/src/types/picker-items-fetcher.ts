import type {PickerItemOptions} from './picker-item-options';

export type PickerItemsFetcher = (search: string, options: {signal: AbortSignal}) => (Promise<PickerItemOptions[]> | PickerItemOptions[]);
