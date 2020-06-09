var echarts = require('echarts/lib/echarts');
require('echarts/lib/chart/pie');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

var pie = echarts.init(document.getElementById('pie-one'));

pie.setOption({
    backgroundColor: '#2c343c',
    series : [
        {
            name: '访问来源',
            type: 'pie',
            roseType: 'angle',
            radius: '55%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ],
            // itemStyle: {
            //     // 阴影的大小
            //     shadowBlur: 200,
            //     // 阴影水平方向上的偏移
            //     shadowOffsetX: 0,
            //     // 阴影垂直方向上的偏移
            //     shadowOffsetY: 0,
            //     // 阴影颜色
            //     shadowColor: 'rgba(0, 0, 0, 0.5)',
            //     emphasis: {
            //         shadowBlur: 200,
            //         shadowColor: 'rgba(0, 0, 0, 0.5)'
            //     }
            // },
            // itemStyle: {
            //     // 设置扇形的颜色
            //     color: '#c23531',
            //     shadowBlur: 200,
            //     shadowColor: 'rgba(0, 0, 0, 0.5)'
            // },
            textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            label: {
                textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                }
            },
            visualMap: {
                // 不显示 visualMap 组件，只用于明暗度的映射
                show: false,
                // 映射的最小值为 80
                min: 80,
                // 映射的最大值为 600
                max: 600,
                inRange: {
                    // 明暗度的范围是 0 到 1
                    colorLightness: [0, 1]
                }
            }
        }
    ]
})