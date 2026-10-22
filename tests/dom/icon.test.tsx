import {render} from '@testing-library/preact';
import {Fragment, type ComponentChildren} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {Icon, getIconClass} from '@zui/core';
import {Modal} from '@zui/modal';
import {ResponsiveNavHelper} from '@zui/responsive-nav';
import {DTable} from '@zui/dtable/react';
import {filterable} from '@zui/dtable/src/plugins/filter';

describe('font-independent icons', () => {
    it('renders serializable CSS descriptors without a font glyph class', () => {
        const {container} = render(<Icon icon={{className: 'i-check', 'aria-hidden': true}} className="item-icon" />);
        expect(container.firstElementChild).toHaveClass('icon', 'i-check', 'item-icon');
        expect(container.firstElementChild).not.toHaveClass('icon-check');
        expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true');
        expect(getIconClass({className: 'i-trash'}, 'file-action')).toBe('icon file-action i-trash');
    });

    it('preserves SVG geometry and merges the consumer class, color and accessibility attributes', () => {
        const glyph = <svg className="file-icon" viewBox="0 0 24 24" style={{width: '1em'}}><path d="M2 2h20v20H2z" /></svg>;
        const {container} = render(<Icon icon={glyph} className="item-icon text-gray" style={{color: 'red'}} aria-hidden="true" />);
        const svg = container.querySelector('svg')!;
        expect(svg).toHaveClass('icon', 'file-icon', 'item-icon', 'text-gray');
        expect(svg).toHaveAttribute('viewBox', '0 0 24 24');
        expect(svg).toHaveAttribute('aria-hidden', 'true');
        expect(svg.style.width).toBe('1em');
        expect(svg.style.color).toBe('red');
        expect(glyph.props.className).toBe('file-icon');
        expect(glyph.props.style).toEqual({width: '1em'});
    });

    it('preserves caller-owned font names', () => {
        const {container} = render(<Icon icon="custom-glyph" />);
        expect(container.firstElementChild).toHaveClass('icon-custom-glyph');
        expect(getIconClass('icon-custom-glyph')).toBe('icon icon-custom-glyph');
    });

    it('preserves the class alias and string styles on supplied elements', () => {
        const {container} = render(<Icon icon={<span class="more" style="color: red" />} className="item-icon" />);
        expect(container.firstElementChild).toHaveClass('icon', 'more', 'item-icon');
        expect(container.firstElementChild).toHaveStyle({color: 'rgb(255, 0, 0)'});
    });

    it('keeps raw CSS class strings in modal alerts', async () => {
        const open = vi.spyOn(Modal, 'open').mockResolvedValue(undefined as unknown as Modal);
        await Modal.alert({message: 'Saved', icon: 'i-info text-primary'});
        const {container} = render(<Fragment>{open.mock.calls[0][0].content as ComponentChildren}</Fragment>);
        expect(container.querySelector('.icon')).toHaveClass('i-info', 'text-primary');
    });

    it('keeps raw CSS class strings in responsive navigation overflow controls', () => {
        const element = document.createElement('ul');
        document.body.append(element);
        const nav = new ResponsiveNavHelper(element, {more: {icon: 'more-vert text-primary'}, watch: []});
        try {
            expect(nav.getMore()[0]!.querySelector('.icon')).toHaveClass('more-vert', 'text-primary');
        } finally {
            nav.destroy();
            element.remove();
        }
    });

    it('keeps raw CSS class strings in table filter controls', () => {
        const {container} = render(
            <DTable
                width={400}
                height={100}
                data={[]}
                plugins={[filterable]}
                cols={[
                    {name: 'name', title: 'Name', filterable: true, filter: {icon: 'magnifier text-primary', className: ''}},
                ]}
            />,
        );
        expect(container.querySelector('.dtable-filter .icon')).toHaveClass('magnifier', 'text-primary');
    });
});
