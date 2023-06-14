import {Attributes} from 'preact';
import {classes, Icon} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';
import type {ToolbarOptions} from '@zui/toolbar/src/types';
import '@zui/css-icons/src/icons/caret.css';
import {TreeItemProps} from '../types/tree-item-props';

export function TreeItem({
    type,
    component,
    className,
    children,
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
    const toolbarOptions = Array.isArray(actions) ? {btnProps: {size: 'sm'}, items: actions} as ToolbarOptions : actions;
    return (
        <div
            className={classes('tree-item-content', className, {disabled, active})}
            title={hint}
            data-target={target}
            style={Object.assign({paddingLeft: `${level * 20}px`}, style)}
            data-level={level}
            {...(attrs as Attributes)}
            {...(others as Attributes)}
        >
            <span class={`tree-toggle-icon${items ? ' state' : ''}`}>{items ? <span class={`caret-${show ? 'down' : 'right'}`}></span> : null}</span>
            {typeof checked === 'boolean' ? (
                <div class={`tree-checkbox checkbox-primary${checked ? ' checked' : ''}`}>
                    <label />
                </div>
            ) : null}
            <Icon icon={icon} className="tree-icon" />
            {url ? <a className="text tree-link not-nested-toggle" href={url}>{text}</a> : <span class="text">{text}</span>}
            {typeof children === 'function' ? children() : children}
            {toolbarOptions ? <Toolbar {...toolbarOptions} /> : null}
            <Icon icon={trailingIcon} className="tree-trailing-icon" />
        </div>
    );
}
