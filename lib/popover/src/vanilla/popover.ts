import {arrow, computePosition, flip, shift, autoUpdate, offset, VirtualElement} from '@floating-ui/dom';
import {Component, $} from '@zui/core';
import {PopoverEvents, PopoverOptions, PopoverPanelOptions} from '../types';
import {PopoverPanel} from './popover-panel';

const TOGGLE_SELECTOR = '[data-toggle="popover"]';

const CLASS_SHOW = 'show';

const CLASS_SHOWN = 'in';

export class Popover<O extends PopoverOptions = PopoverOptions> extends Component<O, PopoverEvents, HTMLElement> {
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

    protected declare _virtual: boolean;

    protected declare _dynamic: boolean;

    protected declare _triggerElement: HTMLElement | VirtualElement;

    protected declare _targetElement?: HTMLElement;

    protected declare _showAfterInit: boolean;

    protected declare _shown: boolean;

    protected declare _id: string;

    protected declare _timer: number;

    protected declare _panel?: PopoverPanel;

    protected declare _layoutWatcher?: () => void;

    get shown() {
        return this._shown;
    }

    get id() {
        return this._id;
    }

    afterInit() {
        const {element = this.element, trigger, id} = this.options;
        let triggerElement: HTMLElement | VirtualElement | undefined | null;
        if (typeof element === 'function') {
            triggerElement = element();
        } else {
            triggerElement = (typeof element === 'string' ? $(element)[0] : element) as typeof triggerElement;
        }
        if (!triggerElement) {
            return;
        }
        this._triggerElement = triggerElement;
        this._id = id || `popover_${this.gid}`;
        this._virtual = !triggerElement;

        if (triggerElement instanceof HTMLElement) {
            const $triggerElement = $(triggerElement);
            const {namespace} = this;
            if (trigger === 'hover') {
                $triggerElement.on(`mouseenter${namespace}`, () => {
                    this.show(true);
                }).on(`mouseleave${namespace}`, () => {
                    this.hide();
                });
            } else if (trigger === 'click') {
                $triggerElement.on(`click${namespace}`, () => {
                    this.toggle();
                });
            }
        }
        const {show} = this.options;
        if (show) {
            this.show(show);
        }
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
        return $(target)[0];
    }

    show(delay?: boolean | number) {
        if (delay) {
            return this._setTimer(() => {
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
        const {animation, mask} = this.options;
        $target.addClass(CLASS_SHOW);
        if (animation) {
            $target.addClass(animation === true ? 'fade' : animation);
        }
        this._shown = true;
        this.render();
        this.emit('show');

        if (!this._virtual) {
            const triggerElement = this._triggerElement as HTMLElement;
            $(triggerElement).addClass('with-popover-show');
        }

        this._setTimer(() => {
            $target.addClass(CLASS_SHOWN);

            this._setTimer(() => {
                this.emit('shown');
            }, 200);

            if (mask) {
                $(document).on(`click${this.namespace}`, (event: MouseEvent) => {
                    const $clickTarget = $(event.target as HTMLElement);
                    const $popoverTarget = $clickTarget.closest(`#${this._id}`);
                    if (!$popoverTarget.length || $clickTarget.closest('[data-dismiss="popover"]').length) {
                        this.hide();
                    }
                });
            }
        }, 50);
    }

    hide() {
        if (!this._shown || !this._targetElement) {
            this._setTimer();
        }

        const $target = $(this._targetElement as HTMLElement);
        this._shown = false;
        this.emit('hide');
        $target.removeClass(CLASS_SHOWN);

        if (!this._virtual) {
            const triggerElement = this._triggerElement as HTMLElement;
            $(triggerElement).removeClass('with-popover-show');
        }

        $(document).off(this.namespace);

        this._setTimer(() => {
            this.emit('hidden');
            $target.removeClass(CLASS_SHOW);

            this._destoryTarget();
        }, this.options.animation ? 200 : 0);
    }

    toggle() {
        if (this._shown) {
            this.hide();
        } else {
            this.show();
        }
    }

    destroy(): void {
        super.destroy();
        if (!this._virtual) {
            const {namespace} = this;
            $(this._triggerElement as HTMLElement).off(namespace);
        }
        this._setTimer();
        this._destoryTarget();
        $(document).off(this.namespace);
    }

    layout() {
        const trigger = this._triggerElement;
        const element = this._targetElement;
        const layoutWatcher = this._layoutWatcher;
        if (!element || !trigger || !this._shown) {
            if (layoutWatcher) {
                layoutWatcher();
                this._layoutWatcher = undefined;
            }
            return;
        }

        if (layoutWatcher) {
            return;
        }

        this._layoutWatcher = autoUpdate(trigger, element, () => {
            const {placement: placementSetting, width, flip: isFlip, shift: shiftSetting, offset: offsetSetting, arrow: arrowSetting, name = 'popover'} = this.options;
            if (width === '100%' && !this._virtual) {
                $(element).css({width: $(trigger as HTMLElement).width()});
            }
            const arrowElement = arrowSetting ? element.querySelector('.arrow') : null;
            const arrowSize = arrowSetting ? (typeof arrowSetting === 'number' ? arrowSetting : 8) : 0;
            computePosition(trigger, element, {
                placement: placementSetting,
                middleware: [
                    isFlip ? flip() : null,
                    shiftSetting ? shift(typeof shiftSetting === 'object' ? shiftSetting : undefined) : null,
                    (offsetSetting || arrowSize) ? offset((offsetSetting || 0) + arrowSize) : null,
                    arrowSetting ? arrow({element: arrowElement!}) : null,
                ].filter(Boolean),
            }).then(({x, y, middlewareData, placement}) => {
                const $element = $(element).css({
                    left: x,
                    top: y,
                });
                const staticSide = {
                    top: 'bottom',
                    right: 'left',
                    bottom: 'top',
                    left: 'right',
                }[placement.split('-')[0]];
                const arrowPosition = middlewareData.arrow;
                if (arrowPosition) {
                    $(arrowElement!).css({
                        left: arrowPosition.x,
                        top: arrowPosition.y,
                    }).attr('class', `arrow ${name}-arrow arrow-${staticSide}`);
                }
                if (this.options.animation === true) {
                    $element.attr('class', `${$element.attr('class')!.split(' ').filter(n => n !== 'fade' && !n.startsWith('fade-from')).join(' ')} fade-from-${staticSide}`);
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
        $(targetElement).toggleClass('popup', panelOptions.popup).css(panelOptions.style!);
        if (panelOptions.className) {
            $(targetElement).setClass(panelOptions.className);
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
            this.layout();
        }
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

    protected _setTimer(callback?: () => void, delay = 0) {
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
}

$(document).on(`click${Popover.NAMESPACE} mouseenter${Popover.NAMESPACE}`, TOGGLE_SELECTOR, (event: MouseEvent) => {
    const $toggleBtn = $(event.currentTarget as HTMLElement);
    if ($toggleBtn.length && !$toggleBtn.data(Popover.KEY)) {
        const trigger = $toggleBtn.data('trigger') || 'click';
        const eventForTrigger = event.type === 'mouseover' ? 'hover' : 'click';
        if (eventForTrigger !== trigger) {
            return;
        }
        Popover.ensure($toggleBtn, {show: true});
        event.preventDefault();
    }
});
