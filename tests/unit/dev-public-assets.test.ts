import path from 'node:path';
import {tmpdir} from 'node:os';
import fs from 'fs-extra';
import {afterEach, beforeEach, expect, test} from 'vitest';
import {createServer, type ViteDevServer} from 'vite';
import configDevServer from '../../scripts/dev/config-server';
import {LibType} from '../../scripts/libs/lib-type';
import type {LibInfo} from '../../scripts/libs/lib-info';

let fixture: string;
let server: ViteDevServer;
let base: string;
const script = 'globalThis.TestBundle = {mode: process.env.NODE_ENV};\n';
const stylesheet = '.test-bundle { color: red; }\n';

beforeEach(async () => {
    fixture = await fs.realpath(await fs.mkdtemp(path.join(tmpdir(), 'zui-public-assets-')));
    const root = path.join(fixture, 'project');
    const external = path.join(fixture, 'external-library');
    const lib: LibInfo = {
        name: '@example/editor', version: '1.0.0',
        zui: {name: '@example/editor', displayName: 'Editor', type: LibType.component, order: 1, sourceType: 'exts', path: external},
    };
    await fs.outputFile(path.join(external, 'public/bundle.js'), script);
    await fs.outputFile(path.join(external, 'public/bundle space.js'), script);
    await fs.outputFile(path.join(external, 'public/bundle.css'), stylesheet);
    await fs.outputFile(path.join(external, 'src/main.js'), script);
    await fs.ensureDir(path.join(root, 'exts'));
    await fs.symlink(external, path.join(root, 'exts/example'), 'dir');
    server = await createServer({
        configFile: false, root, cacheDir: path.join(fixture, 'cache'), logLevel: 'silent',
        plugins: [configDevServer({rootPath: root, libsCache: {[lib.name]: lib}, sources: [external]})],
        optimizeDeps: {noDiscovery: true, include: []},
        define: {'process.env.NODE_ENV': JSON.stringify('development')},
        server: {host: '127.0.0.1', port: 0, fs: {strict: true, allow: [root, external], deny: ['**/.env*']}},
    });
    await server.listen();
    base = server.resolvedUrls!.local[0];
});

afterEach(async () => {
    await server?.close();
    await fs.remove(fixture);
});

test('serves prebuilt JS and linked CSS byte-for-byte before source transforms', async () => {
    const js = await fetch(`${base}exts/example/public/bundle.js`);
    expect(js.status).toBe(200);
    expect(js.headers.get('content-type')).toContain('javascript');
    expect(await js.text()).toBe(script);
    const css = await fetch(`${base}exts/example/public/bundle.css`, {headers: {accept: 'text/css'}});
    expect(css.headers.get('content-type')).toContain('text/css');
    expect(await css.text()).toBe(stylesheet);
});

test('supports external file URLs, cache validators and HEAD without rewriting bytes', async () => {
    const url = `${base}@fs/${encodeURI(path.join(fixture, 'external-library/public/bundle space.js'))}?v=1`;
    const response = await fetch(url);
    expect(await response.text()).toBe(script);
    const etag = response.headers.get('etag')!;
    expect(etag).toBeTruthy();
    expect((await fetch(url, {headers: {'if-none-match': etag}})).status).toBe(304);
    const head = await fetch(url, {method: 'HEAD'});
    expect(head.status).toBe(200);
    expect(await head.text()).toBe('');
});

test('retains Vite source, CSS module, raw and URL import behavior', async () => {
    const source = await (await fetch(`${base}exts/example/src/main.js`)).text();
    expect(source).toContain('"development"');
    const raw = await (await fetch(`${base}exts/example/public/bundle.js?raw`)).text();
    expect(raw).toContain(`export default ${JSON.stringify(script)}`);
    const url = await (await fetch(`${base}exts/example/public/bundle.js?url`)).text();
    expect(url).toMatch(/^export default "\/.*\/public\/bundle\.js"/);
    const cssModule = await (await fetch(`${base}exts/example/public/bundle.css?import`)).text();
    expect(cssModule).toContain('updateStyle');
});

test('does not bypass Vite deny rules or serve symlinks outside allowed roots', async () => {
    const external = path.join(fixture, 'external-library');
    await fs.outputFile(path.join(external, 'public/.env.js'), 'secret');
    await fs.outputFile(path.join(fixture, 'private.js'), 'secret');
    await fs.symlink(path.join(fixture, 'private.js'), path.join(external, 'public/outside.js'));
    for (const name of ['.env.js', 'outside.js']) {
        const response = await fetch(`${base}exts/example/public/${name}`);
        expect(response.status).toBe(403);
        expect(await response.text()).not.toBe('secret');
    }
});
