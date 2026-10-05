import {render} from '@testing-library/preact';
import {describe, expect, it} from 'vitest';
import {Dashboard} from '@zui/dashboard/react';

import type {CustomContentType} from '@zui/core';

describe('Dashboard block content', () => {
    const contents: {name: string; content: CustomContentType; text: string}[] = [
        {name: 'text', content: 'Text', text: 'Text'},
        {name: 'zero', content: 0, text: '0'},
        {name: 'Preact nodes', content: <strong>Node</strong>, text: 'Node'},
        {name: 'arrays', content: ['First', <strong key="second">Second</strong>], text: 'FirstSecond'},
        {name: 'null', content: null, text: ''},
        {name: 'undefined', content: undefined, text: ''},
        {name: 'descriptors', content: {tag: 'strong', children: 'Custom'}, text: 'Custom'},
        {name: 'generators', content: () => <strong>Generated</strong>, text: 'Generated'},
    ];

    it.each(contents)('keeps $name inside one styled body', ({content, text}) => {
        const view = render(
            <Dashboard
                cache={false}
                blockClass="custom-block"
                blocks={[{
                    id: 'example',
                    title: 'Title',
                    rootClass: 'custom-root',
                    headerClass: 'custom-header',
                    bodyClass: 'custom-body',
                    content,
                }]}
            />,
        );
        const bodies = view.container.querySelectorAll('.dashboard-block-body');

        expect(bodies).toHaveLength(1);
        expect(bodies[0]).toHaveClass('custom-body');
        expect(bodies[0].textContent).toBe(text);
        expect(bodies[0].parentElement).toHaveClass('dashboard-block', 'custom-block');
        expect(view.container.querySelector('.dashboard-block-cell')).toHaveClass('custom-root');
        expect(view.container.querySelector('.dashboard-block-header')).toHaveClass('custom-header');
    });

    it('keeps an HTML panel directly inside the body and merges content classes', () => {
        const view = render(
            <Dashboard
                cache={false}
                blocks={[{
                    id: 'panel',
                    bodyClass: 'custom-body',
                    content: {html: '<section class="panel">Panel</section>', className: 'content-body'},
                }]}
            />,
        );
        const bodies = view.container.querySelectorAll('.dashboard-block-body');

        expect(bodies).toHaveLength(1);
        expect(bodies[0]).toHaveClass('custom-body', 'content-body');
        expect(view.container.querySelector('.panel')?.parentElement).toBe(bodies[0]);
    });
});
