import {createRef} from 'preact';
import {act, render, screen} from '@testing-library/preact';
import {describe, expect, it, vi} from 'vitest';
import {Calendar} from '@zui/calendar/react';
import {Calendar as VanillaCalendar} from '@zui/calendar';
import {flushAnimationFrame} from '../setup/dom';

const september = new Date(2026, 8, 27).getTime();
const october = new Date(2026, 9, 27).getTime();

describe('Calendar signals', () => {
    it('keeps consecutive date, event and category updates synchronous and reactive', () => {
        const ref = createRef<Calendar>();
        const onSwitchDate = vi.fn(function (this: Calendar) {
            // Reading other signals in a callback must not subscribe the date effect to them.
            return this.events;
        });
        const view = render(<Calendar ref={ref} date={september} readonly onSwitchDate={onSwitchDate} />);
        const calendar = ref.current!;
        expect(calendar.readonly).toBe(true);
        expect(onSwitchDate).toHaveBeenCalledExactlyOnceWith(new Date(september), 'month');

        act(() => {
            calendar.modifyEvents([{id: 'first', title: 'First event', start: september}]);
            calendar.modifyEvents([{id: 'second', title: 'Second event', start: september}]);
            calendar.modifyCategories([{id: 'work', name: 'Work'}]);
            calendar.modifyCategories([{id: 'work', color: 'red'}]);
            expect(calendar.events.map(event => event.id)).toEqual(['first', 'second']);
            expect(calendar.getCategory('work')).toMatchObject({name: 'Work', color: 'red'});
        });
        expect(screen.getByText('First event')).toBeInTheDocument();
        expect(screen.getByText('Second event')).toBeInTheDocument();
        expect(onSwitchDate).toHaveBeenCalledTimes(1);

        act(() => {
            calendar.switchDate(october);
            expect(calendar.date).toBe(october);
            calendar.switchDate(september);
            expect(calendar.date).toBe(september);
        });
        expect(onSwitchDate.mock.calls).toEqual([
            [new Date(september), 'month'],
            [new Date(october), 'month'],
            [new Date(september), 'month'],
        ]);
        expect(view.container.querySelector('.calendar-body')).toHaveAttribute('z-date', String(september));
    });

    it('refreshes props-derived signals while preserving local modifications', () => {
        const ref = createRef<Calendar>();
        const oldCallback = vi.fn();
        const nextCallback = vi.fn();
        const view = render(<Calendar ref={ref} date={september} readonly defaultCategory="old" events={[{id: 'old', title: 'Old event', start: september}]} onSwitchDate={oldCallback} />);
        const calendar = ref.current!;
        const events = calendar.events$;
        const categories = calendar.categories$;
        act(() => {
            calendar.modifyEvents([{id: 'local', title: 'Local event', start: october}]);
            calendar.modifyCategories([{id: 'work', color: 'blue'}]);
        });

        view.rerender(
            <Calendar
                ref={ref}
                date={october}
                view="week"
                readonly={false}
                defaultCategory="new"
                categories={[{id: 'work', name: 'Updated work', events: [{id: 'nested', title: 'Nested event', start: october}]}]}
                events={[{id: 'new', title: 'New event', start: october}]}
                onSwitchDate={nextCallback}
            />,
        );

        expect(calendar.date).toBe(october);
        expect(calendar.mode).toBe('week');
        expect(calendar.readonly).toBe(false);
        expect(calendar.events$).toBe(events);
        expect(calendar.categories$).toBe(categories);
        expect(calendar.getCategory('old')).toBeUndefined();
        expect(calendar.getCategory('new')).toBeDefined();
        expect(calendar.getCategory('work')).toMatchObject({name: 'Updated work', color: 'blue'});
        expect(calendar.getEvent('new')).toMatchObject({category: 'new'});
        expect(calendar.getEvent('old')).toBeUndefined();
        expect(screen.getByText('New event')).toBeInTheDocument();
        expect(screen.getByText('Nested event')).toBeInTheDocument();
        expect(screen.getByText('Local event')).toBeInTheDocument();
        expect(oldCallback).toHaveBeenCalledTimes(1);
        expect(nextCallback).toHaveBeenCalledExactlyOnceWith(new Date(october), 'week');

        view.rerender(<Calendar ref={ref} headerTitle="Changed title" onSwitchDate={nextCallback} />);
        expect(calendar.date).toBe(october);
        expect(calendar.mode).toBe('week');
        expect(calendar.getEvent('new')).toBeUndefined();
        expect(calendar.getEvent('nested')).toBeUndefined();
        expect(calendar.getEvent('local')).toMatchObject({category: 'DEFAULT'});
        expect(calendar.getCategory('work')).toMatchObject({color: 'blue'});
        expect(nextCallback).toHaveBeenCalledTimes(1);
    });

    it('resets vanilla instances with the next options and batches the date notification', async () => {
        const host = document.createElement('div');
        document.body.appendChild(host);
        const oldCallback = vi.fn();
        const nextCallback = vi.fn(function (this: Calendar) {
            return {
                readonly: this.readonly,
                events: this.events.map(event => event.id),
                localCategory: this.getCategory('local'),
            };
        });
        const wrapper = new VanillaCalendar(host, {date: september, readonly: true, onSwitchDate: oldCallback});
        await act(async () => flushAnimationFrame());
        const calendar = wrapper.$!;
        act(() => {
            calendar.modifyEvents([{id: 'local', title: 'Local event', start: september}]);
            calendar.modifyCategories([{id: 'local', name: 'Local category'}]);
            wrapper.render({
                date: october,
                view: 'day',
                readonly: false,
                events: [{id: 'next', title: 'Next event', start: october}],
                onSwitchDate: nextCallback,
            }, true);
        });

        expect(wrapper.$).toBe(calendar);
        expect(calendar.date).toBe(october);
        expect(calendar.mode).toBe('day');
        expect(calendar.getEvent('local')).toBeUndefined();
        expect(screen.getByText('Next event')).toBeInTheDocument();
        expect(oldCallback).toHaveBeenCalledTimes(1);
        expect(nextCallback).toHaveBeenCalledExactlyOnceWith(new Date(october), 'day');
        expect(nextCallback.mock.results[0].value).toEqual({readonly: false, events: ['next'], localCategory: undefined});

        act(() => {
            calendar.modifyEvents([{id: 'local', title: 'Local event', start: october}]);
            calendar.switchDate(september);
            nextCallback.mockClear();
            calendar.resetState();
        });
        expect(calendar.date).toBe(october);
        expect(calendar.getEvent('local')).toBeUndefined();
        expect(nextCallback).toHaveBeenCalledExactlyOnceWith(new Date(october), 'day');
        expect(nextCallback.mock.results[0].value).toEqual({readonly: false, events: ['next'], localCategory: undefined});
    });

    it('isolates instances and disposes date effects on unmount', () => {
        const first = createRef<Calendar>();
        const second = createRef<Calendar>();
        const onSwitchDate = vi.fn();
        const onUnmount = vi.fn();
        const view = render(
            <div>
                <Calendar ref={first} date={september} onSwitchDate={onSwitchDate} onUnmount={onUnmount} />
                <Calendar ref={second} date={october} />
            </div>,
        );
        const calendar = first.current!;
        act(() => calendar.modifyEvents([{id: 'local', title: 'Local event', start: september}]));
        expect(second.current!.events).toEqual([]);
        expect(second.current!.date).toBe(october);

        view.unmount();
        expect(onUnmount).toHaveBeenCalledOnce();
        act(() => calendar.switchDate(october));
        expect(onSwitchDate).toHaveBeenCalledTimes(1);
    });
});
