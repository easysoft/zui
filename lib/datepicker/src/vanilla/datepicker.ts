import '@zui/css-icons/src/icons/arrow.css';
import {render, h} from 'preact';
import {DatepickerOptions} from '../types';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import '../style/index.css';
import {Calendar} from '../component/calendar';
import '@zui/css-icons/src/icons/arrow.css';
import {createPopper, Options as PopperOptions, Instance as PopperInstance, VirtualElement} from '@popperjs/core/lib/popper-lite';
import arrow from '@popperjs/core/lib/modifiers/arrow';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import flip from '@popperjs/core/lib/modifiers/flip';
import '../style/index.css';
import dayjs from 'dayjs';

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
    } as Partial<DatepickerOptions>;

    #virtualElement?: VirtualElement;

    #hideTimer = 0;

    #datepicker?: HTMLElement;

    #popper?: PopperInstance;

    #trigger?: MouseEvent | HTMLElement | DOMRect;

    get isShown() {
        return this.#datepicker?.classList.contains((this.constructor as typeof Datepicker).CLASS_SHOW);
    }

    get datepicker(): HTMLElement {
        return this.#datepicker || this._ensureDatepicker();
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
        this._createPopper().update();
        return true;
    }

    hide(): boolean {
        this.#popper?.destroy();
        this.#popper = undefined;
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

    destroy(): void {
        super.destroy();
    }

    _getArrowSize() {
        const {arrow: arrowOption} = this.options;
        return typeof arrowOption === 'number' ? arrowOption : 4;
    }

    _createArrow(): HTMLElement {
        const div = document.createElement('div');
        div.classList.add('arrow', 'datepicker-arrow');
        div.style.setProperty('--arrow-size', `${this._getArrowSize()}px`);
        return div;
    }

    _ensureDatepicker() {
        const datepickerClass = (this.constructor as typeof Datepicker).CLASSNAME;
        const pickerElement = document.createElement('div');
        pickerElement.classList.add(datepickerClass);
        render(h(Calendar, {...this.options}), pickerElement);
        if (this.options.arrow) {
            pickerElement.prepend(this._createArrow());
        }
        document.body.appendChild(pickerElement);
        this.#datepicker = pickerElement;
        return pickerElement;
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
                    name: 'datepicker',
                    enabled: true,
                    phase: 'beforeWrite',
                    fn: ({state}) => {
                        const placement = state.placement?.split('-').shift() || '';
                        this.datepicker.querySelector('.arrow')?.setAttribute('class', `arrow arrow-${placement}`);
                        this.element.setAttribute('data-datepicker-placement', placement);
                    },
                },
            ].filter(Boolean),
            placement: this.options.placement,
            strategy: 'absolute',
        } as PopperOptions;
    }

    _createPopper() {
        const options = this._getPopperOptions();
        if (this.#popper) {
            this.#popper.setOptions(options);
        } else {
            this.#popper = createPopper(this._getPopperElement(), this.datepicker, options);
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

