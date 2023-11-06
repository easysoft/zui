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
    };

    protected _getMenuOptions(): DropdownMenuOptions {
        const {items, placement, menu, onClickItem, relativeTarget = this._triggerElement} = this.options;
        return {
            items,
            placement: placement,
            onClickItem: onClickItem,
            relativeTarget: {target: relativeTarget, event: this.options.triggerEvent, dropdown: this},
            ...menu,
        };
    }

    protected _getRenderOptions(): PopoverPanelOptions {
        return {
            ...super._getRenderOptions(),
            contentClass: '',
            popup: false,
            content: h(DropdownMenu as unknown as ComponentType<DropdownMenuOptions>, this._getMenuOptions()),
        };
    }

    protected _onClickDoc = (event: MouseEvent) => {
        if (!$(event.target as HTMLElement).closest('.not-hide-menu,.form-control,input,label').length) {
            this.hide();
        }
    };
}


$(document).on(`click${Dropdown.NAMESPACE} mouseenter${Dropdown.NAMESPACE}`, TOGGLE_SELECTOR, (event: MouseEvent) => {
    const $toggleBtn = $(event.currentTarget as HTMLElement);
    if ($toggleBtn.length && !$toggleBtn.data(Dropdown.KEY)) {
        const trigger = $toggleBtn.data('trigger') || 'click';
        const eventForTrigger = event.type === 'mouseover' ? 'hover' : 'click';
        if (eventForTrigger !== trigger) {
            return;
        }
        const options: DropdownOptions = {
            ...$toggleBtn.data(),
            show: true,
            triggerEvent: event,
        };
        if (!options.target && $toggleBtn.is('a')) {
            const href = $toggleBtn.attr('href') as string;
            if (href && '#0'.includes(href[0])) {
                options.target = href;
            }
        }
        if (!options.target && !options.items && !options.menu) {
            options.target = $toggleBtn.next('.dropdown-menu');
        }
        (Dropdown as typeof Popover).ensure($toggleBtn, options);
        event.preventDefault();
    }
});
