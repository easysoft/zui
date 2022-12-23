import {render, h} from 'preact';
import {TimepickerOptions} from '../types';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {TimePanel} from '../component/timePanel';
import '@zui/css-icons/src/icons/arrow.css';
import {createPopper, Options as PopperOptions, Instance as PopperInstance, VirtualElement} from '@popperjs/core/lib/popper-lite';
import arrow from '@popperjs/core/lib/modifiers/arrow';
import offset from '@popperjs/core/lib/modifiers/offset';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import flip from '@popperjs/core/lib/modifiers/flip';
import '../style/index.css';
import dayjs from 'dayjs';

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

    #popper?: PopperInstance;

    #trigger?: MouseEvent | HTMLElement | DOMRect;

    get isShown() {
        return this.#timepicker?.classList.contains((this.constructor as typeof Timepicker).CLASS_SHOW);
    }

    get timepicker(): HTMLElement {
        return this.#timepicker || this._ensureTimepicker();
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
        return `with-${(this.constructor as typeof Timepicker).NAME}-show`;
    }

    show(trigger?: MouseEvent | HTMLElement | DOMRect): boolean {
        this.#trigger = trigger;
        if (!this.timepicker || !this.element) {
            return false;
        }
        this.element.classList.add(this.elementShowClass);
        this.timepicker.classList.add((this.constructor as typeof Timepicker).CLASS_SHOW);
        this._createPopper().update();
        return true;
    }

    hide(): boolean {
        this.#popper?.destroy();
        this.#popper = undefined;
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

    destroy(): void {
        super.destroy();
    }

    _getArrowSize() {
        const {arrow: arrowOption} = this.options;
        return typeof arrowOption === 'number' ? arrowOption : 4;
    }

    _createArrow(): HTMLElement {
        const div = document.createElement('div');
        div.classList.add('arrow', 'timepicker-arrow');
        div.style.setProperty('--arrow-size', `${this._getArrowSize()}px`);
        return div;
    }

    _ensureTimepicker() {
        const timepickerClass = (this.constructor as typeof Timepicker).CLASSNAME;
        const pickerElement = document.createElement('div');
        pickerElement.classList.add(timepickerClass);
        render(h(TimePanel, {...this.options}), pickerElement);
        if (this.options.arrow) {
            pickerElement.prepend(this._createArrow());
        }
        document.body.appendChild(pickerElement);
        this.#timepicker = pickerElement;
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
                    name: 'timepicker',
                    enabled: true,
                    phase: 'beforeWrite',
                    fn: ({state}) => {
                        const placement = state.placement?.split('-').shift() || '';
                        this.timepicker.querySelector('.arrow')?.setAttribute('class', `arrow arrow-${placement}`);
                        this.element.setAttribute('data-timepicker-placement', placement);
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
            this.#popper = createPopper(this._getPopperElement(), this.timepicker, options);
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

