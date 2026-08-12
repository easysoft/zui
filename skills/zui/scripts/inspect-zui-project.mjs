#!/usr/bin/env node

import fs from 'node:fs';
import {createRequire} from 'node:module';
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

const STYLE_EXTENSIONS = new Set(['.css', '.less', '.scss']);

const SKIP_DIRECTORIES = new Set([
    '.cache',
    '.git',
    '.next',
    '.nuxt',
    '.output',
    '.parcel-cache',
    '.svelte-kit',
    '.turbo',
    '.vite',
    'build',
    'coverage',
    'dist',
    'node_modules',
    'out',
    'vendor',
]);

const PACKAGE_MANAGER_FILES = [
    ['pnpm', 'pnpm-lock.yaml'],
    ['npm', 'package-lock.json'],
    ['npm', 'npm-shrinkwrap.json'],
    ['yarn', 'yarn.lock'],
    ['bun', 'bun.lock'],
    ['bun', 'bun.lockb'],
];

const WORKSPACE_MARKERS = [
    'lerna.json',
    'nx.json',
    'pnpm-workspace.yaml',
    'rush.json',
];

const MAX_FILES = 10000;
const MAX_MATCHES = 120;
const MAX_MATCHES_PER_FILE = 12;
const MAX_PACKAGE_MANIFESTS = 500;

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
        const value = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        if (!value || typeof value !== 'object' || Array.isArray(value)) {
            return {__error: 'Expected a JSON object.'};
        }
        return value;
    } catch (error) {
        return {__error: error instanceof Error ? error.message : String(error)};
    }
}

function displayPath(root, filePath) {
    return path.relative(root, filePath) || path.basename(filePath);
}

function isZuiDependency(name) {
    return name === 'zui' || /^@zui\/[a-z0-9][a-z0-9._-]*$/i.test(name);
}

function dependencyEntries(packageJson, manifest) {
    const sections = ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies'];
    const entries = [];
    for (const section of sections) {
        const dependencies = packageJson[section];
        if (!dependencies || typeof dependencies !== 'object') {
            continue;
        }
        for (const [name, requested] of Object.entries(dependencies)) {
            if (isZuiDependency(name)) {
                entries.push({
                    name,
                    requested,
                    section,
                    manifest: manifest.relativePath,
                    manifestPath: manifest.path,
                    packageName: manifest.name,
                    packageRoot: manifest.root,
                });
            }
        }
    }
    return entries;
}

