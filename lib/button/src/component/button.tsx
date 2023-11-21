import {HElement, Icon, classes} from '@zui/core';

import type {ClassNameLike} from '@zui/core';
import type {ButtonProps} from '../types/button-props';
import type {RenderableProps} from 'preact';

export class Button<P extends ButtonProps = ButtonProps> extends HElement<P> {
    protected declare _isEmptyText?: boolean;

    protected declare _onlyCaret?: boolean;

    protected _beforeRender(props: RenderableProps<P>) {
        const {text, loading, loadingText, caret, icon, trailingIcon, children} = props;
        this._isEmptyText = text === undefined || text === null || (typeof text === 'string' && !text.length) || loading && !loadingText;
        this._onlyCaret = caret && this._isEmptyText && !icon && !trailingIcon && !children && !loading;
    }

    protected _getChildren(props: RenderableProps<P>) {
        const {loading, loadingIcon, loadingText, icon, text, children, trailingIcon, caret} = props;
        return [
            loading ? <Icon icon={loadingIcon || 'icon-spinner-snake'} className="spin" /> : <Icon icon={icon} />,
            this._isEmptyText ? null : <span className="text">{loading ? loadingText : text}</span>,
            loading ? null : children,
            loading ? null : <Icon icon={trailingIcon} />,
            loading ? null : caret ? <span className={typeof caret === 'string' ? `caret-${caret}` : 'caret'} /> : null,
        ];
    }

    protected _getClassName(props: RenderableProps<P>) {
        const {type, className, disabled, loading, active, children, square, size, rounded} = props;
        return ['btn', type, className, {
            'btn-caret': this._onlyCaret,
            disabled: disabled || loading,
            active,
            loading,
            square: square === undefined ? (!this._onlyCaret && !children && this._isEmptyText) : square,
        }, size ? `size-${size}` : '', typeof rounded === 'string' ? `rounded-${rounded}` : {rounded}];
    }

    protected _getComponent(props: RenderableProps<P>) {
        return props.component || (props.url ? 'a' : 'button');
    }

    protected _getProps(props: RenderableProps<P>) {
        const component = this._getComponent(props);
        const {url, target, disabled, btnType = 'button', hint} = props;
        const asLink = component === 'a';
        const componentProps: Record<string, unknown> = {
            ...super._getProps(props),
            disabled: disabled ? '' : undefined,
            title: hint,
        };
        if (btnType) {
            if (['button', 'reset', 'submit'].includes(btnType)) {
                if (component === 'button') {
                    componentProps.type = btnType;
                }
            } else {
                componentProps.className = classes([componentProps.className as ClassNameLike, btnType]);
            }
        }
        if (!disabled) {
            if (url !== undefined) {
                componentProps[asLink ? 'href' : 'data-url'] = url;
            }
            if (target !== undefined) {
                componentProps[asLink ? 'target' : 'data-target'] = target;
            }
        }
        return componentProps;
    }
}
