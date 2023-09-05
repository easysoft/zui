import {$, classes} from '@zui/core';
import {flip, computePosition, shift, offset} from '@floating-ui/dom';
import {SearchMenu} from '@zui/menu/src/component';

import type {ClassNameLike} from '@zui/core';
import type {RenderableProps} from 'preact';
import type {ItemsSetting, NestedItem, NestedListProps} from '@zui/list';
import type {DropdownMenuOptions} from '../types/dropdown-menu-options';

export class DropdownMenu<T extends DropdownMenuOptions = DropdownMenuOptions> extends SearchMenu<T> {
    static defaultProps = {
        ...SearchMenu.defaultProps,
        popup: true,
        search: false,
        nestedTrigger: 'hover',
        placement: 'right-start',
    };

    protected _layoutTimer = 0;

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return ['dropdown-menu', super._getClassName(props)];
    }

    protected layout() {
        const element = this._ref.current as HTMLElement;
        const trigger = element?.parentElement;
        if (!element || !trigger) {
            return;
        }

        computePosition(trigger, element, {
            placement: this.props.placement,
            middleware: [flip(), shift(), offset(1)],
        }).then(({x, y}) => {
            $(element).css({
                left: x,
                top: y,
            });
        });
    }

    protected _getNestedProps(props: RenderableProps<T>, items: ItemsSetting, item: NestedItem): NestedListProps {
        const nestedProps = super._getNestedProps(props, items, item) as DropdownMenuOptions;
        nestedProps.className = classes(nestedProps.className, 'show');
        nestedProps.popup = true;
        return nestedProps;
    }

    protected _afterRender(firstRender: boolean) {
        super._afterRender(firstRender);
        if (!this.isRoot) {
            this.layout();
            this._layoutTimer = window.setTimeout(this.layout.bind(this), 100);
        }
    }

    renderToggleIcon() {
        return <span class="dropdown-menu-toggle-icon caret-right ml-2" />;
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
        if (this._layoutTimer) {
            clearTimeout(this._layoutTimer);
        }
    }
}
