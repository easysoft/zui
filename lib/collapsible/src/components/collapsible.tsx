import {classes, CustomContent, HElement} from '@zui/core';
import {Button} from '@zui/button/react';

import type {ClassNameLike} from '@zui/core';
import type {ComponentChildren, RenderableProps} from 'preact';
import type {CollapsibleProps, CollapsibleState} from '../types';
import {Toolbar} from '@zui/toolbar/react';

export class Collapsible extends HElement<CollapsibleProps, CollapsibleState> {
    static defaultProps = {
        toggleOnClickHeader: true,
        onlyHideOnCollapsed: true,
    };

    constructor(props: CollapsibleProps) {
        super(props);
        this.state = {
            collapsed: props.collapsed ?? props.defaultCollapsed ?? false,
        };
    }

    get collapsed() {
        return this.props.collapsed ?? this.state.collapsed;
    }

    toggle(collapsed?: boolean) {
        const {collapsed: collapsedProp, onChange} = this.props;
        const nextCollapsed = collapsed ?? !this.collapsed;
        if (nextCollapsed === this.collapsed || onChange?.call(this, nextCollapsed) === false) {
            return;
        }
        if (collapsedProp === undefined) {
            this.setState({collapsed: nextCollapsed});
        }
    }

    protected _getClassName(props: RenderableProps<CollapsibleProps>): ClassNameLike {
        const {disabled, header, bordered, title, actions} = props;
        const {collapsed} = this;
        return [props.className, 'collapsible', {
            disabled,
            bordered,
            'no-header': header === undefined && title === undefined && actions === undefined,
            'is-collapsed': collapsed,
        }];
    }

    protected _handleClickHeader = (event: MouseEvent) => {
        if (this.props.disabled) {
            return;
        }
        const target = event.target as HTMLElement;
        if (target.closest('.collapsible-toggle-btn') || (this.props.toggleOnClickHeader && !target.closest('a,button'))) {
            this.toggle();
        }
    };

    protected _renderHeader(props: RenderableProps<CollapsibleProps>) {
        const {header, headerClass, collapsedIcon, expandedIcon, toggleButton, title, actions, caption, disabled} = props;
        const {collapsed} = this;
        const icon = collapsed ? collapsedIcon : expandedIcon;
        const {className: toggleButtonClass, ...toggleButtonProps} = toggleButton || {};
        return (
            <div
                key="header"
                className={classes('collapsible-header', headerClass)}
                onClick={this._handleClickHeader}
            >
                <Button className={classes('collapsible-toggle-btn', toggleButtonClass)} size="sm" type="ghost" icon={icon} square disabled={disabled} aria-expanded={!collapsed} {...toggleButtonProps}>
                    {icon ? null : <span className={`text-xs ${collapsed ? 'chevron-right' : 'chevron-down'}`}></span>}
                </Button>
                {title ? <CustomContent className="collapsible-header-title" content={title} /> : null}
                {caption ? <CustomContent className="collapsible-header-caption" content={caption} /> : null}
                {header ? <CustomContent content={header} /> : null}
                {actions ? <div className="flex-1" /> : null}
                {actions ? Toolbar.render(actions, [], {key: 'actions', className: 'collapsible-header-actions', relativeTarget: props, size: 'sm'}, this) : null}
            </div>
        );
    }

    protected _renderBody(props: RenderableProps<CollapsibleProps>) {
        const {content, contentClass, contentStyle, children, onlyHideOnCollapsed} = props;
        if (!onlyHideOnCollapsed && this.collapsed) {
            return null;
        }
        return (
            <div key="content" className={classes('collapsible-body', contentClass)} style={contentStyle}>
                <CustomContent content={content} />
                {children}
            </div>
        );
    }

    protected _getChildren(props: RenderableProps<CollapsibleProps>): ComponentChildren {
        return [
            this._renderHeader(props),
            this._renderBody(props),
        ];
    }
}
