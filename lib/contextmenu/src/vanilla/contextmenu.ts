import {render, h} from 'preact';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {MenuOptions} from '@zui/menu';
import '../style/vars.css';
import '../style/contextmenu.css';
import {ContextMenu as ContextMenuReact} from '../component/contextmenu';
import {autoUpdate, computePosition, flip} from '@floating-ui/dom';
import type {MenuItemOptions} from '@zui/menu/src/types/menu-item-options';
import type {ContextMenuOptions} from '../types/contextmenu-options';
import type {ContextMenuEvents} from '../types/contextmenu-events';
import type {ContextMenuTrigger} from '../types/contextmenu-trigger';
import type {VirtualElement, ComputePositionConfig, Strategy, Side} from '@floating-ui/dom';

export class ContextMenu<T extends ContextMenuOptions = ContextMenuOptions, E extends ContextMenuEvents = ContextMenuEvents> extends ComponentBase<T, E & ContextMenuEvents> {
    static NAME = 'contextmenu';

    static EVENTS = true;

    static DEFAULT: Partial<ContextMenuOptions> = {
        placement: 'bottom-start',
        strategy: 'fixed',
        flip: true,
        preventOverflow :true,
    };

    static MENU_CLASS = 'contextmenu';

    static CLASS_SHOW = 'show';

    static MENU_SELECTOR = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)';

    #menu?: HTMLElement;

    #virtualElement?: VirtualElement;

    #trigger?: ContextMenuTrigger;

    arrowEl?: HTMLDivElement;

    #cleanup?: () => void;

    get isShown() {
        return this.#menu?.classList.contains((this.constructor as typeof ContextMenu).CLASS_SHOW);
    }

    get menu() {
        return this.#menu || this._ensureMenu();
    }

    get trigger() {
        return this.#trigger || this.element;
    }

    get isDynamic() {
        return this.options.items || this.options.menu;
    }

    init() {
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

        if (this.isDynamic && !this._renderMenu()) {
            return false;
        }

        this.menu.classList.add((this.constructor as typeof ContextMenu).CLASS_SHOW);
        this._createPopper();

        this.emit('shown', this);
        return true;
    }

    hide() {
        this.#cleanup?.();
        const hideEvent = this.emit('hide', this);
        if (hideEvent.defaultPrevented) {
            return false;
        }

        this.#menu?.classList.remove((this.constructor as typeof ContextMenu).CLASS_SHOW);

        this.emit('hidden', this);
        return true;
    }

    toggle(event?: MouseEvent) {
        return this.isShown ? this.hide() : this.show(event);
    }

    destroy() {
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
            if (menuElement) {
                menuElement.classList.add('menu-popup');
            }
        }

        if (!menuElement) {
            throw new Error('ContextMenu: Cannot find menu element');
        }

        menuElement.style.width = 'max-content';
        menuElement.style.position = this.options.strategy as Strategy;
        menuElement.style.top = '0';
        menuElement.style.left = '0';

        this.#menu = menuElement;
        return menuElement;
    }

    _getPopperOptions() {
        const {placement, strategy} = this.options;
        const config: ComputePositionConfig = {
            middleware: [],
            placement,
            strategy,
        };
        if (this.options.flip) {
            config.middleware?.push(flip());
        }
        return config;
    }

    #getStaticSide(side: Side) {
        return ({
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
        } as const)[side];
    }

    #getNoneSideBorder(side: Side) {
        if (side === 'bottom') {
            return {
                borderBottomStyle: 'none',
                borderRightStyle: 'none',
            };
        }
        if (side === 'top') {
            return {
                borderTopStyle: 'none',
                borderLeftStyle: 'none',
            };
        }
        if (side === 'left') {
            return {
                borderBottomStyle: 'none',
                borderLeftStyle: 'none',
            };
        }
        return {
            borderTopStyle: 'none',
            borderRightStyle: 'none',
        };
    }

    _createPopper() {
        const config = this._getPopperOptions();
        const reference = this._getPopperElement();
        this.#cleanup = autoUpdate(reference, this.menu, () => {
            computePosition(reference, this.menu, config).then(({x, y, middlewareData, placement}) => {
                Object.assign(this.menu.style, {
                    left: `${x}px`,
                    top: `${y}px`,
                });

                const side = placement.split('-')[0] as Side;

                const staticSide = this.#getStaticSide(side);

                if (middlewareData.arrow && this.arrowEl) {
                    const {x: arrowX, y: arrowY} = middlewareData.arrow;

                    Object.assign(this.arrowEl.style, {
                        left: arrowX != null ? `${arrowX}px` : '',
                        top: arrowY != null ? `${arrowY}px` : '',
                        [staticSide]: `${-this.arrowEl.offsetWidth / 2}px`,
                        background: 'inherit',
                        border: 'inherit',
                        ...this.#getNoneSideBorder(side),
                    });
                }
            });
        });
    }

    _getMenuOptions() {
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
                contextElement: this.element,
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

        if (event && (event as MouseEvent).button === 2) {
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

    static show(options: ContextMenuOptions & {event?:
    ContextMenuTrigger}) {
        const {event, ...otherOptions} = options;
        const contextmenu = this.ensure(document.body);
        if (Object.keys(otherOptions).length) {
            contextmenu.setOptions(otherOptions);
        }
        contextmenu.show(event);
        if (event instanceof Event) {
            event.stopPropagation();
        }
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
    if (element.closest?.(`.${ContextMenu.MENU_CLASS}`)) {
        return;
    }
    const toggleElement = element.closest<HTMLElement>(ContextMenu.MENU_SELECTOR);
    if (toggleElement) {
        ContextMenu.ensure(toggleElement).show(event);
        event.preventDefault();
    }
});

document.addEventListener('click', ContextMenu.clear.bind(ContextMenu));
