import '@zui/btn-group';
import '@zui/icons';
import './src/main';
import {Messager} from './src/vanilla';
import 'zui-dev';

onPageLoad(() => {
    const messagerButton = document.getElementById('messagerTrigger');
    if (messagerButton) {
        messagerButton.addEventListener('click', function () {
            new Messager('这是一个漂浮消息。');
        });
    }
});
