declare module 'tinykeys' {
    type KeyBindingPress = [string[], string];

    export type KeyBindingMap = Record<string, (event: KeyboardEvent) => void>;

    export interface KeyBindingHandlerOptions {
        timeout?: number;
    }

    export interface KeyBindingOptions extends KeyBindingHandlerOptions {
        event?: 'keydown' | 'keyup';
    }

    export function parseKeybinding(str: string): KeyBindingPress[];

    export function createKeybindingsHandler(
        keyBindingMap: KeyBindingMap,
        options?: KeyBindingHandlerOptions,
    ): EventListener;

    export function tinykeys(
        target: Window | HTMLElement,
        keyBindingMap: KeyBindingMap,
        options?: KeyBindingOptions,
    ): () => void;
}
