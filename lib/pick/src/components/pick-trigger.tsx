import {Component, RenderableProps} from 'preact';
import {classes, $} from '@zui/core';
import type {PickState, PickTriggerProps} from '../types';

export class PickTrigger<S extends PickState = PickState, P extends PickTriggerProps<S> = PickTriggerProps<S>> extends Component<P> {
    protected _handleClick = (event: MouseEvent) => {
        if ($(event.target as HTMLElement).closest('a,.btn').length) {
            return;
        }
        this.props.togglePop();
    };

    protected _handleFocus = () => {
        this.props.changeState({focus: true} as Partial<S>);
    };

    protected _handleBlur = () => {
        this.props.changeState({focus: false} as Partial<S>);
    };

    protected _getClass() {
        const {state, className} = this.props;
        const {open: opened, disabled, focus: focused} = state;
        return classes(
            className,
            opened && 'is-open',
            focused && 'focus',
            disabled && 'disabled',
        );
    }

    protected _renderTrigger() {
        const {children, state} = this.props;
        return JSON.stringify(this.props.state);
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
                id={id}
                className={this._getClass()}
                style={style}
                tabIndex={-1}
                onClick={this._handleClick}
                onFocus={this._handleFocus}
                onBlur={this._handleBlur}
            >
                {this._renderTrigger()}
                {this._renderValue()}
            </div>
        );
    }
}
