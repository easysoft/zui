import {nanoid} from 'nanoid';
import {$, Component} from '@zui/core';
import {MessagerOptions} from '../types';
import {MessagerItem} from './messager-item';

export class Messager extends Component<MessagerOptions> {
    static NAME = 'messager';

    static DEFAULT = {
        placement: 'top',
        animation: true,
        close: true,
        margin: 6,
        time: 5000,
    } as Partial<MessagerOptions>;

    #holder?: HTMLElement;

    #item?: MessagerItem;

    get isShown() {
        return !!this.#item?.isShown;
    }

    show(options?: MessagerOptions) {
        this.setOptions(options);
        this.#getItem().show();
    }

    hide() {
        this.#item?.hide();
    }

    #getItem() {
        if (this.#item) {
            this.#item.setOptions(this.options);
        } else {
            const holder = this.#getHolder();
            const item = new MessagerItem(holder, this.options);
            item.on('hidden', () => {
                item.destroy();
                holder?.remove();
                this.#holder = undefined;
                this.#item = undefined;
            });
            this.#item = item;
        }
        return this.#item;
    }

    #getHolder() {
        if (this.#holder) {
            return this.#holder;
        }
        const {placement = 'top'} = this.options;
        let $container = this.$element.find(`.messagers-${placement}`);
        if (!$container.length) {
            $container = $(`<div class="messagers messagers-${placement}"></div>`).appendTo(this.$element);
        }
        let $holder = $container.find(`#messager-${this.gid}`);
        if (!$holder.length) {
            $holder = $(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo($container);
            this.#holder = $holder[0];
        }
        return $holder[0];
    }

    static show(options: (MessagerOptions & {container?: string | HTMLElement}) | string) {
        if (typeof options === 'string') {
            options = {content: options};
        }
        const {container, ...others} = options;
        const messager = Messager.ensure(container || 'body');
        messager.setOptions(others);
        messager.hide();
        messager.show();
        return messager;
    }
}

$(document).on('zui.messager.show', (_: Event, options: MessagerOptions & {container?: string | HTMLElement}) => {
    if (options) {
        Messager.show(options);
    }
});
