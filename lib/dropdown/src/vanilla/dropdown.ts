import {$, h} from '@zui/core';
import {Popover} from '@zui/popover';
import {DropdownMenu} from '../component';

import type {ComponentType} from 'preact';
import type {PopoverPanelOptions} from '@zui/popover';
import type {DropdownOptions, DropdownMenuOptions} from '../types';

const TOGGLE_SELECTOR = '[data-toggle="dropdown"]';

export class Dropdown<O extends DropdownOptions = DropdownOptions> extends Popover<O> {
    static NAME = 'Dropdown';

    static DEFAULT: Partial<DropdownOptions> = {
        ...Popover.DEFAULT,
        name: 'dropdown',
        placement: 'bottom-start',
        arrow: false,
        closeBtn: false,
        animation: 'fade',
        limitSize: true,
    };

    protected _getMenuOptions(): DropdownMenuOptions {
        const {items, placement, menu, tree, onClickItem, relativeTarget = this._triggerElement} = this.options;
        return {
            items,
            placement,
            tree,
            onClickItem,
            nestedToggle: '.item',
            accordion: true,
            relativeTarget: {target: relativeTarget, event: this.options.triggerEvent, dropdown: this},
            popup: true,
            ...menu,
        };
    }

    protected _getRenderOptions(): PopoverPanelOptions {
        const options = super._getRenderOptions();
        if (this._dynamic) {
            return {
                ...options,
                contentClass: '',
                popup: false,
                content: h(DropdownMenu as unknown as ComponentType<DropdownMenuOptions>, this._getMenuOptions()),
            };
        }
        return options;
    }

    protected _onClickDoc = (event: MouseEvent) => {
        const $target = $(event.target as HTMLElement);
        if (!$target.closest('.not-hide-menu,.form-control,input,label,.nested-toggle-icon').length && (this._virtual || !$target.closest(this._triggerElement as HTMLElement).length)) {
            this.hide();
        }
    };
}


$(document).on(`click${Dropdown.NAMESPACE} mouseenter${Dropdown.NAMESPACE}`, TOGGLE_SELECTOR, (event: MouseEvent) => {
    const $toggleBtn = $(event.currentTarget as HTMLElement);
    if ($toggleBtn.length && !$toggleBtn.data(Dropdown.KEY)) {
        const data = $toggleBtn.data() || {};
        const trigger = data.trigger || 'click';
        const eventForTrigger = event.type === 'mouseover' ? 'hover' : 'click';
        if (eventForTrigger !== trigger) {
            return;
        }
        const options: DropdownOptions = {
            ...data,
            show: true,
            triggerEvent: event,
        };
        if (!options.target && $toggleBtn.is('a')) {
            const href = $toggleBtn.attr('href') as string;
            if (href && '#.'.includes(href[0])) {
                options.target = href;
            }
        }
        if (!options.target && !options.items && !options.menu) {
            options.target = $toggleBtn.next('.dropdown-menu');
        }
        Dropdown.ensure($toggleBtn, options);
        event.preventDefault();
    }
});
