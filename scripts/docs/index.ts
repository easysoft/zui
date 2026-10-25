import Path from 'node:path';
import {pathToFileURL} from 'node:url';
import {EXTENSION_HELP, parseServiceArgs, serviceEnvironment} from '../services/args';
import {resolveToolBin, runService} from '../services/process';
import {acquireDocsLease} from './lease';
import {createDocsWatcher} from './watch';

export const DOCS_HELP = `Usage: pnpm docs:dev [--extensions | --extension <group-or-directory>] [VitePress options]

${EXTENSION_HELP}
Development defaults: --host 127.0.0.1 --port 5174 --strictPort.
Use --port to select another port; an occupied port is an error.

docs:dev       Prepare, watch and serve documentation.
docs:dev-fast  Serve prepared documentation without synchronizing sources.
docs:watch     Watch sources listed in the prepared library manifest.
docs:build     Prepare and build production documentation.
               --prepared builds existing prepared content without preparing again.
docs:serve     Preview the existing production build.

Only dev/build accept extension selection. Run docs:prepare --copy before dev-fast/watch.
Documentation commands share one writer lease; stop the current docs command before starting another.
`;

export async function runDocsCommand(input: string[], root = process.cwd()) {
    const [command, ...rawArgs] = input;
    if (!['dev', 'dev-fast', 'build', 'watch', 'serve'].includes(command)) throw new Error(DOCS_HELP);
    const {extensions, args: values, help} = parseServiceArgs(rawArgs);
    const separator = values.indexOf('--');
    const ownArgs = separator < 0 ? values : values.slice(0, separator);
    const prepared = ownArgs.includes('--prepared');
    const args = [
        ...ownArgs.filter(arg => arg !== '--prepared'),
        ...(separator < 0 ? [] : values.slice(separator)),
    ];
    if (help) {
        console.log(DOCS_HELP);
        return 0;
    }
    if (prepared && (command !== 'build' || extensions !== undefined)) {
        throw new Error('--prepared is only supported by docs:build and cannot be combined with extension selection.');
    }
    if (extensions !== undefined && command !== 'dev' && command !== 'build') {
        throw new Error(`${command} uses prepared documentation and does not accept extension selection. Run docs:prepare --copy with the desired --extension first.`);
    }
    if (command === 'watch' && args.length) throw new Error(`Unknown docs:watch arguments: ${args.join(' ')}`);
    const {copyDocsSources, prepareDocs, readPreparedDocs, resolveDocsPreparation} = await import('./prepare');
    root = Path.resolve(root);
    const docsRoot = Path.join(root, 'docs');
    const preparation = command === 'dev' || (command === 'build' && !prepared)
        ? await resolveDocsPreparation({extensions, excludeNotReady: command === 'build'}, root)
        : undefined;
    const entry = command === 'watch' ? undefined : resolveToolBin('vitepress', 'vitepress', docsRoot);
    const viteCommand = command === 'build' ? 'build' : command === 'serve' ? 'preview' : 'dev';
    const hasOption = (name: string) => ownArgs.some(arg => arg === `--${name}` || arg.startsWith(`--${name}=`));
    const defaults = viteCommand === 'build' ? [] : [
        ...(hasOption('host') ? [] : ['--host', '127.0.0.1']),
        ...(viteCommand !== 'dev' || hasOption('port') ? [] : ['--port', '5174']),
        ...(hasOption('strictPort') ? [] : ['--strictPort']),
    ];
    let release: (() => Promise<void>) | undefined;
    let watcher: ReturnType<typeof createDocsWatcher> | undefined;
    let rejectFailure!: (error: unknown) => void;
    const failure = new Promise<never>((_resolve, reject) => {
        rejectFailure = reject;
    });
    return runService(entry, [viteCommand, './_', ...defaults, ...args], {
        cwd: docsRoot,
        env: serviceEnvironment(extensions),
        wait: command === 'watch',
        failure,
        prepare: async () => {
            release = await acquireDocsLease(root);
            const libs = preparation?.libs ?? (command !== 'serve' ? await readPreparedDocs(root, command !== 'watch') : undefined);
            if (command === 'dev' || command === 'watch') {
                watcher = createDocsWatcher(libs!, root);
                void watcher.failure.catch(rejectFailure);
                await watcher.ready;
            }
            if (preparation) await prepareDocs(preparation);
            else if (command === 'watch') await copyDocsSources(libs!, root);
            if (watcher) {
                await watcher.start();
                console.log(`Watching documentation sources for ${libs!.length} libraries.`);
            }
        },
        cleanup: async () => {
            try {
                await watcher?.close();
            } finally {
                await release?.();
            }
        },
    });
}

if (process.argv[1] && import.meta.url === pathToFileURL(Path.resolve(process.argv[1])).href) {
    process.exitCode = await runDocsCommand(process.argv.slice(2));
}
