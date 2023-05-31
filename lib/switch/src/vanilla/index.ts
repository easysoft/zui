import {ComponentFromReact} from '@zui/core';
import {Switch as SwitchReact} from '../component/switch';
import {SwitchProps} from '../types';

export class Switch extends ComponentFromReact<SwitchProps, SwitchReact> {
    static NAME = 'Switch';

    static Component = SwitchReact;
}
