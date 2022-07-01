import { defineConfig } from 'vite';
import minimist from 'minimist';

const argv: {_: string[]} = minimist(process.argv.slice(2));

export default defineConfig(() => {
    return {
    };
});
