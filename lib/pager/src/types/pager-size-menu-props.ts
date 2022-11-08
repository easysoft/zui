import {ToolbarItemProps} from '@zui/toolbar/src/types';
import {DropdownTriggerOptions} from '@zui/dropdown/src/types';
import {PagerInfo} from './pager-info';

export interface PagerSizeMenuProps extends ToolbarItemProps {
    type: 'size-menu',
    items?: number[],
    dropdown?: DropdownTriggerOptions,
    text?: string | ((info: PagerInfo) => string);
}
