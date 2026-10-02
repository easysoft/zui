import {parseArgs} from 'node:util';
import {resolveBuildPlan} from './config';
import {runBuild} from './run';

const args = process.argv.slice(2);
const {values} = parseArgs({
    args: args[0] === '--' ? args.slice(1) : args,
    options: {'out-dir': {type: 'string'}, help: {type: 'boolean'}},
});

if (values.help) {
    console.log('Usage: pnpm build:npm [--out-dir <directory>]\nBuild npm runtime and TypeScript declarations together (default: dist/zui).');
} else {
    const plan = await resolveBuildPlan({name: 'zui', outDir: values['out-dir'] ?? 'dist/zui', excludeNotReady: true});
    await runBuild(plan, {npmTypes: true});
}
