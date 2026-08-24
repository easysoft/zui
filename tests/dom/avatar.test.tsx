// @vitest-environment jsdom

import {render, screen, within} from '@testing-library/preact';
import {describe, expect, it} from 'vitest';
import {Avatar as AvatarView} from '@zui/avatar/src/component/avatar';
import {Avatar as AvatarComponent} from '@zui/avatar/src/vanilla';
import {Component} from '@zui/core/src/component/component';
import {flushAnimationFrame} from '../setup/dom';

describe('Avatar', () => {
    it('derives short display text for Latin, Chinese, and mixed labels', () => {
        const latin = render(<AvatarView text="User Name" />);
        const chinese = render(<AvatarView text="韩梅梅" />);
        const mixed = render(<AvatarView text="A·B·C" />);

        expect(within(latin.container as HTMLElement).getByText('U')).toBeInTheDocument();
        expect(within(chinese.container as HTMLElement).getByText('梅梅')).toBeInTheDocument();
        expect(within(mixed.container as HTMLElement).getByText('A·')).toBeInTheDocument();
    });

    it('uses image, icon, and text content in priority order', () => {
        const image = render(<AvatarView src="/avatar.png" icon="user" text="User" />);
        const icon = render(<AvatarView icon="user" text="User" />);
        const avatarImage = within(image.container as HTMLElement).getByRole('img', {name: 'User'});

        expect(avatarImage).toHaveAttribute('src', '/avatar.png');
        expect(avatarImage.closest('.avatar')).toHaveClass('has-img');
        expect(image.container.querySelector('.icon-user')).toBeNull();
        expect(icon.container.querySelector('.avatar')).toHaveClass('has-icon');
        expect(icon.container.querySelector('.icon-user')).not.toBeNull();
        expect(within(icon.container as HTMLElement).queryByText('User')).not.toBeInTheDocument();
    });

    it('applies numeric sizing, shape precedence, and text scaling without layout reads', () => {
        render(<AvatarView text="Avatar" displayText="AB" size={20} circle rounded="lg" />);
        const text = screen.getByText('AB');
        const avatar = text.closest<HTMLElement>('.avatar')!;

        expect(avatar.style.width).toBe('20px');
        expect(avatar.style.height).toBe('20px');
        expect(avatar.style.fontSize).toBe('12px');
        expect(avatar).toHaveClass('rounded-full');
        expect(avatar).not.toHaveClass('rounded-lg');
        expect(text.style.transform).toBe('scale(0.625)');
        expect(text.dataset.actualsize).toBe('20');
    });

    it('derives deterministic colors and honors explicit foreground colors', () => {
        const generatedView = render(<AvatarView text="ZUI" code={12} />);
        const explicitView = render(<AvatarView text="ZUI" background="#ffffff" foreColor="#123456" />);
        const generated = within(generatedView.container as HTMLElement).getByText('Z').closest<HTMLElement>('.avatar')!;
        const explicit = within(explicitView.container as HTMLElement).getByText('Z').closest<HTMLElement>('.avatar')!;

        expect(generated.style.background).not.toBe('');
        expect(generated.style.color).not.toBe('');
        expect(explicit.style.background).not.toBe('');
        expect(explicit.style.color).not.toBe('');
        expect(explicit.getAttribute('style')).toContain('18, 52, 86');
    });

    it('evaluates function children with the Avatar view as this', () => {
        const renderBadge = function (this: AvatarView) {
            return <span className="badge">{this instanceof AvatarView ? 'Online' : 'Invalid receiver'}</span>;
        };
        render(
            <AvatarView text="User">
                {renderBadge}
            </AvatarView>,
        );

        expect(screen.getByText('Online')).toBeInTheDocument();
    });

    it('supports vanilla initialization, rerender, and Preact cleanup', async () => {
        const host = document.createElement('div');
        document.body.appendChild(host);
        const avatar = new AvatarComponent(host, {text: 'User', circle: true});
        await flushAnimationFrame();

        expect(within(host).getByText('U')).toBeInTheDocument();
        expect(host.querySelector('.avatar')).toHaveClass('rounded-full');

        avatar.render({displayText: 'ZU', text: undefined});
        expect(within(host).getByText('ZU')).toBeInTheDocument();

        avatar.destroy();
        expect(within(host).queryByText('ZU')).not.toBeInTheDocument();
        expect(Component.ALL.get(host)).toBeUndefined();
    });
});
