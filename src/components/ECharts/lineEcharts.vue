<template>
    <div>
      <div :id="id" :style="{width: width, height: height}"></div>
    </div>
</template>

<script>
  import echarts from 'echarts'
  import westeros from './theme/westeros'
  export default {
    name: 'lineEcharts',
    props: {
      id: {
        type: String,
        default: 'myChart'
      },
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '100%'
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.initChart()
    },
    methods: {
      initChart() {
        this.chart = echarts.init(document.getElementById(this.id),'westeros')

        this.chart.setOption({
          title: {
            text: '折线图堆叠'
          },
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              name:'邮件营销',
              type:'line',
              stack: '总量',
              data:[8200, 6320, 5010, 4340, 3400, 2300, 1100]
            },
            {
              name:'联盟广告',
              type:'line',
              stack: '总量',
              data:[2200, 3820, 1910, 2340, 4900, 3300, 1100]
            },
            {
              name:'视频广告',
              type:'line',
              stack: '总量',
              data:[2500, 4302, 5010, 2540, 6900, 5300, 6410]
            },
            {
              name:'直接访问',
              type:'line',
              stack: '总量',
              data:[5320, 7332, 9301, 6334, 5390, 4330, 1320]
            },
            {
              name:'搜索引擎',
              type:'line',
              stack: '总量',
              data:[8820, 1932, 5901, 7304, 2900, 3300, 8200]
            }
          ]
        })
      }
    }
  }
</script>

<style scoped>

</style>
