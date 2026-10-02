import {parseArgs} from 'node:util';
import {packNpmPackage} from './package';

const args = process.argv.slice(2);
const {values} = parseArgs({
    args: args[0] === '--' ? args.slice(1) : args,
    options: {'out-dir': {type: 'string'}, help: {type: 'boolean'}},
});

if (values.help) {
    console.log('Usage: pnpm pack:npm [--out-dir <directory>]\nBuild and pack one npm tarball with artifact.json (default: dist/npm/run-*).');
} else {
    console.log(JSON.stringify(await packNpmPackage({outDir: values['out-dir']}), null, 4));
}
