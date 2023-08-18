import type {CustomContentStatic} from './custom-content-static';

export type CustomContentGenerator = (this: unknown | undefined, ...args: unknown[]) => CustomContentStatic;
