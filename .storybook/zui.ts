import {useArgs, useEffect, useRef} from 'storybook/preview-api';
import {createNativeController, createPreactController} from './zui-controller';

import type {ComponentType} from 'preact';
import type {NativeAdapter, PreactAdapter, StoryController, StoryHost} from './zui-controller';

export type {StoryApi, StoryHost} from './zui-controller';

function useController<A extends object>(args: A, create: (updateArgs: (patch: Partial<A>) => void) => StoryController<A>) {
    const [, updateArgs] = useArgs<A>();
    const ref = useRef<StoryController<A> | undefined>(undefined);
    const controller = ref.current ??= create(updateArgs);
    // HTML/Vite retains this root across args updates. Effects run after it is attached.
    useEffect(() => {
        try {
            controller.update(args);
        } catch (error) {
            controller.dispose();
            throw error;
        }
    });
    useEffect(() => () => {
        controller.dispose();
        ref.current = undefined;
    }, [controller]);
    return controller.root;
}

export function createPreactRender<A extends object, P extends object>(Component: ComponentType<P>, adapter: PreactAdapter<A, P>) {
    return (args: A) => useController(args, updateArgs => createPreactController(Component, adapter, updateArgs));
}

export function createZuiRender<A extends object, O extends object, I extends {destroy(): void}, H extends StoryHost = StoryHost>(Component: new (element: HTMLElement, options?: O) => I, adapter: NativeAdapter<A, O, I, H>) {
    return (args: A) => useController(args, updateArgs => createNativeController(Component, adapter, updateArgs));
}
