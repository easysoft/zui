import {ComponentFromReact} from '@zui/core';
import {Menu as MenuReact} from '../component/menu';
import {MenuOptions, MenuItemOptions} from '../types';

export class Menu extends ComponentFromReact<MenuOptions, MenuReact<MenuItemOptions>> {
    static NAME = 'Menu';

    static Component = MenuReact;
}
