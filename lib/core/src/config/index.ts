/* eslint-disable @typescript-eslint/naming-convention */

declare const __APP_VERSION__: string;

declare const __BUILD_TIME__: number;

declare const __BUILD_MODE__: string;

declare const __BUILD_HASH__: string;

export const VERSION = __APP_VERSION__;
export const BUILD = __BUILD_TIME__;
export const BUILD_MODE = __BUILD_MODE__;
export const BUILD_HASH = __BUILD_HASH__;
