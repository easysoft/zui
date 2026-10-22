import {h, render} from 'preact';

import type {ComponentType} from 'preact';

export type StoryApi<A> = {
    updateArgs(patch: Partial<A>): void;
    guard<T, P extends unknown[], R>(callback: (this: T, ...params: P) => R): (this: T, ...params: P) => R | undefined;
    onCleanup(cleanup: () => void): void;
};

export type StoryHost = {root: HTMLElement; target: HTMLElement};
export type StoryController<A> = {root: HTMLElement; update(args: A): void; dispose(): void};

function createScope<A>(root: HTMLElement, updateArgs: (patch: Partial<A>) => void, isAlive = () => true) {
    let disposed = false;
    const cleanups: (() => void)[] = [];
    const active = () => !disposed && root.isConnected && isAlive();
    const api: StoryApi<A> = {
        updateArgs(patch) {
            if (active()) updateArgs(patch);
        },
        guard(callback) {
            return function (...params) {
                if (active()) return callback.apply(this, params);
            };
        },
        onCleanup(cleanup) {
            cleanups.push(cleanup);
        },
    };
    return {
        api,
        active,
        invalidate() {
            disposed = true;
        },
        cleanup() {
            const errors: unknown[] = [];
            for (const cleanup of cleanups.splice(0).reverse()) {
                try {
                    cleanup();
                } catch (error) {
                    errors.push(error);
                }
            }
            if (errors.length) throw new AggregateError(errors, 'Story cleanup failed');
        },
    };
}

export type PreactAdapter<A, P> = {
    props(args: A, api: StoryApi<A>): P;
    /** Change only when an initialization-only prop needs a fresh component. */
    key?(args: A): string | number;
};

export function createPreactController<A, P extends object>(Component: ComponentType<P>, adapter: PreactAdapter<A, P>, updateArgs: (patch: Partial<A>) => void): StoryController<A> {
    const root = document.createElement('div');
    let scope: ReturnType<typeof createScope<A>> | undefined;
    let key: string | number | undefined;
    const dispose = () => {
        const previous = scope;
        scope = undefined;
        if (!previous) return;
        previous.invalidate();
        try {
            previous.cleanup();
        } finally {
            render(null, root);
        }
    };
    return {
        root,
        update(args) {
            const nextKey = adapter.key?.(args);
            if (scope && key !== nextKey) dispose();
            scope ??= createScope(root, updateArgs);
            key = nextKey;
            try {
                render(h(Component, adapter.props(args, scope.api)), root);
            } catch (error) {
                dispose();
                throw error;
            }
        },
        dispose,
    };
}

type NativeInstance = {readonly destroyed?: boolean; destroy(): void};
type NativeConstructor<O, I> = new (element: HTMLElement, options?: O) => I;

export type NativeAdapter<A, O, I, H extends StoryHost = StoryHost> = {
    host?(args: A, api: StoryApi<A>): H;
    options(args: A, api: StoryApi<A>, host: H): O;
    update: 'recreate' | ((instance: I, options: O, args: A, host: H, api: StoryApi<A>) => void);
    ready?(instance: I, args: A, host: H, api: StoryApi<A>): void;
    beforeDestroy?(instance: I, host: H): void;
};

export function createNativeController<A, O extends object, I extends NativeInstance, H extends StoryHost = StoryHost>(Component: NativeConstructor<O, I>, adapter: NativeAdapter<A, O, I, H>, updateArgs: (patch: Partial<A>) => void): StoryController<A> {
    const root = document.createElement('div');
    let current: {instance?: I; host: H; scope: ReturnType<typeof createScope<A>>; ready: boolean} | undefined;
    const dispose = () => {
        const previous = current;
        current = undefined;
        if (!previous) return;
        const {instance, host, scope} = previous;
        scope.invalidate();
        try {
            scope.cleanup();
        } finally {
            try {
                if (instance && !instance.destroyed) adapter.beforeDestroy?.(instance, host);
            } finally {
                try {
                    instance?.destroy();
                } finally {
                    root.replaceChildren();
                }
            }
        }
    };
    return {
        root,
        update(args) {
            if (current && (adapter.update === 'recreate' || !current.ready || current.instance?.destroyed)) dispose();
            if (!current) {
                const scope = createScope(root, updateArgs, () => !current?.instance?.destroyed);
                const target = document.createElement('div');
                let host: H;
                try {
                    host = adapter.host?.(args, scope.api) ?? {root: target, target} as unknown as H;
                } catch (error) {
                    scope.invalidate();
                    scope.cleanup();
                    throw error;
                }
                current = {host, scope, ready: false};
                root.append(host.root);
            }
            const entry = current;
            const {host, scope} = entry;
            const options = adapter.options(args, scope.api, host);
            const onInited = (options as {$onInited?: (this: I) => void}).$onInited;
            const ownedOptions = {
                ...options,
                $replace: false,
                $optionsFromDataset: false,
                $notDestroyOnDetach: true,
                $onInited(this: I) {
                    if (!scope.active() || entry.ready) return;
                    entry.ready = true;
                    onInited?.call(this);
                    adapter.ready?.(this, args, host, scope.api);
                },
            };
            try {
                if (!entry.instance) {
                    entry.instance = new Component(host.target, ownedOptions);
                } else if (adapter.update !== 'recreate') {
                    adapter.update(entry.instance, ownedOptions, args, host, scope.api);
                }
            } catch (error) {
                dispose();
                throw error;
            }
        },
        dispose,
    };
}
