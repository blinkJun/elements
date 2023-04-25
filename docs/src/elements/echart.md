# `echart` 图表

## 基础用法

:::demo 只需要配置图表的选项

echart/normal

:::

## 自适应大小

:::demo 点击按钮改变容器大小，图表将自适应

echart/resize

:::

## `Attributes`

<div class="attr-table" >

| 参数          | 说明                                                                         | 类型       | 默认值     |
| ------------- | ---------------------------------------------------------------------------- | ---------- | ---------- |
| `affixOption` | 附加参数，配置图表的渲染方式及大小等                                         | _Object_   | -          |
| `initOption`  | 初始化`echarts`配置                                                          | _Object_   | `{}`       |
| `option`      | `echarts`配置，主要传递图表数据，会与 initOption 合并                        | _Object_   | -          |
| `register`    | `echarts`初始化前组件注册，有异步操作（请求等）需返回`Promise`               | _Function_ | -          |
| `registerMap` | `echarts`注册地图组件，数据更新都会触发，有异步操作（请求等）需返回`Promise` | _Function_ | -          |
| `theme`       | 主题对象                                                                     | _Object_   | `macarons` |
| `loading`     | 是否展示加载图                                                               | _Boolean_  | `true`     |

</div>

## `Events`

<div class="event-table" >

| 事件名称 | 说明           | 回调参数                                |
| -------- | -------------- | --------------------------------------- |
| `done`   | 初始化完成事件 | `(chart:ChartInstance,echarts:Echarts)` |

</div>
