import '@zui/css-icons/src/icons/arrow.css';
import {render, h} from 'preact';
import {DatetimepickerOptions} from '../types';
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

export class Datetimepicker extends ComponentBase<DatetimepickerOptions> {

    static NAME = 'datetimepicker';

    static CLASSNAME = 'datetimepicker';

    static CLASS_SHOW = 'show';

    static MENU_SELECTOR = '.form-datetime:not(.disabled):not(:disabled)';

    static DEFAULT = {
        date: dayjs().format('YYYY-MM-DD'),
        format: 'YYYY-MM-DD',
        showOtherMonth: true,
        minYear: 1911,
        placement: 'bottom-start',
        strategy: 'absolute',
        trigger: 'click',
        showToday: true,
        arrow: true,
    } as Partial<DatetimepickerOptions>;

    #virtualElement?: VirtualElement;

    #hideTimer = 0;

    #datetimepicker?: HTMLElement;

    #popper?: PopperInstance;

    #trigger?: MouseEvent | HTMLElement | DOMRect;

    get isShown() {
        return this.#datetimepicker?.classList.contains((this.constructor as typeof Datetimepicker).CLASS_SHOW);
    }

    get datetimepicker(): HTMLElement {
        return this.#datetimepicker || this._ensureDatetimepicker();
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
        return `with-${(this.constructor as typeof Datetimepicker).NAME}-show`;
    }

    // constructor(element: HTMLElement, props: DatetimepickerOptions) {
    //     super(props);
    //     console.log(props);
    //     this.props = props;
    //     this.#element = element;
    //     this._ensureDatetimepicker();
    // }

    // init(): void {}

    show(trigger?: MouseEvent | HTMLElement | DOMRect): boolean {
        this.#trigger = trigger;
        this.element.classList.add(this.elementShowClass);
        this.datetimepicker?.classList.add((this.constructor as typeof Datetimepicker).CLASS_SHOW);
        this.datetimepicker.classList.add('fade');
        this._createPopper().update();
        return true;
    }

    hide(): boolean {
        this.#popper?.destroy();
        this.#popper = undefined;
        this.element.classList.remove(this.elementShowClass);
        this.#datetimepicker?.classList.remove((this.constructor as typeof Datetimepicker).CLASS_SHOW);
        this.datetimepicker.classList.remove('fade');
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
        div.classList.add('arrow', 'datetimepicker-arrow');
        div.style.setProperty('--arrow-size', `${this._getArrowSize()}px`);
        return div;
    }

    _ensureDatetimepicker() {
        const datetimepickerClass = (this.constructor as typeof Datetimepicker).CLASSNAME;
        const pickerElement = document.createElement('div');
        pickerElement.classList.add(datetimepickerClass);
        render(h(Calendar, {...this.options}), pickerElement);
        if (this.options.arrow) {
            pickerElement.prepend(this._createArrow());
        }
        document.body.appendChild(pickerElement);
        this.#datetimepicker = pickerElement;
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
                    name: 'datetimepicker',
                    enabled: true,
                    phase: 'beforeWrite',
                    fn: ({state}) => {
                        const placement = state.placement?.split('-').shift() || '';
                        this.datetimepicker.querySelector('.arrow')?.setAttribute('class', `arrow arrow-${placement}`);
                        this.element.setAttribute('data-datetimepicker-placement', placement);
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
            this.#popper = createPopper(this._getPopperElement(), this.datetimepicker, options);
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

    static clear(options?: {event?: Event, exclude?: HTMLElement[]} | Event) {
        if (options instanceof Event) {
            options = {event: options};
        }
        const {exclude} = options || {};
        const all = this.getAll().entries();
        const excludeSet = new Set(exclude || []);
        for (const [ele, datetimepicker] of all) {
            if (excludeSet.has(ele)) {
                continue;
            }
            datetimepicker.hide();
        }
    }
    
}

document.addEventListener('click', function (event) {
    const element = event.target as HTMLElement;
    const toggleBtn = element.closest<HTMLElement>(Datetimepicker.MENU_SELECTOR);
    const tdElement = element.closest<HTMLElement>('.calendar-bar, .calendar-table-head, .calendar-month-table');

    if (toggleBtn) {
        const datetimepicker = Datetimepicker.ensure(toggleBtn);
        datetimepicker.toggle();
    } else if (!tdElement) {
        Datetimepicker.clear({event});
    }
});

const handleScroll = (event: Event) => {
    const element = document.getElementsByClassName('with-datetimepicker-show')[0];
    if (!element) {
        return;
    }
    const toggleBtn = typeof element.closest === 'function' ? element.closest<HTMLElement>(Datetimepicker.MENU_SELECTOR) : null;
    if (!toggleBtn || !(event.target as HTMLElement).contains(toggleBtn)) {
        return;
    }
    Datetimepicker.clear({event});
};

window.addEventListener('scroll', handleScroll, true);

