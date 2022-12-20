import {render, h} from 'preact';
import {MessagerOptions} from '../types/messager-options';
import {MessagersHolderProps} from '../types/messagers-holder-props';
import {MessagerProps} from '../types';
import MessagerItem from '../component/messager-item';
import MessagersHolder  from '../component/messagers-holder';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';

export class Messager extends ComponentBase<MessagerOptions> {

    static NAME = 'messager';

    static DEFAULT = {
        placement: 'top',
        type:'default',
        close: true,
    } as Partial<MessagerOptions>;

    show(message?: string, options?: MessagerOptions) {
        console.log(message, options, 'showFunc');
        const placement = options?.placement ? options.placement : 'top';
        const close = (options?.close === false) ? false : true;

        let messagersholder = document.querySelector('.messagers-holder[data-placement=' + placement + ']');
        if (!messagersholder) {
            const parentNode = document.createElement('div');
            document.body.appendChild(parentNode);
            const props = {
                ...options as MessagersHolderProps,
                placement,
            };
            render(h(MessagersHolder, props), parentNode);
        }

        messagersholder = document.querySelector('.messagers-holder[data-placement=' + placement + ']') as HTMLElement;
        const  messagerNode = document.createElement('div');
        messagersholder.appendChild(messagerNode);
        const props = {
            ...options as MessagerProps,
            message,
            placement,
            close,
        };
        render(h(MessagerItem, props), messagersholder, messagerNode);
    }
}
