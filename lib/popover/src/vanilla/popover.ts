import {arrow, computePosition, flip, shift, size, autoUpdate, offset, VirtualElement, ReferenceElement, ComputePositionConfig} from '@floating-ui/dom';
import {Component, $, ComponentEvents, JSX} from '@zui/core';
import {PopoverEvents, PopoverOptions, PopoverPanelOptions} from '../types';
import {PopoverPanel} from './popover-panel';
import {isElementDetached} from '@zui/core/src/dom';

const CLASS_SHOW = 'show';

const CLASS_SHOWN = 'in';

export type PopoverShowOptions = {
    delay?: number | boolean;
    event?: Event;
    hideOthers?: boolean;
};

export class Popover<O extends PopoverOptions = PopoverOptions, E extends ComponentEvents = {}> extends Component<O, [PopoverEvents, E], HTMLElement> {
    static NAME = 'Popover';

    static Z_INDEX = 1700;

    static MULTI_INSTANCE = true;

    static DEFAULT: Partial<PopoverOptions> = {
        placement: 'top',
        strategy: 'absolute',
        flip: true,
        arrow: true,
        offset: 1,
        trigger: 'click',
        mask: true,
        delay: 0,
        animation: true,
        closeBtn: true,
        popup: true,
    };

    static hideOthers = false;

    protected declare _virtual: boolean;

    protected declare _dynamic: boolean;

    protected declare _triggerElement: HTMLElement | VirtualElement;

    protected declare _triggerEvent?: Event;

    protected declare _targetElement?: HTMLElement;

    protected declare _showAfterInit: boolean;

    protected declare _shown: boolean;

    protected declare _id: string;

    protected declare _timer: number;

    protected declare _panel?: PopoverPanel;

    protected declare _layoutWatcher?: () => void;

    protected declare _hideTimer?: number;

    get shown() {
        return this._shown;
    }

    get id() {
        return this._id;
    }

    afterInit() {
        const {trigger, id, triggerEvent} = this.options;

        this._triggerEvent = triggerEvent;
        this._id = id || `popover_${this.gid}`;

        const triggerElement = this.getTriggerElement();
        if (triggerElement instanceof HTMLElement) {
            const $triggerElement = $(triggerElement);
            const {namespace} = this;
            if (trigger === 'hover') {
                $triggerElement.on(`pointerenter${namespace}`, (event: MouseEvent) => {
                    if ($triggerElement.is('[disabled],.disabled')) {
                        return;
                    }
                    const target = $triggerElement.dataset('target');
                    if (target) {
                        this.setOptions({target} as Partial<O>);
                    }
                    this.show({delay: true, event});
                }).on(`pointerleave${namespace} pointercancel${namespace}`, () => {
                    this.delayHide();
                });
            } else if (trigger) {
                $triggerElement.on(`${trigger}${namespace}`, (event: Event) => {
                    if ($triggerElement.is('[disabled],.disabled')) {
                        return;
                    }
                    const target = $triggerElement.dataset('target');
                    if (!this.shown && target) {
                        this.setOptions({target} as Partial<O>);
                    }
                    this.toggle({event});
                    event.preventDefault();
                });
            }
        }
        const {show} = this.options;
        if (show) {
            this.show({delay: typeof show === 'number' ? show : false});
        }
    }

    getTriggerElement(): HTMLElement | VirtualElement {
        if (!this._triggerElement) {
            let {element = this.element} = this.options;
            if (element === document.body) {
                element = {
                    getBoundingClientRect: this._getClickBounding,
                };
            }
            this._triggerElement = element;
            this._virtual = !(element instanceof HTMLElement);
        }
        return this._triggerElement;
    }

    initTarget(): HTMLElement | undefined {
        let target = this.options.target;
        this._dynamic = !target;
        if (!target) {
            return this._createTarget();
        }
        if (typeof target === 'function') {
            target = target();
        }
        if (typeof target === 'string') {
            if (target === '$next') {
                target = $(this._triggerElement as HTMLElement).next();
            } else if (target.startsWith('$target:')) {
                target = $(this._triggerElement as HTMLElement).closest(target.slice(8));
            }
        }
        return $(target)[0];
    }

