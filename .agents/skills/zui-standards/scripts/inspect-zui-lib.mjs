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
        'Usage: inspect-zui-lib.mjs --root <path> [--lib <name>] [--json]',
        '',
        'Options:',
        '  --root <path>  ZUI repository root containing lib/',
        '  --lib <name>   Filter by folder name or package name',
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
        } else if (argument === '--root' || argument === '--lib') {
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

function exportStatements(text) {
    const code = withoutComments(text);
    const statements = [];
    for (const match of code.matchAll(/\bexport\s+(type\s+)?(?:\*|\{([^}]*)\})\s+from\s*['"]([^'"]+)['"]/g)) {
        const specifiers = match[2] === undefined ? null : `{${match[2]}}`;
        statements.push({
            source: match[3],
            typeOnly: Boolean(match[1]) || (specifiers !== null && isTypeOnlyClause(specifiers)),
        });
    }
    return statements;
}

function inspectPublicApi(packageJson, textEntries) {
    const filesByName = new Map(textEntries
        .filter(entry => JS_EXTENSIONS.includes(path.posix.extname(entry.file)))
        .map(entry => [entry.file, entry]));
    const entryTargets = [];
    collectStringTargets(packageJson.main, entryTargets);
    collectStringTargets(typeof packageJson.browser === 'string' ? packageJson.browser : null, entryTargets);
    collectStringTargets(packageJson.module, entryTargets);
    collectStringTargets(packageJson.exports, entryTargets);
    if (!entryTargets.length) {
        entryTargets.push('src/main.ts');
    }
    const entries = uniqueSorted(entryTargets
        .map(target => resolveSourceFile(filesByName, target))
        .filter(Boolean));
    const queue = [...entries];
    const reachable = new Set();
    while (queue.length) {
        const file = queue.shift();
        if (reachable.has(file)) {
            continue;
        }
        reachable.add(file);
        const entry = filesByName.get(file);
        if (!entry) {
            continue;
        }
        for (const statement of exportStatements(entry.text)) {
            if (statement.typeOnly) {
                continue;
            }
            const target = resolveReexport(filesByName, file, statement.source);
            if (target && !reachable.has(target)) {
                queue.push(target);
            }
        }
    }

    const runtimeExports = [];
    const classes = new Map();
    for (const file of [...reachable].sort((left, right) => left.localeCompare(right))) {
        const code = withoutComments(filesByName.get(file)?.text ?? '');
        for (const match of code.matchAll(/\b(export\s+)?(?:default\s+)?(?:abstract\s+)?class\s+([A-Za-z_$][\w$]*)(?:\s+extends\s+([A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*)*))?/g)) {
            classes.set(match[2], {name: match[2], base: match[3] ?? null, file, exported: Boolean(match[1])});
            if (match[1]) {
                runtimeExports.push({kind: 'class', name: match[2], file});
            }
        }
        for (const match of code.matchAll(/\bexport\s+(?:default\s+)?(?:async\s+)?function\s+([A-Za-z_$][\w$]*)/g)) {
            runtimeExports.push({kind: 'function', name: match[1], file});
        }
        for (const match of code.matchAll(/\bexport\s+(?:declare\s+)?(?:const|let|var|enum)\s+([A-Za-z_$][\w$]*)/g)) {
            runtimeExports.push({kind: 'value', name: match[1], file});
        }
        for (const match of code.matchAll(/\bexport\s*\{([\s\S]*?)\}(?!\s*from\s*['"])/g)) {
            const specifiers = match[1].split(',').map(specifier => specifier.trim()).filter(Boolean);
            for (const specifier of specifiers) {
                if (/^type\b/.test(specifier)) {
                    continue;
                }
                const parts = specifier.split(/\s+as\s+/i);
                runtimeExports.push({kind: 'named', name: parts[1] ?? parts[0], file});
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
                if (!current) {
                    break;
                }
            }
            return {class: item.name, base: item.base, chain, file: item.file};
        })
        .sort((left, right) => left.file.localeCompare(right.file) || left.class.localeCompare(right.class));

    return {
        entries,
        files: [...reachable].sort((left, right) => left.localeCompare(right)),
        runtimeExports: runtimeExports.filter((item, index, array) => (
            array.findIndex(candidate => candidate.kind === item.kind
                && candidate.name === item.name
                && candidate.file === item.file
                && candidate.source === item.source) === index
        )),
        inheritance,
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
        publicJsExport: publicApi.runtimeExports.length > 0,
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
        ['Library', 'Type', 'Status', 'Contributes', 'Source dirs', 'Screening signals', 'i18n', 'README', 'dev.md', 'Page source', 'dev.ts', 'Docs'],
        ['---', '---', '---', '---', '---', '---', '---', '---', '---', '---', '---', '---'],
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
        ]);
    }
    console.log(`ZUI library signals in ${root}`);
    console.log('These signals only narrow candidate libraries; read source before deciding architecture.');
    console.log('');
    for (const row of rows) {
        console.log(`| ${row.map(escapeCell).join(' | ')} |`);
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
