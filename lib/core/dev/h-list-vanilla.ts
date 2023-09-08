import {ComponentFromReact} from '../src/react/component-from-react';
import {HList as HListReact} from '../src/react/components';
import type {HListProps} from '../src/react/types';

export class HListVanilla extends ComponentFromReact<HListProps, HListReact> {
    static NAME = 'HList';

    static Component = HListReact;
}
