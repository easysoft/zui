import {ComponentFromReact} from '@zui/core';
import {Switch as SwitchReact} from '../component';
import {SwitchProps} from '../types';

export class Switch extends ComponentFromReact<SwitchProps, SwitchReact> {
    static NAME = 'Switch';

    static Component = SwitchReact;
}

Switch.register();
