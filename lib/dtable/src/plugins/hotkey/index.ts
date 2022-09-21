import hotkeys, {HotkeysEvent} from 'hotkeys-js';
import {definePlugin} from '../../helpers/shared-plugins';
import './style.css';

type DTableHotkeyCallback = (this: DTableHotkey, event: KeyboardEvent, handler: HotkeysEvent) => void;

type DTableHotkeyTypes = {
    options: Partial<{
        hotkeys: Record<string, DTableHotkeyCallback>;
    }>,
    data: {
        hotkeys: Map<string, DTableHotkeyCallback>;
        keys?: string;
    }
};

type DTableHotkey = DTableWithPlugin<DTableHotkeyTypes>;

export const headerGroup: DTablePlugin<DTableHotkeyTypes> = {
    name: 'header-group',
    data: {
        hotkeys: new Map(),
    },
    when: options => !!options.hotkeys,
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
        hotkeys(this.data.keys, {
            element: this.ref.current,
            scope: this.id,
        }, (event, handler) => {
            hotkeysMap.get(handler.key)?.call(this, event, handler);
        });

        this.data.hotkeys = hotkeysMap;
    },
    onUnmounted() {
        if (this.data.keys) {
            hotkeys.unbind(this.data.keys, this.id);
        }
    },
};

export default definePlugin(headerGroup);
