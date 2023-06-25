import type {MenuOptions} from '@zui/menu/src/types';
import type {PickPopProps} from '@zui/pick';
import type {PickerState} from './picker-state';

export interface PickerMenuProps extends PickPopProps<PickerState> {
    multiple?: boolean | number;
    menu?: MenuOptions;

    onSelect: (values: string | string[]) => void;
    onDeselect: (values: string | string[]) => void;
    onClear: () => void;
    onToggleValue: (value: string, toggle?: boolean) => void;
}
