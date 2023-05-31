import type {MenuItemOptions} from '@zui/menu/src/types';
import {Menu} from '@zui/menu/src/component/menu';
import '@zui/css-icons/src/icons/caret.css';
import '../style/index.css';
import {flip, computePosition, ComputePositionConfig} from '@floating-ui/dom';
import {classes} from '@zui/core';

export class ContextMenu<T extends MenuItemOptions = MenuItemOptions> extends Menu<T> {
    get nestedTrigger() {
        return this.props.nestedTrigger || 'hover';
    }

    get name() {
        return 'menu';
    }

    get menuName() {
        return 'menu-context';
    }

    componentWillUnmount() {
        super.componentWillUnmount();
    }

    protected getPopperOptions() {
        const config: Partial<ComputePositionConfig> = {
            middleware: [flip()],
            placement: 'right-start',
        };
        return config;
    }

    protected getPopperElement() {
        return this.ref.current?.parentElement as HTMLElement;
    }

    protected createPopper() {
        const config = this.getPopperOptions();
        if (this.ref.current) {
            computePosition(this.getPopperElement(), this.ref.current, config).then(({x, y}) => {
                Object.assign((this.ref.current as HTMLElement).style, {
                    left: `${x}px`,
                    top: `${y}px`,
                    position: 'absolute',
                });
            });
        }
    }

    afterRender(firstRender: boolean) {
        super.afterRender(firstRender);
        if (this.props.controlledMenu) {
            this.createPopper();
        }
    }

    beforeRender() {
        const options = super.beforeRender();
        options.className = classes(options.className, 'menu-popup');
        return options;
    }

    renderToggleIcon() {
        return <span class="contextmenu-toggle-icon caret-right" />;
    }
}
