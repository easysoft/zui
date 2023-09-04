import {ComponentFromReact} from '@zui/core';
import {Toolbar as ToolbarReact} from '../component';
import type {ToolbarOptions} from '../types';

export class Toolbar<T extends ToolbarOptions = ToolbarOptions> extends ComponentFromReact<ToolbarOptions, ToolbarReact<T>> {
    static NAME = 'Toolbar';

    static Component = ToolbarReact;
}
