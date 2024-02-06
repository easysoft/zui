import type {HElementProps, CustomContentType, IconType, SizeSetting} from '@zui/core';
import type {ListitemProps} from '@zui/list';
import type {ButtonProps} from '@zui/button';
import type {ModalAlertOptions, ModalConfirmOptions} from '@zui/modal';
import type {FileSize} from './file-size';
import type {FileInfo} from './file-info';
import type {StaticFileInfo} from './static-file-info';
import type {FileSelectorMode} from './file-selector-mode';

export interface FileSelectorProps extends HElementProps {
    name?: string;
    accept?: string;
    mode?: FileSelectorMode;
    tip?: CustomContentType;
    thumbnail?: boolean;
    gridWidth?: SizeSetting;
    gridHeight?: SizeSetting;
    gridGap?: SizeSetting;
    defaultFiles?: (StaticFileInfo | FileInfo | File)[];
    multiple?: boolean;
    itemProps?: Partial<ListitemProps> | ((file: FileInfo) => Partial<ListitemProps>);
    draggable?: boolean;
    fileIcons?: string | Record<'default' | (string & {}), IconType>;
    uploadBtn?: string | ButtonProps;
    renameBtn?: boolean | string | ButtonProps | ((file: FileInfo) => (boolean | string | ButtonProps));
    removeBtn?: boolean | string | ButtonProps | ((file: FileInfo) => (boolean | string | ButtonProps));
    removeConfirm?: string | ModalConfirmOptions;
    maxFileCount?: number;
    maxFileSize?: FileSize;
    totalFileSize?: FileSize;
    allowSameName?: boolean;
    duplicatedTip?: string | ModalAlertOptions;
    exceededSizeTip?: string | ModalAlertOptions;
    exceededTotalSizeTip?: string | ModalAlertOptions;
    exceededCountTip?: string | ModalAlertOptions;

    onSelect?: (files: File[] | FileList) => void | false;
    onAdd?: (file: FileInfo) => void | false;
    onRemove?: (file: FileInfo) => void | Promise<void | false>;
    onRename?: (newName: string, oldName: string, file: FileInfo) => void | false | Promise<void | false>;
    onDuplicated?: (name: string, currentFile: FileInfo, existFile: FileInfo) => void | true;
    onExceededSize?: (limit: number, file: FileInfo) => void | true;
    onExceededTotalSize?: (limit: number, file: FileInfo) => void | true;
    onExceededCount?: (limit: number, file: FileInfo) => void | true;
}
