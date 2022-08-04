export default class Modal {
    $modal: HTMLElement;

    options: {
        position: string | number;
    };

    constructor(element, options) {
        this.$modal = element;
        options = {
            position: 'fit',
            ...options,
        };
        this.options = options;
        if (options.show) {
            this.show(this.$modal);
        } else {
            this.hide(this.$modal);
        }
        if (options.show && options.position) this.adjustPosition(options.position);
        this.$modal.onclick = (e) => {
            if (e.target.dataset.dismiss && e.target.dataset.dismiss === 'modal' ||
                e.target.parentElement.dataset.dismiss && e.target.parentElement.dataset.dismiss === 'modal'
            ) {
                this.hide(this.$modal);
                e.stopPropagation();
            }
            
        };
    }

    get modalClosable() {
        return this.$modal.dataset.modalClosable;
    }

    toggle(ele): void {
        ele.classList.add('block');
    }

    show(ele): void {
        document.body.style.overflow = 'hidden';
        ele.classList.add('block');
    }

    hide(ele): void {
        if (ele && ele.classList) {
            document.body.style.overflow = 'auto';
            ele.classList.remove('block');
        }
    }

    clear(): void {
        const modal: NodeListOf<HTMLElement> = document.querySelectorAll('.modal');
        modal.forEach(item => {
            if (item.dataset.modalClosable !== 'false') {
                item.classList.remove('block');
            }
        });
    }

    adjustPosition(position, delay): void {
        clearTimeout(this.reposTask);
        if (delay) {
            this.reposTask = setTimeout(this.adjustPosition.bind(this, position, 0), delay);
            return;
        }
        if (position === undefined) position = this.options.position;
        if (position === undefined || position === null) return;
        const $dialog = this.$modal.getElementsByClassName('modal-dialog');
        const winHeight = window.innerHeight;
        const half = Math.max(0, (winHeight - $dialog[0].clientHeight) / 2);
        let top = null;
        if (position === 'fit') {
            top = `${half > 50 ? Math.floor(half * 2 / 3) : half}px`;
        } else if (position === 'center') {
            top = `${half}px`;
        } else if (!this.isPlainObject(position)) {
            top = position;
        }
        $dialog[0].setAttribute('style', `top: ${top}`);
    }

    isPlainObject(obj) : boolean {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }
}
document.onclick = function (e) {
    if (e !== null && e.target instanceof HTMLElement) {
        if (e.target.dataset.toggle && e.target.dataset.toggle === 'modal') {
            let target =  e.target.dataset.target;
            let options = {
                show: true,
            };
            if (e.target.localName === 'a') {
                const href = e.target.href || '';
                target = href && href.replace(/.*(?=#[^\s]+$)/, '');
            }
            if (!target.length) return;
            const element = document.querySelector(target);
            if ( e.target.dataset.position) {
                options = {
                    position: e.target.dataset.position,
                    ...options,
                };
            }
            new Modal(element, options);
        } else {
            new Modal(e, {}).clear();
            // console.log('点击其他');
        }
    }
};
