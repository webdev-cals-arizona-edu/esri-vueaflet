<template></template>

<script>
  import 'leaflet.markercluster'
  import esriCluster from 'esri-leaflet-cluster'
  import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
  import 'leaflet.markercluster/dist/MarkerCluster.css'
  import LayerMixin from 'mixins/LayerMixin'

  let EClusterFeatureLayer = {
    name: 'e-cluster-feature-layer',
    
    mixins: [LayerMixin],

    data() {
      return {
        type: 'clusterFeatureLayer',
        defaultOptions: {}
      }
    },

    methods: {
      // overrides "construct" method within mixins/LayerMixin.js
      construct() {
        return esriCluster.featureLayer(Object.assign({}, this.defaultOptions, this.mergedOptions))
      }
    }
  }

  export default EClusterFeatureLayer
</script>
