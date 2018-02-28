import Leaflet from 'leaflet'
import esri from 'esri-leaflet'
import { mapMutations, mapGetters } from 'vuex'
import { 
  VUEAFLET_ADD_MAP_LAYER,
  VUEAFLET_ADD_NAMED_LAYER, 
  VUEAFLET_REMOVE_MAP_LAYER 
} from 'vueaflet/src/store/mutation-types'
import { VueafletBus } from 'vueaflet'

export default {
  inject: {
    mapId: { default: 'mainMap' },
    registerOptions: {
      default: () => {}
    }
  },

  props: {
    options: {
      type: Object,
      required: true,
      validator: (value) => {
        if (!value.url) console.error(`${this.type} requires options.url`)

        return !!value.url
      },
      default: () => {
        return {}
      }
    },
    layerName: String,
    order: {
      type: Number,
      default: 1
    },
    events: {
      type: Array,
      default: () => { return [] }
    },
    enableBus: Boolean
  },

  data() {
    return {
      mergedOptions: null
    }
  },

  created() {
    let existingLayer = this.getNamedLayer(this.layerName)
    
    this.mergedOptions = (this.registerOptions) ? this.registerOptions(this.options) : this.options
    this.innerLayer = existingLayer || this.construct()

    // if a layer already exists with this name, then just re-add it back to the main map
    this.layerName && !existingLayer
      ? this.addNamedLayer({
          id: this.mapId,
          name: this.layerName,
          order: this.order,
          layer: this.innerLayer
        })
      : this.addLayer({
          id: this.mapId,
          order: this.order,
          layer: this.innerLayer
        })
  },

  mounted() {
    this.addEventListeners()

    this.$emit('ready', this.innerLayer)
    this.enableBus && VueafletBus.$emit(`${this.type}-${this.mapId}-ready`, this.innerLayer)
  },

  computed: {
    ...mapGetters(['getNamedLayer'])
  },

  methods: {
    ...mapMutations({
      addLayer: VUEAFLET_ADD_MAP_LAYER,
      addNamedLayer: VUEAFLET_ADD_NAMED_LAYER,
      removeLayer: VUEAFLET_REMOVE_MAP_LAYER
    }),
    construct() {
      return esri[this.type](Object.assign({}, this.defaultOptions, this.mergedOptions))
    },
    addEventListeners() {
      // only $emit on the VueafletBus is flag is enabled
      this.events.forEach((event) => {
        this.innerLayer.on(event, (ev) => { this.$emit(event, { event: ev, layer: this.innerLayer }) })
        this.enableBus && this.innerLayer.on(event, (ev) => { VueafletBus.$emit(`${this.type}-${this.mapId}-${event}`, { event: ev, layer: this.innerLayer }) })
      })
    }
  },

  destroyed() {
    this.removeLayer({ id: this.mapId, layer: this.innerLayer })
  }
}