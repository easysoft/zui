import {act, fireEvent, render, within} from '@testing-library/preact';
import {createRef} from 'preact';
import {describe, expect, it, vi} from 'vitest';
import {SearchMenu} from '@zui/menu/react';

import type {Item} from '@zui/common-list';

describe('SearchMenu incremental nested results', () => {
    it('counts matching branches and keeps ancestors without rendering undisplayed descendants', () => {
        const ref = createRef<SearchMenu>();
        const itemRender = vi.fn(() => undefined);
        const {getByText, queryByText} = render(
            <SearchMenu
                ref={ref}
                search="Match"
                underlineKeys={false}
                maxVisibleItems={1}
                showMoreText="More {count}"
                itemRender={itemRender}
                items={[
                    {id: 'excluded', text: 'Excluded', items: [{id: 'none', text: 'Other'}]},
                    {id: 'a', text: 'First group', items: [
                        {id: 'a1', text: 'Match 1'},
                        {id: 'a2', text: 'Match 2'},
                        {id: 'a3', text: 'Match 3'},
                    ]},
                    {id: 'b', text: 'Second group', items: [{id: 'b1', text: 'Match 4'}]},
                ]}
            />,
        );
        const root = ref.current!.element as HTMLElement;
        const firstGroup = getByText('First group').closest('[z-item]')!;
        const childList = getByText('Match 1').closest('[z-item]')!.parentElement!;

        expect(root.querySelectorAll(':scope > [z-item]')).toHaveLength(1);
        expect(firstGroup).toHaveClass('is-not-match', 'has-match-child');
        expect(itemRender).toHaveBeenCalledTimes(2);
        expect(queryByText('Excluded')).not.toBeInTheDocument();
        expect(queryByText('Second group')).not.toBeInTheDocument();
        expect(queryByText('Match 4')).not.toBeInTheDocument();
        expect(within(root).getByRole('button', {name: 'More 1'})).toBeInTheDocument();

        fireEvent.click(within(childList).getByRole('button', {name: 'More 2'}));

        expect(childList.querySelectorAll(':scope > [z-item]')).toHaveLength(2);
        expect(root.querySelectorAll(':scope > [z-item]')).toHaveLength(1);
        expect(queryByText('Match 3')).not.toBeInTheDocument();

        const rootButton = root.querySelector(':scope > .list-show-more button')!;
        fireEvent.click(rootButton);

        expect(root.querySelectorAll(':scope > [z-item]')).toHaveLength(2);
        expect(childList.querySelectorAll(':scope > [z-item]')).toHaveLength(2);
        expect(getByText('Match 4')).toBeInTheDocument();
    });

    it('leaves lazy branches unloaded until their ancestor is displayed', async () => {
        const loadItems = vi.fn(async () => [{id: 'loaded', text: 'Match loaded'}]);
        const {getByRole, getByText, queryByText} = render(
            <SearchMenu
                search="Match"
                underlineKeys={false}
                maxVisibleItems={1}
                showMoreText="More {count}"
                items={[
                    {id: 'first', text: 'Match first'},
                    {id: 'lazy', text: 'Lazy group', items: loadItems},
                ]}
            />,
        );

        expect(loadItems).not.toHaveBeenCalled();
        expect(queryByText('Lazy group')).not.toBeInTheDocument();
        fireEvent.click(getByRole('button', {name: 'More 1'}));
        await act(async () => {
            await vi.advanceTimersByTimeAsync(0);
        });

        expect(loadItems).toHaveBeenCalledTimes(1);
        expect(getByText('Match loaded')).toBeInTheDocument();
    });

    it('resets the displayed child batch after the root search changes', () => {
        const items = [{id: 'group', text: 'Group', items: [
            {id: 'a1', text: 'Match 1'},
            {id: 'a2', text: 'Match 2'},
            {id: 'b1', text: 'Other 1'},
            {id: 'b2', text: 'Other 2'},
        ]}];
        const {getByRole, getByText, queryByText, rerender} = render(
            <SearchMenu items={items} search="Match" underlineKeys={false} maxVisibleItems={1} showMoreText="More {count}" />,
        );
        fireEvent.click(getByRole('button', {name: 'More 1'}));
        expect(getByText('Match 2')).toBeInTheDocument();

        rerender(<SearchMenu items={items} search="Other" underlineKeys={false} maxVisibleItems={1} showMoreText="More {count}" />);

        expect(queryByText('Match 1')).not.toBeInTheDocument();
        expect(getByText('Other 1')).toBeInTheDocument();
        expect(queryByText('Other 2')).not.toBeInTheDocument();
        expect(getByRole('button', {name: 'More 1'})).toBeInTheDocument();
    });

    it('keeps show-more accessible when custom child filtering removes the first branch matches', () => {
        const ref = createRef<SearchMenu>();
        const getItem = (item: Item) => item.key === 'filtered' ? false : item;
        const {getByRole, getByText, queryByText} = render(
            <SearchMenu
                ref={ref}
                search="Match"
                underlineKeys={false}
                maxVisibleItems={1}
                showMoreText="More {count}"
                getItem={getItem}
                items={[
                    {id: 'empty', text: 'Empty group', items: [{id: 'filtered', text: 'Match filtered'}]},
                    {id: 'visible', text: 'Match visible'},
                ]}
            />,
        );

        expect(queryByText('Match filtered')).not.toBeInTheDocument();
        expect(ref.current!.element!.parentElement).not.toHaveClass('no-match-child');
        fireEvent.click(getByRole('button', {name: 'More 1'}));
        expect(getByText('Match visible')).toBeInTheDocument();
    });

    it('resolves per-item child data overrides only after displaying the ancestor', () => {
        const ref = createRef<SearchMenu>();
        const {getByText} = render(
            <SearchMenu
                ref={ref}
                search="Match"
                underlineKeys={false}
                maxVisibleItems={1}
                showMoreText="More {count}"
                items={[
                    {id: 'override', text: 'Custom group', items: [{id: 'old', text: 'Other'}], listProps: {items: [{id: 'new', text: 'Match override'}]}},
                    {id: 'last', text: 'Match last'},
                ]}
            />,
        );

        expect(getByText('Custom group').closest('[z-item]')).toHaveClass('has-match-child');
        expect(getByText('Match override')).toBeInTheDocument();
        expect(ref.current!.element!.querySelectorAll(':scope > [z-item]')).toHaveLength(1);
    });
});
