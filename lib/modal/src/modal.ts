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
            this.onShow(this.$modal);
        } else {
            this.onHide(this.$modal);
        }
        if (options.show && options.position) this.adjustPosition(options.position, null);
        this.$modal.onclick = (e) => this.onClick(e);

        window.onresize = () => {
            if (options.show && options.position) this.adjustPosition(options.position, null);
        };

        window.onbeforeunload = () => {
            this.onClear('destory');
        };
    }

    get modalClosable() {
        return this.$modal.dataset.modalClosable;
    }

    onClick(e): void {
        if ( e.target.dataset?.dismiss === 'modal' || e.target.parentElement.dataset?.dismiss === 'modal') {
            this.onHide(this.$modal);
            e.stopPropagation();
        }
    }

    // lockScroll() {
    //     let widthBar = 21;
    //     const root = document.documentElement;
    //     if (typeof window.innerWidth == 'number') {
    //         widthBar = window.innerWidth - root.clientWidth;
    //     }
    //     root.style.overflow = 'hidden';
    //     root.style.borderRight = widthBar + 'px solid transparent';
    // }

    // unlockScroll() {
    //     const root = document.documentElement;
    //     root.style.overflow = '';
    //     root.style.borderRight = '';
    // }

    onShow(ele): void {
        ele.classList.add('block');
    }

    onHide(ele): void {
        if (ele && ele.classList) {
            ele.classList.remove('block');
        }
    }

    onClear(type?: string): void {
        const modal: NodeListOf<HTMLElement> = document.querySelectorAll('.modal');
        modal.forEach(item => {
            if (item.dataset.modalClosable !== 'false' || type === 'destory') {
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
        const $dialog = this.$modal.getElementsByClassName('modal-dialog')[0];
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
            const dialogChildren = $dialog.childNodes;
            if (dialogChildren?.length) {
                const headerHeight = dialogChildren[1]?.getElementsByClassName('modal-header')[0].clientHeight || 0;
                const $dialogBody = dialogChildren[1]?.getElementsByClassName('modal-body')[0];
                const footerHeight = dialogChildren[1]?.getElementsByClassName('modal-footer')[0].clientHeight || 0;
                const bodyMaxHeight = winHeight - headerHeight - footerHeight;
                const bodyOverflow = $dialogBody && ($dialogBody.scrollHeight > bodyMaxHeight) ? 'auto' : 'visible';
                if ($dialogBody) {
                    $dialogBody.setAttribute('style', `max-height:${bodyMaxHeight}px;overflow:${bodyOverflow}`);
                }
            }
        }
       
    }

    isPlainObject(obj) : boolean {
        return Object.prototype.toString.call(obj) === '[object Object]';
    }
}
document.onclick = function (e) {
    if (e !== null && e.target instanceof HTMLElement) {
        if (e.target.dataset?.toggle === 'modal') {
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
            if (e.target.dataset.position) {
                options = {
                    position: e.target.dataset.position,
                    ...options,
                };
            }
            new Modal(element, options);
        } else if (!e.target.parentElement.className.includes('modal')) {
            new Modal(e, {}).onClear();
        }
    }
};
