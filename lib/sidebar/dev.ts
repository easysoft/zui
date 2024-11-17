import 'zui-dev';
import {Sidebar} from './src/main';

onPageUpdate(() => {
    const sidebar = new Sidebar('#sidebar', {width: 300, parent: 'body', preserve: 'sidebar'});
    console.log('> sidebar', sidebar);

    const sidebarRight = new Sidebar('#sidebarRight', {
        width: 300,
        minWidth: 200,
        parent: 'body',
        side: 'right',
        animation: 1000,
        preserve: 'sidebarRight',
        // toggleBtn: false,
    });
    console.log('> sidebarRight', sidebarRight);
});
