import {execFile} from 'node:child_process';
import {promises as fs} from 'node:fs';
import {createRequire} from 'node:module';
import Path from 'node:path';
import {pathToFileURL} from 'node:url';
import {promisify} from 'node:util';
import {JSDOM} from 'jsdom';
import {afterAll, beforeAll, describe, expect, test, vi} from 'vitest';

const execFileAsync = promisify(execFile);
const projectRoot = Path.resolve(import.meta.dirname, '../..');
const outputRoot = Path.join(projectRoot, 'test-results/build');
const bundledOutput = Path.join(outputRoot, 'zui-test');
const externalOutput = Path.join(outputRoot, 'zui-test-external');
const pnpmCommand = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';

async function runBuild(args: string[]): Promise<void> {
    await execFileAsync(pnpmCommand, ['build', '--', ...args], {
        cwd: projectRoot,
        env: {...process.env, CI: '1'},
        maxBuffer: 20 * 1024 * 1024,
    });
}

async function fileContents(path: string): Promise<string> {
    return fs.readFile(path, 'utf8');
}

async function expectFile(path: string): Promise<void> {
    const stat = await fs.stat(path);
    expect(stat.isFile(), path).toBe(true);
    expect(stat.size, path).toBeGreaterThan(0);
}

function zipEntries(archive: Buffer): string[] {
    const endSignature = 0x06054b50;
    const centralSignature = 0x02014b50;
    let endOffset = archive.length - 22;
    while (endOffset >= 0 && archive.readUInt32LE(endOffset) !== endSignature) {
        endOffset--;
    }
    if (endOffset < 0) {
        throw new Error('Invalid ZIP archive: end-of-central-directory record is missing.');
    }

    const entryCount = archive.readUInt16LE(endOffset + 10);
    let offset = archive.readUInt32LE(endOffset + 16);
    const entries: string[] = [];
    for (let index = 0; index < entryCount; index++) {
        if (archive.readUInt32LE(offset) !== centralSignature) {
            throw new Error(`Invalid ZIP archive: central directory entry ${index} is missing.`);
        }
        const nameLength = archive.readUInt16LE(offset + 28);
        const extraLength = archive.readUInt16LE(offset + 30);
        const commentLength = archive.readUInt16LE(offset + 32);
        entries.push(archive.subarray(offset + 46, offset + 46 + nameLength).toString('utf8'));
        offset += 46 + nameLength + extraLength + commentLength;
    }
    return entries;
}

type BrowserGlobals = typeof globalThis & {
    cancelAnimationFrame?: (handle: number) => void;
    document?: Document;
    getComputedStyle?: typeof getComputedStyle;
    HTMLElement?: typeof HTMLElement;
    MutationObserver?: typeof MutationObserver;
    navigator?: Navigator;
    requestAnimationFrame?: (callback: FrameRequestCallback) => number;
    window?: Window;
};

async function withBrowserGlobals<T>(callback: (dom: JSDOM) => Promise<T>): Promise<T> {
    vi.useFakeTimers({toFake: ['setTimeout', 'clearTimeout', 'setInterval', 'clearInterval']});
    const dom = new JSDOM('<!doctype html><html><body></body></html>', {
        runScripts: 'outside-only',
        url: 'http://localhost/',
    });
    const globals = globalThis as BrowserGlobals;
    const descriptors = new Map<PropertyKey, PropertyDescriptor | undefined>();
    const defineGlobal = (key: PropertyKey, value: unknown) => {
        descriptors.set(key, Object.getOwnPropertyDescriptor(globalThis, key));
        Object.defineProperty(globalThis, key, {configurable: true, value, writable: true});
    };

    defineGlobal('window', dom.window);
    defineGlobal('document', dom.window.document);
    defineGlobal('localStorage', dom.window.localStorage);
    defineGlobal('sessionStorage', dom.window.sessionStorage);
    defineGlobal('navigator', dom.window.navigator);
    defineGlobal('HTMLElement', dom.window.HTMLElement);
    defineGlobal('Element', dom.window.Element);
    defineGlobal('Node', dom.window.Node);
    defineGlobal('Event', dom.window.Event);
    defineGlobal('CustomEvent', dom.window.CustomEvent);
    defineGlobal('MutationObserver', dom.window.MutationObserver);
    defineGlobal('getComputedStyle', dom.window.getComputedStyle.bind(dom.window));
    defineGlobal('requestAnimationFrame', (callback: FrameRequestCallback) => {
        return dom.window.setTimeout(() => callback(dom.window.performance.now()), 0);
    });
    defineGlobal('cancelAnimationFrame', (handle: number) => dom.window.clearTimeout(handle));

    try {
        return await callback(dom);
    } finally {
        for (const [key, descriptor] of descriptors) {
            if (descriptor) {
                Object.defineProperty(globalThis, key, descriptor);
            } else {
                Reflect.deleteProperty(globals, key);
            }
        }
        dom.window.close();
        vi.clearAllTimers();
        vi.useRealTimers();
    }
}

