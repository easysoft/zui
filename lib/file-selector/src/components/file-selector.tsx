import {createRef} from 'preact';
import {CustomContent, HElement, classes, mergeProps, nextGid, $} from '@zui/core';
import {formatBytes, convertBytes, formatString} from '@zui/helpers';
import {Button} from '@zui/button/src/component';
import {Modal} from '@zui/modal';
import {Listitem} from '@zui/list/src/component';
import i18nData from '../i18n';

import type {ComponentChildren, RefObject, RenderableProps, JSX} from 'preact';
import type {ClassNameLike, CustomContentType, IconType} from '@zui/core';
import type {ButtonProps} from '@zui/button';
import type {ModalAlertOptions, ModalConfirmOptions} from '@zui/modal';
import type {FileInfo, FileSelectorProps, FileSelectorState, StaticFileInfo} from '../types';
import type {Item} from '@zui/common-list';
import type {ToolbarSetting} from '@zui/toolbar';
import {AvatarOptions} from '@zui/avatar/src/types';

/**
 * File selector component.
 */
export class FileSelector<P extends FileSelectorProps = FileSelectorProps, S extends FileSelectorState = FileSelectorState> extends HElement<P, S> {
    static defaultProps: Partial<FileSelectorProps> = {
        mode: 'button',
        maxFileSize: '100MB',
        fileIcons: {
            default: 'file',
        },
        renameBtn: true,
        removeBtn: true,
        draggable: true,
        thumbnail: true,
    };

    static i18n = i18nData;

    /**
     * Access to static properties via this.constructor.
     *
     * @see https://github.com/Microsoft/TypeScript/issues/3841#issuecomment-337560146
     */
    declare ['constructor']: typeof FileSelector<P, S>;

    protected _input: RefObject<HTMLInputElement> = createRef();

    protected _file: RefObject<HTMLInputElement> = createRef();

    protected _id = `file-selector-input-${nextGid()}`;

    protected _data: DataTransfer = new DataTransfer();

    constructor(props: P) {
        super(props);
        this.state = {
            files: (props.defaultFiles || []).map(x => this.constructor.getInfo(x)),
            inputKey: 0,
        } as S;
    }

    get size() {
        return this.state.files.reduce((total, file) => total + file.size, 0);
    }

    get count() {
        return this.state.files.length;
    }

    get multiple() {
        const {multiple, name = ''} = this.props;
        return !!(multiple ?? name.endsWith('[]'));
    }

    get info() {
        const {maxFileSize = 0} = this.props;
        return {
            size: formatBytes(this.size, 1),
            maxFileSize: formatBytes(typeof maxFileSize === 'string' ? convertBytes(maxFileSize) : maxFileSize, 1),
            count: this.count,
        };
    }

    get files() {
        return this._data.files;
    }

    componentDidMount(): void {
        const initFiles = this.state.files.reduce<File[]>((files, file) => {
            if (file.file) {
                files.push(file.file);
            }
            return files;
        }, []);
        if (initFiles.length) {
            initFiles.forEach(file => this._data.items.add(file));
            this._syncFiles();
        }
    }

    getFile(id: string) {
        return this.state.files.find(file => file.id === id);
    }

    getFileByName(name: string) {
        return this.state.files.find(file => file.name === name);
    }

    select() {
        this._input.current?.click();
    }

    selectFiles(files: FileList | File[]) {
        if (this.props.onSelect?.call(this, files) === false) {
            return;
        }
        for (let i = 0; i < files.length; i++) {
            this.addFile(files[i]);
        }
    }

    protected async _checkDuplicated(fileInfo: FileInfo): Promise<boolean> {
        const {allowSameName, onDuplicated, duplicatedTip = this.i18n('duplicatedTip')} = this.props;
        const {name} = fileInfo;
        const oldFile = allowSameName ? this.getFile(fileInfo.id) : this.getFileByName(name);
        if (!oldFile) {
            return false;
        }

        if (onDuplicated?.call(this, name, fileInfo, oldFile) === true) {
            return true;
        }

        if (duplicatedTip) {
            await this._showAlert(duplicatedTip, {
                name,
                size: formatBytes(fileInfo.size, 1),
            });
        }
        return true;
    }

