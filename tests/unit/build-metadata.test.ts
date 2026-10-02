import Path from 'node:path';
import {tmpdir} from 'node:os';
import fs from 'fs-extra';
import {expect, test} from 'vitest';
import {ensureExtsTsconfig} from '../../scripts/build/metadata';

test('concurrent extension initialization exposes only a complete config and preserves existing config', async ({onTestFinished}) => {
    const root = await fs.mkdtemp(Path.join(tmpdir(), 'zui-build-metadata-'));
    onTestFinished(() => fs.remove(root));
    const exts = Path.join(root, 'exts');
    await fs.ensureDir(exts);
    await Promise.all(Array.from({length: 8}, async () => {
        await ensureExtsTsconfig(root);
        expect(await fs.readJSON(Path.join(exts, 'tsconfig.json'))).toEqual({extends: '../tsconfig.json'});
    }));
    expect(await fs.readdir(exts)).toEqual(['tsconfig.json']);
    await fs.writeJSON(Path.join(exts, 'tsconfig.json'), {extends: './custom.json'});
    await ensureExtsTsconfig(root);
    expect(await fs.readJSON(Path.join(exts, 'tsconfig.json'))).toEqual({extends: './custom.json'});
});
