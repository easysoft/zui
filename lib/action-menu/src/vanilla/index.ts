import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {ActionMenu as ActionMenuReact} from '../component/action-menu';
import type {ActionMenuOptions} from '../types/action-menu-options';
import type {ActionBasicProps} from '../types/action-basic-props';
import type {ActionMenuItemOptions} from '../types/action-menu-item-options';

export class ActionMenu<T extends ActionBasicProps = ActionMenuItemOptions> extends ComponentFromReact<ActionMenuOptions<T>, ActionMenuReact<T>> {
    static Component = ActionMenuReact;
}
