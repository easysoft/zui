import './less/index.less';

const data = {
  labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
  datasets: [{
    label: "蓝队",
    color: 'blue',
    data: [65, 59, 80, 81, 56, 55, 40]
  }, {
    label: "绿队",
    color: 'green',
    data: [28, 48, 40, 19, 86, 27, 90]
  }]
};

const barChart = $('#chart').barChart(data, {
  responsive: false
});
