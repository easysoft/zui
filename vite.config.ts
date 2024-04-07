import Path, {dirname} from 'path';
import fs from 'fs-extra';
import {defineConfig, mergeConfig, type UserConfig, type LibraryOptions} from 'vite';
import {blue} from 'colorette';
import eslint from 'vite-plugin-eslint';
import {viteZip} from 'vite-plugin-zip-file';
import preact from '@preact/preset-vite';
import configDevServer from './scripts/dev/config-server';
import {getLibs} from './scripts/libs/query';
import {LibInfo} from './scripts/libs/lib-info';
import packageJson from './package.json';

function getLibByPath(path: string, libsCache: Record<string, LibInfo>): LibInfo | undefined {
    const nodeModulesFlag = `${Path.sep}node_modules${Path.sep}`;
    const nodeModulesIndex = path.indexOf(nodeModulesFlag);
    if (nodeModulesIndex > -1) {
        const nodeModulePath = path.substring(nodeModulesIndex + nodeModulesFlag.length);
        return Object.values(libsCache).find((x) => nodeModulePath.startsWith(`${x.name}${Path.sep}`));
    }
    return Object.values(libsCache).find((x) => path.startsWith(`${x.zui.path}${Path.sep}`));
}

export default defineConfig(async ({mode}) => {
    const buildLibs = process.env.BUILD_LIBS ?? 'buildIn';
    const libsCache: Record<string, LibInfo> | undefined = await getLibs(buildLibs.split(','));

    const configFile = process.env.VITE_EXTRA_CONFIG;
    let extraBuildConfig: Partial<UserConfig> | undefined;
    let libFileName = 'zui';
    if (configFile) {
        const configFromFile = Path.isAbsolute(configFile) ? configFile : Path.resolve(__dirname, configFile);
        extraBuildConfig = await fs.readJSON(configFromFile);
        const lib = extraBuildConfig?.build?.lib;
        if (lib && typeof lib.fileName === 'string') {
            libFileName = lib.fileName || libFileName;
        }
        console.log(blue('merged extra vite config file:'), '\n', Path.relative(__dirname, configFromFile) + '\n');
    }

    let viteConfig: UserConfig = {
        base: './',
        build: {
            outDir: 'dist/dev',
            rollupOptions: {
                output: {
                    assetFileNames: (chunkInfo) => {
                        if (chunkInfo.name == 'style.css' && viteConfig.build?.lib) {
                            return `${libFileName}.css`;
                        }
                        return chunkInfo.name ?? 'noname';
                    },
                },
            },
            assetsInlineLimit: 256,
            sourcemap: true,
            cssMinify: false,
        },
        esbuild: {
            jsxFactory: 'h',
            jsxFragment: 'Fragment',
            jsxInject: 'import {h} from \'preact\'',
        },
        resolve: {
            preserveSymlinks: true,
            alias: [
                {find: /^@zui\/(.*)/, replacement: `${__dirname}/lib/$1`},
                {find: 'zui-dev', replacement: `${__dirname}/dev`},
                {find: 'zui-config', replacement: `${__dirname}/config`},
                {find: '~/', replacement: `${__dirname}/`},
                {find: '@/', replacement: '/', customResolver: (source, importer) => {
                    if (!importer) {
                        return;
                    }
                    const lib = getLibByPath(importer, libsCache);
                    if (!lib) {
                        return Path.join(__dirname, source);
                    }
                    if (source.startsWith('/public/') && mode !== 'development') {
                        return `/${lib.zui.publicPath || lib.zui.name}/${source.replace('/public/', '')}`;
                    }
                    return Path.join(lib.zui.path, source);
                }},
                ...Object.values(libsCache).reduce<{find: string, replacement: string}[]>((aliasList, info) => {
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
            __BUILD_TIME__: Date.now(),
            __APP_VERSION__: JSON.stringify(packageJson.version),
        },
        experimental: {
            renderBuiltUrl(filename: string, {type}: {hostId: string, hostType: 'js' | 'css' | 'html', type: 'public' | 'asset'}) {
                if (type === 'public') {
                    return `./${filename}`;
                }
                return {relative: true};
            },
        },
    };

    if (extraBuildConfig) {
        viteConfig = mergeConfig(viteConfig, extraBuildConfig);
        const lib = viteConfig.build!.lib as LibraryOptions;
        lib.fileName = (format) => {
            if (format === 'umd') {
                return `${libFileName}.js`;
            }
            if (format === 'es') {
                return `${libFileName}.esm.js`;
            }
            return `${libFileName}.${format}.js`;
        };
    }

    viteConfig = mergeConfig(viteConfig, {
        plugins: [
            eslint(),
            ...(mode === 'development' ? [
                preact(),
                configDevServer({
                    rootPath: __dirname,
                }),
            ] : []),
            ...(process.env.ZIP ? [
                viteZip({
                    folderPath: viteConfig.build!.outDir,
                    outPath: process.env.ZIP_OUT ?? dirname(viteConfig.build!.outDir!),
                    zipName: process.env.ZIP,
                }),
            ] : []),
        ],
    });

    return viteConfig;
});
