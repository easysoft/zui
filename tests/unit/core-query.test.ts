import {afterEach, describe, expect, expectTypeOf, it, vi} from 'vitest';
import {QueryClient, createQuery, createInfiniteQuery, createMutation, keepPreviousData} from '@zui/core/src/query';
import {effect} from '@zui/core/src/react/signals';
import type {QueryFunctionContext} from '@zui/core/src/query';

const controllers: {destroy(): void}[] = [];
const clients: QueryClient[] = [];

function createClient() {
    const client = new QueryClient({defaultOptions: {
        queries: {retry: false, gcTime: Infinity},
        mutations: {retry: false, gcTime: Infinity},
    }});
    clients.push(client);
    return client;
}

function track<T extends {destroy(): void}>(controller: T): T {
    controllers.push(controller);
    return controller;
}

function deferred<T>() {
    let resolve!: (value: T) => void;
    let reject!: (reason: Error) => void;
    const promise = new Promise<T>((yes, no) => {
        resolve = yes;
        reject = no;
    });
    return {promise, resolve, reject};
}

afterEach(() => {
    controllers.splice(0).forEach(controller => controller.destroy());
    clients.splice(0).forEach(client => client.clear());
});

describe('query signal adapters', () => {
    it('is safe without browser globals and defers requests until mount', async () => {
        const client = createClient();
        const request = deferred<string>();
        const queryFn = vi.fn(() => request.promise);
        const query = track(createQuery(client, {queryKey: ['deferred'], queryFn}));

        expect(typeof window).toBe('undefined');
        expect(queryFn).not.toHaveBeenCalled();
        expect(query.result.value).toMatchObject({isPending: true, isFetching: false});
        query.mount();
        query.mount();
        expect(queryFn).toHaveBeenCalledOnce();
        expect(query.result.value.isFetching).toBe(true);
        request.resolve('ready');
        await vi.waitFor(() => expect(query.result.value.data).toBe('ready'));
        expect(query.result.value.isSuccess).toBe(true);
        expectTypeOf(query.result.value.data).toEqualTypeOf<string | undefined>();
    });

    it('shares in-flight requests and fresh cache while owning independent subscriptions', async () => {
        const client = createClient();
        const request = deferred<string>();
        const queryFn = vi.fn(() => request.promise);
        const options = {queryKey: ['shared'], queryFn, staleTime: Infinity};
        const first = track(createQuery(client, options));
        const second = track(createQuery(client, options));
        first.mount();
        second.mount();
        expect(queryFn).toHaveBeenCalledOnce();
        expect(client.getQueryCache().find({queryKey: ['shared']})?.getObserversCount()).toBe(2);
        first.destroy();
        request.resolve('shared value');
        await vi.waitFor(() => expect(second.result.value.data).toBe('shared value'));
        const third = track(createQuery(client, options));
        third.mount();
        expect(third.result.value.data).toBe('shared value');
        expect(queryFn).toHaveBeenCalledOnce();
        expect(first.result.value.data).toBeUndefined();
    });

    it('refreshes the snapshot when the cache changed between construction and mount', () => {
        const client = createClient();
        const query = track(createQuery<string>(client, {queryKey: ['cache'], enabled: false}));
        client.setQueryData(['cache'], 'new value');
        expect(query.result.value.data).toBeUndefined();
        query.mount();
        expect(query.result.value.data).toBe('new value');
    });

    it('replaces options, enables queries and preserves selected-data inference', async () => {
        const client = createClient();
        const getOptions = (id: number, enabled = true) => ({
            queryKey: ['item', id] as const,
            queryFn: async ({queryKey}: QueryFunctionContext<readonly ['item', number]>) => ({id: queryKey[1]}),
            enabled,
            select: (item: {id: number}) => `item ${item.id}`,
        });
        const query = track(createQuery(client, getOptions(1, false)));
        query.mount();
        expect(client.isFetching()).toBe(0);
        query.setOptions(getOptions(2));
        await vi.waitFor(() => expect(query.result.value.data).toBe('item 2'));
        expectTypeOf(query.result.value.data).toEqualTypeOf<string | undefined>();
        expect(client.getQueryData(['item', 2])).toEqual({id: 2});
        expect(client.getQueryCache().find({queryKey: ['item', 1]})?.getObserversCount()).toBe(0);
    });

    it('keeps previous data during a key change and ignores a late response for the old key', async () => {
        const client = createClient();
        const oldRequest = deferred<number>();
        const nextRequest = deferred<number>();
        const query = track(createQuery(client, {
            queryKey: ['page', 1], queryFn: () => oldRequest.promise, initialData: 1,
        }));
        query.mount();
        query.setOptions({queryKey: ['page', 2], queryFn: () => nextRequest.promise, placeholderData: keepPreviousData});
        expect(query.result.value).toMatchObject({data: 1, isPlaceholderData: true});
        nextRequest.resolve(2);
        await vi.waitFor(() => expect(query.result.value.data).toBe(2));
        oldRequest.resolve(10);
        await vi.waitFor(() => expect(client.getQueryData(['page', 1])).toBe(10));
        expect(query.result.value.data).toBe(2);
    });

    it('supports explicit refetch before mounting, exposes errors and recovers', async () => {
        const request = deferred<number>();
        const query = track(createQuery(createClient(), {queryKey: ['manual'], queryFn: () => request.promise}));
        const pending = query.result.value.refetch({throwOnError: true});
        expect(query.result.value.isFetching).toBe(true);
        const error = new Error('network failure');
        request.reject(error);
        await expect(pending).rejects.toBe(error);
        expect(query.result.value).toMatchObject({error, isError: true, isFetching: false});
        query.setOptions({queryKey: ['manual'], queryFn: async () => 42});
        await query.refetch();
        expect(query.result.value).toMatchObject({data: 42, isSuccess: true});
    });

    it('cancels a consumed AbortSignal only when the last subscriber is destroyed', () => {
        const client = createClient();
        let abortSignal: AbortSignal | undefined;
        const options = {
            queryKey: ['abort'],
            queryFn: ({signal}: QueryFunctionContext) => {
                abortSignal = signal;
                return new Promise<string>(() => undefined);
            },
        };
        const first = track(createQuery(client, options));
        const second = track(createQuery(client, options));
        first.mount();
        second.mount();
        first.destroy();
        expect(abortSignal?.aborted).toBe(false);
        second.destroy();
        second.destroy();
        expect(abortSignal?.aborted).toBe(true);
        expect(client.getQueryCache().find({queryKey: ['abort']})?.getObserversCount()).toBe(0);
    });

    it('freezes the result after destroy and rejects subsequent controller operations', async () => {
        const query = track(createQuery(createClient(), {queryKey: ['destroy'], queryFn: async () => 1}));
        await query.refetch();
        const result = query.result.value;
        query.destroy();
        expect(() => query.mount()).toThrow('destroyed');
        expect(() => query.setOptions({queryKey: ['changed']})).toThrow('destroyed');
        await expect(query.refetch()).rejects.toThrow('destroyed');
        await expect(result.refetch()).rejects.toThrow('destroyed');
        query.client.setQueryData(['destroy'], 2);
        expect(query.result.value).toBe(result);
    });

    it('releases a subscription even when a signal effect destroys it during mount', () => {
        const client = createClient();
        const query = track(createQuery(client, {queryKey: ['reentrant'], queryFn: () => new Promise<string>(() => undefined)}));
        const stop = effect(() => {
            if (query.result.value.isFetching) {
                query.destroy();
            }
        });
        try {
            query.mount();
            expect(client.getQueryCache().find({queryKey: ['reentrant']})?.getObserversCount()).toBe(0);
        } finally {
            stop();
        }
    });
});

