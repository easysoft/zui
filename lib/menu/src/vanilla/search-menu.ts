import {ComponentFromReact} from '@zui/core';
import {SearchMenu as MenuReact} from '../component';

import type {MenuOptions} from '../types';

export class SearchMenu extends ComponentFromReact<MenuOptions, MenuReact> {
    static NAME = 'SearchMenu';

    static Component = MenuReact;
}
