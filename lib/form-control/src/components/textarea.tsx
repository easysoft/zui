import {Component, type RenderableProps} from 'preact';
import {ClassNameLike, classes, $} from '@zui/core';

export type TextAreaProps = {
    className?: ClassNameLike;
    defaultValue?: string;
    disabled?: boolean;
    value?: string;
    readonly?: boolean;
    autoHeight?: boolean;
    placeholder?: string;
    onChange?: (value: string, event: Event) => void;
};

export class TextArea extends Component<TextAreaProps> {
    get value() {
        return (this.base as HTMLTextAreaElement).value;
    }

    autoHeight() {
        $.autoHeight(this.base);
    }

    componentDidMount(): void {
        if (this.props.autoHeight) {
            this.autoHeight();
            $(this.base).on('input paste change', () => {
                this.autoHeight();
            });
        }
    }

    componentWillUnmount(): void {
        if (this.props.autoHeight) {
            $(this.base).off('input paste change');
        }
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
