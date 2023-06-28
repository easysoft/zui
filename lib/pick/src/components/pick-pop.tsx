import {Component, ComponentChildren, RefObject, RenderableProps, VNode, createRef} from 'preact';
import {computePosition, flip, offset, shift, autoUpdate} from '@floating-ui/dom';
import {$, classes, createPortal} from '@zui/core';
import type {PickState, PickPopProps} from '../types';

export class PickPop<S extends PickState = PickState, P extends PickPopProps<S> = PickPopProps<S>> extends Component<P> {
    state = {show: false};

    #ref: RefObject<HTMLDivElement> | undefined = createRef<HTMLDivElement>();

    #layoutWatcher?: () => void;

    #container?: HTMLElement;

    constructor(props: P) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    get trigger(): HTMLElement | undefined | null {
        return $(`#pick-${this.props.id}`)[0];
    }

    get element(): HTMLElement | undefined | null {
        return this.#ref?.current;
    }

    get container(): HTMLElement | undefined {
        return this.#container;
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
        const {className, state} = props;
        const {open} = state;
        return classes(
            'pick-pop',
            className,
            open === true && 'in',
        );
    }

    protected _getContainer(props: RenderableProps<P>): HTMLElement {
        if (!this.#container) {
            const $containerParent = $(props.container || 'body');
            let $container = $containerParent.find('.pick-container');
            if (!$container.length) {
                $container = $('<div>').addClass('pick-container').appendTo($containerParent);
            }
            this.#container = $container[0]!;
        }
        return this.#container;
    }

    protected _render(props: RenderableProps<P>): VNode {
        const {
            id,
            style,
            maxHeight,
            maxWidth,
            minHeight,
            minWidth,
            children,
        } = props;
        const finalStyle = $.extend({maxHeight,
            maxWidth,
            minHeight,
            minWidth,
        }, style);
        return (
            <div
                id={`pick-pop-${id}`}
                className={this._getClass(props)}
                style={finalStyle}
                ref={this.#ref}
                onClick={this._handleClick}
            >
                {this._renderPop(props)}
                {children}
            </div>
        );
    }

    protected _renderPop(props: RenderableProps<P>): ComponentChildren {
        return props.children;
    }

    protected _handleDocClick = (e: MouseEvent) => {
        const {state: {open}, id, togglePop} = this.props;
        const $target = $(e.target as HTMLElement);
        if (open !== 'closing' && !$target.closest(`#pick-${id},#pick-pop-${id}`).length) {
            togglePop(false);
        }
    };

    protected layout() {
        const {element, trigger, props} = this;
        const {state} = props;
        if (!element || !trigger || !state.open) {
            if (this.#layoutWatcher) {
                this.#layoutWatcher();
                this.#layoutWatcher = undefined;
            }
            return;
        }

        if (this.#layoutWatcher) {
            return;
        }

        this.#layoutWatcher = autoUpdate(trigger, element, () => {
            const {placement, width} = props;
            computePosition(trigger, element, {
                placement: (!placement || placement === 'auto') ? 'bottom-start' : placement,
                middleware: [placement === 'auto' ? flip() : null, shift(), offset(1)].filter(Boolean),
            }).then(({x, y}) => {
                $(element).css({
                    left: x,
                    top: y,
                    width: width === '100%' ? $(trigger).outerWidth() : undefined,
                });
            });
            if (width === '100%') {
                $(element).css({width: $(element).width()});
            }
        });
    }

    componentDidMount() {
        this.layout();
        $(document).on('click', this._handleDocClick);
    }

    componentWillUnmount(): void {
        $(document).off('click', this._handleDocClick);

        const layoutWatcher = this.#layoutWatcher;
        if (layoutWatcher) {
            layoutWatcher();
            this.#layoutWatcher = undefined;
        }
        this.#container = undefined;
        this.#ref = undefined;
    }

    render(props: RenderableProps<P>) {
        return createPortal(this._render(props), this._getContainer(props));
    }
}
