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
        tip: '请拖拽文件到此处',
        commentText: '注：请上传"jpg, jpeg, gif, png"格式的图片，程序会以文件名作为标题，以图片作为内容。',
        duplicatedHint: '文件名重复',
        exceededCountHint: '超出上传文件数量限制',
        exceededSizeHint: '超出上传文件大小限制',
    });
});
