import {Component, JSX} from 'preact';
import type {JSXInternal} from 'preact/src/jsx';
import {classes} from '@zui/core';

type InputProps = {
    className?: string;
    style?: JSX.CSSProperties;
    type?: string;
    defaultValue?: string;
    value?: string;
    onChange?: (value: string) => void;
    icon?: string;
};

type InputState = {
    value: string;
};

export default class Input extends Component<InputProps, InputState> {
    constructor(props: InputProps) {
        super(props);

        this.state = {
            value: props.defaultValue ?? '',
        };
    }

    handleChange = (e: JSXInternal.TargetedEvent<HTMLInputElement, Event>) => {
        const value = (e.target as HTMLInputElement).value;
        this.setState({value});
        const {onChange} = this.props;

        if (onChange) {
            onChange(value);
        }
    };

    handleClear = () => {
        this.setState({value: ''});
        const {onChange} = this.props;

        if (onChange) {
            onChange('');
        }
    };

    componentDidUpdate(previousProps: Readonly<InputProps>): void {
        if (this.props.value !== undefined && previousProps.value !== this.props.value) {
            this.setState({value: this.props.value});
        }
    }

    render() {
        const {type = 'text', icon, value: _value, defaultValue, className, style, onChange, ...rest} = this.props;
        const {value} = this.state;

        const iconView = icon ? <label className="input-control-prefix"><i className={`icon icon-${icon}`}></i></label> : null;

        return (
            <div className={classes('zui-input input-control has-prefix-icon', className)} style={style}>
                {iconView}
                <input className="form-control" type={type} value={value} onChange={this.handleChange} {...rest} />
                <span className={classes('-absolute -w-8 -h-8 -right-0 -top-0 -flex -justify-center -items-center -cursor-pointer', {'-hidden': !value})} onClick={this.handleClear}>
                    <i className="icon icon-close"></i>
                </span>
            </div>
        );
    }
}
