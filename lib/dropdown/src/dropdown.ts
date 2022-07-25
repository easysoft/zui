export default class Dropdown {
    #toggleEle;

    #nextElement;

    constructor(element) {
        this.#toggleEle = element;
        this.#nextElement = element.nextElementSibling;
        if (this.#toggleEle.dataset?.toggle === 'dropdown' && !this.#toggleEle.parentElement.className.includes('dropdown-hover')) {
            this.toggle(this.#toggleEle.parentElement, this.#nextElement);
        }
    }

    toggle(parentEle, nextEle): void {
        if (parentEle.className.includes('open')) {
            this.hideMenu(nextEle);
            parentEle.className = parentEle.className.replace(' open', '');
        } else {
            this.showMenu(nextEle);
            parentEle.className = parentEle.className + ' open';
        }
    }

    showMenu(nextEle): void {
        nextEle.classList.add('block');
    }

    hideMenu(nextEle): void {
        nextEle.classList.add('hidden');
    }

    clearMenu(): void {
        const dropdown: NodeListOf<HTMLElement> = document.querySelectorAll('.dropdown-menu');
        dropdown.forEach(item => {
            item.classList.add('hidden');
            if (item.parentElement) {
                item.parentElement.className = item.parentElement.className.replace(' open', '');
            }
        });
    }
}

document.onclick = function (e) {
    if (e !== null && e.target instanceof HTMLElement) {
        if (e.target.dataset.toggle === 'dropdown') {
            new Dropdown(e.target);
        } else {
            new Dropdown(e).clearMenu();
        }
    }
};

