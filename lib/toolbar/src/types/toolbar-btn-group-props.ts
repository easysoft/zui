import {ActionBasicProps} from '@zui/action-menu/src/types/';
import {BtnGroupOptions} from '@zui/btn-group/src/types';

export interface ToolbarBtnGroupProps extends ActionBasicProps, BtnGroupOptions {
    type: 'btn-group',
    btnType?: string,
}