    protected async _checkExceededSize(fileInfo: FileInfo): Promise<boolean> {
        const {maxFileSize, onExceededSize, exceededSizeTip = this.i18n('exceededSizeTip')} = this.props;
        if (!maxFileSize) {
            return false;
        }

        const maxSize = typeof maxFileSize === 'string' ? convertBytes(maxFileSize) : maxFileSize;
        if (fileInfo.size <= maxSize) {
            return false;
        }

        if (onExceededSize?.call(this, maxSize, fileInfo) === true) {
            return true;
        }
        if (exceededSizeTip) {
            await this._showAlert(exceededSizeTip, {
                name: fileInfo.name,
                size: formatBytes(fileInfo.size, 1),
                maxSize: formatBytes(maxSize, 1),
            });
        }
        return true;
    }

    protected async _checkTotalSize(fileInfo: FileInfo): Promise<boolean> {
        const {totalFileSize, onExceededTotalSize, exceededTotalSizeTip = this.i18n('exceededTotalSizeTip')} = this.props;
        if (!totalFileSize) {
            return false;
        }

        const maxSize = typeof totalFileSize === 'string' ? convertBytes(totalFileSize) : totalFileSize;
        const totalSize = fileInfo.size + this.size;
        if (totalSize <= maxSize) {
            return false;
        }

        if (onExceededTotalSize?.call(this, maxSize, fileInfo) === true) {
            return true;
        }
        if (exceededTotalSizeTip) {
            await this._showAlert(exceededTotalSizeTip, {
                name: fileInfo.name,
                size: formatBytes(fileInfo.size, 1),
                maxSize: totalFileSize,
                totalSize,
            });
        }
        return true;
    }

    protected async _checkExceededCount(fileInfo: FileInfo): Promise<boolean> {
        const {multiple, onExceededCount, exceededCountTip = this.i18n('exceededCountTip')} = this.props;
        const maxCount = multiple ? (typeof multiple === 'number' ? multiple : 1) : 0;
        if (!maxCount) {
            return false;
        }

        const count = this.count + 1;
        if (count <= maxCount) {
            return false;
        }

        if (onExceededCount?.call(this, maxCount, fileInfo) === true) {
            return true;
        }
        if (exceededCountTip) {
            await this._showAlert(exceededCountTip, {
                name: fileInfo.name,
                size: formatBytes(fileInfo.size, 1),
                maxCount,
                count,
            });
        }
        return true;
    }

    async addFile(file: File): Promise<boolean> {
        const {onAdd} = this.props;
        const fileInfo = this.constructor.getInfo(file);

        const hasExceededCount = await this._checkExceededCount(fileInfo);
        if (hasExceededCount) {
            return false;
        }

        const hasDuplicate = await this._checkDuplicated(fileInfo);
        if (hasDuplicate) {
            return false;
        }

        const hasExceededSize = await this._checkExceededSize(fileInfo);
        if (hasExceededSize) {
            return false;
        }

        const hasExceededTotalSize = await this._checkTotalSize(fileInfo);
        if (hasExceededTotalSize) {
            return false;
        }

        if (onAdd && onAdd.call(this, fileInfo) === false) {
            return false;
        }

        this._data.items.add(file);
        this._syncFiles();

        await this.changeState((prevState) => ({files: [...prevState.files, fileInfo]} as S));

        return true;
    }

    startRenameFile(id: string) {
        this.setState({renaming: id, newName: undefined}, () => {
            const input = $(this._file.current).closest('.file-selector').find('.file-selector-rename-input')[0] as HTMLInputElement;
            if (input) {
                input.select();
                input.focus();
            }
        });
    }

