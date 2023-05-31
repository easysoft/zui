import {AjaxFormOptions} from './ajax-form-options';
import {AjaxFormResult} from './ajax-form-result';

export type AjaxFormEvents = {
    before: [event: SubmitEvent, element: HTMLFormElement, options: AjaxFormOptions],
    send: [formData: FormData];
    error: [error: Error, responseText?: string];
    complete: [result?: AjaxFormResult, error?: Error],
    success: [result: AjaxFormResult],
    fail: [result: AjaxFormResult],
};
