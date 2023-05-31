import type {CustomRenderProps} from '@zui/core';
import type {ActionBasicProps} from './action-basic-props';

export interface ActionCustomProps extends ActionBasicProps, CustomRenderProps {
    type: 'custom',
}
