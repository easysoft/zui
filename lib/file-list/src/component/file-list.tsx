import {formatBytes, formatString} from '@zui/helpers';
import {List} from '@zui/list/react';

import type {RenderableProps} from 'preact';
import type {IconType} from '@zui/core';
import type {Item} from '@zui/common-list';
import type {ListState} from '@zui/list';
import type {FileIconGetter, FileIconMap, FileInfo, FileListProps} from '../types';

export class FileList<T extends FileListProps = FileListProps, S extends ListState = ListState> extends List<T, S> {
    static NAME = 'file-list';

    static defaultProps = {
        ...List.defaultProps,
        fileSizeFormat: '({size})',
        fileIcon: false,
    };

    static TAG = 'div';

    /**
     * Item default common props, used for rendering for all item types.
     */
    static defaultItemProps: Partial<Item> = {
        component: 'div',
    };

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
        const files = super._getItems(props) as FileInfo[];
        const {fileIcon, fileSizeFormat, itemProps, heading, fileUrl, fileActions} = props;
        const items: Item[] = files.map((file) => {
            let subtitle = null;
            if (typeof file.size === 'number') {
                subtitle = formatBytes(file.size);
                if (fileSizeFormat) {
                    subtitle = formatString(fileSizeFormat, {size: subtitle});
                }
            }
            return {
                key: `${file.id}`,
                icon: (this.constructor as typeof FileList).getFileIcon(file, fileIcon),
                iconClass: 'text-gray',
                title: file.title,
                subtitle,
                multiline: false,
                url: typeof fileUrl === 'function' ? fileUrl.call(this, file) : (fileUrl ? formatString(fileUrl, file) : undefined),
                actions: fileActions ? fileActions.call(this, file) : undefined,
                ...itemProps,
            };
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

    static getDefaultIconMap() {
        const typedFileIcons: [string, string[]][] = [
            ['file-image', ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp', 'tiff', 'ico', 'svg']],
            ['file-audio', ['mp3', 'wav', 'flac', 'ogg', 'm4a', 'wma', 'aac', 'aiff', 'alac']],
            ['file-video', ['mp4', 'avi', 'mkv', 'mov', 'flv', 'wmv', 'webm']],
            ['file-archive', ['zip', 'rar', '7z', 'tar', 'gz', 'bz2', 'xz']],
            ['file-code', ['js', 'ts', 'jsx', 'tsx', 'html', 'css', 'scss', 'less', 'json', 'xml', 'yml', 'yaml', 'toml', 'ini', 'markdown', 'md']],
            ['file-pdf', ['pdf']],
            ['file-word', ['doc', 'docx']],
            ['file-excel', ['xls', 'xlsx']],
            ['file-powerpoint', ['ppt', 'pptx']],
            ['file-text', ['txt', 'csv', 'log']],
        ];
        return typedFileIcons.reduce((map, [icon, extensions]) => {
            extensions.forEach((ext) => {
                map[ext] = icon;
            });
            return map;
        }, {} as FileIconMap);
    }
}
