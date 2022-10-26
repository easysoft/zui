import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {ActionMenu as ActionMenuReact} from '../component/action-menu';
import type {ActionMenuOptions} from '../types/action-menu-options';
import type {ActionMenuItem} from '../types/action-menu-item';
import type {CommonActionItem} from '../types/common-action-item';

export class ActionMenu<T extends ActionMenuItem = CommonActionItem> extends ComponentFromReact<ActionMenuOptions<T>, ActionMenuReact<T>> {
    static Component = ActionMenuReact;
}
