import {Component, RenderableProps} from 'preact';
import {classes, Icon, nextGid, signal, Signal} from '@zui/core';
import '@zui/css-icons';
import {ColorInputOptions} from '../types';

export class ColorInput extends Component<ColorInputOptions> {
    static defaultProps = {
        defaultValue: '',
    } as Partial<ColorInputOptions>;

    protected _gid = `color-input-${nextGid()}`;

    protected _value$: Signal<string>;

    constructor(props: RenderableProps<ColorInputOptions>) {
        super(props);
        this._value$ = signal(props.value ?? props.defaultValue ?? '');
    }

    get value() {
        return this.props.value ?? this._value$.value;
    }

    protected _handleChange = (event: Event) => {
        const value = this._handleInput(event);
        this.props.onChange?.(value, event);
    };

    protected _handleInput = (event: Event) => {
        const value = (event.target as HTMLInputElement).value;
        this._value$.value = value;
        this.props.onInput?.(value, event);
        return value;
    };

    render(props: RenderableProps<ColorInputOptions>) {
        const {id, hint, className, name, value, icon, defaultValue} = props;
        const color = this.value;
        const empty = !color;
        return (
            <div
                id={id}
                className={classes('color-input btn', className, {'is-empty': empty})}
                title={hint}
                style={{'--color-input-value': color}}
            >
                <label htmlFor={this._gid}>
                    {icon ? <Icon icon={icon} /> : null}
                </label>
                <input
                    id={this._gid}
                    type="color"
                    aria-label={hint}
                    name={empty ? undefined : name}
                    value={value}
                    defaultValue={defaultValue}
                    onChange={this._handleChange}
                    onInput={this._handleInput}
                />
                {/* 原生颜色输入框会将空值转为黑色，空值通过隐藏字段提交。 */}
                {empty && name ? <input type="hidden" name={name} value="" /> : null}
            </div>
        );
    }
}
