import type {PickOptions} from '@zui/pick';
import type {MenuOptions} from '@zui/menu';
import type {ToolbarSetting} from '@zui/toolbar';
import type {SearchTreeOptions, TreeOptions} from '@zui/tree';
import type {ClassNameLike, CustomContentType, HotkeysSettings} from '@zui/core';
import type {PickerState} from './picker-state';
import type {PickerItemBasic} from './picker-item-options';

export interface PickerOptions<S extends PickerState = PickerState> extends PickOptions<S> {
    multiple?: boolean | number;
    placeholder?: string;
    required?: boolean;

    valueSplitter?: string;
    emptyValue?: string | false;
    limitValueInList?: boolean;
    tree?: TreeOptions | boolean;
    menu?: SearchTreeOptions;
    checkbox?: MenuOptions['checkbox'];
    items: MenuOptions['items'];
    maxItemsCount?: number;
    exceedLimitHint?: string;
    toolbar?: ToolbarSetting | boolean;
    cache?: boolean;
    searchDelay?: number;
    searchEmptyHint?: string;
    display?: string | ((values: string | string[], selections: PickerItemBasic[]) => CustomContentType);
    search?: boolean | number;
    searchHint?: string;
    hotkeys?: HotkeysSettings;
    caretClass?: ClassNameLike;

    onDeselect?: (values: string | string[]) => false | void;
    onSelect?: (values: string | string[]) => false | void;
    onClear?: () => void;
}
