import type {Item} from '@zui/common-list';
import type {BtnGroupOptions} from '@zui/btn-group';
import type {ToolbarItemOptions} from './toolbar-item-options';

export interface ToolbarOptions<T extends Item = ToolbarItemOptions> extends BtnGroupOptions<T> {
    gap?: number | string;
}
