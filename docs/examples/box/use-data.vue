<template>
    <button type="button" @click="load">点击加载数据</button>

    <box :loading="state.loading" :error="state.error" :no-data="!state.data" :error-label="state.errorMessage">
        <h3>{{ state.data?.title }}</h3>
        <article>{{ state.data?.content }}</article>
    </box>
</template>
<script setup lang="ts">
import { useData } from '@blinkjun/elements/hooks/index'

interface Data {
    title: string
    content: string
}

const getData = () =>
    new Promise<Data | null>((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                reject(new Error('自定义失败的消息'))
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

const { load, state } = useData<Data>(getData)
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
