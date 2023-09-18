import 'preact/debug';
import 'zui-dev';
import '@zui/icons';
import '@zui/button';
import '@zui/list/src/style';
import '@zui/dropdown';
import '@zui/cards';
import '@zui/menu/src/style';
import {Kanban} from './src/main';
import {createKanbanData} from './dev/create-kanban-data';

onPageLoad(() => {
    const kanban = new Kanban('#kanban', {
        data: createKanbanData(),
        colProps: {
            actions: [{
                type: 'dropdown',
                icon: 'ellipsis-v text-primary',
                caret: false,
                items: [
                    {text: '编辑', icon: 'edit'},
                ],
            }],
        },
    });
    console.log('> kanban', kanban);
});
