import {ActionItemProps} from '@zui/action-menu/src/types/action-item-props';
import {BtnGroupOptions} from '@zui/btn-group/src/types';

export interface ToolbarBtnGroupProps extends ActionItemProps, BtnGroupOptions {
    type: 'btn-group',
}
