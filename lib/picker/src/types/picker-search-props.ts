import type {HotkeysSettings} from '@zui/core';

export type PickerSearchProps = {
    id: string;
    inline?: boolean;
    defaultSearch?: string;
    placeholder?: string;
    debounce?: number;
    hotkeys?: HotkeysSettings;
    onSearch?: (search: string) => void;
    onClear?: () => void;
};
