<template></template>

<script>
  import { VueafletBus } from 'vueaflet'
  import Leaflet from 'leaflet'
  import esri from 'esri-leaflet'
  import { 
    VUEAFLET_ADD_MAP_LAYER,
    VUEAFLET_ADD_NAMED_LAYER, 
    VUEAFLET_REMOVE_MAP_LAYER 
  } from 'vueaflet/src/store/mutation-types'
  import { mapMutations, mapGetters } from 'vuex'

  // TODO: add event loop
  const events = [
    'loading',
    'load'
  ]

  let EDynamicMapLayer = {
    name: 'e-dynamic-map-layer',
    
    inject: ['mapId'],

    props: {
      // see https://esri.github.io/esri-leaflet/api-reference/layers/dynamic-map-layer.html for options
      options: {
        type: Object,
        required: true,
        validator: (value) => {
          return !!value.url
        },
        default: () => {
          return {}
        }
      },
      name: String,
      order: {
        type: Number,
        default: 1
      }
    },

    data() {
      return {
        innerLayer: {}
      }
    },

    watch: {
      'options.layers': {
        handler(newLayers) {
          this.innerLayer.options.layers = newLayers
          this.innerLayer.redraw()
        },
        deep: true
      },
      'options.opacity'(newOpacity) {
        if (newOpacity !== null || newOpacity !== undefined) {
          this.innerLayer.options.opacity = newOpacity
          this.innerLayer.redraw()
        }
      }
    },

    created() {
      let existingLayer = this.getNamedLayer(this.name)

      this.innerLayer = existingLayer || esri.dynamicMapLayer({
        ...this.options
      })

      // if a layer already exists with this name, then just re-add it back to the main map
      this.name && !existingLayer
        ? this.addNamedLayer({
            id: this.mapId,
            name: this.name,
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
      this.$emit('ready', this.name)
      VueafletBus.$emit(`dynamic-map-layer-${this.mapId}-ready`, this.name)
    },

    destroyed() {
      // don't ever! remove the named layer, that way it can be reused
      this.removeLayer({ id: this.mapId, layer: this.innerLayer })
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
    }
  }

  export default EDynamicMapLayer
</script>
