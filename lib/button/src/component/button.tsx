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
            icon,
            text,
            trailingIcon,
            caret,
            hint,
            ...others
        } = this.props;

        const ButtonComponent = component || (url ? 'a' : 'button');

        return _h(
            ButtonComponent as ComponentType<ButtonProps>, {
                className: classes('btn', type, className, {disabled, active, loading}, size ? `size-${size}` : ''),
                title: hint,
                [ButtonComponent === 'a' ? 'href' : 'data-url']: url,
                [ButtonComponent === 'a' ? 'target' : 'data-target']: url,
                type: ButtonComponent === 'button' ? 'button' : undefined,
                ...others,
            } as Attributes,
            typeof icon === 'string' ? <i class={`icon ${icon}`} /> : icon,
            <span className="text">{text}</span>,
            children,
            typeof trailingIcon === 'string' ? <i class={`icon ${trailingIcon}`} /> : trailingIcon,
            caret ? <span className={typeof caret === 'string' ? `caret-${caret}` : 'caret'} /> : null,
        );
    }
}
