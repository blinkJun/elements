<template>
    <button type="button" :disabled="countDownValue > 0" @click="startCountDown(100)">{{ countDownValue > 0 ? `${countDownValue}秒后结束` : '点击开始倒计时' }}</button>
</template>
<script setup lang="ts">
import { useCountDownSeconds } from '@blinkjun/elements/hooks/index'

const { countDownValue, startCountDown } = useCountDownSeconds()
</script>

<style scoped>
button {
    padding: 5px 10px;
    background-color: slateblue;
    color: #fff;
}
button:disabled {
    background-color: #eee;
    color: #666;
}
</style>
