import Path from 'path';
import fs from 'fs-extra';
import {defineConfig, mergeConfig, UserConfig} from 'vite';
import minimist from 'minimist';
import eslint from 'vite-plugin-eslint';
import configDevServer from './tools/config-dev-server';
import {LibraryOptions} from 'vite';

export default defineConfig(async ({command, mode, ssrBuild}) => {
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
    };

    const {config: configFile} = minimist(process.argv.slice(4));
    if (configFile) {
        const configFromFile = Path.isAbsolute(configFile) ? configFile : Path.resolve(__dirname, configFile);
        const extraBuildConfig = await fs.readJSON(configFromFile);
        viteConfig = mergeConfig(viteConfig, extraBuildConfig);
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
