import {Component, RenderableProps} from 'preact';
import {classes, nextGid, signal, Signal} from '@zui/core';
import '@zui/css-icons';
import {ColorInputOptions} from '../types';

export class ColorInput extends Component<ColorInputOptions> {
    static defaultProps = {
        defaultValue: '#000000',
    } as Partial<ColorInputOptions>;

    protected _gid = `color-input-${nextGid()}`;

    protected _value$: Signal<string>;

    constructor(props: RenderableProps<ColorInputOptions>) {
        super(props);
        this._value$ = signal(props.value || props.defaultValue || '');
    }

    get value() {
        return this._value$.value;
    }

    protected _handleChange = (event: Event) => {
        this._handleInput(event);
        this.props.onChange?.(this.value, event);
    };

    protected _handleInput = (event: Event) => {
        const value = (event.target as HTMLInputElement).value;
        this._value$.value = value;
    };

    render(props: RenderableProps<ColorInputOptions>) {
        const {id, hint, className, name, value, defaultValue} = props;
        return (
            <div id={id} className={classes('color-input btn', className)} title={hint}>
                <label
                    htmlFor={this._gid}
                    style={{color: this.value}}
                />
                <input
                    id={this._gid}
                    type="color"
                    name={name}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={this._handleChange}
                    onInput={this._handleInput}
                />
            </div>
        );
    }
}
