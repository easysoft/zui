#!/usr/bin/env node

import {readFile, readdir, stat} from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.less']);
const JS_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx'];
const TYPE_ORDER = new Map([
    ['config', 0],
    ['css-base', 10],
    ['control', 20],
    ['js-helpers', 30],
    ['component', 40],
    ['js-ui', 50],
    ['css-utilities', 60],
    ['js-lib', 70],
    ['other', 80],
    ['examples', 90],
]);

function usage() {
    return [
        'Usage: inspect-zui-lib.mjs --root <extension-root> [--lib <folder-or-package>] [--json]',
        '',
        'Read-only screening of direct packages under <extension-root>/lib/.',
    ].join('\n');
}

function parseArgs(argv) {
    const options = {json: false};
    for (let index = 0; index < argv.length; index += 1) {
        const argument = argv[index];
        if (argument === '--json') {
            options.json = true;
        } else if (argument === '--help' || argument === '-h') {
            options.help = true;
        } else if (argument === '--root' || argument === '--lib') {
            const value = argv[index + 1];
            if (!value || value.startsWith('--')) throw new Error(`Missing value for ${argument}`);
            options[argument.slice(2)] = value;
            index += 1;
        } else {
            throw new Error(`Unknown option: ${argument}`);
        }
    }
    if (!options.help && !options.root) throw new Error('Missing required option: --root <path>');
    return options;
}

async function isDirectory(target) {
    try {
        return (await stat(target)).isDirectory();
    } catch {
        return false;
    }
}

async function isFile(target) {
    try {
        return (await stat(target)).isFile();
    } catch {
        return false;
    }
}

async function listFiles(directory) {
    if (!await isDirectory(directory)) return [];
    const files = [];
    for (const entry of await readdir(directory, {withFileTypes: true})) {
        const target = path.join(directory, entry.name);
        if (entry.isDirectory()) files.push(...await listFiles(target));
        else if (entry.isFile()) files.push(target);
    }
    return files;
}

async function readJson(target) {
    try {
        return JSON.parse(await readFile(target, 'utf8'));
    } catch (error) {
        throw new Error(`Cannot read ${target}: ${error.message}`);
    }
}

function relativePosix(root, target) {
    return path.relative(root, target).split(path.sep).join('/');
}

function uniqueSorted(values) {
    return [...new Set(values)].sort((left, right) => left.localeCompare(right));
}

function deriveZuiName(packageJson) {
    if (typeof packageJson.zui?.name === 'string' && packageJson.zui.name) return packageJson.zui.name;
    return packageJson.name?.startsWith('@zui/') ? packageJson.name.slice('@zui/'.length) : packageJson.name ?? null;
}

function withoutComments(text) {
    return text.replace(/\/\*[\s\S]*?\*\//g, '').replace(/^\s*\/\/.*$/gm, '');
}

function hasRuntimePreactImport(text) {
    const code = withoutComments(text);
    if (/\bimport\s*\(\s*['"]preact(?:\/[^'"]*)?['"]\s*\)/.test(code)
        || /\brequire\s*\(\s*['"]preact(?:\/[^'"]*)?['"]\s*\)/.test(code)
        || /\bimport\s*['"]preact(?:\/[^'"]*)?['"]/.test(code)) {
        return true;
    }
    for (const match of code.matchAll(/\b(?:import|export)\s+([^;]*?)\s+from\s*['"]preact(?:\/[^'"]*)?['"]/g)) {
        if (!isTypeOnlyClause(match[1])) {
            return true;
        }
    }
    return false;
}

function collectEntryTargets(value, targets) {
    if (typeof value === 'string') targets.push(value);
    else if (Array.isArray(value)) value.forEach(item => collectEntryTargets(item, targets));
    else if (value && typeof value === 'object') Object.values(value).forEach(item => collectEntryTargets(item, targets));
}

function isTypeOnlyClause(clause) {
    clause = clause.trim();
    if (/^type\b/.test(clause)) return true;
    if (!clause.startsWith('{') || !clause.endsWith('}')) return false;
    const specifiers = clause.slice(1, -1).split(',').map(item => item.trim()).filter(Boolean);
    return specifiers.length > 0 && specifiers.every(specifier => /^type\b/.test(specifier));
}

function exportStatements(text) {
    const statements = [];
    for (const match of withoutComments(text).matchAll(/\bexport\s+(type\s+)?(?:\*|\{([^}]*)\})\s+from\s*['"]([^'"]+)['"]/g)) {
        const clause = match[2] === undefined ? null : `{${match[2]}}`;
        statements.push({
            source: match[3],
            typeOnly: Boolean(match[1]) || (clause !== null && isTypeOnlyClause(clause)),
        });
    }
    return statements;
}

