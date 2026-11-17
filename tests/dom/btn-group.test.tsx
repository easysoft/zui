// @vitest-environment jsdom

import {act, fireEvent, render} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {BtnGroup as VanillaBtnGroup} from '@zui/btn-group';
import {BtnGroup, BtnSegmented} from '@zui/btn-group/react';
import {FormControl, FormGroup} from '@zui/form-control/react';
import {FormBuilder} from '@zui/form-builder/react';
import type {BtnGroupItem} from '@zui/btn-group';
import type {FormSchema} from '@zui/form-builder';
import {flushAnimationFrame} from '../setup/dom';

const items: BtnGroupItem[] = [
    {id: 'list', text: '列表'},
    {id: 'card-key', value: 'card', text: '卡片'},
    {id: 'board', text: '看板', disabled: true},
];

it('supports the existing vanilla BtnGroup constructor, controlled render and destroy', async () => {
    const view = render(<form><div id="vanillaRadio" /></form>);
    const onChange = vi.fn();
    const component = new VanillaBtnGroup('#vanillaRadio', {radio: true, name: 'view', defaultValue: 'list', items, onChange});
    await act(flushAnimationFrame);
    fireEvent.click(view.getByText('卡片'));
    expect(onChange).toHaveBeenCalledExactlyOnceWith('card', expect.any(Event));
    act(() => component.render({value: 'list'}));
    expect(new FormData(view.container.querySelector('form')!).get('view')).toBe('list');
    act(() => component.destroy());
    expect(view.queryByRole('radio')).not.toBeInTheDocument();
});

