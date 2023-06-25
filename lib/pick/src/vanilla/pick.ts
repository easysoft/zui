import {ComponentFromReact} from '@zui/core';
import {Pick as PickReact} from '../components';
import {PickOptions, PickState} from '../types';

export class Pick<S extends PickState = PickState, O extends PickOptions<S> = PickOptions<S>> extends ComponentFromReact<O, PickReact<S, O>> {
    static NAME = 'Pick';

    static Component = PickReact;
}
