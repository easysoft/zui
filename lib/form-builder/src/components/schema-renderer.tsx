import {Component, ComponentChild, RenderableProps} from 'preact';
import {classes, CustomContent} from '@zui/core';
import {Collapsible} from '@zui/collapsible/src/components';
import {ArraySchema, FieldSchemaInfo, FormGridWidth} from '../types';
import {SchemaFormItem} from './schema-form-item';

export interface SchemaRendererProps {
    infoGetter: (path?: string) => FieldSchemaInfo | undefined;
    onChangeField: (path: string, value: unknown) => void;
    errorsGetter: (path: string) => [code: string, error: string][];
    schemaInfo?: FieldSchemaInfo;
    errors?: [code: string, error: string][];
    path?: string;
}

export class SchemaRenderer extends Component<SchemaRendererProps> {
    protected _getSchemaInfo(props: SchemaRendererProps) {
        const {infoGetter, path = ''} = props;
        return props.schemaInfo || infoGetter(path);
    }

    protected _renderObjectSchema(schemaInfo: FieldSchemaInfo) {
        const {infoGetter, errorsGetter, path = '', onChangeField} = this.props;
        const {schema, properties = []} = schemaInfo;
        const {title, description} = schema;
        const cells: ComponentChild[] = [];
        for (const key of properties) {
            const propertyPath = path.length ? `${path}.${key}` : key;
            const errors = errorsGetter(propertyPath);
            cells.push(<SchemaRenderer key={key} infoGetter={infoGetter} path={propertyPath} onChangeField={onChangeField} errorsGetter={errorsGetter} errors={errors.length ? errors : undefined} />);
        }
        if (path.length) {
            return (
                <Collapsible
                    key={path}
                    title={title}
                    caption={description}
                    className="form-builder-collapsible"
                    contentClass="form-builder-items"
                >
                    {cells}
                </Collapsible>
            );
        }
        return <div className="form-builder-items">{cells}</div>;
    }

    protected _renderArraySchema(schemaInfo: FieldSchemaInfo) {
        const {infoGetter, errorsGetter, path = ''} = this.props;
        if (!schemaInfo) {
            console.warn('[ZUI] Schema not found:', path);
            return null;
        }
        const schema = schemaInfo.schema as ArraySchema;
        const {title, description, items} = schema;
        if (items) {
            const arraySchemaInfo = infoGetter(`${path}[]`);
            if (!arraySchemaInfo) {
                console.warn('[ZUI] Schema not found:', `${path}[]`);
                return null;
            }
            const valueList = arraySchemaInfo.value as unknown[];
            return (
                <Collapsible
                    title={title}
                    caption={description}
                    disabled={schema.collapsed === 'disabled'}
                    collapsed={typeof schema.collapsed === 'boolean' ? schema.collapsed : !schema.title}
                    className="form-builder-collapsible"
                >
                    {valueList.map((value, index) => {
                        const itemSchemaInfo = {
                            ...arraySchemaInfo,
                            path: `${path}[${index}]`,
                            value,
                        };
                        const errors = errorsGetter(itemSchemaInfo.path);
                        return <SchemaRenderer infoGetter={infoGetter} errors={errors.length ? errors : undefined} errorsGetter={errorsGetter} path={itemSchemaInfo.path} schemaInfo={itemSchemaInfo} onChangeField={this.props.onChangeField} />;
                    })}
                </Collapsible>
            );
        }
        return this._renderFormItem(schemaInfo);
    }

    protected _renderSchema(schemaInfo: FieldSchemaInfo) {
        const {type} = schemaInfo.schema;
        if (type === 'object') {
            return this._renderObjectSchema(schemaInfo);
        }
        if (type === 'array') {
            return this._renderArraySchema(schemaInfo);
        }
        return this._renderFormItem(schemaInfo);
    }

    protected _renderFormItem(schemaInfo: FieldSchemaInfo) {
        return <SchemaFormItem schemaInfo={schemaInfo} onChangeField={this.props.onChangeField} />;
    }

    protected _getWidthStyle(width?: FormGridWidth): string {
        if (typeof width !== 'string' && typeof width !== 'number') {
            return '';
        }
        if (typeof width === 'number') {
            return `${(width / 12) * 100}%`;
        }
        if (width === 'full') {
            return '100%';
        }
        if (/^\d+\/\d+$/.test(width)) {
            const [numerator, denominator] = width.split('/').map(Number);
            return `${(numerator / denominator) * 100}%`;
        }
        return width;
    }

    render(props: RenderableProps<SchemaRendererProps>) {
        const {infoGetter, errors, path = ''} = props;
        const schemaInfo = props.schemaInfo || infoGetter(path);
        if (!schemaInfo) {
            console.warn('[ZUI] Schema not found:', path);
            return null;
        }
        const {schema} = schemaInfo;
        if (schema.hidden) {
            return null;
        }
        const {extra, hint, width, type, disabled, readonly, required} = schema;
        const widthStyle = this._getWidthStyle(width);
        return (
            <div
                key={path}
                z-key={path}
                z-type={type}
                className={classes('form-builder-item', {
                    'is-root': !path.length,
                    'is-disabled': disabled,
                    'is-readonly': readonly,
                    'is-required': required,
                    'has-error': errors?.length,
                })}
                style={widthStyle ? {'flex-basis': widthStyle} : undefined}
            >
                {this._renderSchema(schemaInfo)}
                {errors?.length ? (
                    <div class="form-item-errors">
                        {errors.map(([code, error]) => (
                            <div key={code} class="form-item-error">{error}</div>
                        ))}
                    </div>
                ) : null}
                {hint ? <div className="form-hint">{hint}</div> : null}
                {extra ? <CustomContent className="form-builder-extra" content={extra} /> : null}
            </div>
        );
    }
}
