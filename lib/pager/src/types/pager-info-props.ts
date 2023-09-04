import type {Item} from '@zui/list';
import type {PageName} from './page-name';
import type {PagerInfo} from './pager-info';

export interface PagerInfoProps extends Item {
    type: 'info',
    page?: PageName,
    text?: string | ((info: PagerInfo) => string);
}
