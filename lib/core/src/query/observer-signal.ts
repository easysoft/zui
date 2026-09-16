import {computed, signal} from '../react/signals';

type Observer<TOptions, TResult> = {
    getCurrentResult(): TResult;
    setOptions(options: TOptions): void;
    subscribe(listener: (result: TResult) => void): () => void;
    updateResult?(): void;
    destroy?(): void;
};

/** Shares subscription ownership between the query and mutation adapters. */
export function createObserverSignal<TOptions, TResult>(observer: Observer<TOptions, TResult>) {
    const state = signal(observer.getCurrentResult());
    let unsubscribe: (() => void) | undefined;
    let mounted = false;
    let destroyed = false;

    const assertActive = () => {
        if (destroyed) {
            throw new Error('Query controller has been destroyed.');
        }
    };

    const update = () => {
        if (!destroyed) {
            observer.updateResult?.();
            state.value = observer.getCurrentResult();
        }
    };

    return {
        subscription: {
            /** A read-only projection of the observer result; the client owns cached data. */
            result: computed(() => state.value),

            /** Starts observation. Repeated calls do not add subscriptions. */
            mount(): void {
                assertActive();
                if (mounted) {
                    return;
                }
                mounted = true;
                try {
                    const cleanup = observer.subscribe((result) => {
                        if (!destroyed) {
                            state.value = result;
                        }
                    });
                    if (destroyed) {
                        cleanup();
                    } else {
                        unsubscribe = cleanup;
                        update();
                    }
                } catch (error) {
                    mounted = false;
                    throw error;
                }
            },

            /** Replaces the complete options object, preserving the client's defaults. */
            setOptions(options: TOptions): void {
                assertActive();
                // InfiniteQueryObserver writes internal fields onto its options.
                observer.setOptions({...options});
                update();
            },

            /** Releases this subscription without clearing shared caches. Terminal and idempotent. */
            destroy(): void {
                if (destroyed) {
                    return;
                }
                destroyed = true;
                unsubscribe?.();
                unsubscribe = undefined;
                observer.destroy?.();
            },
        },

        run<T>(action: () => T): T {
            assertActive();
            try {
                return action();
            } finally {
                update();
            }
        },

        async runAsync<T>(action: () => Promise<T>): Promise<T> {
            assertActive();
            try {
                const promise = action();
                update();
                return await promise;
            } finally {
                update();
            }
        },
    };
}
