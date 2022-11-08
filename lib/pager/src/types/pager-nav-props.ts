import {ToolbarItemProps} from '@zui/toolbar/src/types';
import {PagerInfo} from './pager-info';

export interface PagerNavProps extends ToolbarItemProps {
    type: 'nav',
    count?: number,
    format?: string | ((info: PagerInfo) => string);
}
