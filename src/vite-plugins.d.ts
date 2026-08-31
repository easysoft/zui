declare module 'vite-plugin-eslint' {
    import type {ESLint} from 'eslint';
    import type {Plugin} from 'vite';

    export interface Options extends ESLint.Options {
        eslintPath?: string;
        lintOnStart?: boolean;
        include?: string | string[];
        exclude?: string | string[];
        formatter?: string | ESLint.Formatter['format'];
        emitWarning?: boolean;
        emitError?: boolean;
        failOnWarning?: boolean;
        failOnError?: boolean;
    }

    export default function eslintPlugin(options?: Options): Plugin;
}

declare module 'vite-plugin-zip-file' {
    import type {Plugin} from 'vite';

    export interface ViteZipOptions {
        folderPath?: string;
        outPath?: string;
        zipName?: string;
        enabled?: boolean;
        deleteFolder?: boolean;
    }

    export function viteZip(options: ViteZipOptions): Plugin;
}
