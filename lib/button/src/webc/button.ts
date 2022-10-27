export interface AttrProps {
    name: string;
    value: string | number;
}

export const getAttributes = (element: HTMLElement)  => {
    const attrs: Record<string, string> = {};
    if (!element) {
        return attrs;
    }
    const attrSource = Object.values(element.attributes);
    if (attrSource && attrSource.length > 0) {
        attrSource.forEach(AttrProps => {
            const {name, value} = AttrProps;
            attrs[name] = value;
        });
    }
    return attrs;
};

export class ZuiButton extends HTMLElement {
    $button: HTMLElement;

    $icon: HTMLElement;

    onClick: null;

    constructor() {
        super();

        this.$button = document.createElement('button');
        const text:string = this.innerHTML;
        this.innerHTML = '';
        this.$button.innerHTML = text;
        if (this.icon) {
            this.$icon = document.createElement('i');
            this.addClass(this.$icon, `icon ${this.icon}`);
            this.$button.prepend(this.$icon);
        }
        this.$button.classList.add('btn');
        this.append(this.$button);
    }

    connectedCallback() {
        this.initStyle();
        this.initEventListen();
        if (this.isDisabled) {
            this.$button.setAttribute('disabled', 'disabled');
        }
        this.$button.addEventListener('keydown', (ev) => {
            switch (ev.keyCode) {
                case 13:
                    ev.stopPropagation();
                    break;
                default:
                    break;
            }
        });

    }

    initStyle() {
        const attrs = getAttributes(this);
        if (attrs) {
            for (const key in attrs) {
                if (['type', 'size', 'rounded', 'outline'].includes(key)) {
                    this.addClass(this.$button, `-${attrs[key]}`);
                }
            }
        }
    }

    initEventListen() {
        if (this.isDisabled || this.loading) {
            return false;
        }
    }

    addClass(element: HTMLElement, name:string): void {
        if (element) {
            element.classList.add(name);
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
            this.addClass(this.$button, `-${this.type}`);
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
            this.addClass(this.$button, `-${value}`);
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
            this.addClass(this.$button, `-${value}`);
        } else {
            this.removeAttribute('rounded');
        }
    }

    get isDisabled() {
        return this.getAttribute('isDisabled') !== null;
    }

    set isDisabled(value:string | boolean) {
        if (value === null || value === false) {
            this.removeAttribute('isDisabled');
        } else {
            this.setAttribute('isDisabled', '');
        }
    }

    get icon() {
        return this.getAttribute('icon');
    }

    set icon(value) {
        this.setAttribute('icon', value);
    }

    static get observedAttributes() {
        return ['type', 'size', 'rounded', 'disabled', 'loading', 'outline'];
    }

    get class() {
        return this.$button.classList;
    }

    attributeChangedCallback(name: string, newValue: string) {
        if (name === 'isDisabled' && this.$button) {
            if (newValue !== null) {
                this.$button.setAttribute('disabled', 'disabled');
            } else {
                this.$button.removeAttribute('disabled');
            }
        }
        if (name === 'loading' && this.$button) {
            if (newValue !== null) {
                this.$button.setAttribute('disabled', 'disabled');
            } else {
                this.$button.removeAttribute('disabled');
            }
        }
        if (name === 'icon' && this.$icon && newValue) {
            this.addClass(this.$icon, `-${newValue}`);
        }
        this.render();
    }

    render() {

    }
}

if (!customElements.get('zui-button')) {
    customElements.define('zui-button', ZuiButton);
}
