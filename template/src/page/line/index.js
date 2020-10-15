import './less/index.less';

const data = {
  labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
  datasets: [{
    label: "红队",
    color: "red",
    data: [65, 59, 80, 81, 56, 55, 40, 44, 55, 70, 30, 40]
  }, {
    label: "绿队",
    color: "green",
    data: [28, 48, 40, 19, 86, 27, 90, 60, 30, 44, 50, 66]
  }]
};

const lineChart = $("#chart").lineChart(data, {});
