import Path from 'node:path';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';
import fs from 'fs-extra';
import {getLibs} from '../libs/query';
import {LibInfo} from '../libs/lib-info';
import {LibType} from '../libs/lib-type';

export interface BuildExport {
    path?: string;
    targets?: Record<string, string>;
    sideEffect?: boolean;
}

/** Declarative input shared by JSON configuration and the CLI. */
export interface BuildOptions {
    libs?: string[];
    exclude?: string[];
    name?: string;
    version?: string;
    outDir?: string;
    extensions?: boolean | string[];
    dependencies?: Record<string, string>;
    exports?: Record<string, BuildExport[]>;
    externals?: Record<string, string>;
    css?: {minify?: boolean; remToPx?: boolean; preflight?: boolean};
    minify?: boolean;
    sourcemap?: boolean;
    zip?: string;
    includeWip?: boolean;
    excludeNotReady?: boolean;
    viteConfig?: string;
}

export interface BuildLibInfo extends LibInfo {
    exportList?: BuildExport[];
}

/** Fully resolved, serializable build input. Resolving a plan never writes files. */
export interface BuildPlan {
    rootDir: string;
    buildDir: string;
    outDir: string;
    entry: string;
    publicDir: string;
    fileName: string;
    name: string;
    version: string;
    libs: BuildLibInfo[];
    libsMap: Record<string, LibInfo>;
    sources: string[];
    entries: string[];
    dependencies: Record<string, string>;
    tailwindConfigs: string[];
    minify: boolean;
    sourcemap: boolean;
    css: {minify: boolean; remToPx: boolean; preflight: boolean};
    externals: Record<string, string>;
    zip?: string;
    viteConfig?: string;
}

export const BUILD_MIGRATION = 'Use repeated --lib button --lib dropdown, --extension <group-or-directory>, or --config ./build.json. See --help.';
const optionKeys = ['libs', 'exclude', 'name', 'version', 'outDir', 'extensions', 'dependencies', 'exports', 'externals', 'css', 'minify', 'sourcemap', 'zip', 'includeWip', 'excludeNotReady', 'viteConfig'];
const execFileAsync = promisify(execFile);
const identifier = /^[A-Za-z_$][\w$]*$/;
const packageName = /^(?:@[a-z0-9][\w.-]*\/)?[a-z0-9][\w.-]*$/;

function record(value: unknown, label: string): asserts value is Record<string, unknown> {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        throw new Error(`${label} must be an object. ${BUILD_MIGRATION}`);
    }
}

function keys(value: Record<string, unknown>, allowed: string[], label: string) {
    const unknown = Object.keys(value).find(key => !allowed.includes(key));
    if (unknown) {
        throw new Error(`Unknown ${label} field "${unknown}". ${BUILD_MIGRATION}`);
    }
}

function nonempty(value: unknown, label: string): asserts value is string {
    if (typeof value !== 'string' || !value.trim() || value !== value.trim()) {
        throw new Error(`${label} must be a non-empty string without surrounding whitespace.`);
    }
}

function stringArray(value: unknown, label: string): asserts value is string[] {
    if (!Array.isArray(value)) {
        throw new Error(`${label} must be an array of strings. ${BUILD_MIGRATION}`);
    }
    value.forEach(item => nonempty(item, label));
}

