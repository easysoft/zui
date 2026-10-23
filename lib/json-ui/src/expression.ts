import type {JsonUIValue} from './types';
import {checkFields, checkJSON, fail, forbiddenKeys, isRecord, parsePath, readPath, sameJSON} from './json';

export type Evaluation = {
    state: Record<string, JsonUIValue>;
    computed: (name: string) => JsonUIValue;
    args?: unknown[];
    event?: Record<string, JsonUIValue>;
    remaining: number;
};

export type Expression = (context: Evaluation) => JsonUIValue;

const arities: Record<string, [number, number]> = {
    eq: [2, 2], ne: [2, 2], gt: [2, 2], gte: [2, 2], lt: [2, 2], lte: [2, 2],
    and: [1, 100], or: [1, 100], not: [1, 1], add: [2, 2], sub: [2, 2], mul: [2, 2], div: [2, 2],
    get: [2, 3], length: [1, 1], concat: [1, 100], coalesce: [1, 100], if: [3, 3],
};

export function boolean(value: JsonUIValue, path: string): boolean {
    if (typeof value !== 'boolean') fail(path, 'Expected a boolean.');
    return value;
}

export function spend(context: Evaluation, path: string) {
    if (--context.remaining < 0) fail(path, 'The evaluation step limit was exceeded.');
}

export function compileExpression(value: unknown, path: string, roots: string[], dependencies: Set<string>): Expression {
    checkJSON(value, path);
    let evaluate: Expression;
    if (isRecord(value) && Object.hasOwn(value, '$ref')) {
        checkFields(value, ['$ref', 'default'], path);
        const parts = parsePath(value.$ref, `${path}.$ref`, roots);
        if (parts[0] === 'computed') {
            if (parts.length < 2) fail(path, 'Select a named computed value.');
            dependencies.add(parts[1]);
        }
        evaluate = (context) => {
            const root = parts[0] === 'computed' ? context.computed(parts[1]) : context[parts[0] as 'state' | 'args' | 'event'];
            const result = readPath(root, parts.slice(parts[0] === 'computed' ? 2 : 1), path);
            if (result === undefined) {
                if (Object.hasOwn(value, 'default')) return structuredClone(value.default as JsonUIValue);
                return fail(path, `Missing data path "${String(value.$ref)}".`);
            }
            checkJSON(result, path);
            return structuredClone(result);
        };
    } else if (isRecord(value) && Object.hasOwn(value, '$literal')) {
        checkFields(value, ['$literal'], path);
        evaluate = () => structuredClone(value.$literal as JsonUIValue);
    } else if (isRecord(value) && Object.hasOwn(value, '$op')) {
        checkFields(value, ['$op', 'args'], path);
        const op = value.$op;
        if (typeof op !== 'string' || !Object.hasOwn(arities, op)) fail(`${path}.$op`, 'Unknown operation.');
        const range = arities[op];
        if (!Array.isArray(value.args) || value.args.length < range[0] || value.args.length > range[1]) fail(`${path}.args`, 'Invalid operation arguments.');
        const args = value.args.map((arg, index) => compileExpression(arg, `${path}.args[${index}]`, roots, dependencies));
        evaluate = (context) => {
            const get = (index: number) => args[index](context);
            if (op === 'if') return get(boolean(get(0), path) ? 1 : 2);
            if (op === 'and') return args.every(arg => boolean(arg(context), path));
            if (op === 'or') return args.some(arg => boolean(arg(context), path));
            if (op === 'coalesce') {
                for (const arg of args) {
                    const result = arg(context);
                    if (result !== null) return result;
                }
                return null;
            }
            const first = get(0);
            if (op === 'not') return !boolean(first, path);
            if (op === 'length') {
                if (typeof first !== 'string' && !Array.isArray(first)) fail(path, 'length requires a string or array.');
                return first.length;
            }
            if (op === 'concat') {
                const values = [first, ...args.slice(1).map(arg => arg(context))];
                if (!values.every(item => typeof item === 'string' || typeof item === 'number' || typeof item === 'boolean')) fail(path, 'concat requires strings, numbers or booleans.');
                return values.join('');
            }
            const second = get(1);
            if (op === 'get') {
                if ((!isRecord(first) && !Array.isArray(first)) || (typeof second !== 'string' && typeof second !== 'number') || forbiddenKeys.has(String(second))) fail(path, 'get requires a JSON container and a safe key.');
                const result = readPath(first, [String(second)], path);
                if (result !== undefined) return result as JsonUIValue;
                return args[2] ? get(2) : null;
            }
            if (op === 'eq') return sameJSON(first, second);
            if (op === 'ne') return !sameJSON(first, second);
            if (typeof first !== 'number' || typeof second !== 'number') fail(path, 'This operation requires numbers.');
            switch (op) {
                case 'gt': return first > second;
                case 'gte': return first >= second;
                case 'lt': return first < second;
                case 'lte': return first <= second;
                case 'add': return first + second;
                case 'sub': return first - second;
                case 'mul': return first * second;
                default: return first / second;
            }
        };
    } else {
        if (isRecord(value) && Object.keys(value).some(key => key.startsWith('$'))) fail(path, 'Unknown expression marker; use $literal for literal data.');
        evaluate = () => structuredClone(value);
    }
    return (context) => {
        spend(context, path);
        const result = evaluate(context);
        checkJSON(result, path);
        return result;
    };
}
