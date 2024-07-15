import { onMounted, onUnmounted, watch } from 'vue'
import * as echarts from 'echarts'
import type { EChartsType } from 'echarts'
import { useReactive } from './useState'
import useListerEvent from './useListerEvent'
const useEcharts = (idOrClassName: string) => {

    const [option, setOption] = useReactive({})

    let myChart: undefined | EChartsType

    let isTriggerWatchFn = false

    useListerEvent('resize', () => {
        myChart?.resize()
    })

    onMounted(() => {
        const chartDom = document.querySelector(idOrClassName) as HTMLElement
        if (chartDom) {
            myChart = echarts.init(chartDom)
            myChart.showLoading()
            if (isTriggerWatchFn) {
                myChart.setOption(option)
                myChart.hideLoading()
            }
        }
    })

    onUnmounted(() => {
        myChart?.dispose()
    })

    watch(option, () => {
        myChart?.setOption(option)
        myChart?.hideLoading()
        if (!myChart) {
            isTriggerWatchFn = true
        }
    })

    return {
        setOption
    }
}

export default useEcharts