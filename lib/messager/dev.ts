import '@zui/btn-group';
import '@zui/icons';
import './src/main';
import Messager from './src/vanilla';
import 'zui-dev';

onPageLoad(() => {
    const messagerButton = document.getElementById('messagerTrigger');
    console.log(messagerButton, 'messagerButton');
    if (messagerButton) {
        messagerButton.addEventListener('click', function () {
            console.log('123456');
            new Messager('这是一个漂浮消息。');
        });
    }
});
