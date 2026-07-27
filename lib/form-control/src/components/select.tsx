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
    placeholder?: string;
    onChange?: (value: string | string[], event: Event) => void;
};

export type SelectState = {
    value: string | string[];
};

export class Select extends Component<SelectProps, SelectState> {
    constructor(props: SelectProps) {
        super(props);

        let value = props.value ?? props.defaultValue ?? (props.multiple ? [] : '');
        if (Array.isArray(value)) {
            value = value.reduce((acc, curr) => {
                if (curr !== null && curr !== undefined) {
                    acc.push(String(curr));
                }
                return acc;
            }, [] as string[]);
        } else {
            value = String(value ?? '');
        }
        this.state = {
            value,
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
        const {items = [], className, value: _value, defaultValue, multiple, placeholder, onChange, ...rest} = props;
        const {value} = this.state;
        const valueSet = new Set(multiple ? value : [value]);
        let hasSelectedValue = false;
        const options = (items as {text: string; value: string}[]).map((item) => {
            const itemValue = String(item.value ?? '');
            const selected = valueSet.has(itemValue);
            if (selected) {
                hasSelectedValue = true;
            }
            return (
                <option key={itemValue} value={itemValue} selected={selected}>{item.text}</option>
            );
        });
        return (
            <select className={classes('form-control', className as ClassNameLike)} multiple={multiple} onChange={this._handleChange} {...rest}>
                {(hasSelectedValue && !multiple) ? null : <option value="">{placeholder}</option>}
                {options}
            </select>
        );
    }
}
