# 个人组件库

该项目基于`vite`、`vue3`,文档使用`vitepress`构建

[点击查看在线文档](https://blinkjun.github.io/elements/)

## 如何使用

1. 安装此模块：
    ```bash
        npm i @blinkjun/elements --save
    ```
2. 引入：
    ```js
    import { App } from 'vue'
    import blinkElements from '@blinkjun/elements'
    import '@blinkjun/elements/dist/bundle.css'
    // 注册组件库所有组件
    app.use(blinkElements)
    ```
3. 使用：
    ```html
    <Echart :option="chartOption"></Echart>
    ```

## 其他说明

-   更新工作区版本

    1. 使用`pnpm changeset`配置哪些模块需要如何更新
    2. 使用`pnpm changeset version`进行更新
    3. 使用`pnpm install`更新文件并重新构建
    4. 提交代码，打`tag`，可使用`blink version`更新主版本。

    若要发布到源，则：

    5. 使用`pnpm publish -r`发布
