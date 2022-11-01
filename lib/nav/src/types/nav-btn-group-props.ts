import type {ActionBasicProps} from '@zui/action-menu/src/types/action-basic-props';
import type {BtnGroupOptions} from '@zui/btn-group/src/types/btn-group-options';

export interface NavBtnGroupProps extends BtnGroupOptions, ActionBasicProps {
    type: 'btn-group',
}
