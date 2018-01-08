import Vue from 'vue'
import store from '../index.js'
import Leaflet from 'leaflet'

const state = {
  basemaps: [
    {
      label: 'Street',
      urlTemplate: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}?access_token={accessToken}',
      options: {
        attribution: 'Tiles &copy; Esri',
        maxZoom: 18,
        accessToken: 'pk.eyJ1IjoibWF0dC1lLWtpbmciLCJhIjoiY2l6eWtwaGhxMDA2MTJxbXlvY2RuM2h5byJ9.50i1OwaHIrEI9nlAzl-dIQ',
        label: 'Default'
      }
    },
    {
      label: 'Satellite',
      urlTemplate: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      options: {
        attribution: 'Tiles &copy; Esri &mdash',
        maxZoom: 18,
        label: 'Satellite'
      }
    }
  ],
  layers: []
}

const getters = {}

const actions = {}

const mutations = {}

export default {
  state,
  getters,
  actions,
  mutations
}