import {ComponentFromReact} from '@zui/core';
import {ColorInput as ColorInputReact} from '../components';
import {ColorInputOptions} from '../types';

export class ColorInput extends ComponentFromReact<ColorInputOptions, ColorInputReact> {
    static NAME = 'ColorInput';

    static Component = ColorInputReact;
}

ColorInput.register();
