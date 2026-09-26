import type {IconType} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {ListProps, ListitemProps} from '@zui/list';
import type {FileInfo, OriginFileInfo} from './file-info';
import type {AvatarOptions} from '@zui/avatar';
import type {PopoverOptions} from '@zui/popover';

export type FileIconGetter = (file: FileInfo) => IconType;

export type FileIconMap = Record<string, IconType>;

export type FileIconSetting = false | string | FileIconMap | FileIconGetter;

export type FileListMode = 'list' | 'cards' | 'cards-inline' | 'grid';

export type FileInfoLike = FileInfo | OriginFileInfo;

type FileCallback<T extends FileInfoLike, Result> = {
    bivarianceHack(file: T & FileInfo): Result;
}['bivarianceHack'];

export interface FileListProps<T extends FileInfoLike = FileInfoLike> extends ListProps<T> {
    itemProps?: Partial<T> & ListitemProps;
    getItem?: ListProps<T & FileInfo & Item>['getItem'];
    itemRender?: ListProps<T & FileInfo & Item>['itemRender'];
    beforeRenderItem?: ListProps<T & FileInfo & Item>['beforeRenderItem'];
    onClickItem?: ListProps<T & FileInfo & Item>['onClickItem'];
    mode?: FileListMode;
    heading?: ListitemProps;
    /** File icons are disabled by default. Load any required icon library separately. */
    fileIcon?: FileIconSetting;
    /** Use avatars to show file thumbnails and fallback icons. Defaults to false. Pass Avatar options to customize. */
    thumbnail?: boolean | Partial<AvatarOptions>;
    /** Preview thumbnail images on hover. Requires thumbnail; defaults to false. Maximum dimensions are in pixels, each defaulting to 200. */
    thumbnailPreview?: boolean | {
        maxWidth?: number;
        maxHeight?: number;
        /** Preferred placement; defaults to top-start (above, aligned at the left). */
        placement?: PopoverOptions['placement'];
    };
    /** Override the thumbnail URL. An empty string falls back to the file's thumbnail or native image preview. */
    getThumbnail?: FileCallback<T, string>;
    fileSizeFormat?: string;
    fileUrl?: string | FileCallback<T, string>;
    fileActions?: FileCallback<T, ListitemProps['actions']>;
}
