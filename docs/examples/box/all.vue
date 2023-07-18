<template>
    <button type="button" @click="loadData">点击加载数据</button>

    <box :loading="boxState.loading" :error="boxState.error" :no-data="!boxState.data">
        <h3>{{ boxState.data?.title }}</h3>
        <article>{{ boxState.data?.content }}</article>
    </box>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

interface Data {
    title: string
    content: string
}
interface BoxState {
    loading: boolean
    error: boolean
    data: Data | null
}

const boxState = reactive<BoxState>({
    loading: false,
    error: false,
    data: null
})

const getData = () =>
    new Promise<any>((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                reject()
            } else {
                if (Math.random() > 0.5) {
                    resolve({
                        title: 'Dynamic migration',
                        content: 'The Football Is Good For Training And Recreational Purposes national'
                    })
                } else {
                    resolve(null)
                }
            }
        }, 2000)
    })

const loadData = async () => {
    // 恢复状态，开始加载
    boxState.error = false
    boxState.loading = true
    try {
        // 加载成功
        const res = await getData()
        boxState.data = res
    } catch (error) {
        // 加载失败
        boxState.error = true
    }
    // 关闭加载状态
    boxState.loading = false
}
</script>
<style lang="scss" scoped>
button {
    padding: 5px 10px;
    background-color: slateblue;
    color: #fff;
    margin-bottom: 10px;
    &:first-child {
        margin-right: 10px;
    }
}
.data-box {
    padding: 20px;
}
</style>
