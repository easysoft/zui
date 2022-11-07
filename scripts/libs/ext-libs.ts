import Path from 'path';
import fs from 'fs-extra';

export const extsPath = Path.resolve(process.cwd(), 'exts');
export const libsFile = Path.join(extsPath, 'libs.json');

export async function getExtLibPaths(): Promise<Record<string, string>> {
    if (!fs.existsSync(libsFile)) {
        return {};
    }
    const libs: Record<string, string> = await fs.readJSON(libsFile, {throws: false});
    if (!libs) {
        return {};
    }

    Object.entries(libs).forEach(([name, path]) => {
        if (!path.endsWith('*') && !fs.existsSync(Path.join(path, 'package.json'))) {
            libs[name] = Path.join(path, '*');
        }
    });
    return libs;
}

export async function saveExtLibPaths(newLibs: Record<string, string>, options?: {reset?: boolean}) {
    const libs = options?.reset ? {} : (await getExtLibPaths());

    Object.entries(newLibs).forEach(([name, path]) => {
        if (!path.endsWith('*')) {
            const packageJson = fs.readJSONSync(Path.join(path, 'package.json'), {throws: false});
            if (!packageJson?.zui) {
                newLibs[name] = Path.join(path, '*');
            }
        }
    });

    await fs.writeJSON(libsFile, {
        ...libs,
        ...newLibs,
    }, {spaces: 4});
}
