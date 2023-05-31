import {ComponentFromReact} from '@zui/core';
import {Avatar as AvatarReact} from '../component';
import {AvatarOptions} from '../types';

export class Avatar extends ComponentFromReact<AvatarOptions, AvatarReact> {
    static NAME = 'Avatar';

    static Component = AvatarReact;
}
