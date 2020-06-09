var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/bar');
// require('echarts/lib/theme');
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
require('echarts/lib/component/legend');

var myChart = echarts.init(document.getElementById('bar-one'));
// 显示标题，图例和空的坐标轴
myChart.setOption({
    title: {
        text: '异步数据加载示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: []
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: []
    }]
});
var module = require('./bar-data');
myChart.showLoading();
setTimeout(function () {
    console.log(module)
    myChart.hideLoading();
    myChart.setOption({
        xAxis: {
            data: module.barData.categories
        },
        series: [{
            // 根据名字对应到相应的系列
            name: '销量',
            data: module.barData.data
        }] 
    });
}, 3000)
