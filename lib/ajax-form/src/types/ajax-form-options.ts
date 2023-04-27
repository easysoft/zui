import type {AjaxFormResult} from './ajax-form-result';

export type AjaxFormOptions = {
    popoverTime?: number;
    beforeSubmit?: (event: SubmitEvent, form: HTMLFormElement, options: AjaxFormOptions) => false | void;
    beforeSend?: (formData: FormData) => void | FormData;
    contentType?: 'multipart/form-data',
    onSuccess?: (result: AjaxFormResult) => void | false;
    onFail?: (result: AjaxFormResult) => void | false;
    onError?: (error: Error, responseText?: string) => void;
    onComplete?: (result?: AjaxFormResult, error?: Error) => void;
    url?: string;
} & Pick<AjaxFormResult, 'callback' | 'closeModal' | 'load' | 'popoverTime' | 'popoverTip'>;
