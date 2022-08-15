export default class Modal {
    $modal: HTMLElement;

    options: {
        position: string | number;
        type: string;
    };

    reposTask: NodeJS.Timer | null = null;

    constructor(element, options) {
        this.$modal = element;
        if (!this.$modal) return;
        this.options = options;
        if (options.type === 'show') {
            this.onShow(this.$modal);
        } else {
            this.onHide(this.$modal);
        }
        if (options.type === 'show' && options.position) this.adjustPosition(options.position, null);
        this.$modal.onclick = (e) => this.onClick(e);
        window.addEventListener('resize', () => {
            if (options.type === 'show' && options.position) this.adjustPosition(options.position, null);
        });
    }

    get modalClosable() {
        return this.$modal.dataset.modalClosable;
    }

    onClick(e) {
        if ( e.target.dataset?.dismiss === 'modal' || e.target.parentElement.dataset?.dismiss === 'modal') {
            this.onHide(this.$modal);
            e.stopPropagation();
        }
    }

    lockScroll() {
        let widthBar = 17;
        if (typeof window.innerWidth == 'number') {
            widthBar = window.innerWidth - document.body.clientWidth;
        }
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${(widthBar)}px`;
        document.body.classList.add('modal-open');
    }

    unlockScroll() {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
        document.body.classList.remove('modal-open');
    }

    onShow(ele: HTMLElement) {
        this.lockScroll();
        ele.classList.add('block');
    }

    onHide(ele: HTMLElement) {
        if (ele && ele.classList) {
            this.unlockScroll();
            ele.classList.remove('block');
        }
    }

    onClear(type?: string) {
        const modal: NodeListOf<HTMLElement> = document.querySelectorAll('.modal');
        modal.forEach(item => {
            if (item.dataset.modalClosable !== 'false' || type === 'destory') {
                item.classList.remove('block');
            }
        });
    }

    adjustPosition(position:string | number, delay: number) {
        clearTimeout(this.reposTask);
        if (delay) {
            this.reposTask = setTimeout(this.adjustPosition.bind(this, position, 0), delay);
            return;
        }
        if (position === undefined) position = this.options.position;
        if (position === undefined || position === null) return;
        const $dialog = this.$modal.getElementsByClassName('modal-dialog')[0];
        if (!$dialog) return;
        const winHeight = window.innerHeight;
        const half = Math.max(0, (winHeight - $dialog.clientHeight) / 2);
        let top = null;
        if (position === 'fit') {
            top = `${half > 50 ? Math.floor(half * 2 / 3) : half}px`;
        } else if (position === 'center') {
            top = `${half}px`;
        } else if (!this.isPlainObject(position)) {
            top = position;
        }
        $dialog.setAttribute('style', `top: ${top}`);

        if ($dialog.className.includes('-fullscreen')) {
            let $dialogContent = null;
            if ($dialog.childNodes?.length && $dialog.childNodes.length === 1) {
                $dialogContent = $dialog.childNodes[0];
            } else {
                $dialogContent = $dialog.childNodes[1];
            }
            if ($dialogContent) {
                const headerHeight = $dialogContent?.getElementsByClassName('modal-header')[0].clientHeight || 0;
                const $dialogBody = $dialogContent?.getElementsByClassName('modal-body')[0];
                const footerHeight = $dialogContent?.getElementsByClassName('modal-footer')[0].clientHeight || 0;
                const bodyMaxHeight = winHeight - headerHeight - footerHeight;
                const bodyOverflow = $dialogBody && ($dialogBody.scrollHeight > bodyMaxHeight) ? 'auto' : 'visible';
                if ($dialogBody) {
                    $dialogBody.setAttribute('style', `max-height:${bodyMaxHeight}px;overflow:${bodyOverflow}`);
                }
            }
        }

    }

    isPlainObject(obj): boolean {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }
}
document.addEventListener('click', (e) => {
    if (e !== null && e.target instanceof HTMLElement) {
        if (e.target.dataset?.toggle === 'modal') {
            let target =  e.target.dataset.target;

            if (e.target.localName === 'a') {
                const href = e.target?.href || '';
                target = href && href.replace(/.*(?=#[^\s]+$)/, '');
            }
            if (!target.length) return;
            const element = document.querySelector(target);
            const options = {
                type: 'show',
                position: e.target.dataset?.position || 'fit',
            };
            new Modal(element, options);
        } else if (!e.target.parentElement.className.includes('modal')) {
            new Modal(e, {type: 'hide'}).onClear();
        }
    }
});
