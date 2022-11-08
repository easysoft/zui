import {PagerInfo} from './pager-info';

export type PageLinkCreator = string | ((info: PagerInfo) => string);
