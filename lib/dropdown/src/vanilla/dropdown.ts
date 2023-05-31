import '@zui/css-icons/src/icons/arrow.css';
import {$} from '@zui/core';
import {ContextMenu} from '@zui/contextmenu/src/vanilla/contextmenu';
import {ContextMenuTrigger} from '@zui/contextmenu/src/types/contextmenu-trigger';
import type {DropdownEvents} from '../types/dropdown-events';
import type {DropdownOptions} from '../types/dropdown-options';
import '../css/dropdown.css';
import {offset, arrow} from '@floating-ui/dom';

const MENU_SELECTOR = '[data-toggle="dropdown"]';

export class Dropdown extends ContextMenu<DropdownOptions, DropdownEvents> {
    static MENU_CLASS = 'dropdown-menu';

    static NAME = 'Dropdown';

    static DEFAULT = {
        ...ContextMenu.DEFAULT,
        strategy: 'fixed',
        trigger: 'click',
    } as Partial<DropdownOptions>;

    #hoverEventsBind = false;

    #hideTimer = 0;

    get isHover() {
        return this.options.trigger === 'hover';
    }

    get elementShowClass() {
        return `with-${this.constructor.NAME}-show`;
    }

    show(trigger?: ContextMenuTrigger, options?: {event?: MouseEvent, clearOthers?: boolean}) {
        if (options?.clearOthers !== false) {
            Dropdown.clear({event: options?.event, exclude: [this.element]});
        }

        const result = super.show(trigger);
        if (result) {
            if (!this.#hoverEventsBind && this.isHover) {
                this.#bindHoverEvents();
            }
            this.$element.addClass(this.elementShowClass);
        }
        return result;
    }

    hide() {
        const result = super.hide();
        if (result) {
            this.$element.removeClass(this.elementShowClass);
        }
        return result;
    }

    toggle(event?: MouseEvent, options?: {clearOthers?: boolean}) {
        return this.isShown ? this.hide() : this.show(event, {event, ...options});
    }

    hideLater = () => {
        this.#cancelHide();
        this.#hideTimer = window.setTimeout(this.hide.bind(this), 100);
    };

    destroy() {
        if (this.#hoverEventsBind) {
            $(this.menu).off(this.constructor.NAMESPACE);
        }
        super.destroy();
    }

    protected getArrowSize() {
        const {arrow: arrowOption} = this.options;
        if (!arrowOption) {
            return 0;
        }
        return typeof arrowOption === 'number' ? arrowOption : 8;
    }

    protected getPopperOptions() {
        const options = super.getPopperOptions();
        const arrowSize = this.getArrowSize();
        if (arrowSize && this.arrowEl) {
            options.middleware?.push(offset(arrowSize));
            options.middleware?.push(arrow({element: this.arrowEl}));
        }
        return options;
    }

    ensureMenu() {
        const menu = super.ensureMenu();
        if (this.options.arrow) {
            const arrowSize = this.getArrowSize();
            const arrowEl = $('<div />').css({
                position: 'absolute',
                width: `${arrowSize}px`,
                height: `${arrowSize}px`,
                transform: 'rotate(45deg)',
            });
            this.arrowEl = arrowEl[0] as HTMLDivElement;
            $(menu).append(arrowEl);
        }
        return menu;
    }

    protected getMenuOptions() {
        const options = super.getMenuOptions();
        if (options && this.options.arrow) {
            const {afterRender} = options;
            options.afterRender = (...args) => {
                if (this.arrowEl) {
                    $(this.menu).find('.menu').append(this.arrowEl);
                }
                afterRender?.(...args);
            };
        }
        return options;
    }

    #cancelHide = () => {
        clearTimeout(this.#hideTimer);
        this.#hideTimer = 0;
    };

    #bindHoverEvents() {
        $(this.menu).on(`mouseenter${this.constructor.NAMESPACE}`, this.#cancelHide)
            .on(`mouseleave${this.constructor.NAMESPACE}`, this.hideLater);
        this.on('mouseleave', this.hideLater);
        this.#hoverEventsBind = true;
    }
}

$(document).on('click', function (event) {
    const $toggleBtn = $(event.target as HTMLElement).closest(MENU_SELECTOR).not(':disabled,.disabled');
    if ($toggleBtn.length) {
        const dropdown = Dropdown.ensure($toggleBtn);
        if (dropdown.options.trigger === 'click') {
            dropdown.toggle();
        }
    } else {
        Dropdown.clear({event});
    }
}).on('mouseover', function (e) {
    const toggleBtn = (e.target as HTMLElement).closest?.<HTMLElement>(MENU_SELECTOR);
    if (!toggleBtn) {
        return;
    }
    const dropdown = Dropdown.ensure(toggleBtn);
    if (dropdown.isHover) {
        dropdown.show();
    }
});

let scrollTimer = 0;
window.addEventListener('scroll', (event: Event) => {
    if (scrollTimer) {
        clearTimeout(scrollTimer);
    }
    scrollTimer = window.setTimeout(() => {
        Dropdown.clear({event});
        scrollTimer = 0;
    }, 50);
}, true);
