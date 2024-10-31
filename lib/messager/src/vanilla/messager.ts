import {$, nextGid, Component} from '@zui/core';
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

    static MULTI_INSTANCE = true;

    protected _holder?: HTMLElement;

    protected _item?: MessagerItem;

    get isShown() {
        return !!this._item?.isShown;
    }

    show(options?: MessagerOptions) {
        this.setOptions(options);
        this._getItem().show();
    }

    hide() {
        this._item?.hide();
    }

    protected _getItem() {
        const options = {...this.options};
        if (this._item) {
            this._item.setOptions(options);
        } else {
            const holder = this._getHolder();
            const item = new MessagerItem(holder, options);
            item.on('hidden', () => {
                item.destroy();
                holder?.remove();
                this._holder = undefined;
                this._item = undefined;
            });
            this._item = item;
        }
        return this._item;
    }

    protected _getHolder() {
        if (this._holder) {
            return this._holder;
        }
        const {placement = 'top'} = this.options;
        let $container = this.$element.find(`.messagers-${placement}`);
        if (!$container.length) {
            $container = $(`<div class="messagers messagers-${placement}"></div>`).appendTo(this.$element);
        }
        let $holder = $container.find(`#messager-${this.gid}`);
        if (!$holder.length) {
            $holder = $(`<div class="messager-holder" id="messager-${this.gid}"></div>`).appendTo($container);
            this._holder = $holder[0];
        }
        return $holder[0];
    }

    static TypeOptions: Record<string, Partial<MessagerOptions>> = {};

    static show(options: (MessagerOptions & {container?: string | HTMLElement}) | string, type?: string) {
        if (typeof options === 'string') {
            options = {content: options};
        }
        const {container, ...others} = options;
        const finalOptions = {type, key: `messager_${nextGid()}`, ...others};
        if (finalOptions.type) {
            $.extend(finalOptions, this.TypeOptions[finalOptions.type]);
        }
        const messager = Messager.ensure(container || 'body', finalOptions as Partial<MessagerOptions>);
        messager.hide();
        messager.show();
        return messager;
    }
}
