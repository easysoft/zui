import {Upload, UploadOptions} from '@zui/upload';
import {Cash, $} from '@zui/core';
import {Tooltip} from '@zui/tooltip';
import {formatBytes} from '@zui/helpers/src/format-string';

export class UploadImgs extends Upload {
    static DEFAULT: Partial<UploadOptions> = {
        uploadText: '上传文件',
        renameText: '重命名',
        renameIcon: 'edit',
        deleteText: '删除',
        deleteIcon: 'trash',
        confirmText: '确定',
        cancelText: '取消',
        renameBtn: true,
        deleteBtn: true,
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
    };

    init() {
        super.init();

        this.$list.addClass('flex');
    }

    protected initUploadCash() {
        const {name, tip} = this.options;
        this.$list = $('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>');
        const $tip = $(`<span class="upload-tip">${tip}</span>`);
        this.$label = $('<div class="draggable-area cursor-pointer block w-full border border-dashed border-gray"></div>').css({minHeight: 56});
        this.$label.append(this.$input, this.$list);
        const $footer = $('<div class="flex justify-between"></div>');
        const $btnGroup = $('<div class="flex gap-1"></div>');
        const $addBtn = $(`<label class="btn primary" for="${name}"><i class="icon icon-plus"></i>添加文件</label>`);
        const $uploadBtn = $('<button class="btn primary"><i class="icon icon-arrow-up"></i>开始上传</button>');
        $btnGroup
            .append($addBtn)
            .append($uploadBtn);
        const count = this.fileMap.size;
        const $fileCount = $(`<div>共 ${count} 个文件，${count} 个文件等待上传。</div>`);
        const $totalSize = $(`<span>${count}</span>`);
        $fileCount.prepend($totalSize);
        new Tooltip($totalSize, {title: `总大小：${formatBytes(this.currentBytes)}`});
        $footer.append($btnGroup)
            .append($fileCount);

        this.$element
            .append(this.$label)
            .append($tip)
            .append($footer);

    }

    protected addFileItem(files: File[]) {
        const {accept} = this.options;
        const imageTypes = accept!.replace(' ', '').split(',');
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
                .css({bottom: 4, left: 4});
            $fileItem.append($fileSize);
        }
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
        const $icon = $('<i class="icon icon-arrow-up absolute"></i>').css({top: 4, left: 4});
        new Tooltip($icon, {title: '待上传'});
        return $icon;
    }

    protected createFileInfo(file: File) {
        const {renameBtn, renameText, deleteBtn, deleteText} = this.options;
        const $fileInfo = $('<div />')
            .addClass('hidden absolute top-0 right-0 left-0 file-info flex items-center justify-end')
            .css({background: 'rgba(255, 255, 255, .85)'});
        const $btnGroup = $('<div></div>');
        if (renameBtn) {
            $btnGroup.append(this.fileRenameBtn(renameText!));
        }
        if (deleteBtn) {
            $btnGroup.append(this.fileDeleteBtn(deleteText!));
        }

        $fileInfo.append($btnGroup);

        return $fileInfo;
    }
}
