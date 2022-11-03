import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {ActionMenu as ActionMenuReact} from '../component/action-menu';
import type {ActionMenuOptions, ActionBasicProps, ActionMenuItemOptions} from '../types';

export class ActionMenu<T extends ActionBasicProps = ActionMenuItemOptions> extends ComponentFromReact<ActionMenuOptions<T>, ActionMenuReact<T>> {
    static Component = ActionMenuReact;
}
