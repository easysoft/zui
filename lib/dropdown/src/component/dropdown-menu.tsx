import {$, mergeProps} from '@zui/core';
import {flip, computePosition, shift, size, offset} from '@floating-ui/dom';
import {SearchMenu} from '@zui/menu/src/component';

import type {ClassNameLike} from '@zui/core';
import type {ListItemsSetting, NestedItem, NestedListProps} from '@zui/list';
import {type ComponentChildren, type RenderableProps, type ComponentChild} from 'preact';
import type {DropdownMenuOptions} from '../types/dropdown-menu-options';
import type {MouseEventInfo} from '@zui/list/src/component';

export class DropdownMenu<T extends DropdownMenuOptions = DropdownMenuOptions> extends SearchMenu<T> {
    static defaultProps: Partial<DropdownMenuOptions> = {
        ...SearchMenu.defaultProps,
        searchBox: false,
        placement: 'right-start',
        defaultNestedShow: false,
        expandOnSearch: false,
    };

    static inheritNestedProps = [...SearchMenu.inheritNestedProps, 'container', 'tree'];

    protected _layoutTimer = 0;

    protected declare _nestedContextMenu: ComponentChild[];

    get isHoverTrigger(): boolean {
        const {nestedTrigger, tree} = this.props;
        return nestedTrigger ? nestedTrigger === 'hover' : !tree;
    }

    protected layout() {
        if (this.props.tree || this.isRoot) {
            return;
        }

        const element = this.element?.parentElement;
        const $menu = $(element).parent().children('.dropdown-menu');
        const $trigger = $menu.children(`[z-key-path="${this.props.parentKey}"]`);
        const trigger = $trigger[0];
        if (!element || !trigger) {
            return;
        }

        computePosition(trigger, element, {
            placement: this.props.placement,
            middleware: [flip(), shift(), offset(1), size({
                apply({availableWidth, availableHeight}) {
                    $(element).css({maxHeight: availableHeight - 2, maxWidth: availableWidth - 2});
                },
            })],
        }).then(({x, y}) => {
            $(element).css({
                position: 'absolute',
                left: x,
                top: y,
            });
        });
    }

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return ['dropdown-menu scrollbar-hover scrollbar-thin', super._getClassName(props)];
    }

    protected _afterRender(firstRender: boolean) {
        super._afterRender(firstRender);
        this.layout();
        this._layoutTimer = window.setTimeout(this.layout.bind(this), 100);
    }

    protected _getNestedProps(props: RenderableProps<T>, items: ListItemsSetting, item: NestedItem, expanded: boolean): NestedListProps {
        return mergeProps(this.isHoverTrigger ? {
            'z-key': item.key,
            'z-hover': this.props.parentKey ?? 'root',
            onMouseEnter: this._handleHover,
            onMouseLeave: this._handleHover,
        } : {}, super._getNestedProps(props, items, item, expanded)) as NestedListProps;
    }

    protected _getItemFromEvent(event: MouseEvent): MouseEventInfo | undefined {
        const info = super._getItemFromEvent(event) as MouseEventInfo;
        if (info) {
            return info;
        }
        const $menu = $(event.target as HTMLElement).closest('.dropdown-menu[z-key]');
        if ($menu.length) {
            const key = $menu.attr('z-key');
            const $target = $menu.parent().parent().children('.dropdown-menu').children(`[z-key="${key}"]`);
            if ($target.length) {
                return super._getItemFromEvent(event, $target[0]) as MouseEventInfo;
            }
        }
    }

    protected _renderNestedList(props: RenderableProps<T>, items: ListItemsSetting, item: NestedItem, expanded: boolean): ComponentChildren {
        const listView = super._renderNestedList(props, items, item, expanded);
        if (this.props.tree) {
            return listView;
        }
        this._nestedContextMenu.push(listView);
    }

    protected _getWrapClass(props: RenderableProps<T>): ClassNameLike {
        return [super._getWrapClass(props), props.tree ? 'is-tree' : (this.isRoot ? 'is-contextmenu' : 'is-contextmenu popup')];
    }

    protected _renderWrapperFooter(props: RenderableProps<T>): ComponentChildren {
        const footerView = super._renderWrapperFooter(props);
        const nestedContextMenu = this._nestedContextMenu;
        if (this.props.tree || !nestedContextMenu.length) {
            return footerView;
        }
        return [footerView, ...nestedContextMenu];
    }

    protected _renderNestedToggle(_props: RenderableProps<T>, isExpanded: boolean | undefined) {
        if (this.props.tree) {
            return super._renderNestedToggle(_props, isExpanded);
        }
        if (typeof isExpanded !== 'boolean') {
            return;
        }
        return <span className={`${this.name}-toggle nested-toggle-icon`}><span className="caret-right" /></span>;
    }

    protected _beforeRender(props: RenderableProps<T>): void | RenderableProps<T> | undefined {
        this._nestedContextMenu = [];
        return super._beforeRender(props);
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
        if (this._layoutTimer) {
            clearTimeout(this._layoutTimer);
        }
    }
}
