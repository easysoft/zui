import type {ComponentType, RenderableProps} from 'preact';
import {type ClassNameLike, type ComponentChildren, computed, CustomContent, HElement, mergeProps, ReadonlySignal, Signal, effect, $, signal, batch} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';
import {Picker} from '@zui/picker/src/component';
import type {FormBuilderOptions, FormSchema, FormWidgetMap, JSONSchema, FieldSchemaInfo, FormWidgetSetting, FormWidgetSettingDefinition, ObjectSchema, FormValidateRulePattern, StringSchema} from '../types';
import {SchemaRenderer} from './schema-renderer';
import {getLang} from '../i18n';

export class FormBuilder extends HElement<FormBuilderOptions> {
    static readonly NAME = 'FormBuilder';

    static defaultProps: Partial<FormBuilderOptions> = {
        autoValidate: {
            onChange: 'removeErrors',
            onSubmit: true,
        },
    };

    protected _schema$: Signal<FormSchema>;

    protected _dataMap$: Signal<Record<string, unknown>>;

    protected _validationErrors$: Signal<Record<string, [code: string, error: string][]>>;

    protected _schemaPatches$: Signal<Record<string, Partial<JSONSchema>>>;

    protected _formData$: ReadonlySignal<Record<string, unknown>>;

    protected _formDataEffect: () => void;

    protected _lastFormData: Record<string, unknown>;

    protected _schemaMap$: ReadonlySignal<Record<string, JSONSchema>>;

    protected _map = new Map<string, Signal<FieldSchemaInfo>>();

    constructor(props: FormBuilderOptions) {
        super(props);
        this._schema$ = signal(props.schema);

        const dataMap = FormBuilder.buildDataMap(props.schema, props.defaultData);
        this._dataMap$ = signal(dataMap);
        this._schemaPatches$ = signal({});
        this._validationErrors$ = signal({});

        this._formData$ = computed(() => {
            return FormBuilder.buildFormData(this._dataMap$.value);
        });
        this._lastFormData = FormBuilder.buildFormData(dataMap);

        this._schemaMap$ = computed(() => {
            const map: Record<string, JSONSchema> = {};
            const schemaPatches = this._schemaPatches$.value;
            FormBuilder.loopSchema(this.schema, (schema, path) => {
                map[path] = $.extend(true, schema, schemaPatches[path]);
            });
            this._map.clear();
            return map;
        });

        this._formDataEffect = effect(() => {
            const lastFormData = this._lastFormData;
            this._lastFormData = this._formData$.value;
            this.props.onDataChange?.call(this, this._formData$.value, lastFormData);
        });
    }

    get schema$() {
        return this._schema$;
    }

    get schema() {
        return this._schema$.value;
    }

    get formData() {
        return this._formData$.value;
    }

    get schemaMap() {
        return this._schemaMap$.value;
    }

    get validationErrors() {
        return this._validationErrors$.value;
    }

    componentDidMount(): void {
        this.props.afterRender?.call(this, true);
    }

    componentDidUpdate(previousProps: Readonly<FormBuilderOptions>): void {
        if (previousProps.schema !== this.props.schema) {
            this._schema$.value = this.props.schema;
        } else {
            this.props.afterRender?.call(this, false);
        }
    }

    componentWillUnmount(): void {
        this._formDataEffect();
    }

    getSchemaByPath(path: string): JSONSchema | undefined {
        return this.schemaMap[path];
    }

    setSchemaByPath(path: string, fieldSchema: Partial<JSONSchema>, deepMerge = true) {
        const schemaPatches = this._schemaPatches$.value;
        this._schemaPatches$.value = {
            ...schemaPatches,
            [path]: deepMerge ? $.extend(true, schemaPatches[path] || {}, fieldSchema) : {
                ...schemaPatches[path],
                ...fieldSchema,
            } as JSONSchema,
        };
    }

