import {UploadOptions} from '@zui/upload';
export type UploadImgsOptions = UploadOptions & Partial<{
    totalCountText: string;
}>;
