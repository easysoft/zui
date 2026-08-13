import Path, {dirname} from 'path';
import fs from 'fs-extra';
import {execSync} from 'child_process';
import {defineConfig, mergeConfig, type UserConfig, type LibraryOptions} from 'vite';
import {blue} from 'colorette';
import eslint from 'vite-plugin-eslint';
import {viteZip} from 'vite-plugin-zip-file';
import preact from '@preact/preset-vite';
import configDevServer from './scripts/dev/config-server';
import type {LibInfo} from './scripts/libs/lib-info';
import {getLibs} from './scripts/libs/query';
import {createSharedViteConfig} from './vite.shared';

/**
 * Extension collections are symlinked as `exts/<group>/<lib>/`. Their
 * `tsconfig.json` files extend `../../tsconfig.json`, which in the original
 * repo is the collection root. With `preserveSymlinks: true`, Vite resolves
 * that path to `exts/tsconfig.json` instead, so create a bridge when needed.
 */
function ensureExtsTsconfig(rootPath: string) {
    const extsDir = Path.join(rootPath, 'exts');
    const tsconfigPath = Path.join(extsDir, 'tsconfig.json');
    if (!fs.existsSync(extsDir) || fs.existsSync(tsconfigPath)) {
        return;
    }
    fs.writeFileSync(tsconfigPath, `${JSON.stringify({extends: '../tsconfig.json'}, null, 4)}\n`);
}

export default defineConfig(async ({mode}) => {
    ensureExtsTsconfig(__dirname);
    const buildLibs = process.env.BUILD_LIBS ?? 'buildIn';
    const noMinify = process.env.NO_MINIFY === 'true' || process.env.NO_MINIFY === '1';
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

    const buildHash = execSync('git rev-parse HEAD').toString().trim();
    let viteConfig: UserConfig = mergeConfig(createSharedViteConfig({
        mode,
        rootPath: __dirname,
        libsCache,
        buildHash,
        buildTime: Date.now(),
    }), {
        base: './',
        build: {
            outDir: 'dist/dev',
            target: ['chrome107', 'edge107', 'firefox104', 'safari16'],
            rollupOptions: {
                output: {
                    assetFileNames: (chunkInfo: {name?: string}) => chunkInfo.name ?? 'noname',
                },
            },
            assetsInlineLimit: 256,
            sourcemap: true,
            cssMinify: false,
            minify: !noMinify,
        },
        experimental: {
            renderBuiltUrl(filename: string, {type}: {hostId: string; hostType: 'js' | 'css' | 'html'; type: 'public' | 'asset'}) {
                if (type === 'public') {
                    return `./${filename}`;
                }
                return {relative: true};
            },
        },
        server: {
            allowedHosts: true,
        },
    });

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
        lib.cssFileName = libFileName;
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
