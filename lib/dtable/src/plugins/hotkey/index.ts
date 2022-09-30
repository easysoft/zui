import hotkeys, {HotkeysEvent} from 'hotkeys-js';
import {definePlugin} from '../../helpers/shared-plugins';

export type DTableHotkeyCallback = (this: DTable, event: KeyboardEvent, handler: HotkeysEvent) => void;

export type DTableHotkeyTypes = {
    options: Partial<{
        hotkeys: Record<string, DTableHotkeyCallback>;
    }>,
    data: {
        hotkeys: Map<string, DTableHotkeyCallback>;
        keys?: string;
    },
    methods: {
        hotkeyHandler: (this: DTableHotkey, event: KeyboardEvent, handler: HotkeysEvent) => void;
    }
};

type DTableHotkey = DTableWithPlugin<DTableHotkeyTypes>;

export const headerGroup: DTablePlugin<DTableHotkeyTypes> = {
    name: 'hotkey',
    data() {
        return {hotkeys: new Map()};
    },
    when: options => !!options.hotkeys,
    methods: {
        hotkeyHandler(event, handler) {
            this.data.hotkeys.get(handler.key)?.call(this, event, handler);
        },
    },
    onMounted() {
        const {hotkeys: hotkeysOptions} = this.options;
        if (!hotkeysOptions) {
            return;
        }
        const hotkeysMap = new Map();
        Object.keys(hotkeysOptions).forEach(keys => {
            const callback = hotkeysOptions[keys];
            keys.split(',').forEach(key => {
                key = key.trim();
                if (!key.length) {
                    return;
                }
                hotkeysMap.set(key, callback);
            });
        });

        const keys = [...hotkeysMap.keys()];
        if (!keys.length) {
            return;
        }
        this.data.keys = keys.join(',');
        hotkeys(this.data.keys, {element: this.ref.current}, this.hotkeyHandler);
        this.data.hotkeys = hotkeysMap;
    },
    onUnmounted() {
        if (this.data.keys) {
            hotkeys.unbind(this.data.keys, this.hotkeyHandler);
        }
    },
};

export default definePlugin(headerGroup);
