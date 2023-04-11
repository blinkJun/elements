import CommonElements from './components/common/index'

function install(app, options) {
    app.use(CommonElements)
}

export * from './hooks/index'

export default {
    install
}