beforeAll(async () => {
    await fs.rm(outputRoot, {force: true, recursive: true});
    await fs.mkdir(outputRoot, {recursive: true});

    await runBuild([
        '--lib=button avatar tabs dropdown modal',
        '--name=zui-test',
        `--outDir=${bundledOutput}`,
        '--zip=zui-test.zip',
        `--zipOut=${outputRoot}`,
    ]);
    await runBuild([
        '--lib=tabs dropdown modal',
        '--name=zui-test-external',
        `--outDir=${externalOutput}`,
        '--noCash',
        '--noSourceMap',
    ]);
}, 120_000);

afterAll(async () => {
    await fs.rm(Path.join(projectRoot, 'build'), {force: true, recursive: true});
});

describe('bundled library distribution', () => {
    const baseName = 'zui-test';
    const cssPath = Path.join(bundledOutput, `${baseName}.css`);
    const esmPath = Path.join(bundledOutput, `${baseName}.esm.js`);
    const umdPath = Path.join(bundledOutput, `${baseName}.js`);
    const zipPath = Path.join(outputRoot, `${baseName}.zip`);

    test('emits the CSS, ESM, UMD, and source map contract', async () => {
        for (const path of [cssPath, esmPath, umdPath, `${esmPath}.map`, `${umdPath}.map`]) {
            await expectFile(path);
        }

        const esmMap = JSON.parse(await fileContents(`${esmPath}.map`)) as {sources?: string[]; version?: number};
        const umdMap = JSON.parse(await fileContents(`${umdPath}.map`)) as {sources?: string[]; version?: number};
        expect(esmMap.version).toBe(3);
        expect(esmMap.sources?.length).toBeGreaterThan(0);
        expect(umdMap.version).toBe(3);
        expect(umdMap.sources?.length).toBeGreaterThan(0);
    });

    test('packages the named distribution with stable archive paths', async () => {
        await expectFile(zipPath);
        const entries = zipEntries(await fs.readFile(zipPath));
        expect(entries).toEqual(expect.arrayContaining([
            `${baseName}/${baseName}.css`,
            `${baseName}/${baseName}.esm.js`,
            `${baseName}/${baseName}.esm.js.map`,
            `${baseName}/${baseName}.js`,
            `${baseName}/${baseName}.js.map`,
        ]));
    });

    test('is consumable as ESM in a browser-like runtime', async () => {
        await withBrowserGlobals(async () => {
            const url = `${pathToFileURL(esmPath).href}?test=${Date.now()}`;
            const distribution = await import(url) as Record<string, unknown>;
            expect(distribution.Avatar).toBeTypeOf('function');
            expect(distribution.Dropdown).toBeTypeOf('function');
            expect(distribution.Modal).toBeTypeOf('function');
            expect(distribution.Tabs).toBeTypeOf('function');
            expect(window.$).toBeTypeOf('function');
        });
    });

    test('is consumable as a browser UMD global', async () => {
        await withBrowserGlobals(async (dom) => {
            dom.window.eval(await fileContents(umdPath));
            const distribution = (dom.window as unknown as {zui?: Record<string, unknown>}).zui;
            expect(distribution?.Avatar).toBeTypeOf('function');
            expect(distribution?.Dropdown).toBeTypeOf('function');
            expect(distribution?.Modal).toBeTypeOf('function');
            expect(distribution?.Tabs).toBeTypeOf('function');
        });
    });
});

