export type PickerSearchProps = {
    inline?: boolean;
    defaultSearch?: string;
    placeholder?: string;
    onSearch?: (search: string) => void;
    onClear?: () => void;
};