function readPnpmWorkspacePatterns(root) {
    const workspacePath = path.join(root, 'pnpm-workspace.yaml');
    if (!fs.existsSync(workspacePath)) {
        return [];
    }
    const patterns = [];
    let readingPackages = false;
    for (const line of fs.readFileSync(workspacePath, 'utf8').split(/\r?\n/)) {
        if (/^packages\s*:\s*(?:#.*)?$/.test(line)) {
            readingPackages = true;
            continue;
        }
        if (!readingPackages) {
            continue;
        }
        if (/^\S/.test(line)) {
            break;
        }
        const match = line.match(/^\s*-\s*(.*?)\s*(?:#.*)?$/);
        if (!match || !match[1]) {
            continue;
        }
        let value = match[1];
        if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith('\'') && value.endsWith('\''))) {
            value = value.slice(1, -1);
        }
        if (value) {
            patterns.push(value);
        }
    }
    return patterns;
}

function readLernaWorkspacePatterns(root) {
    const lernaPath = path.join(root, 'lerna.json');
    if (!fs.existsSync(lernaPath)) {
        return [];
    }
    const lernaJson = readJson(lernaPath);
    return Array.isArray(lernaJson.packages) ? lernaJson.packages : [];
}

function workspacePatterns(root, packageJson) {
    const workspaces = packageJson.workspaces;
    const packagePatterns = Array.isArray(workspaces)
        ? workspaces
        : (Array.isArray(workspaces?.packages) ? workspaces.packages : []);
    return [...new Set([
        ...packagePatterns,
        ...readPnpmWorkspacePatterns(root),
        ...readLernaWorkspacePatterns(root),
    ].filter(pattern => typeof pattern === 'string' && pattern.trim()).map(pattern => pattern.trim()))];
}

function expandBraces(pattern) {
    const match = pattern.match(/\{([^{}]+)\}/);
    if (!match) {
        return [pattern];
    }
    return match[1].split(',').flatMap(value => expandBraces(
        `${pattern.slice(0, match.index)}${value}${pattern.slice(match.index + match[0].length)}`,
    ));
}

function globToRegExp(pattern) {
    const normalized = pattern.replaceAll('\\', '/').replace(/^\.\//, '').replace(/\/$/, '');
    let source = '^';
    for (let index = 0; index < normalized.length; index += 1) {
        const char = normalized[index];
        if (char === '*' && normalized[index + 1] === '*') {
            index += 1;
            if (normalized[index + 1] === '/') {
                index += 1;
                source += '(?:.*/)?';
            } else {
                source += '.*';
            }
        } else if (char === '*') {
            source += '[^/]*';
        } else if (char === '?') {
            source += '[^/]';
        } else {
            source += char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        }
    }
    return new RegExp(`${source}$`);
}

function createWorkspaceMatcher(patterns) {
    const include = [];
    const exclude = [];
    for (const pattern of patterns) {
        const target = pattern.startsWith('!') ? exclude : include;
        const value = pattern.startsWith('!') ? pattern.slice(1) : pattern;
        target.push(...expandBraces(value).map(globToRegExp));
    }
    if (!include.length) {
        return null;
    }
    return relativePath => include.some(expression => expression.test(relativePath))
        && !exclude.some(expression => expression.test(relativePath));
}

function createManifest(root, packagePath, packageJson = readJson(packagePath)) {
    const error = packageJson.__error;
    return {
        path: packagePath,
        root: path.dirname(packagePath),
        relativePath: displayPath(root, packagePath),
        name: error ? null : (packageJson.name ?? null),
        version: error ? null : (packageJson.version ?? null),
        error: error ?? null,
        packageJson,
    };
}

function findPackageManifests(root, rootPackageJson) {
    const manifests = [];
    let truncated = false;
    const rootPackagePath = path.join(root, 'package.json');
    const patterns = workspacePatterns(root, rootPackageJson);
    const workspaceMatcher = createWorkspaceMatcher(patterns);
    const hasWorkspaceConfig = patterns.length > 0
        || WORKSPACE_MARKERS.some(filename => fs.existsSync(path.join(root, filename)));

    function addManifest(packagePath, packageJson) {
        if (manifests.length >= MAX_PACKAGE_MANIFESTS) {
            truncated = true;
            return false;
        }
        manifests.push(createManifest(root, packagePath, packageJson));
        return true;
    }

    if (fs.existsSync(rootPackagePath)) {
        addManifest(rootPackagePath, rootPackageJson);
    }
    if (!hasWorkspaceConfig) {
        return {manifests, truncated};
    }

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
            if (!entry.isDirectory() || entry.isSymbolicLink() || SKIP_DIRECTORIES.has(entry.name)) {
                continue;
            }
            const childRoot = path.join(directory, entry.name);
            const packagePath = path.join(childRoot, 'package.json');
            const relativeRoot = path.relative(root, childRoot).split(path.sep).join('/');
            const isWorkspacePackage = workspaceMatcher ? workspaceMatcher(relativeRoot) : true;
            if (isWorkspacePackage && fs.existsSync(packagePath) && !addManifest(packagePath)) {
                return;
            }
            visit(childRoot);
        }
    }

    visit(root);
    return {manifests, truncated};
}

function ancestorDirectories(start) {
    const directories = [];
    let current = path.resolve(start);
    while (true) {
        directories.push(current);
        const parent = path.dirname(current);
        if (parent === current) {
            return directories;
        }
        current = parent;
    }
}

function detectPackageManagerContext(root, rootPackageJson) {
    for (const directory of ancestorDirectories(root)) {
        const managers = [];
        const packagePath = path.join(directory, 'package.json');
        const packageJson = directory === root
            ? rootPackageJson
            : (fs.existsSync(packagePath) ? readJson(packagePath) : {});
        if (!packageJson.__error && typeof packageJson.packageManager === 'string') {
            managers.push({
                source: `${displayPath(root, packagePath)}#packageManager`,
                path: packagePath,
                value: packageJson.packageManager,
            });
        }
        for (const [value, filename] of PACKAGE_MANAGER_FILES) {
            const filePath = path.join(directory, filename);
            if (fs.existsSync(filePath)) {
                managers.push({source: displayPath(root, filePath), path: filePath, value});
            }
        }
        const pnpmWorkspacePath = path.join(directory, 'pnpm-workspace.yaml');
        if (fs.existsSync(pnpmWorkspacePath) && !managers.some(manager => manager.value === 'pnpm')) {
            managers.push({source: displayPath(root, pnpmWorkspacePath), path: pnpmWorkspacePath, value: 'pnpm'});
        }
        const pnpPath = ['.pnp.cjs', '.pnp.js']
            .map(filename => path.join(directory, filename))
            .find(filePath => fs.existsSync(filePath));
        if (pnpPath) {
            managers.push({source: displayPath(root, pnpPath), path: pnpPath, value: 'yarn-pnp'});
        }
        if (managers.length) {
            return {root: directory, managers};
        }
    }
    return {root, managers: []};
}

