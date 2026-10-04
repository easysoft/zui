import {createRequire} from 'node:module';
import {runInNewContext} from 'node:vm';
import {expect, test} from 'vitest';

const require = createRequire(import.meta.url);
const globRequire = createRequire(require.resolve('fast-glob'));
const braces = createRequire(globRequire.resolve('micromatch'))('braces');

type AstNode = {type: string; nodes?: AstNode[]; parent?: AstNode; value?: string};

function nestedAst(depth: number): AstNode {
    let node: AstNode = {type: 'text', value: 'a'};
    for (let i = 0; i < depth; i++) {
        const parent: AstNode = {type: 'paren', nodes: [node]};
        node.parent = parent;
        node = parent;
    }
    const root: AstNode = {type: 'root', nodes: [node]};
    node.parent = root;
    return root;
}

// GHSA-vfj7-8cjw-p6xm is ignored only while the installed dependency has this backport.
test.each(['parse', 'compile', 'expand', 'stringify'])('%s rejects excessive pattern depth before walking the AST', (method) => {
    for (const [open, close] of [['{', '}'], ['(', ')']]) {
        expect(() => braces[method](open.repeat(100) + 'a' + close.repeat(100))).not.toThrow();
        for (const depth of [101, 4000]) {
            expect(() => braces[method](open.repeat(depth) + 'a' + close.repeat(depth))).toThrow(/exceeds max depth/);
        }
    }
    expect(() => braces[method]('{('.repeat(51) + 'a' + ')}'.repeat(51))).toThrow(/exceeds max depth/);
    expect(() => braces[method]('{'.repeat(101))).toThrow(/exceeds max depth/);
});

test.each(['compile', 'expand', 'stringify'])('%s bounds caller-supplied AST depth', (method) => {
    expect(() => braces[method](nestedAst(100))).not.toThrow();
    expect(() => braces[method](nestedAst(101))).toThrow(/exceeds max depth/);
    expect(() => braces[method](nestedAst(101), {maxDepth: 1000})).toThrow(/exceeds max depth/);
    expect(() => braces[method](nestedAst(2), {maxDepth: 1.5})).toThrow(/exceeds max depth/);
});

test('honors stricter depth limits without allowing the safety cap to be raised', () => {
    expect(() => braces.parse('{a,b}', {maxDepth: 1.5})).not.toThrow();
    expect(() => braces.parse('{{a,b},c}', {maxDepth: 1.5})).toThrow(/exceeds max depth/);
    for (const maxDepth of [1000, Infinity, NaN]) {
        expect(() => braces.parse('{'.repeat(101) + 'a' + '}'.repeat(101), {maxDepth})).toThrow(/exceeds max depth/);
    }
});

test('rejects cyclic AST parent links without hanging expansion', () => {
    const ast: AstNode = {type: 'paren', nodes: [{type: 'text', value: 'a'}]};
    ast.parent = ast;
    expect(() => runInNewContext('expand(ast)', {expand: braces.expand, ast}, {timeout: 1000})).toThrow(/parent chain contains a cycle/);
    ast.parent = {type: 'paren', parent: ast};
    expect(() => runInNewContext('expand(ast)', {expand: braces.expand, ast}, {timeout: 1000})).toThrow(/parent chain contains a cycle/);
});

test('preserves glob expansion and literal or malformed braces', () => {
    expect(braces.expand('lib/{core,button}/src/**/*.{ts,tsx}')).toEqual([
        'lib/core/src/**/*.ts', 'lib/core/src/**/*.tsx',
        'lib/button/src/**/*.ts', 'lib/button/src/**/*.tsx',
    ]);
    expect(braces.expand('foo/({a,b})')).toEqual(['foo/(a)', 'foo/(b)']);
    expect(braces.expand('src/\\{literal\\}/*.{ts,tsx}')).toEqual(['src/{literal}/*.ts', 'src/{literal}/*.tsx']);
    expect(braces.expand('"{a,b}"')).toEqual(['{a,b}']);
    expect(braces.expand('[{a,b}]')).toEqual(['[{a,b}]']);
    for (const pattern of ['{{a}}', '{a,{b}}', '{{x}y}', '{a,{b,{c}}}', '{}{a}', 'a{b,c']) {
        expect(braces.stringify(pattern, {escapeInvalid: true})).toBe(pattern);
    }
});
