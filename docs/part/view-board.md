section: view
id: board
description: 在多个列进行拖放内容
icon: icon-columns
filter: kanban kb
---

# 看板

<style>
.board-item.drag-shadow {z-index: 9999}
</style>

## 示例

使用鼠标来拖拽项目。

<div class="example margin-zero">
  <div class="boards">
    <div class="board panel">
      <div class="panel-heading">
        <strong>进行中</strong>
      </div>
      <div class="panel-body">
        <div class="board-list">
          <div class="board-item">
            设计界面
          </div>
          <div class="board-item">
            撰写文档
          </div>
          <div class="board-item">
            紧急的任务
          </div>
        </div>
      </div>
    </div>
    <div class="board panel">
      <div class="panel-heading">
        <strong>已完成</strong>
      </div>
      <div class="panel-body">
        <div class="board-list">
          <div class="board-item">
            初步设计
          </div>
          <div class="board-item">
            数据库设计
          </div>
          <div class="board-item">
            需求整理
          </div>
        </div>
      </div>
    </div>
    <div class="board panel">
      <div class="panel-heading">
        <strong>未完成</strong>
      </div>
      <div class="panel-body">
        <div class="board-list">
          <div class="board-item">
            测试
          </div>
          <div class="board-item">
            发布
          </div>
          <div class="board-item">
            庆祝
          </div>
          <div class="disable-drop board-item">
            不可拖拽
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
function afterPageLoad() {
  if($.fn.boards) $('#pageContent .boards').boards({drop: function(e){
    $.zui.messager.show(e.element.text() + " 拖放到 " + e.target.closest('.board').find('.panel-heading').text());
  }});
}
</script>
