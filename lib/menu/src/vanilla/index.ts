import {VanillaComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {Menu as MenuReact, MenuProps} from '../component/menu';

export class Menu extends VanillaComponentBase<MenuProps> {
    Component = MenuReact;
}
