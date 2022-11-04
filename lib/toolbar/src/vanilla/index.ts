import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import type {ActionBasicProps} from '@zui/action-menu/src/types/action-basic-props';
import {Toolbar as ToolbarReact} from '../component/toolbar';
import {ToolbarOptions, ToolbarItemOptions} from '../types';

export class Toolbar<T extends ActionBasicProps = ToolbarItemOptions> extends ComponentFromReact<ToolbarOptions<T>, ToolbarReact<T>> {
    static Component = ToolbarReact;
}
