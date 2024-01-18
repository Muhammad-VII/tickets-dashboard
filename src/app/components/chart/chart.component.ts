import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  afterNextRender,
  inject,
} from '@angular/core';
import { graphic, type EChartsOption } from 'echarts';
import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [NgxEchartsDirective],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
  providers: [provideEcharts()],
})
export class ChartComponent {
  options: EChartsOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: '#8A74F9',
          type: 'solid',
          width: 2,
        },

        label: {
          backgroundColor: '#6a7985',
        },
      },
      align: 'center',
      triggerOn: 'mousemove',
      position: function (pt: any) {
        return [pt[0], '10%'];
      },
      backgroundColor: '#1E1B39',
      formatter: (params: any) => {
        console.log(params);
        return `<div class="font-normal">
        ${params[0].value} إستخدام <br> 
        <div class="text-primary">
        <i class="fa-solid fa-circle-arrow-up rotate-[45deg]"></i> 1.2%
        </div>
        </div> `;
      },
      textStyle: {
        color: '#E5E5EF',
        fontWeight: 500,
      },
    },
    grid: {
      left: '3%',
      right: '3%',
      bottom: '5%',
      top: '10%',
      containLabel: true,
    },
    xAxis: {
      boundaryGap: false,
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
        fontFamily: 'Neo Sans Arabic Regular',
        fontSize: 16,
        fontWeight: 600,
        margin: 20,
        align: 'left',
      },
      data: [
        'ديسمبر',
        'نوفمبر',
        'أكتوبر',
        'سبتمبر',
        'أغسطس',
        'يوليو',
        'يونيه',
        'مايو',
        'إبريل',
        'مارس',
        'فبراير',
        'يناير',
      ],
    },
    yAxis: {
      splitLine: {
        show: true,
        lineStyle: {
          color: '#E5E5EF',
          opacity: 1,
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
    },
    series: [
      {
        data: [50, 150, 110, 120, 200, 180, 220, 200, 170, 100, 50, 150],
        type: 'line',
        smooth: true,
        lineStyle: {
          color: '#8A74F9',
          width: 3,
        },
        itemStyle: {
          color: '#8A74F9',
        },
        showSymbol: true,
        symbol: 'circle',
        symbolSize: 10,
        
        areaStyle: {
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: '#8a74f9bb'
            },
            {
              offset: 1,
              color: '#8a74f93a'
            }])
        },
      },
    ],
  };
}