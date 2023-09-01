import type {FetcherSetting} from '@zui/core';
import type {BlockSetting} from './block-setting';

export type BlockFetcher = FetcherSetting<string, [id: string, block: BlockSetting]>;
