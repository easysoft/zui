import {ComponentFromReact} from '@zui/core';
import {ColorPicker as ColorPickerReact} from '../components';
import {ColorPickerOptions} from '../types';

export class ColorPicker extends ComponentFromReact<ColorPickerOptions, ColorPickerReact> {
    static NAME = 'ColorPicker';

    static Component = ColorPickerReact;
}
