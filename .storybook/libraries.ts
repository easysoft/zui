import Path from 'node:path';
import {fileURLToPath} from 'node:url';
import {realpath} from 'node:fs/promises';
import glob from 'fast-glob';
import {discoverLibraries} from '../scripts/libs/discover';
import type {LibInfo} from '../scripts/libs/lib-info';
import {readServiceExtensions} from '../scripts/services/args';

export const rootPath = Path.resolve(fileURLToPath(new URL('../', import.meta.url)));
export const sharedStorybookPackages = ['preact', '@preact/signals', '@preact/signals-core', 'cash-dom', 'storybook', '@storybook/html-vite'];

export async function getStorybookLibraries(extensions = readServiceExtensions(), root = rootPath): Promise<Record<string, LibInfo>> {
    const {libsMap} = await discoverLibraries({rootDir: root, extensions});
    // Storybook's index watcher deliberately skips symlink directories.
    return Object.fromEntries(await Promise.all(Object.entries(libsMap).map(async ([name, lib]) => [name, lib.zui.sourceType === 'exts'
        ? {...lib, zui: {...lib.zui, path: await realpath(lib.zui.path)}}
        : lib] as const)));
}

export function getStorybookPatterns(libs: Record<string, LibInfo>) {
    const groups = new Map<string, string[]>();
    Object.values(libs).forEach((lib) => {
        const directory = Path.dirname(lib.zui.path);
        const names = groups.get(directory) ?? [];
        names.push(glob.convertPathToPattern(Path.basename(lib.zui.path)));
        groups.set(directory, names);
    });
    // Storybook stats the unexpanded glob; keep brace segments below filesystem name limits.
    return [...groups].flatMap(([directory, names]) => {
        const chunks: string[][] = [[]];
        names.forEach((name) => {
            const chunk = chunks[chunks.length - 1];
            if (chunk.length && Buffer.byteLength([...chunk, name].join(',')) > 200) chunks.push([name]);
            else chunk.push(name);
        });
        return chunks.map(chunk => `${glob.convertPathToPattern(directory)}/${chunk.length === 1 ? chunk[0] : `{${chunk.join(',')}}`}/*.stories.{ts,tsx}`);
    });
}

export function getStorybookFiles(libs: Record<string, LibInfo>) {
    return glob(getStorybookPatterns(libs), {onlyFiles: true}).then(files => files.sort());
}

export function getStorybookContent(libs: Record<string, LibInfo>, root = rootPath) {
    return [
        `${glob.convertPathToPattern(Path.join(root, '.storybook'))}/**/*.{ts,tsx}`,
        ...Object.values(libs).flatMap(lib => [
            `${glob.convertPathToPattern(lib.zui.path)}/*.stories.{ts,tsx}`,
            `${glob.convertPathToPattern(lib.zui.path)}/src/**/*.{ts,tsx,js,jsx,html}`,
        ]),
    ];
}
