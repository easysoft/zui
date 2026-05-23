import type {ClassNameLike, CustomContentType, FetcherSetting, HElementProps} from '@zui/core';

export type CheckListItem = {label?: CustomContentType; text?: CustomContentType; value: string; className?: ClassNameLike};

export interface CheckListProps extends HElementProps {
    type?: 'checkbox' | 'radio' | 'switch';
    id?: string;
    defaultChecked?: string[] | string;
    inline?: boolean;
    checked?: string[] | string;
    disabled?: boolean;
    name?: string | false;
    items?: FetcherSetting<CheckListItem[]>;
    onChange?: (checked: string[] | string, event: Event) => void;
}
