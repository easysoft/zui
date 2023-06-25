import {Component, ComponentChildren, RenderableProps} from 'preact';
import {$, delay} from '@zui/core';
import type {PickOptions, PickPopProps, PickState, PickTriggerProps} from '../types';
import {PickTrigger} from './pick-trigger';
import {PickPop} from './pick-pop';

export class Pick<S extends PickState = PickState, O extends PickOptions<S> = PickOptions<S>> extends Component<O, S> {
    static Trigger = PickTrigger;

    static Pop = PickPop;

    static defaultProps: Partial<PickOptions> = {
        popContainer: 'body',
        popClass: 'menu-popup',
        popWidth: '100%',
        popDirection: 'auto',
        popMinWidth: 50,
        popMinHeight: 32,
        popMaxHeight: 300,
    };

    #id: string;

    #toggleTimer = 0;

    constructor(props: O) {
        super(props);
        this.state = {
            value: props.defaultValue,
            open: false,
            focus: false,
            disabled: false,
        } as S;

        this.#id = props.id ?? `_${$.guid++}`;
    }

    get id() {
        return this.#id;
    }

    changeState = (state: Partial<S> | ((prevState: Readonly<S>) => Partial<S>), callback?: () => void): Promise<S> => {
        return new Promise<S>(resolve => {
            this.setState(state, () => {
                callback?.();
                resolve(this.state);
            });
        });
    };

    toggle = async (open?: boolean, state?: Partial<S>): Promise<S> => {
        if (this.#toggleTimer) {
            clearTimeout(this.#toggleTimer);
            this.#toggleTimer = 0;
        }

        let newState = await this.changeState(prevState => {
            open = open ?? !prevState.open;

            return {
                open: open ? 'opening' : 'closing',
                ...state,
            } as Partial<S>;
        });
        const {open: openState} = newState;

        if (openState === 'closing') {
            await delay(200, (id) => {
                this.#toggleTimer = id;
            });
            this.#toggleTimer = 0;
            newState = await this.changeState({open: false} as Partial<S>);
        } else if (openState === 'opening') {
            await delay(50, (id) => {
                this.#toggleTimer = id;
            });

            this.#toggleTimer = 0;
            newState = await this.changeState({open: true} as Partial<S>);
        }

        return newState;
    };

    protected _getTriggerProps(props: RenderableProps<O>, state: Readonly<S>): PickTriggerProps<S> {
        return {
            id: this.id,
            state: state,
            className: props.className,
            style: props.style,
            name: props.name,
            changeState: this.changeState,
            togglePop: this.toggle,
        };
    }

    protected _getPopProps(props: RenderableProps<O>, state: Readonly<S>): PickPopProps<S> {
        return {
            id: this.id,
            state: state,
            className: props.popClass,
            style: props.popStyle,
            changeState: this.changeState,
            togglePop: this.toggle,
            direction: props.popDirection,

            container: props.popContainer,
            width: props.popWidth,
            height: props.popHeight,
            minHeight: props.popMinHeight,
            maxHeight: props.popMaxHeight,
            maxWidth: props.popMaxWidth,
            minWidth: props.popMinWidth,
        };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected _renderTrigger(props: RenderableProps<O>, state: Readonly<S>): ComponentChildren {
        return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected _renderPop(props: RenderableProps<O>, state: Readonly<S>): ComponentChildren {
        return null;
    }

    protected _afterRender(firstRender = false) {
        this.props.afterRender?.call(this, {firstRender});
    }

    protected _handleDocClick = (e: MouseEvent) => {
        const {open} = this.state;
        const {id} = this;
        if (open && !$(e.target as HTMLElement).closest(`#pick-${id},#pick-pop-${id}`).length) {
            this.toggle(false);
        }
    };

    componentDidMount() {
        this._afterRender(true);
        $(document).on('click', this._handleDocClick);
    }

    componentWillUpdate(_nextProps: Readonly<O>, nextState: Readonly<S>): void {
        const {open: opened} = this.state;
        const {open: nextOpened} = nextState;
        if (opened === nextOpened) {
            return;
        }
        const {onPopShow, onPopHide} = this.props;
        if (nextOpened && onPopShow) {
            onPopShow();
        } else if (!nextOpened && onPopHide) {
            onPopHide();
        }
    }

    componentDidUpdate(_previousProps: Readonly<O>, previousState: Readonly<S>): void {
        const {open: opened} = this.state;
        const {open: previousOpened} = previousState;
        if (!!opened !== !!previousOpened) {
            const {onPopShown, onPopHidden} = this.props;
            if (opened && onPopShown) {
                onPopShown();
            } else if (!opened && onPopHidden) {
                onPopHidden();
            }
        }
        this._afterRender();
    }

    componentWillUnmount(): void {
        $(document).off('click', this._handleDocClick);
        this.props.beforeDestroy?.call(this);
        if (this.#toggleTimer) {
            clearTimeout(this.#toggleTimer);
        }
    }

    render(props: RenderableProps<O>, state: Readonly<S>) {
        const {
            Trigger = (this.constructor as typeof Pick<S, O>).Trigger<S>,
            Pop = (this.constructor as typeof Pick<S, O>).Pop<S>,
        } = props;
        const {open: opened} = state;
        return (<>
            <Trigger key="pick" {...this._getTriggerProps(props, state)}>
                {this._renderTrigger(props, state)}
            </Trigger>
            {opened ? (<Pop key="pop" {...this._getPopProps(props, state)}>
                {this._renderPop(props, state)}
            </Pop>) : null}
        </>);
    }
}