function resolveSourceFile(filesByName, target) {
    target = target.replace(/^\.\//, '').replace(/^src\//, '');
    const extension = path.posix.extname(target);
    const candidates = extension
        ? [target]
        : [target, ...JS_EXTENSIONS.map(suffix => `${target}${suffix}`), ...JS_EXTENSIONS.map(suffix => `${target}/index${suffix}`)];
    return candidates.find(candidate => filesByName.has(candidate)) ?? null;
}

function resolveReexport(filesByName, fromFile, specifier) {
    if (!specifier.startsWith('.')) return null;
    return resolveSourceFile(filesByName, path.posix.normalize(path.posix.join(path.posix.dirname(fromFile), specifier)));
}

function publicApi(packageJson, sourceEntries) {
    const filesByName = new Map(sourceEntries
        .filter(entry => JS_EXTENSIONS.includes(path.posix.extname(entry.file)))
        .map(entry => [entry.file, entry]));
    const entryTargets = [];
    collectEntryTargets(packageJson.main, entryTargets);
    collectEntryTargets(packageJson.module, entryTargets);
    collectEntryTargets(typeof packageJson.browser === 'string' ? packageJson.browser : null, entryTargets);
    collectEntryTargets(packageJson.exports, entryTargets);
    if (!entryTargets.length) entryTargets.push('src/main.ts');
    const entries = uniqueSorted(entryTargets
        .filter(target => typeof target === 'string')
        .map(target => resolveSourceFile(filesByName, target))
        .filter(Boolean));
    const queue = [...entries];
    const reachable = new Set();
    while (queue.length) {
        const file = queue.shift();
        if (reachable.has(file)) continue;
        reachable.add(file);
        const entry = filesByName.get(file);
        if (!entry) continue;
        for (const statement of exportStatements(entry.text)) {
            if (statement.typeOnly) continue;
            const target = resolveReexport(filesByName, file, statement.source);
            if (target && !reachable.has(target)) queue.push(target);
        }
    }
    const runtimeExports = [];
    const classes = new Map();
    for (const file of [...reachable].sort()) {
        const entry = filesByName.get(file);
        if (!entry) continue;
        const code = withoutComments(entry.text);
        for (const match of code.matchAll(/\b(export\s+)?(?:default\s+)?(?:abstract\s+)?class\s+([A-Za-z_$][\w$]*)(?:\s+extends\s+([A-Za-z_$][\w$.]*))?/g)) {
            classes.set(match[2], {name: match[2], base: match[3] ?? null, file, exported: Boolean(match[1])});
            if (match[1]) runtimeExports.push({kind: 'class', name: match[2], file});
        }
        for (const match of code.matchAll(/\bexport\s+(?:default\s+)?(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/g)) {
            runtimeExports.push({kind: 'function', name: match[1], file});
        }
        for (const match of code.matchAll(/\bexport\s+(?:declare\s+)?(?:const|let|var|enum)\s+([A-Za-z_$][\w$]*)/g)) {
            runtimeExports.push({kind: 'value', name: match[1], file});
        }
        for (const match of code.matchAll(/\bexport\s*\{([\s\S]*?)\}(?!\s*from\s*['"])/g)) {
            for (const specifier of match[1].split(',').map(item => item.trim()).filter(Boolean)) {
                if (/^type\b/.test(specifier)) continue;
                const [original, alias] = specifier.split(/\s+as\s+/i);
                runtimeExports.push({kind: 'named', name: alias ?? original, file});
            }
        }
        for (const statement of exportStatements(code)) {
            if (!statement.typeOnly && !statement.source.startsWith('.')) {
                runtimeExports.push({kind: 'reexport', name: '*', source: statement.source, file});
            }
        }
        if (/\bexport\s+default\s+(?!class\b|function\b|interface\b|type\b)[^;]+/.test(code)) {
            runtimeExports.push({kind: 'default', name: 'default', file});
        }
        if (/\bmodule\.exports\b|\bexports\.[A-Za-z_$][\w$]*\s*=/.test(code)) {
            runtimeExports.push({kind: 'commonjs', name: '*', file});
        }
    }
    const inheritance = [...classes.values()]
        .filter(item => item.exported && item.base)
        .map((item) => {
            const chain = [item.name];
            let current = item;
            const seen = new Set(chain);
            while (current.base && !seen.has(current.base)) {
                chain.push(current.base);
                seen.add(current.base);
                current = classes.get(current.base);
                if (!current) break;
            }
            return {class: item.name, base: item.base, chain, file: item.file};
        })
        .sort((left, right) => left.file.localeCompare(right.file) || left.class.localeCompare(right.class));
    return {
        entries,
        files: [...reachable].sort(),
        runtimeExports: runtimeExports.filter((item, index, array) => array.findIndex(candidate => (
            candidate.kind === item.kind && candidate.name === item.name && candidate.file === item.file
            && candidate.source === item.source
        )) === index),
        inheritance,
    };
}

async function inspectDocs(libPath) {
    const docsRoot = path.join(libPath, 'docs', 'lib');
    const files = (await listFiles(docsRoot))
        .filter(file => file.endsWith('.md'))
        .map(file => relativePosix(docsRoot, file))
        .sort();
    return {
        categories: [...new Set(files.map(file => file.split('/')[0]))].sort(),
        files,
    };
}

async function inspectLibrary(root, folder) {
    const libPath = path.join(root, 'lib', folder);
    const packageJson = await readJson(path.join(libPath, 'package.json'));
    const srcPath = path.join(libPath, 'src');
    const allSourceFiles = (await listFiles(srcPath)).filter(file => SOURCE_EXTENSIONS.has(path.extname(file).toLowerCase()));
    const sourceFiles = allSourceFiles.map(file => relativePosix(srcPath, file));
    const sourceEntries = await Promise.all(allSourceFiles.map(async file => ({
        file: relativePosix(srcPath, file),
        text: await readFile(file, 'utf8'),
    })));
    const sourceText = sourceEntries.map(entry => entry.text).join('\n');
    const vanillaText = sourceEntries.filter(entry => entry.file.startsWith('vanilla/')).map(entry => entry.text).join('\n');
    const rootSourceEntries = await isDirectory(srcPath) ? await readdir(srcPath, {withFileTypes: true}) : [];
    const sourceDirs = rootSourceEntries.filter(entry => entry.isDirectory()).map(entry => entry.name).sort();
    const rootSourceFiles = rootSourceEntries.filter(entry => entry.isFile()).map(entry => entry.name).sort();
    const docs = await inspectDocs(libPath);
    const api = publicApi(packageJson, sourceEntries);
    const tsxCount = sourceFiles.filter(file => /\.(?:tsx|jsx)$/.test(file)).length;
    const cssCount = sourceFiles.filter(file => /\.(?:css|scss|less)$/.test(file)).length;
    const hasJsContributions = Array.isArray(packageJson.zui?.contributes?.js) && packageJson.zui.contributes.js.length > 0;
    const signals = {
        hasCss: cssCount > 0,
        hasPreact: tsxCount > 0 || sourceEntries.some(entry => hasRuntimePreactImport(entry.text)),
        componentFromReact: /\bComponentFromReact\b/.test(sourceText),
        vanillaComponent: /\bextends\s+Component(?:\s*<|\s*\{)/.test(vanillaText)
            || api.inheritance.some(item => item.file.startsWith('vanilla/')),
        classInheritance: api.inheritance.length > 0,
        publicJsExport: api.runtimeExports.length > 0,
        jsContribution: hasJsContributions,
        registerReactComponent: /\bregisterReactComponent\s*\(/.test(sourceText),
        registerComponent: /\b[A-Za-z_$][\w$]*\.register\s*\(/.test(sourceText),
        toggle: /\b[A-Za-z_$][\w$]*\.toggle\s*=/.test(sourceText),
        libLoader: /\bLibLoader\b/.test(sourceText),
    };
    signals.cssOnly = signals.hasCss && !signals.hasPreact && !signals.componentFromReact
        && !signals.vanillaComponent && !signals.classInheritance && !signals.publicJsExport
        && !signals.jsContribution && !signals.registerReactComponent && !signals.registerComponent;
    const zuiName = deriveZuiName(packageJson);
    const publicPath = packageJson.zui?.publicPath === undefined ? zuiName : packageJson.zui.publicPath;
    return {
        name: folder,
        folderName: folder,
        packageName: packageJson.name ?? null,
        zuiName,
        displayName: packageJson.zui?.displayName ?? null,
        type: packageJson.zui?.type ?? null,
        contributes: packageJson.zui?.contributes ?? {},
        replace: packageJson.zui?.replace ?? null,
        publicPath,
        wip: Boolean(packageJson.wip || packageJson.zui?.wip),
        notReady: Boolean(packageJson.notReady || packageJson.zui?.notReady),
        source: {
            directories: sourceDirs,
            rootFiles: rootSourceFiles,
            fileCount: sourceEntries.length,
            tsxCount,
            cssCount,
        },
        publicApi: api,
        signals,
        i18n: {
            directory: sourceDirs.includes('i18n'),
            addLang: /\bi18n\.addLang\s*\(/.test(sourceText),
            staticMap: /\bstatic\s+i18n\b/.test(sourceText),
        },
        pages: {
            readme: await isFile(path.join(libPath, 'README.md')),
            devMarkdown: await isFile(path.join(libPath, 'dev.md')),
            source: await isFile(path.join(libPath, 'dev.md'))
                ? 'dev.md'
                : (await isFile(path.join(libPath, 'README.md')) ? 'README.md' : null),
            dev: await isFile(path.join(libPath, 'dev.ts')),
            docs,
        },
    };
}

function printTable(root, libraries) {
    console.log(`ZUI extension library signals in ${root}`);
    console.log('Screening signals narrow candidates only; read source before deciding architecture.');
    console.log('');
    console.log('| Folder | Package | ZUI name | Type | Status | Source signals | i18n | Pages |');
    console.log('| --- | --- | --- | --- | --- | --- | --- | --- |');
    for (const library of libraries) {
        const status = [library.wip && 'wip', library.notReady && 'not-ready'].filter(Boolean).join(',') || '-';
        const sourceSignals = Object.entries(library.signals).filter(([, value]) => value).map(([key]) => key).join(',') || '-';
        const i18n = [library.i18n.directory && 'dir', library.i18n.addLang && 'global', library.i18n.staticMap && 'static'].filter(Boolean).join(',') || '-';
        const pages = [library.pages.readme && 'README', library.pages.devMarkdown && 'dev.md', library.pages.dev && 'dev.ts', ...library.pages.docs.categories].filter(Boolean).join(',') || '-';
        console.log(`| ${library.folderName} | ${library.packageName ?? '-'} | ${library.zuiName ?? '-'} | ${library.type ?? '-'} | ${status} | ${sourceSignals} | ${i18n} | ${pages} |`);
    }
}

async function main() {
    let options;
    try {
        options = parseArgs(process.argv.slice(2));
    } catch (error) {
        console.error(error.message);
        console.error(usage());
        process.exitCode = 2;
        return;
    }
    if (options.help) {
        console.log(usage());
        return;
    }
    try {
        const root = path.resolve(options.root);
        const libRoot = path.join(root, 'lib');
        if (!await isDirectory(libRoot)) throw new Error(`Invalid extension root: ${root} (missing lib/)`);
        const folders = [];
        for (const entry of await readdir(libRoot, {withFileTypes: true})) {
            if (await isFile(path.join(libRoot, entry.name, 'package.json'))) folders.push(entry.name);
        }
        let libraries = await Promise.all(folders.map(folder => inspectLibrary(root, folder)));
        if (options.lib) {
            const requested = options.lib.toLowerCase();
            let matches = libraries.filter(library => (
                library.folderName.toLowerCase() === requested
                || library.packageName?.toLowerCase() === requested
                || library.zuiName?.toLowerCase() === requested
            ));
            if (!matches.length && !requested.includes('/')) {
                matches = libraries.filter(library => (
                    library.packageName?.toLowerCase().split('/').at(-1) === requested
                    || library.zuiName?.toLowerCase().split('/').at(-1) === requested
                ));
            }
            if (matches.length !== 1) throw new Error(`Expected one library matching "${options.lib}", found ${matches.length}.`);
            libraries = matches;
        }
        libraries.sort((left, right) => (
            (TYPE_ORDER.get(left.type) ?? 999) - (TYPE_ORDER.get(right.type) ?? 999)
            || left.folderName.localeCompare(right.folderName)
        ));
        if (options.json) console.log(JSON.stringify({root, count: libraries.length, libraries}, null, 2));
        else printTable(root, libraries);
    } catch (error) {
        console.error(error.message);
        process.exitCode = 2;
    }
}

await main();
