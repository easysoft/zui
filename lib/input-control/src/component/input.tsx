import {Component, JSX} from 'preact';
import {classes} from '@zui/core';

type InputProps = {
    className?: string;
    style?: JSX.CSSProperties;
    type?: string;
    defaultValue?: string;
    value?: string;
    disabled?: boolean;
    readonly?: boolean;
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
            value: props.value ?? props.defaultValue ?? '',
        };
    }

    handleChange = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
        const value = (e.target as HTMLInputElement).value;
        if (this.props.value === undefined) {
            this.setState({value});
        }
        const {onChange} = this.props;

        if (onChange) {
            onChange(value);
        }
    };

    handleClear = () => {
        if (this.props.value === undefined) {
            this.setState({value: ''});
        }
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
        const {type = 'text', icon, value: controlledValue, defaultValue, className, style, onChange, disabled, readonly, ...rest} = this.props;
        const value = controlledValue ?? this.state.value;

        const iconView = icon ? <span className="input-control-prefix" aria-hidden="true"><i className={`icon icon-${icon}`}></i></span> : null;

        return (
            <div className={classes('zui-input input-control', icon ? 'has-prefix-icon' : '', className)} style={style}>
                {iconView}
                <input className="form-control" type={type} value={value} disabled={disabled} readonly={readonly} onChange={this.handleChange} {...rest} />
                <button type="button" className={classes('-absolute -w-8 -h-8 -right-0 -top-0 -flex -justify-center -items-center -cursor-pointer -appearance-none -border-0 -bg-transparent -p-0', {'-hidden': !value || disabled || readonly})} onClick={this.handleClear} aria-label="Clear input">
                    <i className="icon icon-close" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
}
