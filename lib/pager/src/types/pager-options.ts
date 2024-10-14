import type {ToolbarOptions} from '@zui/toolbar/src/types';
import type {PageLinkCreator} from './page-link-creator';
import type {PagerInfo} from './pager-info';

export interface PagerOptions extends ToolbarOptions, PagerInfo {
    linkCreator?: PageLinkCreator;
    onChange?: (data: {info: PagerInfo, event: Event}) => void;
    onGoToPage?: (data: {page: number, event: Event}) => void;
    onChangePageSize?: (data: {recPerPage: number, event: Event}) => void;
}
