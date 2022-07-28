import {getBuildInLibs} from './buildin-libs';
import {exec} from './exec';

const buildInLibs = await getBuildInLibs();
const libs = [...buildInLibs.values()].map(({name, version}) => `${name}@${version}`);

await exec('pnpm', ['i', '-w', '-S', ...libs]);
