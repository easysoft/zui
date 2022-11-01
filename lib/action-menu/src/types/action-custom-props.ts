import type {CustomRenderProps} from '@zui/com-helpers/src/helpers/custom-render';
import type {ActionBasicProps} from './action-basic-props';

export interface ActionCustomProps extends ActionBasicProps, CustomRenderProps {
    type: 'custom',
}
