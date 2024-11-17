import {$, ComponentFromReact} from '@zui/core';
import {MessagerItem as MessagerItemReact} from '../component';
import {MessagerItemOptions, MessagerEvents, MessagerOptions} from '../types';

export class MessagerItem extends ComponentFromReact<MessagerItemOptions, MessagerItemReact, MessagerEvents> {
    static NAME = 'MessagerItem';

    static Component = MessagerItemReact;

    _show = false;

    _showTimer = 0;

    get isShown() {
        return this._show;
    }

    afterInit(): void {
        this.on('click', (event) => {
            const dismissToggle = $(event.target as Element).closest('.alert-close,[data-dismiss="messager"]');
            if (!dismissToggle.length) {
                return;
            }
            event.preventDefault();
            event.stopPropagation();
            this.hide();
        });
    }

    setOptions(options?: MessagerOptions, reset?: boolean) {
        options = super.setOptions(options, reset);
        return {
            ...options,
            show: this._show,
            afterRender: this._afterRender,
        };
    }

    show() {
        this.render();
        this.emit('show');
        this._resetTimer(() => {
            this._show = true;
            this.render();

            this._resetTimer(() => {
                this.emit('shown');
                const {time} = this.options;
                if (time) {
                    this._resetTimer(() => this.hide(), time);
                }
            });
        }, 100);
    }

    hide() {
        if (!this._show) {
            return;
        }

        this._resetTimer(() => {
            this.emit('hide');
            this._show = false;
            this.render();

            this._resetTimer(() => {
                this.emit('hidden');
            });
        }, 50);
    }

    _resetTimer(callback: () => void, time = 200) {
        if (this._showTimer) {
            clearTimeout(this._showTimer);
        }
        this._showTimer = window.setTimeout(() => {
            callback();
            this._showTimer = 0;
        }, time);
    }

    _afterRender = ({firstRender}: {firstRender: boolean}) => {
        if (firstRender) {
            this.show();
        }
        const {margin} = this.options;
        if (margin) {
            this.$element.css('margin', `${margin}px`);
        }
    };
}
