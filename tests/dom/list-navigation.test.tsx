import {act, render} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {List, NestedList} from '@zui/list/react';

for (const nested of [false, true]) {
    describe(`${nested ? 'NestedList' : 'List'} active navigation`, () => {
        it('keeps the only available item active when moving in either direction', () => {
            const ref = createRef<List>();
            const onActive = vi.fn();
            const props = {
                ref: (instance: List | null) => {ref.current = instance;},
                onActive,
                items: [
                    {id: 'disabled', text: 'Disabled', disabled: true},
                    {id: 'only', text: 'Only available item'},
                    {id: 'hidden', text: 'Hidden', hidden: true},
                ],
            };
            const {getByText} = render(nested ? <NestedList {...props} /> : <List {...props} />);

            for (const direction of ['activeNext', 'activeNext', 'activeNext', 'activePrev', 'activePrev'] as const) {
                act(() => {
                    ref.current![direction]();
                });
                expect(ref.current!.getActiveKeys()).toEqual(['only']);
                expect(getByText('Only available item').closest('.item-inner')).toHaveClass('active');
                expect(onActive).toHaveBeenLastCalledWith(['only'], true);
            }

            act(() => {
                void ref.current!.toggleActive('only');
            });
            expect(ref.current!.getActiveKeys()).toEqual([]);
        });

        it('wraps between available items while skipping disabled entries', () => {
            const ref = createRef<List>();
            const props = {
                ref: (instance: List | null) => {ref.current = instance;},
                items: [
                    {id: 'first', text: 'First'},
                    {id: 'disabled', text: 'Disabled', disabled: true},
                    {id: 'last', text: 'Last'},
                ],
            };
            render(nested ? <NestedList {...props} /> : <List {...props} />);

            for (const [direction, expected] of [
                ['activeNext', 'first'], ['activeNext', 'last'], ['activeNext', 'first'],
                ['activePrev', 'last'], ['activePrev', 'first'],
            ] as const) {
                act(() => {
                    ref.current![direction]();
                });
                expect(ref.current!.getActiveKeys()).toEqual([expected]);
            }
        });
    });
}

it('keeps a single eligible nested child active using its full key path', () => {
    const ref = createRef<NestedList>();
    const child = createRef<List>();
    const {getByText} = render(
        <NestedList
            ref={ref}
            defaultNestedShow
            items={[{
                id: 'parent', text: 'Parent', items: [{id: 'child', text: 'Child'}],
                listProps: {afterRender(this: List) {child.current = this;}},
            }]}
        />,
    );

    for (const list of [ref.current!, child.current!]) {
        act(() => {
            void ref.current!.toggleActive('parent:child', false);
        });
        for (const direction of ['activeNext', 'activeNext', 'activePrev'] as const) {
            act(() => {
                list[direction](item => item.key === 'parent:child');
            });
            expect(ref.current!.getActiveKeys()).toEqual(['parent:child']);
            expect(getByText('Child').closest('.item-inner')).toHaveClass('active');
        }
    }
});
