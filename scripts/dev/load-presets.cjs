const {mkdtemp, readFile, realpath, rm, writeFile} = require('node:fs/promises');
const {createRequire, isBuiltin} = require('node:module');
const {tmpdir} = require('node:os');
const path = require('node:path');
const {pathToFileURL} = require('node:url');
const {build} = createRequire(require.resolve('vite/package.json'))('esbuild');

async function loadPresets(files, rootPath) {
    if (!files.length) return {presets: [], dependencies: []};
    const root = await realpath(rootPath);
    const directory = await realpath(await mkdtemp(path.join(tmpdir(), 'zui-dev-presets-')));
    const wrapper = path.join(directory, 'presets.cjs');
    try {
        await writeFile(wrapper, [
            ...files.map((file, index) => `import preset${index} from ${JSON.stringify(file)};`),
            `module.exports = {presets: [${files.map((_, index) => `preset${index}`).join(',')}]};`,
        ].join('\n'));
        const result = await build({
            absWorkingDir: root,
            entryPoints: [wrapper],
            bundle: true,
            platform: 'node',
            mainFields: ['main'],
            target: `node${process.versions.node}`,
            format: 'cjs',
            write: false,
            metafile: true,
            logLevel: 'silent',
            // Preserve the implicit file and directory extensions accepted by Tailwind's loader.
            resolveExtensions: ['.tsx', '.ts', '.jsx', '.js', '.mjs', '.cjs', '.mts', '.cts', '.json'],
            define: {
                __dirname: '__zui_preset_dirname',
                __filename: '__zui_preset_filename',
                'import.meta.url': '__zui_preset_url',
                'import.meta.dirname': '__zui_preset_dirname',
                'import.meta.filename': '__zui_preset_filename',
            },
            plugins: [{
                name: 'preset-file-context',
                setup(builder) {
                    builder.onResolve({filter: /^[^.#]/}, ({path: id, importer, kind}) => {
                        if (kind === 'entry-point' || path.isAbsolute(id)) return;
                        return {path: isBuiltin(id) ? id : createRequire(importer).resolve(id), external: true};
                    });
                    builder.onLoad({filter: /\.[cm]?[jt]sx?$/}, async ({path: file}) => {
                        const sourceFile = await realpath(file);
                        const source = (await readFile(sourceFile, 'utf8')).replace(/^#![^\n]*(\n|$)/, '\n');
                        const context = `const __zui_preset_dirname = ${JSON.stringify(path.dirname(sourceFile))};const __zui_preset_filename = ${JSON.stringify(sourceFile)};const __zui_preset_url = ${JSON.stringify(pathToFileURL(sourceFile).href)};`;
                        const loader = /\.tsx$/.test(file) ? 'tsx' : /\.jsx$/.test(file) ? 'jsx' : /\.[cm]?ts$/.test(file) ? 'ts' : 'js';
                        return {contents: context + source, loader};
                    });
                },
            }],
        });
        await writeFile(wrapper, result.outputFiles[0].text);
        const {presets} = require(wrapper);
        const dependencies = await Promise.all(Object.keys(result.metafile.inputs).map(file => realpath(path.resolve(root, file))));
        return {
            presets: presets.map(value => value?.default ?? value),
            dependencies: dependencies.filter(file => file !== wrapper),
        };
    } finally {
        const loadedModule = require.cache[wrapper];
        delete require.cache[wrapper];
        if (loadedModule) module.children = module.children.filter(child => child !== loadedModule);
        await rm(directory, {recursive: true, force: true});
    }
}

module.exports = {loadPresets};
