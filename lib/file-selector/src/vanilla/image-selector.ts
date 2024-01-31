import {ComponentFromReact} from '@zui/core';
import {ImageSelector as ImageSelectorReact} from '../components';
import {ImageSelectorProps} from '../types';

export class ImageSelector extends ComponentFromReact<ImageSelectorProps, ImageSelectorReact> {
    static NAME = 'ImageSelector';

    static Component = ImageSelectorReact;

    static replace = true;
}
