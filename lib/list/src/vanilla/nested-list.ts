import {ComponentFromReact} from '@zui/core';
import {NestedList as NestedListReact} from '../component';
import type {NestedListProps} from '../types';

export class NestedList extends ComponentFromReact<NestedListProps, NestedListReact> {
    static NAME = 'NestedList';

    static Component = NestedListReact;
}
