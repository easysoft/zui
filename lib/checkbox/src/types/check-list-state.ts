import type {CheckListItem} from './check-list-props';

export type CheckListState = {
    checked: string[] | string;
    items?: CheckListItem[];
};
