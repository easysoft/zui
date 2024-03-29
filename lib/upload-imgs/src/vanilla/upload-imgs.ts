import {Upload} from '@zui/upload';
import {Cash, $} from '@zui/core';
import {UploadImgsOptions} from '../types';

export class UploadImgs extends Upload<UploadImgsOptions> {
    private $uploadInfo: Cash;

    private $tip: Cash;

    private $uploadButtonItem: Cash;

    static NAME = 'UploadImgs';

    static DEFAULT: Partial<UploadImgsOptions> = {
        uploadText: '添加文件',
        renameBtn: true,
        renameText: '重命名',
        renameIcon: 'edit',
        renameClass: '',
        deleteBtn: true,
        deleteText: '删除',
        deleteIcon: 'trash',
        deleteClass: '',
        showIcon: false,
        multiple: true,
        limitSize: false,
        btnClass: '',
        draggable: true,
        accept: 'image/jpg, image/jpeg, image/gif, image/png',
        showSize: true,
        useIconBtn: true,
        totalCountText: '共 <span class="font-bold text-black">%s</span> 个文件 <span class="font-bold text-black">%s</span> 个文件等待上传。',
    };

    init() {
        this.initUploadButtonItemCash();
        this.options.onSizeChange = () => {
            this.$uploadInfo.html(this.options.totalCountText!.replace('%s', this.fileMap.size.toString()).replace('%s', this.fileMap.size.toString()));
            if (this.fileMap.size > 0) {
                this.$tip.remove();
                this.$list.append(this.$uploadButtonItem);
            } else {
                this.$uploadButtonItem.remove();
                this.$label.append(this.$tip);
            }
        };
        super.init();
        this.$list.addClass('flex');
    }

    protected initUploadButtonItemCash() {
        this.$uploadButtonItem = $(`<label class="upload-button-item order-last" for="${this.options.name}" />`)
            .addClass('flex justify-center items-center cursor-pointer')
            .css({width: 120, height: 120, background: 'var(--color-slate-100)'})
            .append($('<i class="icon icon-plus" />'));
    }

    protected initUploadCash() {
        const {name, tip, uploadText, uploadIcon, totalCountText} = this.options;
        this.$list = $('<ul class="file-list py-1 flex-wrap gap-x-4 gap-y-4"></ul>');
        this.$label = $('<div class="draggable-area relative block w-full border border-dashed border-gray"></div>').css({minHeight: 64});
        const $uploadText = $(`<label for="${name}" class="text-primary cursor-pointer">${uploadText}</label>`);
        if (uploadIcon) {
            const $uploadIcon = $(`<i class="icon icon-${uploadIcon} mr-1"></i>`);
            $uploadText.prepend($uploadIcon);
        }
        this.$tip = $('<div class="absolute inset-0 col justify-center items-center"></div>')
            .append($uploadText);
        if (tip) {
            this.$tip.append($(`<span class="upload-tip">${tip}</span>`));
        }
        this.$label.append(this.$tip);
        this.$label.append(this.$input, this.$list);
        this.bindDragEvent();
        this.$element.append(this.$label);

        this.$uploadInfo = $('<div class="py-1" />')
            .css({color: 'var(--color-slate-500)'})
            .html(totalCountText!.replace('%s', this.fileMap.size.toString()).replace('%s', this.fileMap.size.toString()));
        this.$element.append(this.$uploadInfo);
    }

    protected filterFiles(files: File[]) {
        const {accept} = this.options;
        if (accept === 'image/*') {
            return files.filter(file => file.type.includes('image'));
        }

        const imageTypes = accept!.replace(/\s/g, '').replace(/\./g, 'image/').split(',');
        return files.filter(file => imageTypes.includes(file.type));
    }

    protected createFileItem(file: File) {
        const $fileItem = super.createFileItem(file)
            .addClass('relative')
            .removeClass('flex items-center gap-2 my-1');
        this.setImageUrl(file, $fileItem);

        const {deleteBtn, showSize} = this.options;
        if (deleteBtn) {
            $fileItem.append(
                this.fileDeleteBtn()
                    .addClass('absolute right-0 top-0 text-white')
                    .css({background: 'var(--color-slate-500)'})
                    .on('click', () => this.deleteFileItem(file.name)),
            );
        }
        if (showSize) {
            $fileItem.append(
                this.fileSize(file.size)
                    .addClass('file-size label text-white circle darker absolute px-1 hidden')
                    .removeClass('text-gray')
                    .css({top: 96, left: 4}),
            );
        }

        return $fileItem;
    }

    private setImageUrl(file: File, $fileItem: Cash) {
        const fr = new FileReader();
        fr.onload = () => {
            $('<div class="img flex-none" />')
                .addClass('rounded')
                .css({backgroundImage: `url(${fr.result})`, backgroundSize: 'cover'})
                .prependTo($fileItem);
        };
        fr.readAsDataURL(file);
    }

    protected createFileInfo(file: File) {
        const $renameBtn = this.fileRenameBtn()
            .addClass('flex-none')
            .on('click', (e) => {
                const $item = $(e.target).closest('.file-item');
                $item.find('.file-info').addClass('hidden');
                $item.find('.input-rename-container').removeClass('hidden');

                const inputEl = $item.find('input')[0] as HTMLInputElement;
                inputEl.focus();
                if (inputEl.value.lastIndexOf('.') !== -1) {
                    inputEl.setSelectionRange(0, inputEl.value.lastIndexOf('.'));
                }
            });
        const $fileInfo = $('<div class="file-info flex justify-between items-center"></div>')
            .css({width: 120})
            .append($(`<div class="file-name py-1 ellipsis">${file.name}</div>`))
            .append($renameBtn);

        return $fileInfo;
    }

    protected createRenameContainer(file: File) {
        const {duplicatedHint, onDuplicated} = this.options;
        const $input = $('<input />')
            .addClass('input-rename-container border-primary border hidden')
            .prop('type', 'text')
            .prop('autofocus', true)
            .prop('defaultValue', file.name)
            .css({width: 120})
            .on('keydown', (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    const $fileName = $input.closest('.file-item').find('.file-name');
                    if ($fileName.html() === $input.val()) {
                        $input.addClass('hidden');
                        $fileName.closest('.file-info').removeClass('hidden');
                        return;
                    }
                    if (this.fileMap.has($input.val() as string)) {
                        onDuplicated?.($input.val() as string);
                        if (duplicatedHint) alert(duplicatedHint);
                        return;
                    }
                    this.renameFileItem(file, $input.val() as string);
                    $input.addClass('hidden');
                    $fileName.html($input.val() as string).closest('.file-info').removeClass('hidden');
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
                    $fileName.closest('.file-info').removeClass('hidden');
                    return;
                }
                if (this.fileMap.has($input.val() as string)) {
                    onDuplicated?.($input.val() as string);
                    if (duplicatedHint) alert(duplicatedHint);
                    return;
                }
                this.renameFileItem(file, $input.val() as string);
                $input.addClass('hidden');
                $fileName.html($input.val() as string).closest('.file-info').removeClass('hidden');
            });

        return $input;
    }
}
