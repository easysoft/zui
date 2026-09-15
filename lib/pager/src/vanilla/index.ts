import {ComponentFromReact} from '@zui/core';
import {Pager as PagerReact} from '../component/pager';

import type {PagerOptions} from '../types';

export class Pager<T extends PagerOptions = PagerOptions> extends ComponentFromReact<T> {
    static NAME = 'Pager';

    static Component = PagerReact;
}

Pager.register();
