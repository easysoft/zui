import {QueryObserver} from '@tanstack/query-core';
import type {DefaultError, QueryClient, QueryKey, QueryObserverOptions, QueryObserverResult, RefetchOptions} from '@tanstack/query-core';
import {computed} from '../react/signals';
import {createObserverSignal} from './observer-signal';

/**
 * Creates an unmounted query backed by a shared client and a read-only result signal.
 * Call mount in the owner's mount lifecycle and destroy when it is disposed.
 * The application or QueryClientProvider owns the client's mount/unmount lifecycle.
 */
export function createQuery<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
>(client: QueryClient, options: QueryObserverOptions<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>) {
    const observer = new QueryObserver<TQueryFnData, TError, TData, TQueryFnData, TQueryKey>(client, {...options});
    const {subscription, runAsync} = createObserverSignal(observer);
    const refetch = (fetchOptions?: RefetchOptions): Promise<QueryObserverResult<TData, TError>> => runAsync(() => observer.refetch(fetchOptions))
        .then(result => ({...result, refetch}));

    return {
        client,
        ...subscription,
        result: computed(() => ({...subscription.result.value, refetch})),
        /** Fetches explicitly, including before mount. Use throwOnError to reject on failure. */
        refetch,
    } as const;
}

/** The lifecycle, options and result of a query created by createQuery. */
export type QueryController<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = TQueryFnData,
    TQueryKey extends QueryKey = QueryKey,
> = ReturnType<typeof createQuery<TQueryFnData, TError, TData, TQueryKey>>;
