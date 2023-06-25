import {convertBytes, formatBytes} from '@zui/helpers/src/format-string';
import {Component, $, Cash} from '@zui/core';

type UploadOptions = {
    name: string;
    renameBtn: boolean;
    deleteBtn: boolean;
    showIcon: boolean;
    icon: HTMLElement | null;
    multiple: boolean;
    listPosition: 'bottom' | 'top';
} & Partial<{
    uploadText: string;
    renameText: string;
    deleteText: string;
    confirmText: string;
    cancelText: string;
    tipText: string;
    btnClass: string;
    onChange: (files: File[]) => void;
    onDelete: (file: File) => void;
    onRename: (newName: string, oldName: string) => void;
    limitCount: number;
    accept: string;
    defaultFileList: File[];
    limitSize: `${number}${'B' | 'KB' | 'MB' | 'GB'}` | false;
}>;

export class Upload extends Component<UploadOptions> {
    private $input: Cash;

    private $label: Cash;

    private $list: Cash;

    private fileMap: Map<string, File>;

    private itemMap: Map<string, Cash>;

    private dataTransfer: DataTransfer;

    private limitBytes: number;

    private currentBytes: number;

    static DEFAULT: Partial<UploadOptions> = {
        name: 'file',
        icon: null,
        uploadText: '上传文件',
        renameText: '重命名',
        deleteText: '删除',
        confirmText: '确定',
        cancelText: '取消',
        tipText: '（不超过 %s）',
        renameBtn: false,
        deleteBtn: false,
        showIcon: true,
        multiple: true,
        listPosition: 'bottom',
        limitSize: false,
    };

    init() {
        const {multiple, defaultFileList, limitSize} = this.options;
        this.fileMap = new Map();
        this.itemMap = new Map();
        this.dataTransfer = new DataTransfer();
        this.limitBytes = limitSize ? convertBytes(limitSize) : Number.MAX_VALUE;
        this.currentBytes = 0;

        if (!multiple) {
            this.options.limitCount = 1;
        }

        this.initInputCash();
        this.initUploadCash();
        if (defaultFileList) {
            this.addFileItem(defaultFileList);
        }
    }

    private initUploadCash() {
        const {name, uploadText, listPosition, limitSize, btnClass, tipText} = this.options;
        const $tip = limitSize ? $(`<span class="upload-tip">${tipText?.replace('%s', limitSize)}</span>`) : null;
        this.$label = $(`<label class="btn ${btnClass}" for="${name}">${uploadText}</label>`);
        this.$list = $('<div class="file-list py-1"></div>');
        const $children = listPosition === 'bottom'
            ? [this.$label, $tip, this.$list]
            : [this.$list, this.$label, $tip];
        this.$element.append(this.$input, ...$children);
    }

    private initInputCash() {
        const {name, multiple, accept, onChange} = this.options;

        this.$input = $('<input />')
            .addClass('hidden')
            .prop('type', 'file')
            .prop('name', name)
            .prop('id', name)
            .prop('multiple', multiple)
            .on('change', event => {
                const fileList = (event.target as HTMLInputElement).files;
                if (!fileList) {
                    return;
                }

                const files = [...fileList];
                this.addFileItem(files);
                onChange?.(files);
            });

        if (accept) {
            this.$input.prop('accept', accept);
        }
    }

    private addFile(file: File) {
        if (!this.options.multiple) {
            this.fileMap.clear();
            this.dataTransfer.items.clear();
            this.currentBytes = file.size;
        }
        this.fileMap.set(file.name, file);
        this.dataTransfer.items.add(file);
        this.$input.prop('files', this.dataTransfer.files);
        this.currentBytes += file.size;
    }

    private addFileItem(files: File[]) {
        const {multiple, limitCount} = this.options;
        if (multiple) {
            for (const file of files) {
                if (limitCount && this.fileMap.size >= limitCount) {
                    return;
                }
                if (this.currentBytes + file.size > this.limitBytes) {
                    return;
                }
                this.addFile(file);
                const item = this.createFileItem(file);
                this.itemMap.set(file.name, item);
                this.$list.append(item);
            }
            return;
        }

        const file = files[0];
        if (file.size > this.limitBytes) {
            return;
        }
        this.addFile(file);
        const item = this.createFileItem(file);
        this.itemMap.clear();
        this.itemMap.set(file.name, item);
        this.$list.empty().append(item);
    }

