<template>
    <button type="button" @click="loadData">点击加载数据</button>
    <box :loading="loading" :error="loadError"></box>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const loadError = ref(false)

const getData = () =>
    new Promise<void>((resolve, reject) => {
        setTimeout(() => {
            reject()
        }, 2000)
    })

const loadData = async () => {
    loading.value = true
    try {
        await getData()
    } catch (error) {
        loadError.value = true
    }
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
</style>
