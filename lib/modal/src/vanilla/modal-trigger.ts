import {Component, ComponentBaseOptions} from '@zui/core';
import type {ModalOptions, ModalTriggerOptions} from '../types';
import {Modal} from './modal';
import {ModalBase} from './modal-base';

export class ModalTrigger extends Component<ModalTriggerOptions> {
    static NAME = 'ModalTrigger';

    protected _modal?: ModalBase;

    get modal() {
        return this._modal;
    }

    get container() {
        const {container} = this.options;
        if (typeof container === 'string') {
            return document.querySelector(container) as HTMLElement;
        }
        if (container instanceof HTMLElement) {
            return container;
        }
        return document.body;
    }

    show() {
        return this._initModal()?.show();
    }

    hide() {
        return this._modal?.hide();
    }

    protected _getBuilderOptions(): ModalOptions {
        const {
            container,
            ...others
        } = this.options;
        const builderOptions = others as ModalOptions;
        const href = this.$element.attr('href') || '';
        if (!builderOptions.type) {
            if ((builderOptions.target || href[0] === '#')) {
                builderOptions.type = 'static';
            } else {
                builderOptions.type = builderOptions.type || ((builderOptions.url || href) ? 'ajax' : 'custom');
            }
        }
        if (!builderOptions.url && (builderOptions.type === 'iframe' || builderOptions.type === 'ajax') && href[0] !== '#') {
            builderOptions.url = href;
        }

        if (builderOptions.key === undefined) {
            builderOptions.key = `${this._key}`;
        }

        return builderOptions;
    }

    protected _initModal() {
        const options = this._getBuilderOptions();
        let modal = this._modal;
        if (modal) {
            modal.setOptions(options);
            return modal;
        }
        if (options.type === 'static') {
            const modalElement = this._getStaticModalElement();
            if (!modalElement) {
                return;
            }
            modal = ModalBase.ensure(modalElement, options);
        } else {
            modal = Modal.ensure(this.container, options);
        }
        this._modal = modal;
        modal.on('destroyed', () => {
            this._modal = undefined;
        });
        return modal;
    }

    protected _getStaticModalElement() {
        let selector = this.options.target as (string | undefined);
        if (!selector) {
            const {$element} = this;
            if ($element.is('a')) {
                const href = $element.attr('href');
                if (href?.startsWith('#')) {
                    selector = href;
                }
            }
        }
        return this.container.querySelector<HTMLElement>(selector || '.modal') as HTMLElement;
    }
}

ModalTrigger.toggle = {
    name: 'modal',
    skip: '[disabled],.disabled,.open-in-parent',
    convertHref: true,
    onGet(element: HTMLElement) {
        return ModalTrigger.get(element);
    },
    onCreate(element: HTMLElement, _event: Event, options: ComponentBaseOptions) {
        return new ModalTrigger(element, options);
    },
};

ModalTrigger.register();
