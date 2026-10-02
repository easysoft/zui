import {execFile} from 'node:child_process';
import {promises as fs} from 'node:fs';
import Path from 'node:path';
import {pathToFileURL} from 'node:url';
import {promisify} from 'node:util';
import {afterAll, beforeAll, expect, test} from 'vitest';

const execFileAsync = promisify(execFile);
const root = Path.resolve(import.meta.dirname, '../..');
const fixture = Path.join(root, 'test-results/build-plan');
const extensions = Path.join(fixture, 'extensions');
const output = Path.join(fixture, 'output');
const pnpm = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';

async function write(file: string, content: string) {
    await fs.mkdir(Path.dirname(file), {recursive: true});
    await fs.writeFile(file, content);
}

beforeAll(async () => {
    await fs.rm(fixture, {recursive: true, force: true});
    for (const name of ['alpha', 'beta']) {
        await write(Path.join(extensions, name, 'package.json'), JSON.stringify({
            name: `@build-fixture/${name}`,
            version: '1.0.0',
            type: 'module',
            main: './src/main.ts',
            exports: {'.': './src/main.ts', './skin': './src/style.css'},
            files: ['src'],
            zui: {type: 'component', publicPath: name, prebuild: name === 'alpha' ? 'node ./generate-theme.cjs' : undefined},
        }));
        await write(Path.join(extensions, name, 'src/main.ts'), name === 'alpha'
            ? 'import value from "fixture-value"; export const alpha = value;'
            : 'export const beta = "unselected";');
        await write(Path.join(extensions, name, 'src/style.css'), '.build-fixture { @apply -p-3; color: red; }');
        await write(Path.join(extensions, name, 'public/proof.txt'), name);
    }
    await write(Path.join(extensions, 'alpha/tailwind.cjs'), 'module.exports = require("./tailwind-theme");');
    await write(Path.join(extensions, 'alpha/tailwind-theme/index.cjs'), `const colors = require('./colors');
        module.exports = ({config}) => {Object.assign(config.theme.extend.colors, colors);};`);
    await write(Path.join(extensions, 'alpha/generate-theme.cjs'), `require('node:fs').writeFileSync('./tailwind-theme/colors.js', 'module.exports = {extensionOnly: "#13579b"};');`);
    await write(Path.join(extensions, 'alpha/src/style.css'), '.build-fixture { @apply -p-3; color: red; background-color: theme("colors.extensionOnly"); }');
    await write(Path.join(fixture, 'custom.vite.mjs'), `export default async ({command, mode}) => ({
        resolve: {alias: [{find: 'fixture-value', replacement: 'virtual:fixture-value', customResolver() {return '\\0fixture-value';}}]},
        plugins: [{
            name: 'build-plan-proof',
            load(id) {if (id === '\\0fixture-value') return 'export default "from-resolver";';},
            generateBundle() {this.emitFile({type: 'asset', fileName: 'plugin-proof.txt', source: command + ':' + mode});}
        }]
    });`);
    await write(Path.join(fixture, 'build.json'), JSON.stringify({
        name: 'zui-plan-test',
        libs: ['@build-fixture/alpha'],
        // The CLI source must replace this deliberately missing config source.
        extensions: ['./not-used'],
        outDir: './output',
        minify: false,
        sourcemap: false,
        exports: {'@build-fixture/alpha': [{}, {path: 'skin', sideEffect: true}]},
        viteConfig: './custom.vite.mjs',
    }));
    await execFileAsync(pnpm, ['build', '--config', Path.join(fixture, 'build.json'), '--extension', Path.relative(root, extensions)], {
        cwd: root,
        env: {...process.env, CI: '1'},
        maxBuffer: 20 * 1024 * 1024,
    });
}, 120_000);

afterAll(async () => {
    await fs.rm(fixture, {recursive: true, force: true});
});

test('builds a CLI extension source with structured exports and executable Vite configuration', async () => {
    const module = await import(pathToFileURL(Path.join(output, 'zui-plan-test.esm.js')).href);
    expect(module.alpha).toBe('from-resolver');
    expect(module.beta).toBeUndefined();
    expect(await fs.readFile(Path.join(output, 'plugin-proof.txt'), 'utf8')).toBe('build:production');
    expect(await fs.readFile(Path.join(output, 'alpha/proof.txt'), 'utf8')).toBe('alpha');
    await expect(fs.stat(Path.join(output, 'beta'))).rejects.toMatchObject({code: 'ENOENT'});
    const css = await fs.readFile(Path.join(output, 'zui-plan-test.css'), 'utf8');
    expect(css).toMatch(/\.build-fixture\s*\{/);
    expect(css).toMatch(/padding:\s*0\.75rem/);
    expect(css).toMatch(/color:\s*red/);
    expect(css).toMatch(/background-color:\s*#13579b/);
    expect(css).toContain('\n');
    const files = await fs.readdir(output);
    expect(files).toContain('zui-plan-test.js');
    expect(files.some(file => file.endsWith('.map'))).toBe(false);
    await expect(fs.stat(Path.join(root, 'build/vite.config.json'))).rejects.toMatchObject({code: 'ENOENT'});
});
