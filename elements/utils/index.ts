import { Component } from 'vue'

export * from './easing'
export * from './requestAnimationFrame'

export function useCompoents(app, components: Component) {
    for (const [k, v] of Object.entries(components)) {
        if (!v.name) {
            v.name = k
        }

        app.component(v.name, v)
    }
}

/**
 * @method isUndefined
 * @description 判断传入值是否是未定义
 * @param {any} val
 * @return {Boolean}
 */
export function isUndefined(val) {
    return typeof val === 'undefined'
}
/**
 * @method isPlainObject
 * @description 是否为普通对象
 * @param {any} val
 * @return {Boolean}
 */
export function isPlainObject(val) {
    return val && val.constructor.name === 'Object'
}

/**
 * @method assignment
 * @description 向目标对象赋值，仅对目标对象target的key赋值，源source多余的key不会添加到target上
 * @param {object} target 待赋值目标对象
 * @param {object} source 赋值目标源
 * @return {object}
 * @example
 * const foo = {
 *  a:1
 * }
 * const fbb = {
 *  a:2,
 *  b:1
 * }
 * assignment(foo,fbb)
 * // { a:2 }
 */
export function assignment(target, source) {
    if (!isPlainObject(target) || !isPlainObject(source)) {
        return target
    }

    for (const key in target) {
        if (!isUndefined(source[key])) {
            if (isPlainObject(target[key])) {
                target[key] = assignment(target[key], source[key])
            } else {
                target[key] = source[key]
            }
        }
    }

    return target
}
