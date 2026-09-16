import {createRef} from 'preact';
import {act, render, screen} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {
    HElement,
    HElementSignals,
    QueryClient,
    QueryClientContext,
    QueryClientProvider,
    createQuery,
    resolveQueryClient,
} from '@zui/core';
import type {HElementProps} from '@zui/core';

type ViewProps = HElementProps & {queryClient?: QueryClient};

class QueryView extends HElement<ViewProps> {
    static contextType = QueryClientContext;

    declare context: QueryClient | undefined;

    query = createQuery(resolveQueryClient(this.props.queryClient, this.context), {
        queryKey: ['view'], queryFn: async () => 'loaded', staleTime: Infinity,
    });

    componentDidMount() {
        this.query.mount();
        super.componentDidMount();
    }

    componentWillUnmount() {
        this.query.destroy();
        super.componentWillUnmount();
    }

    protected _getChildren() {
        return this.query.result.value.data ?? 'pending';
    }
}

describe('query context', () => {
    it('delivers context to HElement field initializers and renders signal updates without hooks', async () => {
        const client = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        const ref = createRef<QueryView>();
        const view = render(<QueryClientProvider client={client}><QueryView ref={ref} /></QueryClientProvider>);
        expect(ref.current?.query.client).toBe(client);
        await act(async () => {
            await ref.current?.query.refetch();
        });
        expect(screen.getByText('loaded')).toBeInTheDocument();
        await act(async () => {
            client.setQueryData(['view'], 'updated');
        });
        expect(screen.getByText('updated')).toBeInTheDocument();
        view.unmount();
        expect(client.getQueryCache().find({queryKey: ['view']})?.getObserversCount()).toBe(0);
        client.clear();
    });

    it('passes context through HElementSignals and custom constructors', () => {
        class SignalView extends HElementSignals<HElementProps> {
            static contextType = QueryClientContext;

            declare context: QueryClient | undefined;

            client: QueryClient;

            constructor(props: HElementProps, context?: QueryClient) {
                super(props, context);
                this.client = resolveQueryClient(undefined, this.context);
            }
        }
        const client = new QueryClient();
        const ref = createRef<SignalView>();
        const view = render(<QueryClientProvider client={client}><SignalView ref={ref} /></QueryClientProvider>);
        expect(ref.current?.client).toBe(client);
        view.unmount();
    });

    it('prefers the explicit client and reports missing clients', () => {
        const contextClient = new QueryClient();
        const explicit = new QueryClient();
        expect(resolveQueryClient(explicit, contextClient)).toBe(explicit);
        expect(resolveQueryClient(undefined, contextClient)).toBe(contextClient);
        expect(() => resolveQueryClient()).toThrow('QueryClientProvider');
        const ref = createRef<QueryView>();
        const view = render(<QueryClientProvider client={contextClient}><QueryView ref={ref} queryClient={explicit} /></QueryClientProvider>);
        expect(ref.current?.query.client).toBe(explicit);
        view.unmount();
        explicit.clear();
    });

    it('pairs client mounts across updates and exposes the closest provider to Consumer', () => {
        const first = new QueryClient();
        const second = new QueryClient();
        const firstMount = vi.spyOn(first, 'mount');
        const firstUnmount = vi.spyOn(first, 'unmount');
        const secondMount = vi.spyOn(second, 'mount');
        const secondUnmount = vi.spyOn(second, 'unmount');
        let selected: QueryClient | undefined;
        const consumer = (
            <QueryClientContext.Consumer>
                {(client) => {
                    selected = client;
                    return null;
                }}
            </QueryClientContext.Consumer>
        );
        const view = render(<QueryClientProvider client={first}>{consumer}</QueryClientProvider>);
        expect(selected).toBe(first);
        expect(firstMount).toHaveBeenCalledOnce();
        view.rerender(<QueryClientProvider client={first}>{consumer}</QueryClientProvider>);
        expect(firstMount).toHaveBeenCalledOnce();
        view.rerender(<QueryClientProvider client={second}>{consumer}</QueryClientProvider>);
        expect(selected).toBe(second);
        expect(firstUnmount).toHaveBeenCalledOnce();
        expect(secondMount).toHaveBeenCalledOnce();
        view.unmount();
        expect(secondUnmount).toHaveBeenCalledOnce();

        const nested = render(<QueryClientProvider client={first}><QueryClientProvider client={second}>{consumer}</QueryClientProvider></QueryClientProvider>);
        expect(selected).toBe(second);
        nested.unmount();
    });

    it('allows independent roots to share client listeners and preserves cache on unmount', () => {
        const client = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        client.setQueryData(['retained'], 1);
        const addListener = vi.spyOn(window, 'addEventListener');
        const removeListener = vi.spyOn(window, 'removeEventListener');
        const first = render(<QueryClientProvider client={client}>first</QueryClientProvider>);
        const second = render(<QueryClientProvider client={client}>second</QueryClientProvider>);
        expect(addListener.mock.calls.filter(([event]) => event === 'visibilitychange')).toHaveLength(1);
        first.unmount();
        expect(removeListener.mock.calls.filter(([event]) => event === 'visibilitychange')).toHaveLength(0);
        second.unmount();
        expect(removeListener.mock.calls.filter(([event]) => event === 'visibilitychange')).toHaveLength(1);
        expect(client.getQueryData(['retained'])).toBe(1);
        client.clear();
    });

    it('recreates context-owned queries when a keyed provider changes the identity', () => {
        const first = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        const second = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        first.setQueryData(['view'], 'first identity');
        second.setQueryData(['view'], 'second identity');
        const view = render(<QueryClientProvider key="first" client={first}><QueryView /></QueryClientProvider>);
        expect(screen.getByText('first identity')).toBeInTheDocument();
        view.rerender(<QueryClientProvider key="second" client={second}><QueryView /></QueryClientProvider>);
        expect(screen.getByText('second identity')).toBeInTheDocument();
        expect(first.getQueryCache().find({queryKey: ['view']})?.getObserversCount()).toBe(0);
        view.unmount();
        first.clear();
        second.clear();
    });

    it('stops polling when the query owner unmounts', async () => {
        const client = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        const queryFn = vi.fn(async () => 'poll');
        const query = createQuery(client, {queryKey: ['poll'], queryFn, refetchInterval: 100, refetchIntervalInBackground: true});
        query.mount();
        await vi.advanceTimersByTimeAsync(200);
        expect(queryFn.mock.calls.length).toBeGreaterThan(1);
        query.destroy();
        const calls = queryFn.mock.calls.length;
        await vi.advanceTimersByTimeAsync(500);
        expect(queryFn).toHaveBeenCalledTimes(calls);
        client.clear();
    });
});
