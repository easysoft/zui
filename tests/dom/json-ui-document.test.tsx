import {createRef} from 'preact';
import {act, fireEvent, render, screen} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {registerReactComponent} from '@zui/core';
import {Checkbox} from '@zui/checkbox/react';
import {Input} from '@zui/form-control/react';
import {JsonUI, JsonUIError, validateJsonUI} from '@zui/json-ui';
import type {JsonUIDocument, JsonUIValue} from '@zui/json-ui';
import {JsonUI as JsonUIReact} from '@zui/json-ui/react';
import '@zui/button';
import '@zui/picker';

registerReactComponent({Checkbox, Input});

const refValue = (path: string) => ({$ref: path});
const model = (path: string, event = 'onChange', value = refValue('args.0')) => ({path, event, value});
const documentOf = (overrides: Partial<JsonUIDocument> = {}): JsonUIDocument => ({version: 1, state: {}, ui: null, ...overrides});

async function flush() {
    await act(async () => {
        await vi.advanceTimersByTimeAsync(300);
    });
}

describe('JSON UI documents', () => {
    it('binds native and registered controlled inputs, derived values and conditional nodes', async () => {
        const ref = createRef<JsonUIReact>();
        const changed = vi.fn();
        const schema = documentOf({
            state: {name: '', agreed: false},
            computed: {label: {$op: 'concat', args: ['Hello ', refValue('state.name')]}},
            ui: [
                {component: 'Input', props: {placeholder: 'Name'}, model: {value: model('state.name')}},
                {component: 'Checkbox', props: {label: 'Agree'}, model: {checked: model('state.agreed', 'onChange', refValue('args.1'))}},
                {tag: 'input', props: {'aria-label': 'Native'}, model: {value: model('state.name', 'onInput', refValue('event.value'))}},
                {tag: 'p', key: 'message', when: refValue('state.agreed'), bind: {children: refValue('computed.label')}},
            ],
        });
        const original = JSON.stringify(schema);
        render(<JsonUIReact ref={ref} schema={schema} onStateChange={changed} />);
        fireEvent.change(screen.getByPlaceholderText('Name'), {target: {value: 'Ada'}});
        await flush();
        expect(screen.getByRole('textbox', {name: 'Native'})).toHaveValue('Ada');
        fireEvent.click(screen.getByRole('checkbox', {name: 'Agree'}));
        await flush();
        expect(screen.getByText('Hello Ada')).toBeVisible();
        fireEvent.input(screen.getByRole('textbox', {name: 'Native'}), {target: {value: 'Lin'}});
        await flush();
        expect(screen.getByPlaceholderText('Name')).toHaveValue('Lin');
        expect(screen.getByText('Hello Lin')).toBeVisible();
        expect(changed).toHaveBeenCalledTimes(3);
        expect(ref.current!.getState()).toEqual({name: 'Lin', agreed: true});
        expect(JSON.stringify(schema)).toBe(original);
        fireEvent.click(screen.getByRole('checkbox'));
        await flush();
        expect(screen.queryByText('Hello Lin')).not.toBeInTheDocument();
        expect(ref.current!.getState().name).toBe('Lin');
    });

    it('updates real Pickers and clears dependent selections once for both host and user writes', async () => {
        const ref = createRef<JsonUIReact>();
        const changed = vi.fn();
        const schema = documentOf({
            state: {province: 'gd', city: 'gz'},
            computed: {cities: {$op: 'get', args: [{$literal: {gd: [{value: 'gz', text: '广州'}], zj: [{value: 'hz', text: '杭州'}]}}, refValue('state.province'), []]}},
            actions: {clearCity: {type: 'set', path: 'state.city', value: ''}},
            watch: [{paths: ['state.province'], do: {action: 'clearCity'}}],
            ui: [
                {component: 'Picker', props: {items: [{value: 'gd', text: '广东'}, {value: 'zj', text: '浙江'}]}, model: {value: model('state.province')}},
                {component: 'Picker', props: {placeholder: '选择城市'}, model: {value: model('state.city')}, bind: {'props.items': refValue('computed.cities')}},
            ],
        });
        render(<JsonUIReact ref={ref} schema={schema} onStateChange={changed} />);
        await flush();
        await vi.waitFor(() => expect(screen.getByText('广州')).toBeVisible());
        act(() => {
            ref.current!.patchState({province: 'zj'});
        });
        await flush();
        expect(ref.current!.getState()).toEqual({province: 'zj', city: ''});
        expect(changed).toHaveBeenCalledTimes(1);
        fireEvent.click(screen.getByText('选择城市'));
        await flush();
        fireEvent.click(screen.getByText('杭州'));
        await flush();
        expect(ref.current!.getState().city).toBe('hz');
        expect(changed).toHaveBeenCalledTimes(2);
    });

    it('runs model, actions, chained watches and computed reads in one transaction and returns synchronously', async () => {
        const ref = createRef<JsonUIReact>();
        const changed = vi.fn();
        let callback: ((value: number) => unknown) | undefined;
        registerReactComponent('DocumentEventProbe', (props: {value: number; onChange: (value: number) => unknown}) => {
            callback = props.onChange;
            return <span>{props.value}</span>;
        });
        const schema = documentOf({
            state: {a: 0, b: 0, c: 0, derived: 0},
            computed: {twice: {$op: 'mul', args: [refValue('state.a'), 2]}},
            watch: [
                {paths: ['state.b'], do: {type: 'set', path: 'state.c', value: refValue('state.b')}},
                {paths: ['state.a'], do: {type: 'set', path: 'state.b', value: refValue('computed.twice')}},
            ],
            ui: {component: 'DocumentEventProbe', model: {value: model('state.a')}, events: {onChange: [
                {type: 'if', condition: {$op: 'gt', args: [refValue('computed.twice'), 0]}, then: {type: 'set', path: 'state.derived', value: refValue('computed.twice')}},
                {type: 'return', value: false},
                {type: 'set', path: 'state.a', value: 999},
            ]}},
        });
        render(<JsonUIReact ref={ref} schema={schema} onStateChange={changed} />);
        expect(callback!(3)).toBe(false);
        await flush();
        expect(ref.current!.getState()).toEqual({a: 3, b: 6, c: 6, derived: 6});
        expect(changed).toHaveBeenCalledTimes(1);
        callback!(3);
        expect(changed).toHaveBeenCalledTimes(1);
    });

    it('rolls back state and UI after expression, watcher or final content-policy failures', async () => {
        const ref = createRef<JsonUIReact>();
        const onError = vi.fn();
        const schema = documentOf({
            state: {url: '/safe', count: 1},
            computed: {inverse: {$op: 'div', args: [1, refValue('state.count')]}},
            ui: [
                {tag: 'input', props: {'aria-label': 'URL'}, model: {value: model('state.url', 'onInput', refValue('event.value'))}},
                {tag: 'a', bind: {'props.href': refValue('state.url')}, children: 'Link'},
                {tag: 'button', children: 'Invalid', events: {onClick: [{type: 'set', path: 'state.url', value: '/other'}, {type: 'set', path: 'state.count', value: 0}]}},
            ],
        });
        render(<JsonUIReact ref={ref} schema={schema} onError={onError} />);
        fireEvent.click(screen.getByText('Invalid'));
        await flush();
        expect(ref.current!.getState()).toEqual({url: '/safe', count: 1});
        fireEvent.input(screen.getByLabelText('URL'), {target: {value: 'javascript:alert(1)'}});
        await flush();
        expect(screen.getByLabelText('URL')).toHaveValue('/safe');
        expect(screen.getByText('Link')).toHaveAttribute('href', '/safe');
        expect(onError).toHaveBeenCalledTimes(2);
        expect(() => ref.current!.patchState({count: 0})).toThrow(JsonUIError);
        expect(ref.current!.getState().count).toBe(1);
    });

    it('preserves state and valid actions across updates, resets latest defaults, and isolates snapshots and instances', async () => {
        const host = document.createElement('div');
        document.body.append(host);
        const schema = documentOf({state: {n: 1}, ui: {tag: 'button', bind: {children: refValue('state.n')}, events: {onClick: {type: 'set', path: 'state.n', value: {$op: 'add', args: [refValue('state.n'), 1]}}}}});
        const onError = vi.fn();
        const view = new JsonUI(host, {schema, onError});
        await flush();
        view.patchState({n: 3});
        await flush();
        const element = screen.getByRole('button');
        view.render({schema: {...schema, state: {n: 5}}});
        expect(view.getState()).toEqual({n: 3});
        expect(screen.getByRole('button')).toBe(element);
        view.render({schema: {...schema, computed: {bad: {$ref: 'computed.bad'}}}});
        fireEvent.click(element);
        await flush();
        expect(view.getState()).toEqual({n: 4});
        expect(element).toHaveTextContent('4');
        view.getState().n = 900;
        expect(view.resetState()).toEqual({n: 5});
        const other = render(<JsonUIReact schema={schema} />);
        expect(other.container).toHaveTextContent('1');
        view.destroy();
        expect(host).toBeEmptyDOMElement();
        expect(() => view.patchState({n: 8})).toThrow('not mounted');
    });

    it('keeps opaque props and literals as data, and preserves legacy host callback contracts', async () => {
        const receive = vi.fn();
        let callback: ((...args: unknown[]) => unknown) | undefined;
        registerReactComponent('OpaqueDocumentProbe', (props: {data: unknown; onChange: (...args: unknown[]) => unknown}) => {
            receive(props.data);
            callback = props.onChange;
            return null;
        });
        const action = vi.fn(function (this: unknown, value: unknown) {
            return {owner: this, value};
        });
        const schema = documentOf({state: {data: {$ref: 'this is literal data'}}, ui: {component: 'OpaqueDocumentProbe', bind: {'props.data': refValue('state.data')}, events: {onChange: 'save'}}});
        render(<JsonUIReact schema={schema} actions={{save: action}} />);
        expect(receive).toHaveBeenCalledWith({$ref: 'this is literal data'});
        const owner = {};
        expect(callback!.call(owner, 7)).toEqual({owner, value: 7});
        expect(validateJsonUI(schema, {actions: {save: action}})).toEqual([]);
        expect(action).toHaveBeenCalledTimes(1);
    });

    it('does not run watches on initialization or full reset, but runs them for a path reset', async () => {
        const ref = createRef<JsonUIReact>();
        const changed = vi.fn((state) => {
            state.province = 'mutated snapshot';
        });
        const schema = documentOf({
            state: {province: 'gd', city: 'gz'},
            watch: [{paths: ['state.province'], do: {type: 'set', path: 'state.city', value: ''}}],
            ui: {tag: 'button', children: 'Reset province', events: {onClick: {type: 'reset', path: 'state.province'}}},
        });
        render(<JsonUIReact ref={ref} schema={schema} onStateChange={changed} />);
        expect(ref.current!.getState()).toEqual(schema.state);
        expect(changed).not.toHaveBeenCalled();
        act(() => {
            ref.current!.patchState({province: 'zj', city: 'hz'});
        });
        expect(ref.current!.getState()).toEqual({province: 'zj', city: ''});
        fireEvent.click(screen.getByText('Reset province'));
        expect(ref.current!.getState()).toEqual({province: 'gd', city: ''});
        act(() => {
            ref.current!.resetState();
        });
        await flush();
        expect(ref.current!.getState()).toEqual(schema.state);
        expect(changed).toHaveBeenCalledTimes(3);
    });

    it('rolls back earlier writes when a watcher fails and suppresses change notification', () => {
        const ref = createRef<JsonUIReact>();
        const changed = vi.fn();
        render(
            <JsonUIReact
                ref={ref}
                onStateChange={changed}
                schema={documentOf({
                    state: {a: 1, b: 2},
                    watch: [{paths: ['state.a'], do: [
                        {type: 'set', path: 'state.b', value: 100},
                        {type: 'set', path: 'state.missing.child', value: 0},
                    ]}],
                })}
            />,
        );
        expect(() => ref.current!.patchState({a: 3})).toThrow('parent');
        expect(ref.current!.getState()).toEqual({a: 1, b: 2});
        expect(changed).not.toHaveBeenCalled();
    });

    it('explicitly reinitializes via the vanilla render reset option and releases state in node mode', async () => {
        const host = document.createElement('div');
        document.body.append(host);
        const schema = documentOf({state: {n: 1}, ui: {tag: 'p', bind: {children: refValue('state.n')}}});
        const view = new JsonUI(host, {schema});
        await flush();
        view.patchState({n: 3});
        view.render({schema: {...schema, state: {n: 5, added: true}}}, true);
        await flush();
        expect(view.getState()).toEqual({n: 5, added: true});
        expect(host).toHaveTextContent('5');
        const action = vi.fn();
        const onError = vi.fn();
        view.render({schema: {...schema, ui: {tag: 'button', children: 'New action', events: {onClick: 'save'}}}, actions: {save: action}, onError}, true);
        await flush();
        fireEvent.click(screen.getByText('New action'));
        expect(action).toHaveBeenCalledTimes(1);
        expect(view.getState()).toEqual({n: 1});
        view.render({schema: {...schema, computed: {bad: {$ref: 'computed.bad'}}}, onError}, true);
        await flush();
        expect(onError).toHaveBeenCalledTimes(1);
        fireEvent.click(screen.getByText('New action'));
        expect(action).toHaveBeenCalledTimes(2);
        expect(view.getState()).toEqual({n: 1});
        view.render({schema: {tag: 'p', children: 'Plain'}});
        await flush();
        expect(host).toHaveTextContent('Plain');
        expect(() => view.getState()).toThrow('document');
        view.destroy();
    });

    it.each([
        documentOf({computed: {a: {$ref: 'computed.b'}, b: {$ref: 'computed.a'}}}),
        documentOf({actions: {a: {action: 'b'}, b: {action: 'a'}}}),
        documentOf({state: {n: 0}, watch: [{paths: ['state.n'], do: {type: 'set', path: 'state.n', value: 1}}]}),
        documentOf({ui: {tag: 'div', when: false, bind: {'props.title': {$op: 'eval', args: []}}}}),
        documentOf({ui: {tag: 'div', when: false, children: {component: 'UnknownHiddenComponent'}}}),
        documentOf({ui: {tag: 'input', bind: {'props.value': ''}, model: {value: model('state.name')}}}),
        documentOf({computed: {x: {$ref: 'state.constructor'}}}),
        documentOf({computed: {x: {$op: 'get', args: [{$literal: {}}, '__proto__']}}}),
        documentOf({watch: [{paths: ['state.n'], do: {type: 'set', path: 'state.a', value: {$ref: 'args.0'}}}]}),
        documentOf({computed: {x: {$op: 'add', args: ['1', 2]}}}),
        documentOf({ui: {tag: 'p', bind: {children: {$literal: {tag: 'script'}}}}}),
    ])('rejects invalid programs before activation %#', (schema) => {
        expect(validateJsonUI(schema)).toHaveLength(1);
    });

    it('does not execute getters or accept non-JSON event arguments into state', () => {
        const getter = vi.fn(() => 1);
        const state = Object.defineProperty({}, 'value', {enumerable: true, get: getter});
        expect(validateJsonUI(documentOf({state}))).toHaveLength(1);
        expect(getter).not.toHaveBeenCalled();
        expect(validateJsonUI(documentOf({computed: {x: {$ref: 'state.missing', default: null}}}))).toEqual([]);
        let callback: ((value: unknown) => unknown) | undefined;
        const ref = createRef<JsonUIReact>();
        const onError = vi.fn();
        registerReactComponent('UnsafeArgumentProbe', (props: {onChange: (value: unknown) => unknown}) => {
            callback = props.onChange;
            return null;
        });
        render(
            <JsonUIReact
                ref={ref}
                onError={onError}
                schema={documentOf({
                    state: {value: 0},
                    ui: {component: 'UnsafeArgumentProbe', events: {onChange: {type: 'set', path: 'state.value', value: refValue('args.0.value')}}},
                })}
            />,
        );
        callback!(state);
        callback!(document.body);
        expect(getter).not.toHaveBeenCalled();
        expect(onError).toHaveBeenCalledTimes(2);
        expect(ref.current!.getState()).toEqual({value: 0});
    });

    it('rejects explicit null in optional command fields instead of treating it as omission', () => {
        for (const action of [{type: 'reset', path: null}, {type: 'if', condition: true, then: [], else: null}]) {
            expect(validateJsonUI({version: 1, state: {}, actions: {run: action}, ui: null})).toHaveLength(1);
        }
    });

    it.each<[string, JsonUIValue[], JsonUIValue]>([
        ['eq', [1, '1'], false], ['ne', [1, 2], true], ['gt', [2, 1], true], ['gte', [1, 1], true],
        ['lt', [1, 2], true], ['lte', [2, 2], true], ['and', [true, false], false], ['or', [false, true], true],
        ['not', [false], true], ['add', [2, 3], 5], ['sub', [3, 2], 1], ['mul', [2, 3], 6], ['div', [6, 2], 3],
        ['length', [[1, 2]], 2], ['concat', ['a', 2, true], 'a2true'], ['coalesce', [null, 0, 1], 0],
        ['get', [{$literal: {}}, 'missing', []], []], ['if', [true, 1, {$op: 'div', args: [1, 0]}], 1],
    ])('evaluates %s with explicit types and short circuiting', (op, args, expected) => {
        const ref = createRef<JsonUIReact>();
        const schema = documentOf({state: {result: null}, ui: {tag: 'button', children: 'Run', events: {onClick: {type: 'set', path: 'state.result', value: {$op: op, args}}}}});
        render(<JsonUIReact ref={ref} schema={schema} />);
        fireEvent.click(screen.getByText('Run'));
        expect(ref.current!.getState().result).toEqual(expected);
    });
});
