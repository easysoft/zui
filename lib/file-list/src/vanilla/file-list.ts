import {ComponentFromReact} from '@zui/core';
import {FileList as FileListReact} from '../component';
import type {FileListProps} from '../types';

export class FileList extends ComponentFromReact<FileListProps, FileListReact> {
    static NAME = 'FileList';

    static Component = FileListReact;
}

FileList.register();
