import Path from 'node:path';
import {fileURLToPath} from 'node:url';
import type {UserConfig} from 'vite';
import type {LibInfo} from './scripts/libs/lib-info';
import packageJson from './package.json';

const projectRoot = Path.dirname(fileURLToPath(import.meta.url));

export interface SharedViteConfigOptions {
    mode?: string;
    rootPath?: string;
    libsCache?: Record<string, LibInfo>;
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

/** Resolve `@zui/<lib>/...` through package exports when a matching subpath is declared. */
function resolveZuiExportPath(updatedId: string, libsCache: Record<string, LibInfo>): string | undefined {
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
        buildHash = 'test',
        buildTime = 0,
        appVersion = packageJson.version,
    } = options;

    return {
        esbuild: {
            jsxFactory: 'h',
            jsxFragment: 'Fragment',
            jsxInject: 'import {h} from \'preact\'',
        },
        resolve: {
            preserveSymlinks: true,
            alias: [
                {
                    find: /^@zui\/(.+)$/,
                    replacement: `${rootPath}/lib/$1`,
                    customResolver(source, importer, resolveOptions) {
                        const exportResolved = resolveZuiExportPath(source, libsCache);
                        if (exportResolved) {
                            return exportResolved;
                        }
                        return this.resolve(source, importer, Object.assign({skipSelf: true}, resolveOptions)).then(resolved => resolved || {id: source});
                    },
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
                ...Object.values(libsCache).reduce<{find: string; replacement: string}[]>((aliasList, info) => {
                    if (info.zui.sourceType === 'exts') {
                        aliasList.push({find: info.name, replacement: info.zui.path});
                        if (info.zui.replace) {
                            aliasList.push({find: info.zui.replace, replacement: info.zui.path});
                        }
                    }
                    return aliasList;
                }, []),
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
