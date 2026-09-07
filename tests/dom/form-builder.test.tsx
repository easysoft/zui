// @vitest-environment jsdom

import {act, fireEvent, render, waitFor} from '@testing-library/preact';
import {Component, createRef} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {FormBuilder} from '@zui/form-builder/src/components/form-builder';
import type {FormSchema, FormWidgetMap, JSONSchema, ObjectSchema} from '@zui/form-builder/src/types';

class InspectableFormBuilder extends FormBuilder {
    fieldSignal(path: string) {
        return this.getFieldSchemaInfo$(path);
    }
}

function createTrackedWidget() {
    const mount = vi.fn();
    const unmount = vi.fn();
    const renderWidget = vi.fn();
    class Widget extends Component<Record<string, unknown>> {
        protected _input = createRef<HTMLInputElement>();

        componentDidMount() {
            mount(this.props.name);
            // Like ZenEditor, this widget only reads its content/configuration on mount.
            this._input.current!.value = String(this.props.content ?? this.props.value ?? '');
            this._input.current!.placeholder = String(this.props.placeholder ?? '');
        }

        componentWillUnmount() {
            unmount(this.props.name);
        }

        render() {
            renderWidget(this.props.name);
            return <input ref={this._input} data-testid={String(this.props.name)} onInput={event => (this.props.onChange as (value: unknown) => void)?.(event.currentTarget.value)} />;
        }
    }
    const widgets: FormWidgetMap = {editor: [Widget]};
    return {Widget, widgets, mount, unmount, renderWidget};
}

