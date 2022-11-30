import {ToolbarItemProps} from '@zui/toolbar/src/types';
import {PagerInfo} from './pager-info';
import {PageName} from './page-name';

export interface PagerGotoProps extends ToolbarItemProps {
    type: 'goto',
    page?: PageName;
    value?: number;
    text?: string | ((info: PagerInfo) => string);
}
