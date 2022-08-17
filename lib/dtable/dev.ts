import 'preact/debug';
import {domReady} from '@zui/browser-helpers/src/dom-ready';
import {DTable} from './src/main';
import checkable from './src/plugins/checkable';
import nested from './src/plugins/nested';

domReady(() => {
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
            bordered: false,
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
});
