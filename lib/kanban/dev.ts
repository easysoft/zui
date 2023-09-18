import 'preact/debug';
import 'zui-dev';
import {$} from '@zui/core';
import '@zui/icons';
import '@zui/button';
import '@zui/list/src/style';
import '@zui/dropdown';
import '@zui/checkbox';
import '@zui/cards';
import '@zui/menu/src/style';
import {Kanban} from './src/main';
import {createKanbanData} from './dev/create-kanban-data';

onPageLoad(() => {
    const kanban = new Kanban('#kanban', {
        data: createKanbanData(),
        colProps: {
            /* 通过 actions 自定义列操作按钮（actions 还可以为一个回调函数动态返回操作按钮设置）。 */
            actions: [{
                icon: 'check-plus text-primary',
                onClick: () => console.log('Click add'),
            }, {
                type: 'dropdown',
                icon: 'ellipsis-v text-primary',
                caret: false,
                items: [ // 下拉菜单内容
                    {text: '编辑', icon: 'edit'},
                ],
            }],
        },
        itemRender: (info) => {
            /* 自定义渲染卡片，通过 {html: ...} 返回卡片 HTML内容。 */
            return {className: 'card kanban-item card-list-item item', html: `<div class="card-heading"><span class="card-title">${info.item.title}</span></div>`};
        },
        getCol(col) {
            /* 通过 content 属性自定义列额外内容。 */
            return $.extend({
                contentClass: 'bg-surface shadow-sm',
                content: function (info) {
                    const id = `content-${info.lane}-${info.name}`;
                    const toggleID = `toggle-${info.lane}-${info.name}`;
                    return {attrs: {id: id, className: 'relative p-2'}, html: [
                        '<div class="row border mb-2">',
                        '   <div class="cell w-1/3 col items-center justify-center">',
                        '       <div>120 <span class="text-sm text-gray">sp</span></div>',
                        '       <div>工作量</div>',
                        '   </div>',
                        '   <div class="cell w-1/3 border-l col items-center justify-center">',
                        '       <div>120 <span class="text-sm text-gray">sp</span></div>',
                        '       <div>工作量</div>',
                        '   </div>',
                        '   <div class="cell w-1/3 border-l col items-center justify-center">',
                        '       <div>120 <span class="text-sm text-gray">sp</span></div>',
                        '       <div>工作量</div>',
                        '   </div>',
                        '</div>',
                        `<style>#${id} .as-expand-content {display: none}#${toggleID}:checked + .as-expand-content {display: block}#${toggleID}:checked + .as-expand-content + .as-collapse-content {visibility: hidden}#${id} .as-expand-content::before {content:' ';display:block;position:absolute;left:0;right:0;bottom:-10px;height:10px;background-image:linear-gradient(180deg,rgba(0,0,0,.05),transparent),linear-gradient(180deg,rgba(0,0,0,.05),transparent 50%)}</style>`,
                        `<input type="checkbox" class="hidden" id="${toggleID}" />`,
                        '<div class="as-expand-content bg-surface px-3 py-1 absolute left-0 right-0 top-10">',
                        '   <div>用户需求</div>',
                        '   <div>描述文本描述文本描述文本描述文本描述文本描述文本</div>',
                        '   <hr class="my-2">',
                        '   <div>用户需求</div>',
                        '   <div>描述文本描述文本描述文本描述文本描述文本描述文本</div>',
                        `   <div class="center"><label for="${toggleID}" class="btn light bg-opacity-50 ring-0 size-xs w-7 text-gray rounded"><i class="icon icon-chevron-up scale-75"></i></label></div>`,
                        '</div>',
                        `<div class="as-collapse-content center"><label for="${toggleID}" class="btn light bg-opacity-50 ring-0 size-xs w-7 text-gray rounded"><i class="icon icon-chevron-down scale-75"></i></label></div>`,
                    ].join('')};
                },
            }, col);
        },
    });
    console.log('> kanban', kanban);
});
