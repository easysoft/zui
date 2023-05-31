import {ComponentFromReact} from '@zui/core';
import {ActionMenuNested as ActionMenuNestedReact} from '../component/action-menu-nested';
import type {ActionBasicProps, ActionMenuNestedItemOptions, ActionMenuNestedOptions} from '../types';

export class ActionMenuNested<T extends ActionBasicProps = ActionMenuNestedItemOptions> extends ComponentFromReact<ActionMenuNestedOptions<T>, ActionMenuNestedReact<T>> {
    static NAME = 'ActionMenuNested';

    static Component = ActionMenuNestedReact;
}
