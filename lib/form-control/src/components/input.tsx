import {Component, type RenderableProps} from 'preact';
import {ClassNameLike, classes} from '@zui/core';

export type InputProps = {
    type?: string;
    className?: ClassNameLike;
    defaultValue?: string | number;
    disabled?: boolean;
    value?: string | number;
    readonly?: boolean;
    placeholder?: string;
    autofocus?: boolean;
    onChange?: (value: string | number, event: Event) => void;
};

export class Input extends Component<InputProps> {
    protected _controlled: boolean;

    constructor(props: InputProps) {
        super(props);
        this._controlled = props.value !== undefined;
    }

    get value() {
        return (this.base as HTMLInputElement).value;
    }

    protected _handleChange = (event: Event) => {
        const {onChange, type} = this.props;
        const value = (event.target as HTMLInputElement).value;
        if (onChange) {
            onChange(type === 'number' ? +value : value, event);
        }
    };

    render(props: RenderableProps<InputProps>) {
        const {type = 'text', className, onChange, ...rest} = props;
        return (
            <input type={type as string} className={classes('form-control', className as ClassNameLike)} onChange={this._handleChange} {...rest} />
        );
    }
}
