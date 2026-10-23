import {computed, signal} from '@zui/core';
import type {JsonUIDocument, JsonUIValue} from './types';
import {boolean, compileExpression, spend} from './expression';
import type {Evaluation, Expression} from './expression';
import {checkFields, checkJSON, fail, isRecord, overlaps, parsePath, readPath, sameJSON, writePath} from './json';

type State = Record<string, JsonUIValue>;
type Context = Evaluation & {invalidate: () => void};
type Transaction = {context: Context; baseline: State};
type Completion = {value: JsonUIValue};
type Commands = (transaction: Transaction) => Completion | undefined;
type Node = (context: Context) => JsonUIValue;
type Model = {parts: string[]; value: Expression; path: string};
type EventPlan = {models: Model[]; commands?: Commands};
type Watch = {paths: string[][]; names: string[]; writes: Set<string>; commands: Commands};

const dataRoots = ['state', 'computed'];
const eventRoots = [...dataRoots, 'args', 'event'];
const eventPattern = /^on[A-Z][a-zA-Z0-9]*$/;
const callbackProps = new Set(['ref', 'forwardRef', 'transformContent', 'generatorThis', 'generatorArgs', 'fetcherThis', 'fetcherArgs']);

/** Per-view, synchronous document program. All writes are checked on a private draft. */
export class JsonUIDocumentRuntime {
    private _state;
    private _revision = signal(0);
    private _values;
    private _computed = new Map<string, Expression>();
    private _references = new Set<string>();
    private _events = new Map<string, Map<string, EventPlan>>();
    private _watch: Watch[] = [];
    private _node: Node;
    private _destroyed = false;
    private _busy = false;
    private _compileRemaining = 10000;

    validate?: (context: Context) => void;
    changed?: (state: State, previous: State) => void;
    report?: (error: unknown) => void;

    constructor(readonly document: JsonUIDocument, previous: State | undefined, validateNode: (node: unknown, path: string) => void) {
        checkJSON(document, '$');
        checkFields(document, ['version', 'state', 'computed', 'actions', 'watch', 'ui'], '$');
        if (document.version !== 1 || !isRecord(document.state) || !Object.hasOwn(document, 'ui')) fail('$', 'Expected a version 1 document with state and ui.');
        for (const field of ['computed', 'actions'] as const) {
            if (document[field] !== undefined && !isRecord(document[field])) fail(`$.${field}`, 'Expected an object.');
        }
        this._state = signal(structuredClone(previous ?? document.state));
        this._values = computed(() => this._context(this._state.value));

        const graph = new Map<string, Set<string>>();
        for (const [name, expression] of Object.entries(document.computed ?? {})) {
            if (parsePath(name, `$.computed.${name}`).length !== 1) fail(`$.computed.${name}`, 'Computed names cannot contain dots.');
            const dependencies = new Set<string>();
            this._computed.set(name, compileExpression(expression, `$.computed.${name}`, dataRoots, dependencies));
            graph.set(name, dependencies);
        }
        this._checkCycles(graph, '$.computed');
        for (const [name, commands] of Object.entries(document.actions ?? {})) {
            this._commands(commands, `$.actions.${name}`, eventRoots, [name]);
        }
        if (document.watch !== undefined && !Array.isArray(document.watch)) fail('$.watch', 'Expected an array.');
        this._watch = (document.watch ?? []).map((watch, index) => {
            const path = `$.watch[${index}]`;
            if (!isRecord(watch)) fail(path, 'Expected a watch rule.');
            checkFields(watch, ['paths', 'do'], path);
            if (!Array.isArray(watch.paths) || !watch.paths.length) fail(`${path}.paths`, 'Expected at least one state path.');
            const paths = watch.paths.map((name, i) => parsePath(name, `${path}.paths[${i}]`, ['state']));
            const writes = new Set<string>();
            return {paths, names: watch.paths, writes, commands: this._commands(watch.do, `${path}.do`, dataRoots, [], writes)};
        });
        const watchGraph = new Map(this._watch.map((watch, index) => [String(index), new Set(this._watch.flatMap((other, i) => other.names.some(name => [...watch.writes].some(write => overlaps(write, name))) ? [String(i)] : []))]));
        this._checkCycles(watchGraph, '$.watch');
        this._node = this._compileNode(document.ui, '$.ui', validateNode);
        for (const name of this._references) {
            if (!this._computed.has(name)) fail('$.computed', `Unknown computed value "${name}".`);
        }
    }

