import {render, h} from 'preact';
import {createPopper, Instance as PopperInstance, VirtualElement, Options as PopperOptions} from '@popperjs/core/lib/popper-lite';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import flip from '@popperjs/core/lib/modifiers/flip';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {isRightBtn} from '@zui/com-helpers/src/helpers/mouse-event';
import {MenuOptions} from '@zui/menu';
import '../style/vars.css';
import '../style/contextmenu.css';
import type {MenuItemOptions} from '@zui/menu/src/types/menu-item-options';
import type {ContextMenuOptions} from '../types/contextmenu-options';
import type {ContextMenuEvents} from '../types/contextmenu-events';
import type {ContextMenuTrigger} from '../types/contextmenu-trigger';
import {ContextMenu as ContextMenuReact} from '../component/contextmenu';

export class ContextMenu<T extends ContextMenuOptions = ContextMenuOptions, E extends ContextMenuEvents = ContextMenuEvents> extends ComponentBase<T, E & ContextMenuEvents> {
    static NAME = 'contextmenu';

    static EVENTS = true;

    static DEFAULT = {
        placement: 'bottom-start',
        strategy: 'fixed',
        flip: true,
        preventOverflow :true,
    } as Partial<ContextMenuOptions>;

    static MENU_CLASS = 'contextmenu';

    static CLASS_SHOW = 'show';

    static MENU_SELECTOR = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)';

    #menu?: HTMLElement;

    #popper?: PopperInstance;

    #virtualElement?: VirtualElement;

    #trigger?: ContextMenuTrigger;

    get isShown() {
        return this.#menu?.classList.contains((this.constructor as typeof ContextMenu).CLASS_SHOW);
    }

    get menu(): HTMLElement {
        return this.#menu || this._ensureMenu();
    }

    get popper() {
        if (!this.#popper) {
            return this._createPopper();
        }
        return this.#popper;
    }

    get trigger() {
        return this.#trigger || this.element;
    }

    get isDynamic() {
        return this.options.items || this.options.menu;
    }

    init(): void {
        const {element} = this;
        if (element !== document.body && !element.hasAttribute('data-toggle')) {
            element.setAttribute('data-toggle', 'contextmenu');
        }
    }

    show(trigger?: ContextMenuTrigger): boolean {
        this.#trigger = trigger;
        const showEvent = this.emit('show', {menu: this, trigger: this.trigger});
        if (showEvent.defaultPrevented) {
            return false;
        }

        if (this.isDynamic && !this._renderMenu()) {
            return false;
        }

        this.menu.classList.add((this.constructor as typeof ContextMenu).CLASS_SHOW);
        this._createPopper().update();

        this.emit('shown', this);
        return true;
    }

    hide(): boolean {
        const hideEvent = this.emit('hide', this);
        if (hideEvent.defaultPrevented) {
            return false;
        }

        this.#popper?.destroy();
        this.#popper = undefined;
        this.#menu?.classList.remove((this.constructor as typeof ContextMenu).CLASS_SHOW);

        this.emit('hidden', this);
        return true;
    }

    toggle(event?: MouseEvent) {
        return this.isShown ? this.hide() : this.show(event);
    }

    destroy(): void {
        this.#popper?.destroy();
        super.destroy();
        this.#menu?.remove();
    }

    _ensureMenu() {
        const {element} = this;
        const menuClass = (this.constructor as typeof ContextMenu).MENU_CLASS;
        let menuElement: HTMLElement | null | undefined;
        if (this.isDynamic) {
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

        if (!menuElement) {
            throw new Error('ContextMenu: Cannot find menu element');
        }
        this.#menu = menuElement;
        return menuElement;
    }

    _getPopperOptions(): PopperOptions {
        const {flip: flipOption, preventOverflow: preventOverflowOption, modifiers = []} = this.options;
        return {
            modifiers: [
                preventOverflowOption ? (typeof preventOverflowOption === 'object' ? {...preventOverflow, options: preventOverflowOption} : preventOverflow) : null,
                flipOption ? flip : null,
                ...modifiers,
            ].filter(Boolean),
            placement: this.options.placement,
            strategy: this.options.strategy,
        } as PopperOptions;
    }

    _createPopper() {
        const options = this._getPopperOptions();
        if (this.#popper) {
            this.#popper.setOptions(options);
        } else {
            this.#popper = createPopper(this._getPopperElement(), this.menu, options);
        }
        return this.#popper;
    }

    _getMenuOptions(): MenuOptions | undefined {
        const {menu, items} = this.options;
        let menuItems = items || menu?.items;
        if (!menuItems) {
            return;
        }
        if (typeof menuItems === 'function') {
            menuItems = (menuItems as ((menu: ContextMenu) => MenuItemOptions[]))(this as ContextMenu);
        }
        return {
            nestedTrigger: 'hover',
            ...menu,
            items: menuItems,
        } as MenuOptions;
    }

    _renderMenu() {
        const menuOptions = this._getMenuOptions();
        if (!menuOptions) {
            return false;
        }

        const updateMenuEvent = this.emit('updateMenu', {menu: menuOptions, trigger: this.trigger, contextmenu: this});
        if (updateMenuEvent.defaultPrevented) {
            return false;
        }

        render(h(ContextMenuReact, menuOptions), this.menu);
        return true;
    }

    _getPopperElement(): VirtualElement {
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

    static clear(options?: {event?: Event, exclude?: HTMLElement[], ignoreSelector?: string} | Event) {
        if (options instanceof Event) {
            options = {event: options};
        }
        const {event, exclude, ignoreSelector = '.not-hide-menu'} = options || {};
        if (event && ignoreSelector && (event.target as HTMLElement).closest?.(ignoreSelector)) {
            return;
        }

        if (event && isRightBtn(event as MouseEvent)) {
            return;
        }
        const all = this.getAll().entries();
        const excludeSet = new Set(exclude || []);
        for (const [ele, menu] of all) {
            if (excludeSet.has(ele)) {
                continue;
            }
            menu.hide();
        }
    }

    static show(options: ContextMenuOptions & {event?: MouseEvent}) {
        const {event, ...otherOptions} = options;
        const contextmenu = this.ensure(document.body);
        if (Object.keys(otherOptions).length) {
            contextmenu.setOptions(otherOptions);
        }
        contextmenu.show(event);
        event?.stopPropagation?.();
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
