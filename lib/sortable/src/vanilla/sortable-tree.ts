import {ComponentFromReact} from '@zui/core';
import {SortableTree as SortableTreeReact} from '../components';
import type {SortableTreeProps} from '../types';

export class SortableTree extends ComponentFromReact<SortableTreeProps, SortableTreeReact> {
    static NAME = 'SortableTree';

    static Component = SortableTreeReact;

    static replace = SortableTreeReact.TAG;
}
