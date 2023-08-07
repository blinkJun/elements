import CommonElements from './components/common/index'

function install(app, options) {
    app.use(CommonElements)
}

export * from './hooks/index'
export * from './components/common/components'

export default {
    install
}
