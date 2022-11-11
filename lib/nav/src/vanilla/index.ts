import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import type {ActionBasicProps} from '@zui/action-menu/src/types/action-basic-props';
import {Nav as NavReact} from '../component/nav';
import {NavItemOptions} from '../types/nav-item-options';
import {NavOptions} from '../types/nav-options';

export class Nav<T extends ActionBasicProps = NavItemOptions> extends ComponentFromReact<NavOptions<T>, NavReact<T>> {
    static NAME = 'nav';

    static Component = NavReact;
}
