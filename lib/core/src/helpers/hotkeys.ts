import {tinykeys, createKeybindingsHandler, type KeyBindingMap, type KeyBindingHandlerOptions} from 'tinykeys';
import {$, type Selector, Cash} from '../cash';

export type HotkeysBindingOptions = KeyBindingHandlerOptions & {
    scope?: string;
    event?: 'keydown' | 'keyup' | 'keypress';
};

export type HotkeysBindingMap = KeyBindingMap;

export type HotkeyBindingCallback = (event: KeyboardEvent) => void;

export function bindHotkeys(selector: Selector, bindingMap: HotkeysBindingMap, options?: HotkeysBindingOptions) {
    const {timeout, event = 'keydown', scope} = options || {};
    const handler = createKeybindingsHandler(bindingMap, {timeout});
    return $(selector).on(`${event}.zui.hotkeys${scope ? `.${scope}` : ''}`, function (e: KeyboardEvent) {
        console.log('> hotkey', e);
        handler(e);
    });
}

export function unbindHotkeys(selector: Selector, scope?: string) {
    return $(selector).off(`.zui.hotkeys${scope ? `.${scope}` : ''}`);
}

export const hotkeys = tinykeys;

/* Declare types. */
declare module 'cash-dom' {
    interface CashStatic {
        hotkeys(bindingMap: HotkeysBindingMap, options?: HotkeysBindingOptions): void;

        unbindHotkeys(scope?: string): void;
    }

    interface Cash {
        hotkeys(bindingMap: HotkeysBindingMap, options?: HotkeysBindingOptions): Cash;

        unbindHotkeys(scope?: string): Cash;
    }
}

/* Extend $.fn.hotkeys(). */
$.fn.hotkeys = function (this: Cash, bindingMap: HotkeysBindingMap, options?: HotkeysBindingOptions): Cash {
    return bindHotkeys(this, bindingMap, options);
};

/* Extend $.fn.unbindHotkeys. */
$.fn.unbindHotkeys = function (this: Cash, scope?: string): Cash {
    return unbindHotkeys(this, scope);
};

/* Extend $.hotkeys(). */
$.hotkeys = function (bindingMap: HotkeysBindingMap, options?: HotkeysBindingOptions): void {
    bindHotkeys(window, bindingMap, options);
};

/* Extend $.unbindHotkeys. */
$.unbindHotkeys = function (scope?: string): void {
    unbindHotkeys(window, scope);
};
