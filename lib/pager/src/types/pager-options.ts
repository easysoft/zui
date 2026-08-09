import type {ToolbarOptions} from '@zui/toolbar';
import type {PageLinkCreator} from './page-link-creator';
import type {PagerInfo} from './pager-info';

export interface PagerOptions extends ToolbarOptions, PagerInfo {
    linkCreator?: PageLinkCreator;
    useState?: boolean;
    onChange?: (data: {info: PagerInfo; event: Event}) => void;
    onChangePageInfo?: (info: PagerInfo, event: Event) => void;
}