function realPath(filePath) {
    try {
        return fs.realpathSync(filePath);
    } catch {
        return filePath;
    }
}

function findPackageManifestFromEntry(entryPath, packageName) {
    let directory;
    try {
        directory = fs.statSync(entryPath).isDirectory() ? entryPath : path.dirname(entryPath);
    } catch {
        return null;
    }
    for (const candidateRoot of ancestorDirectories(directory)) {
        const packagePath = path.join(candidateRoot, 'package.json');
        if (!fs.existsSync(packagePath)) {
            continue;
        }
        const packageJson = readJson(packagePath);
        if (!packageJson.__error && packageJson.name === packageName) {
            return realPath(packagePath);
        }
    }
    return null;
}

function resolveInstalledPackage(packageRoot, packageName) {
    for (const directory of ancestorDirectories(packageRoot)) {
        const packagePath = path.join(directory, 'node_modules', ...packageName.split('/'), 'package.json');
        if (fs.existsSync(packagePath)) {
            return realPath(packagePath);
        }
    }

    const resolver = createRequire(path.join(packageRoot, 'package.json'));
    try {
        return realPath(resolver.resolve(`${packageName}/package.json`));
    } catch {
        try {
            return findPackageManifestFromEntry(resolver.resolve(packageName), packageName);
        } catch {
            return null;
        }
    }
}

