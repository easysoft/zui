import Path from 'node:path';
import os from 'node:os';
import fs from 'fs-extra';
import {afterEach, beforeEach, expect, test, vi} from 'vitest';
import {discoverLibraries} from '../../scripts/libs/discover';
import * as cache from '../../scripts/libs/libs-cache';

let root: string;
const addLib = (directory: string, name: string) => fs.outputJSON(Path.join(directory, 'package.json'), {name, zui: {type: 'component', wip: true}});

beforeEach(async () => {
    root = await fs.mkdtemp(Path.join(os.tmpdir(), 'zui-discovery-'));
    await addLib(Path.join(root, 'lib/button'), '@zui/button');
});
afterEach(async () => {
    vi.restoreAllMocks();
    await fs.remove(root);
});

test('default discovery neither reads extensions nor writes caches, and keeps development libraries', async () => {
    await fs.outputFile(Path.join(root, 'exts/libs.json'), 'invalid JSON');
    const writeCache = vi.spyOn(cache, 'setLibsCache');
    const result = await discoverLibraries({rootDir: root});
    expect(Object.keys(result.libsMap)).toEqual(['button']);
    expect(writeCache).not.toHaveBeenCalled();
});

test('resolves groups before directories and supports a project lib folder and a standalone library', async () => {
    await addLib(Path.join(root, 'registered/lib/widget'), '@example/widget');
    await addLib(Path.join(root, 'one, two'), '@example/standalone');
    await addLib(Path.join(root, 'group'), '@example/wrong');
    await fs.outputJSON(Path.join(root, 'exts/libs.json'), {group: './registered'});
    const result = await discoverLibraries({rootDir: root, extensions: ['group', './one, two', 'group']});
    expect(Object.values(result.libsMap).map(lib => lib.name)).toEqual(['@zui/button', '@example/widget', '@example/standalone']);
    expect(result.sources).toHaveLength(3);
});

test('validates registry values, missing sources and empty collections', async () => {
    await expect(discoverLibraries({rootDir: root, extensions: true})).resolves.toHaveProperty('sources', [Path.join(root, 'lib')]);
    await expect(discoverLibraries({rootDir: root, extensions: ['missing']})).rejects.toThrow(/Unknown extension/);
    await fs.ensureDir(Path.join(root, 'empty'));
    await expect(discoverLibraries({rootDir: root, extensions: ['empty']})).rejects.toThrow(/No extension libraries/);
    await fs.outputJSON(Path.join(root, 'exts/libs.json'), {broken: null});
    await expect(discoverLibraries({rootDir: root, extensions: true})).rejects.toThrow(/non-empty string/);
});
