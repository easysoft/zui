import 'zui-dev';
import {List} from './src/main';

onPageUpdate(() => {
    const simpleList = new List('#simpleList', {
        items: [
            {text: '文本', onClick: () => console.log('ok')},
            {title: '标题'},
            {type: 'heading', title: 'heading'},
            {type: 'divider'},
            {title: '大标题', subtitle: '副标题'},
            {title: '链接', subtitle: 'https://openzui.com', url: 'https://openzui.com'},
        ],
    });
    console.log('> simpleList', simpleList);
});
