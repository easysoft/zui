import {ActionBasicProps} from '@zui/action-menu/src/types';
import {PageName} from './page-name';
import {PagerInfo} from './pager-info';

export interface PagerInfoProps extends ActionBasicProps {
    type: 'info',
    page?: PageName,
    text?: string | ((info: PagerInfo) => string);
}
