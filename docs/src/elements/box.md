# `box` 数据盒子

## 基础用法

:::demo 默认为暂无数据

box/normal

:::

## 加载数据

:::demo 成功加载数据

box/data

:::

## 加载出错

:::demo 数据加载失败

box/error

:::

## 完整示例

:::demo 完整的状态处理

box/all

:::

## 结合`useData`使用

:::demo 完整的状态处理

box/use-data

:::

## `Attributes`

<div class="attr-table" >

| 参数                      | 说明                             | 类型      | 默认值         |
| ------------------------- | -------------------------------- | --------- | -------------- |
| `loading`                 | 加载状态，最上层显示             | _Boolean_ | `false`        |
| `error`                   | 加载错误状态，层级次于加载状态   | _Boolean_ | `false`        |
| `no-data`                 | 暂无数据，层级次于加载和错误状态 | _Boolean_ | `true`         |
| `error-label`             | 错误状态文案                     | _Boolean_ | '加载数据失败' |
| `no-data-abel`            | 无数据状态文案                   | _Boolean_ | '暂无数据'     |
| `showNoDataIllustrations` | 显示暂无数据插画                 | _Boolean_ | `true`         |
| `showErrorIllustrations`  | 显示错误插画                     | _Boolean_ | `true`         |

</div>
