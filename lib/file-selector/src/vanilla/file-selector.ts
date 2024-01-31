import {ComponentFromReact} from '@zui/core';
import {FileSelector as FileSelectorReact} from '../components';
import {FileSelectorProps} from '../types';

export class FileSelector extends ComponentFromReact<FileSelectorProps, FileSelectorReact> {
    static NAME = 'FileSelector';

    static Component = FileSelectorReact;

    static replace = true;
}
