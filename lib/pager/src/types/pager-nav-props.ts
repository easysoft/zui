import type {Item} from '@zui/list';
import type {ButtonProps} from '@zui/button';
import type {PagerInfo} from './pager-info';

export interface PagerNavProps extends Item, Omit<ButtonProps, 'type'> {
    type: 'nav';
    count?: number;
    format?: string | ((info: PagerInfo) => string);
}
