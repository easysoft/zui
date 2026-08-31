import {ComponentFromReact} from '@zui/core';
import {VirtualGrid as VirtualGridReact} from '../component';
import type {VirtualGridOptions} from '../types';

export class VirtualGrid extends ComponentFromReact<VirtualGridOptions, VirtualGridReact> {
    static NAME = 'VirtualGrid';

    static Component = VirtualGridReact;
}

VirtualGrid.register();
