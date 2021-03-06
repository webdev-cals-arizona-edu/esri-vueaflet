<template>
  <div id="app">
    <h1>Esri Vueaflet</h1>
    <a href="https://github.com/webdev-cals-arizona-edu/esri-vueaflet" target="_blank" rel="noopener">Github</a>
    <a href="https://www.npmjs.com/package/esri-vueaflet" target="_blank" rel="noopener">NPM</a>
    <p>This library (or set of components) uses <a href="https://cct.cals.arizona.edu/vueaflet/" target="_blank" rel="noopener">Vueaflet</a> as its primary dependency. Similar to how Vueaflet provides a "vuetified" approach to handling Leaflet objects, Esri-Vueaflet provides the same methodology for handling Esri-Leaflet objects. All objects are managed in a Vuex store, providing the developer easy access from anywhere in their Vue application.</p>

    <showing-arc-gis-basemap/>
    <basemap-with-labels/>
    <simple-feature-layer/>
    <simple-image-map-layer/>
    <clustering-points/>

    <!-- <vector-basemaps/> -->
    <!-- <h1>From Components</h1> -->
    <!-- <div class="example-map">
      <l-map map-id="componentMap" :options="{ zoom: 13, center: [45.526, -122.667] }">
        <l-tile-layer v-bind="streetBasemap"/>
        
        <e-dynamic-map-layer name="demo-dynamic-map-layer" :options="dynamicMapLayerOptions"/>
        <e-feature-layer name="demo-feature-layer" :options="featureLayerOptions"/>
      </l-map>
    </div>
    <button @click.prevent="changeOpacity">Change Opacity</button>

    <h1>Store config still in development...</h1>
    <div class="example-map">
      <l-map map-id="storedMap"
        :options="{ zoom: 12, center: [32.231139, -110.953296] }"
        :basemaps="storedBasemaps" 
        :layers="storedLayers" 
        active-basemap="Street"/>
    </div> -->
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import ShowingArcGisBasemap from '../examples/ShowingArcGisBasemap'
  import BasemapWithLabels from '../examples/BasemapWithLabels'
  import SimpleFeatureLayer from '../examples/SimpleFeatureLayer'
  import SimpleImageMapLayer from '../examples/SimpleImageMapLayer'
  import ClusteringPoints from '../examples/ClusteringPoints'
  // import VectorBasemaps from '../examples/VectorBasemaps'
  import { VueafletBus } from 'vueaflet'

  export default {
    name: 'app',

    components: {
      ShowingArcGisBasemap,
      BasemapWithLabels,
      SimpleFeatureLayer,
      SimpleImageMapLayer,
      ClusteringPoints
      // VectorBasemaps
    },

    mounted() {
      VueafletBus.$on('map-componentMap-ready', () => {
        console.log('componentMap map is ready!!')
      })

      VueafletBus.$on(`dynamic-map-layer-componentMap-ready`, (name) => {
        console.log(name, 'ready dynamic layer')
      })
    },

    data() {
      return {
        streetBasemap: {
          urlTemplate: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}?access_token={accessToken}',
          options: {
            attribution: 'Tiles &copy; Esri',
            maxZoom: 18,
            accessToken: 'pk.eyJ1IjoibWF0dC1lLWtpbmciLCJhIjoiY2l6eWtwaGhxMDA2MTJxbXlvY2RuM2h5byJ9.50i1OwaHIrEI9nlAzl-dIQ',
            label: 'Default'
          }
        },
        dynamicMapLayerOptions: {
          url: 'https://services.arcgisonline.com/arcgis/rest/services/Specialty/Soil_Survey_Map/MapServer',
          opacity: 0.7
        },
        featureLayerOptions: {
          url: 'https://services.arcgis.com/rOo16HdIMeOBI4Mb/arcgis/rest/services/Heritage_Trees_Portland/FeatureServer/0'
        }
      }
    },

    computed: {
      ...mapState({
        storedLayers: state => state.maps.layers,
        storedBasemaps: state => state.maps.basemaps
      })
    },

    methods: {
      handleStoreClick(e) {
        console.log(e)
      },
      changeOpacity() {
        this.dynamicMapLayerOptions.opacity = Math.random()
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    padding: 60px 0;
  }

  .example-map {
    margin: 0 auto 50px;
    width: 500px;
    height: 100%;
  }

  .example-map .map {
    height: 400px;
  }

  code {
    padding: 3px 5px;
    border-radius: 3px;
    background-color: #eee;
  }
</style>
