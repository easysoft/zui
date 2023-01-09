import {nanoid} from 'nanoid';
import {MessagerOptions} from '../types';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import {MessagerItem} from './messager-item';

export class Messager extends ComponentBase<MessagerOptions> {
    static NAME = 'messager';

    static DEFAULT = {
        placement: 'top',
        animation: true,
        close: true,
        margin: 6,
        time: 5000,
    } as Partial<MessagerOptions>;

    #holder?: HTMLElement;

    #id = nanoid(6);

    #item?: MessagerItem;

    get id() {
        return this.#id;
    }

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
                holder.remove();
                this.#holder = undefined;
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
        let container = this.element.querySelector(`.messagers-${placement}`);
        if (!container) {
            container = document.createElement('div');
            container.className = `messagers messagers-${placement}`;
            this.element.appendChild(container);
        }
        let holder = container.querySelector<HTMLElement>(`#messager-${this.#id}`);
        if (!holder) {
            holder = document.createElement('div');
            holder.className = 'messager-holder';
            holder.id = `messager-${this.#id}`;
            container.appendChild(holder);
            this.#holder = holder;
        }
        return holder;
    }

    static show(options: (MessagerOptions & {container?: string | HTMLElement}) | string) {
        if (typeof options === 'string') {
            options = {content: options};
        }
        const {container, ...others} = options;
        const messager = new Messager(container || 'body', others);
        messager.show();
        return messager;
    }
}
