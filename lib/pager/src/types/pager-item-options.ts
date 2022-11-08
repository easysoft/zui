import {ToolbarItemOptions} from '@zui/toolbar/src/types';
import {PagerLinkProps} from './pager-link-props';
import {PagerInfoProps} from './pager-info-props';
import {PagerSizeMenuProps} from './pager-size-menu-props';
import {PagerNavProps} from './pager-nav-props';

export type PagerItemOptions = ToolbarItemOptions | PagerLinkProps | PagerInfoProps | PagerSizeMenuProps | PagerNavProps;
