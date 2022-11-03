import type {ComponentChildren} from 'preact';
import {createPopper, Instance as PopperInstance, Options as PopperOptions} from '@popperjs/core/lib/popper-lite';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow';
import flip from '@popperjs/core/lib/modifiers/flip';
import type {MenuItemOptions} from '@zui/menu/src/types';
import {Menu} from '@zui/menu/src/component/menu';
import '@zui/css-icons/src/icons/caret.css';
import '../style/index.css';

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

    #popper?: PopperInstance;

    componentWillUnmount(): void {
        super.componentWillUnmount();
        this.#popper?.destroy();
    }

    _getPopperOptions(): PopperOptions {
        return {
            modifiers: [preventOverflow, flip],
            placement: 'right-start',
        } as PopperOptions;
    }

    _getPopperElement(): HTMLElement {
        return this.ref.current?.parentElement as HTMLElement;
    }

    _createPopper() {
        const options = this._getPopperOptions();
        if (this.#popper) {
            this.#popper.setOptions(options);
        } else if (this.ref.current) {
            this.#popper = createPopper(this._getPopperElement(), this.ref.current, options);
        }
        return this.#popper;
    }

    afterRender(firstRender: boolean): void {
        super.afterRender(firstRender);
        if (this.props.controlledMenu) {
            this._createPopper();
        }
    }

    renderToggleIcon(): ComponentChildren | void {
        return <span class="contextmenu-toggle-icon caret-right" />;
    }
}
