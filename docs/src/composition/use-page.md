# `usePage`

分页，依赖`vue-router`模块

## 简单使用方法

```ts
import { usePage, PageConfig } from '@blinkjun/elements/hooks/index'
const setTable = async function (pageConfig: PageConfig) {
    const { rows, count } = await getData({
        page: pageConfig.page!,
        limit: pageConfig.limit!
    })
}
const { pageConfig, updatePage, resetPage, refreshPage } = usePage(setTable)

// pageConfig
/* 
{
    page:1,
    limit:10,
    pageSizeOpts:[10,20]
}
*/

// 刷新当前页面
refreshPage()

// 更新到指定分页
updatePage({ page: 3, limit: 20 })

// 重置为第一页
resetPage()
```

## `Parameter`

<div class="args-table" >

| 参数                | 说明                                                                    | 类型                      | 必填 | 默认值 |
| ------------------- | ----------------------------------------------------------------------- | ------------------------- | ---- | ------ |
| `updateCallback`    | 当分页、当前页码被修改时自动调用此方法                                  | _Function_                | 是   | -      |
| `route`             | 当前路由实例，和`router`一起传入时读取链接上的分页参数：`page`、`limit` | _RouteLocationNormalized_ | 否   | -      |
| `router`            | 路由对象，和`route`一起传入时读取链接上的分页参数：`page`、`limit`      | _Router_                  | 否   | -      |
| `replacePageConfig` | 覆盖当前分页配置                                                        | _PageConfig_              | 否   | -      |

</div>

## `Returns`

返回一个对象，包括以下值

<div class="returns-table" >

| key           | 说明                 | 类型       | 举例                                     |
| ------------- | -------------------- | ---------- | ---------------------------------------- |
| `pageConfig`  | 当前分页配置         | _Object_   | `{page:1,limit:10,pageSizeOpts:[10,20]}` |
| `resetPage`   | 重置当前分页为第一页 | _Function_ | `resetPage()`                            |
| `refreshPage` | 刷新当前页           | _Function_ | `refreshPage()`                          |
| `updatePage`  | 更新至指定分页       | _Function_ | `updatePage({page:3,limit:20})`          |

</div>
