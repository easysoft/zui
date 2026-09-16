import {Component, createContext} from 'preact';
import type {ComponentChildren} from 'preact';
import type {QueryClient} from '@tanstack/query-core';

/** Shares a client with class contextType or Context.Consumer, without hooks or a global singleton. */
export const QueryClientContext = createContext<QueryClient | undefined>(undefined);

/** Resolves an explicit client before context; fails clearly when neither is available. */
export function resolveQueryClient(client?: QueryClient, contextClient?: QueryClient): QueryClient {
    const resolved = client ?? contextClient;
    if (!resolved) {
        throw new Error('A QueryClient is required. Pass a client or render inside QueryClientProvider.');
    }
    return resolved;
}

/** Props for the hook-free QueryClientProvider. Keep client stable within an application session. */
export type QueryClientProviderProps = {
    client: QueryClient;
    children?: ComponentChildren;
};

/**
 * Owns one mount/unmount pair for its client, including when the client prop changes.
 * Changing context does not rebind existing query controllers: recreate them or key this provider.
 * Multiple providers may share a client; unmounting never clears its cache.
 */
export class QueryClientProvider extends Component<QueryClientProviderProps> {
    componentDidMount(): void {
        this.props.client.mount();
    }

    componentDidUpdate(previousProps: QueryClientProviderProps): void {
        if (previousProps.client !== this.props.client) {
            previousProps.client.unmount();
            this.props.client.mount();
        }
    }

    componentWillUnmount(): void {
        this.props.client.unmount();
    }

    render() {
        return <QueryClientContext.Provider value={this.props.client}>{this.props.children}</QueryClientContext.Provider>;
    }
}
