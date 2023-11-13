import 'zui-dev';
import {Sidebar} from './src/main';

onPageUpdate(() => {
    const sidebar = new Sidebar('#sidebar', {width: 300, parent: 'body'});
    console.log('> sidebar', sidebar);

    const sidebarRight = new Sidebar('#sidebarRight', {width: 300, parent: 'body', side: 'right'});
    console.log('> sidebarRight', sidebarRight);
});
