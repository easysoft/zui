import {Component, ComponentChildren, JSX, RefObject, RenderableProps, VNode, createRef} from 'preact';
import {computePosition, flip, offset, shift, autoUpdate, Placement} from '@floating-ui/dom';
import {$, classes, createPortal, toCssSize} from '@zui/core';
import {isElementDetached, isVisible} from '@zui/core/src/dom';

import type {PickState, PickPopProps} from '../types';

export class PickPop<S extends PickState = PickState, P extends PickPopProps<S> = PickPopProps<S>, STATE = {}> extends Component<P, STATE> {
    _ref: RefObject<HTMLDivElement> | undefined = createRef<HTMLDivElement>();

    _layoutWatcher?: () => void;

    _container?: HTMLElement;

    constructor(props: P) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    get trigger(): HTMLElement | undefined | null {
        return $(`#pick-${this.props.id}`)[0];
    }

    get element(): HTMLElement | undefined | null {
        return this._ref?.current;
    }

    get container(): HTMLElement | undefined {
        return this._container;
    }

    protected _handleClick(event: MouseEvent) {
        const {togglePop, onClickItem, state} = this.props;
        const $target = $(event.target as HTMLElement);
        const $value = $target.closest('[data-pick-value]');
        if (onClickItem) {
            onClickItem(event, state.value);
        }

        if ($value.length) {
            event.stopPropagation();
            return togglePop(false, {value: `${$value.dataset('pickValue')}`} as Partial<S>);
        }
        if ($target.closest('[data-dismiss="pick"]').length) {
            return togglePop(false);
        }
    }

    protected _getClass(props: RenderableProps<P>) {
        const {className, state, pickerName, empty} = props;
        const {open} = state;
        return classes(
            'pick-pop',
            pickerName ? `${pickerName}-pick-pop` : '',
            className,
            open === true && 'in',
            empty ? 'is-empty-value' : '',
        );
    }

    protected _getProps(props: RenderableProps<P>): JSX.HTMLAttributes<HTMLDivElement> {
        const {
            id,
            style,
            maxHeight,
            maxWidth,
            minHeight,
            minWidth,
        } = props;
        const finalStyle = $.extend({maxHeight,
            maxWidth,
            minHeight,
            minWidth,
        }, style);
        return {
            id: `pick-pop-${id}`,
            className: this._getClass(props),
            style: finalStyle,
            ref: this._ref,
            onClick: this._handleClick,
        };
    }

    protected _getContainer(props: RenderableProps<P>): HTMLElement {
        if (!this._container) {
            const $containerParent = $(props.container || 'body');
            let $container = $containerParent.find('.pick-container');
            if (!$container.length) {
                $container = $('<div>').addClass('pick-container').appendTo($containerParent);
            }
            this._container = $container[0]!;
        }
        return this._container;
    }

    protected _render(props: RenderableProps<P>): VNode {
        return (
            <div {...this._getProps(props)}>
                {this._renderPop(props)}
            </div>
        );
    }

    protected _renderPop(props: RenderableProps<P>): ComponentChildren {
        return props.children;
    }

    protected _handleDocClick = (e: MouseEvent) => {
        const {state: {open}, id, togglePop} = this.props;
        const $target = $(e.target as HTMLElement);
        if (open !== 'closing' && !$target.closest(`#pick-${id},#pick-pop-${id}`).length && $target.parent().length) {
            togglePop(false);
        }
    };

    protected _getStyle(style: Record<string, null | string | number> = {}, placement?: Placement): Record<string, null | string | number> {
        const triggerBounding = this.trigger?.getBoundingClientRect();
        if (!triggerBounding) {
            return {};
        }
        const {width, minWidth, maxWidth, maxHeight} = this.props;
        const triggerWidth = triggerBounding.width;
        if (typeof width === 'function') {
            style.width = width();
        } else if (width === '100%') {
            style.width = triggerWidth;
        } else if (width) {
            style.width = toCssSize(width);
        }
        if (minWidth === '100%') {
            style.minWidth = triggerWidth;
        }
        if (maxWidth === '100%') {
            style.maxWidth = triggerWidth;
        }
        if (this.props.limitInScreen && placement && (!maxHeight || maxHeight === 'auto' || typeof maxHeight === 'number')) {
            let maxHeightInScreen: number | undefined;
            if (placement.includes('bottom')) {
                maxHeightInScreen = window.innerHeight - triggerBounding.bottom - 2;
            } else {
                const height = this.element!.getBoundingClientRect().height;
                maxHeightInScreen = triggerBounding.top;
                if (height > maxHeightInScreen && typeof style.top === 'number') {
                    style.top += height - maxHeightInScreen;
                }
            }
            if (maxHeightInScreen) {
                style.maxHeight = typeof maxHeight === 'number' ? Math.min(maxHeightInScreen, maxHeight) : maxHeightInScreen;
            }
        } else if (maxHeight) {
            style.maxHeight = maxHeight;
        }
        return style;
    }

    protected layout() {
        const {element, trigger, props} = this;
        const {state} = props;
        if (!element || !trigger || !state.open) {
            if (this._layoutWatcher) {
                this._layoutWatcher();
                this._layoutWatcher = undefined;
            }
            return;
        }

        if (this._layoutWatcher) {
            return;
        }

        this._layoutWatcher = autoUpdate(trigger, element, () => {
            const {placement, width} = props;
            computePosition(trigger, element, {
                placement: (!placement || placement === 'auto') ? 'bottom-start' : placement,
                middleware: [placement === 'auto' ? flip() : null, shift(), offset(1)].filter(Boolean),
            }).then(({x, y, placement: actualPlacement}) => {
                if (isElementDetached(trigger) || !isVisible(trigger)) {
                    $(element).css({display: 'none'});
                    return;
                }
                $(element).css(this._getStyle({
                    left: x,
                    top: y,
                }, actualPlacement));
                this.props.onLayout?.(element);
            });
            if (width === '100%') {
                $(element).css(this._getStyle());
            }
        });
    }

    componentDidMount() {
        this.layout();
        $(document).on('click', this._handleDocClick);
        this.props.afterRender?.({firstRender: true});
    }

    componentDidUpdate(): void {
        this.props.afterRender?.({firstRender: false});
    }

    componentWillUnmount(): void {
        $(document).off('click', this._handleDocClick);

        const layoutWatcher = this._layoutWatcher;
        if (layoutWatcher) {
            layoutWatcher();
            this._layoutWatcher = undefined;
        }
        this._container = undefined;
        this._ref = undefined;
        $(`#pick-pop-${this.props.id}`).remove();

        this.props.beforeDestroy?.();
    }

    render(props: RenderableProps<P>) {
        return createPortal(this._render(props), this._getContainer(props));
    }
}
