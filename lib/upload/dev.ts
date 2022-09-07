import Upload from './src/main';
import 'zui-dev';

onPageLoad(() => {
    const fileElm1 = document.querySelector('#example1') as HTMLInputElement | null;
    const listElm1 = document.querySelector('#example1-list') as HTMLInputElement | null;
    if (!fileElm1) {
        return;
    }
    const upload1 = new Upload(fileElm1, {
        listElm: listElm1,
        showDeleteBtn: true,
        showRenameBtn: true,
    });

    const fileElm2 = document.querySelector('#example2') as HTMLInputElement | null;
    const listElm2 = document.querySelector('#example2-list') as HTMLInputElement | null;
    if (!fileElm2) {
        return;
    }
    const upload2 = new Upload(fileElm2, {
        listElm: listElm2,
        showDeleteBtn: true,
        showRenameBtn: true,
    });
});
