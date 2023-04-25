<template>
    <div class="default">
        <Echart :option="chartOption"></Echart>
    </div>
</template>

<script setup lang="ts">
const chartOption = {
    color: ['#0191FF', '#56D33D'],
    title: {
        left: 'center',
        bottom: 14,
        text: '阳朔县本周游客接待量趋势（2023/03/25-2023/03/31）',
        textStyle: {
            fontSize: 14,
            fontWeight: 'normal',
            color: '#999'
        }
    },
    legend: {
        top: 25,
        right: 16
    },
    tooltip: {
        trigger: 'axis'
    },
    grid: {
        top: 86,
        left: 36,
        right: 36,
        bottom: 50,
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLabel: { fontSize: 14, color: '#333' },
        data: ['03-25', '03-26', '03-27', '03-28', '03-29', '03-30', '03-31']
    },
    yAxis: {
        type: 'value',
        axisLabel: { formatter: '{value}万人次', fontSize: 12, color: '#999' },
        splitLine: { lineStyle: { color: '#F2F2F2' } }
    },
    series: [
        {
            name: '区内游客接待量',
            type: 'line',
            smooth: true,
            areaStyle: {
                opacity: 1,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(1, 145, 255, 0.2)' },
                        { offset: 1, color: 'rgba(1, 145, 255, 0)' }
                    ]
                }
            },
            label: { show: true, color: 'inherit' },
            data: [65.71, 27.83, 85.09, 62.07, 77.32, 49.91, 72.33],
            z: 10
        },
        {
            name: '区外游客接待量',
            type: 'line',
            smooth: true,
            areaStyle: {
                opacity: 1,
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(86, 211, 61, 0.2)' },
                        { offset: 1, color: 'rgba(86, 211, 61, 0)' }
                    ]
                }
            },
            label: { show: true, color: 'inherit' },
            data: [120.34, 87.46, 154.69, 119.61, 187.53, 159.66, 172.5]
        }
    ]
}
</script>

<style lang="scss" scoped>
.default {
    width: 100%;
    height: 400px;
}
</style>
