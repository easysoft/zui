import type {Item} from '@zui/list';
import type {ButtonProps} from '@zui/button';
import type {PageName} from './page-name';
import type {PagerInfo} from './pager-info';

export interface PagerLinkProps extends Item, Omit<ButtonProps, 'type'> {
    type: 'link',
    page?: PageName,
    format?: string | ((info: PagerInfo) => string);
}
