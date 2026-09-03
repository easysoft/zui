// @vitest-environment jsdom

import {render, waitFor} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it} from 'vitest';
import {FormBuilder} from '@zui/form-builder/src/components/form-builder';
import type {FormSchema, JSONSchema} from '@zui/form-builder/src/types';

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
