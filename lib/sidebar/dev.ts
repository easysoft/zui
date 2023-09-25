import 'zui-dev';
import {Sidebar} from './src/main';

onPageUpdate(() => {
    const sidebar = new Sidebar('#sidebar');
    console.log('> sidebar', sidebar);
});
