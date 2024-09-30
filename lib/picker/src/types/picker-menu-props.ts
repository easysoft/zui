import type {MenuOptions} from '@zui/menu';
import type {TreeOptions} from '@zui/tree';
import type {PickPopProps} from '@zui/pick';
import type {CustomContentType} from '@zui/core';
import type {PickerState} from './picker-state';
import type {Picker} from '../component/picker';

export interface PickerMenuProps<S extends PickerState = PickerState> extends PickPopProps<S> {
    multiple?: boolean | number;
    tree?: TreeOptions | boolean;
    menu?: MenuOptions;
    checkbox?: MenuOptions['checkbox'];
    search?: boolean | number;
    valueList: string[];
    header?: CustomContentType;
    footer?: CustomContentType;
    noMatchHint?: string;
    maxItemsCount?: number;
    exceedLimitHint?: string;
    picker?: Picker;

    onSelect: (values: string | string[]) => void;
    onDeselect: (values: string | string[]) => void;
    onClear: () => void;
    onToggleValue: (value: string, toggle?: boolean) => void;
    onSetValue: (value: string | string[], silent?: boolean) => void;
}
