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
        'Usage: inspect-zui-lib.mjs --root <path> [--lib <name>] [--search <keywords>] [--json]',
        '',
        'Options:',
        '  --root <path>  ZUI repository root containing lib/',
        '  --lib <name>   Filter by folder name or package name',
        '  --search <keywords>  Find reuse candidates using case-insensitive literal words (OR)',
        '                       Search root/lib, a library collection, or one library; show up to 8 hits per library',
        '  --json         Emit machine-readable JSON',
        '  --help         Show this help',
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
        } else if (argument === '--root' || argument === '--lib' || argument === '--search') {
            const value = argv[index + 1];
            if (!value || value.startsWith('--')) {
                throw new Error(`Missing value for ${argument}`);
            }
            options[argument.slice(2)] = value;
            index += 1;
        } else {
            throw new Error(`Unknown option: ${argument}`);
        }
    }
    if (!options.help && !options.root) {
        throw new Error('Missing required option: --root <path>');
    }
    if (options.search !== undefined && !options.search.trim()) {
        throw new Error('--search requires at least one non-whitespace keyword');
    }
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
    if (!await isDirectory(directory)) {
        return [];
    }
    const files = [];
    const entries = await readdir(directory, {withFileTypes: true});
    for (const entry of entries) {
        const target = path.join(directory, entry.name);
        if (entry.isDirectory()) {
            files.push(...await listFiles(target));
        } else if (entry.isFile()) {
            files.push(target);
        }
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

function hasPattern(text, pattern) {
    return pattern.test(text);
}

function withoutComments(text) {
    return text
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/^\s*\/\/.*$/gm, '');
}

function isTypeOnlyClause(clause) {
    clause = clause.trim();
    if (/^type\b/.test(clause)) {
        return true;
    }
    if (!clause.startsWith('{') || !clause.endsWith('}')) {
        return false;
    }
    const specifiers = clause.slice(1, -1).split(',').map(specifier => specifier.trim()).filter(Boolean);
    return specifiers.length > 0 && specifiers.every(specifier => /^type\b/.test(specifier));
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

function collectStringTargets(value, targets) {
    if (typeof value === 'string') {
        targets.push(value);
    } else if (Array.isArray(value)) {
        value.forEach(item => collectStringTargets(item, targets));
    } else if (value && typeof value === 'object') {
        Object.values(value).forEach(item => collectStringTargets(item, targets));
    }
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
    if (!specifier.startsWith('.')) {
        return null;
    }
    const target = path.posix.normalize(path.posix.join(path.posix.dirname(fromFile), specifier));
    return resolveSourceFile(filesByName, target);
}

// Keep this block identical in both standards skills; installed scripts must remain self-contained.
function exportStatements(text) {
    const statements = [];
    for (const match of withoutComments(text).matchAll(/\bexport\b\s*(type\s+)?(?:\*(?:\s+as\s+([A-Za-z_$][\w$]*))?|\{([^}]*)\})(?:\s+from\s*['"]([^'"]+)['"])?/g)) {
        const specifiers = match[3] === undefined ? null : match[3].split(',').map((specifier) => {
            const parsed = specifier.trim().match(/^(type\s+)?([A-Za-z_$][\w$]*)(?:\s+as\s+([A-Za-z_$][\w$]*))?$/);
            return parsed ? {original: parsed[2], name: parsed[3] ?? parsed[2], typeOnly: Boolean(parsed[1])} : null;
        }).filter(Boolean);
        statements.push({source: match[4], namespace: match[2], typeOnly: Boolean(match[1]), specifiers});
    }
    return statements;
}

