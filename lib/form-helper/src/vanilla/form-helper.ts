import {$, Component, type Cash, type Selector} from '@zui/core';
import type {Picker} from '@zui/picker';
import type {FormControlFinder, FormControlInfo, FormField, FormHelperOptions} from '../types';

/**
 * 表单助手：用于更方便地对表单内的控件值进行读取和修改
 * Form helper: For easier reading and modifying the values of controls in the form
 */
export class FormHelper {
    static DEFAULT: Partial<FormHelperOptions> = {
        matchID: true,
        matchBrackets: true,
        throwError: true,
    };

    declare ['constructor']: typeof FormHelper;

    /**
     * 选项。 Options.
     */
    protected _options: FormHelperOptions;

    /**
     * 表单元素。 The form element.
     */
    protected _$element: Cash;

    /**
     * 缓存的表单字段。 Cached form fields.
     */
    protected _cachedFields: Map<string, Cash>;

    constructor(selector: Selector, options?: FormHelperOptions) {
        const {DEFAULT, globalControls} = this.constructor;
        this._options = {
            ...DEFAULT,
            ...options,
            controls: {
                ...globalControls,
                ...DEFAULT.controls,
                ...options?.controls,
            },
        };
        this._$element = $(selector);
        this._cachedFields = new Map();
    }

    get element() {
        return this._$element[0];
    }

    get options() {
        return this._options;
    }

    get $element() {
        return this._$element;
    }

    protected _queryField(query: string): Cash | undefined {
        const $element = this._$element;
        if ('#.['.includes(query[0])) {
            const $field = $element.find(query);
            return $field.length ? $field : undefined;
        }

        const options = this._options;
        const safeSelector = query.replaceAll('[', '\\[').replaceAll(']', '\\]');
        let $field = $element.find(`[zui-form-field="${safeSelector}"]`);
        if (!$field.length) {
            $field = $element.find(`[name="${safeSelector}"]`);
        }
        if (!$field.length && options.matchID) {
            $field = $element.find(`#${safeSelector}`);
        }
        if (!$field.length && options.matchBrackets && !query.includes('[')) {
            $field = $element.find(`[name="${safeSelector}\\[\\]"]`);
            if (!$field.length) {
                $field = $element.find(`[name^="${safeSelector}["]`);
            }
        }
        return $field.length ? $field : undefined;
    }

    protected _getControl($field: Cash): FormControlInfo | undefined {
        const {controls} = this._options;
        if (!controls) {
            return;
        }
        for (const [type, finder] of Object.entries(controls)) {
            const control = finder($field, this._$element);
            if (control) {
                return {type, ...control};
            }
        }
    }

    getFieldInfo(query: string): FormField | undefined {
        const {cacheQuery, allowSameName, fields} = this._options;

        let $userField: Cash | undefined;
        if (fields) {
            const findFn = typeof fields === 'function' ? fields : fields[query];
            if (findFn) {
                const findResult = findFn.call(this, query, this._$element);
                if (findResult instanceof $) {
                    $userField = findResult as Cash;
                } else if (findResult) {
                    return findResult as FormField;
                }
                if (findResult === false) {
                    return;
                }
            }
        }

        const $field = $userField || (cacheQuery ? this._cachedFields.get(query) : this._queryField(query));
        if (!$field?.length) {
            return;
        }
        if (!allowSameName && $field.length > 1) {
            throw new Error(`[ZUI] FormHelper: Multiple fields found for query "${query}".`);
        }
        if (cacheQuery) {
            this._cachedFields.set(query, $field);
        }
        return {
            $field,
            query,
            name: $field.attr('name') ?? '',
            value: $field.val(),
            control: this._getControl($field),
        };
    }

    getFieldVal(query: string) {
        const fieldInfo = this.getFieldInfo(query);
        if (!fieldInfo) {
            return;
        }
        return fieldInfo.control ? fieldInfo.control.getVal() : fieldInfo.value;
    }

    setFieldVal(query: string, value: unknown) {
        const fieldInfo = this.getFieldInfo(query);
        if (!fieldInfo) {
            if (this._options.throwError) {
                throw new Error(`[ZUI] FormHelper: Field "${query}" not found.`);
            }
            return false;
        }
        if (fieldInfo.control) {
            return fieldInfo.control.setVal(value);
        }
        fieldInfo.$field.val(value as string);
        return true;
    }

    setFormData(data: Record<string, unknown>) {
        Object.entries(data).forEach(([key, value]) => {
            this.setFieldVal(key, value);
        });
    }

    static globalControls: Record<string, FormControlFinder> = {
        picker: ($field, $scope) => {
            let $picker = $field.closest('[z-use-picker]');
            let isPickerLike = false;
            if (!$picker.length && $field.hasClass('pick-value')) {
                $picker = $field.closest('[z-use]');
                isPickerLike = true;
            }
            if (!$picker.length || !$picker.closest($scope).length) {
                return;
            }
            const instance = (isPickerLike ? $picker.zui() : $picker.data('zui.Picker')) as Picker;
            if (!instance) {
                return;
            }
            return {
                type: 'picker',
                $element: $picker,
                instance: instance as Component,
                getVal: () => instance.$?.value,
                setVal: (value: unknown) => {
                    instance.$?.setValue(value as string);
                    return true;
                },
            };
        },
    };

    static registerControl(type: string, finder: FormControlFinder) {
        this.globalControls[type] = finder;
    }
}

export function formHelper(selector: Selector, options?: FormHelperOptions) {
    return new FormHelper(selector, options);
}
