import type {ToolbarItemProps} from '@zui/toolbar/src/types';
import type {DropdownTriggerOptions} from '@zui/dropdown/src/types';
import type {PagerInfo} from './pager-info';
import type {MenuItemProps} from '@zui/menu/src/types';

export interface PagerSizeMenuProps extends ToolbarItemProps {
    type: 'size-menu',
    items?: number[],
    itemProps?: Partial<MenuItemProps>,
    dropdown?: DropdownTriggerOptions,
    text?: string | ((info: PagerInfo) => string);
}
