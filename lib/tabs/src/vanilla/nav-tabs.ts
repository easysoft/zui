import {ComponentBase} from '@zui/com-helpers/src/helpers/vanilla-component';

export class NavTabs extends ComponentBase<T> {
    static NAME = 'NavTabs';

    static NAV_CLASS = 'nav-tabs';

    static EVENTS = true;

    static TOGGLE_SELECTOR = '[data-toggle="tab"]';

    #navTarget: HTMLElement;

    init(): void {
        const {element} = this;
        if (element !== document.body && !element.hasAttribute('data-toggle')) {
            element.setAttribute('data-toggle', 'tab');
        }
    }

    showTarget(): void {
        const target = this.element.getAttribute('href') || this.element.dataset.target || this.element.dataset.tab;
        if (target?.startsWith('#')) {
            this.#navTarget = document.querySelector<HTMLElement>(target);
        }
        this.addActive(this.element.closest(`.${(this.constructor as typeof NavTabs).NAV_CLASS}`), this.element.parentElement);
        if (!this.#navTarget) {
            return;
        }
        this.addActive(this.#navTarget.parentElement, this.#navTarget);
        this.#navTarget.dispatchEvent(new CustomEvent('show.zui3.tab'));
    }

    show(): void {
        const target = this.element.getAttribute('href') || this.element.dataset.target || this.element.dataset.tab;
        if (target?.startsWith('#')) {
            this.#navTarget = document.querySelector<HTMLElement>(target);
        }
        if (!this.#navTarget) {
            return;
        }
        this.addActive(this.#navTarget.parentElement, this.#navTarget);
        this.addActive(this.element.closest(`.${(this.constructor as typeof NavTabs).NAV_CLASS}`), this.element.parentElement);
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

document.addEventListener('click', (event: MouseEvent) => {
    if (event.target instanceof HTMLElement) {
        if (event.target.dataset.toggle === 'tab' || event.target.getAttribute('data-tab')) {
            event.preventDefault();
            new NavTabs(event.target).showTarget();
        }
    }
});
