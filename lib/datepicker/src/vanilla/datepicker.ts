import {render, h} from 'preact';
import {DatepickerOptions} from '../types';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {Calendar} from '../component/calendar';
import '@zui/css-icons/src/icons/arrow.css';
import '../style/index.css';
import dayjs from 'dayjs';
import {computePosition, VirtualElement, arrow, flip, offset, ComputePositionConfig} from '@floating-ui/dom';

export class Datepicker extends ComponentBase<DatepickerOptions> {

    static NAME = 'datepicker';

    static CLASSNAME = 'datepicker';

    static CLASS_SHOW = 'show';

    static MENU_SELECTOR = '.form-datetime:not(.disabled):not(:disabled)';

    static DEFAULT = {
        date: dayjs().format('YYYY-MM-DD'),
        format: 'YYYY-MM-DD',
        showOtherMonth: true,
        placement: 'bottom-start',
        strategy: 'absolute',
        trigger: 'click',
        showToday: true,
        arrow: true,
    };

    #virtualElement?: VirtualElement;

    #hideTimer = 0;

    #arrowEl?: HTMLElement;

    #datepicker?: HTMLElement;

    #trigger?: MouseEvent | HTMLElement | DOMRect;

    get isShown() {
        return this.#datepicker?.classList.contains((this.constructor as typeof Datepicker).CLASS_SHOW);
    }

    get datepicker(): HTMLElement {
        return this.#datepicker || this.#ensureDatepicker();
    }

    get trigger() {
        return this.#trigger || this.element;
    }

    get elementShowClass() {
        return `with-${(this.constructor as typeof Datepicker).NAME}-show`;
    }

    show(trigger?: MouseEvent | HTMLElement | DOMRect): boolean {
        this.#trigger = trigger;
        if (!this.datepicker || !this.element) {
            return false;
        }
        this.element.classList.add(this.elementShowClass);
        this.datepicker.classList.add((this.constructor as typeof Datepicker).CLASS_SHOW);
        this.datepicker.classList.add('fade');
        this.#updatePosition();
        return true;
    }

    hide(): boolean {
        this.element.classList.remove(this.elementShowClass);
        this.#datepicker?.classList.remove((this.constructor as typeof Datepicker).CLASS_SHOW);
        this.datepicker.classList.remove('fade');
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
        this.#arrowEl.style.transform = 'rotate(45deg)';
        this.#arrowEl.style.border = 'inherit';
        this.#arrowEl.style.background = 'inherit';
        // this.#arrowEl.style.borderTopStyle = 'none';
        // this.#arrowEl.style.borderLeftStyle = 'none';
        return div;
    }

    #ensureDatepicker() {
        const datepickerClass = (this.constructor as typeof Datepicker).CLASSNAME;
        const pickerElement = document.createElement('div');
        pickerElement.classList.add(datepickerClass);
        render(h(Calendar, {...this.options}), pickerElement);
        if (this.options.arrow) {
            pickerElement.append(this.#createArrow());
        }
        pickerElement.style.width = 'max-content';
        pickerElement.style.position = 'absolute';
        pickerElement.style.top = '0';
        pickerElement.style.left = '0';
        document.body.appendChild(pickerElement);
        this.#datepicker = pickerElement;
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
        computePosition(this.#getReferenceElement(), this.datepicker, config).then(({x, y, middlewareData}) => {
            Object.assign(this.datepicker.style, {
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

    static clear(options?: {event?: Event, exclude?: HTMLElement[], ignoreSelector?: string} | Event) {
        if (options instanceof Event) {
            options = {event: options};
        }
        const {event, exclude, ignoreSelector = '.not-hide-datepicker'} = options || {};
        if (event && ignoreSelector && (event.target as HTMLElement).closest?.(ignoreSelector)) {
            return;
        }

        const all = this.getAll().entries();
        const excludeSet = new Set(exclude || []);
        for (const [ele, datepicker] of all) {
            if (excludeSet.has(ele)) {
                continue;
            }
            datepicker.hide();
        }
    }

}

document.addEventListener('click', function (event) {
    const element = event.target as HTMLElement;
    const toggleBtn = element.closest<HTMLElement>(Datepicker.MENU_SELECTOR);
    const tdElement = element.closest<HTMLElement>('.datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table');

    if (toggleBtn) {
        const datepicker = Datepicker.ensure(toggleBtn);
        datepicker.toggle();
    } else if (!tdElement) {
        Datepicker.clear({event});
    }
});

const handleScroll = (event: Event) => {
    const element = document.getElementsByClassName('with-datepicker-show')[0];
    if (!element) {
        return;
    }
    const toggleBtn = typeof element.closest === 'function' ? element.closest<HTMLElement>(Datepicker.MENU_SELECTOR) : null;
    if (!toggleBtn || !(event.target as HTMLElement).contains(toggleBtn)) {
        return;
    }
    Datepicker.clear({event});
};

window.addEventListener('scroll', handleScroll, true);

