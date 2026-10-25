import Path from 'node:path';
import ts from 'typescript';
import {getStorybookFiles, getStorybookLibraries, rootPath, sharedStorybookPackages} from '../../.storybook/libraries';
import type {LibInfo} from '../libs/lib-info';
import {readServiceExtensions} from '../services/args';

export function getStorybookTypePaths(libs: Record<string, LibInfo>, root = rootPath) {
    const paths: Record<string, string[]> = {'~/*': [Path.join(root, '*')]};
    const addLibrary = (name: string, lib: LibInfo) => {
        paths[name] = [Path.join(lib.zui.path, lib.exports?.['.'] ?? lib.main ?? 'src/main.ts')];
        paths[`${name}/*`] = [Path.join(lib.zui.path, '*')];
        Object.entries(lib.exports ?? {}).forEach(([key, target]) => {
            if (key.startsWith('./')) paths[`${name}/${key.slice(2)}`] = [Path.resolve(lib.zui.path, target)];
        });
    };
    Object.values(libs).forEach(lib => addLibrary(lib.name, lib));
    Object.values(libs).filter(lib => lib.zui.sourceType === 'exts').forEach((lib) => {
        (lib.zui.replace ?? '').split(',').map(name => name.trim()).filter(Boolean).forEach((name) => {
            addLibrary(libs[name]?.name ?? (name.startsWith('@') ? name : `@zui/${name}`), lib);
        });
    });
    return paths;
}

export async function typecheckStorybook(extensions = readServiceExtensions(), root = rootPath) {
    const libs = await getStorybookLibraries(extensions, root);
    const configPath = Path.join(root, '.storybook/tsconfig.json');
    const config = ts.readConfigFile(configPath, ts.sys.readFile);
    if (config.error) throw new Error(ts.flattenDiagnosticMessageText(config.error.messageText, '\n'));
    const parsed = ts.parseJsonConfigFileContent(config.config, ts.sys, Path.dirname(configPath));
    const options = {...parsed.options, paths: {...parsed.options.paths, ...getStorybookTypePaths(libs, root)}};
    const files = [...new Set([...parsed.fileNames, ...await getStorybookFiles(libs)])];
    const host = ts.createCompilerHost(options);
    host.resolveModuleNames = (names, containingFile) => names.map((name) => {
        if (name.startsWith('@/')) {
            const lib = Object.values(libs).find(item => containingFile.startsWith(`${item.zui.path}${Path.sep}`));
            if (lib) name = Path.join(lib.zui.path, name.slice(2));
        }
        const from = sharedStorybookPackages.some(pkg => name === pkg || name.startsWith(`${pkg}/`)) ? configPath : containingFile;
        return ts.resolveModuleName(name, from, options, host).resolvedModule;
    });
    const program = ts.createProgram(files, options, host);
    const diagnostics = [...parsed.errors, ...ts.getPreEmitDiagnostics(program)];
    if (diagnostics.length) {
        console.error(ts.formatDiagnosticsWithColorAndContext(diagnostics, {
            getCanonicalFileName: file => file,
            getCurrentDirectory: () => root,
            getNewLine: () => '\n',
        }));
        return 1;
    }
    console.log(`Storybook typecheck passed (${Object.keys(libs).length} libraries).`);
    return 0;
}
