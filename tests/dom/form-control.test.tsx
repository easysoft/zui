// @vitest-environment jsdom

import {render} from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import {describe, expect, it, vi} from 'vitest';
import {Select} from '@zui/form-control/src/components/select';

const items = [
    {text: 'Alpha', value: 'alpha'},
    {text: 'Beta', value: 'beta'},
    {text: 'Gamma', value: 'gamma'},
];

describe('FormControl Select', () => {
    it('preserves every controlled value in a multiple select', () => {
        const {container} = render(<Select items={items} multiple value={['alpha', 'gamma']} />);
        const select = container.querySelector<HTMLSelectElement>('select')!;

        expect([...select.selectedOptions].map(option => option.value)).toEqual(['alpha', 'gamma']);
    });

    it('updates an uncontrolled multiple select and reports all selected values', async () => {
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const onChange = vi.fn();
        const {container} = render(<Select defaultValue={['alpha']} items={items} multiple onChange={onChange} />);
        const select = container.querySelector<HTMLSelectElement>('select')!;

        await user.selectOptions(select, ['beta', 'gamma']);

        expect([...select.selectedOptions].map(option => option.value)).toEqual(['alpha', 'beta', 'gamma']);
        expect(onChange).toHaveBeenLastCalledWith(['alpha', 'beta', 'gamma'], expect.any(Event));
    });
});
