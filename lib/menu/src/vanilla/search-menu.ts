import {ComponentFromReact} from '@zui/core';
import {SearchMenu as MenuReact} from '../component';

import type {SearchMenuOptions} from '../types';

export class SearchMenu extends ComponentFromReact<SearchMenuOptions, MenuReact> {
    static NAME = 'SearchMenu';

    static Component = MenuReact;
}
