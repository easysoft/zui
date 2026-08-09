import {isValidElement, ComponentChildren} from 'preact';
import {classes, CustomContent, Icon, getLang} from '@zui/core';
import {Button} from '@zui/button/react';
import type {ButtonProps} from '@zui/button';
import '@zui/css-icons';
import {AlertOptions} from '../types';
import {Toolbar} from '@zui/toolbar/react';

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
    const closeLabel = getLang('close', undefined, 'Close') || 'Close';
    let closeButton: ComponentChildren;
    if (close === true) {
        closeButton = <Button className="alert-close btn ghost square text-inherit" square aria-label={closeLabel} onClick={onClose}><span className="close"></span></Button>;
    } else if (isValidElement(close)) {
        closeButton = close;
    } else if (typeof close === 'object') {
        const {className: closeClassName, square, onClick: onCloseClick, ...closeProps} = close as ButtonProps;
        const handleClose: NonNullable<ButtonProps['onClick']> = (event) => {
            onCloseClick?.(event);
            if (!event.defaultPrevented) {
                onClose?.(event);
            }
        };
        closeButton = <Button type="ghost" className={classes('alert-close', closeClassName)} square={square ?? true} aria-label={closeLabel} {...closeProps} onClick={handleClose} />;
    }
    const actionsToolbar = Toolbar.render(actions, []);
    return (
        <div className={classes('alert', className)} style={style} {...others}>
            <Icon icon={icon} className={classes('alert-icon', iconClass)} />
            {typeof content !== 'string' ? <CustomContent content={content} /> : (
                <div className={classes('alert-content', contentClass)}>
                    {typeof heading !== 'string' ? <CustomContent content={heading} /> : (heading && <div className="alert-heading">{heading}</div>)}
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
