function clearMenu() {
    const dropdown = document.querySelectorAll('.dropdown-menu');
    dropdown.forEach(item => {
        item.parentElement?.classList.remove('open');
    });
}

function toggle(elm: HTMLElement) {
    const parentElm = elm.parentElement;
    const nextElm = elm.nextElementSibling;

    if (
        !parentElm
        || !nextElm
        || parentElm.classList.contains('dropdown-hover')
    ) {
        return;
    }

    if (parentElm.className.includes('open')) {
        parentElm.classList.remove('open');
    } else {
        clearMenu();
        parentElm.classList.add('open');
    }
}

document.addEventListener('click', function (e) {
    const elm = e.target as HTMLElement;
    const button = elm.closest('[data-toggle=dropdown]') as HTMLElement | null;
    if (button) {
        toggle(button);
    } else {
        clearMenu();
    }
});
