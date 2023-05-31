import {render, h} from 'preact';
import {TimepickerOptions} from '../types';
import {Component} from '@zui/core';
import {TimePanel} from '../component/timePanel';
import '@zui/css-icons/src/icons/arrow.css';
import '../style/index.css';
import dayjs from 'dayjs';
import {computePosition, arrow, offset, flip, autoUpdate} from '@floating-ui/dom';
import type {ComputePositionConfig, VirtualElement, Strategy, Side} from '@floating-ui/dom';

export class Timepicker extends Component<TimepickerOptions> {

    static readonly NAME = 'timepicker';

    static readonly CLASSNAME = 'timepicker';

    static readonly CLASS_SHOW = 'show';

    static readonly MENU_SELECTOR = '.form-time input:not(.disabled):not(:disabled)';

    static DEFAULT: Partial<TimepickerOptions> = {
        value: dayjs().format('HH:mm:ss'),
        showSeconds: false,
        placement: 'bottom-start',
        strategy: 'absolute',
        arrow: true,
    };

    #virtualElement?: VirtualElement;

    #hideTimer = 0;

    #timepicker?: HTMLElement;

    #trigger?: MouseEvent | HTMLElement | DOMRect;

    #arrowEl?: HTMLDivElement;

    #cleanup?: () => void;

    get isShown() {
        return this.#timepicker?.classList.contains(Timepicker.CLASS_SHOW);
    }

    get timepicker() {
        return this.#timepicker || this.#ensureTimepicker();
    }

    get trigger() {
        return this.#trigger || this.element;
    }

    get elementShowClass() {
        return `with-${Timepicker.NAME}-show`;
    }

    show(trigger?: MouseEvent | HTMLElement | DOMRect) {
        this.#trigger = trigger;
        if (!this.timepicker || !this.element) {
            return false;
        }
        this.element.classList.add(this.elementShowClass);
        this.timepicker.classList.add(Timepicker.CLASS_SHOW);
        this.#updatePosition();
        return true;
    }

    hide() {
        this.#cleanup?.();
        this.element.classList.remove(this.elementShowClass);
        this.#timepicker?.classList.remove(Timepicker.CLASS_SHOW);
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

    #ensureTimepicker() {
        const timepickerClass = Timepicker.CLASSNAME;
        const pickerElement = document.createElement('div');
        pickerElement.classList.add(timepickerClass);
        render(h(TimePanel, {...this.options}), pickerElement);
        if (this.options.arrow) {
            pickerElement.append(this.#createArrow());
        }

        pickerElement.style.width = 'max-content';
        pickerElement.style.position = this.options.strategy as Strategy;
        pickerElement.style.top = '0';
        pickerElement.style.left = '0';

        document.body.appendChild(pickerElement);
        this.#timepicker = pickerElement;
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
        this.#cleanup = autoUpdate(reference, this.timepicker, () => {
            computePosition(reference, this.timepicker, config).then(({x, y, middlewareData, placement}) => {
                Object.assign(this.timepicker.style, {
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
