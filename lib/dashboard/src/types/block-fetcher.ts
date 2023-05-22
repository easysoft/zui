import type {BlockSetting} from './block-setting';

export type BlockFetchUrl = string;

export type BlockFetchInit = RequestInit & {url: string};

export type BlockFetchFn = (id: string, block: BlockSetting) => BlockFetchInit;

export type BlockFetcher = BlockFetchInit | BlockFetchUrl | BlockFetchFn;
