import {ActionBasicProps} from '@zui/action-menu/src/types';
import {ToolbarOptions} from '@zui/toolbar/src/types';
import {PageLinkCreator} from './page-link-creator';
import {PagerInfo} from './pager-info';
import {PagerItemOptions} from './pager-item-options';

export interface PagerOptions<T extends ActionBasicProps = PagerItemOptions> extends ToolbarOptions<T>, PagerInfo {
    linkCreator?: PageLinkCreator;
}
