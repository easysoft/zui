import minimist from 'minimist';
import {getLibList} from '../libs/query';
import {exec} from '../utilities/exec';

const argv = minimist(process.argv.slice(2));
const lib = argv.lib ?? 'all';
const buildArgs = ['run', 'dev', '--'];

if (lib) {
    buildArgs.push(`--lib=${lib}`);
    const libs = await getLibList(lib);

    const tailwindConfigs = libs.reduce<string[]>((list, libConfig) => {
        if (libConfig.zui.tailwindConfigPath && libConfig.name !== '@zui/base') {
            list.push(libConfig.zui.tailwindConfigPath);
        }
        return list;
    }, []);
    if (tailwindConfigs.length) {
        buildArgs.push(`--tailwind=${tailwindConfigs.join(',')}`);
    }
}

await exec('pnpm', buildArgs);
