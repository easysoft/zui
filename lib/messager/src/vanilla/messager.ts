import {render, h} from 'preact';
import {MessagerOptions} from '../types/messager-options';
import {MessagersHolderProps} from '../types/messagers-holder-props';
import {MessagerProps} from '../types';
import MessagerItem from '../component/messager-item';
import MessagersHolder  from '../component/messagers-holder';


export class Messager {
    static NAME = 'messager';

    message: string;

    options: MessagerOptions;

    constructor(message: string, options?: Partial<MessagerOptions>) {
        this.message = message;

        this.options = options;

        this.render();
    }

    render() {
        const {message, options} = this;

        const placement = options?.placement ? options.placement : 'top';

        let messagersholder = document.querySelector('.messagers-holder[data-placement=' + placement + ']');

        if (!messagersholder) {
            const parentNode = document.createElement('div');
            // parentNode.classList.add('MessagersHolder');
            document.body.appendChild(parentNode);
            const props = {
                ...options as MessagersHolderProps,
                'placement': placement,
            };
            render(h(MessagersHolder, props), document.body, parentNode);
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
