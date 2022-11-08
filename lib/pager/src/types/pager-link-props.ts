import {ToolbarItemProps} from '@zui/toolbar/src/types';
import {PageName} from './page-name';
import {PagerInfo} from './pager-info';

export interface PagerLinkProps extends ToolbarItemProps {
    type: 'link',
    page?: PageName,
    format?: string | ((info: PagerInfo) => string);
}
