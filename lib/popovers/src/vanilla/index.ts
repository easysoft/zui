import {ComputePositionConfig, arrow, computePosition, flip, shift, autoUpdate, offset} from '@floating-ui/dom';
import {Component, $, Cash} from '@zui/core';
import {PopoversOptions} from '../types';

export class Popovers extends Component<PopoversOptions> {
    static NAME = 'Popovers';

    static DEFAULT: Partial<PopoversOptions> = {
        placement: 'bottom',
        strategy: 'fixed',
        flip: true,
        shift: {padding: 5},
        arrow: false,
        offset: 1,
    };

    cleanup = () => {};

    private $target: Cash;

    private $mask: Cash;

    private $arrow: Cash;

    private toggle = () => {};

    init() {
        this.initTarget();
        this.initMask();
        this.initArrow();
        this.createPopper();

        this.toggle = () => {
            if (this.$target.hasClass('hidden')) {
                this.show();
                return;
            }
            this.hide();
        };
        this.$element.addClass('z-50')
            .on('click', this.toggle);
    }

    destroy() {
        this.cleanup();
        this.$element.off('click', this.toggle);
        this.$target.remove();
    }

    private computePositionConfig() {
        const {placement, strategy} = this.options;
        const config: ComputePositionConfig = {
            placement,
            strategy,
            middleware: [],
        };

        const {flip: flipOption, shift: shiftOption, arrow: arrowOption, offset: offsetOption} = this.options;
        if (flipOption) {
            config.middleware!.push(flip());
        }
        if (shiftOption) {
            config.middleware!.push(shiftOption === true ? shift() : shift(shiftOption));
        }
        if (arrowOption) {
            config.middleware!.push(arrow({element: this.$arrow[0] as HTMLElement}));
        }
        if (offsetOption) {
            config.middleware!.push(offset(offsetOption));
        }

        return config;
    }

    private createPopper() {
        const reference = this.element as HTMLElement;
        const floating = this.$target[0] as HTMLElement;

        this.cleanup = autoUpdate(reference, floating, () => {
            computePosition(reference, floating, this.computePositionConfig())
                .then(({x, y, placement, middlewareData}) => {
                    Object.assign(floating.style, {
                        left: `${x}px`,
                        top: `${y}px`,
                    });

                    if (!arrow || !middlewareData.arrow) {
                        return;
                    }

                    const {x: arrowX, y: arrowY} = middlewareData.arrow;

                    const staticSide = {
                        top: 'bottom',
                        right: 'left',
                        bottom: 'top',
                        left: 'right',
                    }[placement.split('-')[0]];

                    Object.assign((this.$arrow[0]!.style), {
                        left: arrowX != null ? `${arrowX}px` : '',
                        top: arrowY != null ? `${arrowY}px` : '',
                        right: '',
                        bottom: '',
                        [staticSide!]: '-4px',
                    });

                });
        });
    }

    private initTarget() {
        const targetSelector = this.$element.data('target');
        if (!targetSelector) {
            throw new Error('popsvers trigger must have target.');
        }

        const $target = $(targetSelector);
        if (!$target.length) {
            throw new Error('popovers target must exist.');
        }

        const {strategy} = this.options;
        $target.addClass(strategy!);
        $target.addClass('hidden');
        $target.addClass('z-50');
        $target.on('click', (e) => {
            if ($(e.target).data('dismiss') === 'popovers') {
                this.hide();
            }
        });

        this.$target = $target;
    }

    private show() {
        this.$target.removeClass('hidden');
        this.$mask.removeClass('hidden');
    }

    private hide() {
        this.$target.addClass('hidden');
        this.$mask.addClass('hidden');
    }

    private initMask() {
        const $mask = $('<div class="fixed top-0 right-0 bottom-0 left-0 z-40 hidden"></div>');
        $mask.on('click', () => {
            this.hide();
        });

        this.$target.parent().append($mask);
        this.$mask = $mask;
    }

    private initArrow() {
        const {arrow: arrowOption} = this.options;
        if (!arrowOption) {
            return;
        }

        this.$arrow = $('<div class="arrow bg-inherit rotate-45 absolute w-2 h-2"></div>');
        this.$target.append(this.$arrow);
    }
}
