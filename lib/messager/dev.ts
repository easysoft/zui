import '@zui/btn-group';
import '@zui/icons';
import './src/main';
// import Messager from './src/vanilla';
import MessagerItem from './src/vanilla';
// import MessagersHolder from './src/vanilla';
import 'zui-dev';

onPageLoad(() => {
    const messagerButton = document.getElementById('messagerTrigger');
    console.log(messagerButton, 'messagerButton');
    const placement = 'top';
    const messagersholder = document.querySelector('.messagersholder[data-placement=' + placement + ']');
    if (messagerButton) {
        messagerButton.addEventListener('click', function () {
            console.log('123456');
            console.log(messagersholder, 'messagersholder');
            new MessagerItem(messagersholder, {
                message:'这是一个漂浮消息。',
            });
        });
    }
});
