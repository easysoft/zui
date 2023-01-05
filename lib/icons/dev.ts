import 'zui-dev';
import icons from './public/icons.json';
import './src/main';

onPageUpdate(() => {
    const $ul = document.getElementById('iconsExample');
    if ($ul) {
        $ul.innerHTML = Object.entries(icons).map(([icon]) => `<li class="w-40 p-2 flex items-center"><i class="icon icon-${icon} mr-2"></i>${icon}</li>`).join('\n');
    } else {
        console.log('iconsExample is not find!');
    }
});
