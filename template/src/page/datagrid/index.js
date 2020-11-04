import './less/index.less';
import $ from 'jquery';

function createIndex(index) {
  return `<div class="p p${index}">${index}</div>`;
}

const arr = [];
for(let i = 0; i < 200; i++) {
  arr.push({
    id: 200 + i,
    p: createIndex([1,2,3][Math.floor(Math.random()*3)]),
    name: `<a href="#">${['系统升级', '系统优化', '修复BUG', '打包发布', '功能测试'][Math.floor(Math.random()*5)]}</a>`,
    project: ['', '1.0', '2.0'][Math.floor(Math.random()*3)],
    createBy: ['李雷', '韩梅梅', '孙鑫', '张凯'][Math.floor(Math.random()*4)],
    assign: ['李雷', '韩梅梅', '<a href="#">未指派</a>', '张凯'][Math.floor(Math.random()*4)],
    expected: Math.ceil(Math.random()*9),
    status: ['未激活', '激活', '<span style="color: #8666b8">草稿</span>'][Math.floor(Math.random()*3)],
    stage: ['未开始', '已立项', '研发完毕', '已计划'][Math.floor(Math.random()*4)],
    t: ['0', '<a href="#">1</a>'][Math.floor(Math.random()*2)],
    action: `
    <a href="#" class="action-btn" title="开始"><i class="icon icon-play"></i></a>
    <a href="#" class="action-btn" title="完成"><i class="icon icon-check"></i></a>
    <a href="#" class="action-btn" title="日志"><i class="icon icon-time"></i></a>
    <a href="#" class="action-btn" title="编辑任务"><i class="icon icon-edit"></i></a>
    <a href="#" class="action-btn" title="子任务"><i class="icon icon-sitemap"></i></a>
    `
  });
}

$('#datagridExample').datagrid({
  height: 490,
  dataSource: {
    cols: [
      {name: 'id', label: 'ID', sort: true, checkbox: true},
      {name: 'p', label: 'P', sort: true, html: true},
      {name: 'name', label: '需求名称', sort: true, html: true},
      {name: 'project', label: '计划', sort: true},
      {name: 'createBy', label: '创建', sort: true},
      {name: 'assign', label: '指派', sort: true, html: true},
      {name: 'expected', label: '预计', sort: true},
      {name: 'status', label: '状态', sort: true, html: true},
      {name: 'stage', label: '阶段', sort: true},
      {name: 't', label: 'T', sort: false, html: true},
      {name: 'action', label: '操作', sort: false, html: true, width: 200, style: {textAlign: 'center'}}
    ],
    array: arr,
  },
  sortable: true,
  states: {
    pager: {
      page: 1,
      recPerPage: 20,
      fixedTopUntil: 0,
    }
  },
  checkable: true,
  checkByClickRow: true,
  showRowIndex: false
});
