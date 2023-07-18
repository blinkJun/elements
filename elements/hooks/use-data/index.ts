import { reactive } from 'vue'
export const useData = <Data>(requestApi: () => Promise<Data | null>) => {
    type State = {
        loading: boolean
        error: boolean
        errorMessage: string
        data: Data | null
    }
    const state: State = reactive({
        loading: false,
        error: false,
        errorMessage: '',
        data: null
    })
    const load = async () => {
        // 恢复状态，开始加载
        state.error = false
        state.loading = true
        try {
            // 加载成功
            const res = await requestApi()
            state.data = res
        } catch (error: any) {
            // 加载失败
            state.error = true
            state.errorMessage = error.message
        }
        // 关闭加载状态
        state.loading = false
    }
    return {
        state,
        load
    }
}