    show(options?: PopoverShowOptions) {
        const {delay, event, hideOthers} = options || {};
        if (event) {
            this._triggerEvent = event;
        }

        if (delay) {
            return this._resetTimer(() => {
                this.show();
            }, delay === true ? this.options.delay : delay);
        }

        if (!this.inited) {
            this.setOptions({show: true} as Partial<O>);
            return;
        }

        if (this._shown) {
            return;
        }

        const target = this.initTarget();
        if (!target) {
            return;
        }
        this._targetElement = target;
        const $target = $(target);
        const {animation, mask, onShow, onShown, trigger} = this.options;
        $target.addClass(CLASS_SHOW);
        if (animation) {
            $target.addClass(animation === true ? 'fade' : animation);
        }
        this._shown = true;
        this.render();
        onShow?.call(this);
        this.emit('show');

        /* Hide other shown modals. */
        const constructor = this.constructor as typeof Popover;
        const {hideOthers: hideOthersOption} = this.options;
        if (hideOthers || (constructor.hideOthers && this.options.hideOthers !== false) || hideOthersOption) {
            constructor.getAll().forEach((popover) => {
                if (popover !== this && popover.shown && !$target.closest(popover.element).length) {
                    popover.hide();
                }
            });
        }

        const {namespace} = this;
        if (trigger === 'hover') {
            this._clearDelayHide();
            $target
                .off(namespace)
                .on(`pointerenter${namespace}`, () => {
                    this._clearDelayHide();
                })
                .on(`pointerleave${namespace}`, () => {
                    this.delayHide();
                });
        }
        $target.on(`click${namespace}`, '[data-dismiss="popover"]', () => {
            this.hide();
        });

        if (!this._virtual) {
            $(this._triggerElement as HTMLElement).addClass('with-popover-show');
        }

        this._resetTimer(() => {
            $target.addClass(CLASS_SHOWN);

            this._resetTimer(() => {
                onShown?.call(this);
                this.emit('shown');
            }, 200);

            if (mask) {
                $(document).off(`click${this.namespace}`, this._onClickDoc).on(`click${this.namespace}`, this._onClickDoc);
            }
        }, 50);
    }

    hide(destroy?: boolean) {
        if (!this._shown || !this._targetElement) {
            this._resetTimer();
        }

        const {destroyOnHide, animation, onHide, onHidden, trigger} = this.options;
        const $target = $(this._targetElement as HTMLElement);
        this._shown = false;
        onHide?.call(this);
        this.emit('hide');
        $target.removeClass(CLASS_SHOWN);

        if (trigger === 'hover') {
            this._clearDelayHide();
            $target.off(this.namespace);
        }

        if (!this._virtual) {
            $(this._triggerElement as HTMLElement).removeClass('with-popover-show').removeAttr('data-pop-placement');
        }

        $(document).off(this.namespace);

        this._resetTimer(() => {
            onHidden?.call(this);
            this.emit('hidden');
            $target.removeClass(CLASS_SHOW);

            if (destroyOnHide || destroy) {
                this._resetTimer(() => {
                    this.destroy();
                }, (!destroy && typeof destroyOnHide === 'number') ? destroyOnHide : 0);
            }
            this._destoryTarget();
        }, (animation && !destroy) ? 200 : 0);
    }

    toggle(options?: PopoverShowOptions) {
        if (this._shown) {
            this.hide();
        } else {
            this.show(options);
        }
    }

    destroy(): void {
        super.destroy();
        $(document).off(this.namespace);
        if (!this._virtual) {
            const {namespace} = this;
            $(this._triggerElement as HTMLElement).off(namespace);
        }
        this._resetTimer();
        this._destoryTarget();
        this._clearDelayHide();
    }

