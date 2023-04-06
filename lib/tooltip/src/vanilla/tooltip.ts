import '@zui/css-icons/src/icons/arrow.css';
import '../style/index.css';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {autoUpdate, computePosition, offset, flip, arrow} from '@floating-ui/dom';
import type {TooltipOptions, TooltipTrigger} from '../types';
import type {VirtualElement, ComputePositionConfig, Strategy, Side} from '@floating-ui/dom';

export class Tooltip extends ComponentBase<TooltipOptions> {

    static readonly NAME = 'tooltip';

    static readonly TOOLTIP_CLASS = 'tooltip';

    static readonly CLASS_SHOW = 'show';

    static readonly MENU_SELECTOR = '[data-toggle="tooltip"]:not(.disabled):not(:disabled)';

    static DEFAULT: Partial<TooltipOptions> = {
        animation: true,
        placement: 'top',
        strategy: 'absolute',
        trigger: 'hover',
        type: 'darker',
        arrow: true,
    };

    #hoverEventsBind = false;

    #virtualElement?: VirtualElement;

    #hideTimer = 0;

    #tooltip?: HTMLElement;

    #arrowEl?: HTMLDivElement;

    #trigger?: TooltipTrigger;

    #cleanup?: () => void;

    get isShown() {
        return this.#tooltip?.classList.contains(Tooltip.CLASS_SHOW);
    }

    get tooltip() {
        return this.#tooltip || this.#ensureTooltip();
    }

    get trigger() {
        return this.#trigger || this.element;
    }

    get isHover() {
        return this.options.trigger === 'hover';
    }

    get elementShowClass() {
        return `with-${Tooltip.NAME}-show`;
    }

    get isDynamic() {
        return this.options.title;
    }

    init() {
        const {element} = this;
        if (element !== document.body && !element.hasAttribute('data-toggle')) {
            element.setAttribute('data-toggle', 'tooltip');
        }
    }

    show(options?: TooltipOptions) {
        this.setOptions(options);
        if (!this.#hoverEventsBind && this.isHover) {
            this.#bindHoverEvents();
        }
        if (this.options.animation) {
            this.tooltip.classList.add('fade');
        }
        this.element.classList.add(this.elementShowClass);
        this.tooltip.classList.add(Tooltip.CLASS_SHOW);

        this.#updatePosition();
        return true;
    }

    hide() {
        this.#cleanup?.();
        this.element.classList.remove(this.elementShowClass);
        this.#tooltip?.classList.remove(Tooltip.CLASS_SHOW);
        return true;
    }

    toggle(event?: MouseEvent) {
        return this.isShown ? this.hide() : this.show(event);
    }

    hideLater = () => {
        this.#cancelHide();
        this.#hideTimer = window.setTimeout(this.hide.bind(this), 100);
    };

    destroy() {
        if (this.#hoverEventsBind) {
            this.element.removeEventListener('mouseleave', this.hideLater);
            this.tooltip.removeEventListener('mouseenter', this.#cancelHide);
            this.tooltip.removeEventListener('mouseleave', this.hideLater);
        }
        super.destroy();
    }

    #getArrowSize() {
        const {arrow: arrowOption} = this.options;
        return typeof arrowOption === 'number' ? arrowOption : 8;
    }

    #createArrow() {
        const arrowSize = this.#getArrowSize();
        this.#arrowEl = document.createElement('div');
        this.#arrowEl.style.position = this.options.strategy as Strategy;
        this.#arrowEl.style.width = `${arrowSize}px`;
        this.#arrowEl.style.height = `${arrowSize}px`;
        this.#arrowEl.style.transform = 'rotate(45deg)';
        return this.#arrowEl;
    }

    #ensureTooltip() {
        const tooltipClass = Tooltip.TOOLTIP_CLASS;
        let tooltipElement: HTMLElement | null | undefined;
        if (this.isDynamic) {
            tooltipElement = document.createElement('div');
            const classOptions = this.options.className ? this.options.className.split(' ') : [];
            let classNames = [tooltipClass, this.options.type || ''];
            classNames = classNames.concat(classOptions);
            tooltipElement.classList.add(...classNames);
            tooltipElement[this.options.html ? 'innerHTML' : 'innerText'] = this.options.title || '';
        } else if (this.element) {
            const target = this.element.getAttribute('href') ?? this.element.dataset.target;
            if (target?.startsWith('#')) {
                tooltipElement = document.querySelector<HTMLElement>(target);
            }
            if (!tooltipElement) {
                const nextElement = this.element.nextElementSibling;
                if (nextElement?.classList.contains(tooltipClass)) {
                    tooltipElement = nextElement as HTMLElement;
                } else {
                    tooltipElement = this.element.parentNode?.querySelector(`.${tooltipClass}`);
                }
            }
        }

        if (this.options.arrow) {
            tooltipElement?.append(this.#createArrow());
        }
        if (!tooltipElement) {
            throw new Error('Tooltip: Cannot find tooltip element');
        }

        tooltipElement.style.width = 'max-content';
        tooltipElement.style.position = 'absolute';
        tooltipElement.style.top = '0';
        tooltipElement.style.left = '0';

        document.body.appendChild(tooltipElement);

        this.#tooltip = tooltipElement;
        return tooltipElement;
    }

    #getComputePositionConfig() {
        const arrowSize = this.#getArrowSize();
        const {strategy, placement} = this.options;
        const config: ComputePositionConfig = {
            middleware: [offset(arrowSize), flip()],
            strategy: strategy,
            placement: placement,
        };
        if (this.options.arrow && this.#arrowEl) {
            config.middleware?.push(arrow({element: this.#arrowEl}));
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

    #updatePosition() {
        const config = this.#getComputePositionConfig();
        const reference = this.#getReferenceElement();
        this.#cleanup = autoUpdate(reference, this.tooltip, () => {
            computePosition(reference, this.tooltip, config).then(({x, y, middlewareData, placement}) => {
                Object.assign(this.tooltip.style, {
                    left: `${x}px`,
                    top: `${y}px`,
                });

                const side = placement.split('-')[0] as Side;
                const staticSide = this.#getStaticSide(side);

                if (middlewareData.arrow && this.#arrowEl) {
                    const {x: arrowX, y: arrowY} = middlewareData.arrow;

                    Object.assign(this.#arrowEl.style, {
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

    #getReferenceElement(): VirtualElement {
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
    const toggleBtn = element.closest?.<HTMLElement>(Tooltip.MENU_SELECTOR);
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
    const toggleBtn = element.closest?.<HTMLElement>(Tooltip.MENU_SELECTOR);
    if (!toggleBtn) {
        return;
    }
    const tooltip = Tooltip.ensure(toggleBtn);
    if (tooltip.isHover) {
        tooltip.show();
    }
});