/** Validate JSON before it can influence a build or its output directories. */
export function validateBuildOptions(value: unknown): asserts value is BuildOptions {
    record(value, 'Build options');
    keys(value, optionKeys, 'build option');
    for (const key of ['name', 'version', 'outDir', 'zip', 'viteConfig']) {
        if (value[key] !== undefined) {
            nonempty(value[key], key);
        }
    }
    for (const key of ['minify', 'sourcemap', 'includeWip', 'excludeNotReady']) {
        if (value[key] !== undefined && typeof value[key] !== 'boolean') {
            throw new Error(`${key} must be a boolean.`);
        }
    }
    for (const key of ['libs', 'exclude']) {
        if (value[key] !== undefined) {
            stringArray(value[key], key);
        }
    }
    if (value.extensions !== undefined && typeof value.extensions !== 'boolean') {
        stringArray(value.extensions, 'extensions');
    }
    for (const key of ['dependencies', 'externals']) {
        if (value[key] !== undefined) {
            record(value[key], key);
            Object.entries(value[key]).forEach(([name, item]) => {
                if (!packageName.test(name)) {
                    throw new Error(`Invalid package name "${name}" in ${key}.`);
                }
                nonempty(item, `${key}.${name}`);
            });
        }
    }
    if (value.css !== undefined) {
        record(value.css, 'css');
        keys(value.css, ['minify', 'remToPx', 'preflight'], 'css');
        for (const [key, item] of Object.entries(value.css)) {
            if (typeof item !== 'boolean') {
                throw new Error(`css.${key} must be a boolean.`);
            }
        }
    }
    if (value.exports !== undefined) {
        record(value.exports, 'exports');
        for (const [name, items] of Object.entries(value.exports)) {
            if (!Array.isArray(items) || !items.length) {
                throw new Error(`exports.${name} must be a non-empty array.`);
            }
            for (const item of items) {
                record(item, `exports.${name}`);
                keys(item, ['path', 'targets', 'sideEffect'], 'export');
                if (item.path !== undefined) {
                    nonempty(item.path, 'Export path');
                    const path = item.path.replace(/^\.\//, '');
                    if (Path.isAbsolute(path) || /[\\?#]/.test(path) || path.split('/').some(part => !part || part === '.' || part === '..')) {
                        throw new Error(`Invalid export path "${item.path}".`);
                    }
                }
                if (item.sideEffect !== undefined && typeof item.sideEffect !== 'boolean') {
                    throw new Error('sideEffect must be a boolean.');
                }
                if (item.targets !== undefined) {
                    record(item.targets, 'Export targets');
                    if (item.sideEffect || !Object.keys(item.targets).length) {
                        throw new Error('Export targets must be non-empty and cannot be combined with sideEffect.');
                    }
                    for (const [target, alias] of Object.entries(item.targets)) {
                        if ((target !== '*' && !identifier.test(target)) || typeof alias !== 'string' || !identifier.test(alias)) {
                            throw new Error(`Invalid export target "${target}" or alias "${String(alias)}".`);
                        }
                    }
                    if ('*' in item.targets && Object.keys(item.targets).length !== 1) {
                        throw new Error('A namespace export cannot be combined with named exports.');
                    }
                }
            }
        }
    }
}

/** Only package metadata retains the old defaultExport notation. */
function defaultExport(statement: string): BuildExport {
    if (statement.startsWith('>')) {
        return {path: statement.slice(1).replace(/^\.\//, ''), sideEffect: true};
    }
    if (!statement.includes('@')) {
        return statement ? {path: statement.replace(/^\.\//, '')} : {};
    }
    const [targetPart, path] = statement.split('@');
    if (targetPart === '*') {
        return {path: path || undefined};
    }
    const targets = Object.fromEntries(targetPart.replace(/^{|}$/g, '').split(',').map((target) => {
        const [name, alias] = target.trim().split(':');
        return [name, alias ?? name];
    }));
    return {path: path || undefined, targets};
}

function exportStatement(item: BuildExport, lib: LibInfo) {
    const path = item.path?.replace(/^\.\//, '');
    if (path && lib.zui.sourceType !== 'npm') {
        const exported = lib.exports && Object.keys(lib.exports).some(key => key === `./${path}` || (key.includes('*') && path.startsWith(key.slice(2).split('*')[0])));
        const inFiles = lib.files?.some((file) => {
            const prefix = file.replace(/^\.\//, '').split('*')[0].replace(/\/$/, '');
            return path === prefix || path.startsWith(`${prefix}/`);
        });
        if (!exported && !inFiles) {
            throw new Error(`Export path "${path}" is not in lib "${lib.name}"; check files and exports in ${lib.zui.packageJsonPath}.`);
        }
    }
    const specifier = JSON.stringify(`${lib.name}${path ? `/${path}` : ''}`);
    if (item.sideEffect) {
        return `import ${specifier};`;
    }
    if (!item.targets) {
        return `export * from ${specifier};`;
    }
    if (item.targets['*']) {
        return `export * as ${item.targets['*']} from ${specifier};`;
    }
    const targets = Object.entries(item.targets).map(([name, alias]) => name === alias ? name : `${name} as ${alias}`);
    return `export {${targets.join(', ')}} from ${specifier};`;
}

function isWithin(path: string, directory: string) {
    const relative = Path.relative(directory, path);
    return relative === '' || (!relative.startsWith(`..${Path.sep}`) && relative !== '..' && !Path.isAbsolute(relative));
}

async function canonical(path: string): Promise<string> {
    if (await fs.pathExists(path)) {
        return fs.realpath(path);
    }
    return Path.join(await canonical(Path.dirname(path)), Path.basename(path));
}

async function validateDirectories(plan: BuildPlan) {
    const protectedPaths = await Promise.all([plan.rootDir, ...plan.sources, ...['src', 'scripts', 'config', 'dev', 'docs/docs', 'docs/_/.vitepress', 'docs/package.json', 'docs/tsconfig.json', 'docs/tailwind.config.cjs', 'docs/postcss.config.mjs', 'tests', 'node_modules', '.git', '.agents', '.codex', '.github', '.claude', '.codex-plugin', '.vscode', 'licenses', 'patches', 'public', 'publish', 'skills', 'skills-exts'].map(path => Path.join(plan.rootDir, path))].map(canonical));
    const [buildDir, outDir] = await Promise.all([plan.buildDir, plan.outDir].map(canonical));
    // Track additional source locations without blocking existing untracked output directories.
    const trackedFiles = await fs.pathExists(Path.join(plan.rootDir, '.git'))
        ? (await execFileAsync('git', ['ls-files', '-z'], {cwd: plan.rootDir, maxBuffer: 10 * 1024 * 1024})).stdout.split('\0').filter(Boolean).map(file => Path.resolve(protectedPaths[0], file))
        : [];
    for (const destination of [buildDir, outDir]) {
        if (protectedPaths.some((source, index) => isWithin(source, destination) || (index > 0 && isWithin(destination, source))) || trackedFiles.some(file => isWithin(file, destination))) {
            throw new Error(`Unsafe build directory "${destination}": overlaps the project or source files.`);
        }
        if (await fs.pathExists(destination) && !(await fs.stat(destination)).isDirectory()) {
            throw new Error(`Build directory "${destination}" is not a directory.`);
        }
    }
    if (isWithin(buildDir, outDir) || isWithin(outDir, buildDir)) {
        throw new Error('Build and output directories must not overlap.');
    }
    if (plan.viteConfig) {
        const input = await canonical(plan.viteConfig);
        if (isWithin(input, buildDir) || isWithin(input, outDir)) {
            throw new Error('Vite configuration must not be inside a build output directory.');
        }
        if (!(await fs.pathExists(plan.viteConfig)) || !(await fs.stat(plan.viteConfig)).isFile()) {
            throw new Error(`Vite configuration file does not exist: ${plan.viteConfig}`);
        }
    }
    if (plan.zip) {
        const zip = await canonical(plan.zip);
        if (trackedFiles.includes(zip) || (plan.viteConfig && zip === await canonical(plan.viteConfig)) || protectedPaths.some((source, index) => index > 0 && isWithin(zip, source)) || isWithin(zip, buildDir) || zip === outDir || (Path.dirname(zip) === plan.rootDir && await fs.pathExists(zip))) {
            throw new Error(`Unsafe ZIP output "${plan.zip}".`);
        }
    }
}

export async function resolveBuildPlan(options: BuildOptions, rootDir = process.cwd()): Promise<BuildPlan> {
    validateBuildOptions(options);
    rootDir = Path.resolve(rootDir);
    const sources = [Path.join(rootDir, 'lib')];
    const libsMap = await getLibs('buildIn', {root: rootDir, cache: false});
    if (options.extensions) {
        const registryPath = Path.join(rootDir, 'exts/libs.json');
        const registry: Record<string, string> = await fs.pathExists(registryPath) ? await fs.readJSON(registryPath) : {};
        record(registry, 'Extension registry');
        const selected = options.extensions === true ? Object.keys(registry) : options.extensions;
        for (const source of selected) {
            let path = registry[source];
            if (path !== undefined) {
                nonempty(path, `Extension ${source}`);
                path = Path.resolve(rootDir, path.replace(/[/\\]\*$/, ''));
            } else {
                path = Path.resolve(rootDir, source);
                if (!(await fs.pathExists(path))) {
                    throw new Error(`Unknown extension group or directory "${source}".`);
                }
            }
            if (!(await fs.pathExists(path)) || !(await fs.stat(path)).isDirectory()) {
                throw new Error(`Invalid extension directory "${path}".`);
            }
            if (sources.includes(path)) {
                continue;
            }
            const packagePath = Path.join(path, 'package.json');
            const pkg = await fs.pathExists(packagePath) ? await fs.readJSON(packagePath) : undefined;
            const collectionPath = Path.join(path, 'lib');
            const discoveryPath = !pkg?.zui && await fs.pathExists(collectionPath) && (await fs.stat(collectionPath)).isDirectory() ? collectionPath : path;
            const extensions = await getLibs(discoveryPath, {root: rootDir, cache: false, sourceType: 'exts', extsName: source, hasSubs: !pkg?.zui, idx: sources.length});
            if (!Object.keys(extensions).length) {
                throw new Error(`No extension libraries found in "${path}".`);
            }
            Object.assign(libsMap, extensions);
            sources.push(path);
        }
    }
    const byName = Object.fromEntries(Object.values(libsMap).map(lib => [lib.zui.sourceType === 'build-in' ? lib.zui.name : lib.name, lib]));
    const lookup = (name: string) => {
        if (!Object.hasOwn(byName, name)) {
            throw new Error(`Unknown library "${name}". Built-in libraries use short names; extensions use full package names. ${BUILD_MIGRATION}`);
        }
        return byName[name];
    };
    const excluded = new Set((options.exclude ?? []).map(name => lookup(name).name));
    let libs: BuildLibInfo[] = (options.libs ? options.libs.map(lookup) : Object.values(libsMap).filter(lib => (!lib.zui.wip || options.includeWip) && !lib.zui.separately)).filter(lib => !excluded.has(lib.name) && !(options.excludeNotReady && lib.zui.notReady));
    const replaced = new Set(libs.flatMap(lib => lib.zui.sourceType === 'exts' ? (lib.zui.replace ?? '').split(',').map(name => name.trim()) : []));
    libs = [...new Map(libs.filter(lib => !replaced.has(lib.name) && !replaced.has(lib.zui.name)).map(lib => [lib.name, {...lib, zui: {...lib.zui}}])).values()].sort((a, b) => a.zui.order - b.zui.order);
    for (const [name, version] of Object.entries(options.dependencies ?? {})) {
        if (Object.values(libsMap).some(lib => lib.name === name)) {
            throw new Error(`Dependency "${name}" is already a discovered library; select it using libs.`);
        }
        libs.push({name, version, zui: {name, displayName: name, type: LibType.other, sourceType: 'npm', path: '', order: 0}});
    }
    if (!libs.length) {
        throw new Error('Cannot build an empty library selection.');
    }
    for (const name of Object.keys(options.exports ?? {})) {
        if (!libs.some(lib => (lib.zui.sourceType === 'build-in' ? lib.zui.name : lib.name) === name)) {
            throw new Error(`Export override "${name}" does not match a selected library.`);
        }
    }
    const packageJson = await fs.readJSON(Path.join(rootDir, 'package.json'));
    const name = options.name ?? (options.libs ? (libs.length === 1 ? libs[0].zui.name.replace(/^@/, '').replace(/\//g, '-') : 'zui-custom') : 'zui');
    if (!/^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(name)) {
        throw new Error(`Invalid build name "${name}": use a filename without path separators.`);
    }
    const version: string = options.version ?? packageJson.version;
    nonempty(version, 'Build version');
    const buildDir = Path.join(rootDir, 'build');
    const dependencies: Record<string, string> = {};
    const entries: string[] = [];
    for (const lib of libs) {
        nonempty(lib.version, `Version for ${lib.name}`);
        dependencies[lib.name] = lib.zui.sourceType === 'npm' ? lib.version : `link:${Path.relative(buildDir, lib.zui.path)}`;
        const key = lib.zui.sourceType === 'build-in' ? lib.zui.name : lib.name;
        lib.exportList = options.exports?.[key] ?? (lib.zui.defaultExport ? [defaultExport(lib.zui.defaultExport)] : [{}]);
        entries.push(...lib.exportList.map(item => exportStatement(item, lib)));
    }
    const minify = options.minify ?? true;
    const plan: BuildPlan = {
        rootDir, buildDir, outDir: Path.resolve(rootDir, options.outDir ?? `dist/${name}`), entry: Path.join(buildDir, 'main.ts'), publicDir: Path.join(buildDir, 'public'),
        name, version, fileName: name.includes('zui') ? name : `zui.${name}`, libs, libsMap, sources, entries, dependencies,
        tailwindConfigs: libs.flatMap(lib => lib.zui.tailwindConfigPath ? [lib.zui.tailwindConfigPath] : []),
        minify, sourcemap: options.sourcemap ?? true,
        css: {minify: minify && (options.css?.minify ?? true), remToPx: options.css?.remToPx ?? false, preflight: options.css?.preflight ?? true},
        externals: options.externals ?? {}, zip: options.zip ? Path.resolve(rootDir, options.zip) : undefined, viteConfig: options.viteConfig ? Path.resolve(rootDir, options.viteConfig) : undefined,
    };
    await validateDirectories(plan);
    return plan;
}
