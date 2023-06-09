<template>
    <button type="button" :disabled="countDownValue > 0" @click="toStartCountDown(5)">
        {{ countDownValue > 0 ? `${countDownLabel}秒后结束：${countDownValue}` : '点击开始倒计时' }}
    </button>
</template>
<script setup lang="ts">
import { useCountDownSeconds, useCountTo } from '@blinkjun/elements/hooks/index'
import { linear } from '@blinkjun/elements/utils/easing'
import { computed } from 'vue'

const { countDownValue, startCountDown } = useCountDownSeconds('count-down-seconds')

let countDownLabel
const setCountTo = (start) => {
    const { label } = useCountTo(
        computed(() => {
            // 启动倒计时后设置为倒计时的下一个值
            if (countDownValue.value > 0) {
                return countDownValue.value - 1
            }
            // 先为过渡效果设置初始值
            return start
        }),
        {
            easeFunc: linear,
            duration: 1000
        }
    )
    countDownLabel = label
}
const toStartCountDown = (start) => {
    setCountTo(start)
    startCountDown(start)
}

if (countDownValue.value > 0) {
    setCountTo(countDownValue.value)
}
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
