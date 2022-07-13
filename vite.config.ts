import {fs, path as Path} from 'zx';
import {defineConfig, mergeConfig} from 'vite';
import minimist from 'minimist';
import eslint from 'vite-plugin-eslint';

export default defineConfig(async () => {
    const {config: configFile} = minimist(process.argv.slice(4));
    let viteConfig: Record<string, unknown> = {
        plugins: [eslint()],
        build: {
            outDir: 'dist/dev',
        },
    };
    if (configFile) {
        const configFromFile = Path.isAbsolute(configFile) ? configFile : Path.resolve(__dirname, configFile);
        const extraBuildConfig = await fs.readJSON(configFromFile);
        viteConfig = mergeConfig(viteConfig, extraBuildConfig);
    }

    return viteConfig;
});
