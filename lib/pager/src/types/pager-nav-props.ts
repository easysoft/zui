import type {Item} from '@zui/common-list';
import type {ButtonProps} from '@zui/button';
import type {PagerInfo} from './pager-info';

export interface PagerNavProps extends Omit<Item, 'key'>, Omit<ButtonProps, 'type'> {
    type: 'nav';
    count?: number;
    format?: string | ((info: PagerInfo) => string);
}
