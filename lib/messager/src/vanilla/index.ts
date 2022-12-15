import {render, h} from 'preact';
import {MessagerOptions} from '../types/messager-options';
import {MessagersHolderProps} from '../types/messagers-holder-props';
import {MessagerProps} from '../types';
import {MessagerItem} from './messager-item';
import {MessagersHolder} from './messagers-holder';


export default class Messager {
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

        let messagersholder = document.querySelector('.messagersholder[data-placement=' + placement + ']');

        console.log(message, options, placement, 'beforeRender:');

        if (!messagersholder) {
            const body = document.querySelector('body') as HTMLElement;
            const props = {
                ...options as MessagersHolderProps,
                'placement': placement,
            };
            console.log(body, props, 'MessagersHolder');
            new MessagersHolder(body, props);
        }

        messagersholder = document.querySelector('.messagersholder[data-placement=' + placement + ']') as HTMLElement;

        const props = {
            ...options as MessagerProps,
            message,
            placement,
        };
        new MessagerItem(messagersholder, props);
        render((
            <MessagerItem
                {
                    ...props
                }
            > </MessagerItem>
        ), messagersholder);
    }
}
