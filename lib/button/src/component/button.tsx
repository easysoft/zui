import {Component, h as _h, ComponentType, Attributes} from 'preact';
import {classes} from '@zui/browser-helpers/src/classes';
import '../style/index.css';
import {ButtonProps} from '../types/button-props';

export class Button extends Component<ButtonProps> {
    render() {
        const {
            component,
            type,
            size,
            className,
            children,
            url,
            target,
            disabled,
            active,
            loading,
            loadingIcon,
            loadingText,
            icon,
            text,
            trailingIcon,
            caret,
            square,
            hint,
            ...others
        } = this.props;

        const ButtonComponent = component || (url ? 'a' : 'button');
        const isEmptyText = text === undefined || text === null || (typeof text === 'string' && !text.length) || loading && !loadingText;
        const onlyCaret = isEmptyText && !icon && !trailingIcon && !children && !loading;
        return _h(
            ButtonComponent as ComponentType<ButtonProps>, {
                className: classes('btn', type, className, {
                    'btn-caret': onlyCaret,
                    disabled: disabled || loading,
                    active,
                    loading,
                    square: square === undefined ? (!onlyCaret && !children && isEmptyText) : square,
                }, size ? `size-${size}` : ''),
                title: hint,
                [ButtonComponent === 'a' ? 'href' : 'data-url']: url,
                [ButtonComponent === 'a' ? 'target' : 'data-target']: target,
                type: ButtonComponent === 'button' ? 'button' : undefined,
                ...others,
            } as Attributes,
            loading ? <i class={`spin icon ${loadingIcon || 'icon-spinner-snake'}`} /> : typeof icon === 'string' ? <i class={`icon ${icon}`} /> : icon,
            isEmptyText ? null : <span className="text">{loading ? loadingText : text}</span>,
            loading ? null : children,
            loading ? null : typeof trailingIcon === 'string' ? <i class={`icon ${trailingIcon}`} /> : trailingIcon,
            loading ? null : caret ? <span className={typeof caret === 'string' ? `caret-${caret}` : 'caret'} /> : null,
        );
    }
}
