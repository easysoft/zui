import {render, h} from 'preact';
import {$, Cash, Component, Selector} from '@zui/core';
import {MenuOptions} from '@zui/menu';
import {autoUpdate, computePosition, flip} from '@floating-ui/dom';
import '../style/vars.css';
import '../style/contextmenu.css';
import {ContextMenu as ContextMenuReact} from '../component/contextmenu';
import type {MenuItemOptions} from '@zui/menu/src/types/menu-item-options';
import type {ContextMenuOptions} from '../types/contextmenu-options';
import type {ContextMenuEvents} from '../types/contextmenu-events';
import type {ContextMenuTrigger} from '../types/contextmenu-trigger';
import type {VirtualElement, ComputePositionConfig, Strategy, Side} from '@floating-ui/dom';

const MENU_CLASS = 'contextmenu';

const CLASS_SHOW = 'show';

const MENU_SELECTOR = '[data-toggle="contextmenu"]:not(.disabled):not(:disabled)';

export class ContextMenu extends Component<ContextMenuOptions, ContextMenuEvents, HTMLElement> {
    static NAME = 'ContextMenu';

    static DEFAULT: Partial<ContextMenuOptions> = {
        placement: 'bottom-start',
        strategy: 'fixed',
        flip: true,
        preventOverflow :true,
    };

    #menu?: HTMLElement;

    #virtualElement?: VirtualElement;

    #trigger?: ContextMenuTrigger;

    #arrowEl?: HTMLDivElement;

    #cleanup?: () => void;

    get $menu() {
        return $(this.#menu);
    }

    get isShown() {
        return this.$menu.hasClass(CLASS_SHOW);
    }

    get menu() {
        return this.#menu || this._ensureMenu();
    }

    get trigger() {
        return this.#trigger || (this.element as ContextMenuTrigger);
    }

    get isDynamic() {
        return this.options.items || this.options.menu;
    }

    init() {
        const {$element} = this;
        if (!$element.is('body')) {
            $element.attr('data-toggle', 'contextmenu');
        }
    }

    show(trigger?: ContextMenuTrigger): boolean {
        if (this.isShown) {
            return false;
        }

        this.#trigger = trigger;
        const showEvent = this.emit('show', this.trigger);
        if (showEvent.defaultPrevented) {
            return false;
        }

        if (this.isDynamic && !this._renderMenu()) {
            return false;
        }

        this.$menu.addClass(CLASS_SHOW);
        this._createPopper();

        this.emit('shown');
        return true;
    }

    hide(): boolean {
        if (!this.isShown) {
            return false;
        }

        this.#cleanup?.();
        const hideEvent = this.emit('hide');
        if (hideEvent.defaultPrevented) {
            return false;
        }

        this.$menu.removeClass(CLASS_SHOW);
        this.emit('hidden');
        return true;
    }

    toggle(event?: MouseEvent) {
        return this.isShown ? this.hide() : this.show(event);
    }

    destroy() {
        super.destroy();
        this.hide();
        this.#menu?.remove();
    }

    _ensureMenu() {
        const {$element} = this;
        let $menuElement: Cash | undefined;
        if (this.isDynamic) {
            $menuElement = $(`<div class="${MENU_CLASS}" />`).appendTo('body');
        } else if ($element.length) {
            const target = $element.attr('href') || $element.dataset('target') as string;
            if (target?.[0] === '#') {
                $menuElement = $(document).find(target);
            }
            if (!$menuElement?.length) {
                const $nextElement = $element.next();
                if ($nextElement.hasClass(MENU_CLASS)) {
                    $menuElement = $nextElement;
                } else {
                    $menuElement = $element.parent().find(`.${MENU_CLASS}`);
                }
            }
            if ($menuElement) {
                $menuElement.addClass('menu-popup');
            }
        }

        if (!$menuElement?.length) {
            throw new Error('[ZUI] ContextMenu: Cannot find menu element.');
        }

        this.#menu = $menuElement.css({
            width: 'max-content',
            position: this.options.strategy as Strategy,
            top: 0,
            left: 0,
        })[0];
        return $menuElement[0];
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
        const menu = this.menu!;
        this.#cleanup = autoUpdate(reference, menu, () => {
            computePosition(reference, menu, config).then(({x, y, middlewareData, placement}) => {
                $(menu).css({left: `${x}px`, top: `${y}px`});
                const side = placement.split('-')[0] as Side;
                const staticSide = this.#getStaticSide(side);

                if (middlewareData.arrow && this.#arrowEl) {
                    const {x: arrowX, y: arrowY} = middlewareData.arrow;
                    $(this.#arrowEl).css({
                        left: arrowX != null ? `${arrowX}px` : '',
                        top: arrowY != null ? `${arrowY}px` : '',
                        [staticSide]: `${-this.#arrowEl.offsetWidth / 2}px`,
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

        const updateMenuEvent = this.emit('updateMenu', menuOptions, this.trigger);
        if (updateMenuEvent.defaultPrevented) {
            return false;
        }

        render(h(ContextMenuReact, menuOptions), this.menu!);
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
        const all = this.getAll();
        const excludeSet = new Set(exclude || []);
        for (const menu of all) {
            if (excludeSet.has(menu.element)) {
                continue;
            }
            menu.hide();
        }
    }

    static show(options: ContextMenuOptions & {event?:
    ContextMenuTrigger}) {
        const {event, ...otherOptions} = options;
        const contextmenu = this.ensure(document.body);
        contextmenu.setOptions(otherOptions);
        contextmenu.show(event);
        if (event instanceof Event) {
            event.stopPropagation();
        }
        return contextmenu;
    }

    static hide(selector?: Selector) {
        const contextmenu = this.query(selector);
        contextmenu?.hide();
        return contextmenu;
    }
}

// Bind global events.
$(document).on('contextmenu', event => {
    const $target = $(event.target);
    if ($target.closest(`.${MENU_CLASS}`).length) {
        return;
    }
    const toggleElement = $target.closest(MENU_SELECTOR);
    if (toggleElement.length) {
        ContextMenu.ensure(toggleElement).show(event);
        event.preventDefault();
    }
}).on('click', ContextMenu.clear.bind(ContextMenu));
