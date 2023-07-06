import {$, classes} from '@zui/core';
import type {MenuItemOptions} from '@zui/menu/src/types';
import {Menu} from '@zui/menu/src/component/menu';
import {MenuOptions} from '@zui/menu/src/types';
import {flip, computePosition, shift, offset} from '@floating-ui/dom';
import '@zui/css-icons/src/icons/caret.css';
import '../style/index.css';
import {ActionMenuNestedItemOptions} from '@zui/action-menu/src/types';

export class ContextMenu<T extends MenuItemOptions = MenuItemOptions> extends Menu<T> {
    static defaultProps: Partial<MenuOptions> = {
        ...Menu.defaultProps,
        popup: true,
    };

    #layoutTimer = 0;

    get nestedTrigger() {
        return this.props.nestedTrigger || 'hover';
    }

    get name() {
        return 'menu';
    }

    get menuName() {
        return 'menu-context';
    }

    protected layout() {
        const element = this.ref.current as HTMLElement;
        const trigger = element?.parentElement;
        if (!element || !trigger) {
            return;
        }

        computePosition(trigger, element, {
            placement: 'right-start',
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
            className: classes('absolute', props.className),
            popup: true,
        };
    }

    afterRender(firstRender: boolean) {
        super.afterRender(firstRender);
        if (this.props.controlledMenu) {
            this.layout();
            this.#layoutTimer = window.setTimeout(this.layout.bind(this), 100);
        }
    }

    renderToggleIcon() {
        return <span class="contextmenu-toggle-icon caret-right" />;
    }

    componentWillUnmount(): void {
        super.componentWillUnmount();
        if (this.#layoutTimer) {
            clearTimeout(this.#layoutTimer);
        }
    }
}
