import {classes, CustomContent, HElement} from '@zui/core';
import {Button} from '@zui/button/react';
import {Toolbar} from '@zui/toolbar/react';

import type {ClassNameLike} from '@zui/core';
import type {ComponentChildren, RenderableProps} from 'preact';
import type {CollapsibleProps, CollapsibleState} from '../types';

export class Collapsible extends HElement<CollapsibleProps, CollapsibleState> {
    static customProps = ['onChange'];

    static defaultProps = {
        toggleOnClickHeader: true,
        onlyHideOnCollapsed: true,
    };

    protected _activating = false;

    constructor(props: CollapsibleProps) {
        super(props);
        this.state = {
            collapsed: props.collapsed ?? props.defaultCollapsed ?? false,
        };
    }

    get collapsed() {
        // Native activation changes open before the asynchronous toggle notification.
        const element = this.base as HTMLDetailsElement | undefined;
        return this.props.collapsed ?? (element ? !element.open : this.state.collapsed);
    }

    toggle(collapsed?: boolean) {
        const element = this.base as HTMLDetailsElement | undefined;
        const nextCollapsed = collapsed ?? !this.collapsed;
        if (nextCollapsed === this.collapsed) {
            return;
        }
        this._activating = true;
        try {
            (element?.firstElementChild as HTMLElement | undefined)?.click();
        } finally {
            this._activating = false;
        }
    }

    protected _getComponent() {
        return 'details' as const;
    }

    protected _getProps(props: RenderableProps<CollapsibleProps>): Record<string, unknown> {
        const elementProps = super._getProps(props);
        const {onToggle} = elementProps;
        return {
            ...elementProps,
            open: !this.collapsed,
            onToggle: (event: Event) => {
                this._handleToggle(event);
                if (typeof onToggle === 'function') {
                    onToggle.call(event.currentTarget, event);
                }
            },
        };
    }

    protected _getClassName(props: RenderableProps<CollapsibleProps>): ClassNameLike {
        const {disabled, bordered} = props;
        return [props.className, 'details collapsible', {
            disabled,
            bordered,
        }];
    }

    protected _handleToggle = (event: Event) => {
        const element = event.currentTarget as HTMLDetailsElement;
        const {collapsed} = this.props;
        if (collapsed !== undefined) {
            if (element.open === collapsed) {
                element.open = !collapsed;
            }
        } else {
            this.setState({collapsed: !element.open});
        }
    };

    protected _handleClickHeader = (event: MouseEvent) => {
        const summary = event.currentTarget as HTMLElement;
        const target = event.target as HTMLElement;
        if (target.closest('summary') !== summary) {
            return;
        }
        if (this._activating) {
            // Keep the proxy activation from delivering a second click to ancestors.
            event.stopPropagation();
        }
        if (event.defaultPrevented) {
            return;
        }
        const button = target.closest('.collapsible-toggle-btn');
        if (button && summary.contains(button)) {
            event.preventDefault();
            if (!this.props.disabled && !button.matches(':disabled, .disabled, [aria-disabled="true"]')) {
                this.toggle();
            }
            return;
        }
        const control = target.closest('a,button,input,select,textarea,label,audio[controls],video[controls]');
        if (control && summary.contains(control)) {
            return;
        }
        const action = target.closest('.collapsible-header-actions,[contenteditable="true"],[role="button"]');
        if (action && summary.contains(action)) {
            event.preventDefault();
            return;
        }
        const {disabled, toggleOnClickHeader, collapsed, onChange} = this.props;
        if (!this._activating && (disabled || !toggleOnClickHeader)) {
            event.preventDefault();
            return;
        }
        if (onChange?.call(this, !this.collapsed) === false || collapsed !== undefined || this.props.collapsed !== undefined) {
            event.preventDefault();
        }
    };

    protected _renderHeader(props: RenderableProps<CollapsibleProps>) {
        const {header, headerClass, collapsedIcon, expandedIcon, toggleButton, title, actions, caption, disabled} = props;
        const {collapsed} = this;
        const icon = collapsed ? collapsedIcon : expandedIcon;
        const {className: toggleButtonClass, ...toggleButtonProps} = toggleButton || {};
        return (
            <summary
                key="header"
                className={classes('collapsible-header', headerClass)}
                tabIndex={-1}
                aria-disabled={disabled || undefined}
                onClick={this._handleClickHeader}
            >
                <Button className={classes('collapsible-toggle-btn', toggleButtonClass)} size="sm" type="ghost" icon={icon} square disabled={disabled} {...toggleButtonProps} attrs={{'aria-label': typeof title === 'string' ? title : undefined, ...toggleButtonProps.attrs, 'aria-expanded': !collapsed}}>
                    {icon ? null : <span className={`text-xs ${collapsed ? 'chevron-right' : 'chevron-down'}`}></span>}
                </Button>
                {title ? <span className="collapsible-header-title"><CustomContent content={title} /></span> : null}
                {caption ? <span className="collapsible-header-caption"><CustomContent content={caption} /></span> : null}
                {header ? <CustomContent content={header} /> : null}
                {actions ? <span className="flex-1" /> : null}
                {actions ? Toolbar.render(actions, [], {key: 'actions', tag: 'span', className: 'collapsible-header-actions', relativeTarget: props, size: 'sm'}, this) : null}
            </summary>
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
