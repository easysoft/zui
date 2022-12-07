import {ToolbarItemProps} from '@zui/toolbar/src/types';
import {PagerInfo} from './pager-info';
import {PageName} from './page-name';

export interface PagerGotoProps extends ToolbarItemProps {
    type: 'goto',
    page?: PageName;
    text?: string | ((info: PagerInfo) => string);
    onChange?: (data: {info: PagerInfo, event: Event}) => boolean;
}