describe('infinite queries', () => {
    it('infers page parameters, loads both directions and does not mutate options', async () => {
        const options = Object.freeze({
            queryKey: ['infinite'] as const,
            initialPageParam: 1,
            queryFn: async ({pageParam}: {pageParam: number}) => ({page: pageParam}),
            getNextPageParam: (last: {page: number}) => last.page < 2 ? last.page + 1 : undefined,
            getPreviousPageParam: (first: {page: number}) => first.page > 0 ? first.page - 1 : undefined,
        });
        const query = track(createInfiniteQuery(createClient(), options));
        query.setOptions(options);
        query.mount();
        await vi.waitFor(() => expect(query.result.value.data?.pages).toEqual([{page: 1}]));
        await query.fetchNextPage();
        expect(query.result.value.data?.pages).toEqual([{page: 1}, {page: 2}]);
        expect(query.result.value.hasNextPage).toBe(false);
        await query.fetchPreviousPage();
        expect(query.result.value.data?.pages).toEqual([{page: 0}, {page: 1}, {page: 2}]);
        expect(query.result.value.hasPreviousPage).toBe(false);
        expect(options).not.toHaveProperty('_type');
        expectTypeOf(query.result.value.data?.pages).toEqualTypeOf<{page: number}[] | undefined>();
        const result = query.result.value;
        query.destroy();
        await expect(result.fetchNextPage()).rejects.toThrow('destroyed');
    });
});

