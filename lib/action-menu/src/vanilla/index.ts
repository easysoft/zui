import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {ActionMenu as ActionMenuReact} from '../component/action-menu';
import {ActionMenuNested as ActionMenuNestedReact} from '../component/action-menu-nested';
import type {ActionMenuOptions, ActionBasicProps, ActionMenuItemOptions, ActionMenuNestedItemOptions, ActionMenuNestedOptions} from '../types';

export class ActionMenu<T extends ActionBasicProps = ActionMenuItemOptions> extends ComponentFromReact<ActionMenuOptions<T>, ActionMenuReact<T>> {
    static Component = ActionMenuReact;
}

export class ActionMenuNested<T extends ActionBasicProps = ActionMenuNestedItemOptions> extends ComponentFromReact<ActionMenuNestedOptions<T>, ActionMenuNestedReact<T>> {
    static Component = ActionMenuNestedReact;
}
