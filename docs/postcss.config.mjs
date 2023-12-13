import {postcssIsolateStyles} from 'vitepress';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import tailwindConfig from './tailwind.config.cjs';

export default {
    plugins: [
        tailwindcss({config: tailwindConfig}),
        autoprefixer(),
        postcssIsolateStyles({
            includeFiles: [/base\.css/, /vp-doc\.css/],
        }),
        ...(process.env.NODE_ENV === 'production' ? [cssnano()] : []),
    ],
};
