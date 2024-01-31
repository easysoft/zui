import type {HElementProps, CustomContentType, IconType} from '@zui/core';
import type {ListitemProps} from '@zui/list';
import type {ButtonProps} from '@zui/button';
import type {ModalAlertOptions, ModalConfirmOptions} from '@zui/modal';
import type {FileSize} from './file-size';
import type {FileInfo} from './file-info';
import type {StaticFileInfo} from './static-file-info';

export interface FileSelectorProps extends HElementProps {
    name?: string;
    accept?: string;
    mode?: 'button' | 'box';
    tip?: CustomContentType;
    thumbnail?: boolean;
    defaultFiles?: (StaticFileInfo | FileInfo | File)[];
    multiple?: boolean | number;
    itemProps?: Partial<ListitemProps> | ((file: FileInfo) => Partial<ListitemProps>);
    draggable?: boolean;
    fileIcons?: string | Record<'default' | (string & {}), IconType>;
    uploadBtn?: string | ButtonProps;
    renameBtn?: boolean | string | ButtonProps | ((file: FileInfo) => (boolean | string | ButtonProps));
    removeBtn?: boolean | string | ButtonProps | ((file: FileInfo) => (boolean | string | ButtonProps));
    removeConfirm?: string | ModalConfirmOptions;
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
    onRename?: (newName: string, oldName: string, file: FileInfo) => void | Promise<void | false>;
    onDuplicated?: (name: string, currentFile: FileInfo, existFile: FileInfo) => void | true;
    onExceededSize?: (limit: number, file: FileInfo) => void | true;
    onExceededTotalSize?: (limit: number, file: FileInfo) => void | true;
    onExceededCount?: (limit: number, file: FileInfo) => void | true;
}
