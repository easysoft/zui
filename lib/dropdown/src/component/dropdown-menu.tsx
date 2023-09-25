import {$} from '@zui/core';
import {flip, computePosition, shift, offset} from '@floating-ui/dom';
import {SearchMenu} from '@zui/menu/src/component';

import type {ClassNameLike} from '@zui/core';
import type {RenderableProps} from 'preact';
import type {DropdownMenuOptions} from '../types/dropdown-menu-options';

export class DropdownMenu<T extends DropdownMenuOptions = DropdownMenuOptions> extends SearchMenu<T> {
    static defaultProps: Partial<DropdownMenuOptions> = {
        ...SearchMenu.defaultProps,
        popup: true,
        searchBox: false,
        nestedTrigger: 'hover',
        placement: 'right-start',
        defaultNestedShow: false,
        expandOnSearch: false,
    };

    static inheritNestedProps = [...SearchMenu.inheritNestedProps, 'popup'];

    protected _layoutTimer = 0;

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        return ['dropdown-menu', super._getClassName(props)];
    }

    protected layout() {
        const element = this.element as HTMLElement;
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

    protected _afterRender(firstRender: boolean) {
        super._afterRender(firstRender);
        if (!this.isRoot) {
            this.layout();
            this._layoutTimer = window.setTimeout(this.layout.bind(this), 100);
        }
    }

    protected _renderNestedToggle(_props: RenderableProps<T>, isExpanded: boolean | undefined) {
        if (typeof isExpanded !== 'boolean') {
            return;
        }
        return <span className={`${this.name}-toggle nested-toggle-icon`}><span className="caret-right" /></span>;
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
        if (this._layoutTimer) {
            clearTimeout(this._layoutTimer);
        }
    }
}
