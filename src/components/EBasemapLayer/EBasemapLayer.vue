<template></template>

<script>
  import Leaflet from 'leaflet'
  import esri from 'esri-leaflet'
  import LayerMixin from 'mixins/LayerMixin'

  let EFeatureLayer = {
    name: 'e-basemap-layer',
    
    mixins: [LayerMixin],

    props: {
      basemap: {
        type: String,
        required: true
      },
      options: Object,
      vector: Boolean
    },

    data() {
      return {
        type: 'basemapLayer',
        defaultOptions: {}
      }
    },

    methods: {
      // overrides "construct" method within mixins/LayerMixin.js
      construct() {
        if (!this.basemap) throw new Error('esri.basemapLayer requires basemap string for hosted basemap')

        return (this.vector)
          ? esri.Vector.basemapLayer(this.basemap, Object.assign({}, this.defaultOptions, this.mergedOptions))
          : esri.basemapLayer(this.basemap, Object.assign({}, this.defaultOptions, this.mergedOptions))
      }
    }
  }

  export default EFeatureLayer
</script>
