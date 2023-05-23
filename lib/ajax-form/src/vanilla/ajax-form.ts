import {$, Cash} from '@zui/cash/src/cash';
import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';
import type {AjaxFormOptions, AjaxFormResult, AjaxFormEvents} from '../types';

export class AjaxForm extends ComponentBase<AjaxFormOptions, AjaxFormEvents, HTMLFormElement> {
    static readonly NAME = 'ajaxform';

    init() {
        $(this.element).on('submit', this.onSubmit.bind(this)).on('input mousedown change', this.onInput.bind(this));
    }

    enable(toggle = true) {
        $(this.element).toggleClass('loading', !toggle);
    }

    disable() {
        this.enable(false);
    }

    onInput(event: MouseEvent) {
        const $control = $(event.target as HTMLElement).closest('.has-error');
        if (!$control.length) {
            return;
        }
        $control.removeClass('has-error');
        $control.closest('.form-group').find(`#${$control.attr('id')}Tip`).remove();
    }

    onSubmit(event: SubmitEvent) {
        event.preventDefault();

        const {element} = this;
        const options = $.extend({}, this.options);
        this.emit('before', {event, element, options}, false);
        if (options.beforeSubmit?.(event, element, options) === false) {
            return;
        }

        this.disable();
        this.#send(this.#processData()).finally(() => {
            this.enable();
        });
    }

    submit() {
        this.element.submit();
    }

    reset() {
        this.element.reset();
    }

    #processData(): FormData {
        const {element, options} = this;
        let formData = new FormData(element);
        let {submitEmptySelectValue = ''} = options;
        if (submitEmptySelectValue !== false) {
            if (typeof submitEmptySelectValue !== 'boolean') {
                submitEmptySelectValue = '';
            }
            $(element).find('select').each((_, select) => {
                const $select = $(select);
                const name = $select.attr('name')!;
                if (!formData.has(name)) {
                    formData.append(name, (typeof submitEmptySelectValue === 'object' ? submitEmptySelectValue[name] : submitEmptySelectValue) as string);
                }
            });
        }

        const {beforeSend} = options;
        if (beforeSend) {
            const result = beforeSend(formData);
            if (result instanceof FormData) {
                formData = result;
            }
        }

        this.emit('send', {formData}, false);
        return formData;
    }

    async #send(formData: FormData) {
        const {element, options} = this;
        let error: Error | undefined;
        let responseText: string | undefined;
        let result: AjaxFormResult | undefined;
        try {
            const response = await fetch(options.url || element.action, {
                method: element.method || 'POST',
                body: formData,
                credentials: 'same-origin',
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
            });

            responseText = await response.text();
            if (response.ok) {
                result = JSON.parse(responseText) as AjaxFormResult;
                if (!result || typeof result !== 'object') {
                    error = new Error('Invalid json format');
                }
            } else {
                error = new Error(response.statusText);
            }
        } catch (err) {
            error = err;
        }
        if (error) {
            this.emit('error', {error, responseText}, false);
            options.onError?.(error, responseText);
        } else {
            this.#handleResult(result!);
        }
        this.emit('complete', {result, error}, false);
        options.onComplete?.(result, error);
    }

    #showValidateMessage(message: Record<string, string | string[]>) {
        let $firstControl: Cash | undefined;
        Object.entries(message).forEach(([name, msg]) => {
            if (Array.isArray(msg)) {
                msg = msg.join('');
            }
            const controlElement = document.getElementById(name);
            const $control = controlElement ? $(controlElement) : $(this.element).find(`[name="${name}"]`);
            if (!$control.length) {
                return;
            }
            $control.addClass('has-error');
            const $group = $control.closest('.form-group,.form-batch-control');
            if ($group.length) {
                const tipElement = document.getElementById(`${name}Tip`);
                let $tip = tipElement ? $(tipElement) : null;
                if (!$tip) {
                    $tip = $(`<div class="form-tip ajax-form-tip text-danger" id="${name}Tip"></div>`).appendTo($group);
                }
                $tip.empty().text(msg);
            }
            if (!$firstControl) {
                $firstControl = $control;
            }
        });
        if ($firstControl) {
            $firstControl[0]?.focus();
        }
    }

    #handleResult(result: AjaxFormResult) {
        const {options} = this;
        const {message} = result;
        if (result.result === 'success') {
            this.emit('success', {result}, false);
            if (options.onSuccess?.(result) === false) {
                return;
            }

            if (typeof message === 'string' && message.length) {
                $(document).trigger('zui.messager.show', {content: message, type: 'success'});
            }
        } else {
            this.emit('fail', {result}, false);
            if (options.onFail?.(result) === false) {
                return;
            }

            // Handle message
            if (message) {
                if (typeof message === 'string' && message.length) {
                    $(document).trigger('zui.messager.show', {content: message, type: 'danger'});
                } else if (typeof message === 'object') {
                    this.#showValidateMessage(message);
                }
            }
        }

        const closeModal = result.closeModal || options.closeModal;
        if (closeModal) {
            $(this.element).trigger('zui.modal.hide', {target: typeof closeModal === 'string' ? closeModal : undefined});
        }

        // Handle callback
        const callback = result.callback || options.callback;
        if (typeof callback === 'string') {
            const spIndex = callback.indexOf('(');
            const cNames = (spIndex > 0 ? callback.substring(0, spIndex) : callback).split('.');
            let win: Window | null = window;
            let cName = cNames[0];
            if (cNames.length > 1) {
                cName = cNames[1];
                if (cNames[0] === 'top') win = window.top;
                else if (cNames[0] === 'parent') win = window.parent;
                else win = window[cNames[0]];
            }
            const func = win?.[cName];
            if (typeof func === 'function') {
                let params: unknown[] = [];
                if (spIndex > 0 && callback[callback.length - 1] == ')') {
                    params = JSON.parse('[' + callback.substring(spIndex + 1, callback.length - 1) + ']');
                } else {
                    params.push(result);
                }
                return func.apply(this, params);
            }
        } else if (callback && typeof callback === 'object') {
            const target = callback.target ? window[callback.target] : window;
            const func = target[callback.name];
            func.apply(this, Array.isArray(callback.params) ? callback.params : [callback.params]);
        }

        // Handle locate
        const load = result.load || options.load || result.locate;
        if (load) {
            $(this.element).trigger('zui.locate', load);
        }
    }
}
