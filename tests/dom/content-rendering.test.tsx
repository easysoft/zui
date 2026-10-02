import {Component, createRef} from 'preact';
import {act, render, screen} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {
    $, ContentRenderContext, CustomContent, HElement, HtmlContent, LazyContent,
    QueryClient, QueryClientContext, QueryClientProvider, registerReactComponent,
    renderCustomContent,
} from '@zui/core';
import type {ContentRenderPolicy, HElementProps} from '@zui/core';
import {Button} from '@zui/button/react';
import {List} from '@zui/list/react';
import {CommonList} from '@zui/common-list/react';

async function flush() {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(0);
    });
}

describe('generic content rendering', () => {
    it('uses explicit native tags before registered names and keeps component lookup compatible', () => {
        registerReactComponent('Button', Button);
        const view = render(
            <CustomContent content={[
                {tag: 'button', children: 'Native'},
                {component: 'button', props: {text: 'Registered'}},
                {tag: 'section', component: 'button', children: [0, {tag: 'strong', children: 'Nested'}]},
            ]}
            />,
        );
        expect(screen.getByRole('button', {name: 'Native'})).not.toHaveClass('btn');
        expect(screen.getByRole('button', {name: 'Registered'})).toHaveClass('btn');
        expect(view.container.querySelector('section')?.textContent).toBe('0Nested');
        expect(view.container.querySelector('[tag]')).toBeNull();
    });

    it('honors explicit tags in Button and List including the show-more row', () => {
        const view = render(
            <div>
                <Button tag="button" component="a" text="Override" />
                <List tag="div" component="ul" items={[{text: 'One'}, {text: 'Two'}]} maxVisibleItems={1} showMoreText="More" />
            </div>,
        );
        expect(screen.getByRole('button', {name: 'Override'}).tagName).toBe('BUTTON');
        const row = view.container.querySelector('.list-show-more')!;
        expect(row.tagName).toBe('DIV');
        expect(row.parentElement?.tagName).toBe('DIV');
    });

    it('renders empty HTML with its requested container and does not mutate descriptions', () => {
        const content = Object.freeze({html: '', tag: 'section' as const, attrs: Object.freeze({'data-empty': 'yes'})});
        const view = render(<CustomContent content={content} />);
        expect(view.container.querySelector('section[data-empty="yes"]')).toBeEmptyDOMElement();
        expect(content.html).toBe('');
    });

    it('renders explicit tag descriptions for list items with an unknown item type', () => {
        class NativeItems extends CommonList {
            static defaultItemProps = {};
        }
        const view = render(<NativeItems items={[{type: 'native', tag: 'li', children: {tag: 'strong', children: 'Native item'}}]} />);
        expect(view.container.querySelector('li strong')).toHaveTextContent('Native item');
    });

    it('resolves each content node once and applies final element policy after flattening props', () => {
        const resolveContent = vi.fn(content => content);
        const prepareElement = vi.fn((component, props) => ({component, props: {...props, 'data-policy': 'yes'}}));
        const content = {tag: 'section' as const, props: {title: 'flattened'}, children: [{tag: 'strong' as const, children: 'Text'}]};
        const view = render(<ContentRenderContext.Provider value={{resolveContent, prepareElement}}><CustomContent content={content} /></ContentRenderContext.Provider>);
        expect(resolveContent.mock.calls.map(([node]) => node)).toEqual([content, content.children[0], 'Text']);
        expect(prepareElement).toHaveBeenCalledWith('section', expect.objectContaining({title: 'flattened'}));
        expect(view.container.querySelector('section')).toHaveAttribute('data-policy', 'yes');
    });

    it('retains keyed component instances and DOM when descriptions reorder', () => {
        const unmount = vi.fn();
        class KeyProbe extends Component<{text: string}> {
            componentWillUnmount() {
                unmount();
            }

            render() {
                return <span>{this.props.text}</span>;
            }
        }
        const first = {component: KeyProbe, key: 'a', props: {text: 'First'}};
        const second = {component: KeyProbe, key: 'b', props: {text: 'Second'}};
        expect((renderCustomContent({content: [first, second]}) as {key: string}[]).map(node => node.key)).toEqual(['a', 'b']);
        const view = render(<CustomContent content={[first, second]} />);
        const element = screen.getByText('First');
        view.rerender(<CustomContent content={[second, first]} />);
        expect(screen.getByText('First')).toBe(element);
        expect(unmount).not.toHaveBeenCalled();
    });

    it('preserves raw component props.children unless explicit children override it', () => {
        const RawChildren = (props: {children?: unknown}) => <span>{JSON.stringify(props.children)}</span>;
        const props = {children: {type: 'business-data'}};
        const view = render(<HElement component={RawChildren} props={props} />);
        expect(view.container).toHaveTextContent('{"type":"business-data"}');
        view.rerender(<HElement component={RawChildren} props={props} children={null} />);
        expect(view.container).toHaveTextContent('null');
    });

    it('reports policy failures and covers native dangerous HTML without suppressing query context', () => {
        class QueryElement extends HElement<HElementProps> {
            static contextType = QueryClientContext;

            query = this.createQuery({queryKey: ['content-policy'], queryFn: async () => 'result'});
        }
        const client = new QueryClient({defaultOptions: {queries: {gcTime: Infinity}}});
        const ref = createRef<QueryElement>();
        const renderError = vi.fn(() => <span role="alert">Rejected</span>);
        const policy: ContentRenderPolicy = {renderError, prepareElement: (component, props) => {
            if (props.dangerouslySetInnerHTML) {
                throw new Error('Raw HTML');
            }
            return {component, props};
        }};
        const view = render(
            <QueryClientProvider client={client}>
                <ContentRenderContext.Provider value={policy}>
                    <QueryElement ref={ref} />
                    <HElement props={{dangerouslySetInnerHTML: {__html: '<b>Unsafe</b>'}}} />
                </ContentRenderContext.Provider>
            </QueryClientProvider>,
        );
        expect(ref.current?.query.client).toBe(client);
        expect(screen.getByRole('alert')).toHaveTextContent('Rejected');
        expect(renderError).toHaveBeenCalledOnce();
        expect(view.container.querySelector('b')).toBeNull();
        view.unmount();
        expect(client.getQueryCache().find({queryKey: ['content-policy']})?.getObserversCount()).toBe(0);
        client.clear();
    });

    it('executes only the HTML approved by the policy and does not double-check prepared HTML', () => {
        const runJS = vi.spyOn($.fn, 'runJS').mockReturnThis();
        const zuiInit = vi.spyOn($.fn, 'zuiInit').mockReturnThis();
        const prepareHTML = vi.fn(() => ({html: '<b>Clean</b>', executeScript: false}));
        const prepareElement = vi.fn((component, props) => ({component, props}));
        const view = render(<ContentRenderContext.Provider value={{prepareHTML, prepareElement}}><HtmlContent html="<script>bad()</script>" executeScript /></ContentRenderContext.Provider>);
        expect(view.container.querySelector('script')).toBeNull();
        expect(view.container.querySelector('b')).toHaveTextContent('Clean');
        expect(prepareHTML).toHaveBeenCalledWith('<script>bad()</script>', true, 'html');
        expect(prepareElement.mock.calls[0][1]).not.toHaveProperty('dangerouslySetInnerHTML');
        expect(runJS).not.toHaveBeenCalled();
        expect(zuiInit).not.toHaveBeenCalled();
    });
});

