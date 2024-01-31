import 'zui-dev';
import '@zui/button';
import '@zui/menu';
import '@zentao/icons';
import '@zui/form-control';
import '@zui/toolbar';
import '@zui/input-control';
import '@zui/list';
import {FileSelector} from './src/main';

onPageUpdate(() => {
    const fileSelector1 = new FileSelector('#fileSelectorExample1', {
        name: 'file',
        defaultFiles: [
            {name: 'file1.txt', size: 1024},
        ],
    });
    console.log('> fileSelector1', fileSelector1);

    const fileSelector2 = new FileSelector('#fileSelectorExample2', {
        mode: 'box',
        name: 'files[]',
        removeConfirm: '确定移除文件 "{name}" 吗？',
    });
    console.log('> fileSelector2', fileSelector2);
});
