import type {PickTriggerProps} from '@zui/pick';
import type {PickerState} from './picker-state';
import type {HotkeysSettings} from '@zui/core/src/helpers';

export interface PickerSelectProps<S extends PickerState = PickerState> extends PickTriggerProps<S> {
    placeholder?: string;
    multiple?: boolean | number;
    search?: boolean | number;
    searchHint?: string;
    disabled?: boolean;
    clearable?: boolean;
    valueList: string[];
    emptyValue: string;
    hotkeys?: HotkeysSettings;

    onSelect: (values: string | string[]) => void;
    onDeselect: (values: string | string[]) => void;
    onClear: () => void;
    onToggleValue: (value: string, toggle?: boolean) => void;
    onSetValue: (value: string | string[], silent?: boolean) => void;
}
