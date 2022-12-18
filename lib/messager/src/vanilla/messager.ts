import {render, h} from 'preact';
import {MessagerOptions} from '../types/messager-options';
import {MessagersHolderProps} from '../types/messagers-holder-props';
import {MessagerProps} from '../types';
import MessagerItem from '../component/messager-item';
import MessagersHolder  from '../component/messagers-holder';
// import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';

// export class Messager<T extends MessagerOptions = MessagerOptions> extends ComponentBase<T> {
/* ComponentBase's constructor : (element, options)  Messager's constructor: (message, options) not fit*/

export class Messager {

    static NAME = 'messager';

    message: string;

    options: MessagerOptions;

    static DEFAULT = {
        placement: 'top',
        type:'default',
    } as Partial<MessagerOptions>;

    
    constructor(message: string, options: MessagerOptions) {
        this.message = message;
        this.options = options;
    }



    show() {
        const {message, options} = this;
        const placement = options?.placement ? options.placement : 'top';

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
        };
        render(h(MessagerItem, props), messagersholder, messagerNode);
    }
}
