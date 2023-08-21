import {$, classes} from '@zui/core';
import {flip, computePosition, shift, offset} from '@floating-ui/dom';
import {SearchMenu} from '@zui/menu/src/component';
import '@zui/css-icons/src/icons/caret.css';
import type {MenuItemOptions} from '@zui/menu/src/types';
import type {MenuOptions} from '@zui/menu/src/types';
import type {ActionMenuNestedItemOptions} from '@zui/action-menu/src/types';
import type {DropdownMenuOptions} from '../types/dropdown-menu-options';

export class DropdownMenu<T extends MenuItemOptions = MenuItemOptions, O extends DropdownMenuOptions<T> = DropdownMenuOptions<T>> extends SearchMenu<T, O> {
    static defaultProps: Partial<DropdownMenuOptions> = {
        ...SearchMenu.defaultProps,
        popup: true,
        search: false,
        nestedTrigger: 'hover',
        placement: 'right-start',
    };

    protected _layoutTimer = 0;

    get name() {
        return 'menu';
    }

    get menuName() {
        return 'dropdown-menu';
    }

    protected layout() {
        const element = this.ref.current as HTMLElement;
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

    getNestedMenuProps(items: ActionMenuNestedItemOptions[]): MenuOptions {
        const props = super.getNestedMenuProps(items);
        return {
            ...props,
            className: classes('show', props.className),
            popup: true,
        };
    }

    afterRender(firstRender: boolean) {
        super.afterRender(firstRender);
        if (this.props.controlledMenu) {
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
