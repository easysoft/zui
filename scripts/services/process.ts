import Path from 'node:path';
import {createRequire} from 'node:module';
import {readFileSync} from 'node:fs';
import {spawn, type ChildProcess} from 'node:child_process';
import {constants} from 'node:os';

export function resolveToolBin(packageName: string, binName = packageName.split('/').at(-1)!, cwd = process.cwd()) {
    const require = createRequire(Path.join(cwd, 'package.json'));
    const packagePath = require.resolve(`${packageName}/package.json`);
    const pkg = JSON.parse(readFileSync(packagePath, 'utf8')) as {bin?: string | Record<string, string>};
    const entry = typeof pkg.bin === 'string' ? pkg.bin : pkg.bin?.[binName];
    if (!entry) throw new Error(`Cannot find ${binName} in ${packageName}. Install workspace dependencies first.`);
    return Path.resolve(Path.dirname(packagePath), entry);
}

export interface ServiceOptions {
    cwd?: string;
    env?: NodeJS.ProcessEnv;
    prepare?: () => Promise<void>;
    cleanup?: () => Promise<void>;
    failure?: Promise<never>;
    wait?: boolean;
}

function signalCode(signal: NodeJS.Signals) {
    return 128 + (constants.signals[signal] ?? 1);
}

/** Own only this invocation's child and resources, including cancellation during preparation. */
export async function runService(entry: string | undefined, args: string[], options: ServiceOptions = {}): Promise<number> {
    let child: ChildProcess | undefined;
    let childClosed: Promise<number> | undefined;
    let signal: NodeJS.Signals | undefined;
    let failure: unknown;
    let failed = false;
    let stop!: () => void;
    const stopped = new Promise<void>((resolve) => {
        stop = resolve;
    });
    const interrupt = (received: NodeJS.Signals) => {
        signal ??= received;
        stop();
    };
    const onInt = () => interrupt('SIGINT');
    const onTerm = () => interrupt('SIGTERM');
    process.on('SIGINT', onInt);
    process.on('SIGTERM', onTerm);
    void options.failure?.catch((error: unknown) => {
        failure = error;
        failed = true;
        stop();
    });

    const stopChild = async () => {
        if (!child || !childClosed) return;
        if (child.exitCode === null && child.signalCode === null) {
            child.kill(signal ?? 'SIGTERM');
            const timer = setTimeout(() => child?.kill('SIGKILL'), 5000);
            timer.unref();
            try {
                await childClosed;
            } finally {
                clearTimeout(timer);
            }
        }
    };
    try {
        await options.prepare?.();
        if (failed) throw failure;
        if (signal) return signalCode(signal);
        if (entry) {
            child = spawn(process.execPath, [entry, ...args], {cwd: options.cwd, env: options.env, stdio: 'inherit'});
            childClosed = new Promise<number>((resolve, reject) => {
                child!.once('error', reject);
                child!.once('close', (code, childSignal) => resolve(code ?? (childSignal ? signalCode(childSignal) : 1)));
            });
            const result = await Promise.race([childClosed, stopped]);
            if (failed) throw failure;
            return signal ? signalCode(signal) : (result ?? 1);
        }
        if (!options.wait) return 0;
        await stopped;
        if (failed) throw failure;
        return signal ? signalCode(signal) : 0;
    } finally {
        try {
            await stopChild();
        } finally {
            try {
                await options.cleanup?.();
            } finally {
                process.off('SIGINT', onInt);
                process.off('SIGTERM', onTerm);
            }
        }
    }
}
