import path from 'path';
import fs from 'fs-extra';

const publishPath = path.resolve(process.cwd(), './publish');
const publishDistPath = path.resolve(publishPath, 'dist');

for (const file of ['zui.esm.js', 'zui.js', 'zui.css', 'zui.d.ts', 'zui.d.cts', 'types/css.d.ts', 'types/build/npm-types.d.ts']) {
    await fs.access(path.resolve(process.cwd(), 'dist/zui', file));
}

await fs.emptyDir(publishDistPath);
await fs.copy(path.resolve(process.cwd(), './dist/zui'), publishDistPath);
await fs.copyFile(path.join(publishDistPath, 'zui.js'), path.join(publishDistPath, 'zui.cjs'));
await fs.copyFile(path.resolve(process.cwd(), './README.md'), path.resolve(publishPath, './README.md'));
await fs.copyFile(path.resolve(process.cwd(), './LICENSE'), path.resolve(publishPath, './LICENSE'));

const packageJson = await fs.readJSON(path.resolve(process.cwd(), './package.json'));
const publishPackageJson = await fs.readJSON(path.resolve(publishPath, './package.json'));

if (publishPackageJson.version !== packageJson.version) {
    publishPackageJson.version = packageJson.version;
    await fs.writeJSON(path.resolve(publishPath, './package.json'), publishPackageJson);
}
