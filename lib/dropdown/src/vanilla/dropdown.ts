import '@zui/css-icons/src/icons/caret.css';
import '../css/dropdown.css';
import {ContextMenu} from '@zui/contextmenu/src/vanilla/contextmenu';
import type {DropdownEvents} from '../types/dropdown-events';
import type {DropdownOptions} from '../types/dropdown-options';
import {ContextMenuTrigger} from '@zui/contextmenu/src/types/contextmenu-trigger';

export class Dropdown extends ContextMenu<DropdownOptions, DropdownEvents> {
    static MENU_CLASS = 'dropdown-menu';

    static MENU_SELECTOR = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)';

    static DEFAULT: Partial<DropdownOptions> = {
        placement: 'bottom-start',
        strategy: 'absolute',
        trigger: 'click',
    };

    #hoverEventsBind = false;

    #hideTimer = 0;

    get isHover(): boolean {
        return this.options.trigger === 'hover';
    }

    show(trigger?: ContextMenuTrigger | undefined): boolean {
        const result = super.show(trigger);
        if (result && !this.#hoverEventsBind && this.isHover) {
            this.#bindHoverEvents();
        }
        return result;
    }

    hideLater = () => {
        this.#cancelHide();
        this.#hideTimer = window.setTimeout(this.hide.bind(this), 300);
    };

    destroy(): void {
        if (this.#hoverEventsBind) {
            this.element.removeEventListener('mouseleave', this.hideLater);
            this.menu.removeEventListener('mouseenter', this.#cancelHide);
            this.menu.removeEventListener('mouseleave', this.hideLater);
        }
        super.destroy();
    }

    #cancelHide = () => {
        clearTimeout(this.#hideTimer);
        this.#hideTimer = 0;
    };

    #bindHoverEvents() {
        const {menu} = this;
        menu.addEventListener('mouseenter', this.#cancelHide);
        menu.addEventListener('mouseleave', this.hideLater);
        this.element.addEventListener('mouseleave', this.hideLater);
        this.#hoverEventsBind = true;
    }
}

document.addEventListener('click', function (e) {
    const element = e.target as HTMLElement;
    const toggleBtn = element.closest<HTMLElement>(Dropdown.MENU_SELECTOR);
    if (toggleBtn) {
        Dropdown.ensure(toggleBtn).toggle();
    } else {
        Dropdown.clear(e);
    }
});

document.addEventListener('mouseover', function (e) {
    const element = e.target as HTMLElement;
    const toggleBtn = typeof element.closest === 'function' ? element.closest<HTMLElement>(Dropdown.MENU_SELECTOR) : null;
    if (!toggleBtn) {
        return;
    }
    const dropdown = Dropdown.ensure(toggleBtn);
    if (dropdown.isHover) {
        dropdown.show();
    }
});
