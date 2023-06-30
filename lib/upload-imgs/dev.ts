import 'zui-dev';
import '@zui/icons';
import {UploadImgs} from './src/main';

onPageLoad(() => {
    const uploadElm = document.querySelector('#example') as HTMLElement | null;
    if (!uploadElm) {
        return;
    }

    new UploadImgs(uploadElm, {
        name: 'upload',
        multiple: true,
        deleteBtn: true,
        renameBtn: true,
        draggable: true,
        tip: '可点击添加或拖拽上传，图片格式支持jpg、jpeg、gif、png',
        duplicatedHint: '文件名重复',
        exceededCountHint: '超出上传文件数量限制',
        exceededSizeHint: '超出上传文件大小限制',
    });
});