describe('mutations', () => {
    it('starts only on mutate and awaits cache invalidation before resolving', async () => {
        const client = createClient();
        let stored = 'before';
        const query = track(createQuery(client, {queryKey: ['record'], queryFn: async () => stored, staleTime: Infinity}));
        query.mount();
        await vi.waitFor(() => expect(query.result.value.data).toBe('before'));
        const request = deferred<string>();
        const mutationFn = vi.fn(async (name: string) => {
            stored = name;
            return request.promise;
        });
        const onSuccess = vi.fn();
        const mutation = track(createMutation(client, {
            mutationFn,
            onSuccess: () => client.invalidateQueries({queryKey: ['record']}),
        }));
        expect(mutation.result.value.isIdle).toBe(true);
        expect(mutationFn).not.toHaveBeenCalled();
        const pending = mutation.result.value.mutate('after', {onSuccess});
        expect(mutation.result.value.isPending).toBe(true);
        request.resolve('saved');
        await expect(pending).resolves.toBe('saved');
        expect(mutation.result.value).toMatchObject({data: 'saved', isSuccess: true});
        expect(query.result.value.data).toBe('after');
        expect(onSuccess).toHaveBeenCalledOnce();
        expectTypeOf(mutation.mutate).parameter(0).toEqualTypeOf<string>();
        mutation.reset();
        expect(mutation.result.value.isIdle).toBe(true);
    });

    it('propagates mutation failures and uses replacement options on the next call', async () => {
        const error = new Error('save failed');
        const mutation = track(createMutation(createClient(), {
            mutationFn: async (_value: number): Promise<number> => {
                throw error;
            },
        }));
        await expect(mutation.mutate(1)).rejects.toBe(error);
        expect(mutation.result.value).toMatchObject({error, isError: true});
        mutation.setOptions({mutationFn: async (value: number) => value * 2});
        await expect(mutation.mutate(2)).resolves.toBe(4);
        expect(mutation.result.value).toMatchObject({data: 4, isSuccess: true});
    });

    it('detaches on destroy while keeping shared success callbacks for an in-flight mutation', async () => {
        const request = deferred<number>();
        const onSuccess = vi.fn();
        const onCallSuccess = vi.fn();
        const mutation = track(createMutation(createClient(), {mutationFn: () => request.promise, onSuccess}));
        const pending = mutation.mutate(undefined, {onSuccess: onCallSuccess});
        const result = mutation.result.value;
        mutation.destroy();
        request.resolve(7);
        await expect(pending).resolves.toBe(7);
        expect(onSuccess).toHaveBeenCalledOnce();
        expect(onCallSuccess).not.toHaveBeenCalled();
        expect(mutation.result.value).toBe(result);
        await expect(mutation.mutate(undefined)).rejects.toThrow('destroyed');
        await expect(result.mutate(undefined)).rejects.toThrow('destroyed');
        expect(() => mutation.reset()).toThrow('destroyed');
    });
});
