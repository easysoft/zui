import 'zui-dev';
import {Sidebar} from './src/main';

onPageUpdate(() => {
    const sidebar = new Sidebar('#sidebar', {width: 300});
    console.log('> sidebar', sidebar);
});
