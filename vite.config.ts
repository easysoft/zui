import Path from 'path';
import fs from 'fs-extra';
import {defineConfig, mergeConfig, UserConfig} from 'vite';
import {blue} from 'colorette';
import eslint from 'vite-plugin-eslint';
import configDevServer from './scripts/dev/config-server';
import {LibraryOptions} from 'vite';
import {getLibs} from './scripts/libs/query';
import {LibInfo} from './scripts/libs/lib-info';

export default defineConfig(async ({mode}) => {
    const buildLibs = process.env.BUILD_LIBS ?? 'buildIn';
    const libsCache: Record<string, LibInfo> | undefined = await getLibs(buildLibs);

    let viteConfig: UserConfig = {
        build: {
            outDir: 'dist/dev',
            rollupOptions: {
                output: {
                    assetFileNames: (chunkInfo) => {
                        if (chunkInfo.name == 'style.css' && viteConfig.build?.lib) {
                            return `${(viteConfig.build?.lib as LibraryOptions)?.fileName ?? 'style'}.css`;
                        }
                        return chunkInfo.name ?? 'noname';
                    },
                },
            },
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
                {find: '~@', replacement: __dirname},
                ...Object.values(libsCache).reduce<{find: string, replacement: string}[]>((aliasList, info) => {
                    if (info.zui.sourceType === 'exts') {
                        aliasList.push({find: info.name, replacement: info.zui.path});
                    }
                    return aliasList;
                }, []),
            ],
        },
        define: {
            'process.env.NODE_ENV': JSON.stringify(mode),
        },
    };

    const configFile = process.env.VITE_EXTRA_CONFIG;
    if (configFile) {
        const configFromFile = Path.isAbsolute(configFile) ? configFile : Path.resolve(__dirname, configFile);
        const extraBuildConfig = await fs.readJSON(configFromFile);
        viteConfig = mergeConfig(viteConfig, extraBuildConfig);
        console.log(blue('merged extra vite config file:'), '\n', Path.relative(__dirname, configFromFile) + '\n');
    }

    viteConfig = mergeConfig(viteConfig, {
        plugins: [
            eslint(),
            ...(mode === 'development' ? [
                configDevServer({
                    rootPath: __dirname,
                }),
            ] : []),
        ],
    });

    return viteConfig;
});
