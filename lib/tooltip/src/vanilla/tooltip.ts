import {Popover, PopoverPanelOptions} from '@zui/popover';
import {$, classes} from '@zui/core';
import type {TooltipOptions} from '../types';

const TOGGLE_SELECTOR = '[data-toggle="tooltip"]';

export class Tooltip extends Popover<TooltipOptions> {
    static readonly NAME = 'Tooltip';

    static DEFAULT: Partial<TooltipOptions> = {
        ...Popover.DEFAULT,
        trigger: 'hover',
        delay: 500,
        closeBtn: false,
        popup: false,
        name: 'tooltip',
        animation: 'fade',
    };

    protected _getRenderOptions(): PopoverPanelOptions {
        const {type, className, title} = this.options;
        return {
            ...super._getRenderOptions(),
            className: classes('tooltip', type, className, title ? 'tooltip-has-title' : ''),
            contentClass: title ? 'tooltip-content' : '',
        };
    }
}

$(document).on(`click${Tooltip.NAMESPACE} mouseenter${Tooltip.NAMESPACE}`, TOGGLE_SELECTOR, (event: MouseEvent) => {
    const $toggleBtn = $(event.currentTarget as HTMLElement);
    if ($toggleBtn.length && !$toggleBtn.data(Tooltip.KEY)) {
        const trigger = $toggleBtn.data('trigger') || 'hover';
        const eventForTrigger = event.type === 'mouseover' ? 'hover' : 'click';
        if (eventForTrigger !== trigger) {
            return;
        }
        let title = $toggleBtn.attr('title');
        let content = $toggleBtn.dataset('content');
        if (title) {
            $toggleBtn.removeAttr('title').attr('data-origin-title', title);
        } else {
            title = $toggleBtn.dataset('title') as string;
        }
        if (!content) {
            content = title;
            title = '';
        }
        (Tooltip as typeof Popover).ensure($toggleBtn, {show: Tooltip.DEFAULT.delay || true, content: content || title, title: content ? title : undefined});
        event.preventDefault();
    }
});
