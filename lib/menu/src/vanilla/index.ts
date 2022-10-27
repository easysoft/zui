import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {Menu as MenuReact} from '../component/menu';
import {MenuOptions} from '../types/menu-options';

export class Menu extends ComponentFromReact<MenuOptions, MenuReact> {
    static Component = MenuReact;
}
