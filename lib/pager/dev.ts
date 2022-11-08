import '@zui/form';
import '@zui/dropdown';
import '@zui/icons';
import {Pager} from './src/main';
import 'zui-dev';

onPageUpdate(() => {
    const pager = new Pager('#pagerExample', {
        items: [
            {type: 'info', text: '共 {recTotal} 项'},
            {type: 'link', format: '每页 {recPerPage} 项'},
            {type: 'link', page: 'first', icon: 'icon-double-angle-left'},
            {type: 'link', page: 'prev', icon: 'icon-angle-left'},
            {type: 'info', text: '{page}/{pageTotal}'},
            {type: 'link', page: 'next', icon: 'icon-angle-right'},
            {type: 'link', page: 'last', icon: 'icon-double-angle-right'},
        ],
        page: 2,
        recTotal: 101,
        recPerPage: 10,
        onClickItem: (info) => {
            console.log('> pager.onClickItem', info);
        },
    });
    console.log('> pager', pager);
});
