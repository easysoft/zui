import {convertBytes, formatBytes} from '@zui/helpers/src/format-string';
import {Component, $, Cash} from '@zui/core';
import {UploadOptions} from '../types';
import {Tooltip} from '@zui/tooltip';

export class Upload<T extends UploadOptions = UploadOptions> extends Component<T> {
    protected $input: Cash;

    protected $label: Cash;

    protected $list: Cash;

    protected fileMap: Map<string, File>;

    private renameMap: Map<string, string>;

    private itemMap: Map<string, Cash>;

    private dataTransfer: DataTransfer;

    private limitBytes: number;

    protected currentBytes: number;

    static NAME = 'Upload';

    static DEFAULT: Partial<UploadOptions> = {
        uploadText: '上传文件',
        confirmText: '确定',
        cancelText: '取消',
        useIconBtn: true,
        renameBtn: true,
        renameText: '重命名',
        renameIcon: 'edit',
        renameClass: '',
        deleteBtn: true,
        deleteText: '删除',
        deleteIcon: 'trash',
        deleteClass: '',
        showIcon: true,
        multiple: true,
        listPosition: 'bottom',
        limitSize: false,
        icon: 'file-o',
        btnClass: '',
        tip: '',
        draggable: false,
        showSize: true,
        onAdd: (file) => file,
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
        const {name, uploadText, uploadIcon, listPosition, btnClass, tip, draggable} = this.options;
        this.$list = $('<ul class="file-list py-1"></ul>');
        const $tip = $(`<span class="upload-tip">${tip}</span>`);

        if (!draggable) {
            this.$label = $(`<label class="btn ${btnClass}" for="${name}">${uploadText}</label>`);
            if (uploadIcon) {
                const $uploadIcon = $(`<i class="icon icon-${uploadIcon}"></i>`);
                this.$label.prepend($uploadIcon);
            }
            const $children = listPosition === 'bottom'
                ? [this.$label, $tip, this.$list]
                : [this.$list, this.$label, $tip];
            this.$element.append(this.$input, ...$children);
            return;
        }

        const $uploadText = $(`<span class="text-primary">${uploadText}</span>`);
        if (uploadIcon) {
            const $uploadIcon = $(`<i class="icon icon-${uploadIcon} mr-1"></i>`);
            $uploadText.prepend($uploadIcon);
        }
        this.$label = $(`<label class="draggable-area col justify-center items-center cursor-pointer block w-full h-16" for="${name}"></label>`)
            .append($uploadText)
            .append($tip);
        this.bindDragEvent();
        const $children = listPosition === 'bottom'
            ? [this.$label, this.$list]
            : [this.$list, this.$label];
        this.$element.append(this.$input, ...$children);
    }

    protected bindDragEvent() {
        this.$label
            .on('dragover', (e) => {
                e.preventDefault();
                if (!this.$label.hasClass('border-primary')) {
                    this.$label.removeClass('border-gray');
                    this.$label.addClass('border-primary');
                }
                if (!this.$label.hasClass('dragover')) {
                    this.$label.addClass('dragover');
                }
            })
            .on('dragleave', (e) => {
                e.preventDefault();
                this.$label.removeClass('border-primary');
                this.$label.addClass('border-gray');
                this.$label.removeClass('dragover');
            })
            .on('drop', (e) => {
                e.preventDefault();
                this.$label.removeClass('border-primary');
                this.$label.addClass('border-gray');
                this.$label.removeClass('dragover');
                const files: File[] = Array.from(e.dataTransfer?.files ?? []);
                console.log(e.dataTransfer.files);
                this.addFileItem(files);
            });
    }

