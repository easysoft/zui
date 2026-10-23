import assert from 'node:assert/strict';
import {execFileSync, spawnSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {URL, fileURLToPath} from 'node:url';
import test from 'node:test';

const SCRIPTS = [
    '../../.agents/skills/zui-standards/scripts/inspect-zui-lib.mjs',
    '../../skills-exts/zuix-standards/scripts/inspect-zui-lib.mjs',
].map(relative => fileURLToPath(new URL(relative, import.meta.url)));

function writeFile(root, relative, content) {
    const file = path.join(root, relative);
    fs.mkdirSync(path.dirname(file), {recursive: true});
    fs.writeFileSync(file, content);
    return file;
}

function writeJson(root, relative, value) {
    return writeFile(root, relative, JSON.stringify(value, null, 2) + '\n');
}

function fixture(t) {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'inspect-zui-lib-'));
    t.after(() => fs.rmSync(root, {recursive: true, force: true}));
    writeJson(root, 'lib/core/package.json', {
        name: '@zui/core',
        main: 'src/main.ts',
        description: '当前已有能力',
        keywords: ['memoization'],
        zui: {name: 'core-alias', displayName: '核心工具', type: 'js-helpers'},
    });
    writeFile(root, 'lib/core/src/main.ts', [
        'export {debounce as postpone} from \'./helpers\';',
        'export * as dom from \'./dom\';',
        'export {signal, computed} from \'@preact/signals\';',
    ].join('\n'));
    writeFile(root, 'lib/core/src/helpers.ts', [
        'export function debounce() {}',
        'function deepOnlyHelper() {}',
        '// literal a+b expression',
    ].join('\n'));
    writeFile(root, 'lib/core/src/storage-helper.ts', 'export const storage = {};\n');
    writeFile(root, 'lib/core/README.md', '# readmeOnly\n');
    writeFile(root, 'lib/core/dev.md', '# devOnly\n');
    writeFile(root, 'lib/core/docs/lib/helpers/core.md', '# 正式指南 docsOnly\n');
    writeJson(root, 'lib/button/package.json', {
        name: '@zui/button',
        main: 'src/main.ts',
        zui: {displayName: '按钮', type: 'component'},
    });
    writeFile(root, 'lib/button/src/main.ts', 'export const Button = {};\n');
    return root;
}

function inspect(script, root, args = [], json = true) {
    const output = execFileSync(process.execPath, [script, '--root', root, ...args, ...(json ? ['--json'] : [])], {encoding: 'utf8'});
    return json ? JSON.parse(output) : output;
}

