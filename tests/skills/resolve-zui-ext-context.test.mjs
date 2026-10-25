import assert from 'node:assert/strict';
import {execFileSync, spawnSync} from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {URL, fileURLToPath} from 'node:url';
import test from 'node:test';

const SCRIPT = fileURLToPath(new URL('../../skills-exts/zuix-standards/scripts/resolve-zui-ext-context.mjs', import.meta.url));

function write(root, relative, content) {
    const target = path.join(root, relative);
    fs.mkdirSync(path.dirname(target), {recursive: true});
    fs.writeFileSync(target, typeof content === 'string' || Buffer.isBuffer(content) ? content : JSON.stringify(content));
}

function fixture(t) {
    const root = fs.realpathSync(fs.mkdtempSync(path.join(os.tmpdir(), 'zui-ext-context-')));
    t.after(() => fs.rmSync(root, {recursive: true, force: true}));
    const owner = path.join(root, 'owner');
    fs.mkdirSync(owner);
    execFileSync('git', ['init', '--quiet', owner]);
    const extension = path.join(owner, 'extensions/acme');
    write(extension, 'package.json', {name: 'acme', packageManager: 'pnpm@12.10.1'});
    write(extension, 'lib/widget/package.json', {
        name: '@acme/widget',
        zui: {name: 'acme-widget', type: 'component', publicPath: 'widgets'},
        dependencies: {'@acme/helper': 'workspace:*', '@zui/core': 'link:../../../../zui/lib/core'},
    });
    write(extension, 'lib/widget/src/main.ts', 'export const Widget = {};\n');
    write(extension, 'lib/helper/package.json', {name: '@acme/helper', zui: {type: 'js-helpers'}});
    return {root, owner, extension, target: path.join(extension, 'lib/widget')};
}

function host(root, name, extension, registrations) {
    const target = path.join(root, name);
    write(target, 'package.json', {name: 'zui', scripts: {dev: 'vite'}});
    write(target, 'scripts/libs/query.ts', '');
    fs.mkdirSync(path.join(target, 'lib/core'), {recursive: true});
    write(target, 'exts/libs.json', registrations ?? {acme: path.relative(target, path.join(extension, 'lib')) + '/*'});
    return target;
}

function resolve(root, args, script = SCRIPT) {
    return spawnSync(process.execPath, [script, ...args, '--json'], {cwd: root, encoding: 'utf8'});
}

function context(root, args, script) {
    const result = resolve(root, args, script);
    assert.equal(result.status, 0, result.stderr);
    return JSON.parse(result.stdout);
}

test('resolves extension and Git ownership without requiring a host', (t) => {
    const {root, owner, extension, target} = fixture(t);
    const report = context(root, ['--cwd', path.join(target, 'src/main.ts')]);
    assert.equal(report.targetLibRoot, target);
    assert.equal(report.extensionRoot, extension);
    assert.equal(report.gitRoot, owner);
    assert.equal(report.zuiRoot, null);
    assert.equal(report.extsName, null);
    assert.equal(report.packageName, '@acme/widget');
    assert.equal(report.zuiName, 'acme-widget');
    assert.equal(report.publicPath, 'widgets');
    assert.deepEqual(report.dependencyPolicy, {packageManager: 'pnpm', siblingProtocols: ['workspace'], hostDependencyMode: 'declared'});
    assert.equal(report.git.relativeExtensionPath, 'extensions/acme');
    assert.equal(report.git.relativeTargetPath, 'extensions/acme/lib/widget');
});

test('follows a host symlink back to extension ownership and resolves its registration', (t) => {
    const {root, owner, extension, target} = fixture(t);
    const zui = host(root, 'zui', extension);
    const link = path.join(zui, 'exts/acme');
    fs.symlinkSync(path.join(extension, 'lib'), link, 'dir');
    const report = context(root, ['--cwd', path.join(link, 'widget/src')]);
    assert.equal(report.targetLibRoot, target);
    assert.equal(report.extensionRoot, extension);
    assert.equal(report.gitRoot, owner);
    assert.equal(report.zuiRoot, zui);
    assert.equal(report.extsName, 'acme');
    assert.equal(report.host.registrationTarget, path.join(extension, 'lib'));
    assert.equal(report.host.matchKind, 'collection');
});

