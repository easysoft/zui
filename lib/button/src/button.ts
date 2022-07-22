import './vars.css';
import './btn.css';

export class ZuiButton extends HTMLElement {
    $button: any;

    constructor() {
        super();
      
        this.$button = document.createElement('button');
        const text:string = this.innerHTML;
        this.innerHTML = '';
        this.$button.innerHTML = text;
        this.$button.classList.add('btn');
        this.append(this.$button);
        this.$button.addEventListener('click', () => this.onClick());
    }

    connectedCallback() {
        if (this.$button && this.type) {
            this.$button.classList.add(`-${this.type}`);
        }
        if (this.$button && this.size) {
            this.$button.classList.add(`-${this.size}`);
        }
        if (this.$button && this.rounded) {
            this.$button.classList.add(`-rounded-${this.rounded}`);
        }
    }

    get type() {
        return this.getAttribute('type');
    }

    set type(value) {
        if (!this.getAttribute('type')) {
            this.removeAttribute('type');
        } else {
            this.setAttribute('type', value);
        }
    }

    get size() {
        return this.getAttribute('size');
    }

    set size(value) {
        if (!this.getAttribute('size')) {
            this.removeAttribute('size');
        } else {
            this.setAttribute('size', value || 'base');
        }
    }

    get loading() {
        return this.getAttribute('loading');
    }

    set loading(value) {
        if (this.getAttribute('loading')) {
            this.setAttribute('loading', value || '');
        } else {
            this.removeAttribute('loading');
        }
    }

    get rounded() {
        return this.getAttribute('rounded');
    }

    set rounded(value) {
        if (this.getAttribute('rounded')) {
            this.setAttribute('rounded', value || '');
            this.$button.setAttribute('class', `${this.class} -rounded-full`);
        } else {
            this.removeAttribute('rounded');
        }
    }

    get disabled() {
        return this.getAttribute('disabled');
    }

    set disabled(value) {
        if (this.getAttribute('disabled')) {
            this.setAttribute('disabled', value || '');
        } else {
            this.removeAttribute('disabled');
        }
    }

    static get observedAttributes() {
        return ['type', 'size', 'rounded', 'disabled', 'loading', 'outline'];
    }

    get class() {
        return this.$button.classList;
    }

    attributeChangedCallback(name: string) {
        this.render(name);
    }

    onClick() {
        console.log('click event');
    }

    render(name: string) {
        console.log(name);
    }
}

if (!customElements.get('zui-button')) {
    customElements.define('zui-button', ZuiButton);
}
