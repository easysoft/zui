#!/usr/bin/env node

import {execFileSync} from 'node:child_process';
import {existsSync, realpathSync, statSync} from 'node:fs';
import {readFile, readdir} from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

function usage() {
    return [
        'Usage: resolve-zui-ext-context.mjs --cwd <path> [--lib <folder-or-package>] [--host <zui-root>] [--json]',
        '',
        'Resolve a ZUI extension library without modifying either repository.',
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
        } else if (argument === '--cwd' || argument === '--lib' || argument === '--host') {
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
    if (!options.help && !options.cwd) {
        throw new Error('Missing required option: --cwd <path>');
    }
    return options;
}

function safeStat(target) {
    try {
        return statSync(target);
    } catch {
        return null;
    }
}

function canonical(target) {
    const absolute = path.resolve(target);
    if (!existsSync(absolute)) {
        throw new Error(`Path does not exist: ${absolute}`);
    }
    return realpathSync(absolute);
}

function isWithin(parent, child) {
    const relative = path.relative(parent, child);
    return relative === '' || (!relative.startsWith('..') && !path.isAbsolute(relative));
}

function ancestors(start) {
    const list = [];
    let current = safeStat(start)?.isFile() ? path.dirname(start) : start;
    while (true) {
        list.push(current);
        const parent = path.dirname(current);
        if (parent === current) {
            return list;
        }
        current = parent;
    }
}

async function readJson(target, {optional = false} = {}) {
    try {
        return JSON.parse(await readFile(target, 'utf8'));
    } catch (error) {
        if (optional) {
            return null;
        }
        throw new Error(`Cannot read JSON ${target}: ${error.message}`);
    }
}

function deriveZuiName(packageJson) {
    if (typeof packageJson.zui?.name === 'string' && packageJson.zui.name) {
        return packageJson.zui.name;
    }
    const packageName = packageJson.name;
    return typeof packageName === 'string' && packageName.startsWith('@zui/')
        ? packageName.slice('@zui/'.length)
        : packageName ?? null;
}

async function listLibraries(extensionRoot) {
    const libRoot = path.join(extensionRoot, 'lib');
    if (!safeStat(libRoot)?.isDirectory()) {
        return [];
    }
    const entries = await readdir(libRoot, {withFileTypes: true});
    const libraries = [];
    for (const entry of entries) {
        const libraryPath = path.join(libRoot, entry.name);
        if (!safeStat(libraryPath)?.isDirectory()) {
            continue;
        }
        const packageJson = await readJson(path.join(libraryPath, 'package.json'), {optional: true});
        if (!packageJson?.name) {
            continue;
        }
        libraries.push({
            path: canonical(libraryPath),
            folderName: entry.name,
            packageJson,
            packageName: packageJson.name,
            zuiName: deriveZuiName(packageJson),
        });
    }
    return libraries;
}

async function isExtensionRoot(candidate) {
    const libRoot = path.join(candidate, 'lib');
    if (!safeStat(libRoot)?.isDirectory()) {
        return false;
    }
    const entries = await readdir(libRoot, {withFileTypes: true});
    for (const entry of entries) {
        if (safeStat(path.join(libRoot, entry.name, 'package.json'))?.isFile()) {
            return true;
        }
    }
    return false;
}

async function findExtensionRoot(start) {
    for (const candidate of ancestors(start)) {
        if (await isExtensionRoot(candidate)) {
            return candidate;
        }
    }
    return null;
}

async function findNearestPackage(start) {
    for (const candidate of ancestors(start)) {
        const packageJson = await readJson(path.join(candidate, 'package.json'), {optional: true});
        if (packageJson?.name && packageJson.zui && typeof packageJson.zui === 'object') {
            return {path: candidate, packageJson};
        }
    }
    return null;
}

async function resolveTargetLibrary(extensionRoot, realCwd, requested) {
    const libraries = await listLibraries(extensionRoot);
    if (requested) {
        let matches = libraries.filter(library => (
            library.folderName === requested
            || library.packageName === requested
            || library.zuiName === requested
        ));
        if (!matches.length && !requested.includes('/')) {
            matches = libraries.filter((library) => {
                const shortPackage = library.packageName.split('/').at(-1);
                const shortZui = String(library.zuiName).split('/').at(-1);
                return shortPackage === requested || shortZui === requested;
            });
        }
        if (matches.length > 1) {
            throw new Error(`Expected one library matching "${requested}", found ${matches.length} (${matches.map(item => item.packageName).join(', ')}).`);
        }
        if (!matches.length) {
            const safeFolderName = /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(requested) ? requested : null;
            return {
                library: null,
                plannedFolderName: safeFolderName,
                plannedTargetLibRoot: safeFolderName ? path.join(extensionRoot, 'lib', safeFolderName) : null,
                missingRequest: requested,
            };
        }
        return {library: matches[0], plannedFolderName: null, plannedTargetLibRoot: null, missingRequest: null};
    }

    const containing = libraries
        .filter(library => isWithin(library.path, realCwd))
        .sort((left, right) => right.path.length - left.path.length);
    return {
        library: containing[0] ?? null,
        plannedFolderName: null,
        plannedTargetLibRoot: null,
        missingRequest: null,
    };
}

function gitRootFor(target) {
    try {
        return canonical(execFileSync('git', ['-C', target, 'rev-parse', '--show-toplevel'], {
            encoding: 'utf8',
            stdio: ['ignore', 'pipe', 'ignore'],
        }).trim());
    } catch {
        return null;
    }
}

async function isZuiHost(candidate) {
    if (!candidate || !safeStat(candidate)?.isDirectory()) {
        return false;
    }
    const packageJson = await readJson(path.join(candidate, 'package.json'), {optional: true});
    return Boolean(
        safeStat(path.join(candidate, 'lib', 'core'))?.isDirectory()
        && safeStat(path.join(candidate, 'scripts', 'libs', 'query.ts'))?.isFile()
        && packageJson?.scripts
        && (packageJson.scripts['dev:exts'] || packageJson.scripts['extend-lib']),
    );
}

async function addHostCandidate(list, seen, candidate, source) {
    if (!candidate) {
        return;
    }
    const absolute = path.resolve(candidate);
    if (!existsSync(absolute)) {
        return;
    }
    const real = canonical(absolute);
    if (seen.has(real) || !await isZuiHost(real)) {
        return;
    }
    seen.add(real);
    list.push({root: real, source});
}

function stripJsonComments(text) {
    return text
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/^\s*\/\/.*$/gm, '')
        .replace(/,\s*([}\]])/g, '$1');
}

