export * from './easing'
export * from './requestAnimationFrame'

interface Component {
    [propName: string]: {
        name: string
    }
}
export function useCompoents(app, components: Component) {
    for (const [k, v] of Object.entries(components)) {
        if (!v.name) {
            v.name = k
        }

        app.component(v.name, v)
    }
}
