// import btnClass from './btn.css';

export class ZuiButton extends HTMLElement {
    shadowRoot: ShadowRoot;

    $button: any;

    $loading: any;

    $buttonInner: any;

    constructor() {
        super();
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .btn {
                    @apply px-3 h-8 inline-flex items-center justify-center;
                    border: 1px solid var(--btn-border-color);
                    background: var(--btn-background);
                    border-radius: var(--btn-radius);
                }
                .btn.-xs {
                    @apply text-xs px-1 h-5;
                }
                .btn.-sm {
                    @apply text-sm px-2 h-6;
                }
                .btn.-lg {
                    @apply text-lg px-4 h-10;
                }
                .btn.-xl {
                    @apply text-xl px-5 h-12;
                }

                .btn.-square {
                    @apply px-0 aspect-square;
                }
            </style>
            <button class='btn'>
                <span class='inner'><slot></slot></span>
            </button>
        `;
        this.shadowRoot = this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        /* const node = document.createElement('style');
        node.innerHTML = '@import "./btn.css";';
        this.shadowRoot.append(node);
        const sheet = new CSSStyleSheet();
        sheet.replace(node.innerHTML);
        this.shadowRoot.adoptedStyleSheets = [sheet]; */
        /* 3 fetch('./btn.css').then(response => response.text()).then(data => {
            const node2 = document.createElement('style');
            node2.innerHTML = data;
            this.shadowRoot.appendChild(node2);
        }); */
        this.$button = this.shadowRoot.querySelector('button');
        this.$loading = this.shadowRoot.querySelector('loading');
        this.$buttonInner = this.shadowRoot.querySelector('.inner');
        this.$button.addEventListener('click', () => this.onClick());
    }

    connectedCallback() {
        if (this.type && this.$button) {
            this.$button.setAttribute('class', `${this.class} -${this.type}`);
        }
    }

    get type() {
        return this.getAttribute('type');
    }

    set type(value) {
        if (this.getAttribute('type') === null) {
            this.removeAttribute('type');
        } else {
            this.setAttribute('type', value || '');
        }
    }

    get size() {
        return this.getAttribute('size');
    }

    set size(value) {
        if (this.getAttribute('size') === null) {
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
        if (name === 'rounded') {
            this.$button.classList.push('-rounded-full');
        }
    }
}

if (!customElements.get('zui-button')) {
    customElements.define('zui-button', ZuiButton);
}
