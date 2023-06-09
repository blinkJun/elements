import { Ref, ref } from 'vue'

interface CountDownData {
    date: number
    count: number
}

const getLocalCountDownValue = function (storeKey: string): number {
    const countDownString = localStorage.getItem(storeKey)
    if (countDownString) {
        const countDown = JSON.parse(countDownString) as CountDownData
        const pastTime = parseInt((Date.now() - countDown.date) / 1000 + '')
        const countDownValue = countDown.count - pastTime
        if (countDownValue > 0) {
            return countDownValue
        }
    }
    return 0
}

const startCountDown = function (value: number = 60, countDownValue: Ref<number>, storeKey?: string) {
    countDownValue.value = value
    const countDown = () => {
        setTimeout(() => {
            countDownValue.value -= 1
            if (countDownValue.value > 0) {
                const value = {
                    date: Date.now(),
                    count: countDownValue.value
                }
                if (storeKey) {
                    localStorage.setItem(storeKey, JSON.stringify(value))
                }
                return countDown()
            } else {
                if (storeKey) {
                    localStorage.removeItem(storeKey)
                }
            }
        }, 1000)
    }
    return countDown()
}

export const useCountDownSeconds = function (storeKey?: string) {
    const countDownValue = ref<number>(0)

    if (storeKey) {
        const localCountDownValue = getLocalCountDownValue(storeKey)
        if (localCountDownValue) {
            countDownValue.value = localCountDownValue as number
            startCountDown(localCountDownValue, countDownValue, storeKey)
        }
    }

    return {
        startCountDown: (seconds: number = 60) => {
            return startCountDown(seconds, countDownValue, storeKey)
        },
        countDownValue
    }
}
