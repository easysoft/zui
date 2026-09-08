import 'zui-dev';
import {Sidebar} from './src/main';

let sidebars: Sidebar[] = [];

onPageUpdate(() => {
    sidebars.forEach(sidebar => sidebar.destroy());
    const sidebar = new Sidebar('#sidebar', {width: 300, parent: 'body', preserve: 'sidebar', shareWidth: 'sidebar-demo'});
    console.log('> sidebar', sidebar);

    const sidebarRight = new Sidebar('#sidebarRight', {
        width: 300,
        minWidth: 200,
        parent: 'body',
        side: 'right',
        animation: 1000,
        preserve: 'sidebarRight',
        shareWidth: 'sidebar-demo',
        // toggleBtn: false,
    });
    console.log('> sidebarRight', sidebarRight);
    sidebars = [sidebar, sidebarRight];
});
