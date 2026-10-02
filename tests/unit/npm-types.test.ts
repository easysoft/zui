import Path from 'node:path';
import os from 'node:os';
import fs from 'fs-extra';
import ts from 'typescript';
import {afterEach, beforeEach, expect, it, vi} from 'vitest';
import {emitNpmTypes} from '../../scripts/build/npm-types';

let root: string;
let externalRoot: string | undefined;

beforeEach(async () => {
    root = await fs.mkdtemp(Path.join(os.tmpdir(), 'zui-npm-types-'));
    externalRoot = undefined;
    await fs.outputJSON(Path.join(root, 'tsconfig.typecheck.json'), {compilerOptions: {
        target: 'ES2022', module: 'ESNext', moduleResolution: 'Bundler', strict: true, types: [],
        paths: {'@zui/*': ['./lib/*/src/main.ts']},
    }});
    const core = 'export type ClassNameLike = string;\nexport type CustomRenderResult = string;\nexport type CustomRenderResultGenerator = () => string;\nexport type CustomRenderResultItem = string;\nexport type CustomRenderResultList = string[];\n';
    await fs.outputFile(Path.join(root, 'lib/core/src/main.ts'), core);
    await fs.outputFile(Path.join(root, 'lib/core/src/types/tinykeys.d.ts'), 'declare namespace TinyKeys {type Key = string;}\n');
    await fs.outputFile(Path.join(root, 'lib/file-list/src/main.ts'), 'export interface FileInfo {name: string}\n');
    await fs.outputFile(Path.join(root, 'lib/file-selector/src/main.ts'), 'export interface FileInfo {id: number}\n');
    await fs.outputFile(Path.join(root, 'lib/dashboard/src/main.ts'), 'export interface BlockProps {title: string}\n');
    await fs.outputFile(Path.join(root, 'lib/dtable/src/main.ts'), `${core}\nexport interface BlockProps {width: number}\n`);
    vi.spyOn(console, 'log').mockImplementation(() => undefined);
});

afterEach(async () => {
    vi.restoreAllMocks();
    await fs.remove(root);
    if (externalRoot) {
        await fs.remove(externalRoot);
    }
});

it('emits independent stable declaration graphs from concurrent runtime entries', async () => {
    const names = ['alpha', 'beta'];
    await Promise.all(names.map(async (name) => {
        await fs.outputFile(Path.join(root, `lib/${name}/src/main.ts`), `import './style.css';\nexport interface ${name} {value: import('@zui/core').ClassNameLike}\n`);
        await fs.outputFile(Path.join(root, `build/run-${name}/main.ts`), `export * from '../../lib/${name}/src/main';\n`);
    }));
    await Promise.all(names.map(name => emitNpmTypes({rootDir: root, runtimeEntry: `build/run-${name}/main.ts`, outDir: `dist/${name}`})));
    await fs.remove(Path.join(root, 'build'));

    for (const name of names) {
        const outDir = Path.join(root, 'dist', name);
        const aggregate = await fs.readFile(Path.join(outDir, 'types/build/npm-types.d.ts'), 'utf8');
        expect(aggregate).toContain(`../lib/${name}/src/main.js`);
        expect(aggregate).not.toMatch(/build[/\\]run-|@zui\//);
        expect(await fs.readdir(Path.join(outDir, 'types/build'))).toEqual(['npm-types.d.ts']);
        const library = await fs.readFile(Path.join(outDir, `types/lib/${name}/src/main.d.ts`), 'utf8');
        expect(library).toContain('../../core/src/main.js');
        expect(library).not.toContain('.css');
        expect(await fs.readFile(Path.join(outDir, 'zui.d.ts'), 'utf8')).toBe(await fs.readFile(Path.join(outDir, 'zui.d.cts'), 'utf8'));
        expect(await fs.readJSON(Path.join(outDir, 'types/package.json'))).toEqual({type: 'commonjs'});
        expect(await fs.readFile(Path.join(outDir, 'types/css.d.ts'), 'utf8')).toBe('export {};\n');
        const consumer = Path.join(outDir, 'consumer.ts');
        await fs.writeFile(consumer, `import type {${name}, FileListFileInfo, FileSelectorFileInfo, DashboardBlockProps, DTableBlockProps} from './zui.js';\nexport type Result = [${name}, FileListFileInfo, FileSelectorFileInfo, DashboardBlockProps, DTableBlockProps, TinyKeys.Key];\n`);
        const program = ts.createProgram([consumer], {module: ts.ModuleKind.NodeNext, moduleResolution: ts.ModuleResolutionKind.NodeNext, noEmit: true, strict: true, types: []});
        expect(ts.getPreEmitDiagnostics(program)).toEqual([]);
    }
}, 20_000);

it('emits consumable stable declarations when build points to an external directory', async () => {
    externalRoot = await fs.mkdtemp(Path.join(os.tmpdir(), 'zui-npm-types-external-'));
    await fs.symlink(externalRoot, Path.join(root, 'build'));
    await fs.outputFile(Path.join(externalRoot, 'run-external/main.ts'), 'export * from \'@zui/core\';\n');
    await emitNpmTypes({rootDir: root, runtimeEntry: Path.join(root, 'build/run-external/main.ts'), outDir: 'dist/zui'});
    const outDir = Path.join(root, 'dist/zui');
    const aggregate = await fs.readFile(Path.join(outDir, 'types/build/npm-types.d.ts'), 'utf8');
    expect(aggregate).toContain('../lib/core/src/main.js');
    expect(aggregate).not.toMatch(/run-external|@zui\//);
    expect(aggregate).not.toContain(externalRoot);
    expect(await fs.readdir(Path.join(outDir, 'types/build'))).toEqual(['npm-types.d.ts']);
    await fs.remove(Path.join(externalRoot, 'run-external'));
    const consumer = Path.join(outDir, 'consumer.ts');
    await fs.writeFile(consumer, 'import type {ClassNameLike, FileListFileInfo, FileSelectorFileInfo} from \'./zui.js\';\nexport type Result = [ClassNameLike, FileListFileInfo, FileSelectorFileInfo, TinyKeys.Key];\n');
    const program = ts.createProgram([consumer], {module: ts.ModuleKind.NodeNext, moduleResolution: ts.ModuleResolutionKind.NodeNext, noEmit: true, strict: true, types: []});
    expect(ts.getPreEmitDiagnostics(program)).toEqual([]);
}, 10_000);

it('rejects declaration errors without clearing existing output', async () => {
    await fs.outputFile(Path.join(root, 'build/run-failure/main.ts'), 'export const invalid: string = 1;\n');
    await fs.outputFile(Path.join(root, 'dist/zui/types/previous.d.ts'), 'previous');
    await expect(emitNpmTypes({rootDir: root, runtimeEntry: 'build/run-failure/main.ts', outDir: 'dist/zui'})).rejects.toThrow(/not assignable/);
    expect(await fs.readFile(Path.join(root, 'dist/zui/types/previous.d.ts'), 'utf8')).toBe('previous');
}, 10_000);
