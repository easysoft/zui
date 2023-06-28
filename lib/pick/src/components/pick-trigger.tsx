import {Component, ComponentChildren, JSX, RenderableProps, h as _h} from 'preact';
import {classes, $} from '@zui/core';
import type {PickState, PickTriggerProps} from '../types';

export class PickTrigger<S extends PickState = PickState, P extends PickTriggerProps<S> = PickTriggerProps<S>> extends Component<P> {
    constructor(props: P) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    protected _handleClick(event: MouseEvent) {
        event.stopPropagation();
        const {togglePop} = this.props;
        const $target = $(event.target as HTMLElement);
        if ($target.closest('[data-dismiss="pick"]').length) {
            togglePop(false);
            return;
        }
        if ($target.closest('a,input').length) {
            return;
        }
        togglePop(true);
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
        const {name, state} = props;
        if (name) {
            return <input type="hidden" className="pick-value" name={name} value={state.value} />;
        }
        return null;
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
