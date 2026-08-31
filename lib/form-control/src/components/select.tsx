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

function normalizeValue(value: string | string[] | undefined, multiple = false): string | string[] {
    if (Array.isArray(value)) {
        return value.filter(item => item !== null && item !== undefined).map(String);
    }
    if (multiple) {
        return value === undefined || value === null || value === '' ? [] : [String(value)];
    }
    return String(value ?? '');
}

export class Select extends Component<SelectProps, SelectState> {
    constructor(props: SelectProps) {
        super(props);

        this.state = {
            value: normalizeValue(props.value ?? props.defaultValue, props.multiple),
        };
    }

    get value() {
        return this.props.value === undefined ? this.state.value : normalizeValue(this.props.value, this.props.multiple);
    }

    componentDidUpdate(previousProps: Readonly<SelectProps>): void {
        if (previousProps.value !== this.props.value || previousProps.multiple !== this.props.multiple) {
            this.setState({value: normalizeValue(this.props.value ?? this.props.defaultValue, this.props.multiple)});
        }
    }

    protected _handleChange = (event: Event) => {
        const {onChange} = this.props;
        const valueList = Array.from((event.target as HTMLSelectElement).selectedOptions).map(option => option.value);
        const value = this.props.multiple ? valueList : valueList[0];
        if (this.props.value === undefined) {
            this.setState({value});
        } else {
            this.forceUpdate();
        }
        if (onChange) {
            onChange(value, event);
        }
    };

    render(props: RenderableProps<SelectProps>) {
        const {items = [], className, value: _value, defaultValue, multiple, placeholder, onChange, disabled, readonly, ...rest} = props;
        const value = this.value;
        const valueList = Array.isArray(value) ? value : [value];
        const valueSet = new Set(valueList);
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
            <select className={classes('form-control', className as ClassNameLike)} multiple={multiple} value={multiple ? undefined : valueList[0]} disabled={disabled || readonly} aria-readonly={readonly || undefined} onChange={this._handleChange} {...rest}>
                {(hasSelectedValue && !multiple) ? null : <option value="">{placeholder}</option>}
                {options}
            </select>
        );
    }
}
