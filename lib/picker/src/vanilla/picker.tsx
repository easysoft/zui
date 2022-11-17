import '@zui/css-icons/src/icons/arrow.css';
import type {Options as PopperOptions} from '@popperjs/core/lib/popper-lite';
import {ContextMenu} from '@zui/contextmenu/src/vanilla/contextmenu';
import {ContextMenuTrigger} from '@zui/contextmenu/src/types/contextmenu-trigger';
import type {PickerInputOptions} from '../types/picker-input-options';
import type {PickerOptions} from '../types/picker-options';
import '../css/index.css';

export class Picker extends ContextMenu<PickerOptions, PickerInputOptions> {
    static NAME = 'picker';

    static MENU_CLASS = 'picker-menu';

    static MENU_SELECTOR = '[data-toggle="picker"]:not(.disabled):not(:disabled)';

    static DEFAULT = {
        ...ContextMenu.DEFAULT,
        strategy: 'absolute',
        trigger: 'click',
        minDropWidth: '100',
        maxDropWidth: '450',
        maxDropHeight: 260,
    } as Partial<PickerOptions>;

    #hideTimer = 0;

    get pickerOptions() {
        return this.options;
    }
    // multiple?: boolean,
    // showSearch?: boolean,
    // placeholder?: string,
    // disabled?: boolean,
    // clearable?: boolean,
    // items?: boolean,
    // autoSelectFirst?: boolean,
    // dropWidth?: '100%',
    // minDropWidth?: '100',
    // maxDropWidth?: '450',
    // maxDropHeight?: 260,

    get elementShowClass() {
        return `with-${(this.constructor as typeof Picker).NAME}-show`;
    }

    show(trigger?: ContextMenuTrigger, options?: {event?: MouseEvent, clearOthers?: boolean}): boolean {
        if (options?.clearOthers !== false) {
            Picker.clear({event: options?.event, exclude: [this.element]});
        }
        if (this.pickerOptions.dropWidth) {
            this.menu.style.width =  `${this.pickerOptions.dropWidth}px`;
        } 
        const minDropWidth = this.pickerOptions.dropWidth || this.element.offsetWidth;
        const maxDropWidth = this.pickerOptions.dropWidth || this.pickerOptions.maxDropWidth;
        this.menu.style.minWidth =  `${minDropWidth}px`;
        this.menu.style.maxWidth =  `${maxDropWidth}px`;
        
        if (this.pickerOptions.dropWidth) {
            this.menu.style.width =  `${this.pickerOptions.dropWidth}px`;
        }
        const result = super.show(trigger);
        if (result) {
            this.element.classList.add(this.elementShowClass);
        }
        return result;
    }

    hide(): boolean {
        const result = super.hide();
        if (result) {
            this.element.classList.remove(this.elementShowClass);
        }
        return result;
    }

    toggle(event?: MouseEvent, options?: {clearOthers?: boolean}) {
        return this.isShown ? this.hide() : this.show(event, {event, ...options});
    }

    // _getItemRenderProps() {
    //     const options = super.getItemRenderProps();
    //     console.log(options);
    //     return options;
    // }

    _handleItemClick() {
        console.log(1111);    
    }

    _onClick = (e:Event):void => {
        console.log(e);
    };

    hideLater = () => {
        this.#cancelHide();
        this.#hideTimer = window.setTimeout(this.hide.bind(this), 100);
    };

    destroy(): void {}

    _getPopperOptions(): PopperOptions {
        const options = super._getPopperOptions();
        return options;
    }

    _ensureMenu(): HTMLElement {
        const menu = super._ensureMenu();
        return menu;
    }

    _getMenuOptions() {
        const options = super._getMenuOptions();
        if (options && this.options.arrow) {
            const {afterRender} = options;
            options.afterRender = (...args) => {
                const arrowElement = this.menu.querySelector('.arrow');
                if (arrowElement) {
                    this.menu.querySelector('.menu')?.appendChild(arrowElement);
                    this.popper.update();
                }
                afterRender?.(...args);
            };
        }
        return options;
    }

    #cancelHide = () => {
        clearTimeout(this.#hideTimer);
        this.#hideTimer = 0;
    };
}

document.addEventListener('click', function (event) {
    const element = event.target as HTMLElement;
    const pickerInput = element.closest<HTMLElement>(Picker.MENU_SELECTOR);
    if (pickerInput) {
        const dropdown = Picker.ensure(pickerInput);
        dropdown.toggle();
    } else {
        Picker.clear({event});
    }
});