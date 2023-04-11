import { useCompoents } from '../../utils/index'
import * as components from './components'

function install(app, options) {
    useCompoents(app, components)
}

export * from './components'
export default install
