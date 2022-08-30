export default class ajaxForm {

    DEFAULT: {
        timeout: 0,
        dataType: 'json',
        method: 'post',
    }

    #form: HTMLElement;

    options: {
        beforeSubmit: null,
        error: null,
        success: null,
        finish: null,
        onError: null,
    }

    
    ajaxFormUrl: '';

    constructor(element, options) {
        const formIdData = element.split(',');
        formIdData.forEach(item => {
            if (item) {
                const formElement = document.querySelector(item);
                this.getAjaxForm(formElement, options);
            }
        });
    }

    getAjaxForm(ele, options) {
        if (typeof options === 'function') {
            options = {complete: options};
        }
        console.log(ele);
        const formData = new FormData(ele);
        console.log(formData);
        options = {
            ...this.DEFAULT,
            formData,
            options,
        }
        
    }
    
    // beforeSubmit(data, form, option): boolean {
        
    // }

    // onSuccess(response, textStatus, jqXHR) {

    // }

    // onError(jqXHR, textStatus, errorThrown) {
    //     console.log(jqXHR, textStatus, errorThrown);
    // }

    // onFinish(jqXHR, textStatus, errorThrown) {
    //     console.log(jqXHR, textStatus, errorThrown);
    // }
}
