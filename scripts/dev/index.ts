import Path from 'node:path';
import {tmpdir} from 'node:os';
import {mkdtemp, rm} from 'node:fs/promises';
import {EXTENSION_HELP, parseServiceArgs, serviceEnvironment} from '../services/args';
import {resolveToolBin, runService} from '../services/process';

try {
    const {extensions, args, help} = parseServiceArgs(process.argv.slice(2));
    if (help) {
        console.log(`Usage: pnpm dev [extension options] [Vite options]\n${EXTENSION_HELP}\nDefault: http://127.0.0.1:5173; occupied ports fail. Use --port to choose another port.`);
    }
    const env = serviceEnvironment(extensions);
    let cacheDir: string | undefined;
    process.exitCode = await runService(resolveToolBin('vite'), help ? ['--help'] : args, {
        env,
        prepare: help ? undefined : async () => {
            cacheDir = await mkdtemp(Path.join(tmpdir(), 'zui-dev-'));
            env.ZUI_DEV_CACHE_DIR = cacheDir;
        },
        cleanup: async () => {
            if (cacheDir) await rm(cacheDir, {recursive: true, force: true});
        },
    });
} catch (error) {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
}
