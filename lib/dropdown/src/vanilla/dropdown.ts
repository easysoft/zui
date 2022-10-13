import {createPopper, Instance as PopperInstance} from '@popperjs/core/lib/popper-lite';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import flip from '@popperjs/core/lib/modifiers/flip';

import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {isDisabled} from '@zui/com-helpers/src/helpers/is-disabled';
import {isRightBtn} from '@zui/com-helpers/src/helpers/mouse-event';
import '@zui/css-icons/src/icons/caret.css';
import '../css/dropdown.css';

export type DropdownOptions = {
    placement: DropdownPlacement;
    strategy: DropdownPositionStrategy;
    preventOverflow: boolean | {boundary: string};
    offset: [number, number] | (() => [number, number]);
    flip: boolean;
};

export type DropdownEvents = {
    show: CustomEvent<Dropdown>,
    shown: CustomEvent<Dropdown>,
    hide: CustomEvent<Dropdown>,
    hidden: CustomEvent<Dropdown>,
};

export type DropdownPositionStrategy = 'absolute' | 'fixed';

export type DropdownPlacement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';

const DROPDOWN_SELECTOR = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)';
const DROPDOWN_CLASS_SHOW = 'show';
const DROPDOWN_CLASS_MENU = 'dropdown-menu';

export class Dropdown extends ComponentBase<DropdownOptions, DropdownEvents> {
    static NAME = 'dropdown';

    static DEFAULT = {
        placement: 'bottom-start',
        strategy: 'absolute',
    };

    #menu: HTMLElement;

    #popper?: PopperInstance;

    get isShown() {
        return this.menu.classList.contains(DROPDOWN_CLASS_SHOW);
    }

    get menu() {
        if (!this.#menu) {
            const {element} = this;
            let menu: HTMLElement | null | undefined;
            const target = element.getAttribute('href') ?? element.dataset.target;
            if (target?.[0] === '#') {
                menu = document.querySelector<HTMLElement>(target);
            }
            if (!menu) {
                const nextElement = element.nextElementSibling;
                if (nextElement?.classList.contains(DROPDOWN_CLASS_MENU)) {
                    menu = nextElement as HTMLElement;
                } else {
                    menu = element.parentNode?.querySelector(`.${DROPDOWN_CLASS_MENU}`);
                }
            }
            if (menu) {
                this.#menu = menu;
            } else {
                throw new Error('Dropdown: Cannot find menu element');
            }
        }
        return this.#menu;
    }

    get popper() {
        if (!this.#popper) {
            this.#popper = createPopper(this.element, this.menu, {
                modifiers: [preventOverflow, flip],
                placement: this.options.placement,
                strategy: this.options.strategy,
            });
        }
        return this.#popper;
    }

    show(options?: {hideOthers?: boolean}) {
        const showEvent = this.events.emit('show', this);
        if (showEvent.defaultPrevented) {
            return;
        }

        if (options?.hideOthers !== false) {
            Dropdown.getAll().forEach(x => x !== this ? x.hide() : null);
        }

        this.menu.classList.add(DROPDOWN_CLASS_SHOW);
        this.element.classList.add(DROPDOWN_CLASS_SHOW);
        this.popper.update();
        this.element.focus();
        this.events.emit('shown', this);
    }

    hide() {
        if (isDisabled(this.element) || !this.isShown) {
            return;
        }

        const hideEvent = this.events.emit('hide', this);
        if (hideEvent.defaultPrevented) {
            return;
        }

        this.#popper?.destroy();
        this.#popper = undefined;
        this.#menu?.classList.remove(DROPDOWN_CLASS_SHOW);
        this.element.classList.remove(DROPDOWN_CLASS_SHOW);

        this.events.emit('hidden', this);
    }

    toggle() {
        return this.isShown ? this.hide() : this.show();
    }

    destroy(): void {
        this.#popper?.destroy();
        super.destroy();
    }

    static clear(event: Event) {
        if (event && isRightBtn(event as MouseEvent)) {
            return;
        }
        Dropdown.getAll().forEach(x => x.hide());
    }
}

document.addEventListener('click', function (e) {
    const element = e.target as HTMLElement;
    const toggleBtn = element.closest<HTMLElement>(DROPDOWN_SELECTOR);
    if (toggleBtn) {
        const dropdown = Dropdown.ensure(toggleBtn);
        dropdown.toggle();
    } else {
        Dropdown.clear(e);
    }
});
