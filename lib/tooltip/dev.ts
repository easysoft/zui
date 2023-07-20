import '@zui/button';
import 'zui-dev';
import {Tooltip} from './src/main';

onPageUpdate(() => {
    new Tooltip('#tooltipExample', {
        title: '点击展示提示内容',
        content: '哈哈哈',
        trigger: 'click',
    });
});
