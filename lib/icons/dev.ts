import {domReady} from '@zui/browser-helpers/src/dom-ready';
import icons from './assets/fonts/icons.json';
import './src/main';

domReady(() => {
    setTimeout(() => {
        const $ul = document.getElementById('iconsExample');
        if ($ul) {
            let ulChildrenStr = '';
            for (const icon in icons) {
                ulChildrenStr += `<li class="w-40 p-2 flex items-center"><i class="icon icon-${icon} mr-2"></i>${icon}</li>`;
            }
            $ul.innerHTML = ulChildrenStr;
        } else {
            console.log('iconsExample is not find!');
        }
    }, 300);
});
