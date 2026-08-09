import {Component} from 'preact';
import type {ComponentChild, RenderableProps} from 'preact';
import {classes, CustomContent} from '@zui/core';
import {Collapsible} from '@zui/collapsible/react';
import type {ArraySchema, FieldSchemaInfo, FormGridWidth, ObjectSchema} from '../types';
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
        const {title, description, displayType = 'vert', displayMode = 'grid'} = schema as ObjectSchema;
        const cells: ComponentChild[] = [];
        for (const key of properties) {
            const propertyPath = path.length ? `${path}.${key}` : key;
            const errors = errorsGetter(propertyPath);
            cells.push(<SchemaRenderer key={key} infoGetter={infoGetter} path={propertyPath} onChangeField={onChangeField} errorsGetter={errorsGetter} errors={errors.length ? errors : undefined} />);
        }
        const itemsClass = `form-builder-items form-${displayMode} form-${displayType}`;
        if (path.length) {
            return (
                <Collapsible
                    key={path}
                    title={title}
                    caption={description}
                    className="form-builder-collapsible"
                    contentClass={itemsClass}
                >
                    {cells}
                </Collapsible>
            );
        }
        return <div className={itemsClass}>{cells}</div>;
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
            const valueList = Array.isArray(arraySchemaInfo.value) ? arraySchemaInfo.value : [];
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
                        return <SchemaRenderer key={itemSchemaInfo.path} infoGetter={infoGetter} errors={errors.length ? errors : undefined} errorsGetter={errorsGetter} path={itemSchemaInfo.path} schemaInfo={itemSchemaInfo} onChangeField={this.props.onChangeField} />;
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
            if (!denominator) {
                return '';
            }
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
        const {extra, hint, width, type, disabled, readonly, required, className, wrapBefore, wrapAfter} = schema;
        const widthStyle = this._getWidthStyle(width);
        return [
            wrapBefore ? <div key={`${path}-wrap-before`} className="form-grid-wrap form-grid-wrap-before" z-wrap-before={path} /> : null,
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
                }, className)}
                style={widthStyle ? {'--form-item-width': widthStyle} : undefined}
            >
                {this._renderSchema(schemaInfo)}
                {errors?.length ? (
                    <div className="form-item-errors">
                        {errors.map(([code, error]) => (
                            <div key={code} className="form-item-error">{error}</div>
                        ))}
                    </div>
                ) : null}
                {hint ? <div className="form-hint">{hint}</div> : null}
                {extra ? <CustomContent className="form-builder-extra" content={extra} /> : null}
            </div>,
            wrapAfter ? <div key={`${path}-wrap-after`} className="form-grid-wrap form-grid-wrap-after" data-wrap-after={path} /> : null,
        ];
    }
}