    private initFileInputCash() {
        const {name, multiple, accept} = this.options;

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
            });

        if (accept) {
            this.$input.prop('accept', accept);
        }
    }

    private addFile(file: File) {
        const {multiple, onSizeChange} = this.options;
        if (!multiple) {
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
        onSizeChange?.(this.currentBytes);
    }

    private renameDuplicatedFile(file: File): File {
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

    protected filterFiles(files: File[]) {
        const {accept} = this.options;
        if (!accept) return files;

        const fileTypes = accept.replace(/\s/g, '').split(',');
        const mimeList: string[] = [];
        const mimeAllList: string[] = [];
        const extList: string[] = [];

        fileTypes.forEach(type => {
            if (type.endsWith('/*')) {
                mimeAllList.push(type.substring(0, type.length - 1));
            } else if (type.includes('/')) {
                mimeList.push(type);
            } else if (type.startsWith('.')) {
                extList.push(type);
            }
        });

        return files.filter(file => (
            mimeList.includes(file.type)
                || mimeAllList.some(x => file.type.startsWith(x))
                || extList.some(x => file.name.endsWith(x))
        ));
    }

    protected addFileItem(files: File[]) {
        files = this.filterFiles(files);
        const {multiple, limitCount, exceededSizeHint, onExceededSize, exceededCountHint, onExceededCount, onAdd} = this.options;
        if (multiple) {
            const validFiles: File[] = [];
            for (let file of files) {
                // 超出数量限制
                if (limitCount && this.fileMap.size >= limitCount) {
                    onExceededCount?.(limitCount);
                    if (exceededCountHint) alert(exceededCountHint);
                    return;
                }
                // 超出字节限制
                if (this.currentBytes + file.size > this.limitBytes) {
                    onExceededSize?.(this.limitBytes);
                    if (exceededSizeHint) alert(exceededSizeHint);
                    return;
                }
                file = this.renameDuplicatedFile(file);
                const f = onAdd?.(file);
                if (!f) continue;

                file = f;
                const item = this.createFileItem(file);
                this.itemMap.set(file.name, item);
                this.$list.append(item);
                validFiles.push(file);
            }
            return;
        }

        if (files[0].size > this.limitBytes) {
            return;
        }

        let file = this.renameDuplicatedFile(files[0]);
        const f = onAdd?.(file);
        if (!f) return;

        file = f;
        const item = this.createFileItem(file);
        this.itemMap.clear();
        this.itemMap.set(file.name, item);
        this.$list.empty().append(item);
    }

    protected deleteFileItem(name: string) {
        const fileName =  this.renameMap.get(name) ?? name;
        this.renameMap.delete(name);
        const file = this.fileMap.get(fileName);
        if (!file) {
            return;
        }

        const {onDelete, onSizeChange} = this.options;
        const $item = this.itemMap.get(file.name);
        this.itemMap.delete(file.name);
        $item?.addClass('hidden');
        const tooltipInstance = $item?.find('.file-delete')?.data('tooltip');
        if (tooltipInstance) {
            tooltipInstance.destroy();
            tooltipInstance.tooltip?.remove();
        }
        setTimeout(() => $item?.remove(), 3000);
        onDelete?.(file);
        this.fileMap.delete(file.name);

        this.currentBytes -= file.size;
        onSizeChange?.(this.currentBytes);
        this.dataTransfer = new DataTransfer();
        this.fileMap.forEach((f) => this.dataTransfer.items.add(f));
        this.$input.prop('files', this.dataTransfer.files);
    }

    protected renameFileItem(file: File, newName: string) {
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

    protected fileRenameBtn() {
        const {useIconBtn, renameText, renameIcon, renameClass} = this.options;
        if (useIconBtn) {
            const $iconBtn = $(`<button class="btn btn-link h-5 w-5 p-0 ${renameClass}"><i class="icon icon-${renameIcon}"></i></button>`)
                .prop('type', 'button')
                .addClass('file-action file-rename');
            new Tooltip($iconBtn, {title: renameText});
            return $iconBtn;
        }

        return $('<button />')
            .prop('type', 'button')
            .addClass(`btn size-sm rounded-sm text-primary canvas file-action file-rename ${renameClass}`)
            .html(renameText!);
    }

    protected fileDeleteBtn() {
        const {useIconBtn, deleteText, deleteIcon, deleteClass} = this.options;
        if (useIconBtn) {
            const $iconBtn = $(`<button class="btn btn-link h-5 w-5 p-0 ${deleteClass}"><i class="icon icon-${deleteIcon}"></i></button>`)
                .prop('type', 'button')
                .addClass('file-action file-delete');
            $iconBtn.data('tooltip', new Tooltip($iconBtn, {title: deleteText}));
            return $iconBtn;
        }

        return $('<button />')
            .html(deleteText!)
            .prop('type', 'button')
            .addClass(`btn size-sm rounded-sm text-primary canvas file-action file-delete ${deleteClass}`);
    }

    protected fileName(name: string) {
        return $(`<span class="file-name">${name}</span>`);
    }

    protected fileSize(size: number) {
        return $(`<span class="file-size text-gray">${formatBytes(size)}</span>`);
    }

    protected createFileInfo(file: File) {
        const {renameBtn, deleteBtn, showSize} = this.options;
        const $fileInfo = $('<div class="file-info flex items-center gap-2"></div>');
        $fileInfo.append(this.fileName(file.name));
        if (showSize) {
            $fileInfo.append(this.fileSize(file.size));
        }
        if (renameBtn) {
            $fileInfo.append(
                this.fileRenameBtn()
                    .on('click', (e) => {
                        $fileInfo
                            .addClass('hidden')
                            .closest('.file-item')
                            .find('.input-rename-container.hidden')
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
                this.fileDeleteBtn()
                    .on('click', () => this.deleteFileItem(file.name)),
            );
        }
        return $fileInfo;
    }

    protected createRenameContainer(file: File) {
        const {confirmText, cancelText, duplicatedHint, onDuplicated} = this.options;
        const $renameContainer = $('<div class="input-group input-rename-container hidden"></div>');
        const $input = $('<input />')
            .addClass('form-control')
            .prop('type', 'text')
            .prop('autofocus', true)
            .prop('defaultValue', file.name)
            .on('keydown', (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    const $fileItem = $renameContainer.closest('.file-item');
                    const $fileName = $fileItem.find('.file-name');
                    if ($fileName.html() === $input.val()) {
                        $renameContainer.addClass('hidden');
                        $fileItem.find('.file-info.hidden').removeClass('hidden');
                        return;
                    }

                    if (this.fileMap.has($input.val() as string)) {
                        onDuplicated?.($input.val() as string);
                        if (duplicatedHint) alert(duplicatedHint);
                        return;
                    }

                    this.renameFileItem(file, $input.val() as string);
                    $renameContainer.addClass('hidden');
                    $fileItem.find('.file-info.hidden').removeClass('hidden');
                    $fileName.html($input.val() as string);
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
                const $fileItem = $renameContainer.closest('.file-item');
                const $fileName = $fileItem.find('.file-name');
                if ($fileName.html() === $input.val()) {
                    $renameContainer.addClass('hidden');
                    $fileItem.find('.file-info.hidden').removeClass('hidden');
                    return;
                }

                if (this.fileMap.has($input.val() as string)) {
                    onDuplicated?.($input.val() as string);
                    if (duplicatedHint) alert(duplicatedHint);
                    return;
                }
                this.renameFileItem(file, $input.val() as string);
                $renameContainer.addClass('hidden');
                $fileItem.find('.file-info.hidden').removeClass('hidden');
                $fileName.html($input.val() as string);
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
