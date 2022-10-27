import type {ActionBasicProps} from './action-basic-props';

export interface ActionSpaceProps extends ActionBasicProps {
    type: 'space',
    space?: number | [leading: number, trailing: number],
    flex?: number | 'auto' | 'none'
}
