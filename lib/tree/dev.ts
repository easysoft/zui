import 'zui-dev';
import '@zui/button';
import '@zui/menu';
import '@zui/icons';
import '@zui/form-control';
import '@zui/checkbox';
import {Tree} from './src/main';

onPageUpdate(() => {
    const tree = new Tree('#tree', {
        checkbox: true,
        indent: 20,
        collapsedIcon: 'folder-close',
        expandedIcon: 'folder-open',
        normalIcon: 'file-o',
        items: [
            {
                text: '首页',
                icon: 'home',
                url: '/#test',
            },
            {
                text: '动态',
                items: [
                    {
                        text: '新闻',
                    },
                    {
                        text: '行业',
                    },
                    {
                        text: '发布',
                        items: [
                            {
                                text: '桌面端',
                            },
                            {
                                text: '移动端',
                            },
                        ],
                    },
                ],
            },
            {
                text: '博客',
            },
        ],
    });
    console.log('> tree', tree);
});
