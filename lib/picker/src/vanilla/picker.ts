import {ComponentFromReact} from '@zui/core';
import {Picker as PickerReact} from '../component';
import {PickerOptions} from '../types';

export class Picker extends ComponentFromReact<PickerOptions, PickerReact> {
    static NAME = 'Picker';

    static Component = PickerReact;
}
