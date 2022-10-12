import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {Menu as MenuReact, MenuProps} from '../component/menu';

export class Menu extends ComponentFromReact<MenuProps, MenuReact> {
    static Component = MenuReact;
}
