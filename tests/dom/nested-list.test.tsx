import {fireEvent, render} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {NestedList} from '@zui/list/react';

describe('NestedList event ownership', () => {
    it.each([
        ['Root leaf', 'root-leaf'],
        ['Child leaf', 'parent:child-leaf'],
        ['Leaf', 'parent:child:leaf'],
    ])('handles %s once and keeps the click bubbling', (text, keyPath) => {
        const onClickItem = vi.fn();
        const onItemClick = vi.fn();
        const onOuterClick = vi.fn();
        const onToggle = vi.fn();
        const {getByText} = render(
            <div onClick={onOuterClick}>
                <NestedList
                    defaultNestedShow
                    onClickItem={onClickItem}
                    onToggle={onToggle}
                    items={[
                        {id: 'root-leaf', text: 'Root leaf', onClick: onItemClick},
                        {id: 'parent', text: 'Parent', onClick: onItemClick, items: [
                            {id: 'child-leaf', text: 'Child leaf', onClick: onItemClick},
                            {id: 'child', text: 'Child', onClick: onItemClick, items: [
                                {id: 'leaf', text: 'Leaf', onClick: onItemClick},
                            ]},
                        ]},
                    ]}
                />
            </div>,
        );

        fireEvent.click(getByText(text));

        expect(onClickItem).toHaveBeenCalledTimes(1);
        expect(onClickItem).toHaveBeenLastCalledWith(expect.objectContaining({keyPath, item: expect.objectContaining({text})}));
        expect(onItemClick).toHaveBeenCalledTimes(1);
        expect(onOuterClick).toHaveBeenCalledTimes(1);
        expect(onToggle).not.toHaveBeenCalled();
    });

    it('keeps the hovered nested item active instead of activating an ancestor', () => {
        const ref = createRef<NestedList>();
        const onActive = vi.fn();
        const {getByText} = render(
            <NestedList
                ref={ref}
                defaultNestedShow
                activeOnHover
                onActive={onActive}
                items={[{id: 'parent', text: 'Parent', items: [
                    {id: 'child', text: 'Child', items: [{id: 'leaf', text: 'Leaf'}]},
                ]}]}
            />,
        );

        fireEvent.mouseOver(getByText('Leaf'), {relatedTarget: document.body});

        expect(ref.current!.getActiveKeys()).toEqual(['parent:child:leaf']);
        expect(onActive).toHaveBeenCalledTimes(1);
        expect(onActive).toHaveBeenLastCalledWith(['parent:child:leaf'], true);
    });

    it('toggles only the clicked directory', () => {
        const ref = createRef<NestedList>();
        const onClickItem = vi.fn();
        const onToggle = vi.fn();
        const {getByText} = render(
            <NestedList
                ref={ref}
                defaultNestedShow
                onClickItem={onClickItem}
                onToggle={onToggle}
                items={[{id: 'parent', text: 'Parent', items: [
                    {id: 'child', text: 'Child', items: [{id: 'leaf', text: 'Leaf'}]},
                ]}]}
            />,
        );

        fireEvent.click(getByText('Child'));
        expect(onClickItem).toHaveBeenCalledTimes(1);
        expect(onToggle).toHaveBeenCalledTimes(1);
        expect(onToggle).toHaveBeenLastCalledWith('parent:child', false, undefined);
        expect(ref.current!.isExpanded('parent')).toBe(true);
        expect(ref.current!.isExpanded('parent:child')).toBe(false);

        fireEvent.click(getByText('Child'));
        expect(onClickItem).toHaveBeenCalledTimes(2);
        expect(onToggle).toHaveBeenCalledTimes(2);
        expect(onToggle).toHaveBeenLastCalledWith('parent:child', true, undefined);
        expect(ref.current!.isExpanded('parent:child')).toBe(true);
    });
});
