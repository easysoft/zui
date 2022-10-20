import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {Menu as MenuReact, MenuProps} from '../component/menu';

export class Menu extends ComponentFromReact<MenuProps, MenuReact> {
    static Component = MenuReact;

    toggleSubMenu(key: string | number, toggle?: boolean): void {
        return this.$?.toggleSubMenu(key, toggle);
    }

    clearAllSubMenu() {
        return this.$?.clearAllSubMenu();
    }

    isSubMenuShow(key: string | number) {
        return this.$?.isSubMenuShow(key);
    }
}
