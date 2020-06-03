// 1、初始化，传入dom，返回实例对象
let myChart1 = echarts.init(document.querySelector(".box1"));
let color_arr = ["red", "green"];
let x_name = [];
let data = [];

x_name = ["衣服", "鞋子"];
data = [100, 300];

// setInterval(() => {
//     x_name = ['衣服' + Math.random(),'鞋子' + Math.random()]
//     data = [100,300]
//     console.log( Math.random());
// }, 1000);

// 2、指定图表的配置项和数据
var option = {
  //标题组件
  title: {
    text: "ECharts 入门示例",
  },
  //提示框组件(鼠标移动上去的提示)
  tooltip: {
    // trigger:'axis'//触发方式
    formatter: function (params) {
      //提示框浮层内容格式器，params为每个图item
      return `<p>${params.name}</p><p>${params.seriesName}</p><p>${params.value}</p>`;
    },
  },
  // 图例（理解为如图表包含价格和销量，可以点击图例筛选数据）
  legend: {
    data: ["销量", "价格"],
  },
  //网格配置（图表自身），可设置图表离dom容器的距离（一般用于有x，y坐标的图标设置，也叫直角坐标图标）
  grid: {
    left: "10%",
    top: "10%",
    right: "",
    bottom: "",
    containLabel: true, //显示y轴刻度标签
  },
  // 设置x轴,支持数组写法
  xAxis: [
    {
      // data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],//单项名称
      data: x_name,
      axisLabel: {
        //x轴文字的设置
        color: "red",
      },
      //   triggerEvent: true, //响应鼠标点击事件
    },
  ],
  // 设置y轴
  yAxis: {},
  //设置线条的颜色
  color: ["red", "green"],
  //图表工具栏
  toolbox: {},
  // 系列图标配置,决定了显示哪种图表
  series: [
    {
      name: "销量", //此处有name可以删除掉legend里面的
      type: "bar", //决定了显示哪种图表
      barWidth: "35%", //更改柱形图宽度
      itemStyle: {
        //对单个柱形图item的样式更改
        barBorderRadius: 5,
        // color: function (params) {
        //   //此处也可以设置颜色
        //   return color_arr[params.dataIndex];
        // },
      },
      //   data: [5, 20, 36, 10, 10, 20], //数据
      data: data,
      label: {
        //图形上的文本标签
        show: true,
        formatter: "{c}元", //c会自动解析series.data里面的数据
      },
    },
    {
      name: "价格",
      type: "bar",
      barWidth: "35%",
      itemStyle: {
        barBorderRadius: 5,
      },
      data: [110, 220],
      label: {
        show: true,
        formatter: "{c}w",
      },
    },
  ],
};
// 3、使用刚指定的配置项和数据显示图表。
myChart1.setOption(option);

// 让图表随着页面响应式
window.addEventListener("resize", function () {
  myChart1.resize();
});
// 图表点击事件
myChart1.on("click", function (params) {
  console.log(params);
});

// $("#btn").on("click", function () {
//   // 重新渲染图表数据
//   option.series[0].data = [1000, 3000];
//   myChart1.setOption(option);
// });

