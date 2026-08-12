#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const SOURCE_EXTENSIONS = new Set([
    '.astro',
    '.cjs',
    '.css',
    '.cts',
    '.htm',
    '.html',
    '.js',
    '.jsx',
    '.less',
    '.mjs',
    '.mts',
    '.scss',
    '.svelte',
    '.ts',
    '.tsx',
    '.vue',
]);

const SKIP_DIRECTORIES = new Set([
    '.git',
    '.next',
    '.nuxt',
    '.output',
    '.svelte-kit',
    '.turbo',
    'build',
    'coverage',
    'dist',
    'node_modules',
    'out',
    'vendor',
]);

const MAX_FILES = 10000;
const MAX_MATCHES = 120;

function usage() {
    return [
        'Inspect how an application project consumes ZUI.',
        '',
        'Usage:',
        '  node inspect-zui-project.mjs [--root <path>] [--json]',
    ].join('\n');
}

function parseArgs(argv) {
    const options = {root: process.cwd(), json: false};
    for (let index = 0; index < argv.length; index += 1) {
        const arg = argv[index];
        if (arg === '--root') {
            const value = argv[index + 1];
            if (!value) {
                throw new Error('Missing value for --root.');
            }
            options.root = value;
            index += 1;
        } else if (arg === '--json') {
            options.json = true;
        } else if (arg === '--help' || arg === '-h') {
            console.log(usage());
            process.exit(0);
        } else {
            throw new Error(`Unknown argument: ${arg}`);
        }
    }
    options.root = path.resolve(options.root);
    return options;
}

function readJson(filePath) {
    try {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    } catch (error) {
        return {__error: error instanceof Error ? error.message : String(error)};
    }
}

function dependencyEntries(packageJson) {
    const sections = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'];
    const entries = [];
    for (const section of sections) {
        const dependencies = packageJson[section];
        if (!dependencies || typeof dependencies !== 'object') {
            continue;
        }
        for (const [name, requested] of Object.entries(dependencies)) {
            if (name === 'zui' || name.startsWith('@zui/')) {
                entries.push({name, requested, section});
            }
        }
    }
    return entries.sort((a, b) => a.name.localeCompare(b.name) || a.section.localeCompare(b.section));
}

function detectPackageManagers(root, packageJson) {
    const managers = [];
    if (typeof packageJson.packageManager === 'string') {
        managers.push({source: 'packageManager', value: packageJson.packageManager});
    }
    const lockfiles = [
        ['pnpm', 'pnpm-lock.yaml'],
        ['npm', 'package-lock.json'],
        ['yarn', 'yarn.lock'],
        ['bun', 'bun.lock'],
        ['bun', 'bun.lockb'],
    ];
    for (const [name, filename] of lockfiles) {
        if (fs.existsSync(path.join(root, filename))) {
            managers.push({source: filename, value: name});
        }
    }
    return managers;
}

function installedPackage(root, dependency) {
    const packagePath = path.join(root, 'node_modules', ...dependency.name.split('/'), 'package.json');
    if (!fs.existsSync(packagePath)) {
        return {
            name: dependency.name,
            requested: dependency.requested,
            installed: false,
            packagePath,
        };
    }
    const packageJson = readJson(packagePath);
    if (packageJson.__error) {
        return {
            name: dependency.name,
            requested: dependency.requested,
            installed: true,
            packagePath,
            error: packageJson.__error,
        };
    }
    return {
        name: dependency.name,
        requested: dependency.requested,
        installed: true,
        version: packageJson.version ?? null,
        type: packageJson.type ?? null,
        main: packageJson.main ?? null,
        module: packageJson.module ?? null,
        browser: packageJson.browser ?? null,
        exports: packageJson.exports ?? null,
        types: packageJson.types ?? packageJson.typings ?? null,
        packagePath,
    };
}

