import '@zui/btn-group';
import '@zui/icons';
import './src/main';
import {Messager} from './src/vanilla';
import {MessagerOptions} from './src/types/messager-options';
import 'zui-dev';

onPageLoad(() => {
    const messagerButton = document.getElementById('messagerTrigger');
    if (messagerButton) {
        messagerButton.addEventListener('click', function () {
            new Messager('这是一个漂浮消息。');
        });
    }
    const placementButtons = Array.from(document.getElementsByClassName('placementTrigger'));
    placementButtons.forEach(item=>{
        item.addEventListener('click', function (e) {
            const btn = e.target as HTMLElement;
            const placement = btn.getAttribute('data-placement') as MessagerOptions['placement'];
            new Messager(item.innerHTML + '的漂浮消息。', {
                placement,
            });
        });
    });

    const typeButtons = Array.from(document.querySelectorAll('[data-type]'));
    typeButtons.forEach(item => {
        item.addEventListener('click', function () {
            const type = item.getAttribute('data-type') as MessagerOptions['type'];
            const message = item.getAttribute('data-message') as MessagerOptions['message'];
            new Messager(message + '的漂浮消息。', {
                type,
            });
        });
    });
});
