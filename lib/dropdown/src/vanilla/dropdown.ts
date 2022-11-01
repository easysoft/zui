import '@zui/css-icons/src/icons/caret.css';
import '../css/dropdown.css';
import {ContextMenu} from '@zui/contextmenu/src/vanilla/contextmenu';
import type {DropdownEvents} from '../types/dropdown-events';
import type {DropdownOptions} from '../types/dropdown-options';

export class Dropdown extends ContextMenu<DropdownOptions, DropdownEvents> {
    static MENU_CLASS = 'dropdown';

    static MENU_SELECTOR = '[data-toggle="dropdown"]:not(.disabled):not(:disabled)';

    static DEFAULT: Partial<DropdownOptions> = {
        placement: 'bottom-start',
        strategy: 'absolute',
    };
}

document.addEventListener('click', function (e) {
    const element = e.target as HTMLElement;
    const toggleBtn = element.closest<HTMLElement>(Dropdown.MENU_SELECTOR);
    if (toggleBtn) {
        const dropdown = Dropdown.ensure(toggleBtn);
        dropdown.toggle();
    } else {
        Dropdown.clear(e);
    }
});
