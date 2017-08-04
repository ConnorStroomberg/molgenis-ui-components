import 'es6-promise/auto'
import 'babel-polyfill'

import Vue from 'vue'

import Menu from './Menu'

import 'bootstrap/dist/css/bootstrap.css' // Bootstrap import
import 'font-awesome/css/font-awesome.min.css' // Font awesome import

/* eslint-disable no-new */
new Vue({
  el: '#molgenis-menu',
  template: '<Menu />',
  components: {Menu}
})
