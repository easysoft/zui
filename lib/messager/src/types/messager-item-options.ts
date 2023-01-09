import {MessagerOptions} from './messager-options';

export interface MessagerItemOptions extends MessagerOptions {
    show?: boolean;
    afterRender?: (info: {firstRender: boolean}) => void;
    beforeDestroy?: () => void;
}
