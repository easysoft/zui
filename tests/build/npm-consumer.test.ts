import {execFile} from 'node:child_process';
import {promises as fs} from 'node:fs';
import {createRequire} from 'node:module';
import {tmpdir} from 'node:os';
import Path from 'node:path';
import {pathToFileURL} from 'node:url';
import {promisify} from 'node:util';
import {expect, test, vi} from 'vitest';
import * as npmPackage from '../../scripts/build/package';
import {withBrowserGlobals} from '../helpers/browser-globals';

const execFileAsync = promisify(execFile);
const projectRoot = Path.resolve(import.meta.dirname, '../..');
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

async function fileContents(path: string): Promise<string> {
    return fs.readFile(path, 'utf8');
}

async function expectFile(path: string): Promise<void> {
    const stat = await fs.stat(path);
    expect(stat.isFile(), path).toBe(true);
    expect(stat.size, path).toBeGreaterThan(0);
}

test('installs the npm tarball with working runtime entries, assets, and strict TypeScript declarations', async ({onTestFinished}) => {
    const report = process.env.ZUI_NPM_REPORT;
    if (report !== undefined) {
        if (!Path.isAbsolute(report)) throw new Error('ZUI_NPM_REPORT must be an absolute file path.');
        const exists = await fs.lstat(report).then(() => true, (error: NodeJS.ErrnoException) => {
            if (error.code !== 'ENOENT') throw error;
            return false;
        });
        if (exists) throw new Error('ZUI_NPM_REPORT must not overwrite an existing file.');
    }

    const rootPackage = JSON.parse(await fileContents(Path.join(projectRoot, 'package.json'))) as {version: string};
    const template = JSON.parse(await fileContents(Path.join(projectRoot, 'publish/package.json'))) as {name: string};
    const expectedName = process.env.ZUI_NPM_EXPECTED_NAME ?? template.name;
    const expectedVersion = process.env.ZUI_NPM_EXPECTED_VERSION ?? rootPackage.version;
    const specifiedTarball = process.env.ZUI_NPM_TARBALL;
    const pack = vi.spyOn(npmPackage, 'packNpmPackage');
    onTestFinished(() => pack.mockRestore());
    let tarball: string;
    if (specifiedTarball !== undefined) {
        // Any accidental fallback must fail even if rebuilding would produce a valid package.
        pack.mockImplementation(async () => {
            throw new Error('Specified tarballs must never trigger a build or pack.');
        });
        if (!Path.isAbsolute(specifiedTarball) || !specifiedTarball.endsWith('.tgz')) {
            throw new Error('ZUI_NPM_TARBALL must be an absolute .tgz file path.');
        }
        tarball = specifiedTarball;
    } else {
        ({tarball} = await npmPackage.packNpmPackage({rootDir: projectRoot, outDir: Path.join(projectRoot, 'test-results/npm-package')}));
    }
    const before = await npmPackage.inspectTarball(tarball);
    if (process.env.ZUI_NPM_EXPECTED_INTEGRITY !== undefined) {
        expect(before.integrity).toBe(process.env.ZUI_NPM_EXPECTED_INTEGRITY);
    }

    const consumerPath = await fs.realpath(await fs.mkdtemp(Path.join(tmpdir(), 'zui-npm-consumer-')));
    onTestFinished(() => fs.rm(consumerPath, {recursive: true, force: true}));
    const npmCache = Path.join(consumerPath, 'npm-cache');
    await fs.writeFile(Path.join(consumerPath, 'package.json'), JSON.stringify({private: true, type: 'module'}));
    await execFileAsync(npmCommand, [
        'install', '--ignore-scripts', '--no-audit', '--no-fund', '--package-lock=false',
        '--cache', npmCache, tarball,
    ], {cwd: consumerPath, maxBuffer: 20 * 1024 * 1024});
    const consumerPackage = JSON.parse(await fileContents(Path.join(consumerPath, 'package.json'))) as {dependencies?: Record<string, string>};
    expect(Object.keys(consumerPackage.dependencies ?? {})).toEqual([expectedName]);
    const installedPackage = Path.join(consumerPath, 'node_modules', expectedName);
    const {name, version} = JSON.parse(await fileContents(Path.join(installedPackage, 'package.json'))) as {name: string; version: string};
    expect(name).toBe(expectedName);
    expect(version).toBe(expectedVersion);
    const entryPath = Path.join(consumerPath, 'entry.mjs');
    await fs.writeFile(entryPath, `export * from ${JSON.stringify(name)};\n`);
    const packageRequire = createRequire(Path.join(consumerPath, 'package.json'));

    const typeConsumer = `
import 'zui/css';
// @ts-expect-error Standard packages do not expose component-specific elements.
import {definePicker} from 'zui';
import {
    $, Picker, Pager, Modal, ProgressCircle, defineWebComponent, property, signal, computed,
    type PickerOptions, type ReadonlySignal, type Cash,
    type FileListFileInfo, type FileSelectorFileInfo,
    type DashboardBlockProps, type DTableBlockProps, type DTableCustomRenderResult,
} from 'zui';

const options: PickerOptions = {
    items: [{value: 'apple', text: 'Apple'}],
    onChange(value, previous) {
        value.toUpperCase();
        previous.toUpperCase();
        // @ts-expect-error Picker change values are strings.
        const invalid: number = value;
    },
};
const picker = new Picker(document.createElement('div'), options);
picker.render({disabled: true});
picker.destroy();
new Pager(document.createElement('div'), {
    recTotal: 100,
    onChange({info, event}) {
        info.page.toFixed();
        event.preventDefault();
        // @ts-expect-error Page numbers are numeric.
        info.page.toUpperCase();
    },
});
new ProgressCircle(document.createElement('div'), {percent: 50});
Modal.confirm('Continue?').then(confirmed => { const result: boolean = confirmed; });
const cash: Cash = $('body').z({answer: 42});
const count = signal(1);
const doubled: ReadonlySignal<number> = computed(() => count.value * 2);
const CounterElement = defineWebComponent(({count}: {count: number}) => String(count), {
    tagName: 'app-counter',
    properties: {count: property.number('count', 0)},
});
const counter = new CounterElement();
counter.count = 2;
// @ts-expect-error Custom element properties retain their declared types.
counter.count = 'two';
// @ts-expect-error Standard packages do not declare component-specific tags.
document.createElement('zui-picker').value = 'apple';
const listFile: FileListFileInfo = {title: 'Notes', extension: 'txt', size: 1, pathname: '/notes', addedBy: 'me', addedDate: ''};
const selectedFile: FileSelectorFileInfo = {id: 'notes', name: 'Notes', size: 1, type: 'text/plain', ext: 'txt'};
const dashboardBlock: Partial<DashboardBlockProps> = {};
const tableBlock: Partial<DTableBlockProps> = {};
const renderCell: DTableCustomRenderResult = 'cell';

// @ts-expect-error Invalid option values must not silently become any.
new Picker(document.body, {items: [], multiple: 'many'});
// @ts-expect-error Instance methods must retain their parameter types.
picker.render({disabled: 'yes'});
// @ts-expect-error Nonexistent instance methods must be rejected.
picker.nonexistentMethod();
// @ts-expect-error Cash is a type-only export, not a runtime constructor.
new Cash();
`;
    await fs.writeFile(Path.join(consumerPath, 'consumer.mts'), typeConsumer);
    await fs.writeFile(Path.join(consumerPath, 'consumer.cts'), `${typeConsumer}
import zui = require('zui');
const pickerFromRequire: import('zui', {with: {'resolution-mode': 'import'}}).Picker = new zui.Picker(document.body, {items: []});
`);
    await fs.writeFile(Path.join(consumerPath, 'consumer.ts'), typeConsumer);
    for (const mode of ['Node16', 'NodeNext', 'Bundler']) {
        await fs.writeFile(Path.join(consumerPath, 'tsconfig.json'), JSON.stringify({
            compilerOptions: {
                strict: true,
                skipLibCheck: false,
                noEmit: true,
                noUncheckedSideEffectImports: true,
                types: [],
                target: 'ES2022',
                module: mode === 'Bundler' ? 'ESNext' : mode,
                moduleResolution: mode,
            },
            files: mode === 'Bundler' ? ['consumer.ts'] : ['consumer.mts', 'consumer.cts'],
        }));
        await execFileAsync(process.execPath, [Path.join(projectRoot, 'node_modules/typescript/bin/tsc'), '-p', 'tsconfig.json'], {
            cwd: consumerPath,
            maxBuffer: 20 * 1024 * 1024,
        }).catch((error) => {
            throw new Error(`TypeScript ${mode} consumer failed:\n${error.stdout}\n${error.stderr}`);
        });
    }

    for (const file of await fs.readdir(Path.join(installedPackage, 'dist'), {recursive: true})) {
        if (!file.endsWith('.d.ts') && !file.endsWith('.d.cts')) {
            continue;
        }
        const declaration = await fileContents(Path.join(installedPackage, 'dist', file));
        expect(declaration, file).not.toMatch(/(?:from\s*|import\s*\(?)["']@zui\//);
        expect(declaration, file).not.toContain(projectRoot);
        expect(declaration, file).not.toContain('.pnpm/');
        expect(declaration, file).not.toMatch(/build[/\\]run-/);
    }

    await expectFile(Path.join(installedPackage, 'dist/types/build/npm-types.d.ts'));

    await withBrowserGlobals(async (dom) => {
        const distribution = await import(pathToFileURL(entryPath).href) as Record<string, unknown>;
        const commonJs = packageRequire(name) as Record<string, unknown>;
        for (const name of ['DTable', 'Messager', 'Kanban']) {
            expect(distribution[name], name).toBeTypeOf('function');
            expect(commonJs[name], name).toBeTypeOf('function');
        }
        expect(Object.keys(commonJs).sort()).toEqual(Object.keys(distribution).sort());
        expect(packageRequire(installedPackage)).toBe(commonJs);

        dom.window.eval(await fileContents(Path.join(installedPackage, 'dist/zui.js')));
        const umd = (dom.window as unknown as {zui: Record<string, unknown>}).zui;
        expect(Object.keys(umd).sort()).toEqual(Object.keys(distribution).sort());
        await expectFile(packageRequire.resolve(`${name}/css`));
        await expectFile(Path.join(installedPackage, 'dist/zui.js.map'));
    });

    const cssPath = packageRequire.resolve(`${name}/css`);
    const css = await fileContents(cssPath);
    const fontFiles = (await fs.readdir(Path.join(installedPackage, 'dist'), {recursive: true})).filter(file => /\.(?:eot|ttf|woff2?)$/.test(file));
    expect(fontFiles.length).toBeGreaterThan(0);
    for (const file of fontFiles) {
        await expectFile(Path.join(installedPackage, 'dist', file));
    }
    let localReferences = 0;
    for (const match of css.matchAll(/url\(\s*(?:"([^"]*)"|'([^']*)'|([^\s)]*))\s*\)/g)) {
        const reference = match[1] ?? match[2] ?? match[3];
        if (!reference || /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i.test(reference)) continue;
        const asset = Path.resolve(Path.dirname(cssPath), decodeURIComponent(reference.split(/[?#]/, 1)[0]));
        expect(Path.relative(installedPackage, asset), reference).not.toMatch(/^\.\.(?:[/\\]|$)/);
        await expectFile(asset);
        localReferences++;
    }
    expect(localReferences).toBeGreaterThan(0);

    for (const file of ['zui.esm.js', 'zui.js']) {
        const runtimePath = Path.join(installedPackage, 'dist', file);
        const mapPath = `${runtimePath}.map`;
        await expectFile(mapPath);
        expect(await fileContents(runtimePath)).toContain(`sourceMappingURL=${file}.map`);
        const map = JSON.parse(await fileContents(mapPath)) as {version?: number; sources?: string[]; sourcesContent?: string[]};
        expect(map.version).toBe(3);
        expect(map.sources?.length).toBeGreaterThan(0);
        expect(map.sourcesContent?.length).toBe(map.sources?.length);
        expect(map.sourcesContent?.every(source => typeof source === 'string')).toBe(true);
        expect(JSON.stringify(map)).not.toMatch(/build[/\\]run-[A-Za-z0-9_-]+/);
    }

    const after = await npmPackage.inspectTarball(tarball);
    expect(after).toEqual(before);
    expect(pack).toHaveBeenCalledTimes(specifiedTarball === undefined ? 1 : 0);
    if (report !== undefined) {
        await fs.writeFile(report, `${JSON.stringify({tarball, name, version, ...after}, null, 4)}\n`, {flag: 'wx'});
    }
});
