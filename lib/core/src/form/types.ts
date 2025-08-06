export type FormItemValue = undefined | null | string | Blob | File | boolean | number;

export type FormDataLike = string | FormData | URLSearchParams | Record<string, FormItemValue | FormItemValue[]> | [name: string, value: FormItemValue][];
