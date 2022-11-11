import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {Avatar as AvatarReact} from '../component';
import {AvatarOptions} from '../types';

export class Avatar extends ComponentFromReact<AvatarOptions, AvatarReact> {
    static Component = AvatarReact;
}
