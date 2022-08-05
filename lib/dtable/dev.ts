import 'preact/debug';
import {domReady} from '@zui/browser-helpers/src/dom-ready';
import {DTablePlugin} from './src/main';

domReady(() => {
    const element = document.getElementById('datatableExample');
    if (element) {
        const datatable = new DTablePlugin(element, {
            cols: [
                {name: 'id', title: 'ID', width: 80, fixed: 'left', sortState: 'down'},
                {name: 'name', title: '项目名称', minWidth: 200, flex: 1, sortState: true},
                {name: 'manager', title: '负责人', sortState: true},
                {name: 'storyScale', title: '需求规模', sortState: true},
                {name: 'executionCount', title: '执行数', sortState: true},
                {name: 'invested', title: '已投入', sortState: true},
                {name: 'startDate', title: '开始日期', align: 'center', sortState: true},
                {name: 'endDate', title: '开始日期', align: 'center', sortState: true},
                {name: 'progress', title: '进度', sortState: true},
                {name: 'actions', title: '操作', width: 200, fixed: 'right', sortState: false},
            ],
            data: [
                {id: '1', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '2', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '3', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '4', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '5', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '6', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '7', name: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '8', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '9', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '10', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '11', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '12', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '13', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '14', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '15', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '16', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '17', name: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '18', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '19', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
                {id: '20', name: '哈哈哈', manager: '张三', storyScale: 451, executionCount: 451, invested: 451, startDate: '2020-01-01', endDate: '2020-01-01', progress: '50%'},
            ],
            bordered: true,
            height: 400,
            cellHover: true,
        });
        console.log('DataTable', datatable);
    } else {
        console.log('DataTable element not found #datatableExample');
    }
});
