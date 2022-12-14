import MessagerItem from '../component/messager-item';
import MessagersHolder from '../component/messagers-holder';
import {MessagerOptions} from '../types/messager-options';
import {MessagersHolderProps} from '../types/messagers-holder-props';
import {MessagerProps} from '../types';
import {render} from 'preact';
// import {ClassNameLike} from '@zui/browser-helpers/src/classes';
// import {render} from 'preact'; JSX
// import MenuItem, {MenuItems} from './components/menuItem';



// export class messager<MessagerOptions> extends ComponentFromReact<MessagerOptions<T>, MessagerReact<T>> {
//     static NAME = 'nav';
//     static Component = MessagerReact;
// }

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

        console.log(message, options, placement, 'beforeRender:');

        const messagersholder = document.querySelector('.messagersholder[data-placement=' + placement + ']');

        if (!messagersholder) {
            const body = document.querySelector('body');
            const props = {
                ...options as MessagersHolderProps,
                'placement': placement,
            };
            console.log(body, props, 'MessagersHolder');
            render((
                <MessagersHolder
                    {...props}
                > </MessagersHolder>
            ), body);
        }

        const props = {
            ...options as MessagerProps,
            message,
            placement,
        };
        // console.log(props, messagersholder, 'props');
        render((
            <MessagerItem
                {
                    ...props
                }
            > </MessagerItem>
        ), messagersholder);
    }
}
