import Path from 'node:path';
import os from 'node:os';
import {spawn} from 'node:child_process';
import fs from 'fs-extra';
import {afterEach, beforeEach, expect, test} from 'vitest';
import {resolveToolBin, runService} from '../../scripts/services/process';

let root: string;
const runners = new Set<ReturnType<typeof spawn>>();
const processModule = Path.resolve(import.meta.dirname, '../../scripts/services/process.ts');

beforeEach(async () => {
    root = await fs.mkdtemp(Path.join(os.tmpdir(), 'zui-service-'));
});

afterEach(async () => {
    for (const runner of runners) {
        if (runner.exitCode === null && runner.signalCode === null) {
            const closed = new Promise(resolve => runner.once('close', resolve));
            runner.kill('SIGTERM');
            await closed;
        }
    }
    runners.clear();
    await fs.remove(root);
});

async function launch(childSource: string, prepareSource = '') {
    const childFile = Path.join(root, 'child.mjs');
    const runnerFile = Path.join(root, 'runner.mts');
    await fs.writeFile(childFile, childSource);
    await fs.writeFile(runnerFile, `
import fs from 'node:fs/promises';
import {runService} from ${JSON.stringify(processModule)};
const failure = new Promise<never>((_resolve, reject) => process.once('message', () => reject(new Error('watcher failed'))));
try {
    process.exitCode = await runService(${JSON.stringify(childFile)}, [], {
        failure,
        prepare: async () => { ${prepareSource} },
        cleanup: async () => { await fs.writeFile(${JSON.stringify(Path.join(root, 'cleaned'))}, 'done'); },
    });
} catch (error) {
    console.error(error);
    process.exitCode = 1;
} finally {
    process.disconnect?.();
}
`);
    const runner = spawn(process.execPath, ['--import', import.meta.resolve('tsx'), runnerFile], {stdio: ['ignore', 'pipe', 'pipe', 'ipc']});
    runners.add(runner);
    let output = '';
    runner.stdout!.on('data', (chunk) => {
        output += chunk;
    });
    runner.stderr!.on('data', (chunk) => {
        output += chunk;
    });
    const closed = new Promise<number | null>(resolve => runner.once('close', resolve));
    return {runner, closed, output: () => output};
}

const serverSource = `
import http from 'node:http';
const server = http.createServer((_req, res) => res.end('ok'));
server.listen(0, '127.0.0.1', () => console.log('READY:' + server.address().port));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close(() => process.exit(0)));
`;

test('keeps native exit status and cleans up failed preparation', async () => {
    const native = await launch('process.exit(7);');
    expect(await native.closed).toBe(7);
    expect(await fs.readFile(Path.join(root, 'cleaned'), 'utf8')).toBe('done');
    const failed = await launch('console.log("MUST_NOT_START");', 'throw new Error("prepare failed");');
    expect(await failed.closed).toBe(1);
    expect(failed.output()).toContain('prepare failed');
    expect(failed.output()).not.toContain('MUST_NOT_START');
});

test.each(['SIGINT', 'SIGTERM'] as const)('%s closes the owned server and releases its port', async (signal) => {
    const service = await launch(serverSource);
    await expect.poll(service.output).toMatch(/READY:\d+/);
    const port = Number(/READY:(\d+)/.exec(service.output())![1]);
    expect(await (await fetch(`http://127.0.0.1:${port}`)).text()).toBe('ok');
    service.runner.kill(signal);
    expect(await service.closed).toBe(signal === 'SIGINT' ? 130 : 143);
    expect(await fs.pathExists(Path.join(root, 'cleaned'))).toBe(true);
    await expect(fetch(`http://127.0.0.1:${port}`)).rejects.toThrow();
});

test('watcher failure closes the owned server and returns a failure', async () => {
    const service = await launch(serverSource);
    await expect.poll(service.output).toMatch(/READY:\d+/);
    const port = Number(/READY:(\d+)/.exec(service.output())![1]);
    service.runner.send('fail');
    expect(await service.closed).toBe(1);
    expect(service.output()).toContain('watcher failed');
    await expect(fetch(`http://127.0.0.1:${port}`)).rejects.toThrow();
});

test('cancellation during preparation waits for cleanup and never starts a child', async () => {
    const service = await launch('console.log("MUST_NOT_START");', 'console.log("PREPARING"); await new Promise(resolve => setTimeout(resolve, 150));');
    await expect.poll(service.output).toContain('PREPARING');
    service.runner.kill('SIGTERM');
    expect(await service.closed).toBe(143);
    expect(service.output()).not.toContain('MUST_NOT_START');
    expect(await fs.pathExists(Path.join(root, 'cleaned'))).toBe(true);
});

test('one-shot lifecycle cleans resources and removes its signal listeners', async () => {
    const count = process.listenerCount('SIGTERM');
    let cleaned = false;
    expect(await runService(undefined, [], {cleanup: async () => {
        cleaned = true;
    }})).toBe(0);
    expect(cleaned).toBe(true);
    expect(process.listenerCount('SIGTERM')).toBe(count);
    expect(resolveToolBin('vite')).toMatch(/vite\/bin\/vite\.js$/);
});
