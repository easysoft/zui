import 'preact/debug';
import 'zui-dev';
import '@zui/label';
import '@zui/avatar';
import '@zui/icons';
import '@zui/dropdown';
import '@zui/form';
import '@zui/input-control';
import '@zui/progress';
import '@zui/tooltip';
import '@zui/popover';
import '@zui/button';
import '@zui/pager';
import {Faker, zh_CN, en} from '@faker-js/faker';
import {DTable} from './src/main';
import {checkable} from './src/plugins/checkable';
import {nested} from './src/plugins/nested';
import {rich} from './src/plugins/rich';
import {headerGroup} from './src/plugins/header-group';
import {sortable} from './src/plugins/sortable';
import {datagrid} from './src/plugins/datagrid';
import {moveable} from './src/plugins/moveable';
import {actions} from './src/plugins/actions';
import {pager} from './src/plugins/pager';
import {cellspan} from './src/plugins/cellspan';
import {custom} from './src/plugins/custom';

const faker = new Faker({locale: [zh_CN, en]});

onPageLoad(() => {
    const element = document.getElementById('datatableExample');
    if (element) {
        const datatable = new DTable(element, {
            cols: [
                {name: 'id', title: 'ID', width: 80, fixed: 'left', sortType: 'desc', checkbox: true},
                {name: 'name', title: '项目名称', minWidth: 200, flex: 1, sortType: true, nestedToggle: true},
                {name: 'manager', title: '负责人', sortType: true, border: true, width: 200},
                {name: 'storyScale', title: '需求规模', sortType: true},
                {name: 'executionCount', title: '执行数', sortType: true},
                {name: 'invested', title: '已投入', sortType: true, border: 'left'},
                {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: true},
                {name: 'endDate', title: '开始日期', width: 90, align: 'center', sortType: true, border: 'right'},
                {name: 'progress', title: '进度', sortType: true},
                {name: 'actions', title: '操作', width: 100, fixed: 'right', sortType: false, type: 'actions', actionsMap: {
                    add: {icon: 'icon-plus', hint: '添加'},
                    delete: {icon: 'icon-pencil', hint: '删除'},
                    edit: {icon: 'icon-edit', hint: '编辑'},
                }},
            ],
            data: Array(10).fill(0).map((_, index) => ({
                // id: `${index}`,
                id: `${index === 7 ? 700 : index}`,
                // name: `${index}: ` + faker.animal.cetacean(),
                name: `${index}: ` + `${[100, '', '', index - 1, index - 2, index - 3, index - 3, index - 4, index - 1, index - 1][index % 10]}`,
                manager: '张三',
                storyScale: 451,
                executionCount: 451,
                invested: 451,
                startDate: '2020-01-01',
                endDate: '2020-01-01',
                progress: '50%',
                parent: `${[100, '', '', index - 1, index - 2, index - 3, index - 3, index - 4, index - 1, index - 1][index % 10]}`,
                actions: ['add', 'delete', {name: 'edit', disabled: faker.datatype.boolean()}],
            })).reverse(),
            height: 'auto',
            cellHover: true,
            colHover: 'header',
            moveable: 'header',
            checkOnClickRow: true,
            plugins: [checkable, nested, moveable, actions, pager, sortable],
            striped: true,
            responsive: true,
            footPager: {
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
            },
            footer: ['checkbox', 'divider', 'checkedInfo', 'divider', 'flex', 'pager'],
        });
        console.log('DataTable', datatable);
    } else {
        console.log('DataTable element not found #datatableExample');
    }
});
