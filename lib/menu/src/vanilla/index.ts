import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {Menu as MenuReact} from '../component/menu';
import {MenuOptions, MenuItemOptions} from '../types';

export class Menu extends ComponentFromReact<MenuOptions, MenuReact<MenuItemOptions>> {
    static Component = MenuReact;
}