for (const script of SCRIPTS) {
    const label = script.includes('skills-exts') ? 'extension' : 'built-in';

    test(label + ': finds case-insensitive literal words with OR semantics and source evidence', (t) => {
        const root = fixture(t);
        const report = inspect(script, root, ['--search', 'dEePoNlYhElPeR 按钮']);
        assert.equal(report.scanned, 2);
        assert.equal(report.count, 2);
        assert.deepEqual(report.terms, ['deeponlyhelper', '按钮']);
        const core = report.libraries.find(library => library.packageName === '@zui/core');
        assert.equal(core.path, path.join(root, 'lib/core'));
        assert.equal(core.type, 'js-helpers');
        assert.equal(core.publicApi, undefined);
        assert.deepEqual(core.matches[0], {
            kind: 'source', file: 'src/helpers.ts', line: 2, text: 'function deepOnlyHelper() {}',
        });
        assert.match(report.notice, /not verified public exports/);
        assert.equal(inspect(script, root, ['--search', 'a+b']).count, 1);
        assert.equal(inspect(script, root, ['--search', 'a.b']).count, 0);
    });

    test(label + ': searches metadata, paths, docs, namespace and alias export syntax', (t) => {
        const root = fixture(t);
        for (const keyword of ['CORE-ALIAS', '当前', '核心', 'memoization', '@zui/core', 'storage-helper']) {
            const report = inspect(script, root, ['--search', keyword]);
            assert.equal(report.count, 1, keyword);
            assert.equal(report.libraries[0].packageName, '@zui/core', keyword);
        }
        const exports = inspect(script, root, ['--search', 'postpone dom signal']);
        assert.deepEqual(exports.libraries[0].matches.map(match => [match.file, match.line]), [
            ['src/main.ts', 1], ['src/main.ts', 2], ['src/main.ts', 3],
        ]);
        const docs = inspect(script, root, ['--search', 'readmeOnly devOnly docsOnly']);
        assert.deepEqual(docs.libraries[0].matches.map(match => [match.file, match.line]), [
            ['README.md', 1], ['dev.md', 1], ['docs/lib/helpers/core.md', 1],
        ]);
        const filtered = inspect(script, root, ['--search', 'core', '--lib', '@zui/core']);
        assert.equal(filtered.scanned, 1);
        assert.equal(filtered.count, 1);
    });

    test(label + ': reports all hit counts even when excerpts are truncated', (t) => {
        const root = fixture(t);
        writeFile(root, 'lib/core/src/many.ts', Array.from({length: 25}, (_, index) => '// repeatedNeedle ' + index).join('\n'));
        const report = inspect(script, root, ['--search', 'repeatedNeedle']);
        const library = report.libraries[0];
        assert.equal(library.matchesTotal, 25);
        assert.equal(library.matches.length, 8);
        assert.equal(library.matchesTruncated, true);
        assert.match(inspect(script, root, ['--search', 'repeatedNeedle'], false), /25 \(showing 8, truncated\)/);
        writeFile(root, 'lib/core/src/long.ts', '// ' + 'x'.repeat(500) + ' longNeedle ' + 'y'.repeat(300));
        const longLine = inspect(script, root, ['--search', 'longNeedle']).libraries[0].matches[0];
        assert.match(longLine.text, /longNeedle/);
        assert.ok(longLine.text.startsWith('…') && longLine.text.endsWith('…'));
        assert.equal(longLine.line, 1);
    });

    test(label + ': inventories AI references independently of development and website pages', (t) => {
        const root = fixture(t);
        writeFile(root, 'lib/core/ai.md', '# Core AI reference\n');
        const report = inspect(script, root);
        const core = report.libraries.find(library => library.packageName === '@zui/core');
        const button = report.libraries.find(library => library.packageName === '@zui/button');
        assert.equal(core.pages.aiReference, true);
        assert.equal(core.pages.source, 'dev.md');
        assert.deepEqual(core.pages.docs, {categories: ['helpers'], files: ['helpers/core.md']});
        assert.equal(button.pages.aiReference, false);
        assert.equal(button.pages.source, null);
        assert.deepEqual(button.pages.docs, {categories: [], files: []});
        const table = inspect(script, root, [], false).trim().split('\n');
        const rows = table.filter(line => line.startsWith('| ')).map(line => line.split('|').slice(1, -1).map(cell => cell.trim()));
        const aiColumn = rows[0].indexOf('ai.md');
        assert.ok(aiColumn >= 0);
        assert.equal(rows.find(row => row[0] === 'core')[aiColumn], 'yes');
        assert.equal(rows.find(row => row[0] === 'button')[aiColumn], 'no');
    });

    test(label + ': finds AI-only literal matches with source lines in repositories, collections and installed copies', (t) => {
        const root = fixture(t);
        writeFile(root, 'lib/core/ai.md', '# AI reference\n\nUse aiOnlyCapability for the x+y case.\n');
        const args = ['--search', 'AIONLYCAPABILITY x+y'];
        for (const searchRoot of [root, path.join(root, 'lib'), path.join(root, 'lib/core')]) {
            const report = inspect(script, searchRoot, args);
            assert.equal(report.count, 1);
            assert.equal(report.libraries[0].packageName, '@zui/core');
            assert.equal(report.libraries[0].matchesTotal, 1);
            assert.deepEqual(report.libraries[0].matches, [{
                kind: 'docs', file: 'ai.md', line: 3, text: 'Use aiOnlyCapability for the x+y case.',
            }]);
        }
        assert.equal(inspect(script, root, ['--search', 'x.y']).count, 0);
        assert.equal(inspect(script, root, ['--search', 'aiOnlyCapability', '--lib', 'button']).count, 0);
        const pathMatch = inspect(script, root, ['--search', 'ai.md']).libraries[0].matches;
        assert.deepEqual(pathMatch, [{kind: 'path', file: 'ai.md', line: null, text: 'ai.md'}]);
        assert.match(inspect(script, root, args, false), /ai\.md:3 \[docs\] Use aiOnlyCapability/);
        const installed = writeFile(root, 'installed/inspect-zui-lib.mjs', fs.readFileSync(script, 'utf8'));
        assert.deepEqual(inspect(installed, root, args), inspect(script, root, args));
    });

    test(label + ': searches only the explicit root and supports extension collections and single packages', (t) => {
        const root = fixture(t);
        const extensionRoot = path.join(root, 'extension-project');
        const packageRoot = path.join(extensionRoot, 'lib/widget');
        writeJson(packageRoot, 'package.json', {
            name: '@acme/widget',
            main: 'src/main.ts',
            wip: true,
            zui: {name: 'acme-widget', displayName: '业务组件', type: 'component', notReady: true},
        });
        writeFile(packageRoot, 'src/main.ts', 'export const extensionOnly = {};\n');
        writeJson(root, 'exts/libs.json', {acme: path.join(extensionRoot, 'lib/*')});
        fs.symlinkSync(path.join(extensionRoot, 'lib'), path.join(root, 'exts/acme'), 'dir');
        assert.equal(inspect(script, root, ['--search', 'extensionOnly']).count, 0);
        for (const searchRoot of [extensionRoot, path.join(extensionRoot, 'lib'), packageRoot, path.join(root, 'exts/acme')]) {
            const report = inspect(script, searchRoot, ['--search', 'extensionOnly']);
            assert.equal(report.count, 1, searchRoot);
            assert.equal(report.libraries[0].packageName, '@acme/widget');
            assert.equal(report.libraries[0].zuiName, 'acme-widget');
            assert.equal(report.libraries[0].wip, true);
            assert.equal(report.libraries[0].notReady, true);
        }
        assert.equal(inspect(script, extensionRoot, ['--search', 'extensionOnly', '--lib', 'acme-widget']).count, 1);
    });

    test(label + ': accepts no matches and rejects invalid search arguments', (t) => {
        const root = fixture(t);
        const empty = inspect(script, root, ['--search', 'no-such-candidate']);
        assert.equal(empty.count, 0);
        assert.deepEqual(empty.libraries, []);
        for (const args of [
            ['--root', root, '--search', '   '],
            ['--root', root, '--search'],
            ['--root', root, '--search', 'core', '--unknown'],
            ['--root', root, '--search', 'core', '--lib', 'absent'],
            ['--root', path.join(root, 'absent'), '--search', 'core'],
            ['--search', 'core'],
        ]) {
            const result = spawnSync(process.execPath, [script, ...args], {encoding: 'utf8'});
            assert.equal(result.status, 2, JSON.stringify(args));
            assert.ok(result.stderr.trim());
        }
    });

    test(label + ': preserves inventory output and remains self-contained when copied', (t) => {
        const root = fixture(t);
        writeFile(root, 'lib/core/src/dom.ts', 'export function queryElement() {}\n');
        writeFile(root, 'lib/core/src/helpers.ts', 'export function debounce() {}\nexport function privateToEntry() {}\n');
        const inventory = inspect(script, root, ['--lib', 'core']);
        assert.equal(inventory.count, 1);
        const api = inventory.libraries[0].publicApi;
        assert.deepEqual(api.runtimeExports, [
            {kind: 'function', name: 'postpone', file: 'helpers.ts'},
            {kind: 'namespace', name: 'dom', source: './dom', file: 'main.ts'},
            {kind: 'reexport', name: 'signal', source: '@preact/signals', file: 'main.ts'},
            {kind: 'reexport', name: 'computed', source: '@preact/signals', file: 'main.ts'},
        ]);
        assert.deepEqual(api.files, ['dom.ts', 'helpers.ts', 'main.ts']);
        assert.equal(api.analysis, 'syntax-candidates');
        assert.match(api.notice, /not a complete or verified TypeScript API/);
        assert.deepEqual(api.unresolved, [{file: 'main.ts', source: '@preact/signals', reason: 'external-module'}]);
        assert.equal(inventory.libraries[0].matches, undefined);
        const installed = path.join(root, 'installed/inspect-zui-lib.mjs');
        writeFile(root, 'installed/inspect-zui-lib.mjs', fs.readFileSync(script, 'utf8'));
        assert.equal(inspect(installed, root, ['--search', 'privateToEntry']).count, 1);
        assert.deepEqual(inspect(installed, root, ['--lib', 'core']), inventory);
    });

    test(label + ': follows nested reexports without exposing unselected, default or namespace members', (t) => {
        const root = fixture(t);
        writeFile(root, 'lib/core/src/main.ts', [
            'export {middle as publicAlias, type Options} from \'./aliases\';',
            'export * from \'./barrel\';',
            'export * as dom from \'./dom\';',
            'export type * as Types from \'./types\';',
            'export type {NeverRuntime} from \'./types\';',
        ].join('\n'));
        writeFile(root, 'lib/core/src/aliases.ts', [
            'export {original as middle} from \'./helpers\';',
            'export interface Options {}',
            'export const unselected = 1;',
        ].join('\n'));
        writeFile(root, 'lib/core/src/helpers.ts', 'export function original() {}\nexport function unselectedHelper() {}\n');
        writeFile(root, 'lib/core/src/barrel.ts', 'export * from \'./leaf\';\n');
        writeFile(root, 'lib/core/src/leaf.ts', [
            'export default function DefaultFunction() {}',
            'export const visible = 1;',
            'export interface LeafType {}',
            'export {LeafType as ImplicitType};',
        ].join('\n'));
        writeFile(root, 'lib/core/src/dom.ts', 'export * from \'./namespace-members\';\n');
        writeFile(root, 'lib/core/src/namespace-members.ts', 'export const nestedMember = 1;\n');
        writeFile(root, 'lib/core/src/types.ts', 'export class NeverRuntime {}\n');
        const api = inspect(script, root, ['--lib', 'core']).libraries[0].publicApi;
        assert.deepEqual(api.runtimeExports, [
            {kind: 'function', name: 'publicAlias', file: 'helpers.ts'},
            {kind: 'namespace', name: 'dom', source: './dom', file: 'main.ts'},
            {kind: 'value', name: 'visible', file: 'leaf.ts'},
        ]);
        assert.deepEqual(api.files, ['aliases.ts', 'barrel.ts', 'dom.ts', 'helpers.ts', 'leaf.ts', 'main.ts', 'namespace-members.ts']);
        assert.deepEqual(api.unresolved, []);
    });

    test(label + ': handles local aliases, default aliases and implicit type reexports', (t) => {
        const root = fixture(t);
        writeFile(root, 'lib/core/src/main.ts', [
            'export {default as create, PublicClass as Widget, TypeAlias} from \'./model\';',
            'interface Options {}',
            'type Result = string;',
            'const internal = 1;',
            'export {internal as publicValue, Options, type Result};',
        ].join('\n'));
        writeFile(root, 'lib/core/src/model.ts', [
            'export default function make() {}',
            'class Base {}',
            'class Internal extends Base {}',
            'interface Shape {}',
            'export {Internal as PublicClass, Shape as TypeAlias};',
        ].join('\n'));
        const api = inspect(script, root, ['--lib', 'core']).libraries[0].publicApi;
        assert.deepEqual(api.runtimeExports, [
            {kind: 'function', name: 'create', file: 'model.ts'},
            {kind: 'class', name: 'Widget', file: 'model.ts'},
            {kind: 'value', name: 'publicValue', file: 'main.ts'},
        ]);
        assert.deepEqual(api.inheritance, [{class: 'Widget', base: 'Base', chain: ['Widget', 'Base'], file: 'model.ts'}]);
        assert.deepEqual(api.unresolved, []);
    });

    test(label + ': recognizes compact local exports without classifying runtime libraries as CSS-only', (t) => {
        const root = fixture(t);
        writeFile(root, 'lib/core/src/main.ts', 'const helper = 1;\nexport{helper};\n');
        writeFile(root, 'lib/core/src/style.css', '.example {}\n');
        const library = inspect(script, root, ['--lib', 'core']).libraries[0];
        assert.deepEqual(library.publicApi.runtimeExports, [{kind: 'value', name: 'helper', file: 'main.ts'}]);
        assert.deepEqual(library.publicApi.unresolved, []);
        assert.equal(library.signals.cssOnly, false);
    });

    test(label + ': excludes ambiguous wildcard exports and keeps explicit overrides', (t) => {
        const root = fixture(t);
        writeFile(root, 'lib/core/src/main.ts', [
            'export * from \'./left\';',
            'export * from \'./right\';',
            'export {winner as collision} from \'./override\';',
        ].join('\n'));
        for (const side of ['left', 'right']) {
            writeFile(root, `lib/core/src/${side}.ts`, [
                'export const collision = 1;',
                'export const ambiguous = 1;',
                `export const ${side}Only = 1;`,
                'export {shared} from \'./shared\';',
            ].join('\n'));
        }
        writeFile(root, 'lib/core/src/shared.ts', 'export const shared = 1;\n');
        writeFile(root, 'lib/core/src/override.ts', 'export const winner = 1;\n');
        const api = inspect(script, root, ['--lib', 'core']).libraries[0].publicApi;
        assert.deepEqual(api.runtimeExports, [
            {kind: 'value', name: 'collision', file: 'override.ts'},
            {kind: 'value', name: 'leftOnly', file: 'left.ts'},
            {kind: 'value', name: 'shared', file: 'shared.ts'},
            {kind: 'value', name: 'rightOnly', file: 'right.ts'},
        ]);
        assert.deepEqual(api.unresolved, [{file: 'main.ts', reason: 'ambiguous-wildcard-export:ambiguous'}]);
    });

    test(label + ': reports unresolved external wildcards, bindings and cycles without inventing members', (t) => {
        const root = fixture(t);
        writeFile(root, 'lib/core/src/main.ts', [
            'export {method as publicMethod, type Config} from \'vendor\';',
            'export type * from \'types-only\';',
            'export * from \'unknown-members\';',
            'export * from \'./cycle\';',
            'export {missing} from \'./helpers\';',
        ].join('\n'));
        writeFile(root, 'lib/core/src/cycle.ts', 'export * from \'./main\';\nexport const cycleValue = 1;\n');
        const api = inspect(script, root, ['--lib', 'core']).libraries[0].publicApi;
        assert.deepEqual(api.runtimeExports, [
            {kind: 'reexport', name: 'publicMethod', source: 'vendor', file: 'main.ts'},
            {kind: 'value', name: 'cycleValue', file: 'cycle.ts'},
        ]);
        assert.deepEqual(api.unresolved, [
            {file: 'main.ts', source: 'vendor', reason: 'external-module'},
            {file: 'main.ts', source: 'unknown-members', reason: 'external-module'},
            {file: 'main.ts', source: 'unknown-members', reason: 'wildcard-exports-not-resolved'},
            {file: 'main.ts', reason: 'cyclic-reexport'},
            {file: 'main.ts', source: './helpers', reason: 'export-not-resolved:missing'},
        ]);
    });

    test(label + ': unresolved runtime exports do not classify a library with CSS as CSS-only', (t) => {
        const root = fixture(t);
        writeFile(root, 'lib/core/src/style.css', '.example {}\n');
        for (const source of ['export * from \'external\';', 'module.exports = runtimeValue;']) {
            writeFile(root, 'lib/core/src/main.ts', source);
            const library = inspect(script, root, ['--lib', 'core']).libraries[0];
            assert.deepEqual(library.publicApi.runtimeExports, []);
            assert.equal(library.signals.publicJsExport, true);
            assert.equal(library.signals.cssOnly, false);
        }
    });
}
