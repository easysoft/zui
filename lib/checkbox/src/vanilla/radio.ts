import {ComponentFromReact} from '@zui/core';
import {Radio as RadioReact} from '../component';
import {RadioProps} from '../types';

export class Radio extends ComponentFromReact<RadioProps, RadioReact> {
    static NAME = 'Radio';

    static Component = RadioReact;
}

Radio.register();
