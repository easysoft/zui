import {MutationObserver} from '@tanstack/query-core';
import type {DefaultError, MutateOptions, MutationObserverOptions, QueryClient} from '@tanstack/query-core';
import {computed} from '../react/signals';
import {createObserverSignal} from './observer-signal';

/**
 * Creates an idle mutation. mutate starts observation if needed and returns a rejecting Promise on failure.
 * Destroy releases observation, but does not cancel a mutation already sent to the server.
 */
export function createMutation<TData = unknown, TError = DefaultError, TVariables = void, TOnMutateResult = unknown>(
    client: QueryClient,
    options: MutationObserverOptions<TData, TError, TVariables, TOnMutateResult>,
) {
    const observer = new MutationObserver<TData, TError, TVariables, TOnMutateResult>(client, {...options});
    const {subscription, run, runAsync} = createObserverSignal(observer);
    const mutate = (variables: TVariables, mutateOptions?: MutateOptions<TData, TError, TVariables, TOnMutateResult>) => runAsync(() => {
        subscription.mount();
        return observer.mutate(variables, mutateOptions);
    });
    const reset = () => run(() => observer.reset());

    return {
        client,
        ...subscription,
        result: computed(() => ({...subscription.result.value, mutate, reset})),
        /** Explicitly runs a mutation. Per-call callbacks follow Query Core's latest-observer semantics. */
        mutate,
        /** Resets the observed result to idle without cancelling a running mutation. */
        reset,
    } as const;
}

/** The lifecycle, operations and result of a mutation created by createMutation. */
export type MutationController<TData = unknown, TError = DefaultError, TVariables = void, TOnMutateResult = unknown> = ReturnType<
    typeof createMutation<TData, TError, TVariables, TOnMutateResult>
>;