let myChart2 = echarts.init(document.querySelector(".box2"));
var geoCoordMap = {
  台湾: [104.065735,30.659462],
  黑龙江: [127.9688, 45.368],
  内蒙古: [110.3467, 41.4899],
  吉林: [125.8154, 44.2584],
  北京市: [116.4551, 40.2539],
  辽宁: [123.1238, 42.1216],
  河北: [114.4995, 38.1006],
  天津: [117.4219, 39.4189],
  山西: [112.3352, 37.9413],
  陕西: [109.1162, 34.2004],
  甘肃: [103.5901, 36.3043],
  宁夏: [106.3586, 38.1775],
  青海: [101.4038, 36.8207],
  新疆: [87.9236, 43.5883],
  西藏: [91.11, 29.97],
  四川: [103.9526, 30.7617],
  重庆: [108.384366, 30.439702],
  山东: [117.1582, 36.8701],
  河南: [113.4668, 34.6234],
  江苏: [118.8062, 31.9208],
  安徽: [117.29, 32.0581],
  湖北: [114.3896, 30.6628],
  浙江: [119.5313, 29.8773],
  福建: [119.4543, 25.9222],
  江西: [116.0046, 28.6633],
  湖南: [113.0823, 28.2568],
  贵州: [106.6992, 26.7682],
  云南: [102.9199, 25.4663],
  广东: [113.12244, 23.009505],
  广西: [108.479, 23.1152],
  海南: [110.3893, 19.8516],
  上海: [121.4648, 31.2891],
};
window.dataList = [
  {
    name: "南海诸岛",
    value: 0,
  },
  {
    name: "北京",
    value: 54,
  },
  {
    name: "天津",
    value: 13,
  },
  {
    name: "上海",
    value: 40,
  },
  {
    name: "重庆",
    value: 75,
  },
  {
    name: "河北",
    value: 13,
  },
  {
    name: "河南",
    value: 83,
  },
  {
    name: "云南",
    value: 11,
  },
  {
    name: "辽宁",
    value: 19,
  },
  {
    name: "黑龙江",
    value: 15,
  },
  {
    name: "湖南",
    value: 69,
  },
  {
    name: "安徽",
    value: 60,
  },
  {
    name: "山东",
    value: 39,
  },
  {
    name: "新疆",
    value: 4,
  },
  {
    name: "江苏",
    value: 31,
  },
  {
    name: "浙江",
    value: 104,
  },
  {
    name: "江西",
    value: 36,
  },
  {
    name: "湖北",
    value: 1052,
  },
  {
    name: "广西",
    value: 33,
  },
  {
    name: "甘肃",
    value: 7,
  },
  {
    name: "山西",
    value: 9,
  },
  {
    name: "内蒙古",
    value: 7,
  },
  {
    name: "陕西",
    value: 22,
  },
  {
    name: "吉林",
    value: 4,
  },
  {
    name: "福建",
    value: 18,
  },
  {
    name: "贵州",
    value: 5,
  },
  {
    name: "广东",
    value: 98,
  },
  {
    name: "青海",
    value: 1,
  },
  {
    name: "西藏",
    value: 0,
  },
  {
    name: "四川",
    value: 44,
  },
  {
    name: "宁夏",
    value: 4,
  },
  {
    name: "海南",
    value: 22,
  },
  {
    name: "台湾",
    value: 3,
  },
  {
    name: "香港",
    value: 5,
  },
  {
    name: "澳门",
    value: 5,
  },
];

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value),
      });
    }
  }  
  return res;
};

option2 = {
  tooltip: {
    triggerOn: "click",
    formatter: function (e, t, n) {
      return 0.5 == e.value
        ? e.name + "：有疑似病例"
        : e.seriesName + "<br />" + e.name + "：" + e.value;
    },
  },
  //映射组件
  visualMap: {
    min: 0,
    max: 1000,
    left: 26,
    bottom: 40,
    showLabel: !0,
    text: ["高", "低"],
    pieces: [
      {
        gt: 100,
        label: "> 100 人",
        color: "#7f1100",
      },
      {
        gte: 10,
        lte: 100,
        label: "10 - 100 人",
        color: "#ff5428",
      },
      {
        gte: 1,
        lt: 10,
        label: "1 - 9 人",
        color: "#ff8c71",
      },
      {
        gt: 0,
        lt: 1,
        label: "疑似",
        color: "#ffd768",
      },
      {
        value: 0,
        color: "#ffffff",
      },
    ],
    show: !0,
  },
  //图表的地理坐标系组件
  geo: {
    map: "china",
    roam: !1,
    scaleLimit: {
      min: 1,
      max: 2,
    },
    zoom: 1, //地图大小缩放
    top: 120,
    label: {
      normal: {
        show: !0,
        fontSize: "14",
        color: "rgba(0,0,0,0.7)",
      },
    },
    itemStyle: {
      normal: {
        //设置地图块
        borderColor: "rgba(0, 0, 0, 0.2)",
      },
      emphasis: {
        //设置鼠标移上去
        areaColor: "#f2d5ad",
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        borderWidth: 0,
      },
    },
  },
  series: [
    {
      symbolSize: 5,
      name: "确诊病例",
      type: "map",
      //   type: 'map3D',
      geoIndex: 0,
      data: window.dataList,
    },
    {
      name: "Top 5",
      type: "scatter",
      coordinateSystem: "geo",
      symbol: "pin",
      symbolSize: [50, 50],
      label: {
        normal: {
          show: true,
          textStyle: {
            color: "#fff",
            fontSize: 9,
          },
          formatter(value) {
            return value.data.value[2] + "---";
          },
        },
      },
      itemStyle: {
        normal: {
          color: "#D8BC37", //标志颜色
        },
      },
      data: convertData(window.dataList),
      showEffectOn: "render",
      rippleEffect: {
        brushType: "stroke",
      },
      hoverAnimation: true,
      zlevel: 1,
    },
  ],
};

myChart2.setOption(option2);
$("#btn").on("click", function () {
  let new_arr = [
    ...window.dataList,
    {
      name: "海南",
      value: 100,
    },
  ];
  option2.series[0].data = [];
  option2.series[0].data = [
    ...window.dataList,
    {
      name: "海南",
      value: 100,
    },
  ];

  myChart2.clear(); //清除画布
  myChart2.setOption(option2, true);
  console.log(new_arr);
});
