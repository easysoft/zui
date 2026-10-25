import Path from 'node:path';
import fs from 'fs-extra';
import {getLibs} from './query';

/** Discover source libraries without applying distribution filters or writing caches. */
export async function discoverLibraries({rootDir = process.cwd(), extensions}: {rootDir?: string; extensions?: boolean | string[]}) {
    rootDir = Path.resolve(rootDir);
    const sources = [Path.join(rootDir, 'lib')];
    const libsMap = await getLibs('buildIn', {root: rootDir, cache: false});
    if (extensions) {
        const registryPath = Path.join(rootDir, 'exts/libs.json');
        const registry: Record<string, string> = await fs.pathExists(registryPath) ? await fs.readJSON(registryPath) : {};
        if (!registry || typeof registry !== 'object' || Array.isArray(registry)) {
            throw new Error('Extension registry must be an object.');
        }
        const selected = extensions === true ? Object.keys(registry) : extensions;
        for (const source of selected) {
            if (typeof source !== 'string' || !source.trim() || source !== source.trim()) {
                throw new Error('Extension sources must be non-empty strings without surrounding whitespace.');
            }
            let path = Object.hasOwn(registry, source) ? registry[source] : undefined;
            if (path !== undefined) {
                if (typeof path !== 'string' || !path.trim() || path !== path.trim()) {
                    throw new Error(`Extension ${source} must be a non-empty string without surrounding whitespace.`);
                }
                path = Path.resolve(rootDir, path.replace(/[/\\]\*$/, ''));
            } else {
                path = Path.resolve(rootDir, source);
                if (!(await fs.pathExists(path))) {
                    throw new Error(`Unknown extension group or directory "${source}".`);
                }
            }
            if (!(await fs.pathExists(path)) || !(await fs.stat(path)).isDirectory()) {
                throw new Error(`Invalid extension directory "${path}".`);
            }
            if (sources.includes(path)) continue;
            const packagePath = Path.join(path, 'package.json');
            const pkg = await fs.pathExists(packagePath) ? await fs.readJSON(packagePath) : undefined;
            const collectionPath = Path.join(path, 'lib');
            const discoveryPath = !pkg?.zui && await fs.pathExists(collectionPath) && (await fs.stat(collectionPath)).isDirectory() ? collectionPath : path;
            const discovered = await getLibs(discoveryPath, {root: rootDir, cache: false, sourceType: 'exts', extsName: source, hasSubs: !pkg?.zui, idx: sources.length});
            if (!Object.keys(discovered).length) throw new Error(`No extension libraries found in "${path}".`);
            Object.assign(libsMap, discovered);
            sources.push(path);
        }
    }
    return {libsMap, sources};
}
