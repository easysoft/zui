function lockScroll() {
    const widthBar = typeof window.innerWidth == 'number'
        ? window.innerWidth - document.body.clientWidth
        : 17;
    document.body.style.paddingRight = `${(widthBar)}px`;
    document.body.classList.add('modal-open');
}

function unlockScroll() {
    document.body.style.paddingRight = '';
    document.body.classList.remove('modal-open');
}

function showModal(modal: HTMLElement, position: string) {
    lockScroll();
    modal.classList.add('block');
    adjustPosition(modal, position);
    modal.onclick = (event) => onClick(event, modal);
    window.addEventListener('resize', () => {
        adjustPosition(modal, position);
    });
}

function hideModal(ele: HTMLElement) {
    unlockScroll();
    ele.classList?.remove('block');
}

function adjustPosition(target: HTMLElement, position: string) {
    const $dialog = target.querySelector('.modal-dialog') as HTMLElement | null;
    if (!$dialog) {
        return;
    }

    const half = Math.max(0, (window.innerHeight - $dialog.clientHeight) / 2);
    if (position === 'fit') {
        $dialog.style.top = `${half > 50 ? Math.floor(half * 2 / 3) : half}px`;
        return;
    } if (position === 'center') {
        $dialog.style.top = `${half}px`;
        return;
    }
    $dialog.style.top = position;
}

function onClick(e: MouseEvent, modal: HTMLElement) {
    const elm = e.target as HTMLElement;
    if ( elm.dataset.dismiss === 'modal' || elm.parentElement?.dataset.dismiss === 'modal') {
        e.stopPropagation();
        hideModal(modal);
    }
}

function getTarget(elm: HTMLElement) {
    if (elm instanceof HTMLAnchorElement) {
        const href = elm.href || '';
        return href.match(/(?<selector>#\S+)$/)?.groups?.selector;
    }
    return elm.dataset.target;
}

document.addEventListener('click', (e) => {
    const elm = e.target as HTMLElement;
    if (elm.dataset.toggle === 'modal') {
        const target = getTarget(elm);
        if (!target) {
            return;
        }
        const modal = document.querySelector(target) as HTMLElement | null;
        if (!modal) {
            return;
        }

        showModal(modal, elm.dataset.position || 'fit');
    } else if (elm.className.includes('modal')) {
        hideModal(elm);
    }
});