async function configuredHostCandidates(extensionRoot) {
    const candidates = [];
    for (const filename of ['tsconfig.json', 'tsconfig.root.json']) {
        const target = path.join(extensionRoot, filename);
        if (!safeStat(target)?.isFile()) {
            continue;
        }
        try {
            const config = JSON.parse(stripJsonComments(await readFile(target, 'utf8')));
            const baseUrl = path.resolve(extensionRoot, config.compilerOptions?.baseUrl ?? '.');
            const paths = config.compilerOptions?.paths ?? {};
            for (const values of Object.values(paths)) {
                for (const value of Array.isArray(values) ? values : []) {
                    let resolved = path.resolve(baseUrl, value.replace(/\*.*$/, ''));
                    while (resolved !== path.dirname(resolved)) {
                        if (await isZuiHost(resolved)) {
                            candidates.push(resolved);
                            break;
                        }
                        resolved = path.dirname(resolved);
                    }
                }
            }
        } catch {
            // A malformed or extended config is not sufficient evidence for a host.
        }
    }
    return candidates;
}

function normalizeRegisteredPath(hostRoot, registeredPath) {
    const withoutGlob = registeredPath.replace(/[\\/]\*+$/, '');
    const absolute = path.isAbsolute(withoutGlob) ? withoutGlob : path.resolve(hostRoot, withoutGlob);
    return existsSync(absolute) ? canonical(absolute) : path.resolve(absolute);
}

function registrationMatch(base, extensionRoot, targetLibRoot) {
    const extensionLibRoot = path.join(extensionRoot, 'lib');
    if (base === extensionRoot || base === extensionLibRoot) {
        return 'collection';
    }
    if (targetLibRoot && base === targetLibRoot) {
        return 'library';
    }
    if (targetLibRoot && isWithin(base, targetLibRoot)) {
        return 'contains-library';
    }
    return null;
}

async function inspectHostRegistration(hostRoot, extensionRoot, targetLibRoot) {
    const registrations = await readJson(path.join(hostRoot, 'exts', 'libs.json'), {optional: true});
    const matches = [];
    if (registrations && typeof registrations === 'object') {
        for (const [name, registeredPath] of Object.entries(registrations)) {
            if (typeof registeredPath !== 'string') {
                continue;
            }
            const resolved = normalizeRegisteredPath(hostRoot, registeredPath);
            const matchKind = registrationMatch(resolved, extensionRoot, targetLibRoot);
            if (matchKind) {
                matches.push({
                    name,
                    path: path.join(hostRoot, 'exts', name),
                    target: resolved,
                    matchKind,
                    source: 'exts/libs.json',
                });
            }
        }
    }

    if (!matches.length) {
        const extsRoot = path.join(hostRoot, 'exts');
        if (safeStat(extsRoot)?.isDirectory()) {
            for (const entry of await readdir(extsRoot, {withFileTypes: true})) {
                if (entry.name === 'libs.json') {
                    continue;
                }
                const linkPath = path.join(extsRoot, entry.name);
                if (!existsSync(linkPath)) {
                    continue;
                }
                const resolved = canonical(linkPath);
                const matchKind = registrationMatch(resolved, extensionRoot, targetLibRoot);
                if (matchKind) {
                    matches.push({name: entry.name, path: linkPath, target: resolved, matchKind, source: 'symlink'});
                }
            }
        }
    }
    return matches;
}

