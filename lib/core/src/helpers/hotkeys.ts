import {tinykeys, createKeybindingsHandler, type KeyBindingMap, type KeyBindingHandlerOptions} from 'tinykeys';
import {$, type Selector, Cash} from '../cash';

export type HotkeysBindingOptions = KeyBindingHandlerOptions & {
    scope?: string;
    event?: 'keydown' | 'keyup' | 'keypress';
    when?: (event: KeyboardEvent) => boolean;
};

export type HotkeysBindingMap = KeyBindingMap;

export type HotkeyBindingCallback = (event: KeyboardEvent) => void;

export type HotkeySetting = {
    keys: string | string[];
    handler: HotkeyBindingCallback;
    optional?: boolean;
};

export type HotkeyName = string;

export type HotkeysMap = Record<HotkeyName, HotkeySetting>;

export type HotkeysSettings = boolean | Record<HotkeyName, HotkeySetting | boolean>;

export function getHotkeysMap(settings: HotkeysSettings, defaultMap: HotkeysMap = {}): HotkeysBindingMap | undefined {
    if (!settings) {
        return;
    }

    const map = Object.keys(defaultMap).reduce<HotkeysMap>((currentMap, name) => {
        if (!defaultMap[name].optional) {
            currentMap[name] = {
                ...defaultMap[name],
            };
        }
        return currentMap;
    }, {});
    Object.keys(settings).forEach((name) => {
        const setting = (settings as Record<HotkeyName, HotkeySetting | boolean>)[name];
        if (!setting) {
            delete map[name];
        } else if (setting === true) {
            if (defaultMap[name]) {
                map[name] = {
                    ...defaultMap[name],
                };
            }
        } else {
            map[name] = setting;
        }
    });

    return Object.keys(map).reduce<HotkeysBindingMap>((bindingMap, name) => {
        const {keys, handler} = map[name];
        if (typeof keys === 'string') {
            bindingMap[keys] = handler;
        } else {
            keys.forEach((key) => {
                bindingMap[key] = handler;
            });
        }
        return bindingMap;
    }, {});
}

export function bindHotkeys(selector: Selector, bindingMap: HotkeysBindingMap, options?: HotkeysBindingOptions) {
    const {timeout, event = 'keydown', scope, when} = options || {};
    const handler = createKeybindingsHandler(bindingMap, {timeout});
    return $(selector).on(`${event}.zui.hotkeys${scope ? `.${scope}` : ''}`, function (e: KeyboardEvent) {
        if (when && when(e) === false) {
            return;
        }
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
