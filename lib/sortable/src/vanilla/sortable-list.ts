import {ComponentFromReact} from '@zui/core';
import {SortableList as SortableListReact} from '../components';
import type {SortableListProps} from '../types';

export class SortableList extends ComponentFromReact<SortableListProps, SortableListReact> {
    static NAME = 'SortableList';

    static Component = SortableListReact;

    static replace = SortableListReact.TAG;
}
