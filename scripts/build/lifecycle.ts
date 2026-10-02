import Path from 'node:path';
import os from 'node:os';
import fs from 'node:fs/promises';
import {randomUUID} from 'node:crypto';
import {setTimeout} from 'node:timers/promises';
import {isWithin} from './paths';

type BuildResource = {path: string; directory: boolean};
type BuildLease = {pid: number; token: string; resources: BuildResource[]};

// ponytail: lock case variants on every platform; detect volumes only if distinct case-sensitive outputs need concurrency.
function resourceKey(path: string) {
    return path.normalize('NFC').toLowerCase();
}

function hasCode(error: unknown, code: string) {
    return (error as NodeJS.ErrnoException | null)?.code === code;
}

async function readOwner(path: string): Promise<{pid?: number; token?: string} | undefined> {
    try {
        return JSON.parse(await fs.readFile(path, 'utf8'));
    } catch {
        return undefined;
    }
}

/** Only the process that created this guard removes it; abandoned guards require manual recovery. */
async function withRegistryGuard<T>(registry: string, action: () => Promise<T>): Promise<T> {
    const guard = Path.join(registry, '.guard');
    const ownerFile = Path.join(guard, 'owner.json');
    const token = randomUUID();
    for (let attempt = 0; ; attempt++) {
        try {
            await fs.mkdir(guard);
            break;
        } catch (error) {
            if (!hasCode(error, 'EEXIST')) {
                throw error;
            }
            if (attempt >= 200) {
                const owner = await readOwner(ownerFile);
                throw new Error(`ZUI build: lock registry is busy at "${guard}" (PID ${owner?.pid ?? 'unknown'}). An abandoned guard must be removed manually.`);
            }
            await setTimeout(10);
        }
    }
    const identity = await fs.stat(guard);
    let ownerWritten = false;
    try {
        await fs.writeFile(ownerFile, JSON.stringify({pid: process.pid, token}), {flag: 'wx', mode: 0o600});
        ownerWritten = true;
        return await action();
    } finally {
        const current = await fs.stat(guard).catch((error) => {
            if (!hasCode(error, 'ENOENT')) {
                throw error;
            }
        });
        const owner = await readOwner(ownerFile);
        if (current?.dev === identity.dev && current?.ino === identity.ino
            && (owner?.token === token || (!ownerWritten && !owner))) {
            await fs.rm(guard, {recursive: true});
        }
    }
}

/** Paths must already be canonical. Resources remain locked until explicitly released, even after process exit. */
export async function acquireBuildLock(resources: BuildResource[]): Promise<() => Promise<void>> {
    const user = process.getuid?.() ?? os.userInfo().username;
    const registry = Path.join(os.tmpdir(), `zui-build-locks-${user}`);
    await fs.mkdir(registry, {recursive: true, mode: 0o700});
    const token = randomUUID();
    const lease = Path.join(registry, `${token}.json`);
    await withRegistryGuard(registry, async () => {
        for (const file of await fs.readdir(registry)) {
            if (!file.endsWith('.json')) {
                continue;
            }
            const owner: BuildLease = JSON.parse(await fs.readFile(Path.join(registry, file), 'utf8'));
            for (const requested of resources) {
                const requestedKey = resourceKey(requested.path);
                const occupied = owner.resources.find((resource) => {
                    const occupiedKey = resourceKey(resource.path);
                    return occupiedKey === requestedKey
                        || (resource.directory && isWithin(requestedKey, occupiedKey))
                        || (requested.directory && isWithin(occupiedKey, requestedKey));
                });
                if (occupied) {
                    throw new Error(`ZUI build: resource "${requested.path}" conflicts with "${occupied.path}" held by PID ${owner.pid} (${Path.join(registry, file)}).`);
                }
            }
        }
        const handle = await fs.open(lease, 'wx', 0o600);
        try {
            await handle.writeFile(JSON.stringify({pid: process.pid, token, resources} satisfies BuildLease));
            await handle.close();
        } catch (error) {
            await handle.close().catch(() => undefined);
            await fs.rm(lease, {force: true}).catch((cleanupError) => {
                throw new AggregateError([error, cleanupError], `ZUI build: could not remove incomplete lease "${lease}".`);
            });
            throw error;
        }
    });
    return async () => {
        await withRegistryGuard(registry, async () => {
            if ((await readOwner(lease))?.token === token) {
                await fs.rm(lease);
            }
        });
    };
}

/** Commit staged sibling paths together, rolling back ordinary errors. This does not recover interrupted processes. */
export async function publishBuild(outputs: {source: string; target: string}[]): Promise<void> {
    const changes: {target: string; backup: string; saved: boolean; installed: boolean}[] = [];
    try {
        for (const {source, target} of outputs) {
            const change = {target, backup: `${target}.backup-${randomUUID()}`, saved: false, installed: false};
            changes.push(change);
            try {
                await fs.rename(target, change.backup);
                change.saved = true;
            } catch (error) {
                if (!hasCode(error, 'ENOENT')) {
                    throw error;
                }
            }
            await fs.rename(source, target);
            change.installed = true;
        }
    } catch (error) {
        const failures: Error[] = [];
        for (const change of changes.reverse()) {
            try {
                if (change.installed) {
                    await fs.rm(change.target, {recursive: true, force: true});
                }
                if (change.saved) {
                    await fs.rename(change.backup, change.target);
                }
            } catch (failure) {
                const message = change.saved
                    ? `could not restore "${change.target}"; preserved backup at "${change.backup}"`
                    : `could not remove newly installed output "${change.target}"`;
                failures.push(new Error(`ZUI build: ${message}.`, {cause: failure}));
            }
        }
        if (failures.length) {
            throw new AggregateError([error, ...failures], `ZUI build: output replacement failed and rollback was incomplete. ${failures.map(failure => failure.message).join(' ')}`);
        }
        throw error;
    }
    for (const change of changes) {
        if (change.saved) {
            try {
                await fs.rm(change.backup, {recursive: true, force: true});
            } catch (error) {
                console.warn(`ZUI build: output committed; could not remove backup "${change.backup}".`, error);
            }
        }
    }
}
