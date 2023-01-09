import {render, h} from 'preact';
import {TimepickerOptions} from '../types';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {TimePanel} from '../component/timePanel';
import '@zui/css-icons/src/icons/arrow.css';
import '../style/index.css';
import dayjs from 'dayjs';
import {computePosition, ComputePositionConfig, arrow, offset, flip, VirtualElement} from '@floating-ui/dom';

export class Timepicker extends ComponentBase<TimepickerOptions> {

    static NAME = 'timepicker';

    static CLASSNAME = 'timepicker';

    static CLASS_SHOW = 'show';

    static MENU_SELECTOR = '.form-time input:not(.disabled):not(:disabled)';

    static DEFAULT = {
        value: dayjs().format('HH:mm:ss'),
        showSeconds: false,
        placement: 'bottom-start',
        strategy: 'absolute',
        // trigger: 'click',
        arrow: true,
    } as Partial<TimepickerOptions>;

    #virtualElement?: VirtualElement;

    #hideTimer = 0;

    #timepicker?: HTMLElement;

    #trigger?: MouseEvent | HTMLElement | DOMRect;

    #arrowEl?: HTMLElement;

    get isShown() {
        return this.#timepicker?.classList.contains((this.constructor as typeof Timepicker).CLASS_SHOW);
    }

    get timepicker(): HTMLElement {
        return this.#timepicker || this.#ensureTimepicker();
    }

    get trigger() {
        return this.#trigger || this.element;
    }

    get elementShowClass() {
        return `with-${(this.constructor as typeof Timepicker).NAME}-show`;
    }

    show(trigger?: MouseEvent | HTMLElement | DOMRect): boolean {
        this.#trigger = trigger;
        if (!this.timepicker || !this.element) {
            return false;
        }
        this.element.classList.add(this.elementShowClass);
        this.timepicker.classList.add((this.constructor as typeof Timepicker).CLASS_SHOW);
        this.#updatePosition();
        return true;
    }

    hide(): boolean {
        this.element.classList.remove(this.elementShowClass);
        this.#timepicker?.classList.remove((this.constructor as typeof Timepicker).CLASS_SHOW);
        return true;
    }

    toggle(event?: MouseEvent) {
        return this.isShown ? this.hide() : this.show(event);
    }

    hideLater = () => {
        this.#cancelHide();
        this.#hideTimer = window.setTimeout(this.hide.bind(this), 100);
    };

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
        this.#arrowEl.style.transform = 'rotate(45deg)';
        this.#arrowEl.style.background = 'inherit';
        this.#arrowEl.style.border = 'inherit';
        this.#arrowEl.style.borderBottomStyle = 'none';
        this.#arrowEl.style.borderRightStyle = 'none';
        return div;
    }

    #ensureTimepicker() {
        const timepickerClass = (this.constructor as typeof Timepicker).CLASSNAME;
        const pickerElement = document.createElement('div');
        pickerElement.classList.add(timepickerClass);
        render(h(TimePanel, {...this.options}), pickerElement);
        if (this.options.arrow) {
            pickerElement.append(this.#createArrow());
        }

        pickerElement.style.width = 'max-content';
        pickerElement.style.position = 'absolute';
        pickerElement.style.top = '0';
        pickerElement.style.left = '0';

        document.body.appendChild(pickerElement);
        this.#timepicker = pickerElement;
        return pickerElement;
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
        computePosition(this.#getReferenceElement(), this.timepicker, config).then(({x, y, middlewareData}) => {
            Object.assign(this.timepicker.style, {
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

    static show(options: TimepickerOptions & {event?: MouseEvent}) {
        const {event, ...otherOptions} = options;
        const timepicker = this.ensure(document.body);
        if (Object.keys(otherOptions).length) {
            timepicker.setOptions(otherOptions);
        }
        timepicker.show(event);
        event?.stopPropagation?.();
        return timepicker;
    }

    static hide() {
        const timepicker = this.get(document.body);
        timepicker?.hide();
        return timepicker;
    }

    static clear(options?: {event?: Event, exclude?: HTMLElement[], ignoreSelector?: string} | Event) {
        if (options instanceof Event) {
            options = {event: options};
        }
        const {event, exclude, ignoreSelector = '.not-hide-timepicker'} = options || {};
        if (event && ignoreSelector && (event.target as HTMLElement).closest?.(ignoreSelector)) {
            return;
        }

        const all = this.getAll().entries();
        const excludeSet = new Set(exclude || []);
        for (const [ele, timepicker] of all) {
            if (excludeSet.has(ele)) {
                continue;
            }
            timepicker.hide();
        }
    }

}

document.addEventListener('click', function (event) {
    const element = event.target as HTMLElement;
    const toggleBtn = element.closest<HTMLElement>(Timepicker.MENU_SELECTOR);
    if (toggleBtn) {
        const timepicker = Timepicker.ensure(toggleBtn);
        timepicker.toggle();
    } else {
        Timepicker.clear({event});
    }
});

const handleScroll = (event: Event) => {
    const element = document.getElementsByClassName('with-timepicker-show')[0];
    if (!element) {
        return;
    }
    const toggleBtn = typeof element.closest === 'function' ? element.closest<HTMLElement>(Timepicker.MENU_SELECTOR) : null;
    if (!toggleBtn || !(event.target as HTMLElement).contains(toggleBtn)) {
        return;
    }
    Timepicker.clear({event});
};

window.addEventListener('scroll', handleScroll, true);