    async renameFile(id: string, newName: string) {
        const fileInfo = this.getFile(id);
        if (!fileInfo || fileInfo.name === newName) {
            return;
        }
        const {onRename} = this.props;
        if (onRename) {
            const result = await onRename.call(this, newName, fileInfo.name, fileInfo);
            if (result === false) {
                return;
            }
        }

        const originFile = fileInfo.file;
        if (originFile) {
            const newFile = new File([originFile], newName, {type: originFile.type, lastModified: originFile.lastModified});
            const dataIndex = Array.from(this._data.files).indexOf(originFile);
            if (dataIndex >= 0) {
                this._data.items.remove(dataIndex);
            }
            this._data.items.add(newFile);
            this._syncFiles();
            fileInfo.file = newFile;
        }
        fileInfo.name = newName;
        fileInfo.ext = this.constructor.getExt(newName);
        const {files} = this.state;
        const index = files.indexOf(fileInfo);
        if (index >= 0) {
            files.splice(index, 1, fileInfo);
        } else {
            files.push(fileInfo);
        }
        this.setState({files: [...files]});
    }

    stopRenameFile = () => {
        const {renaming, newName} = this.state;
        if (!renaming || !newName) {
            return;
        }
        this.cancelRenameFile();
        this.renameFile(renaming, newName);
    };

    cancelRenameFile = () => {
        this.setState({renaming: ''});
    };

    async removeFile(id: string) {
        const fileInfo = this.getFile(id);
        if (!fileInfo) {
            return;
        }
        const {onRemove, removeConfirm} = this.props;
        if (removeConfirm) {
            let confirmOptions = removeConfirm;
            if (typeof confirmOptions === 'string') {
                confirmOptions = {message: confirmOptions} as ModalConfirmOptions;
            }
            if (typeof confirmOptions.message === 'string') {
                confirmOptions.message = formatString(confirmOptions.message, {
                    name: fileInfo.name,
                    size: formatBytes(fileInfo.size, 1),
                });
            }
            const confirmResult = await Modal.confirm(confirmOptions);
            if (!confirmResult) {
                return;
            }
        }
        if (onRemove) {
            const removeResult = await onRemove.call(this, fileInfo);
            if (removeResult === false) {
                return;
            }
        }

        if (fileInfo.file) {
            const dataIndex = Array.from(this._data.files).indexOf(fileInfo.file);
            if (dataIndex >= 0) {
                this._data.items.remove(dataIndex);
            }
        }

        const index = this.state.files.indexOf(fileInfo);
        if (index >= 0) {
            this.state.files.splice(index, 1);
            this.setState({files: this.state.files});
        }
    }

    protected _syncFiles() {
        this._file.current!.files = this._data.files;
    }

    protected _showAlert(tip: string | ModalAlertOptions, formatData?: Record<string, unknown>) {
        if (typeof tip === 'string') {
            tip = {message: tip} as ModalAlertOptions;
        }
        if (typeof tip.message === 'string') {
            tip.message = formatString(tip.message, formatData || this.info);
        }
        return Modal.alert(tip);
    }

    protected _getTip(tip: CustomContentType): CustomContentType {
        if (typeof tip === 'string') {
            return formatString(tip, this.info);
        }
        return tip;
    }

    protected _handleChange = (event: Event) => {
        const input = event.target as HTMLInputElement;
        if (!input.files) {
            return;
        }
        this.selectFiles(input.files);
        this.setState({inputKey: nextGid()});
    };

    protected _renderInput(props: RenderableProps<P>) {
        return <input key={`input${this.state.inputKey}`} id={this._id} multiple={this.multiple} accept={props.accept} style="display:none" type="file" ref={this._input} onChange={this._handleChange} />;
    }

    protected _handleDragOver = (event: DragEvent) => {
        event.preventDefault();
        if (!this.state.dragging) {
            this.setState({dragging: true});
        }
    };

    protected _handleDragLeave = (event: DragEvent) => {
        event.preventDefault();
        this.setState({dragging: false});
    };

    protected _handleDrop = (event: DragEvent) => {
        event.preventDefault();
        const files = this.constructor.filterFiles(event.dataTransfer?.files || [], this.props.accept);
        if (files.length) {
            this.selectFiles(files);
            this.setState({inputKey: nextGid()});
        }
    };

