import assert from 'node:assert/strict';
import {execFileSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {URL, fileURLToPath} from 'node:url';
import test from 'node:test';

const SCRIPT_PATH = fileURLToPath(new URL('./inspect-zui-project.mjs', import.meta.url));

function createFixture() {
    return fs.mkdtempSync(path.join(os.tmpdir(), 'inspect-zui-project-'));
}

function writeFile(root, relativePath, content) {
    const filePath = path.join(root, relativePath);
    fs.mkdirSync(path.dirname(filePath), {recursive: true});
    fs.writeFileSync(filePath, content);
    return filePath;
}

function writeJson(root, relativePath, value) {
    return writeFile(root, relativePath, `${JSON.stringify(value, null, 2)}\n`);
}

function inspect(root, json = true) {
    const args = [SCRIPT_PATH, '--root', root];
    if (json) {
        args.push('--json');
    }
    const output = execFileSync(process.execPath, args, {encoding: 'utf8'});
    return json ? JSON.parse(output) : output;
}

test('discovers workspace manifests, ancestor package managers, and hoisted packages', () => {
    const root = createFixture();
    try {
        writeJson(root, 'package.json', {
            name: 'workspace-root',
            private: true,
            workspaces: ['packages/*'],
        });
        writeFile(root, 'package-lock.json', '{}\n');
        writeJson(root, 'packages/app/package.json', {
            name: 'workspace-app',
            dependencies: {'@zui/button': '^3.2.1'},
        });
        writeJson(root, 'packages/app/generated/package.json', {name: 'nested-generated-package'});
        writeJson(root, 'node_modules/@zui/button/package.json', {
            name: '@zui/button',
            version: '3.2.1',
            main: 'dist/button.js',
            module: 'dist/button.mjs',
            browser: 'dist/button.browser.js',
            types: 'dist/button.d.ts',
            exports: {'.': './dist/button.mjs'},
        });

        const appRoot = path.join(root, 'packages/app');
        const appReport = inspect(appRoot);
        assert.equal(appReport.projectContext.root, root);
        assert.ok(appReport.packageManagers.some(manager => manager.value === 'npm' && manager.source === '../../package-lock.json'));
        assert.equal(appReport.installed.length, 1);
        assert.equal(appReport.installed[0].installed, true);
        assert.equal(appReport.installed[0].version, '3.2.1');

        const workspaceReport = inspect(root);
        assert.ok(workspaceReport.packages.some(packageInfo => packageInfo.relativePath === 'packages/app/package.json'));
        assert.ok(!workspaceReport.packages.some(packageInfo => packageInfo.name === 'nested-generated-package'));
        assert.ok(workspaceReport.dependencies.some(dependency => dependency.name === '@zui/button' && dependency.manifest === 'packages/app/package.json'));

        const textReport = inspect(appRoot, false);
        assert.match(textReport, /main\/module\/browser\/types: dist\/button\.js \/ dist\/button\.mjs \/ dist\/button\.browser\.js \/ dist\/button\.d\.ts/);
    } finally {
        fs.rmSync(root, {recursive: true, force: true});
    }
});

test('honors pnpm workspace patterns when discovering package manifests', () => {
    const root = createFixture();
    try {
        writeJson(root, 'package.json', {name: 'pnpm-workspace-root'});
        writeFile(root, 'pnpm-workspace.yaml', [
            'packages:',
            '  - "apps/*"',
            '  - "!apps/excluded"',
        ].join('\n'));
        writeJson(root, 'apps/web/package.json', {name: 'web-app'});
        writeJson(root, 'apps/excluded/package.json', {name: 'excluded-app'});
        writeJson(root, 'generated/cache/package.json', {name: 'generated-cache'});

        const report = inspect(root);
        assert.deepEqual(report.packages.map(packageInfo => packageInfo.name), [
            'pnpm-workspace-root',
            'web-app',
        ]);
    } finally {
        fs.rmSync(root, {recursive: true, force: true});
    }
});

test('detects multiline usage without treating ZUI paths as global API access', () => {
    const root = createFixture();
    try {
        writeJson(root, 'package.json', {name: 'multiline-app'});
        writeFile(root, 'src/main.js', [
            'const componentPath = "./components/zui.vue";',
            'const cssPath = "/assets/zui.css";',
            'const serialized = "window[\'zui\']";',
            'const menu = await import(',
            '    "@zui/menu",',
            ');',
            'if (window.zui) boot();',
            'consume(globalThis?.zui);',
            'const legacy = window[\'zui\'];',
        ].join('\n'));
        writeFile(root, 'index.html', [
            '<link',
            '    rel="stylesheet"',
            '    href="/assets/zui/zui.css"',
            '>',
            '<button zui-toggle="dropdown">Open</button>',
        ].join('\n'));
        writeFile(root, 'src/theme.css', 'body { background-image: url(zui.css); }\n');

        const report = inspect(root);
        const mainMatches = report.scan.matches.filter(match => match.file === 'src/main.js');
        assert.ok(mainMatches.some(match => match.line === 4 && match.categories.includes('scoped-import')));
        assert.ok(mainMatches.some(match => match.line === 7 && match.categories.includes('global-api')));
        assert.ok(mainMatches.some(match => match.line === 8 && match.categories.includes('global-api')));
        assert.ok(mainMatches.some(match => match.line === 9 && match.categories.includes('global-api')));
        assert.ok(!mainMatches.some(match => [1, 2, 3].includes(match.line) && match.categories.includes('global-api')));
        assert.ok(report.scan.matches.some(match => match.file === 'index.html' && match.line === 1 && match.categories.includes('script-or-style-tag')));
        assert.ok(report.scan.matches.some(match => match.file === 'index.html' && match.line === 5 && match.categories.includes('declarative')));
        assert.ok(!report.scan.matches.some(match => match.file === 'src/theme.css' && match.categories.includes('global-api')));
    } finally {
        fs.rmSync(root, {recursive: true, force: true});
    }
});

test('continues scanning and keeps representative matches after the reporting limit', () => {
    const root = createFixture();
    try {
        writeJson(root, 'package.json', {name: 'large-signal-app'});
        writeFile(root, 'public/generated-zui.js', Array.from(
            {length: 200},
            (_, index) => `window.zui.Generated${index}.open();`,
        ).join('\n'));
        writeFile(root, 'src/app.js', 'window.zui.Application.start();\n');

        const report = inspect(root);
        assert.equal(report.scan.matchesFound, 201, JSON.stringify(report.scan, null, 2));
        assert.equal(report.scan.fileLimitReached, false);
        assert.equal(report.scan.sampled, true);
        assert.ok(report.scan.matchesOmitted > 0);
        assert.ok(report.scan.matches.some(match => match.file === 'src/app.js'));
        assert.ok(report.warnings.some(warning => warning.includes('source scan continued')));
    } finally {
        fs.rmSync(root, {recursive: true, force: true});
    }
});
