import {Component, type RenderableProps} from 'preact';
import {ClassNameLike, classes} from '@zui/core';

export type TextAreaProps = {
    className?: ClassNameLike;
    defaultValue?: string;
    disabled?: boolean;
    value?: string;
    readonly?: boolean;
    placeholder?: string;
    onChange?: (value: string, event: Event) => void;
};

export class TextArea extends Component<TextAreaProps> {
    protected _controlled: boolean;

    constructor(props: TextAreaProps) {
        super(props);
        this._controlled = props.value !== undefined;
    }

    get value() {
        return (this.base as HTMLTextAreaElement).value;
    }

    protected _handleChange = (event: Event) => {
        const {onChange} = this.props;
        const value = (event.target as HTMLTextAreaElement).value;
        if (onChange) {
            onChange(value, event);
        }
    };

    render(props: RenderableProps<TextAreaProps>) {
        const {className, onChange, ...rest} = props;
        return (
            <textarea className={classes('form-control', className as ClassNameLike)} onChange={this._handleChange} {...rest} />
        );
    }
}
