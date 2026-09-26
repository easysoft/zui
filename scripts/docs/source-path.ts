import {existsSync} from 'node:fs';
import Path from 'node:path';

import type {LibInfo} from '../libs/lib-info';

/** Reverse the category/name insertion performed by syncLibDocs. */
export function resolveDocSourcePath(filePath: string, libs: readonly LibInfo[], root: string): string | undefined {
    const [sidebar, section, ...rest] = filePath.split('/');
    const suffix = rest.join('/');
    for (const lib of [...libs].reverse()) {
        const prefix = `${lib.zui.name}/`;
        if (!suffix.startsWith(prefix)) {
            continue;
        }
        const source = Path.resolve(lib.zui.path, 'docs', sidebar, section, suffix.slice(prefix.length));
        if (!existsSync(source)) {
            continue;
        }
        const relative = Path.relative(root, source).split(Path.sep).join('/');
        return lib.zui.sourceType === 'build-in' && relative.startsWith('lib/') ? relative : undefined;
    }
    const source = Path.resolve(root, 'docs/docs', filePath);
    const relative = Path.relative(Path.resolve(root, 'docs/docs'), source);
    if (!relative.startsWith('..') && existsSync(source)) {
        return `docs/docs/${relative.split(Path.sep).join('/')}`;
    }
}
