import '@zui/css-icons/src/icons/arrow.css';
import {createPopper, Options as PopperOptions, Instance as PopperInstance, VirtualElement} from '@popperjs/core/lib/popper-lite';
import arrow from '@popperjs/core/lib/modifiers/arrow';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import flip from '@popperjs/core/lib/modifiers/flip';
import {TooltipOptions, TooltipTrigger} from '../types';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import '../style/index.css';

export class Tooltip extends ComponentBase<TooltipOptions> {

    static NAME = 'tooltip';

    static TOOLTIP_CLASS = 'tooltip';

    static CLASS_SHOW = 'show';

    static MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';

    static DEFAULT = {
        animation: true,
        placement: 'top',
        strategy: 'absolute',
        trigger: 'hover',
        type: 'darker',
        arrow: true,
    } as Partial<TooltipOptions>;

    #hoverEventsBind = false;

    #virtualElement?: VirtualElement;

    #hideTimer = 0;

    #tooltip?: HTMLElement;

    #popper?: PopperInstance;

    #trigger?: TooltipTrigger;

    get isShown() {
        return this.#tooltip?.classList.contains((this.constructor as typeof Tooltip).CLASS_SHOW);
    }

    get tooltip(): HTMLElement {
        return this.#tooltip || this._ensureTooltip();
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

    get isHover(): boolean {
        return this.options.trigger === 'hover';
    }

    get elementShowClass() {
        return `with-${(this.constructor as typeof Tooltip).NAME}-show`;
    }

    init(): void {
        const {element} = this;
        if (element !== document.body && !element.hasAttribute('data-toggle')) {
            element.setAttribute('data-toggle', 'tooltip');
        }
    }

    show(trigger?: TooltipTrigger): boolean {
        this.#trigger = trigger;
        if (!this.#hoverEventsBind && this.isHover) {
            this.#bindHoverEvents();
        }
        if (this.options.animation) {
            this.tooltip.classList.add('fade');
        }
        this.element.classList.add(this.elementShowClass);
        this.tooltip.classList.add((this.constructor as typeof Tooltip).CLASS_SHOW);
        
        this._createPopper().update();
        return true;
    }

    hide(): boolean {
        this.#popper?.destroy();
        this.#popper = undefined;
        this.element.classList.remove(this.elementShowClass);
        this.#tooltip?.classList.remove((this.constructor as typeof Tooltip).CLASS_SHOW);
        return true;
    }

    toggle(event?: MouseEvent) {
        return this.isShown ? this.hide() : this.show(event);
    }

    hideLater = () => {
        this.#cancelHide();
        this.#hideTimer = window.setTimeout(this.hide.bind(this), 100);
    };

    destroy(): void {
        if (this.#hoverEventsBind) {
            this.element.removeEventListener('mouseleave', this.hideLater);
            this.tooltip.removeEventListener('mouseenter', this.#cancelHide);
            this.tooltip.removeEventListener('mouseleave', this.hideLater);
        }
        super.destroy();
    }

    _getArrowSize() {
        const {arrow: arrowOption} = this.options;
        return typeof arrowOption === 'number' ? arrowOption : 4;
    }

    _createArrow(): HTMLElement {
        const div = document.createElement('div');
        div.classList.add('arrow', 'tooltip-arrow');
        div.style.setProperty('--arrow-size', `${this._getArrowSize()}px`);
        return div;
    }

    _ensureTooltip() {
        const tooltipClass = (this.constructor as typeof Tooltip).TOOLTIP_CLASS;
        const tooltipElement = document.createElement('div');
        const classOptions = this.options.className ? this.options.className.split(' ') : [];
        let classNames = [tooltipClass, this.options.type || ''];
        classNames = classNames.concat(classOptions);
        tooltipElement.classList.add(...classNames);
        tooltipElement[this.options.html ? 'innerHTML' : 'innerText'] = this.options.title || '';
        
        if (this.options.arrow) {
            tooltipElement.prepend(this._createArrow());
        }
        document.body.appendChild(tooltipElement);

        this.#tooltip = tooltipElement;
        return tooltipElement;
    }

    _getPopperOptions(): PopperOptions {
        const arrowSize = this._getArrowSize();
        return {
            modifiers: [
                preventOverflow,
                flip,
                {...arrow, options: {
                    padding: arrowSize,
                    element: '.arrow',
                }}, {
                    ...offset, options: {
                        offset: [0, arrowSize + 3],
                    },
                }, {
                    name: 'tooltip',
                    enabled: true,
                    phase: 'beforeWrite',
                    fn: ({state}) => {
                        const placement = state.placement?.split('-').shift() || '';
                        this.tooltip.querySelector('.arrow')?.setAttribute('class', `arrow arrow-${placement}`);
                        this.element.setAttribute('data-tooltip-placement', placement);
                    },
                },
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
            this.#popper = createPopper(this._getPopperElement(), this.tooltip, options);
        }
        return this.#popper;
    }

    _getPopperElement(): VirtualElement {
        if (!this.#virtualElement) {
            this.#virtualElement = {
                getBoundingClientRect: () => {
                    const {element} = this;
                    if (element instanceof MouseEvent) {
                        const {clientX, clientY} = element;
                        return {
                            width: 0,
                            height: 0,
                            top: clientY,
                            right: clientX,
                            bottom: clientY,
                            left: clientX,
                        } as DOMRect;
                    }
                    if (element instanceof HTMLElement) {
                        return element.getBoundingClientRect();
                    }
                    return element;
                },
                contextElement: this.element as Element,
            };
        }
        return this.#virtualElement;
    }

    #cancelHide = () => {
        clearTimeout(this.#hideTimer);
        this.#hideTimer = 0;
    };

    #bindHoverEvents() {
        const {tooltip} = this;
        tooltip.addEventListener('mouseenter', this.#cancelHide);
        tooltip.addEventListener('mouseleave', this.hideLater);
        this.element.addEventListener('mouseleave', this.hideLater);
        this.#hoverEventsBind = true;
    }

    static clear(options?: {event?: Event, exclude?: HTMLElement[]} | Event) {
        if (options instanceof Event) {
            options = {event: options};
        }
        const {exclude} = options || {};
        const all = this.getAll().entries();
        const excludeSet = new Set(exclude || []);
        for (const [ele, tooltip] of all) {
            if (excludeSet.has(ele)) {
                continue;
            }
            tooltip.hide();
        }
    }
    
}

document.addEventListener('click', function (event) {
    const element = event.target as HTMLElement;
    const toggleBtn = element.closest<HTMLElement>(Tooltip.MENU_SELECTOR);
    if (toggleBtn) {
        const tooltip = Tooltip.ensure(toggleBtn);
        if (tooltip.options.trigger === 'click') {
            tooltip.toggle();
        }
    } else {
        Tooltip.clear({event});
    }
});

document.addEventListener('mouseover', function (e) {
    const element = e.target as HTMLElement;
    const toggleBtn = typeof element.closest === 'function' ? element.closest<HTMLElement>(Tooltip.MENU_SELECTOR) : null;
    if (!toggleBtn) {
        return;
    }
    const tooltip = Tooltip.ensure(toggleBtn);
    if (tooltip.isHover) {
        tooltip.show();
    }
});
