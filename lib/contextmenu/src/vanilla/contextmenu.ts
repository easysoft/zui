import type {h as _h} from 'preact';
import {createPopper, Instance as PopperInstance, VirtualElement} from '@popperjs/core/lib/popper-lite';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import flip from '@popperjs/core/lib/modifiers/flip';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {isRightBtn} from '@zui/com-helpers/src/helpers/mouse-event';
import type {MenuProps, MenuListItem, Menu as MenuReact} from '@zui/menu/src/component/menu';
import {Menu} from '@zui/menu';
import '../style/vars.css';
import '../style/contextmenu.css';

export type ContextMenuOptions = {
    placement?: ContextMenuPlacement;
    strategy?: ContextMenuPositionStrategy;
    preventOverflow?: boolean | {boundary: string};
    offset?: [number, number] | (() => [number, number]);
    flip?: boolean;
    menu?: MenuProps | MenuListItem[] | (() => MenuListItem[]);
    subMenuTrigger?: 'click' | 'hover',
};

export type ContextMenuShowOptions = Partial<ContextMenuOptions & {position: {x: number, y: number}, event: MouseEvent}>;

export type ContextMenuPositionStrategy = 'absolute' | 'fixed';

export type ContextMenuPlacement =
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

const CONTEXTMENU_SELECTOR = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)';
const CONTEXTMENU_CLASS_SHOW = 'show';
const CONTEXTMENU_CLASS_MENU = 'contextmenu';

export class ContextMenu extends ComponentBase<ContextMenuOptions> {
    static DEFAULT = {
        placement: 'bottom-start',
        strategy: 'fixed',
        subMenuTrigger: 'hover',
    };

    #menu?: HTMLElement;

    #popper?: PopperInstance;

    #subPoppers = new Map<MenuReact, PopperInstance>();

    #virtualElement: VirtualElement;

    #mousePos: {x: number, y: number};

    #customMenu?: Menu;

    get isShown() {
        return this.menu.classList.contains(CONTEXTMENU_CLASS_SHOW);
    }

    get menu() {
        if (this.#menu) {
            return this.#menu;
        }

        const {element} = this;
        let menuElement: HTMLElement | null | undefined;
        if (this.options.menu) {
            menuElement = document.createElement('div');
            menuElement.classList.add(CONTEXTMENU_CLASS_MENU);
            document.body.appendChild(menuElement);
        } else if (element) {
            const target = element.getAttribute('href') ?? element.dataset.target;
            if (target?.[0] === '#') {
                menuElement = document.querySelector<HTMLElement>(target);
            }
            if (!menuElement) {
                const nextElement = element.nextElementSibling;
                if (nextElement?.classList.contains(CONTEXTMENU_CLASS_MENU)) {
                    menuElement = nextElement as HTMLElement;
                } else {
                    menuElement = element.parentNode?.querySelector(`.${CONTEXTMENU_CLASS_MENU}`);
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

    init(): void {
        const {element} = this;
        if (element !== document.body && !element.hasAttribute('data-toggle')) {
            element.setAttribute('data-toggle', 'contextmenu');
        }
    }

    show(options: ContextMenuShowOptions | MouseEvent = {}) {
        if (options instanceof MouseEvent) {
            options = {event: options};
        }
        const {position, event, ...otherOptions} = options;
        this.setOptions(otherOptions);

        let mousePos = position;
        if (event instanceof MouseEvent) {
            event.preventDefault();
            mousePos = mousePos || {x: event.clientX, y: event.clientY};
        }
        this.#mousePos = mousePos || ContextMenu.mousePos;
        this.menu.classList.add(CONTEXTMENU_CLASS_SHOW);
        this.#updateCustomMenu();
        this.#createPopper().update();
    }

    hide() {
        this.#popper?.destroy();
        this.#popper = undefined;
        this.#menu?.classList.remove(CONTEXTMENU_CLASS_SHOW);
        this.#customMenu?.$?.clearAllSubMenu();
    }

    toggle(options?: ContextMenuShowOptions | MouseEvent) {
        return this.isShown ? this.hide() : this.show(options);
    }

    destroy(): void {
        this.#popper?.destroy();
        super.destroy();
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

    #afterRenderMenu = (menu: MenuReact) => {
        const menuElement = menu.$;
        if (!menuElement?.parentElement) {
            return;
        }
        let popper = this.#subPoppers.get(menu);
        if (!popper) {
            popper = createPopper(menuElement.parentElement, menuElement, {
                modifiers: [preventOverflow, flip],
                placement: 'right-start',
            });
            this.#subPoppers.set(menu, popper);
        }
        popper.update();
    };

    #afterDestroyMenu = (menu: MenuReact) => {
        const popper = this.#subPoppers.get(menu);
        if (popper) {
            popper.destroy();
            this.#subPoppers.delete(menu);
        }
    };

    #renderMenuItem = (menu: MenuReact, item: MenuListItem, index: number, h: typeof _h): (MenuListItem | undefined) => {
        if (item.type === 'item' && item.items) {
            return {
                trailingIcon: h('span', {className: 'caret-right ml-2'}),
            };
        }
    };

    #updateCustomMenu() {
        let {menu} = this.options;
        if (!menu) {
            return;
        }
        if (Array.isArray(menu) || typeof menu === 'function') {
            menu = {items: menu};
        }
        if (this.#customMenu) {
            this.#customMenu.render(menu);
        } else {
            this.#customMenu = new Menu(this.menu, {
                subMenuTrigger: this.options.subMenuTrigger,
                ...menu,
                afterRender: this.#afterRenderMenu,
                beforeDestroy: this.#afterDestroyMenu,
                onRenderItem: this.#renderMenuItem,
            });
        }
    }

    #getVirtualElement(): VirtualElement {
        if (!this.#virtualElement) {
            this.#virtualElement = {
                getBoundingClientRect: () => {
                    const {x, y} = this.#mousePos;
                    return {
                        width: 0,
                        height: 0,
                        top: y,
                        right: x,
                        bottom: y,
                        left: x,
                    } as DOMRect;
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
        ContextMenu.getAll().forEach(x => x.hide());
    }

    static show(options: ContextMenuOptions & {position?: {x: number, y: number}, event?: MouseEvent}) {
        const contextmenu = ContextMenu.ensure(document.body);
        contextmenu.show(options);
        options.event?.stopPropagation();
        return contextmenu;
    }

    static hide() {
        const contextmenu = ContextMenu.get(document.body);
        contextmenu?.hide();
        return contextmenu;
    }

    static get mousePos(): {x: number, y: number} {
        const {watchedMouse} = this;
        if (!watchedMouse) {
            this.watchMouse();
        }
        if (typeof watchedMouse === 'object') {
            return watchedMouse;
        }
        return {x: 0, y: 0};
    }

    static watchedMouse: boolean | {x: number, y: number} = false;

    static watchMouse() {
        if (this.watchedMouse) {
            return;
        }
        document.addEventListener('mousemove', event => {
            this.watchedMouse = {x: event.clientX, y: event.clientY};
        });
        this.watchedMouse = true;
    }
}

document.addEventListener('contextmenu', (event) => {
    const element = event.target as HTMLElement;
    if (element.closest(`.${CONTEXTMENU_CLASS_MENU}`)) {
        return;
    }
    const toggleElement = element.closest<HTMLElement>(CONTEXTMENU_SELECTOR);
    if (toggleElement) {
        const contextmenu = ContextMenu.ensure(toggleElement);
        contextmenu.show(event);
    }
});

document.addEventListener('click', ContextMenu.clear);
