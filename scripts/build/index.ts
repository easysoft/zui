import {BUILD_HELP, loadBuildOptions, parseBuildArgs} from './cli';
import {resolveBuildPlan} from './config';
import {runBuild} from './run';

const args = parseBuildArgs(process.argv.slice(2));
if (args.help) {
    console.log(BUILD_HELP);
} else {
    const plan = await resolveBuildPlan(await loadBuildOptions(args));
    if (args.dryRun) {
        console.log(JSON.stringify(plan, null, 4));
    } else {
        await runBuild(plan);
    }
}
