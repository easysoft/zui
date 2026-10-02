import Path from 'node:path';
import {parseArgs} from 'node:util';
import fs from 'fs-extra';
import {BUILD_MIGRATION, BuildOptions, validateBuildOptions} from './config';

export const BUILD_HELP = `Usage: pnpm build [options]

  --config <file>             Declarative JSON configuration
  --lib <name>                Select a library (repeatable)
  --exclude <name>            Exclude a library (repeatable)
  --extensions                Load all registered extension sources
  --extension <group|path>    Load an extension group or directory (repeatable)
  --name <name>               Build name
  --version <version>         Build version
  --out-dir <directory>      Output directory
  --minify / --no-minify      Enable/disable JS and CSS minification
  --sourcemap / --no-sourcemap Enable/disable source maps
  --include-wip               Include WIP libraries in the default selection
  --exclude-not-ready         Exclude libraries marked notReady
  --zip <file>                Write a ZIP archive to this path
  --dry-run                   Print the resolved plan without writing files
  --help                      Show this help

Built-in libraries use short names; extension libraries use full package names.
CLI paths are relative to the working directory; JSON paths to the config file.
Examples:
  pnpm build --lib button --lib dropdown
  pnpm build --extensions
  pnpm build --extension zentao --extension another-group
  pnpm build --extension ../zui_exts/zentao
  pnpm build --extension zentao --lib @zentao/foo
  pnpm build --config ./custom-build.json --no-minify
`;

export function parseBuildArgs(args: string[]): {options: BuildOptions; config?: string; help: boolean; dryRun: boolean} {
    let parsed;
    try {
        parsed = parseArgs({
            args: args[0] === '--' ? args.slice(1) : args,
            strict: true,
            allowPositionals: false,
            options: {
                config: {type: 'string'},
                lib: {type: 'string', multiple: true},
                exclude: {type: 'string', multiple: true},
                extensions: {type: 'boolean'},
                extension: {type: 'string', multiple: true},
                name: {type: 'string'},
                version: {type: 'string'},
                'out-dir': {type: 'string'},
                minify: {type: 'boolean'},
                'no-minify': {type: 'boolean'},
                sourcemap: {type: 'boolean'},
                'no-sourcemap': {type: 'boolean'},
                'include-wip': {type: 'boolean'},
                'exclude-not-ready': {type: 'boolean'},
                zip: {type: 'string'},
                help: {type: 'boolean'},
                'dry-run': {type: 'boolean'},
            },
        });
    } catch (error) {
        throw new Error(`${error instanceof Error ? error.message : String(error)} ${BUILD_MIGRATION}`);
    }
    const {values} = parsed;
    if (values.extensions && values.extension) {
        throw new Error('--extensions and --extension are mutually exclusive.');
    }
    for (const key of ['minify', 'sourcemap'] as const) {
        if (values[key] && values[`no-${key}`]) {
            throw new Error(`--${key} and --no-${key} are mutually exclusive.`);
        }
    }
    const options: BuildOptions = {};
    if (values.lib) options.libs = values.lib;
    if (values.exclude) options.exclude = values.exclude;
    if (values.extension || values.extensions) options.extensions = values.extension ?? values.extensions;
    if (values.name !== undefined) options.name = values.name;
    if (values.version !== undefined) options.version = values.version;
    if (values['out-dir'] !== undefined) options.outDir = values['out-dir'];
    if (values.zip !== undefined) options.zip = values.zip;
    if (values.minify !== undefined || values['no-minify'] !== undefined) options.minify = values.minify ?? !values['no-minify'];
    if (values.sourcemap !== undefined || values['no-sourcemap'] !== undefined) options.sourcemap = values.sourcemap ?? !values['no-sourcemap'];
    if (values['include-wip'] !== undefined) options.includeWip = values['include-wip'];
    if (values['exclude-not-ready'] !== undefined) options.excludeNotReady = values['exclude-not-ready'];
    validateBuildOptions(options);
    if (values.config !== undefined && !values.config.trim()) {
        throw new Error('--config requires a non-empty file path.');
    }
    return {options, config: values.config, help: values.help ?? false, dryRun: values['dry-run'] ?? false};
}

function resolvePaths(options: BuildOptions, directory: string, registeredGroups: Set<string>): BuildOptions {
    const resolved = {...options};
    for (const key of ['outDir', 'zip', 'viteConfig'] as const) {
        if (options[key]) {
            resolved[key] = Path.resolve(directory, options[key]);
        }
    }
    if (Array.isArray(options.extensions)) {
        resolved.extensions = options.extensions.map(source => registeredGroups.has(source) ? source : Path.resolve(directory, source));
    }
    return resolved;
}

export async function loadBuildOptions(parsed: ReturnType<typeof parseBuildArgs>, rootDir = process.cwd()): Promise<BuildOptions> {
    const configFile = parsed.config ? Path.resolve(rootDir, parsed.config) : undefined;
    let config: BuildOptions = {};
    if (configFile) {
        const input: unknown = await fs.readJSON(configFile);
        validateBuildOptions(input);
        config = input;
    }
    const registeredGroups = new Set<string>();
    if (Array.isArray(config.extensions) || Array.isArray(parsed.options.extensions)) {
        const registryPath = Path.join(rootDir, 'exts/libs.json');
        if (await fs.pathExists(registryPath)) {
            const registry: unknown = await fs.readJSON(registryPath);
            if (registry && typeof registry === 'object' && !Array.isArray(registry)) {
                Object.keys(registry).forEach(name => registeredGroups.add(name));
            }
        }
    }
    config = resolvePaths(config, configFile ? Path.dirname(configFile) : rootDir, registeredGroups);
    const cli = resolvePaths(parsed.options, rootDir, registeredGroups);
    const options: BuildOptions = {...config, ...cli};
    if (config.exclude || cli.exclude) {
        options.exclude = [...new Set([...(config.exclude ?? []), ...(cli.exclude ?? [])])];
    }
    if (configFile) {
        const inputPath = await fs.realpath(configFile);
        if (options.zip && (options.zip === configFile || (await fs.pathExists(options.zip) && await fs.realpath(options.zip) === inputPath))) {
            throw new Error('ZIP output must not overwrite the build configuration file.');
        }
        for (const directory of [Path.resolve(rootDir, 'build'), options.outDir ?? Path.resolve(rootDir, 'dist')]) {
            const target = await fs.pathExists(directory) ? await fs.realpath(directory) : directory;
            const relative = Path.relative(target, inputPath);
            if (!relative || (!Path.isAbsolute(relative) && relative !== '..' && !relative.startsWith(`..${Path.sep}`))) {
                throw new Error(`Configuration file "${configFile}" is inside a build output directory.`);
            }
        }
    }
    return options;
}