    private _checkCycles(graph: Map<string, Set<string>>, path: string) {
        const visited = new Set<string>();
        const active = new Set<string>();
        const visit = (name: string) => {
            if (!graph.has(name)) fail(path, `Unknown dependency "${name}".`);
            if (active.has(name)) fail(`${path}.${name}`, 'Circular dependency.');
            if (visited.has(name)) return;
            active.add(name);
            graph.get(name)!.forEach(visit);
            active.delete(name);
            visited.add(name);
        };
        graph.forEach((_deps, name) => visit(name));
    }

    private _expression(value: unknown, path: string, roots = dataRoots) {
        return compileExpression(value, path, roots, this._references);
    }

    private _context(state: State, args?: unknown[]): Context {
        const cache = new Map<string, JsonUIValue>();
        const event: State = {};
        const source = args?.find(arg => typeof Event !== 'undefined' && arg instanceof Event) as Event | undefined;
        if (source) {
            event.type = source.type;
            if (source instanceof KeyboardEvent) event.key = source.key;
            const target = source.target;
            if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) {
                event.value = target.value;
            }
            if (target instanceof HTMLInputElement) event.checked = target.checked;
        }
        const context: Context = {
            state, args, event, remaining: 10000,
            invalidate: () => cache.clear(),
            computed: (name) => {
                if (!cache.has(name)) {
                    const expression = this._computed.get(name) ?? fail(`$.computed.${name}`, 'Unknown computed value.');
                    cache.set(name, expression(context));
                }
                return cache.get(name)!;
            },
        };
        return context;
    }

    project(context?: Context) {
        void this._revision.value;
        context ??= this._values.value;
        context.remaining = 10000;
        // Check every computed definition, including currently unused values.
        this._computed.forEach((_expression, name) => context.computed(name));
        return this._node(context);
    }

    /** Retains the signal subscription even when a candidate document fails validation. */
    track() {
        return this._state.value;
    }

    getState(): State {
        this._assertActive();
        return structuredClone(this._state.peek());
    }

    patchState(patch: State): State {
        checkJSON(patch, '$patch');
        if (!isRecord(patch)) fail('$patch', 'Expected a top-level state patch.');
        this._transaction((transaction) => {
            transaction.context.state = {...transaction.context.state, ...structuredClone(patch)};
            transaction.context.invalidate();
        });
        return this.getState();
    }

    resetState(): State {
        this._transaction(transaction => this._reset(transaction));
        return this.getState();
    }

    destroy() {
        this._destroyed = true;
    }

    private _assertActive() {
        if (this._destroyed) fail('$', 'The document has been destroyed.');
    }

    private _reset(transaction: Transaction) {
        transaction.context.state = structuredClone(this.document.state);
        // Reset establishes an initialization baseline; it does not fire watches by itself.
        transaction.baseline = structuredClone(this.document.state);
        transaction.context.invalidate();
    }

    private _write(transaction: Transaction, parts: string[], value: JsonUIValue, path: string) {
        if (parts.length === 1) {
            if (!isRecord(value)) fail(path, 'The state root must be an object.');
            transaction.context.state = structuredClone(value as State);
        } else {
            writePath(transaction.context.state, parts.slice(1), value, path);
        }
        transaction.context.invalidate();
    }

    private _commands(value: unknown, path: string, roots: string[], stack: string[] = [], writes = new Set<string>()): Commands {
        if (--this._compileRemaining < 0) fail(path, 'The action expansion limit was exceeded.');
        if (Array.isArray(value)) {
            const commands = value.map((command, index) => this._commands(command, `${path}[${index}]`, roots, stack, writes));
            return (transaction) => {
                for (const command of commands) {
                    const completion = command(transaction);
                    if (completion) return completion;
                }
            };
        }
        if (!isRecord(value)) fail(path, 'Expected a JSON action or action array.');
        if (Object.hasOwn(value, 'action')) {
            checkFields(value, ['action'], path);
            const name = value.action;
            if (typeof name !== 'string' || !Object.hasOwn(this.document.actions ?? {}, name)) fail(path, 'Unknown document action.');
            if (stack.includes(name)) fail(path, 'Circular action reference.');
            return this._commands(this.document.actions![name], `$.actions.${name}`, roots, [...stack, name], writes);
        }
        let command: Commands;
        if (value.type === 'set') {
            checkFields(value, ['type', 'path', 'value'], path);
            const parts = parsePath(value.path, `${path}.path`, ['state']);
            writes.add(parts.join('.'));
            const expression = this._expression(value.value, `${path}.value`, roots);
            command = (transaction) => {
                this._write(transaction, parts, expression(transaction.context), path);
                return undefined;
            };
        } else if (value.type === 'reset') {
            checkFields(value, ['type', 'path'], path);
            const parts = parsePath(value.path === undefined ? 'state' : value.path, `${path}.path`, ['state']);
            writes.add(parts.join('.'));
            command = (transaction) => {
                if (parts.length === 1) this._reset(transaction);
                else {
                    const initial = readPath(this.document.state, parts.slice(1), path);
                    checkJSON(initial, path);
                    this._write(transaction, parts, initial, path);
                }
                return undefined;
            };
        } else if (value.type === 'if') {
            checkFields(value, ['type', 'condition', 'then', 'else'], path);
            const condition = this._expression(value.condition, `${path}.condition`, roots);
            const yes = this._commands(value.then, `${path}.then`, roots, stack, writes);
            const no = this._commands(value.else === undefined ? [] : value.else, `${path}.else`, roots, stack, writes);
            command = transaction => (boolean(condition(transaction.context), path) ? yes : no)(transaction);
        } else if (value.type === 'return') {
            checkFields(value, ['type', 'value'], path);
            const expression = this._expression(value.value, `${path}.value`, roots);
            command = transaction => ({value: expression(transaction.context)});
        } else {
            fail(`${path}.type`, 'Unknown action type.');
        }
        return (transaction) => {
            spend(transaction.context, path);
            return command(transaction);
        };
    }

    private _compileNode(value: unknown, path: string, validateNode: (node: unknown, path: string) => void): Node {
        if (Array.isArray(value)) {
            const children = value.map((node, index) => this._compileNode(node, `${path}[${index}]`, validateNode));
            return context => children.map(node => node(context));
        }
        if (!isRecord(value)) {
            validateNode(value, path);
            return () => value as JsonUIValue;
        }
        const node = {...value};
        const element = !['html', 'markdown', 'fetcher'].some(key => Object.hasOwn(node, key));
        const when = element && Object.hasOwn(node, 'when') ? this._expression(node.when, `${path}.when`) : undefined;
        const bindings: {parts: string[]; expression: Expression; path: string}[] = [];
        const events = new Map<string, EventPlan>();
        if (element) {
            delete node.when;
            delete node.bind;
            delete node.model;
            if (value.bind !== undefined && !isRecord(value.bind)) fail(`${path}.bind`, 'Expected a binding map.');
            for (const [target, expression] of Object.entries(value.bind ?? {})) {
                const location = `${path}.bind.${target}`;
                const parts = parsePath(target, location, ['props', 'children']);
                if ((parts[0] === 'children' && parts.length !== 1) || (parts[0] === 'props' && (parts.length < 2 || callbackProps.has(parts[1]) || /^on/i.test(parts[1])))) fail(location, 'Bind a property or textual children, not callbacks.');
                if (bindings.some(binding => overlaps(binding.parts.join('.'), target))) fail(location, 'Overlapping bindings.');
                bindings.push({parts, expression: this._expression(expression, location), path: location});
            }
            if (node.events !== undefined && !isRecord(node.events)) fail(`${path}.events`, 'Expected an event map.');
            const hostEvents: Record<string, string> = {};
            for (const [event, action] of Object.entries(node.events ?? {})) {
                if (!eventPattern.test(event)) fail(`${path}.events.${event}`, 'Expected a callback property such as onClick.');
                if (typeof action === 'string') hostEvents[event] = action;
                else events.set(event, {models: [], commands: this._commands(action, `${path}.events.${event}`, eventRoots)});
            }
            if (node.events !== undefined) node.events = hostEvents;
            if (value.model !== undefined && !isRecord(value.model)) fail(`${path}.model`, 'Expected a model map.');
            for (const [prop, model] of Object.entries(value.model ?? {})) {
                const location = `${path}.model.${prop}`;
                if (parsePath(prop, location).length !== 1 || callbackProps.has(prop) || /^on/i.test(prop) || prop === 'children') fail(location, 'Expected a controlled property name.');
                if (bindings.some(binding => overlaps(binding.parts.join('.'), `props.${prop}`))) fail(location, 'A property cannot have both bind and model.');
                if (!isRecord(model)) fail(location, 'Expected a model description.');
                checkFields(model, ['path', 'event', 'value'], location);
                const parts = parsePath(model.path, `${location}.path`, ['state']);
                if (parts.length < 2 || typeof model.event !== 'string' || !eventPattern.test(model.event)) fail(location, 'Expected a state property and change event.');
                bindings.push({parts: ['props', prop], expression: this._expression({$ref: model.path}, location), path: location});
                const event = events.get(model.event) ?? {models: []};
                event.models.push({parts, value: this._expression(model.value, `${location}.value`, eventRoots), path: location});
                events.set(model.event, event);
            }
            this._events.set(path, events);
        }
        const children = Object.hasOwn(node, 'children') ? this._compileNode(node.children, `${path}.children`, validateNode) : undefined;
        const loading = Object.hasOwn(node, 'loadingContent') ? this._compileNode(node.loadingContent, `${path}.loadingContent`, validateNode) : undefined;
        validateNode({...node, ...(children ? {children: null} : {}), ...(loading ? {loadingContent: null} : {})}, path);
        return (context) => {
            spend(context, path);
            if (when && !boolean(when(context), `${path}.when`)) return null;
            const result = structuredClone(node) as State;
            if (children) result.children = children(context);
            if (loading) result.loadingContent = loading(context);
            for (const binding of bindings) {
                const data = binding.expression(context);
                if (binding.parts[0] === 'children') {
                    if (data !== null && typeof data !== 'string' && typeof data !== 'number') fail(binding.path, 'Bound children must be text, a number or null.');
                    result.children = data;
                } else {
                    writePath(result, binding.parts, data, binding.path, true);
                }
            }
            return result;
        };
    }

    bindEvents(path: string, props: Record<string, unknown>) {
        for (const [event, plan] of this._events.get(path) ?? []) {
            const host = props[event] as ((...args: unknown[]) => unknown) | undefined;
            const execute = (receiver: unknown, args: unknown[]) => {
                try {
                    this._assertActive();
                    const context = this._context(structuredClone(this._state.peek()), args);
                    const values = plan.models.map(model => model.value(context));
                    if (plan.models.length && plan.models.every((model, index) => sameJSON(readPath(context.state, model.parts.slice(1), model.path), values[index]))) return;
                    const result = this._transaction((transaction) => {
                        plan.models.forEach((model, index) => this._write(transaction, model.parts, values[index], model.path));
                        return plan.commands?.(transaction);
                    }, args);
                    return host ? host.apply(receiver, args) : result?.value;
                } catch (error) {
                    this._revision.value++;
                    this.report?.(error);
                }
            };
            props[event] = function (this: unknown, ...args: unknown[]) {
                return execute(this, args);
            };
        }
    }

    private _transaction(run: (transaction: Transaction) => Completion | undefined | void, args?: unknown[]) {
        this._assertActive();
        if (this._busy) fail('$', 'A state transaction cannot be reentered.');
        const previous = this._state.peek();
        const transaction: Transaction = {context: this._context(structuredClone(previous), args), baseline: previous};
        let completion: Completion | undefined | void;
        this._busy = true;
        try {
            completion = run(transaction);
            const values = (watch: Watch, state: State) => watch.paths.map(parts => structuredClone(readPath(state, parts.slice(1), '$.watch')));
            const snapshots = this._watch.map(watch => values(watch, transaction.baseline));
            let settled = false;
            for (let round = 0; round < 32 && !settled; round++) {
                settled = true;
                this._watch.forEach((watch, index) => {
                    const current = values(watch, transaction.context.state);
                    if (!sameJSON(current, snapshots[index])) {
                        snapshots[index] = current;
                        watch.commands(transaction);
                        settled = false;
                    }
                });
            }
            if (!settled) fail('$.watch', 'Watch rules did not settle within 32 rounds.');
            checkJSON(transaction.context.state, '$.state');
            this.validate?.(transaction.context);
            if (!sameJSON(previous, transaction.context.state)) this._state.value = transaction.context.state;
        } finally {
            this._busy = false;
        }
        if (!sameJSON(previous, this._state.peek())) this.changed?.(this.getState(), structuredClone(previous));
        return completion;
    }
}