describe('external Cash distribution', () => {
    const baseName = 'zui-test-external';
    const esmPath = Path.join(externalOutput, `${baseName}.esm.js`);
    const umdPath = Path.join(externalOutput, `${baseName}.js`);

    test('keeps cash-dom external and omits source maps', async () => {
        await expectFile(Path.join(externalOutput, `${baseName}.css`));
        await expectFile(esmPath);
        await expectFile(umdPath);

        const files = await fs.readdir(externalOutput);
        expect(files.some(file => file.endsWith('.map'))).toBe(false);

        const esm = await fileContents(esmPath);
        const umd = await fileContents(umdPath);
        expect(esm).toMatch(/from ["']cash-dom["']/);
        expect(umd).toMatch(/\.zui=\{\},\w+\.\$\)/);
        expect(esm).not.toContain('sourceMappingURL=');
        expect(umd).not.toContain('sourceMappingURL=');
    });
});

test('installs the npm tarball with working ESM, CommonJS, UMD, and CSS entries', async () => {
    const publishFixture = Path.join(outputRoot, 'publish-project');
    const publishPath = Path.join(publishFixture, 'publish');
    const consumerPath = Path.join(outputRoot, 'consumer');
    const npmCache = Path.join(outputRoot, 'npm-cache');

    await runBuild([
        '--lib=zui',
        '--name=zui',
        `--outDir=${Path.join(publishFixture, 'dist/zui')}`,
        '--ignoreNotReady',
    ]);
    await fs.mkdir(publishPath, {recursive: true});
    for (const file of ['package.json', 'publish/package.json', 'README.md', 'LICENSE']) {
        await fs.copyFile(Path.join(projectRoot, file), Path.join(publishFixture, file));
    }
    await execFileAsync(process.execPath, ['--import', 'tsx', Path.join(projectRoot, 'scripts/build/publish.ts')], {
        cwd: publishFixture,
    });
    const {stdout} = await execFileAsync(npmCommand, [
        'pack', '--ignore-scripts', '--json', '--pack-destination', outputRoot, '--cache', npmCache,
    ], {cwd: publishPath});
    const [{filename}] = JSON.parse(stdout) as {filename: string}[];

    await fs.mkdir(consumerPath, {recursive: true});
    await fs.writeFile(Path.join(consumerPath, 'package.json'), JSON.stringify({private: true, type: 'module'}));
    await execFileAsync(npmCommand, [
        'install', '--offline', '--ignore-scripts', '--no-audit', '--no-fund', '--package-lock=false',
        '--cache', npmCache, Path.join(outputRoot, filename),
    ], {cwd: consumerPath});
    const entryPath = Path.join(consumerPath, 'entry.mjs');
    await fs.writeFile(entryPath, 'export * from \'zui\';\n');
    const packageRequire = createRequire(Path.join(consumerPath, 'package.json'));
    const installedPackage = Path.join(consumerPath, 'node_modules/zui');

    await withBrowserGlobals(async (dom) => {
        const distribution = await import(pathToFileURL(entryPath).href) as Record<string, unknown>;
        const commonJs = packageRequire('zui') as Record<string, unknown>;
        for (const name of ['DTable', 'Messager', 'Kanban']) {
            expect(distribution[name], name).toBeTypeOf('function');
            expect(commonJs[name], name).toBeTypeOf('function');
        }
        expect(Object.keys(commonJs).sort()).toEqual(Object.keys(distribution).sort());
        expect(packageRequire(installedPackage)).toBe(commonJs);

        dom.window.eval(await fileContents(Path.join(installedPackage, 'dist/zui.js')));
        const umd = (dom.window as unknown as {zui: Record<string, unknown>}).zui;
        expect(Object.keys(umd).sort()).toEqual(Object.keys(distribution).sort());
        await expectFile(packageRequire.resolve('zui/css'));
        await expectFile(Path.join(installedPackage, 'dist/zui.js.map'));
    });
});