describe('FormBuilder schema updates', () => {
    it('keeps equivalent fields and their validation/data state when schema objects are recreated', () => {
        const {widgets, mount, unmount, renderWidget} = createTrackedWidget();
        const ref = createRef<InspectableFormBuilder>();
        const onSchemaChange = vi.fn();
        const onDataChange = vi.fn();
        const makeSchema = (reverseProps = false): FormSchema => ({type: 'object', properties: {
            steps: {type: 'string', widget: 'editor', props: reverseProps ? {placeholder: 'Steps', style: {color: 'red'}} : {style: {color: 'red'}, placeholder: 'Steps'}},
        }});
        const view = render(<InspectableFormBuilder ref={ref} schema={makeSchema()} widgets={widgets} onSchemaChange={onSchemaChange} onDataChange={onDataChange} />);
        const input = view.getByTestId('steps') as HTMLInputElement;
        const fieldSignal = ref.current!.fieldSignal('steps');
        act(() => {
            fireEvent.input(input, {target: {value: 'Draft'}});
            ref.current!.setValidationErrors({steps: 'Server error'});
        });
        input.focus();
        renderWidget.mockClear();
        onDataChange.mockClear();

        view.rerender(<InspectableFormBuilder ref={ref} schema={makeSchema(true)} widgets={widgets} onSchemaChange={onSchemaChange} onDataChange={onDataChange} />);

        expect(view.getByTestId('steps')).toBe(input);
        expect(document.activeElement).toBe(input);
        expect(ref.current!.formData).toEqual({steps: 'Draft'});
        expect(view.getByText('Server error')).toBeInTheDocument();
        expect(mount).toHaveBeenCalledTimes(1);
        expect(unmount).not.toHaveBeenCalled();
        expect(renderWidget).not.toHaveBeenCalled();
        expect(onSchemaChange).not.toHaveBeenCalled();
        expect(onDataChange).not.toHaveBeenCalled();
        expect(ref.current!.fieldSignal('steps')).toBe(fieldSignal);
    });

    it('updates selection toolbars and unrelated fields without remounting editors', () => {
        const {widgets, mount, unmount} = createTrackedWidget();
        const onFocus = vi.fn();
        const makeSchema = (selected: string): FormSchema => ({type: 'object', properties: {
            steps: {type: 'string', widget: 'editor', props: {onFocus}, className: selected === 'steps' ? 'is-selected' : '', extra: selected === 'steps' ? <button>Steps toolbar</button> : undefined},
            browser: {type: 'string', title: selected, extra: selected === 'browser' ? <button>Browser toolbar</button> : undefined},
        }});
        const view = render(<FormBuilder schema={makeSchema('steps')} widgets={widgets} />);
        const input = view.getByTestId('steps');

        view.rerender(<FormBuilder schema={makeSchema('browser')} widgets={widgets} />);
        expect(view.getByText('Browser toolbar')).toBeInTheDocument();
        expect(view.queryByText('Steps toolbar')).not.toBeInTheDocument();
        expect(view.container.querySelector('[z-key="steps"]')).not.toHaveClass('is-selected');
        expect(view.getByTestId('steps')).toBe(input);

        view.rerender(<FormBuilder schema={makeSchema('steps')} widgets={widgets} />);
        expect(view.getByText('Steps toolbar')).toBeInTheDocument();
        expect(view.container.querySelector('[z-key="steps"]')).toHaveClass('is-selected');
        expect(view.getByTestId('steps')).toBe(input);
        expect(mount).toHaveBeenCalledTimes(1);
        expect(unmount).not.toHaveBeenCalled();
    });

    it('refreshes only the configured control when mount-only content/options or widget types change', () => {
        const {widgets, mount, unmount} = createTrackedWidget();
        const ref = createRef<FormBuilder>();
        const makeSchema = (content: string, placeholder: string): FormSchema => ({type: 'object', properties: {
            steps: {type: 'string', widget: 'editor', props: {content, placeholder}},
            other: {type: 'string', widget: 'editor'},
        }});
        const view = render(<FormBuilder ref={ref} schema={makeSchema('First', 'Old')} widgets={widgets} />);
        const first = view.getByTestId('steps');
        const other = view.getByTestId('other');

        view.rerender(<FormBuilder ref={ref} schema={makeSchema('Second', 'New')} widgets={widgets} />);
        expect(view.getByTestId('steps')).not.toBe(first);
        expect(view.getByTestId('steps')).toHaveValue('Second');
        expect(view.getByTestId('steps')).toHaveAttribute('placeholder', 'New');
        expect(view.getByTestId('other')).toBe(other);
        expect(mount.mock.calls).toEqual([['steps'], ['other'], ['steps']]);
        expect(unmount.mock.calls).toEqual([['steps']]);

        act(() => ref.current!.setSchemaByPath('steps', {widget: 'textarea'}));
        expect(view.queryByTestId('steps')).not.toBeInTheDocument();
        expect(view.container.querySelector('textarea')).toBeInTheDocument();
        expect(view.getByTestId('other')).toBe(other);
        expect(unmount.mock.calls).toEqual([['steps'], ['steps']]);
    });

    it('adds, removes, reorders and changes field types while retaining compatible values and signals', () => {
        const {widgets, mount, unmount} = createTrackedWidget();
        const ref = createRef<InspectableFormBuilder>();
        const first: FormSchema = {type: 'object', properties: {
            steps: {type: 'string', widget: 'editor', defaultValue: 'Start'},
            removed: {type: 'string', widget: 'editor'},
            count: {type: 'string', defaultValue: 'Old type'},
        }};
        const view = render(<InspectableFormBuilder ref={ref} schema={first} widgets={widgets} />);
        const input = view.getByTestId('steps');
        const fieldSignal = ref.current!.fieldSignal('steps');
        act(() => {
            fireEvent.input(input, {target: {value: 'Draft'}});
            ref.current!.setValidationErrors({steps: 'Keep', removed: 'Remove', count: 'Old validation'});
        });
        const next: FormSchema = {type: 'object', properties: {
            added: {type: 'string', widget: 'editor', defaultValue: 'New'},
            count: {type: 'integer', defaultValue: 3},
            steps: {...first.properties.steps, type: 'string', defaultValue: 'New default'},
        }};
        view.rerender(<InspectableFormBuilder ref={ref} schema={next} widgets={widgets} />);

        expect([...view.container.querySelectorAll('.form-group')].map(element => element.getAttribute('data-name'))).toEqual(['added', 'count', 'steps']);
        expect(view.getByTestId('steps')).toBe(input);
        expect(ref.current!.fieldSignal('steps')).toBe(fieldSignal);
        expect(ref.current!.fieldSignal('removed')).toBeUndefined();
        expect(ref.current!.formData).toEqual({added: 'New', count: 3, steps: 'Draft'});
        expect(ref.current!.validationErrors).toEqual({steps: [['steps_Error', 'Keep']]});
        expect(mount.mock.calls).toEqual([['steps'], ['removed'], ['added']]);
        expect(unmount.mock.calls).toEqual([['removed']]);
    });

    it('synchronizes patched structure, nested order and root presentation without stale child patches', () => {
        const {widgets} = createTrackedWidget();
        const ref = createRef<FormBuilder>();
        const fields: ObjectSchema['properties'] = {
            first: {type: 'string', widget: 'editor', order: 1},
            second: {type: 'string', widget: 'editor', order: 2},
        };
        const schema: FormSchema = {type: 'object', properties: {group: {type: 'object', properties: fields}}};
        const view = render(<FormBuilder ref={ref} schema={schema} widgets={widgets} />);
        const first = view.getByTestId('group.first');
        act(() => ref.current!.setSchemaByPath('group.second', {order: 0, className: 'patched'}));
        expect([...view.container.querySelectorAll('.form-group')].map(element => element.getAttribute('data-name'))).toEqual(['group.second', 'group.first']);
        expect(view.getByTestId('group.first')).toBe(first);

        act(() => ref.current!.setSchemaByPath('group', {properties: {first: fields.first, third: {type: 'string', defaultValue: 'Third'}}}, false));
        expect(ref.current!.getSchemaByPath('group.second')).toBeUndefined();
        expect(ref.current!.formData).toEqual({group: {first: '', third: 'Third'}});
        expect(view.getByTestId('group.first')).toBe(first);
        act(() => ref.current!.setSchemaByPath('group', {properties: fields}, false));
        expect(ref.current!.getSchemaByPath('group.second')!.className).toBeUndefined();
        act(() => ref.current!.setSchemaByPath('', {title: 'Patched form', displayType: 'horz'}));
        expect(view.getByText('Patched form')).toBeInTheDocument();
        expect(view.container.querySelector('.form-builder-body')).toHaveClass('form-horz');
        expect(schema.properties.group).toEqual({type: 'object', properties: fields});
    });

    it('propagates schema/value changes through cyclic dependencies and validates without recursion', () => {
        const ref = createRef<FormBuilder>();
        const schema: FormSchema = {type: 'object', required: ['source'], properties: {
            source: {type: 'string', title: 'Source', dependencies: ['dependent']},
            dependent: {type: 'string', title: 'Dependent', dependencies: ['source'], placeholder: '{{formData.source}}'},
            indirect: {type: 'string', dependencies: ['dependent'], hint: '{{formBuilder.getSchemaByPath("source").title}}'},
        }};
        const view = render(<FormBuilder ref={ref} schema={schema} autoValidate={{onChange: true}} />);
        act(() => ref.current!.setFieldValue('source', 'Changed'));
        expect(view.getByLabelText('Dependent')).toHaveAttribute('placeholder', 'Changed');
        act(() => ref.current!.setSchemaByPath('source', {title: 'Updated source'}));
        expect(view.getByText('Updated source', {selector: '.form-hint'})).toBeInTheDocument();
        act(() => ref.current!.setFieldValue('source', ''));
        expect(ref.current!.validationErrors.source[0][0]).toBe('required');
        expect(view.container.querySelector('[z-key="source"] .form-item-error')).toBeInTheDocument();
        act(() => ref.current!.setSchemaByPath('', {required: []}, false));
        expect(ref.current!.validationErrors.source).toEqual([]);
        expect(view.getByLabelText('Updated source')).not.toBeRequired();
    });

    it('keeps function closures distinct and updates VNode toolbar handlers', () => {
        const ref = createRef<FormBuilder>();
        const clicked = vi.fn();
        const makeSchema = (label: string): FormSchema => ({type: 'object', properties: {
            action: {type: 'string', extra: <button onClick={() => clicked(label)}>Toolbar</button>, props: {onFocus: () => clicked(label)}},
        }});
        const view = render(<FormBuilder ref={ref} schema={makeSchema('first')} />);
        view.rerender(<FormBuilder ref={ref} schema={makeSchema('second')} />);
        fireEvent.click(view.getByText('Toolbar'));
        fireEvent.focus(view.container.querySelector('input')!);
        expect(clicked.mock.calls).toEqual([['second'], ['second']]);
        act(() => ref.current!.setSchemaByPath('action', {extra: <button onClick={() => clicked('patched')}>Toolbar</button>}));
        fireEvent.click(view.getByText('Toolbar'));
        expect(clicked).toHaveBeenLastCalledWith('patched');
    });

    it('updates readonly/widget options and retains live widget content across value edits', () => {
        const {Widget, mount} = createTrackedWidget();
        const ref = createRef<FormBuilder>();
        const schema: FormSchema = {type: 'object', properties: {steps: {type: 'string', widget: 'editor'}}};
        const mappedWidgets: FormWidgetMap = {editor: ({value}) => [Widget, {content: value}]};
        const view = render(<FormBuilder ref={ref} schema={schema} widgets={mappedWidgets} />);
        const input = view.getByTestId('steps');
        fireEvent.input(input, {target: {value: 'Draft'}});
        expect(view.getByTestId('steps')).toBe(input);
        expect(ref.current!.formData).toEqual({steps: 'Draft'});
        expect(mount).toHaveBeenCalledTimes(1);
        view.rerender(<FormBuilder ref={ref} schema={{...schema, title: 'Readonly form'}} widgets={mappedWidgets} readonly />);
        expect(view.container.querySelector('[z-key="steps"]')).toHaveClass('is-readonly');
        expect(view.getByTestId('steps')).toHaveValue('Draft');
        view.rerender(<FormBuilder ref={ref} schema={schema} widgets={{editor: [Widget, {content: 'Configured'}]}} />);
        expect(view.getByTestId('steps')).toHaveValue('Configured');
    });

    it('preserves array item controls and evaluates schema patches for their template', () => {
        const {widgets, mount} = createTrackedWidget();
        const ref = createRef<FormBuilder>();
        const schema: FormSchema = {type: 'object', properties: {
            rows: {type: 'array', defaultValue: ['First', 'Second'], items: {type: 'string', widget: 'editor'}},
        }};
        const view = render(<FormBuilder ref={ref} schema={schema} widgets={widgets} />);
        const first = view.getByTestId('rows[0]');
        const second = view.getByTestId('rows[1]');
        act(() => ref.current!.setSchemaByPath('rows', {title: 'Rows'}));
        expect(view.getByTestId('rows[0]')).toBe(first);
        expect(view.getByTestId('rows[1]')).toBe(second);
        act(() => ref.current!.setSchemaByPath('rows[]', {props: {placeholder: 'Patched'}}));
        expect(view.getByTestId('rows[0]')).toHaveAttribute('placeholder', 'Patched');
        expect(view.getByTestId('rows[1]')).toHaveAttribute('placeholder', 'Patched');
        expect(ref.current!.formData).toEqual({rows: ['First', 'Second']});
        expect(mount).toHaveBeenCalledTimes(4);
    });

    it('synchronizes direct schema signal updates and disposes the subscription on unmount', () => {
        const {widgets} = createTrackedWidget();
        const ref = createRef<FormBuilder>();
        const onDataChange = vi.fn();
        const schema: FormSchema = {type: 'object', properties: {steps: {type: 'string', widget: 'editor'}}};
        const view = render(<FormBuilder ref={ref} schema={schema} widgets={widgets} onDataChange={onDataChange} />);
        const input = view.getByTestId('steps');
        const schema$ = ref.current!.schema$;
        act(() => {
            schema$.value = {type: 'object', properties: {...schema.properties, added: {type: 'string', defaultValue: 'Added'}}};
        });
        expect(view.getByTestId('steps')).toBe(input);
        expect(ref.current!.formData).toEqual({steps: '', added: 'Added'});
        view.unmount();
        onDataChange.mockClear();
        schema$.value = schema;
        expect(onDataChange).not.toHaveBeenCalled();
    });
});

