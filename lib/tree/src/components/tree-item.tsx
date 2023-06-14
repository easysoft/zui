import {Attributes, h as _h} from 'preact';
import {classes, Icon} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';
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
    const toolbarOptions = Array.isArray(actions) ? {items: actions} : actions;
    return (
        <div
            className={classes('tree-item-content', className, {disabled, active})}
            title={hint}
            data-target={target}
            style={Object.assign({paddingLeft: `${level * 20}px`}, style)}
            {...(attrs as Attributes)}
            {...(others as Attributes)}
        >
            <span class={classes('tree-toggle-icon', items ? `caret-${show ? 'down' : 'right'}` : '')} />
            {typeof checked === 'boolean' ? (
                <div class={`checkbox-primary${checked ? ' checked' : ''}`}>
                    <label />
                </div>
            ) : null}
            <Icon icon={icon} />
            {_h(url ? 'a' : 'span', {href: url, className: 'text'}, text)}
            {typeof children === 'function' ? children() : children}
            {toolbarOptions ? <Toolbar {...toolbarOptions} /> : null}
            <Icon icon={trailingIcon} />
        </div>
    );
}
