import {render, h} from 'preact';
import {Component} from '@zui/core';
import {Calendar} from '../component/calendar';
import '@zui/css-icons/src/icons/arrow.css';
import '../style/index.css';
import dayjs from 'dayjs';
import {computePosition, arrow, flip, offset, autoUpdate} from '@floating-ui/dom';
import type {DatepickerOptions} from '../types';
import type {VirtualElement, ComputePositionConfig, Strategy, Side} from '@floating-ui/dom';

export class Datepicker extends Component<DatepickerOptions> {

    static readonly NAME = 'datepicker';

    static readonly CLASSNAME = 'datepicker';

    static readonly CLASS_SHOW = 'show';

    static MENU_SELECTOR = '.form-datetime:not(.disabled):not(:disabled)';

    static DEFAULT: Partial<DatepickerOptions> = {
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

    #arrowEl?: HTMLDivElement;

    #datepicker?: HTMLDivElement;

    #trigger?: MouseEvent | HTMLElement | DOMRect;

    #cleanup?: () => void;

    get isShown() {
        return this.#datepicker?.classList.contains(Datepicker.CLASS_SHOW);
    }

    get datepicker() {
        return this.#datepicker || this.#ensureDatepicker();
    }

    get trigger() {
        return this.#trigger || this.element;
    }

    get elementShowClass() {
        return `with-${Datepicker.NAME}-show`;
    }

    show(trigger?: MouseEvent | HTMLElement | DOMRect) {
        this.#trigger = trigger;
        if (!this.datepicker || !this.element) {
            return false;
        }
        this.$element.addClass(this.elementShowClass);
        this.datepicker.classList.add(Datepicker.CLASS_SHOW);
        this.datepicker.classList.add('fade');
        this.#updatePosition();
        return true;
    }

    hide() {
        this.#cleanup?.();
        this.$element.removeClass(this.elementShowClass);
        this.#datepicker?.classList.remove(Datepicker.CLASS_SHOW);
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

    #getArrowSize() {
        const {arrow: arrowOption} = this.options;
        return typeof arrowOption === 'number' ? arrowOption : 8;
    }

    #createArrow() {
        const arrowSize = this.#getArrowSize();
        this.#arrowEl = document.createElement('div');
        this.#arrowEl.style.position = 'absolute';
        this.#arrowEl.style.width = `${arrowSize}px`;
        this.#arrowEl.style.height = `${arrowSize}px`;
        this.#arrowEl.style.transform = 'rotate(45deg)';
        return this.#arrowEl;
    }

    #ensureDatepicker() {
        const datepickerClass = Datepicker.CLASSNAME;
        const pickerElement = document.createElement('div');
        pickerElement.classList.add(datepickerClass);
        render(h(Calendar, {...this.options}), pickerElement);
        if (this.options.arrow) {
            pickerElement.append(this.#createArrow());
        }
        pickerElement.style.width = 'max-content';
        pickerElement.style.position = this.options.strategy as Strategy;
        pickerElement.style.top = '0';
        pickerElement.style.left = '0';
        document.body.appendChild(pickerElement);
        this.#datepicker = pickerElement;
        return pickerElement;
    }

    #getComputePositionConfig() {
        const arrowSize = this.#getArrowSize();
        const {strategy, placement} = this.options;
        const config: Partial<ComputePositionConfig> = {
            middleware: [offset(arrowSize), flip()],
            strategy,
            placement,
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
        this.#cleanup = autoUpdate(reference, this.datepicker, () => {
            computePosition(reference, this.datepicker, config).then(({x, y, middlewareData, placement}) => {
                Object.assign(this.datepicker.style, {
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
                contextElement: this.element,
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
    const toggleBtn = element.closest?.<HTMLElement>(Datepicker.MENU_SELECTOR);
    const tdElement = element.closest?.<HTMLElement>('.datepicker-calendar-bar, .datepicker-calendar-thead, .datepicker-calendar-month-table');

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
    const toggleBtn = element.closest?.<HTMLElement>(Datepicker.MENU_SELECTOR);
    if (!toggleBtn || !(event.target as HTMLElement).contains(toggleBtn)) {
        return;
    }
    Datepicker.clear({event});
};

window.addEventListener('scroll', handleScroll, true);
