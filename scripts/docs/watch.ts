import Path from 'node:path';
import {pathToFileURL} from 'node:url';
import chokidar from 'chokidar';
import fs from 'fs-extra';
import {isWithin} from '../build/paths';
import type {LibInfo} from '../libs/lib-info';
import {getDocTarget, syncLibDocFile} from './sync';

/** Events are buffered until preparation has finished; one queue owns all writes. */
export function createDocsWatcher(libs: readonly LibInfo[], root = process.cwd()) {
    const docsSource = Path.join(root, 'docs/docs');
    // Watch existing library roots so later docs/assets directories are also discovered.
    const paths = [docsSource, ...libs.map(lib => lib.zui.path)];
    const polling = process.env.CHOKIDAR_USEPOLLING?.toLowerCase();
    const watcher = chokidar.watch(paths, {
        ignoreInitial: true,
        // Chokidar 3 selects fsevents before applying its environment override.
        usePolling: polling === undefined ? undefined : !['', 'false', '0'].includes(polling),
        ignored(file) {
            const lib = libs.find(item => isWithin(file, item.zui.path));
            const base = lib?.zui.path ?? (isWithin(file, docsSource) ? docsSource : undefined);
            if (!base) return false;
            const relative = Path.relative(base, file);
            if (!relative) return false;
            const parts = relative.split(Path.sep);
            return parts.some(part => part.startsWith('.')) || !!(lib && !['docs', 'assets'].includes(parts[0]));
        },
    });
    const pending = new Map<string, {file: string; lib?: LibInfo}>();
    let started = false;
    let closed = false;
    let failed: Error | undefined;
    let running = Promise.resolve();
    let rejectReady!: (error: Error) => void;
    let rejectFailure!: (error: Error) => void;
    const ready = new Promise<void>((resolve, reject) => {
        rejectReady = reject;
        watcher.once('ready', resolve);
    });
    const failure = new Promise<never>((_resolve, reject) => {
        rejectFailure = reject;
    });
    void failure.catch(() => undefined);
    void ready.catch(() => undefined);
    const report = (error: unknown) => {
        if (failed) return;
        failed = error instanceof Error ? error : new Error(String(error));
        rejectReady(failed);
        rejectFailure(failed);
    };
    const drain = async () => {
        while (pending.size && !failed) {
            const [target, {file, lib}] = pending.entries().next().value!;
            pending.delete(target);
            const exists = await fs.pathExists(file);
            try {
                await syncLibDocFile(file, !exists, lib, root);
            } catch (error) {
                // A delete can race the copy; reconcile the final state, never hide other I/O failures.
                if ((error as NodeJS.ErrnoException).code !== 'ENOENT' || await fs.pathExists(file)) throw error;
                await syncLibDocFile(file, true, lib, root);
            }
        }
    };
    const flush = async () => {
        running = running.then(drain).catch(report);
        await running;
        if (failed) throw failed;
    };
    const enqueue = (file: string) => {
        if (closed || failed) return;
        try {
            const lib = libs.find(item => isWithin(file, item.zui.path));
            pending.set(getDocTarget(file, lib, root), {file, lib});
            if (started) void flush().catch(report);
        } catch (error) {
            report(error);
        }
    };
    watcher.on('add', enqueue).on('change', enqueue).on('unlink', enqueue).on('error', report);
    return {
        ready,
        failure,
        get pendingCount() {
            return pending.size;
        },
        async start() {
            await ready;
            started = true;
            await flush();
        },
        async close() {
            if (closed) return;
            closed = true;
            await watcher.close();
            if (started) await flush();
            pending.clear();
        },
    };
}

if (process.argv[1] && import.meta.url === pathToFileURL(Path.resolve(process.argv[1])).href) {
    const {runDocsCommand} = await import('./index');
    process.exitCode = await runDocsCommand(['watch', ...process.argv.slice(2)]);
}
