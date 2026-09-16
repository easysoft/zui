import {InfiniteQueryObserver} from '@tanstack/query-core';
import type {
    DefaultError,
    FetchNextPageOptions,
    FetchPreviousPageOptions,
    InfiniteData,
    InfiniteQueryObserverOptions,
    InfiniteQueryObserverResult,
    QueryClient,
    QueryKey,
    QueryObserverResult,
    RefetchOptions,
} from '@tanstack/query-core';
import {computed} from '../react/signals';
import {createObserverSignal} from './observer-signal';

/** Creates an unmounted infinite query. Pagination and cache policies follow Query Core. */
export function createInfiniteQuery<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = InfiniteData<TQueryFnData>,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown,
>(client: QueryClient, options: InfiniteQueryObserverOptions<TQueryFnData, TError, TData, TQueryKey, TPageParam>) {
    const observer = new InfiniteQueryObserver<TQueryFnData, TError, TData, TQueryKey, TPageParam>(client, {...options});
    const {subscription, runAsync} = createObserverSignal(observer);
    const withActions = <TResult extends QueryObserverResult<TData, TError>>(result: TResult) => ({...result, refetch, fetchNextPage, fetchPreviousPage});
    const refetch = (fetchOptions?: RefetchOptions): Promise<QueryObserverResult<TData, TError>> => runAsync(() => observer.refetch(fetchOptions)).then(withActions);
    const fetchNextPage = (fetchOptions?: FetchNextPageOptions): Promise<InfiniteQueryObserverResult<TData, TError>> => runAsync(() => observer.fetchNextPage(fetchOptions)).then(withActions);
    const fetchPreviousPage = (fetchOptions?: FetchPreviousPageOptions): Promise<InfiniteQueryObserverResult<TData, TError>> => runAsync(() => observer.fetchPreviousPage(fetchOptions)).then(withActions);

    return {
        client,
        ...subscription,
        result: computed(() => withActions(subscription.result.value)),
        /** Refreshes the cached pages; use throwOnError to reject on failure. */
        refetch,
        /** Loads the next page according to getNextPageParam. */
        fetchNextPage,
        /** Loads the previous page according to getPreviousPageParam. */
        fetchPreviousPage,
    } as const;
}

/** The lifecycle, pagination operations and result of an infinite query. */
export type InfiniteQueryController<
    TQueryFnData = unknown,
    TError = DefaultError,
    TData = InfiniteData<TQueryFnData>,
    TQueryKey extends QueryKey = QueryKey,
    TPageParam = unknown,
> = ReturnType<typeof createInfiniteQuery<TQueryFnData, TError, TData, TQueryKey, TPageParam>>;