    setFieldValue = (path: string, value: unknown) => {
        const info = this.getFieldSchemaInfo(path);
        const autoTrim = (info?.schema as StringSchema).autoTrim;
        if (autoTrim && typeof value === 'string') {
            if (autoTrim === 'start') {
                value = value.trimStart();
            } else if (autoTrim === 'end') {
                value = value.trimEnd();
            } else {
                value = value.trim();
            }
        }
        const dataMap = this._dataMap$.value;
        const oldValue = dataMap[path];
        if (oldValue === value) {
            return;
        }
        requestAnimationFrame(() => {
            const result = this.props.onFieldChange?.call(this, path, value, oldValue);
            if (result === false) {
                return;
            }
            batch(() => {
                const changes = {
                    [path]: value,
                    ...(typeof result === 'object' ? result : {}),
                };
                this._dataMap$.value = {
                    ...this._dataMap$.value,
                    ...changes,
                };
                const allRelativePaths = Object.keys(changes);
                this._updateFieldInfos(allRelativePaths);
            });
        });
    };

    validateField(pathOrSchemaInfo: string | FieldSchemaInfo, options?: {skipUpdate?: boolean; value?: unknown}): [code: string, error: string][] {
        const info = typeof pathOrSchemaInfo === 'string' ? this.getFieldSchemaInfo(pathOrSchemaInfo) : pathOrSchemaInfo;
        const type = info?.schema.type;
        if (!type || type === 'object') {
            return [];
        }
        const {schema} = info;
        const value = options?.value ?? info.value;
        const formatError = (code: string): [code: string, error: string] => {
            return [code, getLang(`validate.${code}`, schema as unknown as Record<string, string | number>)!];
        };
        const validatePattern = (pattern: FormValidateRulePattern | undefined, val: string, code = 'pattern'): [code: string, error: string] | undefined => {
            if (!pattern) {
                return;
            }
            const patternConfig = typeof pattern === 'string' ? {pattern} : pattern;
            const regex = new RegExp(patternConfig.pattern);
            if (!regex.test(val)) {
                return patternConfig.message ? [code, patternConfig.message] : formatError(code);
            }
        };
        if (info.required) {
            if (value === undefined || value === null || (type === 'string' && value === '') || (type === 'array' && (!Array.isArray(value) || value.length === 0)) || (type === 'map' && Object.keys(value).length === 0) || ((type === 'number' || type === 'integer') && Number.isNaN(value))) {
                return [formatError('required')];
            }
        }
        const errors: [code: string, error: string][] = [];
        if (schema.type === 'string') {
            if (typeof schema.min === 'number' && schema.min > 0 && String(value ?? '').length < schema.min) {
                errors.push(formatError('minLength'));
            }
            if (typeof schema.max === 'number' && schema.max > 0 && String(value ?? '').length > schema.max) {
                errors.push(formatError('maxLength'));
            }

            const patterError = validatePattern(schema.pattern, String(value ?? ''));
            if (patterError) {
                errors.push(patterError);
            }
        } else if (schema.type === 'number' || schema.type === 'integer') {
            if (typeof schema.min === 'number' && schema.min > 0 && Number(value ?? 0) < schema.min) {
                errors.push(formatError('min'));
            }
            if (typeof schema.max === 'number' && schema.max > 0 && Number(value ?? 0) > schema.max) {
                errors.push(formatError('max'));
            }
            if (schema.type === 'integer' && !Number.isInteger(Number(value ?? 0))) {
                errors.push(formatError('integer'));
            }
        } else if (schema.type === 'array') {
            if (typeof schema.min === 'number' && schema.min > 0 && Array.isArray(value) && value.length < schema.min) {
                errors.push(formatError('minCount'));
            }
            if (typeof schema.max === 'number' && schema.max > 0 && Array.isArray(value) && value.length > schema.max) {
                errors.push(formatError('maxCount'));
            }
        } else if (schema.type === 'map' && (schema.keyPattern || schema.valuePattern)) {
            const map = value as Record<string, unknown>;
            const {keyPattern, valuePattern} = schema;
            for (const [key, val] of Object.entries(map)) {
                const keyError = validatePattern(keyPattern, key, 'keyPattern');
                const valueError = validatePattern(valuePattern, String(val ?? ''), 'valuePattern');
                if (keyError) {
                    errors.push(keyError);
                }
                if (valueError) {
                    errors.push(valueError);
                }
            }
        }
        if (!options?.skipUpdate) {
            const {validationErrors} = this;
            if (JSON.stringify(validationErrors[info.path]) === JSON.stringify(errors)) {
                return errors;
            }
            this._validationErrors$.value = {
                ...validationErrors,
                [info.path]: errors,
            };
            this._updateFieldInfo(info.path);
        }
        return errors;
    }

