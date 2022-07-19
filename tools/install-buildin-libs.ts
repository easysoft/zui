import {getBuildInLibs} from './buildin-libs.js';
import {exec} from './exec.js';

const buildInLibs = await getBuildInLibs();
const libs = [...buildInLibs.values()].map(({name, version}) => `${name}@${version}`);

await exec('pnpm', ['i', '-w', '-S', ...libs]);
