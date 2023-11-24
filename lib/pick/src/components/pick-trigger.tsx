import {Component, ComponentChildren, JSX, RenderableProps, h as _h} from 'preact';
import {classes, $} from '@zui/core';
import type {PickState, PickTriggerProps} from '../types';

export const EVENT_PICK = Symbol('EVENT_PICK');

export class PickTrigger<S extends PickState = PickState, P extends PickTriggerProps<S> = PickTriggerProps<S>, STATE = {}> extends Component<P, STATE> {
    _hasInput: boolean;

    _skipTriggerChange?: string | false;

    constructor(props: P) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
        this._hasInput = !!$(`#${props.id}`).length;
    }

    get hasInput() {
        return this._hasInput;
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
        const {state, className, disabled, readonly} = props;
        const {open: opened} = state;
        return classes(
            'pick',
            className,
            opened && 'is-open focus',
            disabled && 'disabled',
            readonly && 'readonly',
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
        const {name, state: {value = ''}, disabled, readonly, id} = props;
        if (name) {
            if (this._hasInput) {
                $(`#${id}`).val(value);
            } else {
                return <input id={id} type="hidden" className="pick-value" name={name} value={value} readonly={readonly} disabled={disabled} />;
            }
        }
        return null;
    }

    componentDidMount(): void {
        const {id} = this.props;
        $(`#${id}`).on(`change.zui.pick.${id} syncValue.zui.pick.${id}`, (event: Event, from: symbol) => {
            if (from === EVENT_PICK) {
                return;
            }
            const value = (event.target as HTMLInputElement).value;
            this._skipTriggerChange = value;
            this.props.changeState({value} as Partial<S>);
        });
    }

    componentWillUnmount(): void {
        const {id} = this.props;
        $(`#${id}`).off(`change.zui.pick.${id}`);
    }

    componentDidUpdate(previousProps: Readonly<P>): void {
        const {id, state, name} = this.props;
        if (name && previousProps.state.value !== state.value) {
            if (this._skipTriggerChange !== state.value) {
                $(`#${id}`).trigger('change', EVENT_PICK);
            }
            this._skipTriggerChange = false;
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