function classifyLine(line) {
    const categories = [];
    if (/(?:\bfrom\s*|\bimport\s*(?:\(\s*)?|\brequire\s*\(\s*)['"]zui(?:\/[^'"]*)?['"]/.test(line)) {
        categories.push('zui-import');
    }
    if (/(?:\bfrom\s*|\bimport\s*(?:\(\s*)?|\brequire\s*\(\s*)['"]@zui\/[^'"]+['"]/.test(line)) {
        categories.push('scoped-import');
    }
    if (/<(?:script|link)\b[^>]*\bzui(?:[.@/-]|\b)/i.test(line)) {
        categories.push('script-or-style-tag');
    }
    if (/(?:^|[^\w$.])(?:window\.)?zui\s*(?:\.|\[)/.test(line) || /=\s*(?:window\.)?zui\b/.test(line)) {
        categories.push('global-api');
    }
    if (/\bzui-(?:create|toggle|on-|init)\b/.test(line)) {
        categories.push('declarative');
    }
    return categories;
}

function scanSources(root) {
    const matches = [];
    let filesVisited = 0;
    let truncated = false;

    function visit(directory) {
        if (truncated) {
            return;
        }
        let entries;
        try {
            entries = fs.readdirSync(directory, {withFileTypes: true});
        } catch {
            return;
        }
        entries.sort((a, b) => a.name.localeCompare(b.name));
        for (const entry of entries) {
            if (truncated) {
                return;
            }
            if (entry.isSymbolicLink()) {
                continue;
            }
            const fullPath = path.join(directory, entry.name);
            if (entry.isDirectory()) {
                if (!SKIP_DIRECTORIES.has(entry.name)) {
                    visit(fullPath);
                }
                continue;
            }
            if (!entry.isFile() || !SOURCE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
                continue;
            }
            filesVisited += 1;
            if (filesVisited > MAX_FILES) {
                truncated = true;
                return;
            }
            let content;
            try {
                content = fs.readFileSync(fullPath, 'utf8');
            } catch {
                continue;
            }
            const lines = content.split(/\r?\n/);
            for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
                const categories = classifyLine(lines[lineIndex]);
                if (!categories.length) {
                    continue;
                }
                matches.push({
                    file: path.relative(root, fullPath) || path.basename(fullPath),
                    line: lineIndex + 1,
                    categories,
                    text: lines[lineIndex].trim().slice(0, 240),
                });
                if (matches.length >= MAX_MATCHES) {
                    truncated = true;
                    return;
                }
            }
        }
    }

    visit(root);
    return {filesVisited: Math.min(filesVisited, MAX_FILES), matches, truncated};
}

function buildWarnings(dependencies, installed, scan) {
    const warnings = [];
    if (!dependencies.length && scan.matches.length) {
        warnings.push('ZUI usage signals were found, but no zui or @zui/* dependency is declared. The project may use CDN files, vendored assets, a workspace alias, or an undeclared dependency.');
    }
    const missing = installed.filter(item => !item.installed).map(item => item.name);
    if (missing.length) {
        warnings.push(`Declared packages not found under this root's node_modules: ${missing.join(', ')}.`);
    }
    if (scan.truncated) {
        warnings.push(`Source scan stopped at ${MAX_FILES} files or ${MAX_MATCHES} matches; use rg for targeted follow-up.`);
    }
    return warnings;
}

function formatExports(exportsValue) {
    if (exportsValue === null || exportsValue === undefined) {
        return '(not declared)';
    }
    if (typeof exportsValue === 'string') {
        return exportsValue;
    }
    if (typeof exportsValue === 'object') {
        return Object.keys(exportsValue).join(', ') || '(empty object)';
    }
    return String(exportsValue);
}

function formatReport(report) {
    const lines = [
        `ZUI project inspection: ${report.root}`,
        `Package: ${report.package.name ?? '(unnamed)'}${report.package.version ? `@${report.package.version}` : ''}`,
    ];
    if (report.package.error) {
        lines.push(`Package manifest error: ${report.package.error}`);
    }
    lines.push('Package managers:');
    if (report.packageManagers.length) {
        for (const manager of report.packageManagers) {
            lines.push(`  - ${manager.value} (${manager.source})`);
        }
    } else {
        lines.push('  - none detected');
    }
    lines.push('Declared ZUI dependencies:');
    if (report.dependencies.length) {
        for (const dependency of report.dependencies) {
            lines.push(`  - ${dependency.name}: ${dependency.requested} (${dependency.section})`);
        }
    } else {
        lines.push('  - none');
    }
    lines.push('Installed package metadata:');
    if (report.installed.length) {
        for (const item of report.installed) {
            if (!item.installed) {
                lines.push(`  - ${item.name}: not found`);
                continue;
            }
            if (item.error) {
                lines.push(`  - ${item.name}: unreadable (${item.error})`);
                continue;
            }
            lines.push(`  - ${item.name}@${item.version ?? '(unknown version)'}`);
            lines.push(`    exports: ${formatExports(item.exports)}`);
            lines.push(`    main/module/types: ${item.main ?? '-'} / ${item.module ?? '-'} / ${item.types ?? '-'}`);
        }
    } else {
        lines.push('  - none');
    }
    lines.push(`Usage signals (${report.scan.matches.length}, scanned ${report.scan.filesVisited} files):`);
    if (report.scan.matches.length) {
        for (const match of report.scan.matches) {
            lines.push(`  - ${match.file}:${match.line} [${match.categories.join(', ')}] ${match.text}`);
        }
    } else {
        lines.push('  - none');
    }
    if (report.warnings.length) {
        lines.push('Warnings:');
        for (const warning of report.warnings) {
            lines.push(`  - ${warning}`);
        }
    }
    return lines.join('\n');
}

function main() {
    const options = parseArgs(process.argv.slice(2));
    if (!fs.existsSync(options.root) || !fs.statSync(options.root).isDirectory()) {
        throw new Error(`Project root is not a directory: ${options.root}`);
    }
    const packagePath = path.join(options.root, 'package.json');
    const packageJson = fs.existsSync(packagePath) ? readJson(packagePath) : {};
    const packageError = packageJson.__error;
    const dependencies = packageError ? [] : dependencyEntries(packageJson);
    const installed = dependencies.map(dependency => installedPackage(options.root, dependency));
    const scan = scanSources(options.root);
    const report = {
        root: options.root,
        package: {
            path: fs.existsSync(packagePath) ? packagePath : null,
            name: packageError ? null : (packageJson.name ?? null),
            version: packageError ? null : (packageJson.version ?? null),
            error: packageError ?? null,
        },
        packageManagers: packageError ? [] : detectPackageManagers(options.root, packageJson),
        dependencies,
        installed,
        scan,
        warnings: buildWarnings(dependencies, installed, scan),
    };
    console.log(options.json ? JSON.stringify(report, null, 2) : formatReport(report));
}

try {
    main();
} catch (error) {
    console.error(`inspect-zui-project: ${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
}
