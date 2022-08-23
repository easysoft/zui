import 'preact/debug';
import '@zui/label';
import '@zui/avatar';
import {faker} from '@faker-js/faker';
import {DTable} from './src/main';
import checkable from './src/plugins/checkable';
import nested from './src/plugins/nested';
import rich from './src/plugins/rich';

faker.setLocale('zh_CN');

setTimeout(() => {
    const element = document.getElementById('datatableExample');
    if (element) {
        const datatable = new DTable(element, {
            cols: [
                {name: 'id', title: 'ID', width: 60, fixed: 'left', sortType: 'down', checkbox: true},
                {name: 'name', title: '项目名称', minWidth: 200, flex: 1, sortType: true, nestedToggle: true},
                {name: 'NESTED_STATE', title: '层级状态', minWidth: 500, onRenderCell: function (result, rowID) {
                    result.length = 0;
                    result.push(JSON.stringify(this.getNestedRowInfo(rowID)));
                    return result;
                }},
                {name: 'manager', title: '负责人', sortType: true},
                {name: 'storyScale', title: '需求规模', sortType: true},
                {name: 'executionCount', title: '执行数', sortType: true},
                {name: 'invested', title: '已投入', sortType: true},
                {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: true},
                {name: 'endDate', title: '开始日期', width: 90, align: 'center', sortType: true},
                {name: 'progress', title: '进度', sortType: true},
                {name: 'actions', title: '操作', width: 200, fixed: 'right', sortType: false},
            ],
            data: Array(10000).fill(0).map((_, index) => ({
                id: `${index}`,
                name: '哈哈哈',
                manager: '张三',
                storyScale: 451,
                executionCount: 451,
                invested: 451,
                startDate: '2020-01-01',
                endDate: '2020-01-01',
                progress: '50%',
                parent: `${['', '', '', index - 1, index - 2, index - 3, index - 3, index - 4, index - 1, index - 1][index % 10]}`,
            })),
            bordered: true,
            height: 400,
            cellHover: true,
            plugins: [checkable({checkOnClickRow: true}), nested()],
            striped: true,
            responsive: true,
        });
        console.log('DataTable', datatable);
    } else {
        console.log('DataTable element not found #datatableExample');
    }

    const productElement = document.getElementById('productTable');
    if (productElement) {
        const productTable = new DTable(productElement, {
            cols: [
                {name: 'name', title: '产品名称', type: 'link', width: 280, fixed: 'left', sortType: 'down', linkTemplate: '#/product/{id}'},
                {name: 'productLine', title: '所属产品线', minWidth: 110, sortType: true, flex: 1},
                {name: 'manager', title: '负责人', type: 'avatar', width: 110, sortType: true, avatarKey: 'managerAvatar', avatarWithName: true},
                {name: 'feedback', title: '反馈', width: 65, sortType: true, align: 'center'},
                {name: 'storyDraft', title: '需求草稿', width: 90, sortType: true, align: 'center'},
                {name: 'storyActive', title: '激活', width: 80, sortType: true, align: 'center'},
                {name: 'storyChanged', title: '变更', width: 80, sortType: true, align: 'center'},
                {name: 'completion', title: '完成率', type: 'circleProgress', width: 80, sortType: true, align: 'center'},
                {name: 'plan', title: '计划', width: 80, sortType: true, align: 'center'},
                {name: 'caseCoverage', title: '用例覆盖率', type: 'circleProgress', width: 90, sortType: true, align: 'center'},
                {name: 'bugActive', title: 'Bug激活', width: 80, sortType: true, align: 'center'},
                {name: 'fixRate', title: '修复率', type: 'circleProgress', width: 80, sortType: true, align: 'center'},
                {name: 'release', title: '发布', width: 90, sortType: true, fixed: 'right', onRenderCell(result, rowID, col, data) {
                    const releaseIncrease = Number(data?.releaseIncrease);
                    result[0] = {
                        html: `<strong>${result[0]}</strong>`,
                    };
                    if (releaseIncrease > 6) {
                        result.push({
                            html: `<span class="label size-sm ${data?.milestone ? 'important' : 'secondary'}-pale circle">+${releaseIncrease - 6}</span>`,
                        });
                    }
                    return result;
                }},
            ],
            data: Array(20).fill(0).map((_, index) => ({
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
                // manager: '张三',
                // storyScale: 451,
                // executionCount: 451,
                // invested: 451,
                // startDate: '2020-01-01',
                // endDate: '2020-01-01',
                // progress: '50%',
                // parent: `${['', '', '', index - 1, index - 2, index - 3, index - 3, index - 4, index - 1, index - 1][index % 10]}`,
            })),
            height: 400,
            striped: false,
            // bordered: true,
            plugins: [rich],
            responsive: true,
        });
        console.log('productTable', productTable);
    } else {
        console.log('DataTable element not found #productElement');
    }
}, 1000);
