import {Contributes} from './lib-contributes';
import {LibType} from './lib-type';

export type LibSourceType = 'npm' | 'exts' | 'build-in' | 'local';

export interface ZuiLibInfo {
    sourceType: LibSourceType;
    name: string;               // 'avatar',
    type: LibType;
    displayName: string;
    contributes?: Partial<Contributes>;
    path: string;               // 'libs/avatar',
    extsName?: string;          // 'zentao
    order: number;              // 0
    workspace?: boolean;
}

export interface LibInfo {
    name: string;              // '@zui/avatar',
    version: string;           // '0.0.1',
    zui: ZuiLibInfo;
    main?: string;              // 'src/main.ts',
    description?: string;      // '头像',
    browser?: string;          // 'src/main.ts',
    browserslist?: string;     // '',
    dependencies?: Record<string, string>;
    devDependencies?: Record<string, string>;
    files?: string[];          // [ 'src/main.ts', 'src/main.spec.ts' ],
}
