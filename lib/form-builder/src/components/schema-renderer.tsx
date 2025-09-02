import {Component, ComponentChild, RenderableProps} from 'preact';
import {classes, CustomContent} from '@zui/core';
import {Collapsible} from '@zui/collapsible/src/components';
import {ArraySchema, FieldSchemaInfo} from '../types';
import {SchemaFormItem} from './schema-form-item';

export interface SchemaRendererProps {
    infoGetter: (path?: string) => FieldSchemaInfo | undefined;
    onChangeField: (path: string, value: unknown) => void;
    schemaInfo?: FieldSchemaInfo;
    path?: string;
}

export class SchemaRenderer extends Component<SchemaRendererProps> {
    protected _getSchemaInfo(props: SchemaRendererProps) {
        const {infoGetter, path = ''} = props;
        return props.schemaInfo || infoGetter(path);
    }

    protected _renderObjectSchema(schemaInfo: FieldSchemaInfo) {
        const {infoGetter, path = '', onChangeField} = this.props;
        const {schema, properties = []} = schemaInfo;
        const {title, description} = schema;
        const cells: ComponentChild[] = [];
        for (const key of properties) {
            cells.push(<SchemaRenderer key={key} infoGetter={infoGetter} path={path.length ? `${path}.${key}` : key} onChangeField={onChangeField} />);
        }
        if (path.length) {
            return (
                <Collapsible
                    title={title}
                    caption={description}
                    className="form-builder-collapsible"
                >
                    {cells}
                </Collapsible>
            );
        }
        return cells;
    }

    protected _renderArraySchema(schemaInfo: FieldSchemaInfo) {
        const {infoGetter, path = ''} = this.props;
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
                        return <SchemaRenderer infoGetter={infoGetter} path={itemSchemaInfo.path} schemaInfo={itemSchemaInfo} onChangeField={this.props.onChangeField} />;
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

    render(props: RenderableProps<SchemaRendererProps>) {
        const {infoGetter, path = ''} = props;
        const schemaInfo = props.schemaInfo || infoGetter(path);
        if (!schemaInfo) {
            console.warn('[ZUI] Schema not found:', path);
            return null;
        }
        const {schema} = schemaInfo;
        if (schema.hidden) {
            return null;
        }
        const {extra, hint, type, disabled, readonly, required} = schema;
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
                })}
            >
                {this._renderSchema(schemaInfo)}
                {hint ? <div className="form-hint">{hint}</div> : null}
                {extra ? <CustomContent className="form-builder-extra" content={extra} /> : null}
            </div>
        );
    }
}
