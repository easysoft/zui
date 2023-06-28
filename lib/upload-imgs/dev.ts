import 'zui-dev';
import '@zui/icons';
import {UploadImgs} from './src/main';

onPageLoad(() => {
    const uploadElm3 = document.querySelector('#example3') as HTMLElement | null;
    if (!uploadElm3) {
        return;
    }

    new UploadImgs(uploadElm3, {
        name: 'upload3',
        multiple: true,
        deleteBtn: true,
        renameBtn: true,
        draggable: true,
        tip: '可点击添加或拖拽上传，不超过50M',
        duplicatedHint: '文件名重复',
        exceededCountHint: '超出上传文件数量限制',
        exceededSizeHint: '超出上传文件大小限制',
    });
});
