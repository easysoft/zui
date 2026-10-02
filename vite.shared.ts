import Path from 'node:path';
import {fileURLToPath} from 'node:url';
import type {Alias, ResolverFunction, UserConfig} from 'vite';
import type {LibInfo} from './scripts/libs/lib-info';
import packageJson from './package.json';

const projectRoot = Path.dirname(fileURLToPath(import.meta.url));

export interface SharedViteConfigOptions {
    mode?: string;
    rootPath?: string;
    libsCache?: Record<string, LibInfo>;
    /** Packages allowed to replace other libraries; omitted enables all discovered extensions. */
    replacementLibs?: string[];
    buildHash?: string;
    buildTime?: number;
    appVersion?: string;
}

function getLibByPath(path: string, libsCache: Record<string, LibInfo>): LibInfo | undefined {
    const nodeModulesFlag = `${Path.sep}node_modules${Path.sep}`;
    const nodeModulesIndex = path.indexOf(nodeModulesFlag);
    if (nodeModulesIndex > -1) {
        const nodeModulePath = path.substring(nodeModulesIndex + nodeModulesFlag.length);
        return Object.values(libsCache).find(x => nodeModulePath.startsWith(`${x.name}${Path.sep}`));
    }
    return Object.values(libsCache).find(x => path.startsWith(`${x.zui.path}${Path.sep}`));
}

/** Resolve library aliases through package exports when a subpath is declared. */
function resolveLibExportPath(updatedId: string, libsCache: Record<string, LibInfo>): string | undefined {
    const lib = Object.values(libsCache).find(x => updatedId === x.zui.path || updatedId.startsWith(`${x.zui.path}${Path.sep}`));
    if (!lib) {
        return;
    }
    const relative = Path.relative(lib.zui.path, updatedId).replace(/\\/g, '/');
    if (!relative || relative === '.') {
        return;
    }
    const exportPath = lib.exports?.[`./${relative}`];
    return exportPath ? Path.resolve(lib.zui.path, exportPath) : undefined;
}

/**
 * Vite settings shared by the dev/build pipeline and Vitest.
 *
 * This factory performs no filesystem writes, process execution, server setup, or
 * linting. Callers own discovery of the libraries they want to expose.
 */
export function createSharedViteConfig(options: SharedViteConfigOptions = {}): UserConfig {
    const {
        mode = 'test',
        rootPath = projectRoot,
        libsCache = {},
        replacementLibs,
        buildHash = 'test',
        buildTime = 0,
        appVersion = packageJson.version,
    } = options;

    const resolveLibraryAlias: ResolverFunction = function (source, importer, resolveOptions) {
        const exportResolved = resolveLibExportPath(source, libsCache);
        if (exportResolved) {
            return exportResolved;
        }
        return this.resolve(source, importer, Object.assign({skipSelf: true}, resolveOptions)).then(resolved => resolved || {id: source});
    };
    const replacements = replacementLibs ? new Set(replacementLibs) : undefined;
    const replacementAliases: Alias[] = [];
    const extensionAliases: Alias[] = [];
    Object.values(libsCache).forEach((lib) => {
        if (lib.zui.sourceType !== 'exts') {
            return;
        }
        const alias = {replacement: lib.zui.path, customResolver: resolveLibraryAlias};
        extensionAliases.push({find: lib.name, ...alias});
        if (!replacements || replacements.has(lib.name)) {
            (lib.zui.replace ?? '').split(',').map(name => name.trim()).filter(Boolean).forEach((name) => {
                const target = libsCache[name]?.name ?? (name.startsWith('@') ? name : `@zui/${name}`);
                replacementAliases.push({find: target, ...alias});
            });
        }
    });

    return {
        esbuild: {
            jsxFactory: 'h',
            jsxFragment: 'Fragment',
            jsxInject: 'import {h} from \'preact\'',
        },
        resolve: {
            preserveSymlinks: true,
            alias: [
                ...replacementAliases,
                ...extensionAliases,
                {
                    find: /^@zui\/(.+)$/,
                    replacement: `${rootPath}/lib/$1`,
                    customResolver: resolveLibraryAlias,
                },
                {find: 'zui-dev', replacement: `${rootPath}/dev`},
                {find: 'zui-config', replacement: `${rootPath}/config`},
                {find: '~/', replacement: `${rootPath}/`},
                {
                    find: '@/',
                    replacement: '/',
                    customResolver: (source, importer) => {
                        if (!importer) {
                            return;
                        }
                        const lib = getLibByPath(importer, libsCache);
                        if (!lib) {
                            return Path.join(rootPath, source);
                        }
                        if (source.startsWith('/public/') && mode !== 'development') {
                            return `/${lib.zui.publicPath || lib.zui.name}/${source.replace('/public/', '')}`;
                        }
                        return Path.join(lib.zui.path, source);
                    },
                },
            ],
        },
        define: {
            'process.env.NODE_ENV': JSON.stringify(mode),
            __BUILD_MODE__: JSON.stringify(mode),
            __BUILD_TIME__: buildTime,
            __BUILD_HASH__: JSON.stringify(buildHash),
            __APP_VERSION__: JSON.stringify(appVersion),
        },
    };
}
