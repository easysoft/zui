import {exec} from '../utilities/exec';

await exec('pnpm', ['exec', 'playwright', 'test', ...process.argv.slice(2)], {
    env: {
        ...process.env,
        PLAYWRIGHT_ALL_BROWSERS: '1',
    },
});
