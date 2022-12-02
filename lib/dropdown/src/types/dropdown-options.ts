import {ContextMenuOptions} from '@zui/contextmenu/src/types/contextmenu-options';
import {ClassNameLike} from '../../../browser-helpers/src/classes';

export type DropdownOptions = ContextMenuOptions & {
    trigger?: 'click' | 'hover' | 'manual',
    arrow?: boolean | number,
    offset?: number,
    className?: ClassNameLike;
};
