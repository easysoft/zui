import '@zui/css-icons/src/icons/arrow.css';
import type {Options as PopperOptions} from '@popperjs/core/lib/popper-lite';
import arrow from '@popperjs/core/lib/modifiers/arrow';
import offset from '@popperjs/core/lib/modifiers/offset';
import {ContextMenu} from '@zui/contextmenu/src/vanilla/contextmenu';
import {ContextMenuTrigger} from '@zui/contextmenu/src/types/contextmenu-trigger';
import type {DropdownEvents} from '../types/dropdown-events';
import type {DropdownOptions} from '../types/dropdown-options';
import '../css/dropdown.css';

export class Dropdown extends ContextMenu<DropdownOptions, DropdownEvents> {
    static NAME = 'dropdown';

    static MENU_CLASS = 'dropdown-menu';

    static MENU_SELECTOR = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)';

    static DEFAULT = {
        ...ContextMenu.DEFAULT,
        strategy: 'absolute',
        trigger: 'click',
    } as Partial<DropdownOptions>;

    #hoverEventsBind = false;

    #hideTimer = 0;

    get isHover(): boolean {
        return this.options.trigger === 'hover';
    }

    get elementShowClass() {
        return `with-${(this.constructor as typeof Dropdown).NAME}-show`;
    }

    show(trigger?: ContextMenuTrigger, options?: {event?: MouseEvent, clearOthers?: boolean}): boolean {
        if (options?.clearOthers !== false) {
            Dropdown.clear({event: options?.event, exclude: [this.element]});
        }

        const result = super.show(trigger);
        if (result) {
            if (!this.#hoverEventsBind && this.isHover) {
                this.#bindHoverEvents();
            }
            this.element.classList.add(this.elementShowClass);
        }
        return result;
    }

    hide(): boolean {
        const result = super.hide();
        if (result) {
            this.element.classList.remove(this.elementShowClass);
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

    destroy(): void {
        if (this.#hoverEventsBind) {
            this.element.removeEventListener('mouseleave', this.hideLater);
            this.menu.removeEventListener('mouseenter', this.#cancelHide);
            this.menu.removeEventListener('mouseleave', this.hideLater);
        }
        super.destroy();
    }

    _getArrowSize() {
        const {arrow: arrowOption} = this.options;
        if (!arrowOption) {
            return 0;
        }
        return typeof arrowOption === 'number' ? arrowOption : 5;
    }

    _getPopperOptions(): PopperOptions {
        const options = super._getPopperOptions();
        const arrowSize = this._getArrowSize();
        if (arrowSize) {
            options.modifiers.push({...arrow, options: {
                padding: arrowSize,
                element: '.arrow',
            }}, {
                ...offset, options: {
                    offset: [0, arrowSize + (this.options.offset ?? 0)],
                },
            }, {
                name: 'dropdown',
                enabled: true,
                phase: 'beforeWrite',
                fn: ({state}) => {
                    const placement = state.placement?.split('-').shift() || '';
                    this.menu.querySelector('.arrow')?.setAttribute('class', `arrow arrow-${placement}`);
                    this.element.setAttribute('data-dropdown-placement', placement);
                },
            });
        }
        return options;
    }

    _ensureMenu(): HTMLElement {
        const menu = super._ensureMenu();
        if (this.options.arrow) {
            const div = document.createElement('div');
            div.classList.add('arrow');
            div.style.setProperty('--arrow-size', `${this._getArrowSize()}px`);
            menu.prepend(div);
        }
        return menu;
    }

    _getMenuOptions() {
        const options = super._getMenuOptions();
        if (options && this.options.arrow) {
            const {afterRender} = options;
            options.afterRender = (...args) => {
                const arrowElement = this.menu.querySelector('.arrow');
                if (arrowElement) {
                    this.menu.querySelector('.menu')?.appendChild(arrowElement);
                    this.popper.update();
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
        const {menu} = this;
        menu.addEventListener('mouseenter', this.#cancelHide);
        menu.addEventListener('mouseleave', this.hideLater);
        this.element.addEventListener('mouseleave', this.hideLater);
        this.#hoverEventsBind = true;
    }
}

document.addEventListener('click', function (event) {
    const element = event.target as HTMLElement;
    const toggleBtn = element.closest<HTMLElement>(Dropdown.MENU_SELECTOR);
    if (toggleBtn) {
        const dropdown = Dropdown.ensure(toggleBtn);
        if (dropdown.options.trigger === 'click') {
            dropdown.toggle();
        }
    } else {
        Dropdown.clear({event});
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

const handleScroll = (event: Event) => {
    const element = document.getElementsByClassName('with-dropdown-show')[0];
    if (!element) {
        return;
    }
    const toggleBtn = typeof element.closest === 'function' ? element.closest<HTMLElement>(Dropdown.MENU_SELECTOR) : null;
    if (!toggleBtn || !(event.target as HTMLElement).contains(toggleBtn)) {
        return;
    }
    Dropdown.clear({event});
};

window.addEventListener('scroll', handleScroll, true);
