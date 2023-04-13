import { App } from 'vue'

import '../style/vars.scss'
// .vitepress/theme/index.js
import DefaultTheme from 'vitepress/dist/client/theme-default/index'

import VPDemo from '../vitepress/components/vp-demo.vue'

import blinkElements from '@blinkjun/elements/components/common/index'

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
