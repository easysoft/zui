import type {ComponentType, RenderableProps} from 'preact';
import {type ClassNameLike, type ComponentChildren, computed, CustomContent, HElement, mergeProps, ReadonlySignal, Signal, effect, $, signal, batch} from '@zui/core';
import {Toolbar} from '@zui/toolbar/src/component';
import {Picker} from '@zui/picker/src/component';
import type {FormBuilderOptions, FormSchema, FormWidgetMap, JSONSchema, FieldSchemaInfo, FormWidgetSetting, FormWidgetSettingDefinition} from '../types';
import {MapEdit} from '../../../form-control/src/components/map-edit';
import {StringListEdit} from '../../../form-control/src/components/string-list-edit';
import {SchemaRenderer} from './schema-renderer';

export class FormBuilder extends HElement<FormBuilderOptions> {
    static readonly NAME = 'FormBuilder';

    protected _schema$: Signal<FormSchema>;

    protected _dataMap$: Signal<Record<string, unknown>>;

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
        const dataMap = this._dataMap$.value;
        const oldValue = dataMap[path];
        if (oldValue !== value) {
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
                        ...dataMap,
                        ...changes,
                    };
                    this._updateFieldInfos(Object.keys(changes));
                });
            });
        }
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
        map.values().forEach(({value: info}) => {
            if (!info || info.path === path || handledDependencies.has(info.path) || !info.dependenciesSet.has(path)) {
                return;
            }
            this._updateFieldInfo(info.path, handledDependencies);
        });
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
        const finalSchema = {} as Record<string, unknown>;
        for (const key of keys) {
            let value: unknown = currentSchema[key];
            if (typeof value === 'string' && value.startsWith('{{') && value.endsWith('}}')) {
                value = this._evaluateExpression(value, ['formBuilder', this], ['schema', currentSchema], ['formData', this.formData], ['value', fieldValue], ['path', path]);
            }
            finalSchema[key] = value;
        }

        const info = {
            path,
            schema: finalSchema as unknown as JSONSchema,
            properties: (finalSchema.type === 'object' && finalSchema.properties) ? Object.keys(finalSchema.properties as Record<string, JSONSchema>) : undefined,
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
            <div key="body" className="form-builder-body form-grid">
                {title ? <div className="form-builder-title">{title}</div> : null}
                <SchemaRenderer infoGetter={this.getFieldSchemaInfo} onChangeField={this.setFieldValue} />
                {actions ? Toolbar.render(actions, [], {className: 'form-actions'}) : null}
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
            map[key] = data ?? JSON.parse(JSON.stringify(schema.defaultValue ?? this.typeDefaultValueMap[schema.type]));
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
