import {ActionMenu} from '@zui/action-menu/src/component/action-menu';
import {ActionBasicProps} from '@zui/action-menu/src/types/action-basic-props';
import '@zui/css-icons/src/icons/caret.css';
import {classes} from '@zui/core';
import type {NavOptions} from '../types/nav-options';
import type {NavItemOptions} from '../types/nav-item-options';
import '../style/index.css';

export class Nav<T extends ActionBasicProps = NavItemOptions> extends ActionMenu<T, NavOptions<T>> {
    static NAME = 'nav';

    beforeRender() {
        const options = super.beforeRender();
        options.className = classes(options.className, options.type ? `nav-${options.type}` : '', {
            'nav-stacked': options.stacked,
        });
        return options;
    }
}
