import type {CustomContentType, FetcherSetting, HElementProps} from '@zui/core';

export type CheckListItem = {label: CustomContentType; value: string};

export interface CheckListProps extends HElementProps {
    type?: 'checkbox' | 'radio' | 'switch';
    id?: string;
    defaultChecked?: string[] | string;
    inline?: boolean;
    checked?: string[] | string;
    disabled?: boolean;
    name?: string | false;
    items?: FetcherSetting<CheckListItem[]>;
    onChange?: (event: Event, checked: string[] | string) => void;
}
