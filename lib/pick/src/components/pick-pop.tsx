import {Component, RefObject, RenderableProps, createRef} from 'preact';
import {computePosition, flip, offset, shift, autoUpdate} from '@floating-ui/dom';
import {$, classes, createPortal} from '@zui/core';
import type {PickState, PickPopProps} from '../types';

export class PickPop<S extends PickState = PickState, P extends PickPopProps<S> = PickPopProps<S>> extends Component<P> {
    state = {show: false};

    #ref: RefObject<HTMLDivElement> | undefined = createRef<HTMLDivElement>();

    #layoutWatcher?: () => void;

    #container?: HTMLElement;

    get trigger(): HTMLElement | undefined | null {
        return $(`#pick-${this.props.id}`)[0];
    }

    get element(): HTMLElement | undefined | null {
        return this.#ref?.current;
    }

    get container(): HTMLElement | undefined {
        return this.#container;
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

    protected _render(props: RenderableProps<P>) {
        const {id, style} = props;
        return (
            <div
                id={`pick-pop-${id}`}
                className={this._getClass(props)}
                style={style}
                ref={this.#ref}
            >
                {this._renderPop(props)}
            </div>
        );
    }

    protected _renderPop(props: RenderableProps<P>) {
        return props.children;
    }

    protected _handleDocClick = (e: MouseEvent) => {
        const {state: {open}, id, togglePop} = this.props;
        if (open !== 'closing' && !$(e.target as HTMLElement).closest(`#pick-${id},#pick-pop-${id}`).length) {
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
            const {direction, width, maxHeight, maxWidth, minHeight, minWidth} = props;
            computePosition(trigger, element, {
                placement: `${direction === 'top' ? 'top' : 'bottom'}-start`,
                middleware: [direction === 'auto' ? flip() : null, shift(), offset(1)].filter(Boolean),
            }).then(({x, y}) => {
                $(element).css({
                    left: x,
                    top: y,
                    width: width === '100%' ? $(trigger).outerWidth() : undefined,
                    maxHeight,
                    maxWidth,
                    minHeight,
                    minWidth,
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