function inspectPublicApi(packageJson, textEntries) {
    const filesByName = new Map(textEntries
        .filter(entry => JS_EXTENSIONS.includes(path.posix.extname(entry.file)) && !/\.d\.ts$/.test(entry.file))
        .map(entry => [entry.file, entry]));
    const entryTargets = [];
    collectStringTargets(packageJson.main, entryTargets);
    collectStringTargets(typeof packageJson.browser === 'string' ? packageJson.browser : null, entryTargets);
    collectStringTargets(packageJson.module, entryTargets);
    collectStringTargets(packageJson.exports, entryTargets);
    if (!entryTargets.length) {
        entryTargets.push('src/main.ts');
    }
    const entries = uniqueSorted(entryTargets.map(target => resolveSourceFile(filesByName, target)).filter(Boolean));
    const reachable = new Set();
    const unresolved = [];
    const modules = new Map();
    const classes = new Map();
    const reportUnknown = (file, source, reason) => unresolved.push({file, ...(source ? {source} : {}), reason});
    for (const target of uniqueSorted(entryTargets)) {
        if (!/\.d\.ts$/.test(target) && !resolveSourceFile(filesByName, target)) {
            reportUnknown(null, target, 'entry-not-resolved');
        }
    }

    function inspectModule(file, visiting = new Set()) {
        if (visiting.has(file)) {
            reportUnknown(file, null, 'cyclic-reexport');
            return {exports: new Map(), types: new Set()};
        }
        if (modules.has(file)) {
            return modules.get(file);
        }
        reachable.add(file);
        visiting = new Set([...visiting, file]);
        const code = withoutComments(filesByName.get(file).text);
        const exports = new Map();
        const types = new Set();
        const locals = new Map();
        const localTypes = new Set();
        for (const match of code.matchAll(/\b(export\s+)?(default\s+)?(?:abstract\s+)?class\s+([A-Za-z_$][\w$]*)(?:\s+extends\s+([A-Za-z_$][\w$.]*))?/g)) {
            const item = {kind: 'class', name: match[3], file, localName: match[3]};
            locals.set(item.name, item);
            classes.set(`${file}:${item.name}`, {name: item.name, base: match[4] ?? null, file});
            if (match[1]) {
                const name = match[2] ? 'default' : item.name;
                exports.set(name, {...item, name});
            }
        }
        for (const match of code.matchAll(/\b(export\s+)?(default\s+)?(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/g)) {
            const item = {kind: 'function', name: match[3], file, localName: match[3]};
            locals.set(item.name, item);
            if (match[1]) {
                const name = match[2] ? 'default' : item.name;
                exports.set(name, {...item, name});
            }
        }
        for (const match of code.matchAll(/\b(export\s+)?(?:declare\s+)?(?:const|let|var|enum)\s+([A-Za-z_$][\w$]*)/g)) {
            const item = {kind: 'value', name: match[2], file, localName: match[2]};
            locals.set(item.name, item);
            if (match[1]) {
                exports.set(item.name, item);
            }
        }
        for (const match of code.matchAll(/\b(export\s+)?(?:default\s+)?(?:interface|type)\s+([A-Za-z_$][\w$]*)/g)) {
            localTypes.add(match[2]);
            if (match[1]) {
                types.add(match[2]);
            }
        }
        if (/\bexport\s+default\s+(?!interface\b)[^;]+/.test(code) && !exports.has('default')) {
            exports.set('default', {kind: 'default', name: 'default', file, localName: 'default'});
        }
        if (/\bmodule\.exports\b|\bexports\.[A-Za-z_$][\w$]*\s*=/.test(code)) {
            reportUnknown(file, null, 'commonjs-exports');
        }
        const stars = [];
        for (const statement of exportStatements(code)) {
            const {source, namespace, typeOnly, specifiers} = statement;
            if (typeOnly) {
                for (const item of specifiers ?? []) {
                    types.add(item.name);
                }
                if (namespace) {
                    types.add(namespace);
                }
                continue;
            }
            if (specifiers?.every(item => item.typeOnly)) {
                specifiers.forEach(item => types.add(item.name));
                continue;
            }
            const target = source && resolveReexport(filesByName, file, source);
            // shortcut: Syntax screening cannot prove external symbols or TypeScript erasure; resolve semantically before API validation.
            const imported = target ? inspectModule(target, visiting) : null;
            if (source && !target) {
                reportUnknown(file, source, source.startsWith('.') ? 'source-not-resolved' : 'external-module');
            }
            if (namespace) {
                exports.set(namespace, {kind: 'namespace', name: namespace, source, file, localName: namespace});
            } else if (specifiers) {
                for (const item of specifiers) {
                    if (item.typeOnly || (imported ? imported.types.has(item.original) && !imported.exports.has(item.original) : !source && localTypes.has(item.original) && !locals.has(item.original))) {
                        types.add(item.name);
                        continue;
                    }
                    const original = imported ? imported.exports.get(item.original) : !source && locals.get(item.original);
                    if (original) {
                        exports.set(item.name, {...original, name: item.name});
                    } else if (!imported) {
                        exports.set(item.name, {kind: source ? 'reexport' : 'named', name: item.name, ...(source ? {source} : {}), file, localName: item.original});
                        if (!source) {
                            reportUnknown(file, null, `local-binding-not-resolved:${item.original}`);
                        }
                    } else {
                        reportUnknown(file, source, `export-not-resolved:${item.original}`);
                    }
                }
            } else if (imported) {
                stars.push(imported.exports);
                imported.types.forEach(name => types.add(name));
            } else if (source) {
                reportUnknown(file, source, 'wildcard-exports-not-resolved');
            }
        }
        const starExports = new Map();
        const ambiguous = new Set();
        for (const candidates of stars) {
            for (const [name, item] of candidates) {
                if (name === 'default' || exports.has(name)) {
                    continue;
                }
                const prior = starExports.get(name);
                if (prior && (prior.file !== item.file || prior.localName !== item.localName || prior.source !== item.source)) {
                    ambiguous.add(name);
                    reportUnknown(file, null, `ambiguous-wildcard-export:${name}`);
                } else {
                    starExports.set(name, item);
                }
            }
        }
        for (const [name, item] of starExports) {
            if (!ambiguous.has(name)) {
                exports.set(name, item);
            }
        }
        const result = {exports, types};
        modules.set(file, result);
        return result;
    }

    const runtimeExports = entries.flatMap(file => [...inspectModule(file).exports.values()]);
    const inheritance = runtimeExports.filter(item => item.kind === 'class').flatMap((item) => {
        let current = classes.get(`${item.file}:${item.localName}`);
        if (!current?.base) {
            return [];
        }
        const base = current.base;
        const chain = [item.name];
        const seen = new Set([current.name]);
        while (current?.base && !seen.has(current.base)) {
            chain.push(current.base);
            seen.add(current.base);
            current = classes.get(`${current.file}:${current.base}`);
        }
        return [{class: item.name, base, chain, file: item.file}];
    });
    const uniqueItems = items => [...new Map(items.map(item => [JSON.stringify(item), item])).values()];
    return {
        analysis: 'syntax-candidates',
        notice: 'Candidates from recognized export syntax, merged across package entries; not a complete or verified TypeScript API. Check source and unresolved items before importing.',
        entries,
        files: [...reachable].sort((left, right) => left.localeCompare(right)),
        runtimeExports: uniqueItems(runtimeExports.map(({localName: _localName, ...item}) => item)),
        inheritance: uniqueItems(inheritance).sort((left, right) => left.file.localeCompare(right.file) || left.class.localeCompare(right.class)),
        unresolved: uniqueItems(unresolved),
    };
}

async function inspectDocs(libPath) {
    const docsRoot = path.join(libPath, 'docs', 'lib');
    if (!await isDirectory(docsRoot)) {
        return {categories: [], files: []};
    }
    const files = (await listFiles(docsRoot))
        .filter(file => path.extname(file).toLowerCase() === '.md')
        .map(file => relativePosix(docsRoot, file))
        .sort((left, right) => left.localeCompare(right));
    return {
        categories: uniqueSorted(files.map(file => file.split('/')[0]).filter(Boolean)),
        files,
    };
}

async function inspectLibrary(root, folder) {
    const libPath = path.join(root, 'lib', folder);
    const packagePath = path.join(libPath, 'package.json');
    const packageJson = await readJson(packagePath);
    const srcPath = path.join(libPath, 'src');
    const allSourceFiles = (await listFiles(srcPath))
        .filter(file => SOURCE_EXTENSIONS.has(path.extname(file).toLowerCase()));
    const sourceFiles = allSourceFiles.map(file => relativePosix(srcPath, file));
    const sourceEntries = await isDirectory(srcPath) ? await readdir(srcPath, {withFileTypes: true}) : [];
    const sourceDirs = sourceEntries.filter(entry => entry.isDirectory()).map(entry => entry.name).sort();
    const rootSourceFiles = sourceEntries.filter(entry => entry.isFile()).map(entry => entry.name).sort();
    const textEntries = await Promise.all(allSourceFiles.map(async file => ({
        file: relativePosix(srcPath, file),
        text: await readFile(file, 'utf8'),
    })));
    const sourceText = textEntries.map(entry => entry.text).join('\n');
    const vanillaText = textEntries
        .filter(entry => entry.file.startsWith('vanilla/'))
        .map(entry => entry.text)
        .join('\n');
    const docs = await inspectDocs(libPath);
    const publicApi = inspectPublicApi(packageJson, textEntries);
    const tsxCount = sourceFiles.filter(file => file.endsWith('.tsx') || file.endsWith('.jsx')).length;
    const cssCount = sourceFiles.filter(file => /\.(?:css|scss|less)$/.test(file)).length;
    const hasJsContributions = Array.isArray(packageJson.zui?.contributes?.js) && packageJson.zui.contributes.js.length > 0;
    const signals = {
        hasCss: cssCount > 0,
        hasPreact: tsxCount > 0 || textEntries.some(entry => hasRuntimePreactImport(entry.text)),
        componentFromReact: hasPattern(sourceText, /\bComponentFromReact\b/),
        vanillaComponent: hasPattern(vanillaText, /\bextends\s+Component(?:\s*<|\s*\{)/)
            || publicApi.inheritance.some(item => item.file.startsWith('vanilla/')),
        classInheritance: publicApi.inheritance.length > 0,
        publicJsExport: publicApi.runtimeExports.length > 0 || publicApi.unresolved.some(item => item.reason !== 'entry-not-resolved'),
        jsContribution: hasJsContributions,
        registerReactComponent: hasPattern(sourceText, /\bregisterReactComponent\s*\(/),
        registerComponent: hasPattern(sourceText, /\b[A-Za-z_$][\w$]*\.register\s*\(/),
        toggle: hasPattern(sourceText, /\b[A-Za-z_$][\w$]*\.toggle\s*=/),
    };
    signals.cssOnly = signals.hasCss
        && !signals.hasPreact
        && !signals.componentFromReact
        && !signals.vanillaComponent
        && !signals.classInheritance
        && !signals.publicJsExport
        && !signals.jsContribution
        && !signals.registerReactComponent
        && !signals.registerComponent;

    const readme = await isFile(path.join(libPath, 'README.md'));
    const devMarkdown = await isFile(path.join(libPath, 'dev.md'));

    return {
        name: folder,
        packageName: packageJson.name ?? null,
        displayName: packageJson.zui?.displayName ?? null,
        type: packageJson.zui?.type ?? null,
        contributes: packageJson.zui?.contributes ?? {},
        wip: Boolean(packageJson.wip || packageJson.zui?.wip),
        notReady: Boolean(packageJson.notReady || packageJson.zui?.notReady),
        source: {
            directories: sourceDirs,
            rootFiles: rootSourceFiles,
            fileCount: sourceFiles.length,
            tsxCount,
            cssCount,
        },
        publicApi,
        signals,
        i18n: {
            directory: sourceDirs.includes('i18n'),
            addLang: hasPattern(sourceText, /\bi18n\.addLang\s*\(/),
            staticMap: hasPattern(sourceText, /\bstatic\s+i18n\b/),
        },
        pages: {
            readme,
            devMarkdown,
            aiReference: await isFile(path.join(libPath, 'ai.md')),
            source: devMarkdown ? 'dev.md' : (readme ? 'README.md' : null),
            dev: await isFile(path.join(libPath, 'dev.ts')),
            docs,
        },
    };
}

function contributionText(contributes) {
    const parts = [];
    for (const key of ['css', 'js', 'config']) {
        const values = contributes[key];
        if (Array.isArray(values) && values.length) {
            parts.push(`${key}:${values.join(',')}`);
        }
    }
    return parts.join(' ') || '-';
}

function signalText(signals) {
    const labels = {
        cssOnly: 'css-only',
        hasPreact: 'preact',
        componentFromReact: 'component-from-react',
        vanillaComponent: 'vanilla-component',
        classInheritance: 'class-inheritance',
        publicJsExport: 'public-js-export',
        jsContribution: 'js-contribution',
        registerReactComponent: 'react-registry',
        registerComponent: 'component-registry',
        toggle: 'toggle',
    };
    return Object.entries(labels)
        .filter(([key]) => signals[key])
        .map(([, label]) => label)
        .join(',') || '-';
}

function escapeCell(value) {
    return String(value).replaceAll('|', '\\|').replaceAll('\n', ' ');
}

function printTable(root, libraries) {
    const rows = [
        ['Library', 'Type', 'Status', 'Contributes', 'Source dirs', 'Screening signals', 'i18n', 'README', 'dev.md', 'Page source', 'dev.ts', 'Docs', 'ai.md'],
        ['---', '---', '---', '---', '---', '---', '---', '---', '---', '---', '---', '---', '---'],
    ];
    for (const lib of libraries) {
        const i18nSignals = [
            lib.i18n.directory && 'dir',
            lib.i18n.addLang && 'global',
            lib.i18n.staticMap && 'static',
        ].filter(Boolean).join(',') || '-';
        const status = [lib.wip && 'wip', lib.notReady && 'not-ready'].filter(Boolean).join(',') || '-';
        rows.push([
            lib.name,
            lib.type ?? '-',
            status,
            contributionText(lib.contributes),
            lib.source.directories.join(',') || '(root)',
            signalText(lib.signals),
            i18nSignals,
            lib.pages.readme ? 'yes' : 'no',
            lib.pages.devMarkdown ? 'yes' : 'no',
            lib.pages.source ?? '-',
            lib.pages.dev ? 'yes' : 'no',
            lib.pages.docs.categories.join(',') || '-',
            lib.pages.aiReference ? 'yes' : 'no',
        ]);
    }
    console.log(`ZUI library signals in ${root}`);
    console.log('These signals only narrow candidate libraries; read source before deciding architecture.');
    console.log('');
    for (const row of rows) {
        console.log(`| ${row.map(escapeCell).join(' | ')} |`);
    }
}

// Keep this search block identical in both standards skills so either CLI works after installation.
const SEARCH_MATCH_LIMIT = 8;

async function discoverSearchLibraries(root) {
    if (!await isDirectory(root)) {
        throw new Error('Invalid search root: ' + root);
    }
    const nestedRoot = path.join(root, 'lib');
    let collectionRoot = root;
    if (await isDirectory(nestedRoot)) {
        collectionRoot = nestedRoot;
    } else if (await isFile(path.join(root, 'package.json'))) {
        const packageJson = await readJson(path.join(root, 'package.json'));
        if (packageJson.name && (packageJson.zui || await isDirectory(path.join(root, 'src')))) {
            return [{path: root, packageJson}];
        }
    }
    const libraries = [];
    for (const entry of await readdir(collectionRoot, {withFileTypes: true})) {
        const libraryPath = path.join(collectionRoot, entry.name);
        if (!await isFile(path.join(libraryPath, 'package.json'))) {
            continue;
        }
        const packageJson = await readJson(path.join(libraryPath, 'package.json'));
        if (typeof packageJson.name === 'string' && packageJson.name) {
            libraries.push({path: libraryPath, packageJson});
        }
    }
    return libraries.sort((left, right) => left.path.localeCompare(right.path));
}

function searchSnippet(text, terms) {
    text = text.trim().replace(/\s+/g, ' ');
    const lower = text.toLowerCase();
    const positions = terms.map(term => lower.indexOf(term)).filter(position => position >= 0);
    const start = Math.max(0, Math.min(...positions, text.length) - 70);
    return (start ? '…' : '') + text.slice(start, start + 220) + (text.length > start + 220 ? '…' : '');
}

async function searchLibrary(library, terms) {
    const {packageJson, path: libraryPath} = library;
    const name = path.basename(libraryPath);
    const zuiName = packageJson.zui?.name ?? packageJson.name.replace(/^@zui\//, '');
    const matches = [];
    let matchesTotal = 0;
    const contains = text => terms.some(term => text.toLowerCase().includes(term));
    const addMatch = (kind, file, line, text) => {
        matchesTotal += 1;
        if (matches.length < SEARCH_MATCH_LIMIT) {
            matches.push({kind, file, line, text: searchSnippet(text, terms)});
        }
    };
    const metadata = {
        folder: name,
        packageName: packageJson.name,
        zuiName,
        displayName: packageJson.zui?.displayName,
        description: packageJson.description,
        keywords: Array.isArray(packageJson.keywords) ? packageJson.keywords.join(' ') : packageJson.keywords,
    };
    for (const [field, value] of Object.entries(metadata)) {
        if (typeof value === 'string' && contains(value)) {
            addMatch('metadata', field === 'folder' ? null : 'package.json', null, field + ': ' + value);
        }
    }
    const sourceFiles = (await listFiles(path.join(libraryPath, 'src')))
        .filter(file => SOURCE_EXTENSIONS.has(path.extname(file).toLowerCase())).sort();
    const docFiles = (await listFiles(path.join(libraryPath, 'docs')))
        .filter(file => path.extname(file).toLowerCase() === '.md').sort();
    const pageFiles = [];
    for (const page of ['README.md', 'dev.md', 'ai.md']) {
        const file = path.join(libraryPath, page);
        if (await isFile(file)) {
            pageFiles.push(file);
        }
    }
    // ponytail: Literal matches are reuse candidates; verify public exports in source before importing.
    for (const file of [...sourceFiles, ...pageFiles, ...docFiles]) {
        const relativeFile = relativePosix(libraryPath, file);
        if (contains(relativeFile)) {
            addMatch('path', relativeFile, null, relativeFile);
        }
        const lines = (await readFile(file, 'utf8')).split(/\r?\n/);
        for (const [index, line] of lines.entries()) {
            if (contains(line)) {
                addMatch(relativeFile.startsWith('src/') ? 'source' : 'docs', relativeFile, index + 1, line);
            }
        }
    }
    if (!matchesTotal) {
        return null;
    }
    return {
        name,
        packageName: packageJson.name,
        zuiName,
        path: libraryPath,
        displayName: packageJson.zui?.displayName ?? null,
        description: packageJson.description ?? null,
        type: packageJson.zui?.type ?? null,
        wip: Boolean(packageJson.wip || packageJson.zui?.wip),
        notReady: Boolean(packageJson.notReady || packageJson.zui?.notReady),
        matchesTotal,
        matchesTruncated: matchesTotal > matches.length,
        matches,
    };
}

async function searchLibraries(root, options) {
    const terms = [...new Set(options.search.toLowerCase().trim().split(/\s+/))];
    let candidates = await discoverSearchLibraries(root);
    if (options.lib) {
        const requested = options.lib.toLowerCase();
        candidates = candidates.filter((library) => {
            const names = [path.basename(library.path), library.packageJson.name, library.packageJson.zui?.name]
                .filter(name => typeof name === 'string').map(name => name.toLowerCase());
            return names.some(name => name === requested || (!requested.includes('/') && name.split('/').at(-1) === requested));
        });
        if (!candidates.length) {
            throw new Error('ZUI library not found: ' + options.lib);
        }
    }
    const libraries = (await Promise.all(candidates.map(library => searchLibrary(library, terms)))).filter(Boolean);
    const notice = 'Matches are reuse candidates, not verified public exports. Check the package entry and usage before importing.';
    const report = {root, query: options.search, terms, scanned: candidates.length, count: libraries.length, notice, libraries};
    if (options.json) {
        console.log(JSON.stringify(report, null, 2));
        return;
    }
    console.log('ZUI reuse candidates in ' + root + ': ' + libraries.length + ' of ' + candidates.length + ' libraries');
    console.log(notice);
    for (const library of libraries) {
        const status = [library.wip && 'wip', library.notReady && 'not-ready'].filter(Boolean).join(', ') || 'ready';
        console.log('\n' + library.packageName + ' [' + (library.type ?? 'unknown') + '; ' + status + '] ' + library.path);
        console.log('  Matches: ' + library.matchesTotal + (library.matchesTruncated ? ' (showing ' + library.matches.length + ', truncated)' : ''));
        for (const match of library.matches) {
            console.log('  ' + (match.file ?? '(folder)') + (match.line === null ? '' : ':' + match.line) + ' [' + match.kind + '] ' + match.text);
        }
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

    const root = path.resolve(options.root);
    if (options.search !== undefined) {
        try {
            await searchLibraries(root, options);
        } catch (error) {
            console.error(error.message);
            process.exitCode = 2;
        }
        return;
    }
    const libRoot = path.join(root, 'lib');
    if (!await isDirectory(libRoot)) {
        console.error(`Invalid ZUI root: ${root} (missing lib/)`);
        process.exitCode = 2;
        return;
    }

    const entries = await readdir(libRoot, {withFileTypes: true});
    const folders = [];
    for (const entry of entries) {
        if (entry.isDirectory() && await isFile(path.join(libRoot, entry.name, 'package.json'))) {
            folders.push(entry.name);
        }
    }

    let libraries = await Promise.all(folders.map(folder => inspectLibrary(root, folder)));
    if (options.lib) {
        const requested = options.lib.toLowerCase().replace(/^@zui\//, '');
        libraries = libraries.filter(lib => (
            lib.name.toLowerCase() === requested
            || lib.packageName?.toLowerCase() === options.lib.toLowerCase()
            || lib.packageName?.toLowerCase() === `@zui/${requested}`
        ));
        if (!libraries.length) {
            console.error(`ZUI library not found: ${options.lib}`);
            process.exitCode = 2;
            return;
        }
    }

    libraries.sort((left, right) => {
        const order = (TYPE_ORDER.get(left.type) ?? 999) - (TYPE_ORDER.get(right.type) ?? 999);
        return order || left.name.localeCompare(right.name);
    });

    if (options.json) {
        console.log(JSON.stringify({root, count: libraries.length, libraries}, null, 2));
    } else {
        printTable(root, libraries);
    }
}

await main();
