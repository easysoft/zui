import type {Item} from './item';

export interface ListSpaceProps extends Item {
    type: 'space',
    space?: number,
    flex?: number | 'auto' | 'none'
}
