import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {VirtualGrid as VirtualGridReact} from '../component';
import {VirtualGridOptions} from '../types';

export class VirtualGrid extends ComponentFromReact<VirtualGridOptions, VirtualGridReact> {
    static NAME = 'virtualgrid';

    static Component = VirtualGridReact;
}
