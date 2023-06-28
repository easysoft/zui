import {convertBytes, formatBytes} from '@zui/helpers/src/format-string';
import {Component, $, Cash} from '@zui/core';
import {UploadOptions} from '../types';
import {Tooltip} from '@zui/tooltip';

export class Upload extends Component<UploadOptions> {
    protected $input: Cash;

    protected $label: Cash;

    protected $list: Cash;

    protected fileMap: Map<string, File>;

    private renameMap: Map<string, string>;

    private itemMap: Map<string, Cash>;

    private dataTransfer: DataTransfer;

    private limitBytes: number;

    protected currentBytes: number;

    static DEFAULT: Partial<UploadOptions> = {
        uploadText: '上传文件',
        renameText: '重命名',
        renameIcon: 'edit',
        deleteText: '删除',
        deleteIcon: 'trash',
        confirmText: '确定',
        cancelText: '取消',
        useIconBtn: true,
        renameBtn: true,
        deleteBtn: true,
        showIcon: true,
        multiple: true,
        listPosition: 'bottom',
        limitSize: false,
        icon: 'file-o',
        btnClass: '',
        draggable: false,
        showSize: true,
    };

    init() {
        const {multiple, defaultFileList, limitSize} = this.options;
        this.fileMap = new Map();
        this.renameMap = new Map();
        this.itemMap = new Map();
        this.dataTransfer = new DataTransfer();
        this.limitBytes = limitSize ? convertBytes(limitSize) : Number.MAX_VALUE;
        this.currentBytes = 0;

        if (!multiple) {
            this.options.limitCount = 1;
        }

        this.$element.addClass('upload');
        this.initFileInputCash();
        this.initUploadCash();
        if (defaultFileList) {
            this.addFileItem(defaultFileList);
        }
    }

    protected initUploadCash() {
        const {name, uploadText, listPosition, btnClass, tip, draggable} = this.options;
        this.$list = $('<ul class="file-list py-1"></ul>');
        const $tip = $(`<span class="upload-tip">${tip}</span>`);

        if (!draggable) {
            this.$label = $(`<label class="btn ${btnClass}" for="${name}">${uploadText}</label>`);
            const $children = listPosition === 'bottom'
                ? [this.$label, $tip, this.$list]
                : [this.$list, this.$label, $tip];
            this.$element.append(this.$input, ...$children);
            return;
        }

        this.$label = $(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16 border border-dashed border-gray" for="${name}"></label>`)
            .append(`<span class="text-primary">${uploadText}</span>`)
            .append($tip);
        this.bindDragEvent();
        const $children = listPosition === 'bottom'
            ? [this.$label, this.$list]
            : [this.$list, this.$label];
        this.$element.append(this.$input, ...$children);
    }

    private bindDragEvent() {
        this.$label
            .on('dragover', (e) => {
                e.preventDefault();
                console.log('dragover');
                if (!this.$label.hasClass('border-primary')) {
                    this.$label.removeClass('border-gray');
                    this.$label.addClass('border-primary');
                }
            })
            .on('dragleave', (e) => {
                e.preventDefault();
                this.$label.removeClass('border-primary');
                this.$label.addClass('border-gray');
            })
            .on('drop', (e) => {
                e.preventDefault();
                this.$label.removeClass('border-primary');
                this.$label.addClass('border-gray');
                const files = Array.from(e.dataTransfer?.files ?? []) as File[];
                console.log(e.dataTransfer.files);
                this.addFileItem(files);
            });
    }

    private initFileInputCash() {
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
            this.renameMap.clear();
            this.fileMap.clear();
            this.dataTransfer.items.clear();
            this.currentBytes = file.size;
        }

        this.renameMap.set(file.name, file.name);
        this.fileMap.set(file.name, file);
        this.dataTransfer.items.add(file);
        this.$input.prop('files', this.dataTransfer.files);
        this.currentBytes += file.size;
    }

    private renameDuplicatedFile(file: File) {
        if (!this.fileMap.has(file.name)) {
            return file;
        }

        const pos = file.name.lastIndexOf('.');
        if (pos === -1) {
            return this.renameDuplicatedFile(new File([file], `${file.name}(1)`));
        }

        const fileName = file.name.substring(0, pos);
        const fileExt = file.name.substring(pos);
        return this.renameDuplicatedFile(new File([file], `${fileName}(1)${fileExt}`));
    }

    protected addFileItem(files: File[]) {
        const {multiple, limitCount, exceededSizeHint, exceededCountHint} = this.options;
        if (multiple) {
            for (let file of files) {
                if (limitCount && this.fileMap.size >= limitCount) {
                    return alert(exceededSizeHint);
                }
                if (this.currentBytes + file.size > this.limitBytes) {
                    return alert(exceededCountHint);
                }
                file = this.renameDuplicatedFile(file);
                const item = this.createFileItem(file);
                this.itemMap.set(file.name, item);
                this.$list.append(item);
            }
            return;
        }

        const file = this.renameDuplicatedFile(files[0]);
        if (file.size > this.limitBytes) {
            return;
        }

        const item = this.createFileItem(file);
        this.itemMap.clear();
        this.itemMap.set(file.name, item);
        this.$list.empty().append(item);
    }

    private deleteFileItem(name: string) {
        const fileName =  this.renameMap.get(name) ?? name;
        this.renameMap.delete(name);
        const file = this.fileMap.get(fileName);
        if (!file) {
            return;
        }

        this.itemMap.get(file.name)?.remove();
        this.itemMap.delete(file.name);
        this.options.onDelete?.(file);
        this.fileMap.delete(file.name);

        this.currentBytes -= file.size;
        this.dataTransfer = new DataTransfer();
        this.fileMap.forEach((f) => this.dataTransfer.items.add(f));
        this.$input.prop('files', this.dataTransfer.files);
    }

