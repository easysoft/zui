// @vitest-environment jsdom

import {render} from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import {describe, expect, it, vi} from 'vitest';
import {DatePicker, DatetimePicker} from '@zui/datetime-picker/react';

describe('DatetimePicker manual input', () => {
    it('keeps the DatePicker pop open when switching the year selector', async () => {
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const {container, getByRole} = render(<DatePicker defaultValue="2024-12-20" />);
        const input = container.querySelector<HTMLInputElement>('input.form-control')!;

        await user.click(input);
        await user.click(getByRole('button', {name: '2024年'}));
        await vi.advanceTimersByTimeAsync(250);

        expect(document.querySelector('.pick-pop')).toBeInTheDocument();
        expect(document.querySelector('.date-pick-menu-years')).toBeInTheDocument();
    });

    it('preserves a DatePicker draft until blur commits the complete value', async () => {
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const {container} = render(
            <DatePicker
                allowInvalid
                defaultValue="2024-12-20"
                format="yyyy/MM/dd"
                display={(value, date) => value === 'WEEK' ? '最近一周' : (date ? value.replace(/\//g, '-') : '选择日期')}
            />,
        );
        const input = container.querySelector<HTMLInputElement>('input.form-control')!;

        await user.click(input);
        await user.clear(input);
        await user.type(input, '2024/12/19');

        expect(input).toHaveValue('2024/12/19');

        await user.tab();
        await vi.advanceTimersByTimeAsync(250);

        expect(input).toHaveValue('2024-12-19');

        await user.click(input);
        await user.clear(input);
        await user.type(input, 'WEEK');

        expect(input).toHaveValue('WEEK');

        await user.tab();
        await vi.advanceTimersByTimeAsync(250);

        expect(input).toHaveValue('最近一周');
    });

    it('preserves a DatetimePicker draft until blur commits the complete value', async () => {
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const {container} = render(
            <DatetimePicker
                defaultValue="2024-12-20 09:30:00"
                format="yyyy-MM-dd hh:mm:ss"
            />,
        );
        const input = container.querySelector<HTMLInputElement>('input.form-control')!;

        await user.click(input);
        await user.clear(input);
        await user.type(input, '2024-12-19 12:34:56');

        expect(input).toHaveValue('2024-12-19 12:34:56');

        await user.tab();

        expect(input).toHaveValue('2024-12-19 12:34:56');
    });
});
