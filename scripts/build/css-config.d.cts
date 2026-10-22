import type {Config} from 'tailwindcss';
import type {AcceptedPlugin} from 'postcss';

export interface CssConfigOptions {
    development?: boolean;
    preflight?: boolean;
    tailwindConfigs?: string[];
    content?: Config['content'];
    minify?: boolean;
    remToPx?: boolean;
}

export function createTailwindConfig(options?: CssConfigOptions): Config;
export function createPostcssConfig(options?: CssConfigOptions): {plugins: AcceptedPlugin[]};
