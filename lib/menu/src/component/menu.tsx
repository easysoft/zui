import {ActionMenu} from '@zui/action-menu/src/component/action-menu';
import {MenuOptions} from '../types/menu-options';
import {MenuItemOptions} from '../types/menu-item-options';
import '@zui/css-icons/src/icons/caret.css';
import '../style/index.css';
import {ActionMenuItemOptions} from '@zui/action-menu/src/types/action-menu-item-options';
import {ActionItemProps} from '@zui/action-menu/src/types/action-item-props';
import {classes} from '@zui/browser-helpers/src/classes';

export class Menu<T extends ActionMenuItemOptions = MenuItemOptions> extends ActionMenu<T, MenuOptions<T>> {
    beforeRender() {
        const options = super.beforeRender();
        let {hasIcons} = options;

        if (hasIcons === undefined) {
            hasIcons = options.items.some(x => (x as ActionItemProps).icon);
        }
        if (hasIcons) {
            options.className = classes(options.className, 'has-icons');
        }
        return options;
    }
}
