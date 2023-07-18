<template>
    <button type="button" @click="loadData">点击加载数据</button>
    <box :loading="loading" :no-data="!data.title">
        <h3>{{ data.title }}</h3>
        <article>{{ data.content }}</article>
    </box>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'

const loading = ref(false)
const data = reactive({
    title: '',
    content: ''
})

const getData = () =>
    new Promise<typeof data>((resolve, reject) => {
        setTimeout(() => {
            resolve({
                title: 'Dynamic migration',
                content: 'The Football Is Good For Training And Recreational Purposes national'
            })
        }, 2000)
    })

const loadData = async () => {
    loading.value = true
    const res = await getData()
    Object.assign(data, res)
    loading.value = false
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
