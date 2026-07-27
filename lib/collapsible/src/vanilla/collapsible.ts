import {ComponentFromReact} from '@zui/core';
import {Collapsible as CollapsibleReact} from '../components';
import type {CollapsibleProps} from '../types';

export class Collapsible extends ComponentFromReact<CollapsibleProps, CollapsibleReact> {
    static NAME = 'Collapsible';

    static Component = CollapsibleReact;

    static replace = true;
}
