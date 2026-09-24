import type {IconType} from '@zui/core';
import type {ListProps, ListitemProps} from '@zui/list';
import type {FileInfo, OriginFileInfo} from './file-info';

export type FileIconGetter = (file: FileInfo) => IconType;

export type FileIconMap = Record<string, IconType>;

export type FileIconSetting = false | string | FileIconMap | FileIconGetter;

export type FileListMode = 'list' | 'cards' | 'cards-inline' | 'covers';

export type FileInfoLike = FileInfo | OriginFileInfo;

export interface FileListProps<T extends FileInfoLike = FileInfoLike> extends ListProps<T> {
    mode?: FileListMode;
    heading?: ListitemProps;
    /** File icons are disabled by default. Load any required icon library separately. */
    fileIcon?: FileIconSetting;
    fileSizeFormat?: string;
    fileUrl?: string | ((file: T) => string);
    fileActions?: (file: T) => ListitemProps['actions'];
}
