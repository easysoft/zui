import Path from 'node:path';
import {tmpdir} from 'node:os';
import fs from 'fs-extra';
import {afterEach, beforeEach, expect, test, vi} from 'vitest';
import {createLibFromPackageJson} from '../../scripts/libs/query';
import {syncLibDocFile, syncLibDocs} from '../../scripts/docs/sync';
import {createDocsWatcher} from '../../scripts/docs/watch';

let root: string;
let closeWatcher: (() => Promise<void>) | undefined;

beforeEach(async () => {
    // Native filesystem notifications are unavailable in some sandboxed runners.
    vi.stubEnv('CHOKIDAR_USEPOLLING', 'true');
    root = await fs.mkdtemp(Path.join(tmpdir(), 'zui-docs-sync-'));
    await fs.ensureDir(Path.join(root, 'docs/docs'));
});

afterEach(async () => {
    await closeWatcher?.();
    closeWatcher = undefined;
    await fs.remove(root);
    vi.unstubAllEnvs();
});

function extension() {
    const path = Path.join(root, 'external collection', 'widgets');
    return createLibFromPackageJson({name: '@fixture/widgets', version: '1.0.0'}, {
        sourceType: 'exts', path, packageJsonPath: Path.join(path, 'package.json'),
    });
}

test('initial and incremental docs/assets use the same mapping for external collections', async () => {
    const lib = extension();
    const asset = Path.join(lib.zui.path, 'assets/nested/icon.svg');
    const markdown = Path.join(lib.zui.path, 'docs/lib/components/example.md');
    await fs.outputFile(asset, 'first asset');
    await fs.outputFile(markdown, '# first doc');
    await syncLibDocs(lib, root);
    const assetTarget = Path.join(root, 'docs/_/public/assets/@fixture/widgets/nested/icon.svg');
    const docTarget = Path.join(root, 'docs/_/lib/components/@fixture/widgets/example.md');
    expect(await fs.readFile(assetTarget, 'utf8')).toBe('first asset');
    expect(await fs.readFile(docTarget, 'utf8')).toBe('# first doc');
    await fs.writeFile(asset, 'second asset');
    expect(await syncLibDocFile(asset, false, lib, root)).toBe(assetTarget);
    expect(await fs.readFile(assetTarget, 'utf8')).toBe('second asset');
    await syncLibDocFile(markdown, true, lib, root);
    expect(await fs.pathExists(docTarget)).toBe(false);
});

test('sync rejects outside paths and propagates copy failures', async () => {
    const lib = extension();
    await expect(syncLibDocFile(Path.join(root, 'unselected/file.md'), false, lib, root)).rejects.toThrow('outside');
    await expect(syncLibDocFile(Path.join(lib.zui.path, 'assets/missing.svg'), false, lib, root)).rejects.toMatchObject({code: 'ENOENT'});
});

test('watcher buffers preparation changes and only syncs the prepared library list', async () => {
    const lib = extension();
    const source = Path.join(lib.zui.path, 'assets/example.txt');
    const target = Path.join(root, 'docs/_/public/assets/@fixture/widgets/example.txt');
    await fs.outputFile(source, 'before');
    const watcher = createDocsWatcher([lib], root);
    closeWatcher = watcher.close;
    await watcher.ready;
    await fs.writeFile(source, 'during preparation');
    await expect.poll(() => watcher.pendingCount).toBeGreaterThan(0);
    expect(await fs.pathExists(target)).toBe(false);
    await watcher.start();
    expect(await fs.readFile(target, 'utf8')).toBe('during preparation');
    await fs.outputFile(Path.join(root, 'lib/unselected/assets/unselected.txt'), 'do not copy');
    await fs.writeFile(source, 'remove immediately');
    await fs.remove(source);
    await expect.poll(() => fs.pathExists(target)).toBe(false);
    expect(await fs.pathExists(Path.join(root, 'docs/_/public/assets/unselected/unselected.txt'))).toBe(false);
    await watcher.close();
    closeWatcher = undefined;
    await fs.outputFile(source, 'after shutdown');
    expect(await fs.pathExists(target)).toBe(false);
});

test('watcher discovers docs and assets directories created after startup', async () => {
    const lib = extension();
    await fs.ensureDir(lib.zui.path);
    const watcher = createDocsWatcher([lib], root);
    closeWatcher = watcher.close;
    await watcher.start();
    await fs.outputFile(Path.join(lib.zui.path, 'assets/new.svg'), '<svg/>');
    await fs.outputFile(Path.join(lib.zui.path, 'docs/lib/components/new.md'), '# New');
    await expect.poll(() => fs.pathExists(Path.join(root, 'docs/_/public/assets/@fixture/widgets/new.svg'))).toBe(true);
    await expect.poll(() => fs.pathExists(Path.join(root, 'docs/_/lib/components/@fixture/widgets/new.md'))).toBe(true);
});

test('watcher reports an incremental copy failure instead of continuing silently', async () => {
    const lib = extension();
    const source = Path.join(lib.zui.path, 'assets/example.txt');
    await fs.outputFile(source, 'before');
    await fs.outputFile(Path.join(root, 'docs/_/public/assets'), 'a file blocks the output directory');
    const watcher = createDocsWatcher([lib], root);
    closeWatcher = async () => {
        await watcher.close().catch(() => undefined);
    };
    await watcher.start();
    const failed = expect(watcher.failure).rejects.toThrow();
    await fs.writeFile(source, 'after');
    await failed;
});
