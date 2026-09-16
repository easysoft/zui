import {createContext, createRef} from 'preact';
import {act, render, screen} from '@testing-library/preact';
import {describe, expect, expectTypeOf, it, vi} from 'vitest';
import {
    HElement,
    HElementSignals,
    QueryClient,
    QueryClientContext,
    QueryClientProvider,
    createQuery,
    resolveQueryClient,
} from '@zui/core';
import type {HElementProps, QueryFunctionContext} from '@zui/core';

class QueryView extends HElement<HElementProps> {
    static contextType = QueryClientContext;

    declare context: QueryClient | undefined;

    query = this.createQuery({
        queryKey: ['view'], queryFn: async () => 'loaded', staleTime: Infinity,
    });

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
            await vi.advanceTimersByTimeAsync(0);
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

describe('HElement.createQuery', () => {
    it('defers field queries until mount and can dispose a component that never mounted', () => {
        const client = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        const instance = new QueryView({}, client);
        expect(instance.query.result.value).toMatchObject({isPending: true, isFetching: false});
        expect(client.getQueryCache().find({queryKey: ['view']})?.getObserversCount()).toBe(0);
        instance.componentWillUnmount();
        expect(() => instance.query.mount()).toThrow('destroyed');
        expect(() => new QueryView({})).toThrow('QueryClientProvider');
        client.clear();
    });

    it('is inherited by HElementSignals and preserves component lifecycle callbacks', async () => {
        const client = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        const queryFn = vi.fn(async () => 'signals query');
        class SignalQueryView extends HElementSignals<HElementProps> {
            static contextType = QueryClientContext;

            query = this.createQuery({queryKey: ['signals'], queryFn});

            protected _getChildren() {
                return this.query.result.value.data ?? 'pending';
            }
        }
        const ref = createRef<SignalQueryView>();
        const observerCount = () => client.getQueryCache().find({queryKey: ['signals']})?.getObserversCount();
        const onMounted = vi.fn(() => expect(observerCount()).toBe(1));
        const onUnmount = vi.fn(() => expect(observerCount()).toBe(0));
        const view = render(<QueryClientProvider client={client}><SignalQueryView ref={ref} onMounted={onMounted} onUnmount={onUnmount} /></QueryClientProvider>);
        await act(async () => {
            await vi.advanceTimersByTimeAsync(0);
        });
        expect(queryFn).toHaveBeenCalledOnce();
        expect(screen.getByText('signals query')).toBeInTheDocument();
        expectTypeOf(ref.current!.query.result.value.data).toEqualTypeOf<string | undefined>();
        const query = ref.current!.query;
        view.unmount();
        expect(onMounted).toHaveBeenCalledOnce();
        expect(onUnmount).toHaveBeenCalledOnce();
        await expect(query.refetch()).rejects.toThrow('destroyed');
        client.clear();
    });

    it('mounts queries created later, supports explicit client precedence and rejects creation after unmount', async () => {
        const client = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        const explicit = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        const ref = createRef<HElement<HElementProps>>();
        const view = render(<HElement ref={ref} queryClient={client} />);
        const instance = ref.current!;
        const first = instance.createQuery({queryKey: ['later'], queryFn: async () => 1});
        const second = instance.createQuery({queryKey: ['explicit'], queryFn: async () => 2}, explicit);
        expect(first.client).toBe(client);
        expect(second.client).toBe(explicit);
        expect(client.getQueryCache().find({queryKey: ['later']})?.getObserversCount()).toBe(1);
        expect(explicit.getQueryCache().find({queryKey: ['explicit']})?.getObserversCount()).toBe(1);
        first.destroy();
        expect(client.getQueryCache().find({queryKey: ['later']})?.getObserversCount()).toBe(0);
        view.unmount();
        expect(explicit.getQueryCache().find({queryKey: ['explicit']})?.getObserversCount()).toBe(0);
        await expect(second.refetch()).rejects.toThrow('destroyed');
        expect(() => instance.createQuery({queryKey: ['too-late']})).toThrow('unmounted');
        client.clear();
        explicit.clear();
    });

    it('does not mistake another context for a query client', () => {
        const OtherContext = createContext({name: 'another context'});
        class OtherContextView extends HElement<HElementProps> {
            static contextType = OtherContext;

            query = this.createQuery({queryKey: ['other-context'], enabled: false});
        }
        expect(() => new OtherContextView({}, {name: 'another context'})).toThrow('QueryClientProvider');
        const client = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        const ref = createRef<OtherContextView>();
        const view = render(<OtherContext.Provider value={{name: 'custom'}}><OtherContextView ref={ref} queryClient={client} /></OtherContext.Provider>);
        expect(ref.current?.query.client).toBe(client);
        expect(ref.current?.context).toEqual({name: 'custom'});
        view.unmount();
        client.clear();
    });

    it('removes queries destroyed before mount and owns queries created in lifecycle overrides', () => {
        const client = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        const discardedFn = vi.fn(async () => 'discarded');
        const firstFn = vi.fn(async () => 'first');
        const secondFn = vi.fn(async () => 'second');
        class LifecycleView extends HElement<HElementProps> {
            discarded = this.createQuery({queryKey: ['discarded'], queryFn: discardedFn});

            constructor(props: HElementProps) {
                super(props);
                this.discarded.destroy();
            }

            componentDidMount() {
                this.createQuery({queryKey: ['first'], queryFn: firstFn});
                super.componentDidMount();
                this.createQuery({queryKey: ['second'], queryFn: secondFn});
            }
        }
        const view = render(<LifecycleView queryClient={client} />);
        expect(discardedFn).not.toHaveBeenCalled();
        expect(firstFn).toHaveBeenCalledOnce();
        expect(secondFn).toHaveBeenCalledOnce();
        view.unmount();
        expect(client.getQueryCache().getAll().every(query => query.getObserversCount() === 0)).toBe(true);
        client.clear();
    });

    it('preserves inference and allows options to follow updated props', async () => {
        type Props = HElementProps & {id: number};
        const getOptions = (id: number) => ({
            queryKey: ['typed', id] as const,
            queryFn: async ({queryKey}: QueryFunctionContext<readonly ['typed', number]>) => ({id: queryKey[1]}),
            select: (value: {id: number}) => `item ${value.id}`,
        });
        class TypedView extends HElement<Props> {
            query = this.createQuery(getOptions(this.props.id));

            componentDidUpdate(previousProps: Props) {
                if (previousProps.id !== this.props.id) {
                    this.query.setOptions(getOptions(this.props.id));
                }
            }

            protected _getChildren() {
                return this.query.result.value.data;
            }
        }
        const client = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        const ref = createRef<TypedView>();
        const view = render(<TypedView ref={ref} queryClient={client} id={1} />);
        await act(async () => {
            await vi.advanceTimersByTimeAsync(0);
        });
        expect(screen.getByText('item 1')).toBeInTheDocument();
        expectTypeOf(ref.current!.query.result.value.data).toEqualTypeOf<string | undefined>();
        view.rerender(<TypedView ref={ref} queryClient={client} id={2} />);
        await act(async () => {
            await vi.advanceTimersByTimeAsync(0);
        });
        expect(screen.getByText('item 2')).toBeInTheDocument();
        expect(client.getQueryCache().find({queryKey: ['typed', 1]})?.getObserversCount()).toBe(0);
        view.unmount();
        expect(client.getQueryCache().find({queryKey: ['typed', 2]})?.getObserversCount()).toBe(0);
        client.clear();
    });

    it('keeps a shared request alive until the last component unmounts', () => {
        const client = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        let abortSignal: AbortSignal | undefined;
        const queryFn = vi.fn(({signal}: QueryFunctionContext) => {
            abortSignal = signal;
            return new Promise<string>(() => undefined);
        });
        class PendingView extends HElement<HElementProps> {
            static contextType = QueryClientContext;

            query = this.createQuery({queryKey: ['pending-shared'], queryFn});
        }
        const view = render(
            <QueryClientProvider client={client}>
                <PendingView key="first" />
                <PendingView key="second" />
            </QueryClientProvider>,
        );
        expect(queryFn).toHaveBeenCalledOnce();
        view.rerender(<QueryClientProvider client={client}><PendingView key="second" /></QueryClientProvider>);
        expect(abortSignal?.aborted).toBe(false);
        expect(client.getQueryCache().find({queryKey: ['pending-shared']})?.getObserversCount()).toBe(1);
        view.unmount();
        expect(abortSignal?.aborted).toBe(true);
        expect(client.getQueryCache().find({queryKey: ['pending-shared']})?.getObserversCount()).toBe(0);
        client.clear();
    });
});
