import '@zui/btn-group';
import '@zui/icons';
import './src/main';
import 'zui-dev';
import {parseDataset} from '@zui/com-helpers/src/helpers/parse-dataset';
import {Messager} from './src/vanilla';

onPageUpdate(() => {
    document.addEventListener('click', (event) => {
        const toggleElement = (event.target as HTMLElement).closest<HTMLElement>('.messager-toggle');
        if (!toggleElement) {
            return;
        }
        const messager = Messager.show({content: '这是一个漂浮消息', ...parseDataset(toggleElement.dataset)});
        console.log('> messager', messager);
    });

    document.querySelector('#messageToggle1')?.addEventListener('click', () => {
        const messager = Messager.show({
            icon: 'icon-check-sign icon-2x',
            content: '包含标题和图标以及操作按钮',
            heading: '这是标题',
            style: {minWidth: 400, padding: 20},
            actions: {
                gap: 4,
                items: [
                    {
                        btnType: 'lighter-outline bg-none',
                        text: '了解更多',
                    },
                    {
                        btnType: 'lighter-outline bg-none',
                        text: '关闭',
                        'data-dismiss': 'messager',
                    },
                ],
            },
            time: 0,
        });
        console.log('> messager', messager);
    });
});
