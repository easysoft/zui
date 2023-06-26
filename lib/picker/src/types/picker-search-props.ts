export type PickerSearchProps = {
    defaultSearch?: string;
    placeholder?: string;
    onSearch?: (search: string) => void;
    onClear?: () => void;
};
