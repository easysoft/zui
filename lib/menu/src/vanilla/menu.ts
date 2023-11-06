import {ComponentFromReact} from '@zui/core';
import {Menu as MenuReact} from '../component';

import type {MenuOptions} from '../types';

export class Menu extends ComponentFromReact<MenuOptions, MenuReact<MenuOptions>> {
    static NAME = 'Menu';

    static Component = MenuReact;

    static replace = MenuReact.TAG;
}
