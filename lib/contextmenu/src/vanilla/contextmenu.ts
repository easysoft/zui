import {Dropdown} from '@zui/dropdown';

import type {ContextMenuOptions} from '../types/contextmenu-options';
import type {ComputePositionConfig, ReferenceElement} from '@floating-ui/dom';

export class ContextMenu extends Dropdown<ContextMenuOptions> {
    static NAME = 'ContextMenu';

    static DEFAULT: Partial<ContextMenuOptions> = {
        ...Dropdown.DEFAULT,
        name: 'contextmenu',
        trigger: 'contextmenu',
    };

    protected _getLayoutOptions(): [trigger: ReferenceElement, element: HTMLElement, options: Partial<ComputePositionConfig>] {
        const options = super._getLayoutOptions();
        if (!this.options.element) {
            options[0] = {
                getBoundingClientRect: this._getClickBounding,
            };
        }
        return options;
    }
}

ContextMenu.register();
