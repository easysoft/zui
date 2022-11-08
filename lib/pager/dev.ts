import '@zui/form';
import '@zui/dropdown';
import '@zui/icons';
import {Pager} from './src/main';
import 'zui-dev';

onPageUpdate(() => {
    const pager = new Pager('#pagerExample', {
        items: [
            {type: 'info', text: '共 {recTotal} 项'},
            {type: 'size-menu', text: '每页 {recPerPage} 项'},
            {type: 'link', page: 'first', icon: 'icon-double-angle-left', hint: '第一页'},
            {type: 'link', page: 'prev', icon: 'icon-angle-left', hint: '上一页'},
            {type: 'info', text: '{page}/{pageTotal}'},
            {type: 'link', page: 'next', icon: 'icon-angle-right', hint: '下一页'},
            {type: 'link', page: 'last', icon: 'icon-double-angle-right', hint: '最后一页'},
        ],
        page: 1,
        recTotal: 101,
        recPerPage: 10,
        linkCreator: '#?page={page}&recPerPage={recPerPage}',
        onClickItem: (info) => {
            console.log('> pager.onClickItem', info);
        },
    });
    console.log('> pager', pager);
});
