export class NavTabs {
    #nav;

    #navTarget;

    constructor(element) {
        this.#nav = element;
        this.#navTarget = document.querySelector(element.getAttribute('data-target')) ||
                          document.querySelector(element.getAttribute('data-tab')) ||
                          document.querySelector(element.getAttribute('href'));
    }

    showTarget(): void {
        this.addActive(this.#nav.parentElement.parentElement, this.#nav.parentElement);
        this.addActive(this.#navTarget.parentElement, this.#navTarget);
        this.#navTarget.dispatchEvent(new CustomEvent('show.zui3.tab'));
    }

    show(): void {
        this.#navTarget = this.#nav;
        this.addActive(this.#navTarget.parentElement, this.#navTarget);
        this.#nav = document.querySelector(`[href='#${this.#navTarget.getAttribute('id')}']`) ||
                    document.querySelector(`[data-tab='#${this.#navTarget.getAttribute('id')}']`) ||
                    document.querySelector(`[data-target='#${this.#navTarget.getAttribute('id')}']`);
        this.addActive(this.#nav.parentElement.parentElement, this.#nav.parentElement);
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
            this.transition(target).then(function (data) {
                target.dispatchEvent(new CustomEvent('shown.zui3.tab'));
            });
        }
    }

    transition(target:HTMLElement) {
        return new Promise<void>(function (resolve, reject) {
            setTimeout(() => {
                target.classList.add('in');
                resolve();
            }, 100);
        });
    }
}

document.addEventListener('click', function (e) {
    if (e.target instanceof HTMLElement) {
        if (e.target.dataset.toggle === 'tab' || e.target.getAttribute('data-tab')) {
            e.preventDefault();
            new NavTabs(e.target).showTarget();
        }
    }
});


