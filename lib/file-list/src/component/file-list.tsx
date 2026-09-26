import {formatBytes, formatString} from '@zui/helpers';
import {List} from '@zui/list/react';

import type {RenderableProps} from 'preact';
import {mergeProps, nextGid, type ClassNameLike, type IconType} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {ListState} from '@zui/list';
import type {FileIconGetter, FileIconMap, FileInfo, FileInfoLike, FileListProps} from '../types';

export class FileList<T extends FileListProps = FileListProps, S extends ListState = ListState> extends List<T, S> {
    static NAME = 'file-list';

    static defaultProps = {
        ...List.defaultProps,
        fileSizeFormat: '{size}',
        fileIcon: false,
        thumbnail: false,
    };

    static TAG = 'div';

    /**
     * Item default common props, used for rendering for all item types.
     */
    static defaultItemProps: Partial<Item> = {
        component: 'div',
    };

    protected _fileIds = new WeakMap<FileInfoLike | File, string[]>();

    protected _objectURLs = new Map<File, string>();

    protected _thumbnailFiles = new Set<File>();

    protected _sourceFiles?: FileInfoLike[];

    componentWillUnmount(): void {
        this._objectURLs.forEach(url => URL.revokeObjectURL(url));
        this._objectURLs.clear();
        this._thumbnailFiles.clear();
        super.componentWillUnmount();
    }

    protected _afterRender(firstRender: boolean) {
        this._objectURLs.forEach((url, file) => {
            if (!this._thumbnailFiles.has(file)) {
                URL.revokeObjectURL(url);
                this._objectURLs.delete(file);
            }
        });
        super._afterRender(firstRender);
    }

    protected _getFileInfo(fileInfo: FileInfoLike, usedIds: Set<string>, reuseFileId: boolean): FileInfo {
        const file = fileInfo.file;
        let {id} = fileInfo;
        if (id === undefined || id === '') {
            const ids = this._fileIds.get(fileInfo) || [];
            id = ids.find(value => !usedIds.has(value));
            if (id === undefined && !ids.length && file && reuseFileId) {
                const fileId = this._fileIds.get(file)?.[0];
                if (fileId !== undefined && !usedIds.has(fileId)) {
                    id = fileId;
                }
            }
            if (id === undefined) {
                do {
                    id = `file-${nextGid()}`;
                } while (usedIds.has(id));
            }
            if (!ids.includes(id)) {
                ids.push(id);
                this._fileIds.set(fileInfo, ids);
            }
            if (file && !this._fileIds.has(file)) {
                this._fileIds.set(file, [id]);
            }
            usedIds.add(id);
        }
        if (!file) {
            return (fileInfo.id === id ? fileInfo : {...fileInfo, id}) as FileInfo;
        }
        const extensionIndex = file.name.lastIndexOf('.');
        return {
            ...fileInfo,
            id,
            title: fileInfo.title ?? file.name,
            extension: fileInfo.extension ?? (extensionIndex > 0 ? file.name.slice(extensionIndex + 1).toLowerCase() : ''),
            size: fileInfo.size ?? file.size,
            pathname: fileInfo.pathname ?? file.webkitRelativePath ?? '',
            addedBy: fileInfo.addedBy ?? '',
            addedDate: fileInfo.addedDate ?? '',
        };
    }

    protected _getClassName(props: RenderableProps<T>): ClassNameLike {
        const className = super._getClassName(props);
        const {mode, thumbnail} = props;
        return [
            className,
            thumbnail ? 'has-thumbnails' : undefined,
            mode && mode !== 'list' ? `file-list-${mode}` : undefined,
            mode === 'cards-inline' ? 'file-list-cards' : undefined,
        ];
    }

    protected _getFileIcon(file: FileInfo, fileIconSetting?: FileListProps['fileIcon']): IconType | null {
        if (!fileIconSetting) {
            return null;
        }
        const fileIconSettingType = typeof fileIconSetting;
        if (fileIconSettingType === 'string') {
            return fileIconSetting as string;
        }
        fileIconSetting = fileIconSetting || this.props.fileIcon;
        if (fileIconSettingType === 'function') {
            return (fileIconSetting as FileIconGetter).call(this, file);
        }
        return (fileIconSetting as FileIconMap)[file.extension] || 'file';
    }