    protected _renderUpload(props: RenderableProps<P>) {
        const {mode, draggable, tip = this.i18n('fileSelectTip'), uploadBtn} = props;
        const btnProps: ButtonProps = mergeProps({
            component: 'label',
            attrs: {
                for: this._id,
            },
            text: this.i18n('selectFile'),
        }, typeof uploadBtn === 'object' ? uploadBtn : (typeof uploadBtn === 'string' ? {text: uploadBtn} : {}));
        const tipView = (
            <div className="file-selector-tip">
                <CustomContent content={this._getTip(tip)} generatorThis={this} generatorArgs={[this.state]} />
            </div>
        );
        const draggableProps: JSX.DOMAttributes<HTMLElement> = {};
        if (draggable) {
            draggableProps.onDragOver = this._handleDragOver;
            draggableProps.onDragLeave = this._handleDragLeave;
            draggableProps.onDrop = this._handleDrop;
        }
        if (mode === 'box') {
            return (
                <Button key="upload" {...btnProps} {...draggableProps} className={classes('file-selector-box', btnProps.className)}>
                    {tipView}
                </Button>
            );
        }
        return (
            <div key="upload" className="file-selector-btn" {...draggableProps}>
                <Button {...btnProps} />
                {tipView}
            </div>
        );
    }

    protected _renderForForm(props: RenderableProps<P>) {
        const {name, accept} = props;
        if (!name) {
            return null;
        }
        return <input key="form" ref={this._file} type="file" name={name} multiple={this.multiple} accept={accept} style="display:none" />;
    }

    protected _getIcon(file: FileInfo): IconType | undefined {
        let {fileIcons} = this.props;
        if (!fileIcons) {
            return;
        }
        if (typeof fileIcons === 'string') {
            fileIcons = {default: fileIcons};
        }
        return fileIcons[file.ext] ?? fileIcons.default;
    }

    protected _getThumbnail(file: FileInfo) {
        if ((file.file || file.url) && this.props.thumbnail && this.constructor.isImage(file)) {
            return file.url || URL.createObjectURL(file.file!);
        }
    }

    protected _getAvatar(file: FileInfo): AvatarOptions | undefined {
        const thumbnail = this._getThumbnail(file);
        let avatar: AvatarOptions | undefined;
        if (thumbnail) {
            avatar = {src: thumbnail};
        } else {
            const icon = this._getIcon(file);
            if (icon) {
                avatar = {icon};
            }
        }
        if (avatar) {
            return {
                size: 'sm',
                ...avatar,
            };
        }
        return avatar;
    }

    protected _getFileActions(file: FileInfo): ToolbarSetting<[Item]> {
        let {removeBtn, renameBtn} = this.props;
        if (typeof removeBtn === 'function') {
            removeBtn = removeBtn.call(this, file);
        }
        if (typeof removeBtn === 'string') {
            removeBtn = {text: removeBtn};
        } else if (removeBtn === true) {
            removeBtn = {hint: this.i18n('removeFile'), icon: 'trash'};
        }
        if (typeof renameBtn === 'function') {
            renameBtn = renameBtn.call(this, file);
        }
        if (typeof renameBtn === 'string') {
            renameBtn = {text: renameBtn};
        } else if (renameBtn === true) {
            renameBtn = {hint: this.i18n('renameFile'), icon: 'edit'};
        }
        const actions: Item[] = [];
        if (renameBtn) {
            actions.push({
                'data-rename-file': file.id,
                ...renameBtn,
            } as Item);
        }
        if (removeBtn) {
            actions.push({
                'data-remove-file': file.id,
                ...removeBtn,
            } as Item);
        }
        return actions;
    }

    protected _renderFile(file: FileInfo) {
        let {itemProps} = this.props;
        if (typeof itemProps === 'function') {
            itemProps = itemProps.call(this, file);
        } else {
            itemProps = mergeProps({
                className: 'file-selector-item',
                multiline: false,
                title: file.name,
                subtitle: formatBytes(file.size, 1),
                avatar: this._getAvatar(file),
                actions: this._getFileActions(file),
                'z-id': file.id,
            }, itemProps);
        }
        return (
            <Listitem key={file.id} {...itemProps} />
        );
    }

    protected _handleRenameChange = (event: Event) => {
        this.setState({
            newName: (event.target as HTMLInputElement).value,
        });
    };