function installedPackage(dependency) {
    const packagePath = resolveInstalledPackage(dependency.packageRoot, dependency.name);
    if (!packagePath) {
        return {
            name: dependency.name,
            installed: false,
            packagePath: null,
        };
    }
    const packageJson = readJson(packagePath);
    if (packageJson.__error) {
        return {
            name: dependency.name,
            installed: true,
            packagePath,
            error: packageJson.__error,
        };
    }
    return {
        name: dependency.name,
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

function inspectInstalledPackages(dependencies) {
    const declarations = new Map();
    for (const dependency of dependencies) {
        const key = `${dependency.manifestPath}\0${dependency.name}`;
        const declaration = declarations.get(key);
        if (declaration) {
            declaration.sections.push(dependency.section);
            declaration.requested.push(dependency.requested);
        } else {
            declarations.set(key, {
                dependency,
                sections: [dependency.section],
                requested: [dependency.requested],
            });
        }
    }

    const installed = new Map();
    for (const declaration of declarations.values()) {
        const item = installedPackage(declaration.dependency);
        const key = item.installed
            ? `${item.name}\0${item.packagePath}`
            : `${item.name}\0${declaration.dependency.manifestPath}`;
        const existing = installed.get(key);
        const declaredBy = {
            manifest: declaration.dependency.manifest,
            manifestPath: declaration.dependency.manifestPath,
            requested: declaration.requested,
            sections: declaration.sections,
        };
        if (existing) {
            existing.declaredBy.push(declaredBy);
        } else {
            installed.set(key, {...item, declaredBy: [declaredBy]});
        }
    }
    return [...installed.values()].sort((a, b) => a.name.localeCompare(b.name) || String(a.packagePath).localeCompare(String(b.packagePath)));
}

function findNonCodeRanges(content) {
    const ranges = [];
    let index = 0;
    while (index < content.length) {
        const char = content[index];
        const next = content[index + 1];
        if (char === '<' && content.startsWith('<!--', index)) {
            const start = index;
            const end = content.indexOf('-->', index + 4);
            index = end === -1 ? content.length : end + 3;
            ranges.push({start, end: index, kind: 'comment'});
            continue;
        }
        if (char === '/' && next === '/') {
            const start = index;
            const end = content.indexOf('\n', index + 2);
            index = end === -1 ? content.length : end;
            ranges.push({start, end: index, kind: 'comment'});
            continue;
        }
        if (char === '/' && next === '*') {
            const start = index;
            const end = content.indexOf('*/', index + 2);
            index = end === -1 ? content.length : end + 2;
            ranges.push({start, end: index, kind: 'comment'});
            continue;
        }
        if (char === '\'' || char === '"' || char === '`') {
            const start = index;
            const quote = char;
            index += 1;
            while (index < content.length) {
                if (content[index] === '\\') {
                    index = Math.min(content.length, index + 2);
                } else if (content[index] === quote) {
                    index += 1;
                    break;
                } else {
                    index += 1;
                }
            }
            ranges.push({start, end: index, kind: 'string'});
            continue;
        }
        index += 1;
    }
    return ranges;
}

function maskRanges(content, ranges) {
    if (!ranges.length) {
        return content;
    }
    const chunks = [];
    let offset = 0;
    for (const range of ranges) {
        chunks.push(content.slice(offset, range.start));
        chunks.push(content.slice(range.start, range.end).replace(/[^\r\n]/g, ' '));
        offset = range.end;
    }
    chunks.push(content.slice(offset));
    return chunks.join('');
}

function createLineStarts(content) {
    const starts = [0];
    for (let index = 0; index < content.length; index += 1) {
        if (content[index] === '\n') {
            starts.push(index + 1);
        }
    }
    return starts;
}

function lineNumberAt(lineStarts, offset) {
    let low = 0;
    let high = lineStarts.length;
    while (low < high) {
        const middle = Math.floor((low + high) / 2);
        if (lineStarts[middle] <= offset) {
            low = middle + 1;
        } else {
            high = middle;
        }
    }
    return low;
}

function normalizeSnippet(value) {
    return value.replace(/\s+/g, ' ').trim().slice(0, 240);
}

function createSnippet(content, lineStarts, line, offset, matchedText) {
    const lineStart = lineStarts[line - 1];
    const lineEnd = lineStarts[line] ?? content.length;
    const relativeOffset = Math.max(0, offset - lineStart);
    const snippetStart = Math.max(0, relativeOffset - 100);
    const lineText = normalizeSnippet(content.slice(lineStart + snippetStart, Math.min(lineEnd, lineStart + snippetStart + 320)));
    if (/\bzui/i.test(lineText)) {
        return lineText;
    }
    return normalizeSnippet(matchedText);
}

function isOffsetInRanges(ranges, offset) {
    let low = 0;
    let high = ranges.length;
    while (low < high) {
        const middle = Math.floor((low + high) / 2);
        if (ranges[middle].start <= offset) {
            low = middle + 1;
        } else {
            high = middle;
        }
    }
    const range = ranges[low - 1];
    return Boolean(range && offset < range.end);
}

function collectFileSignals(content, file) {
    const ranges = findNonCodeRanges(content);
    const stringRanges = ranges.filter(range => range.kind === 'string');
    const commentsMasked = maskRanges(content, ranges.filter(range => range.kind === 'comment'));
    const codeOnly = maskRanges(content, ranges);
    const lineStarts = createLineStarts(content);
    const signals = new Map();

    function addMatches(category, expression, source, ignoredRanges = []) {
        let match;
        while ((match = expression.exec(source))) {
            if (isOffsetInRanges(ignoredRanges, match.index)) {
                continue;
            }
            const line = lineNumberAt(lineStarts, match.index);
            const matchedText = content.slice(match.index, match.index + match[0].length);
            let signal = signals.get(line);
            if (!signal) {
                signal = {
                    file,
                    line,
                    categories: new Set(),
                    text: createSnippet(content, lineStarts, line, match.index, matchedText),
                };
                signals.set(line, signal);
            }
            signal.categories.add(category);
            if (match[0].length === 0) {
                expression.lastIndex += 1;
            }
        }
    }

    addMatches(
        'zui-import',
        /(?:\bfrom\s*|\bimport\s*(?:\(\s*)?|\brequire\s*\(\s*)(?:['"]zui(?:\/[^'"]*)?['"]|`zui(?:\/[^`]*)?`)/g,
        commentsMasked,
        stringRanges,
    );
    addMatches(
        'scoped-import',
        /(?:\bfrom\s*|\bimport\s*(?:\(\s*)?|\brequire\s*\(\s*)(?:['"]@zui\/[^'"]+['"]|`@zui\/[^`]+`)/g,
        commentsMasked,
        stringRanges,
    );
    if (!STYLE_EXTENSIONS.has(path.extname(file).toLowerCase())) {
        addMatches('script-or-style-tag', /<(?:script|link)\b[^>]*\bzui(?:[.@/-]|\b)[^>]*>/gi, commentsMasked);
        addMatches(
            'global-api',
            /(?<![\w$./\\-])(?:window|globalThis)\s*(?:\?\.|\.)\s*zui\b|(?<![\w$./\\-])zui\s*(?:\?\.|\.|\[)|=\s*zui\b/g,
            codeOnly,
        );
        addMatches(
            'global-api',
            /(?<![\w$./\\-])(?:window|globalThis)\s*\[\s*['"]zui['"]\s*\]/g,
            commentsMasked,
            ranges,
        );
        addMatches('declarative', /\bzui-(?:create|toggle|on-[\w:-]+|init)\b/gi, commentsMasked);
    }

    return [...signals.values()]
        .map(signal => ({...signal, categories: [...signal.categories]}))
        .sort((a, b) => a.line - b.line);
}

function selectEvenly(items, limit) {
    if (items.length <= limit) {
        return [...items];
    }
    if (limit === 1) {
        return [items[Math.floor((items.length - 1) / 2)]];
    }
    return Array.from({length: limit}, (_, index) => {
        const itemIndex = Math.round(index * (items.length - 1) / (limit - 1));
        return items[itemIndex];
    });
}

function selectRepresentativeMatches(fileSamples, limit) {
    const groups = [...fileSamples].sort((a, b) => a.file.localeCompare(b.file));
    if (groups.length > limit) {
        return selectEvenly(groups, limit).map(group => group.matches[0]);
    }

    const selected = [];
    let depth = 0;
    while (selected.length < limit) {
        let added = false;
        for (const group of groups) {
            const match = group.matches[depth];
            if (!match) {
                continue;
            }
            selected.push(match);
            added = true;
            if (selected.length >= limit) {
                break;
            }
        }
        if (!added) {
            break;
        }
        depth += 1;
    }
    return selected.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);
}

function scanSources(root) {
    let filesVisited = 0;
    let fileLimitReached = false;
    let matchesFound = 0;
    let samplingRequired = false;
    const completeMatches = [];
    const fileSamples = [];

    function visit(directory) {
        if (fileLimitReached) {
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
            if (fileLimitReached) {
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
            if (filesVisited >= MAX_FILES) {
                fileLimitReached = true;
                return;
            }
            filesVisited += 1;
            let content;
            try {
                content = fs.readFileSync(fullPath, 'utf8');
            } catch {
                continue;
            }
            const file = displayPath(root, fullPath);
            const fileMatches = collectFileSignals(content, file);
            if (!fileMatches.length) {
                continue;
            }
            matchesFound += fileMatches.length;
            if (!samplingRequired && completeMatches.length + fileMatches.length <= MAX_MATCHES) {
                completeMatches.push(...fileMatches);
            } else {
                samplingRequired = true;
                completeMatches.length = 0;
            }
            fileSamples.push({file, matches: selectEvenly(fileMatches, MAX_MATCHES_PER_FILE)});
        }
    }

    visit(root);
    const matches = samplingRequired
        ? selectRepresentativeMatches(fileSamples, MAX_MATCHES)
        : completeMatches;
    const matchesOmitted = Math.max(0, matchesFound - matches.length);
    return {
        filesVisited,
        filesWithSignals: fileSamples.length,
        matches,
        matchesFound,
        matchesOmitted,
        sampled: matchesOmitted > 0,
        fileLimitReached,
        truncated: fileLimitReached || matchesOmitted > 0,
    };
}

function buildWarnings(dependencies, installed, scan, manifestScan, packageManagers) {
    const warnings = [];
    if (!dependencies.length && scan.matchesFound) {
        warnings.push('ZUI usage signals were found, but no zui or @zui/* dependency is declared. The project may use CDN files, vendored assets, a workspace alias, or an undeclared dependency.');
    }
    const missing = installed
        .filter(item => !item.installed)
        .flatMap(item => item.declaredBy.map(declaration => `${item.name} (${declaration.manifest})`));
    if (missing.length) {
        const pnpDetected = packageManagers.some(manager => manager.value === 'yarn-pnp');
        warnings.push(`Declared packages could not be resolved from their declaring package: ${missing.join(', ')}.${pnpDetected ? ' Yarn PnP was detected; run the inspector through the project\'s Yarn runtime if resolution remains unavailable.' : ''}`);
    }
    if (scan.sampled) {
        warnings.push(`Showing ${scan.matches.length} representative usage signals out of ${scan.matchesFound}; the source scan continued after the reporting limit.`);
    }
    if (scan.fileLimitReached) {
        warnings.push(`Source scan stopped after ${MAX_FILES} files; use rg for targeted follow-up.`);
    }
    if (manifestScan.truncated) {
        warnings.push(`Workspace manifest discovery stopped after ${MAX_PACKAGE_MANIFESTS} package.json files.`);
    }
    return warnings;
}

function formatValue(value, fallback = '-') {
    if (value === null || value === undefined) {
        return fallback;
    }
    if (typeof value === 'string') {
        return value;
    }
    return JSON.stringify(value);
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
        `Project context: ${report.projectContext.root}`,
    ];
    if (report.package.error) {
        lines.push(`Package manifest error: ${report.package.error}`);
    }
    if (report.packages.length > 1) {
        lines.push(`Package manifests (${report.packages.length}):`);
        for (const packageInfo of report.packages) {
            const identity = packageInfo.error
                ? `unreadable (${packageInfo.error})`
                : `${packageInfo.name ?? '(unnamed)'}${packageInfo.version ? `@${packageInfo.version}` : ''}`;
            lines.push(`  - ${packageInfo.relativePath}: ${identity}`);
        }
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
        const showManifest = report.packages.length > 1 || report.dependencies.some(dependency => dependency.manifest !== 'package.json');
        for (const dependency of report.dependencies) {
            lines.push(`  - ${dependency.name}: ${formatValue(dependency.requested)} (${dependency.section})${showManifest ? ` [${dependency.manifest}]` : ''}`);
        }
    } else {
        lines.push('  - none');
    }
    lines.push('Installed package metadata:');
    if (report.installed.length) {
        for (const item of report.installed) {
            const declaration = item.declaredBy.length === 1
                ? `declared by ${item.declaredBy[0].manifest}`
                : `declared by ${item.declaredBy.length} manifests`;
            if (!item.installed) {
                lines.push(`  - ${item.name}: not resolved (${declaration})`);
                continue;
            }
            if (item.error) {
                lines.push(`  - ${item.name}: unreadable (${item.error}; ${declaration})`);
                continue;
            }
            lines.push(`  - ${item.name}@${item.version ?? '(unknown version)'} (${declaration})`);
            lines.push(`    exports: ${formatExports(item.exports)}`);
            lines.push(`    main/module/browser/types: ${formatValue(item.main)} / ${formatValue(item.module)} / ${formatValue(item.browser)} / ${formatValue(item.types)}`);
        }
    } else {
        lines.push('  - none');
    }
    const signalSummary = report.scan.sampled
        ? `showing ${report.scan.matches.length} of ${report.scan.matchesFound}`
        : String(report.scan.matchesFound);
    lines.push(`Usage signals (${signalSummary}, scanned ${report.scan.filesVisited} files):`);
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
    const rootPackageJson = fs.existsSync(packagePath) ? readJson(packagePath) : {};
    const manifestScan = findPackageManifests(options.root, rootPackageJson);
    const dependencies = manifestScan.manifests
        .filter(manifest => !manifest.error)
        .flatMap(manifest => dependencyEntries(manifest.packageJson, manifest))
        .sort((a, b) => a.manifest.localeCompare(b.manifest) || a.name.localeCompare(b.name) || a.section.localeCompare(b.section));
    const installed = inspectInstalledPackages(dependencies);
    const managerContext = detectPackageManagerContext(options.root, rootPackageJson);
    const scan = scanSources(options.root);
    const rootManifest = manifestScan.manifests.find(manifest => manifest.path === packagePath);
    const packages = manifestScan.manifests.map(manifest => ({
        path: manifest.path,
        relativePath: manifest.relativePath,
        name: manifest.name,
        version: manifest.version,
        error: manifest.error,
    }));
    const report = {
        root: options.root,
        projectContext: {root: managerContext.root},
        package: {
            path: rootManifest?.path ?? null,
            name: rootManifest?.name ?? null,
            version: rootManifest?.version ?? null,
            error: rootManifest?.error ?? null,
        },
        packages,
        packageManagers: managerContext.managers,
        dependencies,
        installed,
        scan,
        warnings: buildWarnings(dependencies, installed, scan, manifestScan, managerContext.managers),
    };
    console.log(options.json ? JSON.stringify(report, null, 2) : formatReport(report));
}

try {
    main();
} catch (error) {
    console.error(`inspect-zui-project: ${error instanceof Error ? error.message : String(error)}`);
    process.exitCode = 1;
}
