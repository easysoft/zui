import Path from 'node:path';
import fs from 'fs-extra';
import glob from 'fast-glob';
import JSZip from 'jszip';

/** Finish reading the distribution before creating an archive inside it. */
export async function writeBuildZip(directory: string, destination: string, rootName: string) {
    const archive = new JSZip();
    const files = await glob('**/*', {cwd: directory, dot: true, onlyFiles: true});
    for (const file of files.sort()) {
        archive.file(`${rootName}/${file}`, await fs.readFile(Path.join(directory, file)));
    }
    const buffer = await archive.generateAsync({type: 'nodebuffer', compression: 'DEFLATE', compressionOptions: {level: 9}});
    await fs.outputFile(destination, buffer);
}
