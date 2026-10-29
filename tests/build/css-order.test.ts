import {execFile} from 'node:child_process';
import {promises as fs} from 'node:fs';
import Path from 'node:path';
import {promisify} from 'node:util';
import postcss from 'postcss';
import {afterAll, beforeAll, expect, test} from 'vitest';

const execFileAsync = promisify(execFile);
const root = Path.resolve(import.meta.dirname, '../..');
const pnpm = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
let fixture: string;

async function write(file: string, content: string) {
    await fs.mkdir(Path.dirname(file), {recursive: true});
    await fs.writeFile(file, content);
}

beforeAll(async () => {
    await fs.mkdir(Path.join(root, 'test-results'), {recursive: true});
    fixture = await fs.mkdtemp(Path.join(root, 'test-results/css-order-'));
    const extensions = Path.join(fixture, 'extensions');
    for (const [name, order] of [['alpha', 40], ['beta', 41], ['tail', 70], ['dependency', 10]] as const) {
        await write(Path.join(extensions, name, 'package.json'), JSON.stringify({
            name: `@css-order/${name}`, version: '1.0.0', type: 'module', main: './src/main.ts',
            exports: {'.': './src/main.ts', './styles': './src/styles/index.ts'},
            zui: {type: 'component', order},
        }));
    }
    const alpha = Path.join(extensions, 'alpha');
    await write(Path.join(alpha, 'src/main.ts'), `
        import '@css-order/npm/skin.css';
        import '@css-order/beta/styles';
        import '@css-order/beta';
        import '@zui/utilities';
        import '@css-order/dependency';
        export {default as inlineCss} from './inline.css?inline';
        import './first.css';
        import './second.css';
        export const loadStyles = () => import('./lazy');
    `);
    await write(Path.join(alpha, 'src/first.css'), '.css-order-first { color: red; }');
    await write(Path.join(alpha, 'src/second.css'), '.css-order-second, .flex { display: block; }');
    await write(Path.join(alpha, 'src/lazy.ts'), 'import "./lazy.css"; export const loaded = true;');
    await write(Path.join(alpha, 'src/lazy.css'), '.css-order-lazy { color: blue; }');
    await write(Path.join(alpha, 'src/inline.css'), '.css-order-inline { color: purple; }');
    const beta = Path.join(extensions, 'beta');
    await write(Path.join(beta, 'src/main.ts'), 'import "@css-order/alpha"; import "./styles";');
    await write(Path.join(beta, 'src/styles/index.ts'), 'import "./first.css"; import "./second.css";');
    await write(Path.join(beta, 'src/styles/first.css'), '.css-order-beta-first { color: green; } @media (min-width: 1px) { .css-order-media { color: yellow; } }');
    await write(Path.join(beta, 'src/styles/second.css'), '.css-order-beta-second { color: orange; }');
    for (const name of ['tail', 'dependency']) {
        await write(Path.join(extensions, name, 'src/main.ts'), 'import "./style.css";');
        await write(Path.join(extensions, name, 'src/style.css'), `.css-order-${name} { color: pink; }`);
    }
    const npm = Path.join(fixture, 'node_modules/@css-order/npm');
    await write(Path.join(npm, 'package.json'), JSON.stringify({name: '@css-order/npm', version: '1.0.0', type: 'module', main: './main.js'}));
    await write(Path.join(npm, 'main.js'), 'import "./skin.css";');
    await write(Path.join(npm, 'skin.css'), '.css-order-npm { color: teal; }');
    for (const reverse of [false, true]) {
        await write(Path.join(fixture, `custom-${reverse}.vite.mjs`), `export default {
            resolve: {alias: {'@css-order/npm': ${JSON.stringify(npm)}}},
            plugins: [{name: 'reverse-entry', transform(code, id) {
                if (${reverse} && id.includes('/build/run-') && id.endsWith('/main.ts')) return code.split('\\n').reverse().join('\\n');
            }}],
        };`);
    }
});

afterAll(async () => {
    if (fixture) {
        await fs.rm(fixture, {recursive: true, force: true});
    }
});

test.each([
    {minify: false, reverse: false, utilities: true},
    {minify: true, reverse: false, utilities: true},
    {minify: false, reverse: true, utilities: true},
    {minify: false, reverse: false, utilities: false},
])('follows the generated entry and library imports: %j', async ({minify, reverse, utilities}) => {
    const name = `${minify}-${reverse}-${utilities}`;
    const output = Path.join(fixture, name);
    const config = Path.join(fixture, `build-${name}.json`);
    await write(config, JSON.stringify({
        name: 'zui-css-order',
        libs: ['@css-order/alpha', '@css-order/beta', '@css-order/tail', ...(utilities ? ['utilities'] : [])],
        extensions: [Path.join(fixture, 'extensions')],
        dependencies: {'@css-order/npm': `file:${Path.join(fixture, 'node_modules/@css-order/npm')}`},
        outDir: output,
        minify,
        sourcemap: false,
        analyze: true,
        viteConfig: Path.join(fixture, `custom-${reverse}.vite.mjs`),
    }));
    await execFileAsync(pnpm, ['build', '--config', config], {
        cwd: root,
        env: {...process.env, CI: '1'},
        maxBuffer: 20 * 1024 * 1024,
    });

    const css = await fs.readFile(Path.join(output, 'zui-css-order.css'), 'utf8');
    const parsed = postcss.parse(css);
    const selectors: string[] = [];
    const flexDisplays: string[] = [];
    parsed.walkRules((rule) => {
        selectors.push(rule.selector);
        if (rule.selectors.includes('.flex')) {
            rule.walkDecls('display', (decl) => {
                flexDisplays.push(decl.value);
            });
        }
    });
    const alpha = ['.css-order-dependency', '.css-order-first', '.css-order-second', '.css-order-lazy'];
    const beta = ['.css-order-beta-first', '.css-order-media', '.css-order-beta-second'];
    const expected = reverse
        ? ['.css-order-npm', '.css-order-tail', '.flex', ...beta, ...alpha]
        : [...(utilities ? [] : ['.flex']), ...alpha, ...beta, ...(utilities ? ['.flex'] : []), '.css-order-tail', '.css-order-npm'];
    const actual = selectors.filter(selector => selector.startsWith('.css-order-') || selector === '.flex')
        .map(selector => selector.split(',')[0].trim());
    expect(actual).toEqual(expected);
    expect(flexDisplays).toEqual(utilities && !reverse ? ['block', 'flex'] : ['flex', 'block']);
    expect(selectors.filter(selector => selector === '.flex')).toHaveLength(1);
    expect(css).not.toContain('__ZUI_CSS_');
    expect(await fs.readFile(Path.join(output, 'zui-css-order.esm.js'), 'utf8')).not.toContain('__ZUI_CSS_');
    const analysis = JSON.parse(await fs.readFile(Path.join(output, 'build-analysis.json'), 'utf8'));
    const cssReport = analysis.files.find((file: {kind: string}) => file.kind === 'css');
    expect(cssReport.bytes).toBe(Buffer.byteLength(css));
    expect(cssReport.packages.reduce((sum: number, item: {bytes: number}) => sum + item.bytes, 0)).toBe(cssReport.bytes);
    expect(cssReport.packages).toEqual(expect.arrayContaining([
        expect.objectContaining({name: '@css-order/alpha', category: 'extension'}),
        expect.objectContaining({name: '@css-order/beta', category: 'extension'}),
        expect.objectContaining({name: '@css-order/npm', category: 'dependency'}),
        expect.objectContaining({name: '@zui/utilities', category: 'builtin'}),
    ]));
});
