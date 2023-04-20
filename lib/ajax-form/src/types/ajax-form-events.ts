import {AjaxFormOptions} from './ajax-form-options';
import {AjaxFormResult} from './ajax-form-result';

export type AjaxFormEvents = {
    before: CustomEvent<{event: SubmitEvent, element: HTMLFormElement, options: AjaxFormOptions}>,
    send: CustomEvent<{formData: FormData}>;
    error: CustomEvent<{error: Error, responseText?: string}>;
    complete: CustomEvent<{result?: AjaxFormResult, error?: Error}>,
    success: CustomEvent<{result: AjaxFormResult}>,
    fail: CustomEvent<{result: AjaxFormResult}>,
};
