import type {ComponentChildren} from 'preact';
import type {ActionBasicProps} from './action-basic-props';

export interface ActionHeadingProps extends ActionBasicProps {
    type: 'heading',
    text?: ComponentChildren;
}
