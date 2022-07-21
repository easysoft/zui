export class Input {
    constructor() {
        const inputs = document.querySelectorAll('.input');
        if (inputs.length) {
            inputs.forEach(item => {
                console.log(item);
                item.addEventListener('focus', (e) => this.focus(e, item));
                item.addEventListener('change', (e) => this.change(e));
            });
        }
        
        this.change(); 
        document.onclick = () => {
            this.hideClear();
        };
    }

    change(): void {
        this.showClear();
    }

    focus(e, next): void {
        console.log(e, next);  
    }

    showClear(): void {
        const showTag = document.querySelector('[data-clearable]');
        if (showTag && showTag.querySelector('#clear')) {
            showTag.style.display = 'block';
        }
    }

    hideClear(): void {
        const tag = document.querySelector('[data-clearable]').querySelector('#clear');
        if (tag) {
            tag.style.display = 'none';
        }
    }

    clear(e): void {
        e.stopPropagation();
        const tag = document.querySelector('[data-clearable]').getElementsByTagName('input').value;
        if (tag) {
            document.querySelector('[data-clearable]').getElementsByTagName('input').value = '';
        }
    }
}

export const input = new Input();
