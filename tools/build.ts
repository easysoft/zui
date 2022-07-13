#!/usr/bin/env node
import 'zx/globals';
import minimist from 'minimist';
import {mergeConfig} from 'vite';
import {createBuildConfig, prepareBuildFiles, createViteConfig} from './build-tools.js';

const argv = minimist(process.argv.slice(3));

let viteConfig = {};
if (argv.viteFile) {
    try {
        const extraViteConfig = await import(argv.viteFile);
        viteConfig = mergeConfig(viteConfig, extraViteConfig);
    } catch (error) {
        throw new Error(`ZUI build: Cannot load extra config file from "${argv.viteFile}".`);
    }
}

const buildConfig = await createBuildConfig({
    libs: argv.lib ?? argv.l ?? argv.config ?? argv.c ?? argv._.join(' '),
    name: argv.name ?? argv.n,
    version: argv.version ?? argv.v,
});

const buildDir = path.resolve(process.cwd(), 'build');
await fs.emptyDir(buildDir);
await prepareBuildFiles(buildConfig, buildDir);

viteConfig = mergeConfig(viteConfig, createViteConfig(buildConfig, buildDir));
const viteConfigFile = path.resolve(buildDir, 'vite.config.json');
await fs.outputJSON(viteConfigFile, viteConfig, {spaces: 4});

await $`pnpm i --filter ${buildConfig.name}`;
await $`pnpm run build:vite -- --config ${viteConfigFile}`;
