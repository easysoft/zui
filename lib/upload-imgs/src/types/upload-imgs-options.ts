import {UploadOptions} from '@zui/upload';
export type UploadImgsOptions = UploadOptions & Partial<{
    commentText: string;
    addImgsText: string;
    toUploadText: string;
    totalSizeText: string;
}>;
