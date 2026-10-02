import {Component} from 'preact';
import {act, fireEvent, render, screen} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {$, CustomContent, HElement, HtmlContent, LazyContent, reactComponentMap, registerReactComponent} from '@zui/core';
import type {CustomContentType} from '@zui/core';
import {JsonUI, JsonUIError, validateJsonUI} from '@zui/json-ui';
import type {JsonUIAction, JsonUINode} from '@zui/json-ui';
import {JsonUI as JsonUIReact} from '@zui/json-ui/react';
import '@zui/button';
import '@zui/menu';

async function flush() {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(0);
    });
}

function mockResponse(content: unknown, json = true) {
    return new Response(json ? JSON.stringify(content) : String(content), {
        headers: {'Content-Type': json ? 'application/json' : 'text/html'},
    });
}

describe('JSON UI', () => {
    it('resolves every currently registered name and alias without a component allowlist', () => {
        expect(reactComponentMap.size).toBeGreaterThan(10);
        for (const [name, component] of reactComponentMap) {
            let props: Record<string, unknown> = {};
            if ((component as unknown) === HtmlContent) {
                props = {html: ''};
            } else if ((component as unknown) === LazyContent) {
                props = {fetcher: '/content', type: 'text'};
            } else if ((component as unknown) === CustomContent) {
                props = {content: null};
            } else if ((component as unknown) === JsonUIReact) {
                props = {schema: null};
            }
            expect(validateJsonUI({component: name, props}, {capabilities: {html: true, lazyHtml: true}}), name).toEqual([]);
        }
    });

    it('uses registered components case-insensitively alongside explicit native tags without changing input', () => {
        const schema: JsonUINode = {
            tag: 'section',
            children: [0, null, {tag: 'button', props: {id: 'native'}, children: 'Native'}, {component: 'bUtToN', props: {text: 'ZUI'}}],
        };
        const original = JSON.stringify(schema);
        const view = render(<JsonUIReact schema={schema} />);

        expect(screen.getByRole('button', {name: 'Native'})).not.toHaveClass('btn');
        expect(screen.getByRole('button', {name: 'Native'})).toHaveAttribute('id', 'native');
        expect(screen.getByRole('button', {name: 'ZUI'})).toHaveClass('btn');
        expect(view.container.querySelector('section')).toHaveTextContent('0NativeZUI');
        expect(JSON.stringify(schema)).toBe(original);
    });

    it('renders real Menu items and preserves their non-executable internal attributes', () => {
        const onError = vi.fn();
        const view = render(<JsonUIReact schema={{component: 'Menu', props: {items: [{text: 'First'}, {text: 'Second'}]}}} onError={onError} />);
        expect(view.container.querySelector('menu')).toHaveTextContent('FirstSecond');
        expect(view.container.querySelector('[z-item]')).not.toBeNull();
        expect(onError).not.toHaveBeenCalled();
    });

    it('preserves legacy CustomContent fields produced by Menu and protects frozen nested JSON', () => {
        const onError = vi.fn();
        const schema: JsonUINode = {
            component: 'Menu',
            props: {
                wrap: true,
                header: {tag: 'strong', className: 'legacy-header', children: 'Header'},
                items: [{type: 'native', tag: 'li', className: 'native-item', children: 'Legacy item'}],
            },
        };
        const view = render(<JsonUIReact schema={schema} onError={onError} />);
        expect(onError).not.toHaveBeenCalled();
        expect(view.container.querySelector('strong.legacy-header')).toHaveTextContent('Header');
        expect(view.container.querySelector('li.native-item')).toHaveTextContent('Legacy item');
        expect(onError).not.toHaveBeenCalled();
        const contentStyle = Object.freeze({color: 'red'});
        const nestedStyle = Object.freeze({backgroundColor: 'blue'});
        const frozen = Object.freeze({component: 'custom', props: Object.freeze({style: contentStyle, content: Object.freeze({html: 'Frozen', props: Object.freeze({style: nestedStyle})})})});
        view.unmount();
        render(<JsonUIReact schema={frozen} capabilities={{html: true}} onError={onError} />);
        expect(screen.getByText('Frozen')).toBeInTheDocument();
        expect(contentStyle).toEqual({color: 'red'});
        expect(nestedStyle).toEqual({backgroundColor: 'blue'});
        expect(onError).not.toHaveBeenCalled();
    });

    it('passes opaque JSON props and preserves callback this, parameters, return values and updated actions', () => {
        let callback: JsonUIAction | undefined;
        const receive = vi.fn();
        registerReactComponent('JSONDataProbe', (props: {data?: unknown; actions?: unknown; onChange?: JsonUIAction}) => {
            callback = props.onChange;
            receive(props.data, props.actions);
            return <span>Probe</span>;
        });
        const schema: JsonUINode = {
            component: 'JSONDataProbe',
            props: {data: {component: 'ordinary data', children: [{type: 'record'}]}, actions: ['ordinary actions']},
            events: {onChange: 'change'},
        };
        const action = vi.fn(function (this: unknown, first: unknown, second: unknown) {
            return {owner: this, first, second};
        });
        const view = render(<JsonUIReact schema={schema} actions={{change: action}} />);
        expect(receive).toHaveBeenLastCalledWith({component: 'ordinary data', children: [{type: 'record'}]}, ['ordinary actions']);
        const owner = {id: 'owner'};
        const first = {value: 7};
        expect((callback as (...args: unknown[]) => unknown).call(owner, first, false)).toEqual({owner, first, second: false});
        expect(action.mock.instances[0]).toBe(owner);

        const promise = Promise.resolve('saved');
        const updated = vi.fn(() => promise);
        view.rerender(<JsonUIReact schema={schema} actions={{change: updated}} />);
        expect(callback!()).toBe(promise);
    });

    it('preserves props.children as component data and isolates Button style normalization from frozen input', () => {
        registerReactComponent('JsonChildrenProbe', (props: {children?: unknown}) => <span>{String(props.children)}</span>);
        const style = Object.freeze({color: 'red'});
        const props = Object.freeze({text: 'Sized', size: 40, style});
        const schema = Object.freeze({component: 'Button', props});
        render(<JsonUIReact schema={[{component: 'JsonChildrenProbe', props: {children: 'From props'}}, schema]} />);
        expect(screen.getByText('From props')).toBeInTheDocument();
        expect(screen.getByRole('button', {name: 'Sized'})).toBeInTheDocument();
        expect(style).toEqual({color: 'red'});
        expect(props).toEqual({text: 'Sized', size: 40, style: {color: 'red'}});
    });

    it('reports schema paths, rejects non-JSON data, and supports late registration or replacement on the next render', () => {
        expect(validateJsonUI({tag: 'div', children: {component: 'MissingJsonWidget'}})[0]).toMatchObject({path: '$.children.component'});
        expect(validateJsonUI({component: 'Button', events: {onClick: 'missing'}})[0].path).toBe('$.events.onClick');
        expect(validateJsonUI({tag: 'div', component: 'Button'})[0].path).toBe('$');
        expect(validateJsonUI({tag: 'div', props: {callback: () => 1}})[0].path).toBe('$.props.callback');
        expect(validateJsonUI(JSON.parse('{"tag":"div","props":{"__proto__":{}}}'))[0].path).toBe('$.props.__proto__');
        const onError = vi.fn();
        const view = render(<JsonUIReact schema={{component: 'LateJsonWidget'}} onError={onError} />);
        expect(screen.getByRole('alert')).toHaveTextContent('LateJsonWidget');
        registerReactComponent('LateJsonWidget', () => <span>First implementation</span>);
        view.rerender(<JsonUIReact schema={{component: 'LateJsonWidget'}} onError={onError} />);
        expect(screen.getByText('First implementation')).toBeInTheDocument();
        registerReactComponent('LateJsonWidget', () => <span>Replacement</span>);
        view.rerender(<JsonUIReact schema={{component: 'LateJsonWidget'}} onError={onError} />);
        expect(screen.getByText('Replacement')).toBeInTheDocument();
    });

    it('retains the previous interface and actions when an update fails validation', () => {
        const save = vi.fn();
        const onError = vi.fn();
        const view = render(<JsonUIReact schema={{tag: 'button', children: 'Save', events: {onClick: 'save'}}} actions={{save}} />);
        const button = screen.getByRole('button');
        view.rerender(<JsonUIReact schema={{component: 'UnregisteredUpdate'}} onError={onError} />);
        expect(screen.getByRole('button')).toBe(button);
        fireEvent.click(button);
        expect(save).toHaveBeenCalledOnce();
        expect(onError).toHaveBeenCalledWith(expect.any(JsonUIError));
    });

    it('supports stable keys, the vanilla wrapper and destruction', async () => {
        const unmount = vi.fn();
        class Probe extends Component<{text: string}> {
            componentWillUnmount() {
                unmount(this.props.text);
            }

            render() {
                return <span>{this.props.text}</span>;
            }
        }
        registerReactComponent('JsonKeyProbe', Probe);
        const host = document.createElement('div');
        document.body.append(host);
        const first: JsonUINode = {component: 'JsonKeyProbe', key: 'a', props: {text: 'First'}};
        const second: JsonUINode = {component: 'JsonKeyProbe', key: 'b', props: {text: 'Second'}};
        const view = new JsonUI(host, {schema: [first, second]});
        await flush();
        const element = screen.getByText('First');
        view.render({schema: [second, first]});
        expect(screen.getByText('First')).toBe(element);
        expect(unmount).not.toHaveBeenCalled();
        view.destroy();
        expect(host).toBeEmptyDOMElement();
        expect(unmount).toHaveBeenCalledTimes(2);
    });

    it('enforces HTML permissions through direct nodes, aliases, CustomContent and HElement nesting', () => {
        registerReactComponent('JsonHTMLAlias', HtmlContent);
        const blocked = [
            {html: '<b>HTML</b>'},
            {component: 'html', props: {html: '<b>HTML</b>'}},
            {component: 'JsonHTMLAlias', props: {html: '<b>HTML</b>'}},
            {component: 'custom', props: {content: {html: '<b>HTML</b>'}}},
            {component: 'element', props: {component: 'html', props: {html: '<b>HTML</b>'}}},
        ];
        blocked.forEach(node => expect(validateJsonUI(node)[0].message).toContain('html capability is disabled'));
        expect(validateJsonUI({html: '', executeScript: true}, {capabilities: {html: true}})[0].message).toContain('executeScript');
    });

    it('checks runtime content of trusted registered components and accepts their functions and VNodes', () => {
        registerReactComponent('JsonContentWrapper', (props: {content?: CustomContentType}) => <CustomContent content={props.content} />);
        const onError = vi.fn();
        const view = render(<JsonUIReact schema={{component: 'JsonContentWrapper', props: {content: {html: '<b>Forbidden</b>'}}}} onError={onError} />);
        expect(screen.getByRole('alert')).toHaveTextContent('html capability is disabled');
        expect(onError).toHaveBeenCalled();
        registerReactComponent('JsonTrustedContent', () => <CustomContent content={() => <strong>Trusted vnode</strong>} />);
        view.rerender(<JsonUIReact schema={{component: 'JsonTrustedContent'}} />);
        expect(screen.getByText('Trusted vnode')).toBeInTheDocument();
    });

    it('sanitizes HTML and strips command and automatic-initialization attributes without executing scripts', () => {
        const runJS = vi.spyOn($.fn, 'runJS');
        const html = '<b onclick="alert(1)" zui-create="menu" data-toggle="modal">Safe</b><script>alert(1)</script><a href="#!run" z-use-button>Command</a><img src="x" onerror="alert(1)">';
        const view = render(<JsonUIReact capabilities={{html: true}} schema={{html, tag: 'section'}} />);
        expect(view.container.querySelector('section b')).toHaveTextContent('Safe');
        expect(view.container.querySelector('script,[onclick],[onerror],[zui-create],[data-toggle],[z-use-button],[href]')).toBeNull();
        expect(runJS).not.toHaveBeenCalled();
    });

    it.each(['false', 'true', 1])('rejects non-boolean script requests in nested CustomContent (%s)', (executeScript) => {
        const runJS = vi.spyOn($.fn, 'runJS').mockReturnThis();
        const capabilities = {html: true, executeScript: true};
        const schema: JsonUINode = {component: 'custom', props: {content: {html: '<script>alert(1)</script>', executeScript}}};
        expect(validateJsonUI(schema, {capabilities})[0]).toMatchObject({path: '$content.executeScript'});
        render(<JsonUIReact schema={schema} capabilities={capabilities} />);
        expect(screen.getByRole('alert')).toHaveTextContent('Expected a boolean');
        expect(runJS).not.toHaveBeenCalled();
    });

    it('rejects non-boolean script requests at the final HTML policy entry', () => {
        const runJS = vi.spyOn($.fn, 'runJS').mockReturnThis();
        registerReactComponent('JsonInvalidScriptFlag', () => <HtmlContent html="<script>alert(1)</script>" executeScript={'false' as unknown as boolean} />);
        render(<JsonUIReact schema={{component: 'JsonInvalidScriptFlag'}} capabilities={{html: true, executeScript: true}} />);
        expect(screen.getByRole('alert')).toHaveTextContent('Expected a boolean');
        expect(runJS).not.toHaveBeenCalled();
    });

    it('only executes explicitly requested HTML scripts and keeps capabilities fixed for a view', () => {
        const runJS = vi.spyOn($.fn, 'runJS').mockReturnThis();
        const view = render(<JsonUIReact capabilities={{html: true, executeScript: true}} schema={{html: '<b>Unrequested</b>'}} />);
        expect(runJS).not.toHaveBeenCalled();
        view.rerender(<JsonUIReact schema={{html: '<b>Requested</b>', executeScript: true}} />);
        expect(runJS).toHaveBeenCalledOnce();
        view.unmount();
        const denied = render(<JsonUIReact schema="Previous" />);
        denied.rerender(<JsonUIReact capabilities={{html: true}} schema={{html: '<b>Still denied</b>'}} />);
        expect(screen.getByText('Previous')).toBeInTheDocument();
        expect(screen.queryByText('Still denied')).not.toBeInTheDocument();
    });

    it('rejects nested JsonUI capability injection through its registered alias', () => {
        registerReactComponent('NestedJsonRenderer', JsonUIReact);
        expect(validateJsonUI({component: 'NestedJsonRenderer', props: {capabilities: {html: true}, schema: {html: 'Escalated'}}})[0].message).toContain('cannot override host options');
    });

    it('rejects executable native tags, URLs, inline event attributes, and dangerous HTML without permission', () => {
        [
            {tag: 'script', children: 'alert(1)'},
            {tag: 'a', props: {href: 'javascript:alert(1)'}},
            {tag: 'a', props: {href: '#!run'}},
            {tag: 'div', props: {attrs: {'zui-init': 'alert(1)'}}},
            {tag: 'button', props: {attrs: {'zui-command': 'window~alert/1'}}},
            {tag: 'button', props: {'zui-commands-proxy': 'window'}},
            {tag: 'button', props: {attrs: {'z-commands': 'window'}}},
            {tag: 'img', props: {attrs: {onerror: 'alert(1)'}}},
            {tag: 'div', props: {dangerouslySetInnerHTML: {__html: '<b>Bad</b>'}}},
            {component: 'element', props: {component: 'script'}},
        ].forEach(node => expect(validateJsonUI(node)).toHaveLength(1));
    });

    it('loads JSON once, renders loading content, and uses latest actions without reloading', async () => {
        let complete!: (response: Response) => void;
        const fetch = vi.fn(() => new Promise<Response>((resolve) => {
            complete = resolve;
        }));
        vi.stubGlobal('fetch', fetch);
        const schema: JsonUINode = {fetcher: '/json-ui.json', type: 'custom', tag: 'section', loadingContent: {tag: 'strong', children: 'Loading'}};
        const first = vi.fn();
        const second = vi.fn();
        const view = render(<JsonUIReact schema={schema} actions={{save: first}} />);
        await flush();
        expect(screen.getByText('Loading').tagName).toBe('STRONG');
        view.rerender(<JsonUIReact schema={{...schema}} actions={{save: second}} />);
        await act(async () => complete(mockResponse({tag: 'button', children: 'Loaded', events: {onClick: 'save'}})));
        await flush();
        expect(fetch).toHaveBeenCalledOnce();
        expect(view.container.querySelector('section button')).toHaveTextContent('Loaded');
        fireEvent.click(screen.getByRole('button'));
        expect(first).not.toHaveBeenCalled();
        expect(second).toHaveBeenCalledOnce();
        const third = vi.fn();
        view.rerender(<JsonUIReact schema={schema} actions={{save: third}} />);
        fireEvent.click(screen.getByRole('button'));
        expect(third).toHaveBeenCalledOnce();
        expect(fetch).toHaveBeenCalledOnce();
    });

    it('reports invalid asynchronous JSON and disallows permissions arriving in responses', async () => {
        vi.stubGlobal('fetch', vi.fn(async () => mockResponse({html: '<b>Cannot escalate</b>'})));
        const onError = vi.fn();
        render(<JsonUIReact schema={{fetcher: '/json-ui.json', type: 'custom'}} onError={onError} />);
        await flush();
        expect(screen.getByRole('alert')).toHaveTextContent('html capability is disabled');
        expect(onError).toHaveBeenCalledWith(expect.objectContaining({path: expect.stringContaining('response')}));
    });

    it('uses replaced registry entries in already-loaded lazy content without requesting it again', async () => {
        registerReactComponent('JsonLazyVersion', () => <span>Original lazy component</span>);
        const fetch = vi.fn(async () => mockResponse({component: 'JsonLazyVersion'}));
        vi.stubGlobal('fetch', fetch);
        const schema: JsonUINode = {fetcher: '/versioned.json', type: 'custom'};
        const view = render(<JsonUIReact schema={schema} />);
        await flush();
        expect(screen.getByText('Original lazy component')).toBeInTheDocument();
        registerReactComponent('JsonLazyVersion', () => <span>Replaced lazy component</span>);
        view.rerender(<JsonUIReact schema={schema} />);
        expect(screen.getByText('Replaced lazy component')).toBeInTheDocument();
        expect(fetch).toHaveBeenCalledOnce();
    });

    it('keeps lazy HTML permission independent of direct HTML and script permission', async () => {
        const fetch = vi.fn(async () => mockResponse('<b>Lazy HTML</b><script>alert(1)</script>', false));
        vi.stubGlobal('fetch', fetch);
        const runJS = vi.spyOn($.fn, 'runJS');
        const view = render(<JsonUIReact capabilities={{lazyHtml: true}} schema={{fetcher: '/fragment', type: 'html'}} />);
        await flush();
        expect(screen.getByText('Lazy HTML')).toBeInTheDocument();
        expect(view.container.querySelector('script')).toBeNull();
        expect(runJS).not.toHaveBeenCalled();
        expect(validateJsonUI({component: 'lazy', props: {fetcher: '/fragment'}}, {capabilities: {lazyHtml: true}})[0].message).toContain('explicit');
        expect(validateJsonUI({fetcher: '/fragment', type: 'html'}, {capabilities: {html: true}})[0].message).toContain('lazyHtml');
    });

    it('validates request URLs before fetching and lets the host opt into an HTTP origin', () => {
        expect(validateJsonUI({fetcher: 'https://other.example/content', type: 'text'})[0].path).toBe('$.fetcher');
        expect(validateJsonUI({fetcher: 'javascript:alert(1)', type: 'text'}, {allowRequest: () => true})).toHaveLength(1);
        expect(validateJsonUI({fetcher: 'https://other.example/content', type: 'text'}, {allowRequest: url => url.hostname === 'other.example'})).toEqual([]);
        expect(validateJsonUI({component: 'custom', props: {content: {fetcher: '{0}', type: 'text', fetcherArgs: ['https://other.example/content']}}})[0].message).toContain('interpolation');
    });

    it('ignores stale lazy responses and aborts outstanding requests when destroyed', async () => {
        const pending: ((response: Response) => void)[] = [];
        const signals: AbortSignal[] = [];
        vi.stubGlobal('fetch', vi.fn((_url: string, init: RequestInit) => {
            signals.push(init.signal as AbortSignal);
            return new Promise<Response>(resolve => pending.push(resolve));
        }));
        const onError = vi.fn();
        const view = render(<JsonUIReact schema={{fetcher: '/first', type: 'text'}} onError={onError} />);
        await flush();
        view.rerender(<JsonUIReact schema={{fetcher: '/second', type: 'text'}} onError={onError} />);
        await flush();
        await act(async () => pending[1](mockResponse('New', false)));
        await flush();
        await act(async () => pending[0](mockResponse('Old', false)));
        await flush();
        expect(screen.getByText('New')).toBeInTheDocument();
        expect(screen.queryByText('Old')).not.toBeInTheDocument();
        view.rerender(<JsonUIReact schema={{fetcher: '/pending', type: 'text'}} onError={onError} />);
        await flush();
        view.unmount();
        expect(signals[2].aborted).toBe(true);
        await act(async () => pending[2](mockResponse('Too late', false)));
        await flush();
        expect(onError).not.toHaveBeenCalled();
    });

    it('does not bypass native HTML policy from a registered component using HElement', () => {
        registerReactComponent('JsonRawHTML', () => <HElement dangerouslySetInnerHTML={{__html: '<b>Denied</b>'}} />);
        render(<JsonUIReact schema={{component: 'JsonRawHTML'}} />);
        expect(screen.getByRole('alert')).toHaveTextContent('html capability is disabled');
    });
});