    protected _renderFileRename(file: FileInfo) {
        let {itemProps} = this.props;
        if (typeof itemProps === 'function') {
            itemProps = itemProps.call(this, file);
        } else {
            const {newName = file.name} = this.state;
            itemProps = mergeProps({
                className: 'file-selector-item is-renaming',
                multiline: false,
                avatar: this._getAvatar(file),
                'z-id': file.id,
                contentClass: 'file-selector-rename',
                content: [
                    <div className="file-selector-rename-text">
                        <div className="form-control size-sm">{newName}</div>
                        <input type="text" defaultValue={file.name} className="form-control size-sm select-all file-selector-rename-input" autofocus onChange={this._handleRenameChange} onInput={this._handleRenameChange} />
                    </div>,
                    <Button icon="check" text={this.i18n('confirm')} type="primary-pale" size="sm" onClick={this.stopRenameFile} />,
                    <Button icon="close" text={this.i18n('cancel')} type="gray-pale" size="sm" onClick={this.cancelRenameFile} />,
                ],
            }, itemProps);
        }
        return (
            <Listitem key={file.id} {...itemProps} />
        );
    }

    protected _handleClick = (event: MouseEvent) => {
        const $target = $(event.target as HTMLElement);
        const $btn = $target.closest('[data-remove-file],[data-rename-file]');
        if (!$btn.length) {
            return;
        }
        const data = $btn.data()!;
        if (data.renameFile) {
            this.startRenameFile(data.renameFile);
        } else if (data.removeFile) {
            this.removeFile(data.removeFile);
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected _renderList(_props: RenderableProps<P>) {
        const {files, renaming} = this.state;
        return (
            <div key="list" className={`file-selector-list${files.length ? '' : ' is-empty'}`} onClick={this._handleClick}>
                {files.map(file => file.id === renaming ? this._renderFileRename(file) : this._renderFile(file))}
            </div>
        );
    }

    protected _getClassName(props: RenderableProps<P>): ClassNameLike {
        return ['file-selector', `is-mode-${props.mode}`, props.className, this.state.dragging ? 'is-dragging' : ''];
    }

    protected _getChildren(props: RenderableProps<P>): ComponentChildren {
        return [
            this._renderUpload(props),
            this._renderList(props),
            this._renderInput(props),
            this._renderForForm(props),
        ];
    }

    static getExt(name: string) {
        return (name.split('.').pop() || '').toLowerCase();
    }

    static getInfo(file: File | FileInfo | StaticFileInfo): FileInfo {
        const {name, size, type} = file;
        if (file instanceof File) {
            return {
                name: name,
                size: size as number,
                type: type as string,
                file,
                id: [name, size].join(':'),
                ext: this.getExt(name),
            };
        }
        const sizeVal = typeof size === 'string' ? convertBytes(size) : size;
        return {
            name,
            size: sizeVal,
            id: file.id ?? [name, sizeVal].join(':'),
            type: type ?? '',
            ext: this.getExt(name),
            file: (file as FileInfo).file,
            url: file.url,
        };
    }

    static imageAccepts = 'image/*,.png,.jpg,.jpeg,.gif';

    static isAccept(file: File | FileInfo, accept: string | string[]) {
        if (!accept || !accept.length) {
            return true;
        }
        const acceptTypes = Array.isArray(accept) ? accept : accept.split(',');
        return acceptTypes.some(acceptType => {
            if (file.type && acceptType === file.type) {
                return true;
            }
            if (acceptType.startsWith('.')) {
                return file.name.endsWith(acceptType);
            }
            if (acceptType.endsWith('/*')) {
                return file.type.startsWith(acceptType.slice(0, -1));
            }
            return false;
        });
    }

    static isImage(file: File | FileInfo) {
        return this.isAccept(file, this.imageAccepts);
    }

    static filterFiles(files: FileList | File[], accept: string | undefined) {
        if (!accept || !accept.length) {
            return files;
        }
        if (files instanceof FileList) {
            files = Array.from(files);
        }
        const acceptTypes = accept.split(',');
        return files.filter(file => {
            return this.isAccept(file, acceptTypes);
        });
    }
}
