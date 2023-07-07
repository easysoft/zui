import {Component, ComponentChildren, JSX, RenderableProps, h as _h} from 'preact';
import {classes, $} from '@zui/core';
import type {PickState, PickTriggerProps} from '../types';

const EVENT_FROM_PICK = Symbol('EVENT_FROM_PICK');

export class PickTrigger<S extends PickState = PickState, P extends PickTriggerProps<S> = PickTriggerProps<S>, STATE = {}> extends Component<P, STATE> {
    #hasInput: boolean;

    constructor(props: P) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
        this.#hasInput = !!$(`#${props.id}`).length;
    }

    protected _handleClick(event: MouseEvent) {
        const {togglePop, clickType, onClick} = this.props;
        let toggle: undefined | boolean = clickType === 'open' ? true : undefined;
        const $target = $(event.target as HTMLElement);
        const clickResult = onClick?.(event);
        if (event.defaultPrevented) {
            return;
        }
        if (typeof clickResult === 'boolean') {
            toggle = clickResult;
        } else {
            if ($target.closest('[data-dismiss="pick"]').length) {
                togglePop(false);
                return;
            }
            if ($target.closest('a,input').length) {
                return;
            }
        }
        requestAnimationFrame(() => togglePop(toggle));
    }

    protected _getClass(props: RenderableProps<P>) {
        const {state, className} = props;
        const {open: opened, disabled} = state;
        return classes(
            'pick',
            className,
            opened && 'is-open focus',
            disabled && 'disabled',
        );
    }

    protected _getProps(props: RenderableProps<P>): JSX.HTMLAttributes<HTMLElement> {
        const {id, style, attrs} = props;
        return {
            id: `pick-${id}`,
            className: this._getClass(props),
            style,
            tabIndex: -1,
            onClick: this._handleClick,
            ...attrs,
        };
    }

    protected _renderTrigger(props: RenderableProps<P>): ComponentChildren {
        const {children, state} = props;
        return children ?? (state.value as string);
    }

    protected _renderValue(props: RenderableProps<P>): ComponentChildren {
        const {name, state: {value = ''}, id} = props;
        if (name) {
            if (this.#hasInput) {
                $(`#${id}`).val(value);
            } else {
                return <input id={id} type="hidden" className="pick-value" name={name} value={value} />;

            }
        }
        return null;
    }

    componentDidMount(): void {
        const {id, state} = this.props;
        $(`#${id}`).on(`change.pick.zui.${id}`, (event: Event, from: symbol) => {
            if (from === EVENT_FROM_PICK) {
                return;
            }
            const value = (event.target as HTMLInputElement).value;
            if (value !== state.value) {
                this.props.changeState({value} as Partial<S>);
            }
        });
    }

    componentWillUnmount(): void {
        const {id} = this.props;
        $(`#${id}`).off(`change.pick.zui.${id}`);
    }

    componentDidUpdate(previousProps: Readonly<P>): void {
        const {id, state, name} = this.props;
        if (name && previousProps.state.value !== state.value) {
            $(`#${id}`).trigger('change', EVENT_FROM_PICK);
        }
    }

    render(props: RenderableProps<P>) {
        return _h(
            props.tagName || 'div',
            this._getProps(props),
            this._renderTrigger(props),
            this._renderValue(props),
        );
    }
}