test('does not choose between multiple registered hosts without an explicit host', (t) => {
    const {root, extension} = fixture(t);
    const first = host(root, 'host-one', extension);
    const second = host(root, 'host-two', extension);
    write(extension, 'tsconfig.json', {compilerOptions: {paths: {
        '@zui/one': [path.join(first, 'lib/core')],
        '@zui/two': [path.join(second, 'lib/core')],
    }}});
    const args = ['--cwd', extension, '--lib', '@acme/widget'];
    const ambiguous = context(root, args);
    assert.equal(ambiguous.zuiRoot, null);
    assert.equal(ambiguous.extsName, null);
    const explicit = context(root, [...args, '--host', second]);
    assert.equal(explicit.zuiRoot, second);
    assert.equal(explicit.extsName, 'acme');
});

test('does not discard a host whose registration group is ambiguous before selecting a host', (t) => {
    const {root, extension} = fixture(t);
    const first = host(root, 'host-one', extension);
    const second = host(root, 'host-two', extension, {first: extension, second: path.join(extension, 'lib')});
    write(extension, 'tsconfig.json', {compilerOptions: {paths: {
        '@zui/one': [path.join(first, 'lib/core')],
        '@zui/two': [path.join(second, 'lib/core')],
    }}});
    const args = ['--cwd', extension, '--lib', '@acme/widget'];
    const ambiguous = context(root, args);
    assert.equal(ambiguous.zuiRoot, null);
    assert.equal(ambiguous.extsName, null);
    const explicit = context(root, [...args, '--host', first]);
    assert.equal(explicit.zuiRoot, first);
    assert.equal(explicit.extsName, 'acme');
});

test('keeps an explicitly selected host but does not guess an ambiguous registration group', (t) => {
    const {root, extension} = fixture(t);
    const zui = host(root, 'zui', extension, {first: extension, second: path.join(extension, 'lib')});
    const report = context(root, ['--cwd', extension, '--lib', 'acme-widget', '--host', zui]);
    assert.equal(report.zuiRoot, zui);
    assert.equal(report.extsName, null);
    assert.equal(report.host.registrationPath, null);
});

test('plans only a safe new library folder without writing it', (t) => {
    const {root, extension} = fixture(t);
    const report = context(root, ['--cwd', extension, '--lib', 'new-widget']);
    assert.equal(report.targetLibRoot, null);
    assert.equal(report.plannedTargetLibRoot, path.join(extension, 'lib/new-widget'));
    assert.equal(report.packageName, null);
    assert.equal(fs.existsSync(report.plannedTargetLibRoot), false);
    const unsafe = context(root, ['--cwd', extension, '--lib', '../outside']);
    assert.equal(unsafe.plannedTargetLibRoot, null);
    assert.equal(unsafe.targetLibRoot, null);
    assert.equal(fs.existsSync(path.join(extension, 'outside')), false);
});

test('supports a copied resolver and a single-package extension', (t) => {
    const {root, owner} = fixture(t);
    const single = path.join(owner, 'single');
    write(single, 'package.json', {name: '@zui/example', zui: {type: 'js-helpers'}});
    const copied = path.join(root, 'installed/resolve.mjs');
    write(root, 'installed/resolve.mjs', fs.readFileSync(SCRIPT));
    const report = context(root, ['--cwd', single, '--lib', 'example'], copied);
    assert.equal(report.extensionRoot, single);
    assert.equal(report.targetLibRoot, single);
    assert.equal(report.gitRoot, owner);
    assert.equal(report.zuiName, 'example');
    assert.equal(report.publicPath, 'example');
});

test('rejects ambiguous library names and invalid explicit context', (t) => {
    const {root, extension} = fixture(t);
    write(extension, 'lib/widget/package.json', {name: '@acme/shared', zui: {type: 'component'}});
    write(extension, 'lib/another/package.json', {name: '@other/shared', zui: {type: 'component'}});
    for (const args of [
        [],
        ['--cwd'],
        ['--cwd', path.join(root, 'missing')],
        ['--cwd', extension, '--host', root],
        ['--cwd', extension, '--lib', 'shared'],
        ['--cwd', extension, '--unknown'],
    ]) {
        const result = resolve(root, args);
        assert.equal(result.status, 2, JSON.stringify(args));
        assert.equal(result.stdout, '');
        assert.ok(result.stderr.trim());
    }
});
