import Path from 'path';
import fs from 'fs-extra';
import minimist from 'minimist';
import {mergeConfig} from 'vite';
import {createBuildConfig, prepareBuildFiles, createViteConfig} from './build-tools.js';
import {exec} from './exec.js';

const argv = minimist(process.argv.slice(3));

let viteConfig = {};
const viteFile = argv.viteFile ?? argv.V;
if (viteFile) {
    try {
        const extraViteConfig = await import(viteFile);
        viteConfig = mergeConfig(viteConfig, extraViteConfig);
    } catch (error) {
        throw new Error(`ZUI build: Cannot load extra config file from "${viteFile}".`);
    }
}

const buildConfig = await createBuildConfig({
    libs: argv.lib ?? argv.l ?? argv.config ?? argv.c ?? argv._.join(' '),
    name: argv.name ?? argv.n,
    version: argv.version ?? argv.v,
});

const buildDir = Path.resolve(process.cwd(), 'build');
await fs.emptyDir(buildDir);
await prepareBuildFiles(buildConfig, buildDir);

viteConfig = mergeConfig(viteConfig, createViteConfig(buildConfig, {buildDir, outDir: argv.outDir ?? argv.o}));
const viteConfigFile = Path.resolve(buildDir, 'vite.config.json');
await fs.outputJSON(viteConfigFile, viteConfig, {spaces: 4});

await exec('pnpm', ['i', '--filter', buildConfig.name]);
await exec('pnpm', ['run', 'build:vite', '--', `--config=${viteConfigFile}`]);
