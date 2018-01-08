import { registerComponents } from 'utils'
import * as components from './components'

// TODO: test options
const createInstaller = (components) => (Vue, options) => {
  // do something with options
  registerComponents(Vue, components)
}

const createEsriVueaflet = () => { 
  return { install: createInstaller(components) }
}

export default createEsriVueaflet()