    /**
     * 验证表单
     * @returns 是否验证通过
     * 如果验证不通过，则返回 false，并滚动到第一个错误所在的表单项
     * 如果验证通过，则返回 true
     */
    validate(): boolean {
        const errors: Record<string, [code: string, error: string][]> = {};
        const {validationErrors} = this;
        const validateOptions = {skipUpdate: true};
        let fieldErrorsChanged = false;
        let firstErrorPath = '';
        FormBuilder.loopSchema(this.schema, (_schema, path) => {
            const fieldErrors = this.validateField(path, validateOptions);
            if (!fieldErrorsChanged && JSON.stringify(validationErrors[path] || []) !== JSON.stringify(fieldErrors)) {
                fieldErrorsChanged = true;
            }
            if (fieldErrors.length > 0) {
                errors[path] = fieldErrors;
                firstErrorPath = path;
            }
        });
        if (fieldErrorsChanged) {
            this._validationErrors$.value = errors;
            if (firstErrorPath.length) {
                $(this.element).find(`[z-key="${firstErrorPath}"]`).scrollIntoView();
            }
        }
        return Object.keys(errors).length === 0;
    }

    getFieldValidationErrors = (path: string): [code: string, error: string][] => {
        return this.validationErrors[path] || [];
    };

    protected _updateMap() {
        const map = this._map;
        const mapKeySet = new Set(map.keys());
        FormBuilder.loopSchema(this.schema, (_schema, path) => {
            mapKeySet.delete(path);
            this._updateFieldInfo(path);
        });
        for (const wildKey of mapKeySet.keys()) {
            map.delete(wildKey);
        }
    }

    protected _updateFieldInfos(paths: string[]) {
        const handledDependencies = new Set(paths);
        for (const path of paths) {
            this._updateFieldInfo(path, handledDependencies);
        }
    }

    protected _updateFieldInfo(path: string, handledDependencies?: Set<string>) {
        const newInfo = this._createFieldSchemaInfo(path);
        if (!newInfo) {
            return;
        }
        const map = this._map;
        let info$ = map.get(path);
        if (!info$) {
            info$ = signal(newInfo);
            this._map.set(path, info$);
        } else {
            info$.value = newInfo;
        }
        handledDependencies = handledDependencies || new Set<string>();
        Array.from(map.values()).forEach(({value: info}) => {
            if (!info || info.path === path || handledDependencies.has(info.path) || !info.dependenciesSet.has(path)) {
                return;
            }
            this._updateFieldInfo(info.path, handledDependencies);
        });
        const {autoValidate = {}} = this.props;
        if (autoValidate.onChange) {
            const errorsMap = this._validationErrors$.value;
            if (autoValidate.onChange === 'removeErrors' && errorsMap[path]?.length) {
                this._validationErrors$.value = {
                    ...errorsMap,
                    [path]: [],
                };
            } else {
                this.validateField(path);
            }
        }
        return newInfo;
    }

    protected getFieldSchemaInfo$(path = ''): Signal<FieldSchemaInfo> | undefined {
        let $info = this._map.get(path);
        if (!$info) {
            this._updateFieldInfo(path);
            $info = this._map.get(path);
        }
        return $info;
    }

    protected getFieldSchemaInfo = (path = ''): FieldSchemaInfo | undefined => {
        return this.getFieldSchemaInfo$(path)?.value;
    };

    protected _evaluateExpression(expression: string, ...args: [name: string, value: unknown][]): unknown {
        try {
            const code = expression.substring(2, expression.length - 2);
            const value = $.runJS(code, ...args);
            return value;
        } catch (error) {
            console.warn('[ZUI] Failed to evaluate expression:', expression, error);
        }
    }

