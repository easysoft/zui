import './less/index.less';
import $ from 'jquery';

$('#myBoards').boards({
  drop: function (e) {
    $.zui.messager.show(e.element.text() + ' 拖放到 ' + e.target.closest('.board').find('.panel-heading').text());
  }
});

const barChart = $('#bar-chart').barChart({
  labels: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  datasets: [{
    label: 'A产品',
    color: 'blue',
    data: [65, 59, 80, 81, 56, 55, 40, 48, 40, 19, 86, 27]
  }, {
    label: 'B产品',
    color: 'green',
    data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56]
  }]
}, {
  scaleShowGridLines: false,
  scaleShowHorizontalLines: false,
  scaleShowVerticalLines: false,
  barShowStroke: false,
});

$('table.datatable').datatable({checkable: true, sortable: true});