describe('FormBuilder schema merging', () => {
    it('treats Preact nodes as atomic values while deep-merging schema patches', async () => {
        const originalExtra = <span>Original toolbar</span>;
        const originalProps = {style: {color: 'red'}};
        const schema: FormSchema = {
            type: 'object',
            properties: {
                product: {
                    type: 'string',
                    title: 'Product',
                    extra: originalExtra,
                    props: originalProps,
                },
            },
        };
        const formBuilderRef = createRef<FormBuilder>();
        const view = render(<FormBuilder ref={formBuilderRef} schema={schema} />);

        expect(view.getByText('Original toolbar')).toBeInTheDocument();
        expect(formBuilderRef.current!.getSchemaByPath('product')!.extra).toBe(originalExtra);

        const patchedExtra = <span>Patched toolbar</span>;
        formBuilderRef.current!.setSchemaByPath('product', {
            extra: patchedExtra,
            props: {style: {backgroundColor: 'blue'}},
        } as Partial<JSONSchema>);

        const mergedSchema = formBuilderRef.current!.getSchemaByPath('product')!;
        expect(mergedSchema.extra).toBe(patchedExtra);
        expect(mergedSchema.props).toEqual({
            style: {
                color: 'red',
                backgroundColor: 'blue',
            },
        });
        expect(schema.properties.product.props).toBe(originalProps);
        expect(originalProps).toEqual({style: {color: 'red'}});
        await waitFor(() => expect(view.getByText('Patched toolbar')).toBeInTheDocument());
    });
});
