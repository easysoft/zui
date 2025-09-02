import {Component, type RenderableProps} from 'preact';
import {ClassNameLike, classes} from '@zui/core';

export type SelectProps = {
    multiple?: boolean;
    className?: ClassNameLike;
    defaultValue?: string | string[];
    disabled?: boolean;
    value?: string | string[];
    readonly?: boolean;
    items?: {text: string; value: string}[];
    onChange?: (value: string | string[], event: Event) => void;
};

export type SelectState = {
    value: string | string[];
};

export class Select extends Component<SelectProps, SelectState> {
    constructor(props: SelectProps) {
        super(props);
        this.state = {
            value: props.value ?? props.defaultValue ?? (props.multiple ? [] : ''),
        };
    }

    get value() {
        return this.state.value;
    }

    componentDidUpdate(previousProps: Readonly<SelectProps>): void {
        if (previousProps.value !== this.props.value) {
            this.setState({value: this.props.value ?? this.props.defaultValue ?? (this.props.multiple ? [] : '')});
        }
    }

    protected _handleChange = (event: Event) => {
        const {onChange} = this.props;
        const valueList = Array.from((event.target as HTMLSelectElement).selectedOptions).map(option => option.value);
        const value = this.props.multiple ? valueList : valueList[0];
        this.setState({value});
        if (onChange) {
            onChange(value, event);
        }
    };

    render(props: RenderableProps<SelectProps>) {
        const {items = [], className, value: _value, defaultValue, multiple, onChange, ...rest} = props;
        const {value} = this.state;
        const valueSet = new Set(multiple ? value : [value]);
        return (
            <select className={classes('form-control', className as ClassNameLike)} multiple={multiple} onChange={this._handleChange} {...rest}>
                {
                    (items as {text: string; value: string}[]).map(item => (
                        <option value={item.value} selected={valueSet.has(item.value)}>{item.text}</option>
                    ))
                }
            </select>
        );
    }
}