describe.each([
    ['BtnGroup', BtnGroup, 'btn-group'],
    ['BtnSegmented', BtnSegmented, 'btn-segmented'],
] as const)('%s radio mode', (widget, Group, className) => {
    it('submits the native selection and resets without firing change', () => {
        const onChange = vi.fn();
        const onClickItem = vi.fn();
        const onClick = vi.fn();
        const options = items.map(item => ({...item, onClick}));
        const view = render(<form><Group radio name="view" defaultValue="list" items={options} onChange={onChange} onClickItem={onClickItem} /></form>);
        const form = view.container.querySelector('form')!;
        const group = view.getByRole('radiogroup');
        expect(group.tagName).toBe('DIV');
        expect(group).toHaveClass(className);
        expect(group).not.toHaveClass('view');
        expect(new FormData(form).getAll('view')).toEqual(['list']);
        expect(view.queryByRole('button')).not.toBeInTheDocument();

        fireEvent.click(view.getByText('卡片'));
        expect(view.getByRole('radio', {name: '卡片'})).toBeChecked();
        expect(new FormData(form).getAll('view')).toEqual(['card']);
        expect(onChange).toHaveBeenCalledExactlyOnceWith('card', expect.any(Event));
        expect(onClickItem).toHaveBeenCalledTimes(1);
        expect(onClick).toHaveBeenCalledTimes(1);
        fireEvent.click(view.getByText('卡片'));
        expect(onChange).toHaveBeenCalledTimes(1);

        act(() => form.reset());
        expect(view.getByRole('radio', {name: '列表'})).toBeChecked();
        expect(new FormData(form).get('view')).toBe('list');
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('keeps uncontrolled selection on rerender and uses unique stable IDs', () => {
        const renderForm = (nextItems: BtnGroupItem[]) => (
            <form>
                <Group radio name="view" defaultValue="list" items={nextItems} />
                <Group radio name="other" defaultValue="list" items={items} />
            </form>
        );
        const view = render(renderForm(items));
        const radios = view.container.querySelectorAll<HTMLInputElement>('input');
        const ids = Array.from(radios, input => input.id);
        expect(new Set(ids).size).toBe(radios.length);
        fireEvent.click(radios[1]);
        view.rerender(renderForm([...items].reverse()));
        expect(view.container.querySelector('input[name="view"][value="card"]')).toBeChecked();
        expect(view.container.querySelector('input[name="other"][value="list"]')).toBeChecked();
        expect(view.container.querySelector('input[name="view"][value="card"]')).toHaveAttribute('id', ids[1]);
        act(() => view.container.querySelector('form')!.reset());
        expect(view.container.querySelector('input[name="view"][value="list"]')).toBeChecked();
    });

    it('restores rejected controlled changes and resets to the current controlled value', () => {
        const onChange = vi.fn();
        const renderForm = (value: string) => <form><Group radio name="view" value={value} defaultValue="list" items={items} onChange={onChange} /></form>;
        const view = render(renderForm('list'));
        fireEvent.click(view.getByText('卡片'));
        expect(onChange).toHaveBeenCalledExactlyOnceWith('card', expect.any(Event));
        expect(view.getByRole('radio', {name: '列表'})).toBeChecked();
        expect(view.getByRole('radio', {name: '卡片'})).not.toBeChecked();
        view.rerender(renderForm('card'));
        expect(view.getByRole('radio', {name: '卡片'})).toBeChecked();
        act(() => view.container.querySelector('form')!.reset());
        expect(view.getByRole('radio', {name: '卡片'})).toBeChecked();
        expect(new FormData(view.container.querySelector('form')!).get('view')).toBe('card');
        expect(onChange).toHaveBeenCalledTimes(1);
        view.rerender(renderForm('missing'));
        expect(new FormData(view.container.querySelector('form')!).has('view')).toBe(false);
    });

    it('retains native required, item, group, readonly and fieldset disabling', () => {
        const onChange = vi.fn();
        const renderForm = (disabled = false, readonly = false, fieldsetDisabled = false) => (
            <form>
                <fieldset disabled={fieldsetDisabled}><Group radio name="view" required disabled={disabled} readonly={readonly} items={items} onChange={onChange} /></fieldset>
            </form>
        );
        const view = render(renderForm());
        const form = view.container.querySelector('form')!;
        expect(form.checkValidity()).toBe(false);
        fireEvent.click(view.getByText('看板'));
        expect(onChange).not.toHaveBeenCalled();
        fireEvent.click(view.getByText('列表'));
        expect(form.checkValidity()).toBe(true);
        expect(new FormData(form).get('view')).toBe('list');
        for (const flags of [[true, false, false], [false, true, false], [false, false, true]]) {
            view.rerender(renderForm(...flags));
            for (const radio of view.getAllByRole('radio')) {
                expect(radio).toBeDisabled();
            }
            fireEvent.click(view.getByText('卡片'));
            expect(onChange).toHaveBeenCalledTimes(1);
            expect(new FormData(form).has('view')).toBe(false);
        }
    });

    it('reuses item filtering and rendering props, including numeric option values', () => {
        const view = render(
            <Group
                radio
                name="view"
                id="view-field"
                defaultValue="0"
                size="sm"
                items={[
                    {id: 'hidden', text: '隐藏'},
                    {id: 'zero', value: 0, text: '零', icon: {className: 'test-icon'}},
                    {id: 'one', value: '1', text: '一'},
                ]}
                getItem={item => item.id === 'hidden' ? false : item}
                beforeRenderItem={item => ({...item, text: `${item.text}!`})}
            />,
        );
        expect(view.getAllByRole('radio')).toHaveLength(2);
        expect(view.getByRole('radio', {name: '零!'})).toHaveAttribute('id', 'view-field');
        expect(view.getByRole('radio', {name: '零!'})).toBeChecked();
        const label = view.getByText('零!').closest('label')!;
        expect(label).toHaveClass('btn', 'size-sm');
        expect(label.querySelector('.test-icon')).toBeInTheDocument();
        expect(label).not.toHaveAttribute('type');
        expect(label).not.toHaveAttribute('aria-pressed');
    });

    it('connects a registered FormControl and FormGroup field label', () => {
        const onChange = vi.fn();
        const view = render(<FormGroup name="view" label="视图" control={{widget, onChange, props: {radio: true, items, attrs: {'aria-label': '视图'}}}} />);
        fireEvent.click(view.getByText('视图'));
        expect(view.getByRole('radio', {name: '视图 列表'})).toBeChecked();
        expect(onChange).toHaveBeenCalledExactlyOnceWith('list', expect.any(Event));
        view.rerender(<FormControl widget={widget} name="view" value="card" props={{radio: true, items}} />);
        expect(view.getByRole('radio', {name: '卡片'})).toBeChecked();
    });

    it('integrates FormBuilder data, rejected changes, validation and readonly state', () => {
        const ref = createRef<FormBuilder>();
        const onFieldChange = vi.fn();
        const schema: FormSchema = {type: 'object', properties: {
            view: {type: 'string', title: '视图', required: true, widget, props: {radio: true, items, attrs: {'aria-label': '视图'}}},
        }};
        const view = render(<FormBuilder ref={ref} schema={schema} onFieldChange={onFieldChange} />);
        act(() => expect(ref.current!.validate()).toBe(false));
        fireEvent.click(view.getByText('卡片'));
        expect(ref.current!.formData).toEqual({view: 'card'});
        act(() => expect(ref.current!.validate()).toBe(true));
        onFieldChange.mockReturnValueOnce(false);
        fireEvent.click(view.getByText('列表'));
        expect(ref.current!.formData).toEqual({view: 'card'});
        expect(view.getByRole('radio', {name: '卡片'})).toBeChecked();
        act(() => ref.current!.setFieldValue('view', 'list'));
        expect(view.getByRole('radio', {name: '视图 列表'})).toBeChecked();
        act(() => ref.current!.setSchemaByPath('view', {readonly: true}));
        expect(view.getByRole('radio', {name: '卡片'})).toBeDisabled();
        expect(ref.current!.formData).toEqual({view: 'list'});
    });

    it('preserves the ordinary button mode and its list class name', () => {
        const onClickItem = vi.fn();
        const view = render(<Group name="custom-buttons" items={items} onClickItem={onClickItem} />);
        expect(view.container.firstElementChild!.tagName).toBe('NAV');
        expect(view.container.firstElementChild).toHaveClass('custom-buttons');
        expect(view.queryByRole('radio')).not.toBeInTheDocument();
        fireEvent.click(view.getByRole('button', {name: '卡片'}));
        expect(onClickItem).toHaveBeenCalledTimes(1);
    });
});
