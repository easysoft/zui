export type PickerSearchProps = {
    inline?: boolean;
    defaultSearch?: string;
    placeholder?: string;
    debounce?: number;
    onSearch?: (search: string) => void;
    onClear?: () => void;
};
