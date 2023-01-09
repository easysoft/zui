import '@zui/css-icons/src/icons/arrow.css';
import {TooltipOptions, TooltipTrigger} from '../types';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import '../style/index.css';
import {computePosition, VirtualElement, offset, flip, arrow, ComputePositionConfig} from '@floating-ui/dom';

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

    #arrowEl?: HTMLElement;

    #trigger?: TooltipTrigger;

    get isShown() {
        return this.#tooltip?.classList.contains((this.constructor as typeof Tooltip).CLASS_SHOW);
    }

    get tooltip(): HTMLElement {
        return this.#tooltip || this.#ensureTooltip();
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
        this.tooltip.classList.add((this.constructor as typeof Tooltip).CLASS_SHOW);

        this.#updatePosition();
        return true;
    }

    hide() {
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
        return typeof arrowOption === 'number' ? arrowOption : 4;
    }

    #createArrow(): HTMLElement {
        const div = document.createElement('div');
        this.#arrowEl = div;
        this.#arrowEl.style.position = 'absolute';
        this.#arrowEl.style.width = '8px';
        this.#arrowEl.style.height = '8px';
        if (this.options.className) {
            this.#arrowEl.className = this.options.className;
        }
        if (this.options.type) {
            this.#arrowEl.classList.add(this.options.type);
        }
        this.#arrowEl.style.transform = 'rotate(45deg)';
        this.#arrowEl.style.borderTopStyle = 'none';
        this.#arrowEl.style.borderLeftStyle = 'none';
        return div;
    }

    #ensureTooltip() {
        const tooltipClass = (this.constructor as typeof Tooltip).TOOLTIP_CLASS;
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
        const config: Partial<ComputePositionConfig> = {
            middleware: [offset(arrowSize + 3), flip()],
        };
        if (this.options.arrow && this.#arrowEl) {
            config.middleware?.push(arrow({element: this.#arrowEl}));
        }
        if (this.options.placement) {
            config.placement = this.options.placement;
        }
        return config;
    }

    #updatePosition() {
        const config = this.#getComputePositionConfig();
        computePosition(this.#getReferenceElement(), this.tooltip, config).then(({x, y, middlewareData}) => {
            Object.assign(this.tooltip.style, {
                left: `${x}px`,
                top: `${y}px`,
            });

            if (this.options.placement) {
                const side = this.options.placement.split('-')[0];

                const staticSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                }[side] as string;

                if (middlewareData.arrow && this.#arrowEl) {
                    const {x: arrowX, y: arrowY} = middlewareData.arrow;

                    Object.assign(this.#arrowEl.style, {
                        left: arrowX != null ? `${arrowX}px` : '',
                        top: arrowY != null ? `${arrowY}px` : '',
                        [staticSide]: `${-this.#arrowEl.offsetWidth / 2}px`,
                    });
                }
            }

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
