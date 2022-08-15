import 'preact/debug';
import {domReady} from '@zui/browser-helpers/src/dom-ready';
import {DTable} from './src/main';
import checkable from './src/plugins/checkable';

domReady(() => {
    const element = document.getElementById('datatableExample');
    if (element) {
        const datatable = new DTable(element, {
            cols: [
                {name: 'id', title: 'ID', width: 60, fixed: 'left', sortType: 'down', checkbox: true},
                {name: 'name', title: '项目名称', minWidth: 200, flex: 1, sortType: true},
                {name: 'manager', title: '负责人', sortType: true},
                {name: 'storyScale', title: '需求规模', sortType: true},
                {name: 'executionCount', title: '执行数', sortType: true},
                {name: 'invested', title: '已投入', sortType: true},
                {name: 'startDate', title: '开始日期', width: 90, align: 'center', sortType: true},
                {name: 'endDate', title: '开始日期', width: 90, align: 'center', sortType: true},
                {name: 'progress', title: '进度', sortType: true},
                {name: 'actions', title: '操作', width: 200, fixed: 'right', sortType: false},
            ],
            data: Array(1000).fill(0).map((_, index) => ({id: `${index}`, name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'})),
            bordered: false,
            height: 400,
            cellHover: true,
            plugins: [checkable({checkOnClickRow: true})],
            striped: true,
            responsive: true,
        });
        console.log('DataTable', datatable);
    } else {
        console.log('DataTable element not found #datatableExample');
    }
});
