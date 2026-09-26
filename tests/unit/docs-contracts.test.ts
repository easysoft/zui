import {mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import Path from 'node:path';
import ts from 'typescript';
import {afterAll, expect, test} from 'vitest';
import {resolveDocSourcePath} from '../../scripts/docs/source-path';

import type {LibInfo} from '../../scripts/libs/lib-info';

const root = Path.resolve(import.meta.dirname, '../..');
const fixture = mkdtempSync(Path.join(tmpdir(), 'zui-doc-source-'));
afterAll(() => rmSync(fixture, {recursive: true, force: true}));

function addSource(file: string) {
    const target = Path.join(fixture, file);
    mkdirSync(Path.dirname(target), {recursive: true});
    writeFileSync(target, '# Example');
}

test('maps guides, library pages and nested pages to their source, hiding external sources', () => {
    const libs = [
        {zui: {name: 'tree', path: Path.join(fixture, 'lib/tree'), sourceType: 'build-in'}},
        {zui: {name: 'core', path: Path.join(fixture, 'lib/core'), sourceType: 'build-in'}},
        {zui: {name: '@demo/tree', path: Path.join(fixture, 'exts/tree'), sourceType: 'exts'}},
    ] as LibInfo[];
    for (const [page, source] of [
        ['guide/start/index.md', 'docs/docs/guide/start/index.md'],
        ['lib/components/tree/index.md', 'lib/tree/docs/lib/components/index.md'],
        ['lib/components/tree/nested/more.md', 'lib/tree/docs/lib/components/nested/more.md'],
        ['guide/config/core/index.md', 'lib/core/docs/guide/config/index.md'],
    ]) {
        addSource(source);
        expect(resolveDocSourcePath(page, libs, fixture)).toBe(source);
    }
    addSource('exts/tree/docs/lib/components/index.md');
    expect(resolveDocSourcePath('lib/components/@demo/tree/index.md', libs, fixture)).toBeUndefined();
    expect(resolveDocSourcePath('missing.md', libs, fixture)).toBeUndefined();
    expect(resolveDocSourcePath('../../lib/tree/docs/lib/components/index.md', libs, fixture)).toBeUndefined();
});

function source(file: string) {
    const text = readFileSync(Path.join(root, file), 'utf8');
    return ts.createSourceFile(file, text, ts.ScriptTarget.Latest, true);
}

function props(lib: string) {
    const doc = readFileSync(Path.join(root, `lib/${lib}/docs/lib/components/index.md`), 'utf8');
    const block = doc.match(/<Props>([\s\S]*?)<\/Props>/)![1].replaceAll('&lt;', '<').replaceAll('&gt;', '>').replaceAll('&amp;', '&');
    return new Map([...block.matchAll(/^(\w+)\??:\s*(.+?);/gm)].map(([, name, declaration]) => {
        const [type, defaultValue] = declaration.split(' = ');
        return [name, {type, defaultValue}];
    }));
}

function defaultValue(file: string, name: string) {
    const ast = source(file);
    const component = ast.statements.find(ts.isClassDeclaration)!;
    const defaults = component.members.find(member => ts.isPropertyDeclaration(member) && member.name.getText(ast) === 'defaultProps') as ts.PropertyDeclaration;
    const property = (defaults.initializer as ts.ObjectLiteralExpression).properties.find(member => member.name?.getText(ast) === name) as ts.PropertyAssignment;
    return property.initializer.getText(ast);
}

test('SearchBox documents every public option and the exact callback signatures', () => {
    const ast = source('lib/search-box/src/types/search-box-options.ts');
    const options = ast.statements.find(ts.isTypeAliasDeclaration)!.type as ts.TypeLiteralNode;
    const documented = props('search-box');
    const normalize = (value: string) => value.replace(/\s+/g, '');
    for (const member of options.members) {
        const field = member as ts.PropertySignature;
        const name = field.name.getText(ast);
        expect(documented.get(name), name).toBeDefined();
        expect(normalize(documented.get(name)!.type), name).toBe(normalize(field.type!.getText(ast)));
    }
    for (const name of ['delay', 'hotkeys', 'clearIcon', 'searchIcon']) {
        expect(documented.get(name)!.defaultValue).toBe(defaultValue('lib/search-box/src/components/search-box.tsx', name));
    }
});

test('Tree indentation and FileList thumbnail API match the implementation', () => {
    expect(props('tree').get('indent')!.defaultValue).toBe(defaultValue('lib/tree/src/components/tree.tsx', 'indent'));
    const ast = source('lib/file-list/src/types/file-list-props.ts');
    const options = ast.statements.find(ts.isInterfaceDeclaration)!;
    const thumbnail = options.members.find(member => member.name?.getText(ast) === 'thumbnail') as ts.PropertySignature;
    const documented = props('file-list');
    expect(documented.get('thumbnail')!.type).toBe(thumbnail.type!.getText(ast));
    for (const name of ['thumbnail', 'fileIcon', 'fileSizeFormat']) {
        expect(JSON.parse(documented.get(name)!.defaultValue!)).toBe(JSON.parse(defaultValue('lib/file-list/src/component/file-list.tsx', name).replaceAll('\'', '"')));
    }
});