describe('lazy content lifecycle', () => {
    it('renders descriptor loading content, transforms responses and uses its native container tag', async () => {
        let resolve!: (value: string) => void;
        const fetcher = vi.fn(() => new Promise<string>((done) => {
            resolve = done;
        }));
        const view = render(<LazyContent tag="section" type="custom" fetcher={fetcher} loadingContent={{tag: 'strong', children: 'Loading'}} transformContent={content => ({tag: 'p', children: String(content).toUpperCase()})} />);
        await flush();
        expect(view.container.firstElementChild?.tagName).toBe('SECTION');
        expect(view.container.querySelector('strong')).toHaveTextContent('Loading');
        await act(async () => {
            resolve('ready');
        });
        await flush();
        expect(view.container.querySelector('p')).toHaveTextContent('READY');
    });

    it('uses the normal error placeholder when a response transformation fails', async () => {
        const transformContent = () => {
            throw new Error('Invalid JSON UI');
        };
        render(<LazyContent type="custom" fetcher={async () => 'invalid'} errorText="Cannot load" transformContent={transformContent} />);
        await flush();
        expect(screen.getByText('Cannot load')).toBeInTheDocument();
    });

    it('reports the original error through a policy while displaying custom errorText', async () => {
        const error = new Error('Request failed');
        const renderError = vi.fn(() => <span role="alert">Default error</span>);
        const fetcher = async () => {
            throw error;
        };
        render(<ContentRenderContext.Provider value={{renderError}}><LazyContent type="text" fetcher={fetcher} errorText="Please try again" /></ContentRenderContext.Provider>);
        await flush();
        expect(renderError).toHaveBeenCalledWith(error);
        expect(screen.getByRole('alert')).toHaveTextContent('Please try again');
        expect(screen.queryByText('Default error')).not.toBeInTheDocument();
    });

    it('discards stale responses and prevents state updates after unmount', async () => {
        let resolveFirst!: (value: string) => void;
        let resolveSecond!: (value: string) => void;
        const first = () => new Promise<string>((done) => {
            resolveFirst = done;
        });
        const second = () => new Promise<string>((done) => {
            resolveSecond = done;
        });
        const ref = createRef<LazyContent>();
        const view = render(<LazyContent ref={ref} type="text" fetcher={first} />);
        view.rerender(<LazyContent ref={ref} type="text" fetcher={second} />);
        await act(async () => {
            resolveSecond('Latest');
        });
        await act(async () => {
            resolveFirst('Stale');
        });
        expect(view.container).toHaveTextContent('Latest');
        expect(view.container).not.toHaveTextContent('Stale');
        view.rerender(<LazyContent ref={ref} type="text" fetcher={first} />);
        const instance = ref.current!;
        const setState = vi.spyOn(instance, 'setState');
        view.unmount();
        setState.mockClear();
        await act(async () => {
            resolveFirst('Unmounted');
        });
        expect(setState).not.toHaveBeenCalled();
    });

    it('reloads when type changes, but not when transform or presentation changes', async () => {
        const fetcher = vi.fn(async () => 'Text');
        const view = render(<LazyContent type="text" fetcher={fetcher} />);
        await flush();
        view.rerender(<LazyContent type="text" fetcher={fetcher} className="updated" transformContent={content => content} />);
        await flush();
        expect(fetcher).toHaveBeenCalledOnce();
        view.rerender(<LazyContent type="custom" fetcher={fetcher} />);
        await flush();
        expect(fetcher).toHaveBeenCalledTimes(2);
    });

    it('marks lazy HTML separately and disables implicit script execution inside a policy', async () => {
        const runJS = vi.spyOn($.fn, 'runJS').mockReturnThis();
        const prepareHTML = vi.fn((html, executeScript) => ({html, executeScript}));
        render(<ContentRenderContext.Provider value={{prepareHTML}}><LazyContent type="html" fetcher={async () => '<b>Lazy HTML</b>'} /></ContentRenderContext.Provider>);
        await flush();
        expect(screen.getByText('Lazy HTML')).toBeInTheDocument();
        expect(prepareHTML).toHaveBeenCalledWith('<b>Lazy HTML</b>', false, 'lazy');
        expect(runJS).not.toHaveBeenCalled();
    });

    it('preserves implicit script execution outside a policy and honors explicit false', async () => {
        const runJS = vi.spyOn($.fn, 'runJS').mockReturnThis();
        vi.spyOn($.fn, 'zuiInit').mockReturnThis();
        const fetcher = async () => '<b>Legacy HTML</b>';
        const view = render(<LazyContent fetcher={fetcher} />);
        await flush();
        expect(runJS).toHaveBeenCalled();
        runJS.mockClear();
        view.rerender(<LazyContent fetcher={async () => '<b>No script</b>'} executeScript={false} />);
        await flush();
        expect(runJS).not.toHaveBeenCalled();
    });

    it('rejects invalid lazy settings before starting the request', async () => {
        const fetcher = vi.fn(async () => 'Should not load');
        const renderError = vi.fn(() => <span role="alert">Lazy rejected</span>);
        const prepareLazy = () => {
            throw new Error('No access');
        };
        render(<ContentRenderContext.Provider value={{prepareLazy, renderError}}><LazyContent type="text" fetcher={fetcher} /></ContentRenderContext.Provider>);
        await flush();
        expect(fetcher).not.toHaveBeenCalled();
        expect(screen.getByRole('alert')).toHaveTextContent('Lazy rejected');
        expect(renderError).toHaveBeenCalledOnce();
    });
});