async function resolveHost(options, originalCwd, extensionRoot, targetLibRoot) {
    const candidates = [];
    const seen = new Set();
    if (options.host) {
        const explicit = canonical(options.host);
        if (!await isZuiHost(explicit)) {
            throw new Error(`Invalid ZUI host: ${explicit}`);
        }
        candidates.push({root: explicit, source: '--host'});
    } else {
        for (const candidate of ancestors(originalCwd)) {
            await addHostCandidate(candidates, seen, candidate, '--cwd ancestry');
        }
        for (const candidate of ancestors(process.cwd())) {
            await addHostCandidate(candidates, seen, candidate, 'process cwd');
        }
        for (const candidate of await configuredHostCandidates(extensionRoot)) {
            await addHostCandidate(candidates, seen, candidate, 'extension config');
        }
        await addHostCandidate(candidates, seen, path.join(path.dirname(extensionRoot), 'zui'), 'sibling');
    }

    const inspected = [];
    for (const candidate of candidates) {
        inspected.push({...candidate, registrations: await inspectHostRegistration(candidate.root, extensionRoot, targetLibRoot)});
    }
    if (options.host) {
        return inspected[0] ?? null;
    }
    const registered = inspected.filter(candidate => candidate.registrations.length === 1);
    return registered[0] ?? null;
}

function dependencySpecifierKind(specifier) {
    if (specifier.startsWith('workspace:')) return 'workspace';
    if (specifier.startsWith('link:')) return 'link';
    if (specifier.startsWith('file:')) return 'file';
    return 'version';
}

async function resolveDependencyPolicy(extensionRoot, libraries) {
    const packageJson = await readJson(path.join(extensionRoot, 'package.json'), {optional: true});
    const internalNames = new Set(libraries.map(library => library.packageName));
    const siblingProtocols = new Set();
    let declaredZuiDependencies = 0;
    for (const library of libraries) {
        for (const section of ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']) {
            for (const [name, specifier] of Object.entries(library.packageJson[section] ?? {})) {
                if (internalNames.has(name) && typeof specifier === 'string') {
                    siblingProtocols.add(dependencySpecifierKind(specifier));
                }
                if (name.startsWith('@zui/')) {
                    declaredZuiDependencies += 1;
                }
            }
        }
    }
    const rootTsconfig = await readJson(path.join(extensionRoot, 'tsconfig.json'), {optional: true});
    const paths = rootTsconfig?.compilerOptions?.paths ?? {};
    const pathMappedZui = Object.keys(paths).some(name => name === '@zui/*' || name.startsWith('@zui/'));
    const packageManager = typeof packageJson?.packageManager === 'string'
        ? packageJson.packageManager.split('@')[0]
        : (existsSync(path.join(extensionRoot, 'pnpm-lock.yaml')) ? 'pnpm' : null);
    let hostDependencyMode = 'unknown';
    if (pathMappedZui && declaredZuiDependencies) hostDependencyMode = 'mixed';
    else if (pathMappedZui) hostDependencyMode = 'path-mapped';
    else if (declaredZuiDependencies) hostDependencyMode = 'declared';
    return {
        packageManager,
        siblingProtocols: [...siblingProtocols].sort(),
        hostDependencyMode,
    };
}

function relativeOrDot(root, target) {
    if (!root || !target) return null;
    return path.relative(root, target) || '.';
}

