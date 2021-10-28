<!-- 折线图 -->
<template>
  <div class="h-line">
    <h3 @click="$router.go(-1)">返回</h3>
    <ve-line :data="chartData"></ve-line>
    <div ref="myChart" style="width: 100%; height: 520px" id="myChart"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: {
        //columns的第一次数指标
        columns: ["日期", "访问用户", "下单用户", "下单率"],
        //rows的第一个数维度
        rows: [
          { 日期: "1/1", 访问用户: 1393, 下单用户: 1093, 下单率: 0.32 },
          { 日期: "1/2", 访问用户: 3530, 下单用户: 3230, 下单率: 0.26 },
          { 日期: "1/3", 访问用户: 2923, 下单用户: 2623, 下单率: 0.76 },
          { 日期: "1/4", 访问用户: 1723, 下单用户: 1423, 下单率: 0.49 },
          { 日期: "1/5", 访问用户: 3792, 下单用户: 3492, 下单率: 0.323 },
          { 日期: "1/6", 访问用户: 4593, 下单用户: 4293, 下单率: 0.78 },
        ],
      },
    };
  },
  methods: {
    chartEvents() {
      console.log(565564);
    },
    setMyEchart() {
      const myChart = this.$refs.myChart; //通过ref获取到DOM节点
      if (myChart) {
        const thisChart = this.$echarts.init(myChart); //利用原型调取Echarts的初始化方法
        const option = {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: "line",
            },
          ],
        }; //{}内写需要图表的各种配置，可以在官方案例中修改完毕后复制过来
        thisChart.setOption(option); //将编写好的配置项挂载到Echarts上
        window.addEventListener("resize", function () {
          thisChart.resize(); //页面大小变化后Echarts也更改大小
        });
      }
    },
  },
  mounted() {
    this.setMyEchart(); //页面挂载完成后执行
  },
};
</script>


<style>
</style>