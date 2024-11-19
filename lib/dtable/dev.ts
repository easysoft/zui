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
import '@zui/menu';
import '@zui/contextmenu';
import '@zui/list';
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
import {resize} from './src/plugins/resize';
import {sortCol} from './src/plugins/sort-col';
import {customCol} from './src/plugins/custom-col';

const faker = new Faker({locale: [zh_CN, en]});

onPageUpdate(() => {
    const customColsTable = new DTable('#customColsTable', {
        cols: [
            {name: 'id', title: 'ID', width: 80, fixed: 'left', sortType: 'desc', checkbox: true},
            {name: 'name', title: '项目名称', minWidth: 200, fixed: 'left', flex: 1, sortType: true, nestedToggle: true, childLabel: '子'},
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
        data: Array(20).fill(0).map((_, index) => ({
            id: `${index}`,
            name: faker.animal.cetacean(),
            manager: '张三',
            storyScale: 451,
            executionCount: 451,
            invested: 451,
            startDate: '2020-01-01',
            endDate: '2020-01-01',
            progress: '50%',
            parent: `${['', '', '', index - 1, index - 2, index - 3, index - 3, index - 4, index - 1, index - 1][index % 10]}`,
            actions: ['add', 'delete', {name: 'edit', disabled: faker.datatype.boolean()}],
        })).reverse(),
        emptyTip: '暂无',
        height: 400,
        striped: false,
        plugins: [rich, actions, resize, sortCol, customCol],
        responsive: true,
        sortCol: true,
        colResize: true,
        customCol: true,
    });
    console.log('customColsTable', customColsTable);

    const dataTable = new DTable('#dataTable', {
        datasource: {
            cols: [
                {name: 'C1', title: '名称', width: 150},
                {
                    name: 'C2',
                    title: '类型',
                    width: 100,
                },
                {
                    name: 'C3',
                    title: '重量',
                    width: 60,
                    align: 'right',
                    custom: '<strong>{value}</strong>',
                },
                {
                    name: 'C4',
                    title: '自定义',
                    width: 60,
                    align: 'right',
                    custom: {
                        component: 'input',
                        props: ({value}) => {
                            return {
                                className: 'form-control flex-auto',
                                value,
                                onChange: (event) => {
                                    console.log('> onChange', event.target.value);
                                },
                            };
                        },
                    },
                },
            ],
            data: Array(100).fill(0).map(() => ([
                faker.animal.cetacean(),
                faker.lorem.word(),
                faker.number.int(1000),
                faker.number.int(1000),
                faker.number.int(1000),
                faker.number.int(1000),
                faker.number.int(1000),
                faker.number.int(1000),
                faker.number.int(1000),
                faker.number.int(1000),
            ])),
        },
        height: 400,
        colHover: 'header',
        cellHover: true,
        rowHover: true,
        responsive: true,
        plugins: [datagrid, cellspan, custom],
        getCellSpan({row, col}) {
            if (col.index === 1 && row.index === 0) {
                return {
                    colSpan: 2,
                    rowSpan: 2,
                };
            }
            if (col.index === 3 && row.index % 3 === 1) {
                return {
                    colSpan: 3,
                    rowSpan: 2,
                };
            }
        },
    });
    console.log('dataTable', dataTable);

    const productTable = new DTable('#productTable', {
        cols: [
            {name: 'id', title: 'ID', width: 80, fixed: 'left'},
            {name: 'name', title: '产品名称2', type: 'link', width: 280, fixed: 'left', sortType: 'asc', link: '#/product/{id}', sortLink: '#?sortby={name}&order={sortType}'},
            {name: 'productLine', title: '所属产品线', minWidth: 110, sortType: true, flex: 1, sortLink: (col, sortType) => `#?sortby=${col.name}&order=${sortType}`},
            {name: 'manager', title: '负责人', type: 'avatarName', width: 110, sortType: true, avatarKey: 'managerAvatar', avatarWithName: true},
            {name: 'feedback', title: '反馈', width: 65, sortType: true, align: 'center'},
            {name: 'storyDraft', title: '需求草稿', width: 90, sortType: true, align: 'center', headerGroup: '需求情况'},
            {name: 'storyActive', title: '激活', width: 80, sortType: true, align: 'center', headerGroup: '需求情况'},
            {name: 'storyChanged', title: '变更', width: 80, sortType: true, align: 'center', headerGroup: '需求情况'},
            {name: 'completion', title: '完成率', type: 'progress', width: 80, sortType: true, align: 'center', headerGroup: '需求情况'},
            {name: 'plan', title: '计划', width: 80, sortType: true, align: 'center'},
            {name: 'caseCoverage', title: '用例覆盖率', type: 'progress', width: 90, sortType: true, align: 'center'},
            {name: 'bugActive', title: 'Bug激活', headerGroup: 'Bug情况', width: 80, sortType: true, align: 'center'},
            {name: 'fixRate', title: '修复率', headerGroup: 'Bug情况', type: 'progress', width: 80, sortType: true, align: 'center'},
            {name: 'release', title: '发布', width: 90, sortType: true, fixed: 'right', onRenderCell(result, {row}) {
                const releaseIncrease = Number(row.data?.releaseIncrease);
                result[0] = {
                    html: `<strong>${result[0]}</strong>`,
                };
                if (releaseIncrease > 6) {
                    result.push({
                        html: `<span class="label size-sm ${row.data?.milestone ? 'important' : 'secondary'}-pale circle">+${releaseIncrease - 6}</span>`,
                    });
                }
                result.push({attrs: {'data-toggle': 'popover', 'data-content': '发布说明'}});
                return result;
            }},
        ],
        data: Array(2000).fill(0).map((_, index) => ({
            id: `${index}`,
            name: faker.animal.cetacean(),
            productLine: faker.lorem.word(),
            manager: `${faker.person.lastName()}${faker.person.firstName()}`,
            feedback: faker.number.int(150),
            storyDraft: faker.number.int(150),
            storyActive: faker.number.int(150),
            storyChanged: faker.number.int(150),
            completion: faker.number.int(100),
            plan: faker.number.int(10),
            execution: faker.number.int(20),
            caseCoverage: faker.number.int(100),
            bugActive: faker.number.int(100),
            fixRate: faker.number.int(100),
            release: faker.number.int(200),
            releaseIncrease: faker.number.int(10),
            milestone: faker.datatype.boolean(),
            managerAvatar: `/lib/avatar/assets/avatar-${faker.number.int({min: 1, max: 10})}.png`,
        })),
        emptyTip: '暂无',
        height: 400,
        striped: false,
        bordered: true,
        plugins: [rich, headerGroup, sortable],
        responsive: true,
    });
    console.log('productTable', productTable);

    const datatable = new DTable('#datatableExample', {
        cols: [
            {name: 'id', title: 'ID', width: 80, fixed: 'left', sortType: 'desc', checkbox: true},
            {name: 'name', title: '项目名称', minWidth: 200, flex: 1, sortType: true, nestedToggle: true, childLabel: '子'},
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
        data: Array(20).fill(0).map((_, index) => ({
            id: `${index}`,
            name: faker.animal.cetacean(),
            manager: '张三',
            storyScale: 451,
            executionCount: 451,
            invested: 451,
            startDate: '2020-01-01',
            endDate: '2020-01-01',
            progress: '50%',
            parent: `${['', '', '', index - 1, index - 2, index - 3, index - 3, index - 4, index - 1, index - 1][index % 10]}`,
            actions: ['add', 'delete', {name: 'edit', disabled: faker.datatype.boolean()}],
        })).reverse(),
        height: 400,
        cellHover: true,
        colHover: 'header',
        moveable: 'header',
        checkOnClickRow: true,
        plugins: [checkable, nested, moveable, actions, pager, sortable],
        striped: true,
        responsive: true,
        canRowCheckable(rowID) {
            return rowID == '3' ? 'disabled' : true;
        },
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
        localPager: true,
        footer: ['checkbox', 'divider', 'checkedInfo', 'divider', 'flex', 'pager'],
        defaultNestedState: true,
    });
    console.log('DataTable', datatable);
});
