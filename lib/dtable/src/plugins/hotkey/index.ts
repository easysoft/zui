import {$, type HotkeysBindingMap} from '@zui/core';
import {definePlugin} from '../../helpers/shared-plugins';
import type {DTableWithPlugin, DTablePlugin} from '../../types/plugin';

export interface DTableHotkeyTypes {
    options: Partial<{
        hotkeys: HotkeysBindingMap;
    }>,
    data: {
        hotkeysScope: string;
    },
}

export type DTableHotkey = DTableWithPlugin<DTableHotkeyTypes>;

export const hotkeyPlugin: DTablePlugin<DTableHotkeyTypes> = {
    name: 'hotkey',
    when: options => !!options.hotkeys,
    onMounted() {
        const {hotkeys} = this.options;
        if (!hotkeys) {
            return;
        }
        const hotkeysMap: HotkeysBindingMap = {};
        Object.keys(hotkeys).forEach(keys => {
            const callback = hotkeys[keys];
            keys.split(',').forEach(key => {
                key = key.trim();
                if (!key.length) {
                    return;
                }
                hotkeysMap[key] = callback;
            });
        });
        if (!Object.keys(hotkeysMap).length) {
            return;
        }
        const hotkeysScope = `dtable_${this.id}`;
        $(this.element).hotkeys(hotkeysMap, {scope: hotkeysScope});
        this.data.hotkeysScope = hotkeysScope;
    },
    onUnmounted() {
        if (this.data.hotkeysScope) {
            $(this.element).unbindHotkeys(this.data.hotkeysScope);
        }
    },
};

export const hotkey = definePlugin(hotkeyPlugin);