    protected _createFieldSchemaInfo(path: string): FieldSchemaInfo | undefined {
        const currentSchema = this.schemaMap[path];
        if (!currentSchema) {
            return;
        }

        const fieldValue = this._dataMap$.value[path];
        const keys = Object.keys(currentSchema) as (keyof JSONSchema)[];
        const finalSchema = {} as JSONSchema;
        for (const key of keys) {
            let value: unknown = currentSchema[key];
            if (typeof value === 'string' && value.startsWith('{{') && value.endsWith('}}')) {
                value = this._evaluateExpression(value, ['formBuilder', this], ['schema', currentSchema], ['formData', this.formData], ['value', fieldValue], ['path', path]);
            }
            (finalSchema as unknown as Record<string, unknown>)[key] = value;
        }

        const schemaType = finalSchema.type;
        const propertyKeys = (schemaType === 'object' && finalSchema.properties) ? Object.keys(finalSchema.properties) : undefined;
        if (propertyKeys) {
            const propertyOrderMap = new Map<string, number>();
            for (const key of propertyKeys) {
                const propertySchema = (finalSchema as unknown as ObjectSchema).properties[key];
                if (typeof propertySchema.order !== 'number') {
                    break;
                }
                propertyOrderMap.set(key, propertySchema.order);
            }
            if (propertyOrderMap.size === propertyKeys.length) {
                propertyKeys.sort((a, b) => propertyOrderMap.get(a)! - propertyOrderMap.get(b)!);
            }
        }
        let required = Array.isArray(finalSchema.required) ? false : !!finalSchema.required;
        if (schemaType !== 'object' && finalSchema.required === undefined && path.length > 2 && path.includes('.')) {
            const pathParts = path.split('.');
            const thisKey = pathParts.pop()!;
            const parentPath = pathParts.join('.');
            const parentSchemaInfo = this.getFieldSchemaInfo(parentPath);
            const parentSchema = parentSchemaInfo ? parentSchemaInfo.schema : this.getSchemaByPath(parentPath);
            if (parentSchema) {
                required = Array.isArray(parentSchema.required) && parentSchema.required.includes(thisKey);
            }
        }

        const info = {
            required,
            path,
            schema: finalSchema as unknown as JSONSchema,
            properties: propertyKeys,
            value: fieldValue,
            dependenciesSet: new Set<string>(currentSchema.dependencies || []),
        };

        return {
            ...info,
            widget: this._getWidget(info),
        };
    }

    protected _getWidget(schemaInfo: Omit<FieldSchemaInfo, 'widget'>): FormWidgetSetting {
        const {widget: widgetName, props} = schemaInfo.schema;
        const {widgetMap} = FormBuilder;
        const {widgets = {}} = this.props;
        let widget: FormWidgetSettingDefinition | undefined;
        if (widgetName) {
            widget = widgets[widgetName] || widgetMap[widgetName];
            while (typeof widget === 'string' && widget !== widgetName) {
                const refWidget: FormWidgetSettingDefinition = widgets[widget] || widgetMap[widget];
                if (!refWidget || widget === refWidget) {
                    break;
                }
                widget = refWidget;
            }
        }
        if (!widget) {
            widget = widgetName || widgets._ || widgetMap._;
        }
        if (typeof widget === 'function') {
            widget = widget.call(this, schemaInfo, this);
        }
        const widgetSetting: FormWidgetSetting = Array.isArray(widget) ? widget : [widget];
        if (props) {
            widgetSetting[1] = mergeProps({}, props, widgetSetting[1]);
        }
        return widgetSetting;
    }

    protected _handleSubmit = (event: Event) => {
        const {onSubmit, autoValidate} = this.props;
        if (autoValidate?.onSubmit && !this.validate()) {
            event.preventDefault();
            return;
        }
        const result = onSubmit?.call(this, event, this.formData);
        if (result === false) {
            event.preventDefault();
        }
    };

    protected _renderHeader(props: RenderableProps<FormBuilderOptions>) {
        const {header} = props;
        if (!header) {
            return null;
        }
        return <CustomContent key="header" className="form-builder-header" content={header} />;
    }

    protected _renderBody(props: RenderableProps<FormBuilderOptions>) {
        const {schema, actions} = props;
        const {title} = schema;
        return (
            <div key="body" className={`form-builder-body form-grid form-${schema.displayType || 'vert'}`}>
                {title ? <div className="form-builder-title">{title}</div> : null}
                <SchemaRenderer
                    key={this.schemaMap}
                    infoGetter={this.getFieldSchemaInfo}
                    errorsGetter={this.getFieldValidationErrors}
                    onChangeField={this.setFieldValue}
                />
                {actions ? Toolbar.render(actions, [], {className: 'form-actions'}) : null}
                {props.children}
            </div>
        );
    }

