import {ComponentFromReact} from '@zui/core';
import {List as ListReact} from '../component';
import type {ListProps} from '../types';

export class List extends ComponentFromReact<ListProps, ListReact> {
    static NAME = 'List';

    static Component = ListReact;

    static replace = ListReact.TAG;
}
