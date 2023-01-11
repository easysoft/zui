import minimist from 'minimist';
import {getLibList} from '../libs/query';
import {exec} from '../utilities/exec';

const argv = minimist(process.argv.slice(2).filter((x, i) => i || x !== '--'));
const libSetting = argv.lib ?? 'all';
const libs = await getLibList(libSetting);
const tailwindConfigs = libs.reduce<string[]>((list, libConfig) => {
    if (libConfig.zui.tailwindConfigPath && libConfig.name !== '@zui/base') {
        list.push(libConfig.zui.tailwindConfigPath);
    }
    return list;
}, []);


await exec('pnpm', ['run', 'dev'], {
    env: {
        ...process.env,
        BUILD_LIBS: libSetting,
        TAILWIND_CONFIG: tailwindConfigs.length ? tailwindConfigs.join(',') : undefined,
    },
});
