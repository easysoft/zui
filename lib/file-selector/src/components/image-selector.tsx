import {FileSelector} from './file-selector';

import type {ImageSelectorProps} from '../types';

export class ImageSelector extends FileSelector<ImageSelectorProps> {
    static defaultProps: Partial<ImageSelectorProps> = {
        ...FileSelector.defaultProps,
        mode: 'grid',
        accept: FileSelector.imageAccepts,
    };
}
