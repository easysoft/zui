import {Contributes} from './lib-contributes';
import {LibDocs} from './lib-docs';
import {LibType} from './lib-type';

export interface ZuiLibInfo {
    type: LibType;
    displayName: string;
    contributes: Contributes;
    docs: LibDocs;
    name: string;               // 'avatar',
    path: string;               // 'libs/avatar',
    sourceType: LibSourceType;
    extsName?: string;          // 'zentao
}

export type LibSourceType = 'npm' | 'exts' | 'build-in';

export interface LibInfo {
    name: string;              // '@zui/avatar',
    version: string;           // '0.0.1',
    zui: ZuiLibInfo;
    main: string;              // 'src/main.ts',
    description?: string;      // '头像',
    browser?: string;          // 'src/main.ts',
    browserslist?: string;     // '',
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    files?: string[];          // [ 'src/main.ts', 'src/main.spec.ts' ],
}
