import Path from 'path';
import fs from 'fs-extra';
import {defineConfig, mergeConfig, UserConfig, PluginOption, LibraryOptions} from 'vite';
import minimist from 'minimist';
import eslint from 'vite-plugin-eslint';
import css from 'rollup-plugin-css-only';

export default defineConfig(async () => {
    const {config: configFile} = minimist(process.argv.slice(4));
    let viteConfig: UserConfig = {
        build: {
            outDir: 'dist/dev',
        },
    };
    if (configFile) {
        const configFromFile = Path.isAbsolute(configFile) ? configFile : Path.resolve(__dirname, configFile);
        const extraBuildConfig = await fs.readJSON(configFromFile);
        viteConfig = mergeConfig(viteConfig, extraBuildConfig);
    }

    return mergeConfig(viteConfig, {
        plugins: [
            eslint(),
            css({output: `${(viteConfig.build?.lib as LibraryOptions)?.fileName ?? 'style'}.css`}) as PluginOption,
        ],
    });
});
