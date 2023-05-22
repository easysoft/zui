import type {BlockInfo} from './block-info';

export type BlockSetting = Partial<Omit<BlockInfo, 'width' | 'height' | 'id'>> & {
    id: string | number;
    size?: string | {width: number, height: number} | [width: number, height: number];
};
