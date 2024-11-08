import {$, mergeProps, parseSize} from '@zui/core';
import {flip, computePosition, shift, size, offset} from '@floating-ui/dom';
import {SearchMenu} from '@zui/menu/src/component';

import type {ClassNameLike} from '@zui/core';
import type {SearchBoxOptions} from '@zui/search-box';
import type {ListItemsSetting, NestedItem, NestedListProps} from '@zui/list';
import {type ComponentChildren, type RenderableProps, type ComponentChild} from 'preact';
import type {MouseEventInfo} from '@zui/list/src/component';
import type {DropdownMenuOptions} from '../types/dropdown-menu-options';
import type {Dropdown} from '../vanilla';

export class DropdownMenu<T extends DropdownMenuOptions = DropdownMenuOptions> extends SearchMenu<T> {
    static defaultProps: Partial<DropdownMenuOptions> = {
        ...SearchMenu.defaultProps,
        searchBox: false,
        placement: 'right-start',
        defaultNestedShow: false,
        expandOnSearch: false,
        nestedSearch: false,
        flip: false,
        shift: true,
        offset: 1,
    };

    static inheritNestedProps = [...SearchMenu.inheritNestedProps, 'container', 'tree'];

    protected declare _nestedContextMenu: ComponentChild[];

    protected declare _searchFocused: boolean;

    protected declare _position: {left: number, top: number, width: number, height: number};

    get isHoverTrigger(): boolean {
        const {nestedTrigger, tree} = this.props;
        return nestedTrigger ? nestedTrigger === 'hover' : !tree;
    }

    get dropdown(): Dropdown | undefined {
        return this.props.dropdown;
    }

    protected layout() {
        if (this.props.tree || this.isRoot) {
            return;
        }

        const element = this.element?.parentElement;
        const $element = $(element);
        if (element && this._searchFocused && this._position) {
            $element.css(this._position);
        }

        const $menu = $element.parent().children('.dropdown-menu');
        const $trigger = $menu.children(`[z-key-path="${this.props.parentKey}"]`);
        const trigger = $trigger[0];
        if (!element || !trigger) {
            return;
        }

        let {maxHeight} = this.props;
        const {flip: flipSetting, shift: shiftSetting, offset: offsetSetting} = this.props;
        computePosition(trigger, element, {
            placement: this.props.placement,
            middleware: [
                flipSetting ? flip() : null,
                shiftSetting ? shift(typeof shiftSetting === 'object' ? shiftSetting : undefined) : null,
                offset(offsetSetting),
                size({
                    apply({availableWidth, availableHeight}) {
                        if (maxHeight) {
                            const [maxHeightVal, unit] = parseSize(maxHeight);
                            maxHeight = Math.min(unit === '%' ? (maxHeightVal *  window.innerHeight) : maxHeightVal, availableHeight - 2);
                        } else {
                            maxHeight = availableHeight;
                        }
                        $element.css({maxHeight, maxWidth: availableWidth - 2});
                    },
                })],
        }).then(({x, y}) => {
            $element.css({
                left: x,
                top: y,
            });
            this._position = {left: x, top: y, width: element.offsetWidth, height: element.offsetHeight};
        });
    }

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return ['dropdown-menu scrollbar-hover scrollbar-thin', super._getClassName(props)];
    }

    protected _afterRender(firstRender: boolean) {
        super._afterRender(firstRender);
        this.layout();
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

    protected _handleSearchFocus = () => {
        this._searchFocused = true;
    };

    protected _handleSearchBlur = () => {
        this._searchFocused = false;
    };

    protected _getSearchBoxProps(props: RenderableProps<T>): SearchBoxOptions {
        return {
            ...super._getSearchBoxProps(props),
            onFocus: this._handleSearchFocus,
            onBlur: this._handleSearchBlur,
        };
    }

    protected _beforeRender(props: RenderableProps<T>): void | RenderableProps<T> | undefined {
        this._nestedContextMenu = [];
        return super._beforeRender(props);
    }
}