    private renameFileItem(file: File, newName: string) {
        const fileName = this.renameMap.get(file.name);
        this.renameMap.set(file.name, newName);
        if (fileName) {
            file = this.fileMap.get(fileName) ?? file;
        }
        const item = this.itemMap.get(file.name);
        if (!item) {
            return;
        }

        this.itemMap
            .set(newName, item)
            .delete(file.name);
        this.options.onRename?.(newName, file.name);
        this.fileMap.delete(file.name);

        this.dataTransfer = new DataTransfer();
        file = new File([file], newName);
        this.fileMap
            .set(newName, file)
            .forEach((f) => this.dataTransfer.items.add(f));

        this.$input.prop('files', this.dataTransfer.files);
    }


    protected createFileItem(file: File) {
        const {showIcon} = this.options;
        this.addFile(file);

        return $('<li class="file-item my-1 flex items-center gap-2"></li>')
            .append(showIcon ? this.fileIcon() : null)
            .append(this.createFileInfo(file))
            .append(this.createRenameContainer(file));
    }

    private fileIcon() {
        const {icon} = this.options;
        return $(`<i class="icon icon-${icon}"></i>`);
    }

    protected fileRenameBtn(text: string) {
        const {useIconBtn, renameIcon} = this.options;
        if (useIconBtn) {
            const $icon = $(`<i class="icon icon-${renameIcon}"></i>`)
                .addClass('cursor-pointer file-action file-reanme');
            new Tooltip($icon, {title: text});
            return $icon;
        }

        return $('<button />')
            .addClass('btn size-sm rounded-sm text-primary canvas file-action file-rename')
            .html(text);
    }

    protected fileDeleteBtn(text: string) {
        const {useIconBtn, deleteIcon} = this.options;
        if (useIconBtn) {
            const $icon = $(`<i class="icon icon-${deleteIcon}"></i>`)
                .addClass('cursor-pointer file-action file-delete');
            new Tooltip($icon, {title: text});
            return $icon;
        }

        return $('<button />')
            .html(text)
            .addClass('btn size-sm rounded-sm text-primary canvas file-action file-delete');
    }

    protected fileName(name: string) {
        return $(`<span class="file-name">${name}</span>`);
    }

    protected fileSize(size: number) {
        return $(`<span class="file-size text-gray">${formatBytes(size)}</span>`);
    }

    protected createFileInfo(file: File) {
        const {renameBtn, renameText, deleteBtn, deleteText, showSize} = this.options;
        const $name = this.fileName(file.name);
        const $fileInfo = $('<div class="file-info flex items-center gap-2"></div>');
        $fileInfo.append($name);
        if (showSize) {
            $fileInfo.append(this.fileSize(file.size));
        }
        if (renameBtn) {
            $fileInfo.append(
                this.fileRenameBtn(renameText!)
                    .on('click', (e) => {
                        $fileInfo
                            .addClass('hidden')
                            .closest('.file-item')
                            .find('.input-group.hidden')
                            .removeClass('hidden');
                        const inputEl = $(e.target).closest('li').find('input')[0] as HTMLInputElement;
                        inputEl.focus();
                        if (inputEl.value.lastIndexOf('.') !== -1) {
                            inputEl.setSelectionRange(0, inputEl.value.lastIndexOf('.'));
                        }

                    }),
            );
        }
        if (deleteBtn) {
            $fileInfo.append(
                this.fileDeleteBtn(deleteText!)
                    .on('click', () => this.deleteFileItem($name.html())),
            );
        }
        return $fileInfo;
    }

    private createRenameContainer(file: File) {
        const {confirmText, cancelText, duplicatedHint} = this.options;
        const $renameContainer = $('<div class="input-group hidden"></div>');
        const $input = $('<input />')
            .addClass('form-control')
            .prop('type', 'text')
            .prop('autofocus', true)
            .prop('defaultValue', file.name)
            .on('keydown', (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    if (this.fileMap.has($input.val() as string)) {
                        return alert(duplicatedHint);
                    }
                    this.renameFileItem(file, $input.val() as string);
                    $renameContainer
                        .addClass('hidden')
                        .closest('.file-item')
                        .find('.file-info.hidden')
                        .removeClass('hidden')
                        .find('.file-name')
                        .html($input.val() as string);
                } else if (e.key === 'Escape') {
                    $input.val(file.name);
                    $renameContainer
                        .addClass('hidden')
                        .closest('.file-item')
                        .find('.file-info.hidden')
                        .removeClass('hidden');
                }
            });
        const $submitBtn = $('<button />')
            .addClass('btn primary rename-confirm-btn')
            .prop('type', 'button')
            .html(confirmText!)
            .on('click', () => {
                if (this.fileMap.has($input.val() as string)) {
                    return alert(duplicatedHint);
                }
                this.renameFileItem(file, $input.val() as string);
                $renameContainer
                    .addClass('hidden')
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
                $renameContainer
                    .addClass('hidden')
                    .closest('.file-item')
                    .find('.file-info.hidden')
                    .removeClass('hidden');
            });
        const $groupBtn = $('<div class="btn-group"></div')
            .append($submitBtn)
            .append($cancelBtn);

        return $renameContainer
            .append($input)
            .append($groupBtn);
    }
}
