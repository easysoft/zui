import {Attributes} from 'preact';
import {classes, CustomContent, Icon} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';
import type {ToolbarOptions} from '@zui/toolbar/src/types';
import '@zui/css-icons/src/icons/caret.css';
import {TreeItemProps} from '../types/tree-item-props';

export function TreeItem({
    type,
    component,
    className,
    children,
    content,
    style,
    attrs,
    url,
    disabled,
    active,
    icon,
    text,
    target,
    trailingIcon,
    hint,
    checked,
    actions,
    show,
    level = 0,
    items,
    ...others
}: TreeItemProps) {
    const toolbarOptions = Array.isArray(actions) ? {items: actions} as ToolbarOptions : actions;
    if (toolbarOptions) {
        if (!toolbarOptions.btnProps) {
            toolbarOptions.btnProps = {size: 'sm'};
        }
        toolbarOptions.className = classes('tree-actions not-nested-toggle', toolbarOptions.className);
    }
    return (
        <div
            className={classes('tree-item-content', className, {disabled, active})}
            title={hint}
            data-target={target}
            style={{paddingLeft: `calc(${level} * var(--tree-indent, 20px))`}}
            data-level={level}
            {...(others as Attributes)}
        >
            <span class={`tree-toggle-icon${items ? ' state' : ''}`}>{items ? <span class={`caret-${show ? 'down' : 'right'}`}></span> : null}</span>
            {typeof checked === 'boolean' ? (
                <div class={`tree-checkbox checkbox-primary${checked ? ' checked' : ''}`}>
                    <label />
                </div>
            ) : null}
            <Icon icon={icon} className="tree-icon" />
            {url ? <a className="text tree-link not-nested-toggle" href={url} style={style} {...(attrs as Attributes)}>{text}</a> : <span class="text" style={style} {...(attrs as Attributes)}>{text}</span>}
            <CustomContent content={content} />
            {children}
            {toolbarOptions ? <Toolbar {...toolbarOptions} /> : null}
            <Icon icon={trailingIcon} className="tree-trailing-icon" />
        </div>
    );
}