    protected _renderFooter(props: RenderableProps<FormBuilderOptions>) {
        const {footer} = props;
        if (!footer) {
            return null;
        }
        return <CustomContent key="footer" className="form-builder-footer" content={footer} />;
    }

    protected _getProps(props: RenderableProps<FormBuilderOptions>): Record<string, unknown> {
        return mergeProps({}, super._getProps(props), {
            action: props.formAction,
            onSubmit: this._handleSubmit,
        });
    }

    protected _getClassName(props: RenderableProps<FormBuilderOptions>): ClassNameLike {
        return ['form-builder', props.className];
    }

    protected _getChildren(props: RenderableProps<FormBuilderOptions>): ComponentChildren {
        return [
            this._renderHeader(props),
            this._renderBody(props),
            this._renderFooter(props),
            props.formName ? <input type="hidden" name={props.formName} value={JSON.stringify(this.formData)} /> : null,
        ];
    }

    static widgetMap: FormWidgetMap = {
        _: (info) => {
            if (info.schema.type === 'boolean') {
                return 'checkbox';
            }
            return 'input';
        },
        picker: ({schema}) => {
            const isArray = schema.type === 'array';
            const multiple = schema.props?.multiple ?? (schema.widget === 'multiPicker' ? true : isArray);
            return [Picker as ComponentType, {
                multiple,
            }, (value) => {
                if ((multiple && isArray)) {
                    if (!schema.required && !(value as string)?.length) {
                        return [];
                    }
                    return (value as string).split((schema.props as {valueSplitter?: string})?.valueSplitter ?? ',');
                }
                return (multiple && isArray) ? (value as string).split((schema.props as {valueSplitter?: string})?.valueSplitter ?? ',') : value;
            }];
        },
        multiPicker: 'picker',
        input: ({schema}) => {
            const {type = 'string'} = schema;
            if (type === 'number' || type === 'integer') {
                return ['input', {type: 'number'}];
            }
            return 'input';
        },
    };

    static typeDefaultValueMap: Record<string, unknown> = {
        string: '',
        number: 0,
        integer: 0,
        boolean: false,
        array: [],
        object: {},
        map: {},
    };

    static loopSchema(schema: JSONSchema, callback: (schema: JSONSchema, path: string) => void, currentPath = '') {
        callback(schema, currentPath);
        if (schema.type === 'object') {
            for (const key in schema.properties) {
                const fieldSchema = schema.properties[key];
                this.loopSchema(fieldSchema, callback, currentPath.length ? `${currentPath}.${key}` : key);
            }
        } else if (schema.type === 'array' && schema.items) {
            this.loopSchema(schema.items, callback, `${currentPath}[]`);
        }
    }

    static buildDataMap(schema: JSONSchema, data?: unknown, path = '', map: Record<string, unknown> = {}): Record<string, unknown> {
        if (schema.type === 'object' && 'properties' in schema) {
            for (const key in schema.properties) {
                const fieldSchema = schema.properties[key];
                const fieldData = (data && typeof data === 'object') ? (data as Record<string, unknown>)[key] : undefined;
                this.buildDataMap(fieldSchema, fieldData, path.length ? `${path}.${key}` : key, map);
            }
        } else {
            const key = (schema.type === 'array' && schema.items) ? `${path}[]` : path;
            map[key] = data ?? JSON.parse(JSON.stringify(schema.defaultValue ?? this.typeDefaultValueMap[schema.type] ?? ''));
        }
        return map;
    }

    static buildFormData(dataMap: Record<string, unknown>): Record<string, unknown> {
        return Object.keys(dataMap).reduce((formData, key) => {
            const value = dataMap[key];
            const pathList = key.split('.');
            let current = formData;
            pathList.forEach((path, index) => {
                if (index === pathList.length - 1) {
                    current[path.endsWith('[]') ? path.substring(0, path.length - 2) : path] = value;
                } else {
                    if (!current[path]) {
                        current[path] = {};
                    }
                    current = current[path] as Record<string, unknown>;
                }
            });
            return formData;
        }, {} as Record<string, unknown>);
    }
}
