import {ComponentFromReact} from '@zui/core';
import {Nav as NavReact} from '../component';
import type {NavOptions} from '../types';

export class Nav<T extends NavOptions = NavOptions> extends ComponentFromReact<NavOptions, NavReact<T>> {
    static NAME = 'Nav';

    static Component = NavReact;
}
