import type {Item} from '@zui/common-list/src/types';
import type {ButtonProps} from '@zui/button';
import type {PagerInfo} from './pager-info';
import type {PageName} from './page-name';

export interface PagerGotoProps extends Omit<Item, 'key'>, Omit<ButtonProps, 'type'> {
    type: 'goto';
    page?: PageName;
    text?: string | ((info: PagerInfo) => string);
    onChange?: (data: {info: PagerInfo; event: Event}) => boolean;
}
