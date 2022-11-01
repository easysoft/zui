import {ActionBasicProps} from '@zui/action-menu/src/types/action-basic-props';
import {ActionMenuOptions} from '@zui/action-menu/src/types/action-menu-options';
import {NavItemOptions} from './nav-item-options';

export interface NavOptions<T extends ActionBasicProps = NavItemOptions> extends ActionMenuOptions<T> {
    type?: 'primary' | 'secondary' | 'pills' | 'tabs',
    stacked?: boolean;
}
