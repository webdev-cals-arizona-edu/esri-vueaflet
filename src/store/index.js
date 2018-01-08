import Vue from 'vue'
import Vuex from 'vuex'
import { createVueafletStore } from 'vueaflet'

import maps from './modules/maps'

const VueafletStore = createVueafletStore() // take moduleName as argument

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions: {},
  modules: {
    maps
  },
  plugins: [VueafletStore]
})
