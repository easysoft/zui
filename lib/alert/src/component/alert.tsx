import {isValidElement, ComponentChildren} from 'preact';
import {classes, CustomContent, Icon} from '@zui/core';
import {Button} from '@zui/button/src/component/button';
import type {ButtonProps} from '@zui/button';
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
    iconClass,
    ...others
}: AlertOptions) {
    let closeButton: ComponentChildren;
    if (close === true) {
        closeButton = <Button className="alert-close btn ghost square text-inherit" square onClick={onClose}><span class="close"></span></Button>;
    } else if (isValidElement(close)) {
        closeButton = close;
    } else if (typeof close === 'object') {
        closeButton = <Button {...(close as ButtonProps)} onClick={onClose} />;
    }
    const actionsToolbar = Toolbar.render(actions, []);
    return (
        <div className={classes('alert', className)} style={style} {...others}>
            <Icon icon={icon} className={classes('alert-icon', iconClass)} />
            {typeof content !== 'string' ? <CustomContent className="alert-content" content={content} /> : (
                <div className={classes('alert-content', contentClass)}>
                    {typeof heading !== 'string' ? <CustomContent className="alert-heading" content={heading} /> : (heading && <div className="alert-heading">{heading}</div>)}
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
