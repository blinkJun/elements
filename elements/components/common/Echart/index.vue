<template>
    <div ref="chartRef" class="echart-wrap"></div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, shallowRef, watch } from 'vue'
import { addListener, removeListener } from 'resize-detector'
import merge from 'merge'
import * as echarts from 'echarts'
import defaultTheme from './macarons'
const props = defineProps({
    affixOption: Object, // 附加参数，配置图表的渲染方式及大小等
    initOption: {
        type: Object, // 初始化echarts配置
        default: () => ({})
    },
    option: {
        type: Object, // echarts配置，主要传递图表数据，会与initOption合并
        required: true
    },
    register: Function, // echarts初始化前组件注册，有异步操作（请求等）需返回Promise
    registerMap: Function, // echarts注册地图组件，数据更新都会触发，有异步操作（请求等）需返回Promise
    theme: {
        type: [String, Object],
        default: defaultTheme
    },
    loading: {
        type: [Object, Boolean],
        default: true
    }
})
const emits = defineEmits(['done'])

const chartRef = ref<HTMLElement>()
const chartOption = computed(() => merge(props.initOption, props.option))
const chartInstance = shallowRef<any>(null)

const isInit = ref(false)
const loading = ref(false)
let registerMap

const showLoading = () => {
    if (!chartInstance.value) return

    if (props.loading && !chartOption.value) {
        loading.value = true
        chartInstance.value.showLoading(
            merge(
                {
                    text: '',
                    color: '#409EFF',
                    maskColor: 'rgba(255,255,255,0)',
                    spinnerRadius: 10,
                    lineWidth: 2
                },
                loading
            )
        )
    }
}
/* 重置尺寸 */
const resize = () => {
    if (!chartInstance.value) return
    chartInstance.value.resize()
}
const init = async () => {
    if (chartInstance.value) return
    const echartsInit = () => echarts.init(chartRef.value!, props.theme, props.affixOption)
    const getMap = (name) => echarts.getMap(name)
    registerMap = () => {
        if (props.registerMap) {
            return Promise.resolve(props.registerMap(getMap))
                .then((map) => {
                    if (map) {
                        echarts.registerMap(map.name, map.geoJson, map.specialAreas)
                    }
                })
                .catch((err) => {
                    console.error('[echarts registerMap]:', err)
                })
        }
    }

    isInit.value = true
    chartInstance.value = echartsInit()

    showLoading()
    if (props.register) {
        await Promise.resolve(props.register(echarts)).catch((err) => {
            console.error('[echarts register]:', err)
        })

        // 某些组件需要注册后才会生效，因此需要重新初始化
        chartInstance.value.dispose() // 先销毁
        chartInstance.value = echartsInit()
    }

    if (props.registerMap) {
        await registerMap()
    }

    chartInstance.value.setOption(chartOption.value, true)

    addListener(chartRef.value!, resize)
    emits('done', chartInstance.value, echarts)
}
onBeforeUnmount(() => {
    removeListener(chartRef.value!, resize)
    chartInstance.value.clear()
    chartInstance.value.dispose()
    chartInstance.value = null
})
onMounted(init)
watch(chartOption, async (newChartOption) => {
    if (!isInit.value) {
        return
    }

    if (registerMap) {
        await registerMap()
    }
    chartInstance.value.setOption(newChartOption)
})
</script>

<style scoped>
.echart-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>
