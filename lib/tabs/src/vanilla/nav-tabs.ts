import {Component, $} from '@zui/core';

const NAV_CLASS = 'nav-tabs';

export class NavTabs extends Component {
    static NAME = 'NavTabs';

    #navTarget?: HTMLElement;

    init(): void {
        const {$element} = this;
        if (!$element.is('body') && !$element.attr('data-toggle')) {
            $element.attr('data-toggle', 'tab');
        }
    }

    showTarget(): void {
        const {$element} = this;
        const target = ($element.attr('href') || $element.dataset('target') || $element.dataset('tab') || '') as string;
        if (target.startsWith('#')) {
            this.#navTarget = $(target)[0];
        }
        this.addActive($element.closest(`.${NAV_CLASS}`)[0] as HTMLElement, $element.parent()[0] as HTMLElement);
        if (!this.#navTarget) {
            return;
        }
        this.addActive($(this.#navTarget as HTMLElement)[0] as HTMLElement, this.#navTarget);
        this.#navTarget.dispatchEvent(new CustomEvent('show.zui3.tab'));
    }

    show(): void {
        const {$element} = this;
        const target = ($element.attr('href') || $element.dataset('target') || $element.dataset('tab') || '') as string;
        if (target.startsWith('#')) {
            this.#navTarget = $(target)[0];
        }
        if (!this.#navTarget) {
            return;
        }
        this.addActive(this.#navTarget.parentElement!, this.#navTarget);
        this.addActive($element.closest(`.${NAV_CLASS}`)[0] as HTMLElement, $element.parent()[0] as HTMLElement);
    }

    addActive(clickPane: HTMLElement, target: HTMLElement): void {
        const children = clickPane.children;
        const childrenArr = Array.from(children);
        childrenArr.forEach(item => {
            item.classList.remove('active');
            if (item.classList.contains('fade')) {
                item.classList.remove('in');
            }
        });
        target.classList.add('active');
        if (target.classList.contains('fade')) {
            this.transition(target).then(function () {
                target.dispatchEvent(new CustomEvent('shown.zui3.tab'));
            });
        }
    }

    transition(target:HTMLElement) {
        return new Promise<void>(function (resolve) {
            setTimeout(() => {
                target.classList.add('in');
                resolve();
            }, 100);
        });
    }
}

$(document).on('click', '[data-toggle="tab"],[data-tab]', (event: MouseEvent) => {
    event.preventDefault();
    NavTabs.ensure(event.target as Element).showTarget();
});
