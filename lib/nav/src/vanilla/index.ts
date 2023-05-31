import {ComponentFromReact} from '@zui/core';
import type {ActionBasicProps} from '@zui/action-menu/src/types/action-basic-props';
import {Nav as NavReact} from '../component/nav';
import {NavItemOptions} from '../types/nav-item-options';
import {NavOptions} from '../types/nav-options';


export class Nav<O extends ActionBasicProps = NavItemOptions> extends ComponentFromReact<NavOptions<O>, NavReact<O>> {
    static NAME = 'Nav';

    static Component = NavReact;
}
