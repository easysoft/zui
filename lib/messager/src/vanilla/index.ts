import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import { MessagerOptions } from '../types';
import {Messager as MessagerReact} from '../component/messager';

export class messager<MessagerOptions> extends ComponentFromReact<MessagerOptions<T>, MessagerReact<T>> {
    static NAME = 'nav';

    static Component = MessagerReact;
}
