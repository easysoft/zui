import {createPopper, Instance as PopperInstance, VirtualElement} from '@popperjs/core/lib/popper-lite';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import flip from '@popperjs/core/lib/modifiers/flip';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {isRightBtn} from '@zui/com-helpers/src/helpers/mouse-event';
import {Menu, MenuOptions} from '@zui/menu';
import '../style/vars.css';
import '../style/contextmenu.css';
import type {MenuItemOptions} from '@zui/menu/src/types/menu-item-options';
import type {ContextMenuOptions} from '../types/contextmenu-options';
import type {ContextMenuEvents} from '../types/contextmenu-events';
import type {ContextMenuTrigger} from '../types/contextmenu-trigger';

export class ContextMenu<T extends ContextMenuOptions = ContextMenuOptions, E extends ContextMenuEvents = ContextMenuEvents> extends ComponentBase<T, E & ContextMenuEvents> {
    static EVENTS = true;

    static DEFAULT: Partial<ContextMenuOptions> = {
        placement: 'bottom-start',
        strategy: 'fixed',
        subMenuTrigger: 'hover',
    };

    static MENU_CLASS = 'contextmenu';

    static CLASS_SHOW = 'show';

    static MENU_SELECTOR = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)';

    #menu?: HTMLElement;

    #popper?: PopperInstance;

    #virtualElement?: VirtualElement;

    #trigger?: ContextMenuTrigger;

    #customMenu?: Menu;

    get isShown() {
        return this.menu.classList.contains((this.constructor as typeof ContextMenu).CLASS_SHOW);
    }

    get menu() {
        if (this.#menu) {
            return this.#menu;
        }

        const {element} = this;
        const menuClass = (this.constructor as typeof ContextMenu).MENU_CLASS;
        let menuElement: HTMLElement | null | undefined;
        if (this.options.menu) {
            menuElement = document.createElement('div');
            menuElement.classList.add(menuClass);
            document.body.appendChild(menuElement);
        } else if (element) {
            const target = element.getAttribute('href') ?? element.dataset.target;
            if (target?.[0] === '#') {
                menuElement = document.querySelector<HTMLElement>(target);
            }
            if (!menuElement) {
                const nextElement = element.nextElementSibling;
                if (nextElement?.classList.contains(menuClass)) {
                    menuElement = nextElement as HTMLElement;
                } else {
                    menuElement = element.parentNode?.querySelector(`.${menuClass}`);
                }
            }
        }

        if (menuElement) {
            this.#menu = menuElement;
            return menuElement;
        } else {
            throw new Error('ContextMenu: Cannot find menu element');
        }
    }

    get popper() {
        if (!this.#popper) {
            return this.#createPopper();
        }
        return this.#popper;
    }

    get trigger() {
        return this.#trigger || this.element;
    }

    init(): void {
        const {element} = this;
        if (element !== document.body && !element.hasAttribute('data-toggle')) {
            element.setAttribute('data-toggle', 'contextmenu');
        }
    }

    show(trigger?: ContextMenuTrigger) {
        this.#trigger = trigger;
        const showEvent = this.emit('show', {menu: this, trigger: this.trigger});
        if (showEvent.defaultPrevented) {
            return false;
        }

        if (this.#updateCustomMenu() === false) {
            return false;
        }

        this.menu.classList.add((this.constructor as typeof ContextMenu).CLASS_SHOW);
        this.#createPopper().update();

        this.emit('shown', this);
        return true;
    }

    hide() {
        const hideEvent = this.emit('hide', this);
        if (hideEvent.defaultPrevented) {
            return false;
        }

        this.#popper?.destroy();
        this.#popper = undefined;
        this.#menu?.classList.remove((this.constructor as typeof ContextMenu).CLASS_SHOW);

        this.emit('hidden', this);
    }

    toggle(event?: MouseEvent) {
        return this.isShown ? this.hide() : this.show(event);
    }

    destroy(): void {
        this.#popper?.destroy();
        super.destroy();
        if (this.options.menu) {
            this.#menu?.remove();
        }
    }

    #createPopper() {
        const options = {
            modifiers: [preventOverflow, flip],
            placement: this.options.placement,
            strategy: this.options.strategy,
        };
        if (this.#popper) {
            this.#popper.setOptions(options);
        } else {
            this.#popper = createPopper(this.#getVirtualElement(), this.menu, options);
        }
        return this.#popper;
    }

    #updateCustomMenu() {
        const {menu, items} = this.options;
        let menuItems = items || menu?.items;
        if (!menuItems) {
            return;
        }
        if (typeof menuItems === 'function') {
            menuItems = (menuItems as ((menu: ContextMenu) => MenuItemOptions[]))(this as ContextMenu);
        }
        const menuOptions = {
            ...menu,
            menuItems,
        } as MenuOptions;

        const updateMenuEvent = this.emit('updateMenu', {menu: menuOptions, trigger: this.trigger, contextmenu: this});
        if (updateMenuEvent.defaultPrevented) {
            return false;
        }


        if (this.#customMenu) {
            this.#customMenu.render(menuOptions);
        } else {
            this.#customMenu = new Menu(this.menu, menuOptions);
        }
        return true;
    }

    #getVirtualElement(): VirtualElement {
        if (!this.#virtualElement) {
            this.#virtualElement = {
                getBoundingClientRect: () => {
                    const {trigger} = this;
                    if (trigger instanceof MouseEvent) {
                        const {clientX, clientY} = trigger;
                        return {
                            width: 0,
                            height: 0,
                            top: clientY,
                            right: clientX,
                            bottom: clientY,
                            left: clientX,
                        } as DOMRect;
                    }
                    if (trigger instanceof HTMLElement) {
                        return trigger.getBoundingClientRect();
                    }
                    return trigger;
                },
                contextElement: this.element as Element,
            };
        }
        return this.#virtualElement;
    }

    static clear(event: Event) {
        if (event && isRightBtn(event as MouseEvent)) {
            return;
        }
        this.getAll().forEach(x => x.hide());
    }

    static show(options: ContextMenuOptions & {event?: MouseEvent}) {
        const {event, ...otherOptions} = options;
        const contextmenu = this.ensure(document.body);
        if (Object.keys(otherOptions).length) {
            contextmenu.setOptions(otherOptions);
        }
        contextmenu.show(event);
        event?.stopPropagation();
        return contextmenu;
    }

    static hide() {
        const contextmenu = this.get(document.body);
        contextmenu?.hide();
        return contextmenu;
    }
}

document.addEventListener('contextmenu', (event) => {
    const element = event.target as HTMLElement;
    if (element.closest(`.${ContextMenu.MENU_CLASS}`)) {
        return;
    }
    const toggleElement = element.closest<HTMLElement>(ContextMenu.MENU_SELECTOR);
    if (toggleElement) {
        ContextMenu.ensure(toggleElement).show(event);
        event.preventDefault();
    }
});

document.addEventListener('click', ContextMenu.clear.bind(ContextMenu));
