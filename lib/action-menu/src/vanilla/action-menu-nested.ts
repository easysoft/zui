import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {ActionMenuNested as ActionMenuNestedReact} from '../component/action-menu-nested';
import type {ActionBasicProps, ActionMenuNestedItemOptions, ActionMenuNestedOptions} from '../types';

export class ActionMenuNested<T extends ActionBasicProps = ActionMenuNestedItemOptions> extends ComponentFromReact<ActionMenuNestedOptions<T>, ActionMenuNestedReact<T>> {
    static Component = ActionMenuNestedReact;
}
