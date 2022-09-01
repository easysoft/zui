export default class NavTabs {
    #nav;

    #navTarget;

    constructor(element) {
        this.#nav = element;
        this.#navTarget = document.querySelector(element.getAttribute('data-target'))
                       || document.querySelector(element.getAttribute('data-tab'))
                       || document.querySelector(element.getAttribute('href'));
    }

    showTarget(): void {
        this.addActive(this.#nav.parentElement.parentElement, this.#nav.parentElement);
        this.addActive(this.#navTarget.parentElement, this.#navTarget);
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
            setTimeout(() => {
                target.classList.add('in');
            }, 100);
        }
    }
}

document.addEventListener('click', function (e) {
    if (e !== null && e.target instanceof HTMLElement) {
        if (e.target.dataset.toggle === 'tab' || e.target.getAttribute('data-tab')) {
            e.preventDefault();
            new NavTabs(e.target).showTarget();
        }
    }
});

