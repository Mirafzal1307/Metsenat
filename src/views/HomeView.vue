<template>
  <div class="bg-[#f5f5f7] h-full pb-20">
    <div class="container mx-auto my-14">
      <div class="grid grid-cols-6 gap-4">
        <div
          class="col-span-2 flex bg-white rounded-lg p-6 w-full gap-4"
          v-for="item in card"
          :key="item.id"
        >
          <div
            :class="[item.color, item.bgColor]"
            class="flex justify-center items-center px-4 rounded-xl"
          >
            <span> <Icon icon="fa6-solid:money-bill-1-wave" class="" /> </span>
          </div>
          <div>
            <span class="text-[#7A7A9D] font-normal text-xs"> Jami to‘langan summa </span>
            <h4 class="text-[#2E384D] font-bold text-xl">
              1 003232 <span class="text-[#B2B7C1]"> UZS</span>
            </h4>
          </div>
        </div>
        <div class="col-span-6 bg-white rounded-xl py-6">
          <v-chart class="chart" :option="option" autoresize style="height: 60vh" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
import { reactive } from 'vue'

const card = reactive([
  {
    id: '1',
    bgColor: 'bg-[#4C6FFF1A]',
    color: 'text-[#4C6FFF]',
    soum: '1 999 000'
  },
  {
    id: '1',
    bgColor: 'bg-[#EDC7001A]',
    color: 'text-[#EDC700]',
    soum: '1 999 000'
  },
  {
    id: '1',
    bgColor: 'bg-[#ED72001A]',
    color: 'text-[#ED7200]',
    soum: '1 999 000'
  }
])

import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { PieChart, LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  LineChart,
  TooltipComponent,
  LegendComponent,
  GridComponent
])

provide(THEME_KEY, 'light')
const colors = ['#5470C6', '#EE6666']
const option = ref({
  color: colors,
  tooltip: {
    trigger: 'none',
    axisPointer: {
      type: 'cross'
    }
  },
  legend: {},
  grid: {
    top: 70,
    bottom: 50
  },
  xAxis: [
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[1]
        }
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              'Precipitation  ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            )
          }
        }
      },
      // prettier-ignore
      data: ['fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr', 'yanvar']
    },
    {
      type: 'category',
      axisTick: {
        alignWithLabel: true
      },
      axisLine: {
        onZero: false,
        lineStyle: {
          color: colors[0]
        }
      },
      axisPointer: {
        label: {
          formatter: function (params) {
            return (
              'Precipitation  ' +
              params.value +
              (params.seriesData.length ? '：' + params.seriesData[0].data : '')
            )
          }
        }
      },
      // prettier-ignore
      data: ['fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr', 'yanvar']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Homiylar',
      type: 'line',
      xAxisIndex: 1,
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: [3000, 4000, 3000, 4000, 9000, 8000, 900, 20000, 4000, 10000, 5000, 30000]
    },
    {
      name: 'Talabalar',
      type: 'line',
      smooth: true,
      emphasis: {
        focus: 'series'
      },
      data: [5000,7000, 10000, 1100, 10000, 8000, 900, 10000, 2000, 10000, 11000, 50000]
    }
  ]
})
</script>