    private deleteFile(file: File) {
        this.options.onDelete?.(file);
        this.fileMap.delete(file.name);
        this.currentBytes -= file.size;
        this.dataTransfer = new DataTransfer();
        this.fileMap.forEach((f) => this.dataTransfer.items.add(f));
        this.$input.prop('files', this.dataTransfer.files);
    }

    private deleteFileItem(name: string) {
        const file = this.fileMap.get(name);
        if (!file) {
            return;
        }

        this.itemMap.get(file.name)?.remove();
        this.itemMap.delete(file.name);
        this.deleteFile(file);
    }

    private renameFile(file: File, newName: string) {
        this.options.onRename?.(newName, file.name);
        this.fileMap.delete(file.name);

        this.dataTransfer = new DataTransfer();
        file = new File([file], newName);
        this.fileMap
            .set(newName, file)
            .forEach((f) => this.dataTransfer.items.add(f));

        this.$input.prop('files', this.dataTransfer.files);
    }

    private renameFileItem(file: File, newName: string) {
        const item = this.itemMap.get(file.name);
        if (!item) {
            return;
        }

        this.itemMap
            .set(newName, item)
            .delete(file.name);
        this.renameFile(file, newName);
    }


    private createFileItem(file: File) {
        const {showIcon} = this.options;
        return $('<li class="file-item my-1 flex items-center gap-2"></li>')
            .append(showIcon ? this.fileIcon() : null)
            .append(this.fileInfo(file))
            .append(this.renameInput(file));
    }

    private fileIcon() {
        const {icon} = this.options;
        if (icon) {
            return $(icon);
        }

        return $('<i class="icon icon-paper-clip"></i>');
    }

    private fileInfo(file: File) {
        const $name = $(`<span class="file-name">${file.name}</span>`);
        const $size = $(`<span class="file-size text-gray">${formatBytes(file.size)}</span>`);
        const $fileInfo = $('<div class="file-info flex items-center gap-2"></div>')
            .append($name)
            .append($size);

        const {renameBtn, renameText, deleteBtn, deleteText} = this.options;
        if (renameBtn) {
            $fileInfo.append(
                $('<span />')
                    .addClass('btn size-sm rounded-sm text-primary canvas file-action file-rename')
                    .html(renameText!)
                    .on('click', () => {
                        $fileInfo
                            .addClass('hidden')
                            .closest('.file-item')
                            .find('.input-group.hidden')
                            .removeClass('hidden');
                    }),
            );
        }
        if (deleteBtn) {
            $fileInfo.append(
                $('<span />')
                    .html(deleteText!)
                    .addClass('btn size-sm rounded-sm text-primary canvas file-action file-delete')
                    .on('click', () => this.deleteFileItem($name.html())),
            );
        }
        return $fileInfo;
    }

    private renameInput(file: File) {
        const {confirmText, cancelText} = this.options;
        const $renameInput = $('<div class="input-group hidden"></div>');
        const $input = $('<input />')
            .addClass('form-control')
            .prop('type', 'text')
            .prop('autofocus', true)
            .prop('defaultValue', file.name);
        const $submitBtn = $('<button />')
            .addClass('btn rename-confirm-btn')
            .prop('type', 'button')
            .html(confirmText!)
            .on('click', () => {
                $renameInput.addClass('hidden');
                this.renameFileItem(file, $input.val() as string);
                $renameInput
                    .closest('.file-item')
                    .find('.file-info.hidden')
                    .removeClass('hidden')
                    .find('.file-name')
                    .html($input.val() as string);
            });
        const $cancelBtn = $('<button />')
            .prop('type', 'button')
            .addClass('btn rename-cancel-btn')
            .html(cancelText!)
            .on('click', () => {
                $input.val(file.name);
                $renameInput
                    .addClass('hidden')
                    .closest('.file-item')
                    .find('.file-info.hidden')
                    .removeClass('hidden');
            });
        const $groupBtn = $('<div class="btn-group"></div')
            .append($submitBtn)
            .append($cancelBtn);

        return $renameInput
            .append($input)
            .append($groupBtn);
    }
}
