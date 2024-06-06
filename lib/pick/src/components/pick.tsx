import {Component, ComponentChildren, ComponentType, RefObject, RenderableProps, createRef} from 'preact';
import {delay, nextGid} from '@zui/core';
import type {PickOptions, PickPopProps, PickState, PickTriggerProps} from '../types';
import {PickTrigger} from './pick-trigger';
import {PickPop} from './pick-pop';
import '../style';

export class Pick<S extends PickState = PickState, O extends PickOptions<S> = PickOptions<S>> extends Component<O, S> {
    static Trigger = PickTrigger;

    static Pop = PickPop;

    static defaultProps: Partial<PickOptions> = {
        popContainer: 'body',
        popClass: 'popup',
        popWidth: '100%',
        popPlacement: 'auto',
        popMinWidth: 50,
        popMinHeight: 32,
        popMaxHeight: 300,
        limitPopInScreen: true,
        clickType: 'open',
    };

    _id: string;

    _toggleTimer = 0;

    _pop: RefObject<PickPop<S, PickPopProps<S>>> = createRef();

    protected _trigger = createRef<PickTrigger>();

    constructor(props: O) {
        super(props);
        this.state = {
            value: String(props.defaultValue ?? ''),
            open: false,
        } as S;

        this._id = props.id ?? `_pick${nextGid()}`;
        this.changeState = this.changeState.bind(this);
    }

    get id() {
        return this._id;
    }

    get pop() {
        return this._pop.current;
    }

    get trigger() {
        return this._trigger.current;
    }

    get value() {
        return this.state.value;
    }

    changeState(state: Partial<S> | ((prevState: Readonly<S>) => Partial<S>), callback?: () => void): Promise<S> {
        return new Promise<S>(resolve => {
            this.setState(state, () => {
                callback?.();
                resolve(this.state);
            });
        });
    }

    toggle = async (open?: boolean, state?: Partial<S>): Promise<S> => {
        if (this.props.disabled || this.props.readonly) {
            open = false;
        }
        const {state: currentState} = this;
        if (typeof open === 'boolean' && open === (!!currentState.open && currentState.open !== 'closing')) {
            if (state) {
                await this.changeState(state);
            }
            return this.state;
        }

        if (this._toggleTimer) {
            clearTimeout(this._toggleTimer);
            this._toggleTimer = 0;
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
                this._toggleTimer = id;
            });
            this._toggleTimer = 0;
            newState = await this.changeState({open: false} as Partial<S>);
        } else if (openState === 'opening') {
            await delay(50, (id) => {
                this._toggleTimer = id;
            });

            this._toggleTimer = 0;
            newState = await this.changeState({open: true} as Partial<S>);
        }

        return newState;
    };

    open(state?: Partial<S>) {
        return this.toggle(true, state);
    }

    close(state?: Partial<S>) {
        return this.toggle(false, state);
    }

    protected _getTriggerProps(props: RenderableProps<O>, state: Readonly<S>): PickTriggerProps<S> & {ref?: RefObject<PickTrigger>} {
        return {
            id: this.id,
            ref: this._trigger,
            state: state,
            className: props.className,
            pickerName: props.pickerName,
            style: props.style,
            name: props.name,
            tagName: props.tagName,
            attrs: props.attrs,
            disabled: props.disabled,
            readonly: props.readonly,
            clickType: props.clickType,
            onClick: props.onClick,
            changeState: this.changeState,
            togglePop: this.toggle,
        };
    }

    protected _getPopProps(props: RenderableProps<O>, state: Readonly<S>): PickPopProps<S> {
        return {
            id: this.id,
            state: state,
            className: props.popClass,
            pickerName: props.pickerName,
            style: props.popStyle,
            disabled: props.disabled,
            readonly: props.readonly,
            changeState: this.changeState,
            togglePop: this.toggle,
            placement: props.popPlacement,
            container: props.popContainer,
            width: props.popWidth,
            height: props.popHeight,
            minHeight: props.popMinHeight,
            maxHeight: props.popMaxHeight,
            maxWidth: props.popMaxWidth,
            minWidth: props.popMinWidth,
            limitInScreen: props.limitPopInScreen,
        };
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected _renderTrigger(_props: RenderableProps<O>, _state: Readonly<S>): ComponentChildren {
        return null;
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected _renderPop(_props: RenderableProps<O>, _state: Readonly<S>): ComponentChildren {
        return null;
    }

    protected _afterRender(firstRender = false) {
        this.props.afterRender?.call(this, {firstRender});
    }

    protected _getPop(props: RenderableProps<O>): ComponentType<PickPopProps<S>> {
        return props.Pop || ((this.constructor as typeof Pick).Pop as ComponentType<PickPopProps<S>>);
    }

    protected _getTrigger(props: RenderableProps<O>): ComponentType<PickTriggerProps<S>> {
        return props.Trigger || ((this.constructor as typeof Pick).Trigger as ComponentType<PickTriggerProps<S>>);
    }

    protected _isEmptyValue() {
        const {value} = this.state;
        return value === undefined || value === null || value === '';
    }

    protected _handleChange(value: string, oldValue: string) {
        const {onChange} = this.props;
        if (onChange) {
            onChange.call(this, value, oldValue);
        }
    }

    protected _handlePopToggle(opened: boolean) {
        const {onPopShown, onPopHidden} = this.props;
        if (opened === true && onPopShown) {
            onPopShown.call(this);
        } else if (!opened && onPopHidden) {
            onPopHidden.call(this);
        }
    }

    setValue(value: string, silent?: boolean) {
        if (silent) {
            const trigger = this._trigger.current;
            if (trigger) {
                trigger._skipTriggerChange = value;
            }
        }
        return this.changeState({value} as Partial<S>);
    }

    componentDidMount() {
        this._afterRender(true);
    }

    componentWillUpdate(_nextProps: Readonly<O>, nextState: Readonly<S>): void {
        const {open: opened} = this.state;
        const {open: nextOpened} = nextState;
        if (!opened === !nextOpened) {
            return;
        }
        const {onPopShow, onPopHide} = this.props;
        if (nextOpened && onPopShow) {
            onPopShow.call(this);
        } else if (!nextOpened && onPopHide) {
            onPopHide.call(this);
        }
    }

    componentDidUpdate(_previousProps: Readonly<O>, previousState: Readonly<S>): void {
        const {open: opened, value} = this.state;
        const {open: prevOpened, value: prevValue} = previousState;
        if (!!opened !== !!prevOpened) {
            this._handlePopToggle(!!opened);
        }
        if (value !== prevValue) {
            this._handleChange(value, prevValue);
        }
        this._afterRender();
    }

    componentWillUnmount(): void {
        this.props.beforeDestroy?.call(this);
        if (this._toggleTimer) {
            clearTimeout(this._toggleTimer);
        }
        const pop = this._pop.current as unknown as Component<PickPopProps<S>>;
        if (pop && pop.componentWillUnmount) {
            pop.componentWillUnmount();
        }
    }

    render(props: RenderableProps<O>, state: Readonly<S>) {
        const {open: opened} = state;
        const Trigger = this._getTrigger(props);
        let popView: ComponentChildren;
        if (opened && (!props.hidePopWhenEmpty || !this._isEmptyValue())) {
            const Pop = this._getPop(props);
            popView = (<Pop key="pop" ref={this._pop} {...this._getPopProps(props, state)}>
                {this._renderPop(props, state)}
            </Pop>);
        }
        return (<>
            <Trigger key="pick" {...this._getTriggerProps(props, state)}>
                {this._renderTrigger(props, state)}
            </Trigger>
            {popView}
        </>);
    }
}
