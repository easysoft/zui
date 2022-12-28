import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {Picker as PickerReact} from '../component';
import {PickerOptions} from '../types';

export class Picker extends ComponentFromReact<PickerOptions, PickerReact> {
    static NAME = 'picker';

    static Component = PickerReact;
}
