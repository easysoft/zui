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
    const placementButtons = Array.from(document.getElementsByClassName('messagerTrigger'));
    console.log(placementButtons);
    placementButtons.forEach(item=>{
        item.addEventListener('click', function (e) {
            const btn = e.target as HTMLElement;
            const placement = btn.getAttribute('data-placement') as MessagerOptions['placement'];
            new Messager('这是一个漂浮消息。', {
                placement,
            });
        });
    });
});
