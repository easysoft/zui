import type {PickOptions} from '@zui/pick';
import type {MenuOptions} from '@zui/menu';
import type {ToolbarSetting} from '@zui/toolbar';
import type {TreeOptions} from '@zui/tree';
import type {HotkeysSettings} from '@zui/core';
import type {PickerState} from './picker-state';

export interface PickerOptions<S extends PickerState = PickerState> extends PickOptions<S> {
    multiple?: boolean | number;
    placeholder?: string;
    required?: boolean;

    valueSplitter?: string;
    emptyValue?: string;
    limitValueInList?: boolean;
    tree?: TreeOptions | boolean;
    menu?: MenuOptions;
    checkbox?: MenuOptions['checkbox'];
    items: MenuOptions['items'];
    toolbar?: ToolbarSetting | boolean;
    cache?: boolean;
    searchDelay?: number;
    searchEmptyHint?: string;
    search?: boolean | number;
    searchHint?: string;
    hotkeys?: HotkeysSettings;

    onDeselect?: (values: string | string[]) => false | void;
    onSelect?: (values: string | string[]) => false | void;
    onClear?: () => void;
}
