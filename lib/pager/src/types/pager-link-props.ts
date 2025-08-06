import type {Item} from '@zui/common-list';
import type {ButtonProps} from '@zui/button';
import type {PageName} from './page-name';
import type {PagerInfo} from './pager-info';

export interface PagerLinkProps extends Omit<Item, 'key'>, Omit<ButtonProps, 'type'> {
    type: 'link';
    page?: PageName;
    format?: string | ((info: PagerInfo) => string);
}
