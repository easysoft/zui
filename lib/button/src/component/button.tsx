import {Component, h as _h, ComponentType, Attributes} from 'preact';
import {classes, Icon} from '@zui/core';
import {ButtonProps} from '../types/button-props';
import '../style/index.css';

export class Button extends Component<ButtonProps> {
    render() {
        const {
            component,
            type,
            btnType,
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
        const onlyCaret = caret && isEmptyText && !icon && !trailingIcon && !children && !loading;
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
                type: ButtonComponent === 'button' ? btnType : undefined,
                ...others,
            } as Attributes,
            loading ? <Icon icon={loadingIcon || 'icon-spinner-snake'} className="spin" /> : <Icon icon={icon} />,
            isEmptyText ? null : <span className="text">{loading ? loadingText : text}</span>,
            loading ? null : children,
            loading ? null : <Icon icon={trailingIcon} />,
            loading ? null : caret ? <span className={typeof caret === 'string' ? `caret-${caret}` : 'caret'} /> : null,
        );
    }
}
