import 'preact/debug';
import 'zui-dev';
import '@zui/label';
import '@zui/avatar';
import {faker} from '@faker-js/faker';
import {DTable} from './src/main';
import checkable from './src/plugins/checkable';
import nested from './src/plugins/nested';
import rich from './src/plugins/rich';
import headerGroup from './src/plugins/header-group';
import sortable from './src/plugins/sortable';
import datagrid from './src/plugins/datagrid';

faker.setLocale('zh_CN');

onPageLoad(() => {
    const dataTableElement = document.getElementById('dataTable');
    if (dataTableElement) {
        const dataTable = new DTable(dataTableElement, {
            datasource: {
                cols: [
                    {name: '名称', width: 150},
                    {name: '类型', width: 100},
                    {name: '重量', width: 60, align: 'right'},
                ],
                data: Array(100).fill(0).map((_, index) => ([
                    faker.animal.cetacean(),
                    faker.lorem.word(),
                    faker.datatype.number({min: 0, max: 1000}),
                    faker.datatype.number({min: 0, max: 1000}),
                    faker.datatype.number({min: 0, max: 1000}),
                    faker.datatype.number({min: 0, max: 1000}),
                    faker.datatype.number({min: 0, max: 1000}),
                    faker.datatype.number({min: 0, max: 1000}),
                    faker.datatype.number({min: 0, max: 1000}),
                    faker.datatype.number({min: 0, max: 1000}),
                ])),
            },
            height: 400,
            plugins: [datagrid],
        });
        console.log('dataTable', dataTable);
    }

    const productElement = document.getElementById('productTable');
    if (productElement) {
        const productTable = new DTable(productElement, {
            cols: [
                {name: 'id', title: 'ID', width: 80, fixed: 'left'},
                {name: 'name', title: '产品名称2', type: 'link', width: 280, fixed: 'left', sortType: 'asc', linkTemplate: '#/product/{id}'},
                {name: 'productLine', title: '所属产品线', minWidth: 110, sortType: true, flex: 1},
                {name: 'manager', title: '负责人', type: 'avatar', width: 110, sortType: true, avatarKey: 'managerAvatar', avatarWithName: true},
                {name: 'feedback', title: '反馈', width: 65, sortType: true, align: 'center'},
                {name: 'storyDraft', title: '需求草稿', width: 90, sortType: true, align: 'center', group: '需求情况'},
                {name: 'storyActive', title: '激活', width: 80, sortType: true, align: 'center', group: '需求情况'},
                {name: 'storyChanged', title: '变更', width: 80, sortType: true, align: 'center', group: '需求情况'},
                {name: 'completion', title: '完成率', type: 'circleProgress', width: 80, sortType: true, align: 'center', group: '需求情况'},
                {name: 'plan', title: '计划', width: 80, sortType: true, align: 'center'},
                {name: 'caseCoverage', title: '用例覆盖率', type: 'circleProgress', width: 90, sortType: true, align: 'center'},
                {name: 'bugActive', title: 'Bug激活', group: 'Bug情况', width: 80, sortType: true, align: 'center'},
                {name: 'fixRate', title: '修复率', group: 'Bug情况', type: 'circleProgress', width: 80, sortType: true, align: 'center'},
                {name: 'release', title: '发布', width: 90, sortType: true, fixed: 'right', onRenderCell(result, {rowData}) {
                    const releaseIncrease = Number(rowData?.releaseIncrease);
                    result[0] = {
                        html: `<strong>${result[0]}</strong>`,
                    };
                    if (releaseIncrease > 6) {
                        result.push({
                            html: `<span class="label size-sm ${rowData?.milestone ? 'important' : 'secondary'}-pale circle">+${releaseIncrease - 6}</span>`,
                        });
                    }
                    return result;
                }},
            ],
            data: Array(2000).fill(0).map((_, index) => ({
                id: `${index}`,
                name: faker.animal.cetacean(),
                productLine: faker.lorem.word(),
                manager: `${faker.name.lastName()}${faker.name.firstName()}`,
                feedback: faker.datatype.number({min: 0, max: 150}),
                storyDraft: faker.datatype.number({min: 0, max: 150}),
                storyActive: faker.datatype.number({min: 0, max: 150}),
                storyChanged: faker.datatype.number({min: 0, max: 150}),
                completion: faker.datatype.number({min: 0, max: 100}),
                plan: faker.datatype.number({min: 0, max: 10}),
                execution: faker.datatype.number({min: 0, max: 20}),
                caseCoverage: faker.datatype.number({min: 0, max: 100}),
                bugActive: faker.datatype.number({min: 0, max: 100}),
                fixRate: faker.datatype.number({min: 0, max: 100}),
                release: faker.datatype.number({min: 0, max: 200}),
                releaseIncrease: faker.datatype.number({min: 0, max: 10}),
                milestone: faker.datatype.boolean(),
                managerAvatar: `/lib/avatar/assets/avatar-${faker.datatype.number({min: 1, max: 10})}.png`,
            })),
            height: 400,
            striped: false,
            bordered: true,
            plugins: [rich, headerGroup, sortable],
            responsive: true,
        });
        console.log('productTable', productTable);
    } else {
        console.log('DataTable element not found #productElement');
    }

    const element = document.getElementById('datatableExample');
    if (element) {
        const datatable = new DTable(element, {
            cols: [
                {name: 'id', title: 'ID', width: 80, fixed: 'left', sortType: 'desc', checkbox: true},
                {name: 'name', title: '项目名称', minWidth: 200, flex: 1, sortType: true, nestedToggle: true},
                {name: 'NESTED_STATE', title: '层级状态', minWidth: 500, onRenderCell: function (result, {rowID}) {
                    result.length = 0;
                    result.push(JSON.stringify(this.getNestedRowInfo(rowID)));
                    return result;
                }},
                {name: 'manager', title: '负责人', sortType: true, border: true},
                {name: 'storyScale', title: '需求规模', sortType: true},
                {name: 'executionCount', title: '执行数', sortType: true},
                {name: 'invested', title: '已投入', sortType: true, border: 'left'},
                {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: true},
                {name: 'endDate', title: '开始日期', width: 90, align: 'center', sortType: true, border: 'right'},
                {name: 'progress', title: '进度', sortType: true},
                {name: 'actions', title: '操作', width: 200, fixed: 'right', sortType: false},
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
            })).reverse(),
            height: 400,
            cellHover: true,
            colHover: 'header',
            plugins: [checkable({checkOnClickRow: true}), nested()],
            striped: true,
            responsive: true,
        });
        console.log('DataTable', datatable);
    } else {
        console.log('DataTable element not found #datatableExample');
    }
});
