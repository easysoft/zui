import {Component, ComponentChildren, JSX, RefObject, RenderableProps, VNode, createRef} from 'preact';
import {computePosition, flip, offset, shift, autoUpdate} from '@floating-ui/dom';
import {$, classes, createPortal, toCssSize} from '@zui/core';

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
        const {togglePop} = this.props;
        const $target = $(event.target as HTMLElement);
        const $value = $target.closest('[data-pick-value]');
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

    protected _getWidth() {
        const {width} = this.props;
        if (width === '100%') {
            return $(this.trigger).outerWidth();
        }
        if (typeof width === 'function') {
            return width();
        }
        if (width) {
            return toCssSize(width);
        }
        return undefined;
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
            }).then(({x, y}) => {
                if ($.isDetached(trigger)) {
                    return;
                }
                $(element).css({
                    left: x,
                    top: y,
                    width: this._getWidth(),
                });
                this.props.onLayout?.(element);
            });
            if (width === '100%') {
                $(element).css({width: this._getWidth()});
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