function printSummary(context) {
    const fields = [
        ['TARGET_LIB_ROOT', context.targetLibRoot],
        ['EXT_ROOT', context.extensionRoot],
        ['GIT_ROOT', context.gitRoot],
        ['ZUI_ROOT', context.zuiRoot],
        ['EXTS_NAME', context.extsName],
        ['LIB_FOLDER', context.folderName],
        ['PACKAGE_NAME', context.packageName],
        ['ZUI_NAME', context.zuiName],
        ['PUBLIC_PATH', context.publicPath],
    ];
    for (const [name, value] of fields) {
        console.log(`${name}=${value ?? '(unresolved)'}`);
    }
    if (context.warnings.length) {
        console.log('Warnings:');
        context.warnings.forEach(warning => console.log(`- ${warning}`));
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
        const originalCwd = path.resolve(options.cwd);
        const realCwd = canonical(originalCwd);
        let extensionRoot = await findExtensionRoot(realCwd);
        let singlePackage = null;
        if (!extensionRoot) {
            singlePackage = await findNearestPackage(realCwd);
            if (!singlePackage) {
                throw new Error(`Cannot find an extension root or package from ${realCwd}.`);
            }
            extensionRoot = singlePackage.path;
        }

        const libraries = singlePackage ? [{
            path: singlePackage.path,
            folderName: path.basename(singlePackage.path),
            packageJson: singlePackage.packageJson,
            packageName: singlePackage.packageJson.name,
            zuiName: deriveZuiName(singlePackage.packageJson),
        }] : await listLibraries(extensionRoot);
        if (singlePackage && options.lib) {
            const candidate = libraries[0];
            const exactMatch = [candidate.folderName, candidate.packageName, candidate.zuiName].includes(options.lib);
            const shortMatch = !options.lib.includes('/') && [candidate.packageName, candidate.zuiName]
                .some(name => typeof name === 'string' && name.split('/').at(-1) === options.lib);
            if (!exactMatch && !shortMatch) {
                throw new Error(`The single-package extension does not match "${options.lib}" (${candidate.packageName}).`);
            }
        }
        const targetSelection = singlePackage
            ? {library: libraries[0], plannedFolderName: null, plannedTargetLibRoot: null, missingRequest: null}
            : await resolveTargetLibrary(extensionRoot, realCwd, options.lib);
        const {library, plannedFolderName, plannedTargetLibRoot, missingRequest} = targetSelection;

        const gitRoot = gitRootFor(extensionRoot);
        const host = await resolveHost(options, originalCwd, extensionRoot, library?.path ?? null);
        const registrations = host?.registrations ?? [];
        const registration = registrations.length === 1 ? registrations[0] : null;
        const dependencyPolicy = await resolveDependencyPolicy(extensionRoot, libraries);
        const packageJson = library?.packageJson ?? null;
        const zuiName = library?.zuiName ?? null;
        const publicPath = packageJson
            ? (packageJson.zui?.publicPath === undefined ? zuiName : packageJson.zui.publicPath)
            : null;
        const warnings = [];
        if (!gitRoot) warnings.push('No Git root was found for the extension project.');
        if (!host) warnings.push('No uniquely registered ZUI host was resolved; host dev/build/docs commands are unavailable.');
        else if (!registration) warnings.push('The ZUI host was resolved, but no unique extension registration group matched.');
        if (missingRequest) {
            warnings.push(plannedTargetLibRoot
                ? `No existing library matched "${missingRequest}"; the safe planned target is ${plannedTargetLibRoot}. Package metadata remains unresolved.`
                : `No existing library matched "${missingRequest}"; package metadata and a safe target folder remain unresolved.`);
        } else if (!library) {
            warnings.push('No target library was selected; pass --lib or use a path inside lib/<name>.');
        }

        const context = {
            targetLibRoot: library?.path ?? null,
            plannedTargetLibRoot,
            extensionRoot,
            gitRoot,
            zuiRoot: host?.root ?? null,
            extsName: registration?.name ?? null,
            folderName: library?.folderName ?? plannedFolderName,
            packageName: library?.packageName ?? null,
            zuiName,
            publicPath,
            dependencyPolicy,
            target: {
                inputPath: originalCwd,
                realPath: realCwd,
                libRoot: library?.path ?? null,
                plannedLibRoot: plannedTargetLibRoot,
                folderName: library?.folderName ?? plannedFolderName,
            },
            extension: {root: extensionRoot},
            git: {
                root: gitRoot,
                relativeExtensionPath: relativeOrDot(gitRoot, extensionRoot),
                relativeTargetPath: relativeOrDot(gitRoot, library?.path ?? null),
            },
            host: {
                root: host?.root ?? null,
                source: host?.source ?? null,
                extsName: registration?.name ?? null,
                registrationPath: registration?.path ?? null,
                registrationTarget: registration?.target ?? null,
                matchKind: registration?.matchKind ?? null,
            },
            library: {
                path: library?.path ?? null,
                plannedPath: plannedTargetLibRoot,
                folderName: library?.folderName ?? plannedFolderName,
                packageName: library?.packageName ?? null,
                zuiName,
                type: packageJson?.zui?.type ?? null,
                publicPath,
                dependencyProtocol: dependencyPolicy.siblingProtocols,
            },
            warnings,
        };

        if (options.json) console.log(JSON.stringify(context, null, 2));
        else printSummary(context);
    } catch (error) {
        console.error(error.message);
        process.exitCode = 2;
    }
}

await main();
