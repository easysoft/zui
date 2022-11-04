import {ActionBasicProps, ActionMenuOptions} from '@zui/action-menu/src/types';
import {ToolbarItemOptions} from './toolbar-item-options';

export interface ToolbarOptions<T extends ActionBasicProps = ToolbarItemOptions> extends ActionMenuOptions<T> {
    wrap?: boolean,
    gap?: number | string,
}
