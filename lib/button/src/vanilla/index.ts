import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {Button as ButtonReact} from '../component/button';
import {ButtonProps} from '../types';

export class Button extends ComponentFromReact<ButtonProps, ButtonReact> {
    static NAME = 'button';

    static Component = ButtonReact;
}
