import {ComponentFromReact} from '@zui/core';
import {Checkbox as CheckboxReact} from '../component';
import {CheckboxProps} from '../types';

export class Checkbox extends ComponentFromReact<CheckboxProps, CheckboxReact> {
    static NAME = 'Checkbox';

    static Component = CheckboxReact;
}

Checkbox.register();
