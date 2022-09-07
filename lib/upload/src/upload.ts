import {formatBytes} from '@zui/helpers/src/format-string';

type UploadOptions = {
    listElm: HTMLElement | null;
    renameText: string;
    deleteText: string;
    showRenameBtn: boolean;
    showDeleteBtn: boolean;
    showIcon: boolean;
    icon: HTMLElement | null;
    renameConfirmText: string;
    renameCancelText: string;
} & Partial<{
    onChange: (files: File[]) => void;
    onDelete: (file: File) => void;
    maxCount: number;
}>;

const defaultOptions: UploadOptions = {
    listElm: null,
    icon: null,
    renameText: '重命名',
    deleteText: '删除',
    showRenameBtn: false,
    showDeleteBtn: false,
    showIcon: true,
    renameConfirmText: '确定',
    renameCancelText: '取消',
};

export default class Upload {
    readonly #fileElm: HTMLInputElement;

    readonly #options: UploadOptions;

    #fileMap = new Map<string, File>();

    #itemMap = new Map<string, HTMLElement>();

    #dataTransfer = new DataTransfer();

    constructor(elm: HTMLInputElement, options: Partial<UploadOptions> = {}) {
        this.#fileElm = elm;
        this.#options = {...defaultOptions, ...options};
        this.#options.maxCount = this.#fileElm.multiple
            ? this.#options.maxCount
            : 1;
        this.#addChangeListener();
    }

    #addChangeListener() {
        this.#fileElm.addEventListener('change', (event) => {
            const fileList = (event.target as HTMLInputElement).files;
            if (!fileList) {
                return;
            }

            const files = [...fileList];
            this.#addFileItem(files);
            this.#options.onChange?.(files);
        });
    }

    #addFile(file: File) {
        this.#fileMap.set(file.name, file);
        this.#dataTransfer.items.add(file);
        this.#fileElm.files = this.#dataTransfer.files;
    }

    #addFileItem(files: File[]) {
        if (!this.#options.listElm) {
            return;
        }

        for (const file of files) {
            if (this.#options.maxCount && this.#fileMap.size >= this.#options.maxCount) {
                return;
            }
            this.#addFile(file);
            const item = this.#createFileItem(file);
            this.#itemMap.set(file.name, item);
            (this.#options.listElm as HTMLElement).appendChild(item);
        }
    }

    #deleteFile(file: File) {
        this.#fileMap.delete(file.name);
        this.#dataTransfer = new DataTransfer();
        this.#fileMap.forEach((f) => {
            this.#dataTransfer.items.add(f);
        });
        this.#fileElm.files = this.#dataTransfer.files;
    }

    #deleteFileItem(name: string) {
        const file = this.#fileMap.get(name);
        if (!file) {
            return;
        }
        this.#options.onDelete?.(file);
        this.#deleteFile(file);
        const fileItemElm = this.#itemMap.get(file.name);
        this.#itemMap.delete(file.name);
        if (!fileItemElm) {
            return;
        }
        this.#options.listElm?.removeChild(fileItemElm);
    }

    #renameFile(file: File, name: string) {
        this.#fileMap.delete(file.name);
        const newFile = new File([file], name);
        this.#fileMap.set(name, newFile);
        this.#dataTransfer = new DataTransfer();
        this.#fileMap.forEach((f) => {
            this.#dataTransfer.items.add(f);
        });
        this.#fileElm.files = this.#dataTransfer.files;
    }

    #renameFileItem(file: File, name: string) {
        const item = this.#itemMap.get(file.name);
        if (!item) {
            return;
        }
        this.#itemMap.delete(file.name);
        this.#itemMap.set(name, item);
        this.#renameFile(file, name);
    }


    #createFileItem(file: File) {
        const fileItem = document.createElement('li');
        fileItem.classList.add('file-item');

        if (this.#options.showIcon) {
            fileItem.appendChild(this.#createFileIcon());
        }

        const fileInfoElm = this.#createFileInfoElm(file);
        fileItem.appendChild(fileInfoElm);
        const renameInput = this.#createRenameInput(file);
        fileItem.appendChild(renameInput);
        return fileItem;
    }

    #createFileIcon() {
        if (this.#options.icon) {
            return this.#options.icon;
        }

        const icon = document.createElement('i');
        icon.classList.add('icon', 'icon-paper-clip');
        return icon;
    }

    #createFileInfoElm(file: File) {
        const fileInfoElm = document.createElement('div');
        fileInfoElm.classList.add('file-info');
        const name = document.createElement('span');
        name.classList.add('file-name');
        name.innerHTML = file.name;
        fileInfoElm.appendChild(name);
        const size = document.createElement('span');
        size.classList.add('file-size', 'text-gray');
        size.innerHTML = formatBytes(file.size);
        fileInfoElm.appendChild(size);
        if (this.#options.showRenameBtn) {
            const renameBtn = document.createElement('span');
            renameBtn.classList.add('btn', 'size-sm', 'rounded-sm', 'text-primary', 'canvas', 'file-action', 'file-rename');
            renameBtn.innerHTML = this.#options.renameText;
            renameBtn.addEventListener('click', () => {
                fileInfoElm.classList.add('hidden');
                fileInfoElm.closest('.file-item')?.querySelector('.input-group.hidden')?.classList.remove('hidden');
            });
            fileInfoElm.appendChild(renameBtn);
        }
        if (this.#options.showDeleteBtn) {
            const deleteBtn = document.createElement('span');
            deleteBtn.classList.add('btn', 'size-sm', 'rounded-sm', 'text-primary', 'canvas', 'file-action', 'file-delete');
            deleteBtn.innerHTML = this.#options.deleteText;
            deleteBtn.addEventListener('click', () => {
                this.#deleteFileItem(name.innerHTML);
            });
            fileInfoElm.appendChild(deleteBtn);
        }
        return fileInfoElm;
    }

    #createRenameInput(file: File) {
        const renameInput = document.createElement('div');
        renameInput.classList.add('input-group', 'hidden');

        const input = document.createElement('input');
        input.type = 'text';
        input.autofocus = true;
        input.classList.add('form-control');
        input.defaultValue = file.name;
        renameInput.appendChild(input);

        const groupBtn = document.createElement('div');
        groupBtn.classList.add('input-group-btn');
        renameInput.appendChild(groupBtn);

        const submitBtn = document.createElement('button');
        submitBtn.type = 'button';
        submitBtn.classList.add('btn');
        submitBtn.innerHTML = this.#options.renameConfirmText;
        submitBtn.addEventListener('click', () => {
            renameInput.classList.add('hidden');
            this.#renameFileItem(file, input.value);
            const fileInfoElm = renameInput.closest('.file-item')?.querySelector('.file-info.hidden');
            if (!fileInfoElm) {
                return;
            }
            fileInfoElm.classList.remove('hidden');
            const nameElm = fileInfoElm.querySelector('.file-name');
            if (nameElm) {
                nameElm.innerHTML = input.value;
            }
        });
        groupBtn.appendChild(submitBtn);

        const cancelBtn = document.createElement('button');
        cancelBtn.type = 'button';
        cancelBtn.classList.add('btn');
        cancelBtn.innerHTML = this.#options.renameCancelText;
        cancelBtn.addEventListener('click', () => {
            renameInput.classList.add('hidden');
            input.value = file.name;
            renameInput.closest('.file-item')?.querySelector('.file-info.hidden')?.classList.remove('hidden');
        });
        groupBtn.appendChild(cancelBtn);
        return renameInput;
    }
}
