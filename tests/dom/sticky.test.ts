import {describe, expect, it, vi} from 'vitest';
import {Sticky} from '@zui/core';
import {flushAnimationFrame} from '../setup/dom';

describe('Sticky', () => {
    it('skips measurement when the scroll container does not exist', async () => {
        const element = document.createElement('div');
        document.body.append(element);
        const measure = vi.spyOn(element, 'getBoundingClientRect');
        new Sticky(element, {scrollContainer: '.missing-container'});

        await flushAnimationFrame();

        expect(element.style.position).toBe('sticky');
        expect(measure).not.toHaveBeenCalled();
    });

    it('measures the initial position and updates it after scrolling', async () => {
        const container = document.createElement('div');
        container.className = 'scroll-container';
        const element = document.createElement('div');
        container.append(element);
        document.body.append(container);
        new Sticky(element, {scrollContainer: '.scroll-container'});

        await flushAnimationFrame();
        expect(element).not.toHaveClass('is-pinned');

        container.scrollTop = 20;
        container.dispatchEvent(new Event('scroll'));
        await flushAnimationFrame();
        expect(element).toHaveClass('is-pinned');
    });

    it('cancels initial measurement and scroll listeners when destroyed', async () => {
        const container = document.createElement('div');
        container.className = 'scroll-container';
        const element = document.createElement('div');
        container.append(element);
        document.body.append(container);
        const measure = vi.spyOn(container, 'getBoundingClientRect');
        const sticky = new Sticky(element, {scrollContainer: '.scroll-container'});

        sticky.destroy();
        container.dispatchEvent(new Event('scroll'));
        await flushAnimationFrame();

        expect(measure).not.toHaveBeenCalled();
    });
});
