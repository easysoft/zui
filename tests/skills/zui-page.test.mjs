import assert from 'node:assert/strict';
import {spawnSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {URL, fileURLToPath} from 'node:url';
import test from 'node:test';

const CREATE = fileURLToPath(new URL('../../skills/zui-build/scripts/create-zui-page.mjs', import.meta.url));
const VALIDATE = fileURLToPath(new URL('../../skills/zui-build/scripts/validate-zui-page.mjs', import.meta.url));
const CDN_CSS = 'https://cdn.jsdelivr.net/npm/zui@3.0.0/dist/zui.css';

function fixture(t) {
    const root = fs.mkdtempSync(path.join(os.tmpdir(), 'zui-page-'));
    t.after(() => fs.rmSync(root, {recursive: true, force: true}));
    return root;
}

function writeFile(root, relative, content = '') {
    const file = path.join(root, relative);
    fs.mkdirSync(path.dirname(file), {recursive: true});
    fs.writeFileSync(file, content);
    return file;
}

function run(script, args) {
    return spawnSync(process.execPath, [script, ...args], {encoding: 'utf8'});
}

function validate(root, html, script = VALIDATE) {
    if (html !== undefined) {
        writeFile(root, 'index.html', html);
    }
    const result = run(script, ['--root', root, '--json']);
    assert.equal(result.stderr, '', result.stderr);
    const report = JSON.parse(result.stdout);
    assert.equal(result.status, report.ok ? 0 : 1);
    return report;
}

function localAssets(root) {
    writeFile(root, 'assets/zui.css');
    writeFile(root, 'assets/zui.js');
    writeFile(root, 'assets/icons/zenicon.woff');
}

test('page validator accepts CSS-only local pages and script resources with real HTML attributes', (t) => {
    const root = fixture(t);
    localAssets(root);
    const cssOnly = validate(root, '<LINK data-note="a > b" REL="stylesheet" HREF=./assets/zui.css>');
    assert.equal(cssOnly.ok, true);
    assert.deepEqual(cssOnly.resources, {styles: ['./assets/zui.css'], scripts: []});
    assert.deepEqual(cssOnly.warnings, []);
    const withScript = validate(root, [
        '<link rel="alternate stylesheet" href="/assets/zui.css?x=1&amp;y=2">',
        '<script src=./assets/zui.js type="text/javascript"></script>',
    ].join('\n'));
    assert.equal(withScript.ok, true);
    assert.deepEqual(withScript.resources.styles, ['/assets/zui.css?x=1&y=2']);
    assert.deepEqual(withScript.resources.scripts, ['./assets/zui.js']);
});

test('page validator ignores comments, raw text, template content, and tags inside attributes', (t) => {
    const root = fixture(t);
    for (const html of [
        `<!-- <link rel="stylesheet" href="${CDN_CSS}"> -->`,
        `<!-- <link rel="stylesheet" href="${CDN_CSS}">`,
        `<script>const example = '<link rel="stylesheet" href="${CDN_CSS}">';</script>`,
        `<style>body::before {content: '<link rel="stylesheet" href="${CDN_CSS}">'}</style>`,
        `<textarea><link rel="stylesheet" href="${CDN_CSS}"></textarea>`,
        `<template><template></template><link rel="stylesheet" href="${CDN_CSS}"></template>`,
        `<div data-example='<link rel="stylesheet" href="${CDN_CSS}">'></div>`,
    ]) {
        const report = validate(root, html);
        assert.equal(report.ok, false, html);
        assert.deepEqual(report.resources.styles, [], html);
        assert.deepEqual(report.errors, ['No ZUI stylesheet reference found.']);
    }
    const afterScript = validate(root, `<script>const text = '<!--';</script><link rel="stylesheet" href="${CDN_CSS}">`);
    assert.equal(afterScript.ok, true);
});

test('page validator requires stylesheet rel and exact attribute and resource names', (t) => {
    const root = fixture(t);
    for (const html of [
        `<link rel="preload" as="style" href="${CDN_CSS}">`,
        `<link rel="icon" href="${CDN_CSS}">`,
        `<link href="${CDN_CSS}">`,
        `<link rel="not-stylesheet" href="${CDN_CSS}">`,
        `<link data-rel="stylesheet" href="${CDN_CSS}">`,
        `<link rel="stylesheet" data-href="${CDN_CSS}">`,
        `<link rel="stylesheet" title='href="${CDN_CSS}"'>`,
        `<link rel="stylesheet" href="other.css" href="${CDN_CSS}">`,
        `<link-widget rel="stylesheet" href="${CDN_CSS}">`,
        '<link rel="stylesheet" href="/not-zui.css">',
    ]) {
        assert.equal(validate(root, html).ok, false, html);
    }
    const report = validate(root, [
        `<link rel="stylesheet" href="${CDN_CSS}">`,
        '<script data-src="missing/zui.js"></script>',
        '<script title=\'src="missing/zui.js"\'></script>',
        '<script type="application/json" src="missing/zui.js"></script>',
        '<!-- <script src="missing/zui.js"></script> -->',
    ].join('\n'));
    assert.equal(report.ok, true);
    assert.deepEqual(report.resources.scripts, []);
});

test('page validator recognizes pinned CDN versions and warns for every mutable tag or version range', (t) => {
    const root = fixture(t);
    for (const provider of ['https://cdn.jsdelivr.net/npm', '//unpkg.com']) {
        for (const version of ['3.0.0', '3.0.0-rc.1']) {
            const base = `${provider}/zui@${version}/dist`;
            const report = validate(root, `<link rel="stylesheet" href="${base}/zui.css"><script type=module src="${base}/zui.esm.js"></script>`);
            assert.equal(report.ok, true);
            assert.deepEqual(report.warnings, [], base);
        }
        for (const version of ['latest', 'next', 'beta', '3', '3.0', '^3.0.0']) {
            const report = validate(root, `<link rel="stylesheet" href="${provider}/zui@${version}/dist/zui.css">`);
            assert.equal(report.ok, true);
            assert.equal(report.warnings.length, 1);
            assert.match(report.warnings[0], /Mutable CDN tag/);
        }
    }
    for (const href of [
        'https://cdn.jsdelivr.net.evil.test/npm/zui@3.0.0/dist/zui.css',
        'https://example.test/cdn.jsdelivr.net/npm/zui@3.0.0/dist/zui.css',
        'https://unpkg.com/zui/dist/zui.css',
    ]) {
        const report = validate(root, `<link rel="stylesheet" href="${href}">`);
        assert.equal(report.ok, true);
        assert.match(report.warnings[0], /Unverified or unpinned/);
    }
});

test('page validator checks all JavaScript MIME essence types and ignores data blocks or MIME parameters', (t) => {
    const root = fixture(t);
    for (const type of [
        'application/ecmascript', 'application/javascript', 'application/x-ecmascript', 'application/x-javascript',
        'text/ecmascript', 'text/javascript', 'text/javascript1.0', 'text/javascript1.1', 'text/javascript1.2',
        'text/javascript1.3', 'text/javascript1.4', 'text/javascript1.5', 'text/jscript', 'text/livescript',
        'text/x-ecmascript', 'text/x-javascript', 'APPLICATION/X-JAVASCRIPT',
    ]) {
        const report = validate(root, `<link rel="stylesheet" href="${CDN_CSS}"><script type="${type}" src="missing/zui.js"></script>`);
        assert.equal(report.ok, false, type);
        assert.deepEqual(report.resources.scripts, ['missing/zui.js'], type);
        assert.deepEqual(report.errors, ['ZUI script does not exist: missing/zui.js'], type);
    }
    for (const type of ['application/json', 'application/ld+json', 'text/plain', 'text/javascript1.6', 'text/javascript; charset=utf-8', 'application/x-javascript;charset=utf-8']) {
        const report = validate(root, `<link rel="stylesheet" href="${CDN_CSS}"><script type="${type}" src="missing/zui.js"></script>`);
        assert.equal(report.ok, true, type);
        assert.deepEqual(report.resources.scripts, [], type);
    }
});

test('page validator reports missing local styles, scripts, and icon fonts', (t) => {
    const root = fixture(t);
    let report = validate(root, '<link rel="stylesheet" href="assets/zui.css">');
    assert.match(report.errors[0], /stylesheet does not exist/);
    writeFile(root, 'assets/zui.css');
    report = validate(root);
    assert.match(report.errors[0], /icon font is missing/);
    writeFile(root, 'assets/icons/zenicon.woff');
    report = validate(root, '<link rel="stylesheet" href="assets/zui.css"><script src="assets/zui.js"></script>');
    assert.match(report.errors[0], /script does not exist/);
    fs.mkdirSync(path.join(root, 'assets/zui.js'));
    assert.match(validate(root).errors[0], /script does not exist/);
});

test('page validator rejects malformed URL encoding and paths outside its root, including symlinks', (t) => {
    const root = fixture(t);
    const page = path.join(root, 'page');
    for (const reference of ['../zui.css', '%2e%2e/zui.css', '/%2e%2e/zui.css']) {
        const report = validate(page, `<link rel="stylesheet" href="${reference}">`);
        assert.match(report.errors[0], /escapes the page root/);
    }
    const invalidEncoding = validate(page, '<link rel="stylesheet" href="%zz/zui.css">');
    assert.match(invalidEncoding.errors[0], /invalid URL encoding/);
    localAssets(root);
    fs.symlinkSync(path.join(root, 'assets'), path.join(page, 'linked'), 'dir');
    assert.match(validate(page, '<link rel="stylesheet" href="linked/zui.css">').errors[0], /escapes the page root through a symlink/);
    localAssets(path.join(page, '..assets'));
    assert.equal(validate(page, '<link rel="stylesheet" href="..assets/assets/zui.css">').ok, true);
});

test('page validator remains dependency-free when copied and rejects invalid CLI arguments', (t) => {
    const root = fixture(t);
    const installed = writeFile(root, 'standalone/validate.mjs', fs.readFileSync(VALIDATE, 'utf8'));
    assert.equal(validate(root, `<link rel="stylesheet" href="${CDN_CSS}">`, installed).ok, true);
    for (const args of [[], ['--root'], ['--root='], ['--unknown'], ['--root', path.join(root, 'absent')]]) {
        const result = run(installed, args);
        assert.equal(result.status, 1, JSON.stringify(args));
        assert.match(result.stderr, /\[zui-build\]/);
    }
    assert.equal(run(installed, ['--help']).status, 0);
});

test('page scaffold creates bundled resources and escapes user-supplied HTML metadata', (t) => {
    const root = fixture(t);
    const output = path.join(root, 'new-page');
    const result = run(CREATE, ['--output', output, '--title', 'A <B> & "C"', '--lang', 'en-US', '--json']);
    assert.equal(result.status, 0, result.stderr);
    assert.deepEqual(JSON.parse(result.stdout), {
        root: output,
        title: 'A <B> & "C"',
        lang: 'en-US',
        mode: 'bundled',
        zuiVersion: '3.0.0',
        entry: path.join(output, 'index.html'),
    });
    assert.match(fs.readFileSync(path.join(output, 'index.html'), 'utf8'), /<title>A &lt;B&gt; &amp; &quot;C&quot;<\/title>/);
    assert.ok(fs.statSync(path.join(output, 'app.css')).isFile());
    assert.equal(validate(output).ok, true);
});

test('page scaffold creates both CDN modes without copying vendor files', (t) => {
    const root = fixture(t);
    for (const [provider, args] of [['jsdelivr', ['--cdn']], ['unpkg', ['--provider', 'unpkg']]]) {
        const output = path.join(root, provider);
        const result = run(CREATE, ['--output', output, ...args, '--zui-version', '3.0.0-rc.1', '--json']);
        assert.equal(result.status, 0, result.stderr);
        assert.equal(JSON.parse(result.stdout).mode, `cdn:${provider}`);
        assert.deepEqual(fs.readdirSync(output).sort(), ['app.css', 'index.html']);
        const report = validate(output);
        assert.equal(report.ok, true);
        assert.deepEqual(report.warnings, []);
        assert.match(report.resources.styles[0], /zui@3\.0\.0-rc\.1\/dist\/zui\.css$/);
    }
});

test('page scaffold preserves non-empty destinations and rejects invalid options before writing', (t) => {
    const root = fixture(t);
    const output = path.join(root, 'existing');
    writeFile(output, 'index.html', 'keep this page');
    const result = run(CREATE, ['--output', output]);
    assert.equal(result.status, 1);
    assert.match(result.stderr, /Destination is not empty/);
    assert.deepEqual(fs.readdirSync(output), ['index.html']);
    assert.equal(fs.readFileSync(path.join(output, 'index.html'), 'utf8'), 'keep this page');
    const invalidOutput = path.join(root, 'invalid');
    for (const args of [
        [], ['--output'], ['--output='], ['--unknown'],
        ['--output', invalidOutput, '--title='],
        ['--output', invalidOutput, '--lang=not_a_tag'],
        ['--output', invalidOutput, '--provider=unknown'],
        ['--output', invalidOutput, '--zui-version=../3.0.0'],
    ]) {
        const failed = run(CREATE, args);
        assert.equal(failed.status, 1, JSON.stringify(args));
        assert.match(failed.stderr, /\[zui-build\]/);
        assert.equal(fs.existsSync(invalidOutput), false);
    }
    assert.equal(run(CREATE, ['--help']).status, 0);
});