    layout() {
        const trigger = this._triggerElement;
        const target = this._targetElement;
        const layoutWatcher = this._layoutWatcher;
        if (!target || !trigger || !this._shown) {
            if (layoutWatcher) {
                layoutWatcher();
                this._layoutWatcher = undefined;
            }
            return;
        }

        if (layoutWatcher) {
            return;
        }

        this._layoutWatcher = autoUpdate(trigger, target, () => {
            const {animation, name = 'popover'} = this.options;
            if (!this._virtual) {
                const style: JSX.CSSProperties = {};
                const {width, height} = this.options;
                if (width) {
                    style.width = typeof width === 'function' ? width() : (width === '100%' ? $(trigger as HTMLElement).outerWidth() : width);
                }
                if (height) {
                    style.height = typeof height === 'function' ? height() : height;
                }
                if (Object.keys(style).length) {
                    $(target).css(style);
                }
            }
            computePosition(...this._getLayoutOptions()).then(({x, y, middlewareData, placement, strategy}) => {
                if (trigger instanceof HTMLElement && isElementDetached(trigger)) {
                    this.hide(true);
                    return;
                }
                const style: JSX.CSSProperties = {
                    position: strategy,
                    left: x,
                    top: y,
                };
                const $target = $(target).css(style);
                const popSide = placement.split('-')[0] as string;
                const arrowSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                }[popSide] as string;
                const arrowPosition = middlewareData.arrow;
                if (arrowPosition) {
                    $target.attr('data-pop-placement', popSide).find('.arrow').css({
                        left: arrowPosition.x,
                        top: arrowPosition.y,
                    }).attr('class', `arrow ${name}-arrow arrow-${arrowSide}`);
                }
                if (animation === true) {
                    $target.attr('class', `${$target.attr('class')!.split(' ').filter(n => n !== 'fade' && !n.startsWith('fade-from')).join(' ')} fade-from-${arrowSide}`);
                }
                if (!this._virtual) {
                    $(this._triggerElement as HTMLElement).attr('data-pop-placement', popSide);
                }
            });
        });
    }

    render(options?: Partial<O>) {
        super.render(options);
        const targetElement = this._targetElement;
        if (!targetElement) {
            return;
        }
        const panelOptions = this._getRenderOptions();
        const $targetElement = $(targetElement);
        $targetElement.toggleClass('popup', panelOptions.popup).css(panelOptions.style!);
        if (panelOptions.className) {
            $targetElement.setClass(panelOptions.className);
        }
        if (this._dynamic) {
            let panel = this._panel;
            if (panel && panel.element !== targetElement) {
                panel.destroy();
                panel = undefined;
            }
            if (panel) {
                panel.render(panelOptions);
            } else {
                panel = new PopoverPanel(targetElement, panelOptions);
                panel.on('inited', () => this.layout());
            }
            this._panel = panel;
        } else {
            if (panelOptions.arrow) {
                const $arrowElement = $targetElement.find('.arrow');
                if (!$arrowElement.length) {
                    $targetElement.append($('<div class="arrow"></div>').css(panelOptions.arrowStyle!));
                }
            }
            this.layout();
        }
    }

    protected delayHide(delay = 100) {
        this._resetTimer();
        this._clearDelayHide();
        this._hideTimer = window.setTimeout(() => {
            this._hideTimer = 0;
            this.hide();
        }, delay);
    }

    protected _clearDelayHide() {
        if (this._hideTimer) {
            clearTimeout(this._hideTimer);
            this._hideTimer = 0;
        }
    }

    protected _getLayoutOptions(): [trigger: ReferenceElement, element: HTMLElement, options: Partial<ComputePositionConfig>] {
        const trigger = this._triggerElement;
        const element = this._targetElement!;
        const {placement: placementSetting, flip: isFlip, limitSize, shift: shiftSetting, offset: offsetSetting, arrow: arrowSetting, strategy} = this.options;
        const arrowElement = arrowSetting ? element.querySelector('.arrow') : null;
        const arrowSize = arrowElement ? (typeof arrowSetting === 'number' ? arrowSetting : 5) : 0;
        const getOffsetSetting = () => {
            if (typeof offsetSetting === 'function') {
                return offsetSetting;
            }
            if (typeof offsetSetting === 'object') {
                return {
                    mainAxis: (offsetSetting.mainAxis || 0) + arrowSize,
                    ...offsetSetting,
                };
            }
            return (offsetSetting || 0) + arrowSize;
        };
        return [trigger, element, {
            placement: placementSetting,
            strategy,
            middleware: [
                isFlip ? flip() : null,
                shiftSetting ? shift(typeof shiftSetting === 'object' ? shiftSetting : undefined) : null,
                (offsetSetting || arrowSize) ? offset(getOffsetSetting()) : null,
                arrowSetting ? arrow({element: arrowElement!}) : null,
                limitSize ? size({
                    apply({availableWidth, availableHeight, placement}) {
                        $(element).css({maxHeight: availableHeight - (['top', 'bottom'].includes(placement.split('-')[0]) ? arrowSize : 0) - 2, maxWidth: availableWidth - 2});
                    },
                }) : null,
            ].filter(Boolean),
        }];
    }

    protected _getRenderOptions(): PopoverPanelOptions {
        const {name = 'popover'} = this.options;
        const {
            popup,
            title,
            content,
            headingClass = `${name}-heading`,
            titleClass = `${name}-title`,
            contentClass = `${name}-content`,
            style,
            className = name,
            closeBtn,
            arrow: arrowSetting,
        } = this.options;
        return {
            popup,
            title,
            titleClass,
            headingClass,
            contentClass,
            content,
            style: {zIndex: (this.constructor as typeof Popover).Z_INDEX++, ...style},
            className,
            closeBtn,
            arrow: arrowSetting ? `arrow ${name}-arrow` : false,
            arrowStyle: {'--arrow-size': `${typeof arrowSetting === 'number' ? arrowSetting : 5}px`},
            onlyInner: true,
        };
    }

    protected _destoryTarget() {
        this._layoutWatcher?.();
        this._layoutWatcher = undefined;
        if (this._dynamic) {
            this._panel?.destroy();
            this._targetElement?.remove();
            this._panel = undefined;
            this._targetElement = undefined;
        }
    }

    protected _resetTimer(callback?: () => void, delay = 0) {
        if (this._timer) {
            clearTimeout(this._timer);
        }
        if (!callback) {
            return;
        }
        this._timer = window.setTimeout(() => {
            this._timer = 0;
            callback();
        }, delay);
    }

    protected _createTarget(): HTMLElement {
        const {container = 'body'} = this.options;
        const $container = $(container);
        let $target = $container.find(`#${this._id}`);
        if ($target.length) {
            return $target[0]!;
        }
        $target = $('<div />').attr({id: this._id, class: 'popover'}).appendTo($container);
        return $target[0]!;
    }

    protected _getClickBounding = () => {
        const event = this._triggerEvent as MouseEvent;
        return {
            x: event.clientX,
            y: event.clientY,
            left: event.clientX,
            top: event.clientY,
            width: 0,
            height: 0,
            bottom: event.clientY,
            right: event.clientX,
        };
    };

    protected _onClickDoc = (event: MouseEvent) => {
        const $target = $(event.target as HTMLElement);
        if ((!$target.closest(`#${this._id}`).length && (this._virtual || !$target.closest(this._triggerElement as HTMLElement).length) && this._targetElement !== $target.closest('.popover')[0])) {
            this.hide();
        }
    };

    static show<O extends PopoverOptions, E extends ComponentEvents, T extends typeof Popover<O, E>>(this: T, options: O & {event?: Event}): InstanceType<T> {
        const {element: elementSetting, event, ...otherOptions} = options;
        const element = elementSetting || (event?.currentTarget as HTMLElement);
        return (this as typeof Popover).ensure(element instanceof HTMLElement ? element : document.body, {element, show: true, destroyOnHide: true, triggerEvent: event, ...otherOptions}) as InstanceType<T>;
    }
}

Popover.toggle = {
    trigger: ['click', 'hover'],
    convertHref: {selector: 'target'},
    check(element, type) {
        const $element = $(element);
        if ($element.data(this.KEY)) {
            return false;
        }
        if (type === 'hover') {
            return ($element.dataset('trigger') || (this as typeof Popover).DEFAULT.trigger) === 'hover';
        }
        return true;
    },
    getOptions(_element, options, event) {
        return {
            triggerEvent: event,
            ...options,
        };
    },
    onToggle(component, _element, event) {
        (component as Popover).toggle({event});
    },
};

Popover.register();
