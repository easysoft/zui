import type {ButtonProps} from '@zui/button';
import type {Item} from '@zui/common-list';
import type {DropdownButtonOptions, DropdownMenuOptions} from '@zui/dropdown';
import type {MenuItemOptions} from '@zui/menu';
import type {PagerInfo} from './pager-info';

export interface PagerSizeMenuProps extends Item, Omit<ButtonProps, 'type'> {
    type: 'size-menu',
    items?: number[],
    itemProps?: Partial<MenuItemOptions>,
    dropdown?: DropdownButtonOptions,
    menu?: DropdownMenuOptions;
    text?: string | ((info: PagerInfo) => string);
}
