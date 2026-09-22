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
        const inventory = inspect(script, root, ['--lib', 'core']);
        assert.equal(inventory.count, 1);
        assert.ok(inventory.libraries[0].publicApi.runtimeExports);
        assert.equal(inventory.libraries[0].matches, undefined);
        const installed = path.join(root, 'installed/inspect-zui-lib.mjs');
        writeFile(root, 'installed/inspect-zui-lib.mjs', fs.readFileSync(script, 'utf8'));
        assert.equal(inspect(installed, root, ['--search', 'deepOnlyHelper']).count, 1);
    });
}
