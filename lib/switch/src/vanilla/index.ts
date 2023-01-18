import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {Switch as SwitchReact} from '../component/switch';
import {SwitchProps} from '../types';

export class Switch extends ComponentFromReact<SwitchProps, SwitchReact> {
    static NAME = 'switch';

    static Component = SwitchReact;
}
