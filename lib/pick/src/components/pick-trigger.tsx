import {Component, RenderableProps} from 'preact';
import {classes, $} from '@zui/core';
import type {PickState, PickTriggerProps} from '../types';

export class PickTrigger<S extends PickState = PickState, P extends PickTriggerProps<S> = PickTriggerProps<S>> extends Component<P> {
    constructor(props: P) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }

    protected _handleClick(event: MouseEvent) {
        event.stopPropagation();
        if ($(event.target as HTMLElement).closest('a,.btn,input').length) {
            return;
        }
        this.props.togglePop(true);
    }

    protected _getClass() {
        const {state, className} = this.props;
        const {open: opened, disabled} = state;
        return classes(
            'pick',
            className,
            opened && 'is-open focus',
            disabled && 'disabled',
        );
    }

    protected _renderTrigger() {
        const {children, state} = this.props;
        return children ?? (state.value as string);
    }

    protected _renderValue() {
        const {name, state} = this.props;
        if (name) {
            return <input type="hidden" className="pick-value" name={name} value={state.value} />;
        }
        return null;
    }

    render(props: RenderableProps<P>) {
        const {id, style} = props;
        return (
            <div
                id={`pick-${id}`}
                className={this._getClass()}
                style={style}
                tabIndex={-1}
                onClick={this._handleClick}
            >
                {this._renderTrigger()}
                {this._renderValue()}
            </div>
        );
    }
}
