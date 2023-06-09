import { App } from 'vue'
import blinkElements from '@blinkjun/elements/components/common/index'
import DefaultTheme from 'vitepress/dist/client/theme-default/index'
import VPDemo from '../vitepress/components/vp-demo.vue'

import '../style/vars.scss'

export default {
    ...DefaultTheme,
    enhanceApp: (data) => {
        const { app, router, siteData } = data
        const context: App = app
        // 注册demo组件
        context.component('Demo', VPDemo)
        // 注册组件库所有组件
        app.use(blinkElements)
    }
}
