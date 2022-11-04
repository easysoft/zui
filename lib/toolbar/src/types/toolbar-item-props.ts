import {ActionItemProps} from '@zui/action-menu/src/types/action-item-props';
import {ButtonProps} from '@zui/button/src/types';

export interface ToolbarItemProps extends ActionItemProps, ButtonProps {
    btnType?: string;
}
