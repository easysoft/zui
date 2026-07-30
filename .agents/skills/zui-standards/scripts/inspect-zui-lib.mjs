#!/usr/bin/env node

import {readFile, readdir, stat} from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const SOURCE_EXTENSIONS = new Set(['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', '.less']);
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
    const tsxCount = sourceFiles.filter(file => file.endsWith('.tsx') || file.endsWith('.jsx')).length;
    const cssCount = sourceFiles.filter(file => /\.(?:css|scss|less)$/.test(file)).length;
    const signals = {
        hasCss: cssCount > 0,
        hasPreact: tsxCount > 0 || hasPattern(sourceText, /from\s+['"]preact(?:\/[^'"]*)?['"]/),
        componentFromReact: hasPattern(sourceText, /\bComponentFromReact\b/),
        vanillaComponent: hasPattern(vanillaText, /\bextends\s+Component(?:\s*<|\s*\{)/),
        registerReactComponent: hasPattern(sourceText, /\bregisterReactComponent\s*\(/),
        registerComponent: hasPattern(sourceText, /\b[A-Za-z_$][\w$]*\.register\s*\(/),
        toggle: hasPattern(sourceText, /\b[A-Za-z_$][\w$]*\.toggle\s*=/),
    };
    signals.cssOnly = signals.hasCss
        && !signals.hasPreact
        && !signals.componentFromReact
        && !signals.vanillaComponent
        && !signals.registerReactComponent
        && !signals.registerComponent;

    return {
        name: folder,
        packageName: packageJson.name ?? null,
        displayName: packageJson.zui?.displayName ?? null,
        type: packageJson.zui?.type ?? null,
        contributes: packageJson.zui?.contributes ?? {},
        source: {
            directories: sourceDirs,
            rootFiles: rootSourceFiles,
            fileCount: sourceFiles.length,
            tsxCount,
            cssCount,
        },
        signals,
        i18n: {
            directory: sourceDirs.includes('i18n'),
            addLang: hasPattern(sourceText, /\bi18n\.addLang\s*\(/),
            staticMap: hasPattern(sourceText, /\bstatic\s+i18n\b/),
        },
        pages: {
            readme: await isFile(path.join(libPath, 'README.md')),
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
        ['Library', 'Type', 'Contributes', 'Source dirs', 'Architecture signals', 'i18n', 'README', 'dev.ts', 'Docs'],
        ['---', '---', '---', '---', '---', '---', '---', '---', '---'],
    ];
    for (const lib of libraries) {
        const i18nSignals = [
            lib.i18n.directory && 'dir',
            lib.i18n.addLang && 'global',
            lib.i18n.staticMap && 'static',
        ].filter(Boolean).join(',') || '-';
        rows.push([
            lib.name,
            lib.type ?? '-',
            contributionText(lib.contributes),
            lib.source.directories.join(',') || '(root)',
            signalText(lib.signals),
            i18nSignals,
            lib.pages.readme ? 'yes' : 'no',
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
