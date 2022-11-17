import '@zui/icons';
import 'zui-dev';
import {Picker} from './src/main';
// not-hide-menu
onPageUpdate(() => {
    new Picker('#pickerExp2', {
        // maxDropWidth: '100',
        menu: {
            items: [
                {text: '复制复制复制复制复'},
                {text: '粘贴'},
                {text: '剪切'},
                {text: '导入'},
                {text: '导出'},
            ],
        },
    });
});