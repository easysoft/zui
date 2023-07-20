import {ComponentFromReact} from '@zui/core';
import {PopoverPanel as PopoverPanelReact} from '../component/popover-panel';
import {PopoverPanelOptions} from '../types';

export class PopoverPanel extends ComponentFromReact<PopoverPanelOptions> {
    static NAME = 'PopoverPanel';

    static Component = PopoverPanelReact;
}
