import Path from 'node:path';
import {tmpdir} from 'node:os';
import {EventEmitter} from 'node:events';
import fs from 'fs-extra';
import {afterEach, beforeEach, expect, test, vi} from 'vitest';
import type {Plugin, ViteDevServer} from 'vite';
import configDevServer from '../../scripts/dev/config-server';
import {LibType} from '../../scripts/libs/lib-type';
import type {LibInfo} from '../../scripts/libs/lib-info';

let fixture: string;

beforeEach(async () => {
    fixture = await fs.mkdtemp(Path.join(tmpdir(), 'zui-dev-server-'));
});

afterEach(async () => {
    vi.useRealTimers();
    await fs.remove(fixture);
});

function library(name: string, directory = Path.join(fixture, 'lib', name)): LibInfo {
    return {
        name: `@zui/${name}`, version: '1.0.0',
        zui: {name, displayName: name, type: LibType.component, order: 1, sourceType: 'build-in', path: directory},
    };
}

function callHook(hook: unknown, args: unknown[]) {
    if (typeof hook !== 'function') throw new Error('Expected a function hook');
    return Reflect.apply(hook, {}, args);
}

function serverFixture(plugin: Plugin) {
    const watcher = Object.assign(new EventEmitter(), {add: vi.fn()});
    const middlewares: ((req: unknown, res: unknown, next: unknown) => unknown)[] = [];
    const server = {
        watcher,
        httpServer: new EventEmitter(),
        middlewares: {use: (handler: typeof middlewares[number]) => middlewares.push(handler)},
        ws: {send: vi.fn()},
        restart: vi.fn().mockResolvedValue(undefined),
        config: {logger: {error: vi.fn()}},
    };
    callHook(plugin.configureServer, [server]);
    const request = async (url: string) => {
        let body = '';
        const next = vi.fn();
        await middlewares[0]({url}, {setHeader: vi.fn(), end: (value: string) => {
            body = value;
        }}, next);
        return {body, next};
    };
    return {server: server as unknown as ViteDevServer, watcher, request, send: server.ws.send, restart: server.restart};
}

test('each server exposes only its own library snapshot and forwards malformed URLs', async () => {
    const first = serverFixture(configDevServer({rootPath: fixture, libsCache: {first: library('first')}, sources: [Path.join(fixture, 'lib')]}));
    const second = serverFixture(configDevServer({rootPath: fixture, libsCache: {second: library('second')}, sources: [Path.join(fixture, 'lib')]}));
    expect(Object.keys(JSON.parse((await first.request('/libs/')).body))).toEqual(['first']);
    expect(Object.keys(JSON.parse((await second.request('/libs/')).body))).toEqual(['second']);
    expect((await first.request('/lib/%/README.md')).next).toHaveBeenCalledWith(expect.any(URIError));
});

test('README edits keep dev.md displayed and deleting dev.md updates the page to README', async () => {
    const lib = library('example');
    await fs.outputFile(Path.join(lib.zui.path, 'README.md'), '# README');
    await fs.outputFile(Path.join(lib.zui.path, 'dev.md'), '# Playground');
    const plugin = configDevServer({rootPath: fixture, libsCache: {example: lib}, sources: [Path.join(fixture, 'lib')]});
    const instance = serverFixture(plugin);
    expect((await instance.request('/lib/example/README.md')).body).toContain('Playground');
    await callHook(plugin.handleHotUpdate, [{file: Path.join(lib.zui.path, 'README.md'), server: instance.server}]);
    expect(instance.send).toHaveBeenLastCalledWith('zui:lib-page-updated', expect.objectContaining({content: expect.stringContaining('Playground')}));

    await fs.remove(Path.join(lib.zui.path, 'dev.md'));
    instance.watcher.emit('all', 'unlink', Path.join(lib.zui.path, 'dev.md'));
    await vi.waitFor(() => expect(instance.send).toHaveBeenLastCalledWith('zui:lib-page-updated', expect.objectContaining({content: expect.stringContaining('README')})));
});

test('uses Vite file URLs for external entries and restarts once for structural changes', async () => {
    const root = Path.join(fixture, 'project');
    const lib = library('example', Path.join(fixture, 'external space', 'example'));
    const colors = Path.join(lib.zui.path, 'colors.cjs');
    await fs.outputFile(Path.join(lib.zui.path, 'dev.ts'), 'export {};');
    const plugin = configDevServer({rootPath: root, libsCache: {example: lib}, sources: [Path.join(root, 'lib'), Path.dirname(lib.zui.path)], configFiles: [colors], watchExtensions: true});
    const instance = serverFixture(plugin);
    const tags = callHook(plugin.transformIndexHtml, ['', {originalUrl: '/example/'}]);
    expect(tags[0].attrs.src).toBe(`/@fs/${encodeURI(Path.join(lib.zui.path, 'dev.ts'))}`);

    vi.useFakeTimers();
    instance.watcher.emit('all', 'change', Path.join(lib.zui.path, 'package.json'));
    instance.watcher.emit('all', 'add', Path.join(lib.zui.path, 'tailwind.cjs'));
    await vi.runAllTimersAsync();
    expect(instance.restart).toHaveBeenCalledTimes(1);
    instance.watcher.emit('all', 'change', colors);
    await vi.runAllTimersAsync();
    expect(instance.restart).toHaveBeenCalledTimes(2);
    instance.watcher.emit('all', 'change', Path.join(lib.zui.path, 'src/main.ts'));
    await vi.runAllTimersAsync();
    expect(instance.restart).toHaveBeenCalledTimes(2);
    callHook(plugin.closeBundle, []);
    expect(instance.watcher.listenerCount('all')).toBe(0);
});
