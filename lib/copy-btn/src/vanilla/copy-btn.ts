import {Component, type CopyContents, $, copy, i18n, Cash} from '@zui/core';
import {Tooltip} from '@zui/tooltip';
import type {CopyBtnOptions} from '../types';

export class CopyBtn extends Component<CopyBtnOptions> {
    static readonly NAME = 'CopyBtn';

    static DEFAULT: Partial<CopyBtnOptions> = {
        mode: 'tooltip',
        duration: 3000,
        copiedClass: 'is-copied',
        overlayClass: 'success-pale',
        copyingClass: 'is-copying',
    };

    protected _timer = 0;

    protected _tooltip?: Tooltip;

    protected _copying = false;

    async getContent() {
        const {content, target, onCopy} = this.options;
        let finalContent: CopyContents | false | undefined = content;
        if (target && finalContent === undefined) {
            const $target = $(target);
            finalContent = {
                text: $target.text(),
                html: $target.html(),
            };
        }
        if (onCopy) {
            const result = await onCopy.call(this, content);
            if (result !== undefined) {
                if (result instanceof $) {
                    finalContent = {
                        text: (result as unknown as Cash).text(),
                        html: (result as unknown as Cash).html(),
                    };
                } else {
                    finalContent = result;
                }
            }
        }
        return finalContent;
    }

    async copy() {
        if (this._copying) {
            return;
        }

        this._copying = true;
        this._hideTip();

        const {onCopied, copyingClass} = this.options;
        if (copyingClass) {
            this.$element.addClass(copyingClass);
        }

        // 获取复制的内容
        const content = await this.getContent();
        console.log('> copy', {content, that: this});
        if (content === false || content === undefined) {
            this._copying = false;
            return;
        }

        // 复制内容
        await copy(content);

        this._showTip();

        if (onCopied) {
            onCopied.call(this);
        }

        this._copying = false;
    }

    protected _showTip() {
        const {$element} = this;
        const {mode, tooltipOptions, copiedText, duration, copiedIcon, overlayClass, copiedClass} = this.options;
        let text = copiedText;
        if (text === undefined) {
            text = ({zh_cn: '已复制', zh_tw: '已複製', en: 'Copied'})[i18n.getCode()] ?? 'Copied';
        }

        if (copiedClass) {
            $element.addClass(copiedClass);
        }

        if (mode === 'tooltip') {
            let tooltip = this._tooltip;
            if (!tooltip || tooltip.destroyed) {
                tooltip = new Tooltip(this.$element, {
                    trigger: 'manual',
                    type: 'success',
                    title: text,
                    placement: 'top',
                    ...tooltipOptions,
                });
                this._tooltip = tooltip;
            }
            tooltip.show();
        } else {
            if (overlayClass) {
                $element.addClass(overlayClass);
            }
            $element.addClass('hide-children');
            if (copiedIcon) {
                $element.append(`<i class="copied-overlay icon ${copiedIcon.startsWith('icon-') ? copiedIcon : `icon-${copiedIcon}`}" style="display:inline!important"></i>`);
            }
            $element.append(`<span class="copied-overlay text" style="display:inline!important">${text}</span>`);
        }

        this._timer = window.setTimeout(() => {
            this._hideTip();
        }, duration);
    }

    protected _hideTip() {
        if (this._timer) {
            clearTimeout(this._timer);
            this._timer = 0;
        }

        const {$element, options} = this;
        const {copyingClass, copiedClass, overlayClass} = options;

        $element.removeClass('hide-children');
        $element.children('.copied-overlay').remove();
        [copyingClass, copiedClass, overlayClass].forEach((className) => {
            if (className) {
                $element.removeClass(className);
            }
        });

        this._tooltip?.hide();
    }

    destroy(): void {
        this._hideTip();
        this._tooltip?.destroy();
    }
}

CopyBtn.toggle = {
    trigger: 'click',
    convertHref: {selector: 'target'},
    onToggle(component) {
        (component as CopyBtn).copy();
    },
};

CopyBtn.register();
