import {$} from '../cash';
import type {FormItemValue} from './types';

export function setFormDataValue(formData: FormData, name: string, value: FormItemValue | FormItemValue[] | Record<string, FormItemValue>) {
    if (value === undefined || value === null) {
        return;
    }
    if (Array.isArray(value)) {
        value.forEach(v => setFormDataValue(formData, name, v));
    } else if (!(value instanceof Blob) && $.isPlainObject(value)) {
        Object.entries(value).forEach(([key, v]) => {
            setFormDataValue(formData, `${name}[${key}]`, v);
        });
    } else {
        formData.append(name, value instanceof Blob ? value : String(value));
    }
}

export function createFormData(data: string | FormData | URLSearchParams | Record<string, FormItemValue | FormItemValue[]> | [name: string, value: FormItemValue][], existingFormData?: FormData): FormData {
    const formData = existingFormData || new FormData();
    if (data) {
        if (typeof data === 'string') {
            data = new URLSearchParams(data);
        }
        if (data instanceof URLSearchParams) {
            data.forEach((value, name) => {
                setFormDataValue(formData, name, value);
            });
        } else if (Array.isArray(data)) {
            data.forEach(([name, value]) => {
                setFormDataValue(formData, name, value);
            });
        } else if (data instanceof FormData) {
            data.forEach((value, name) => {
                setFormDataValue(formData, name, value);
            });
        } else if (typeof data === 'object' && data) {
            Object.entries(data).forEach(([name, value]) => {
                setFormDataValue(formData, name, value);
            });
        }
    }
    return formData;
}
