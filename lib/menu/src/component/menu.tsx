import {ActionMenu} from '@zui/action-menu/src/component/action-menu';
import {MenuOptions} from '../types/menu-options';
import {MenuItemOptions} from '../types/menu-item-options';
import {MenuItemOptions} from '../types/menu-item-props';
import '@zui/css-icons/src/icons/caret.css';
import '../style/index.css';
import {ActionMenuItem} from '@zui/action-menu/src/types/action-menu-item';
import {classes} from '@zui/browser-helpers/src/classes';

export class Menu<T extends ActionMenuItem = MenuItemOptions> extends ActionMenu<T, MenuOptions<T>> {
    beforeRender() {
        const options = super.beforeRender();
        let {hasIcons} = options;

        if (hasIcons === undefined) {
            hasIcons = options.items.some(x => 'icon' in x && (x as MenuItemOptions).icon);
        }
        if (hasIcons) {
            options.className = classes(options.className, 'has-icons');
        }
        return options;
    }
}