    protected _getItems(props: RenderableProps<T>): Item[] {
        const files = super._getItems(props) as FileInfoLike[];
        const {fileIcon, fileSizeFormat, itemProps, heading, fileUrl, fileActions, mode, thumbnail} = props;
        this._thumbnailFiles.clear();
        // Keep the source identity so List can retain its show-more count across renders.
        const items = files === this._sourceFiles ? this._items : [];
        this._sourceFiles = files;
        items.length = 0;
        const usedIds = new Set(files.filter(file => file.id !== undefined && file.id !== '').map(file => String(file.id)));
        const fileCounts = new Map<File, number>();
        files.forEach(({file}) => {
            if (file) {
                fileCounts.set(file, (fileCounts.get(file) || 0) + 1);
            }
        });
        files.forEach((fileInfo) => {
            const file = this._getFileInfo(fileInfo, usedIds, !fileInfo.file || fileCounts.get(fileInfo.file) === 1);
            let subtitle = null;
            if (typeof file.size === 'number') {
                subtitle = formatBytes(file.size);
                if (fileSizeFormat) {
                    subtitle = formatString(fileSizeFormat, {size: subtitle});
                }
            }
            items.push(mergeProps({
                ...file,
                key: `${file.id}`,
                className: {
                    'file-list-card': mode === 'cards' || mode === 'cards-inline',
                    'file-list-grid': mode === 'grid',
                    'has-thumbnail': thumbnail,
                },
                icon: thumbnail ? undefined : (this.constructor as typeof FileList).getFileIcon(file, fileIcon),
                iconClass: 'text-gray',
                avatar: thumbnail ? (item: Item) => {
                    if (item.icon !== undefined) {
                        return;
                    }
                    const src = this._getThumbnail(file, props);
                    const icon = (this.constructor as typeof FileList).getFileIcon(file, fileIcon) || undefined;
                    return src || icon ? {
                        src,
                        icon,
                        className: 'text-gray',
                        code: file.extension,
                        size: 'sm',
                        ...(typeof thumbnail === 'object' ? thumbnail : {}),
                    } : undefined;
                } : undefined,
                title: file.title,
                subtitle,
                multiline: false,
                url: typeof fileUrl === 'function' ? fileUrl.call(this, file) : (fileUrl ? formatString(fileUrl, file) : undefined),
                actions: fileActions ? fileActions.call(this, file) : undefined,
            }, itemProps));
        });
        if (heading) {
            items.unshift({
                key: 'heading',
                titleClass: 'font-bold',
                type: 'heading',
                ...heading,
            });
        }
        return items;
    }

    protected _getThumbnail(file: FileInfo, props: RenderableProps<T>): string | undefined {
        const {thumbnail, getThumbnail} = props;
        const originFile = file.file;
        let url = thumbnail ? getThumbnail?.call(this, file) || file.thumbnail : undefined;
        if (thumbnail && !url && originFile && (originFile.type.startsWith('image/') || (this.constructor as typeof FileList).fileIconOfTypes['file-image'].includes(file.extension.toLowerCase()))) {
            url = this._objectURLs.get(originFile);
            if (!url) {
                url = URL.createObjectURL(originFile);
                this._objectURLs.set(originFile, url);
            }
            this._thumbnailFiles.add(originFile);
        }
        return url;
    }

    protected _getRenderedItem(_props: RenderableProps<T>, renderedItem: Item): Item {
        return renderedItem;
    }

    static getFileIcon(file: FileInfo, fileIconSetting: FileListProps['fileIcon']): IconType | null {
        if (!fileIconSetting) {
            return null;
        }
        const fileIconSettingType = typeof fileIconSetting;
        if (fileIconSettingType === 'string') {
            return fileIconSetting as string;
        }
        if (fileIconSettingType === 'function') {
            return (fileIconSetting as FileIconGetter).call(this, file);
        }
        return (fileIconSetting as FileIconMap)[file.extension] || 'file';
    }

    static fileIconOfTypes: Record<string, string[]> = {
        'file-image': ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp', 'tiff', 'ico', 'svg'],
        'file-audio': ['mp3', 'wav', 'flac', 'ogg', 'm4a', 'wma', 'aac', 'aiff', 'alac'],
        'file-video': ['mp4', 'avi', 'mkv', 'mov', 'flv', 'wmv', 'webm'],
        'file-archive': ['zip', 'rar', '7z', 'tar', 'gz', 'bz2', 'xz'],
        'file-code': ['js', 'ts', 'jsx', 'tsx', 'html', 'css', 'scss', 'less', 'json', 'xml', 'yml', 'yaml', 'toml', 'ini', 'markdown', 'md'],
        'file-pdf': ['pdf'],
        'file-word': ['doc', 'docx'],
        'file-excel': ['xls', 'xlsx'],
        'file-powerpoint': ['ppt', 'pptx'],
        'file-text': ['txt', 'csv', 'log'],
    };

    static getFileIconMap(fileIconOfTypes?: Record<string, string[]>) {
        const iconOfTypes = fileIconOfTypes || this.fileIconOfTypes;
        return Object.entries(iconOfTypes).reduce((map, [icon, extensions]) => {
            extensions.forEach((ext) => {
                map[ext] = icon;
            });
            return map;
        }, {} as FileIconMap);
    }
}
