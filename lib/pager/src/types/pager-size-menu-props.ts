import type {ButtonProps} from '@zui/button';
import type {Item} from '@zui/list';
import type {DropdownButtonOptions} from '@zui/dropdown';
import type {MenuItemProps} from '@zui/menu';
import type {PagerInfo} from './pager-info';

export interface PagerSizeMenuProps extends Item, Omit<ButtonProps, 'type'> {
    type: 'size-menu',
    items?: number[],
    itemProps?: Partial<MenuItemProps>,
    dropdown?: DropdownButtonOptions,
    text?: string | ((info: PagerInfo) => string);
}
