import Vue from 'vue'

import Footer from './Footer'

import 'bootstrap/dist/css/bootstrap.css' // Bootstrap import
import 'font-awesome/css/font-awesome.min.css' // Font awesome import
/* eslint-disable no-new */
new Vue({
  el: '#footer',
  template: '<Footer />',
  components: {Footer}
})
