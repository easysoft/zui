import Path from 'node:path';
import {tmpdir} from 'node:os';
import {mkdtemp, rm} from 'node:fs/promises';
import {parseServiceArgs, serviceEnvironment} from '../services/args';
import {resolveToolBin, runService} from '../services/process';
import {getStorybookCommand} from './args';

const [command, ...input] = process.argv.slice(2);
const {extensions, args, help} = parseServiceArgs(input);
const usage = 'Usage: pnpm storybook [--extensions | --extension <group-or-directory>] [Storybook options]\nAlso supported: storybook:build, typecheck:storybook, test:storybook.';
if (help) console.log(usage);
if (command === 'typecheck') {
    if (!help) {
        if (args.length) throw new Error(`Unknown Storybook typecheck arguments: ${args.join(' ')}`);
        const {typecheckStorybook} = await import('./typecheck');
        process.exitCode = await typecheckStorybook(extensions);
    }
} else if (command === 'dev' || command === 'build' || command === 'test') {
    const tool = getStorybookCommand(command, help ? ['--help'] : args);
    const env = serviceEnvironment(extensions);
    let cacheDir: string | undefined;
    process.exitCode = await runService(resolveToolBin(tool.packageName, tool.binName), tool.args, {
        env,
        prepare: command === 'dev' && !help ? async () => {
            // Storybook's default cache key omits the port and selected libraries.
            cacheDir = await mkdtemp(Path.join(tmpdir(), 'zui-storybook-'));
            env.CACHE_DIR = cacheDir;
        } : undefined,
        cleanup: async () => {
            if (cacheDir) await rm(cacheDir, {recursive: true, force: true});
        },
    });
} else {
    throw new Error(usage);
}
