import {ComponentFromReact} from '@zui/com-helpers/src/helpers/component-react';
import {MessagerItem as MessagerItemReact} from '../component';
import {MessagerOptions, MessagerEvents} from '../types';

export class MessagerItem extends ComponentFromReact<MessagerOptions, MessagerItemReact, MessagerEvents> {
    static NAME = 'MessagerItem';

    static EVENTS = true;

    static Component = MessagerItemReact;

    _show = false;

    _showTimer = 0;

    get isShown() {
        return this._show;
    }

    afterInit(): void {
        this.on('click', (event) => {
            const dismissToggle = (event.target as HTMLElement).closest<HTMLElement>('.alert-close,[data-dismiss="messager"]');
            if (dismissToggle) {
                event.preventDefault();
                event.stopPropagation();
                this.hide();
            }
        });
    }

    setOptions(options?: MessagerOptions) {
        options = super.setOptions(options);
        return {
            ...options,
            show: this._show,
            afterRender: this._handleAfterRender,
        };
    }

    show() {
        if (this._show) {
            return;
        }
        this._show = true;
        this.emit('show');
        this.render();

        this.#resetTimer(() => {
            this.emit('shown');
            const {time} = this.options;
            if (time) {
                this.#resetTimer(() => this.hide(), time);
            }
        });
    }

    hide() {
        if (!this._show) {
            return;
        }

        this._show = false;
        this.emit('hide');
        this.render();

        this.#resetTimer(() => {
            this.emit('hidden');
        });
    }

    #resetTimer(callback: () => void, time = 200) {
        if (this._showTimer) {
            clearTimeout(this._showTimer);
        }
        this._showTimer = window.setTimeout(() => {
            callback();
            this._showTimer = 0;
        }, time);
    }

    _handleAfterRender = ({firstRender}: {firstRender: boolean}) => {
        if (firstRender) {
            this.show();
        }
        const {margin} = this.options;
        if (margin) {
            this.element.style.margin = `${margin}px`;
        }
    };
}
