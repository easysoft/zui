import 'zui-dev';
import '@zui/button';
import '@zui/menu';
import '@zentao/icons';
import '@zui/form-control';
import '@zui/toolbar';
import '@zui/avatar';
import '@zui/input-control';
import '@zui/list';
import {FileSelector, ImageSelector} from './src/main';

onPageUpdate(() => {
    const fileSelector1 = new FileSelector('#fileSelectorExample1', {
        name: 'file',
        defaultFiles: [
            {name: 'file1.txt', size: 1024, id: 1},
            {name: 'file2.txt', size: 2048, id: 2},
            {name: 'file3.txt', size: 4096, id: 3},
        ],
        deleteName: 'deleteFiles',
        renameName: 'renameFiles',
    });
    console.log('> fileSelector1', fileSelector1);

    const fileSelector2 = new FileSelector('#fileSelectorExample2', {
        mode: 'box',
        name: 'files[]',
        removeConfirm: '确定移除文件 "{name}" 吗？',
        accept: '.png,.md',
        tip: '点击或拖拽上传',
    });
    console.log('> fileSelector2', fileSelector2);

    const fileSelector3 = new FileSelector('#fileSelectorExample3', {
        mode: 'grid',
        name: 'files[]',
        removeConfirm: '确定移除文件 "{name}" 吗？',
        tip: '点击或拖拽上传',
    });
    console.log('> fileSelector3', fileSelector3);

    const imageSelector = new ImageSelector('#imageSelectorExample', {
        name: 'images[]',
        removeConfirm: '确定移除图片 "{name}" 吗？',
        tip: '点击或拖拽上传',
        maxFileCount: 8,
    });
    console.log('> imageSelector', imageSelector);
});
