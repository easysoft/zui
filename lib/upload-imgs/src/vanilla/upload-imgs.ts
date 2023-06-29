import {Upload} from '@zui/upload';
import {Cash, $} from '@zui/core';
import {Tooltip} from '@zui/tooltip';
import {formatBytes} from '@zui/helpers/src/format-string';
import {UploadImgsOptions} from '../types';

export class UploadImgs extends Upload<UploadImgsOptions> {
    static DEFAULT: Partial<UploadImgsOptions> = {
        uploadText: '开始上传',
        confirmText: '确定',
        cancelText: '取消',
        renameBtn: true,
        renameText: '重命名',
        renameIcon: 'edit',
        deleteBtn: true,
        deleteText: '删除',
        deleteIcon: 'trash',
        deleteClass: 'text-danger',
        showIcon: false,
        multiple: true,
        listPosition: 'bottom',
        limitSize: false,
        icon: 'file-o',
        btnClass: '',
        draggable: true,
        accept: 'image/jpg, image/jpeg, image/gif, image/png',
        showSize: true,
        useIconBtn: true,
        commentText: '',
        addImgsText: '添加文件',
        toUploadText: '待上传',
        totalSizeText: '共 %s 个文件，总大小 %s。',
    };

    init() {
        super.init();

        this.$list.addClass('flex');
    }

    protected initUploadCash() {
        const {name, tip, uploadText, commentText, addImgsText, totalSizeText} = this.options;
        this.$list = $('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>');
        this.$label = $('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({minHeight: 160});
        if (tip) {
            const $tip = $(`<span class="upload-tip absolute inset-0 flex justify-center items-center">${tip}</span>`);
            this.$label.append($tip);
        }
        this.$label.append(this.$input, this.$list);
        this.bindDragEvent();
        this.$element.append(this.$label);
        if (commentText) {
            const $comment = $(`<div class="text-secondary py-2">${commentText}</div>`);
            this.$element.append($comment);
        }

        const $footer = $('<div class="flex justify-between"></div>');
        const $btnGroup = $('<div class="flex gap-3"></div>');
        const $addBtn = $(`<label class="btn primary" for="${name}"><i class="icon icon-plus"></i>${addImgsText}</label>`);
        const $uploadBtn = $(`<button class="btn primary"><i class="icon icon-arrow-up"></i>${uploadText}</button>`);
        $btnGroup.append($addBtn).append($uploadBtn);
        const $uploadInfo = $('<div></div>')
            .html(totalSizeText!.replace('%s', this.fileMap.size.toString()).replace('%s', formatBytes(this.currentBytes)));
        $footer.append($btnGroup).append($uploadInfo);
        this.$element.append($footer);
    }

    protected addFileItem(files: File[]) {
        const {accept} = this.options;
        const imageTypes = accept!.replace(/\s/g, '').split(',');
        files = files.filter(file => imageTypes.includes(file.type));
        super.addFileItem(files);
    }

    protected createFileItem(file: File) {
        const $fileItem = super.createFileItem(file);
        $fileItem
            .addClass('relative')
            .removeClass('flex items-center gap-2 my-1');
        this.setImageUrl(file, $fileItem);
        $fileItem.append(this.toUploadTip());
        if (this.options.showSize) {
            const $fileSize = this.fileSize(file.size)
                .addClass('file-size label text-white circle darker absolute px-1 hidden')
                .removeClass('text-gray')
                .css({bottom: 36, left: 4});
            $fileItem.append($fileSize);
        }
        const $name = $(`<div class="file-name text-center py-1 ellipsis">${file.name}</div>`)
            .css({width: 120})
            .on('click', (e) => {
                $(e.target).closest('.file-item').find('.file-rename').trigger('click');
            });
        $fileItem.append($name);
        return $fileItem;
    }

    private setImageUrl(file: File, $fileItem: Cash) {
        const fr = new FileReader();
        fr.onload = () => {
            $('<div class="img flex-none" />')
                .css({backgroundImage: `url(${fr.result})`})
                .prependTo($fileItem);
        };
        fr.readAsDataURL(file);
    }

    private toUploadTip() {
        const {toUploadText} = this.options;
        const $icon = $('<i class="icon icon-arrow-up absolute"></i>').css({top: 4, left: 4});
        new Tooltip($icon, {title: toUploadText});
        return $icon;
    }

    protected createFileInfo(file: File) {
        const {renameBtn, renameText, deleteBtn, deleteText} = this.options;
        const $fileInfo = $('<div />')
            .addClass('hidden absolute top-0 right-0 left-0 file-info flex items-center justify-end')
            .css({background: 'rgba(255, 255, 255, .85)'});
        const $btnGroup = $('<div></div>');
        if (renameBtn) {
            $btnGroup.append(
                this.fileRenameBtn(renameText!)
                    .on('click', (e) => {
                        const $item = $(e.target).closest('li');
                        $item.find('.file-name').addClass('hidden');
                        $item.find('.input-rename-container').removeClass('hidden');
                        const inputEl = $item.find('input')[0] as HTMLInputElement;
                        inputEl.focus();
                        if (inputEl.value.lastIndexOf('.') !== -1) {
                            inputEl.setSelectionRange(0, inputEl.value.lastIndexOf('.'));
                        }
                    }),
            );
        }
        if (deleteBtn) {
            $btnGroup.append(
                this.fileDeleteBtn(deleteText!)
                    .on('click', () => this.deleteFileItem(file.name)),
            );
        }

        $fileInfo.append($btnGroup);

        return $fileInfo;
    }

    protected createRenameContainer(file: File) {
        const {duplicatedHint} = this.options;
        const $input = $('<input />')
            .addClass('input-rename-container border-primary border hidden')
            .prop('type', 'text')
            .prop('autofocus', true)
            .prop('defaultValue', file.name)
            .css({width: 120, height: 30})
            .on('keydown', (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    const $fileName = $input.closest('.file-item').find('.file-name');
                    if ($fileName.html() === $input.val()) {
                        $input.addClass('hidden');
                        $fileName.removeClass('hidden');
                        return;
                    }
                    if (this.fileMap.has($input.val() as string)) {
                        return alert(duplicatedHint);
                    }
                    this.renameFileItem(file, $input.val() as string);
                    $input.addClass('hidden');
                    $fileName.html($input.val() as string).removeClass('hidden');
                } else if (e.key === 'Escape') {
                    $input.val(file.name)
                        .addClass('hidden')
                        .closest('.file-item')
                        .find('.file-name')
                        .removeClass('hidden');
                }
            })
            .on('blur', () => {
                const $fileName = $input.closest('.file-item').find('.file-name');
                if ($fileName.html() === $input.val()) {
                    $input.addClass('hidden');
                    $fileName.removeClass('hidden');
                    return;
                }
                if (this.fileMap.has($input.val() as string)) {
                    return alert(duplicatedHint);
                }
                this.renameFileItem(file, $input.val() as string);
                $input.addClass('hidden');
                $fileName.html($input.val() as string).removeClass('hidden');
            });

        return $input;
    }
}
