import {ComponentFromReact} from '@zui/core';
import {ActionMenu as ActionMenuReact} from '../component/action-menu';
import type {ActionMenuOptions, ActionBasicProps, ActionMenuItemOptions} from '../types';

export class ActionMenu<T extends ActionBasicProps = ActionMenuItemOptions> extends ComponentFromReact<ActionMenuOptions<T>, ActionMenuReact<T>> {
    static NAME = 'ActionMenu';

    static Component = ActionMenuReact;
}
