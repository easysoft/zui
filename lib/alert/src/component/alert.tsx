import {isValidElement, ComponentChildren} from 'preact';
import {classes} from '@zui/core';
import {Button} from '@zui/button/src/component/button';
import type {ButtonProps} from '@zui/button';
import type {ToolbarOptions} from '@zui/toolbar';
import '@zui/css-icons/src/icons/close.css';
import {AlertOptions} from '../types';
import {Toolbar} from '@zui/toolbar/src/component';

export function Alert({
    className,
    style,
    actions,
    heading,
    content,
    contentClass,
    children,
    close,
    onClose,
    icon,
    ...others
}: AlertOptions) {
    let closeButton: ComponentChildren;
    if (close === true) {
        closeButton = <Button className="alert-close btn ghost" square onClick={onClose}><span class="close"></span></Button>;
    } else if (isValidElement(close)) {
        closeButton = close;
    } else if (typeof close === 'object') {
        closeButton = <Button {...(close as ButtonProps)} onClick={onClose} />;
    }
    const actionsToolbar = isValidElement(actions) ? actions : (actions ? <Toolbar {...actions as ToolbarOptions} /> : null);
    return (
        <div className={classes('alert', className)} style={style} {...others}>
            {isValidElement(icon) ? icon : (typeof icon === 'string' ? <i className={`icon ${icon}`}></i> : null)}
            {isValidElement(content) ? content : (
                <div className={classes('alert-content', contentClass)}>
                    {isValidElement(heading) ? heading : (heading && <div className="alert-heading">{heading}</div>)}
                    <div className="alert-text">{content}</div>
                    {heading ? actionsToolbar : null}
                </div>
            )}
            {heading ? null : actionsToolbar}
            {closeButton}
            {children}
        </div>
    );
}
