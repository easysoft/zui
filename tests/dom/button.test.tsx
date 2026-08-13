// @vitest-environment jsdom

import {render, screen, within} from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import {describe, expect, it, vi} from 'vitest';
import {Button} from '@zui/button/src/component/button';

describe('Button Preact renderer', () => {
    it('renders a semantic button with text and a safe default type', () => {
        render(<Button text="Save" type="primary" />);
        const button = screen.getByRole('button', {name: 'Save'});

        expect(button).toHaveAttribute('type', 'button');
        expect(button).toHaveClass('btn', 'primary');
        expect(within(button).getByText('Save')).toBeInTheDocument();
    });

    it('renders enabled URLs as links with target and command attributes', () => {
        render(<Button text="Docs" url="/docs" target="_blank" command="open" />);
        const link = screen.getByRole('link', {name: 'Docs'});

        expect(link).toHaveAttribute('href', '/docs');
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('zui-command', 'open');
    });

    it('renders custom tags with data targets and leading/trailing icons', () => {
        render(
            <Button
                component="span"
                attrs={{role: 'button'}}
                text="Custom"
                icon="star"
                trailingIcon="arrow-right"
                url="/custom"
                target="#panel"
            />,
        );
        const custom = screen.getByRole('button', {name: 'Custom'});

        expect(custom.tagName).toBe('SPAN');
        expect(custom).toHaveAttribute('data-url', '/custom');
        expect(custom).toHaveAttribute('data-target', '#panel');
        expect(custom.querySelector('.icon-star')).not.toBeNull();
        expect(custom.querySelector('.icon-arrow-right')).not.toBeNull();
    });

    it('makes disabled links inert and prevents their click from bubbling', async () => {
        const user = userEvent.setup({advanceTimers: vi.advanceTimersByTime});
        const parentClick = vi.fn();
        const {container} = render(<Button text="Disabled" url="/danger" target="_blank" command="open" disabled />);
        container.addEventListener('click', parentClick);
        const link = screen.getByText('Disabled').closest('a')!;

        expect(link).not.toHaveAttribute('href');
        expect(link).not.toHaveAttribute('target');
        expect(link).not.toHaveAttribute('zui-command');
        expect(link).toHaveAttribute('aria-disabled', 'true');
        expect(link.tabIndex).toBe(-1);
        await user.click(link);
        expect(parentClick).not.toHaveBeenCalled();
    });

    it('uses loading content and suppresses normal children, trailing icons, and carets', () => {
        render(
            <Button
                text="Save"
                loading
                loadingText="Saving"
                trailingIcon="arrow-right"
                caret
            >
                Child
            </Button>,
        );
        const button = screen.getByRole('button', {name: 'Saving'});

        expect(button).toBeDisabled();
        expect(button).toHaveClass('loading', 'disabled');
        expect(button.querySelector('.icon-spinner-snake.spin')).not.toBeNull();
        expect(within(button).getByText('Saving')).toBeInTheDocument();
        expect(within(button).queryByText('Child')).not.toBeInTheDocument();
        expect(button.querySelector('.icon-arrow-right')).toBeNull();
        expect(button.querySelector('.caret')).toBeNull();
    });

    it('distinguishes caret-only and empty square buttons', () => {
        const caretView = render(<Button caret="up" />);
        const caretButton = caretView.getByRole('button');
        const emptyView = render(<Button />);
        const emptyButton = within(emptyView.container as HTMLElement).getByRole('button');

        expect(caretButton).toHaveClass('btn-caret');
        expect(caretButton).not.toHaveClass('square');
        expect(caretButton.querySelector('.caret-up')).not.toBeNull();
        expect(emptyButton).toHaveClass('square');
    });

    it('maps numeric sizes to CSS variables and custom btnType values to classes', () => {
        render(<Button text="Custom" size={36} btnType="toolbar-action" rounded="lg" />);
        const button = screen.getByRole('button', {name: 'Custom'});

        expect(button.style.getPropertyValue('--btn-height')).toBe('36px');
        expect(button).toHaveClass('size-36', 'toolbar-action', 'rounded-lg');
    });
});
