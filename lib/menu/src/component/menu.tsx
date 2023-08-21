import {classes} from '@zui/core';
import {ActionMenuNested} from '@zui/action-menu/src/component/action-menu-nested';
import '@zui/css-icons/src/icons/caret.css';
import '../style/index.css';

import type {ActionMenuItemOptions, ActionItemProps} from '@zui/action-menu/src/types';
import type {MenuOptions, MenuItemOptions, MenuState} from '../types';

export class Menu<T extends ActionMenuItemOptions = MenuItemOptions, O extends MenuOptions<T> = MenuOptions<T>, S extends MenuState = MenuState> extends ActionMenuNested<T, O, S> {
    static NAME = 'menu';

    get nestedTrigger() {
        return this.props.nestedTrigger || 'click';
    }

    get menuName() {
        return 'menu-nested';
    }

    beforeRender() {
        const options = super.beforeRender();
        let {hasIcons} = options;

        if (hasIcons === undefined) {
            hasIcons = options.items.some(x => (x as ActionItemProps).icon);
        }
        options.className = classes(options.className, this.menuName, {
            'has-icons': hasIcons,
            'has-nested-items': options.items.some(x => this.isNestedItem(x)),
            'popup': options.popup,
        });
        return options;
    }

    renderToggleIcon(show: boolean) {
        return <span class={`${this.name}-toggle-icon caret-${show ? 'down' : 'right'}`} />;
    }
}
