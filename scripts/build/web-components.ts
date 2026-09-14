import Path from 'node:path';
import {tmpdir} from 'node:os';
import fs from 'fs-extra';
import minimist from 'minimist';
import {build, mergeConfig} from 'vite';
import {createSharedViteConfig} from '../../vite.shared';
import {getLibs} from '../libs/query';
import {createBuildConfig} from './config';
import {emitWebComponentTypes} from './web-components-types';

const root = Path.resolve(import.meta.dirname, '../..');
const args = minimist(process.argv.slice(2).filter(arg => arg !== '--'));
const output = Path.resolve(root, args.outDir ?? 'dist/web-components');
const source = Path.join(root, 'lib/web-components');
const packageInfo = await fs.readJSON(Path.join(source, 'package.json'));
const names = ['main', 'button', 'pager', 'picker', 'all', 'auto', 'main-css'];
const entries = Object.fromEntries(names.map(name => [name === 'main' ? 'index' : name, Path.join(source, `src/${name}.ts`)]));
const libsCache = await getLibs('buildIn', {cache: false});
const selected = await createBuildConfig({libs: 'web-components~all web-components~css'});
const temporary = await fs.mkdtemp(Path.join(tmpdir(), 'zui-web-components-'));
const previousTailwind = process.env.TAILWIND_CONFIG;

try {
    const tailwindConfigs = selected.libs.flatMap(lib => lib.zui.tailwindConfigPath ? [lib.zui.tailwindConfigPath] : []);
    const tailwindFile = Path.join(temporary, 'tailwind.cjs');
    await fs.writeFile(tailwindFile, `module.exports = [${tailwindConfigs.map(file => `require(${JSON.stringify(file)})`).join(',')}];\n`);
    process.env.TAILWIND_CONFIG = tailwindFile;
    const shared = mergeConfig(createSharedViteConfig({mode: 'production', rootPath: root, libsCache}), {
        configFile: false,
        root,
        publicDir: false,
        build: {
            target: ['chrome107', 'edge107', 'firefox104', 'safari16.4'],
            outDir: output,
            sourcemap: true,
            cssMinify: true,
            lib: {cssFileName: 'style'},
        },
    });
    await build(mergeConfig(shared, {
        build: {
            emptyOutDir: true,
            lib: {entry: entries, formats: ['es'], fileName: (_format: string, entry: string) => `${entry}.js`},
        },
    }));
    const umdEntry = Path.join(temporary, 'auto.ts');
    await fs.writeFile(umdEntry, `import ${JSON.stringify(entries['main-css'])};\nexport * from ${JSON.stringify(entries.auto)};\n`);
    await build(mergeConfig(shared, {
        build: {
            emptyOutDir: false,
            lib: {entry: umdEntry, name: 'ZuiWebComponents', formats: ['umd'], fileName: () => 'zui-web-components.auto.js'},
        },
    }));
    const rootPackage = await fs.readJSON(Path.join(root, 'package.json'));
    const versions = Object.assign({}, ...Object.values(libsCache).map(lib => ({...lib.devDependencies, ...lib.dependencies})), rootPackage.dependencies);
    const dependencies = emitWebComponentTypes(root, Path.join(output, 'types'), Object.values(entries), versions);
    const exports = Object.fromEntries(names.filter(name => name !== 'main-css').map(name => [name === 'main' ? '.' : `./${name}`, {
        types: `./types/lib/web-components/src/${name}.d.ts`,
        import: `./${name === 'main' ? 'index' : name}.js`,
    }]));
    await fs.writeJSON(Path.join(output, 'package.json'), {
        name: packageInfo.name,
        version: packageInfo.version,
        description: packageInfo.description,
        private: true,
        type: 'module',
        types: exports['.'].types,
        module: './index.js',
        exports: {...exports, './css': './style.css', './auto-script': './zui-web-components.auto.js'},
        dependencies,
        license: 'MIT',
    }, {spaces: 4});
    await fs.copyFile(Path.join(root, 'LICENSE'), Path.join(output, 'LICENSE'));
    if (await fs.pathExists(Path.join(source, 'README.md'))) {
        await fs.copyFile(Path.join(source, 'README.md'), Path.join(output, 'README.md'));
    }
    console.log(`Web Components trial package: ${output}`);
} finally {
    if (previousTailwind === undefined) {
        delete process.env.TAILWIND_CONFIG;
    } else {
        process.env.TAILWIND_CONFIG = previousTailwind;
    }
    await fs.remove(temporary);
}
