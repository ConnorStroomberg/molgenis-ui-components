import 'es6-promise/auto'
import 'babel-polyfill'

import Vue from 'vue'
import MolgenisMenu from './MolgenisMenu'
import 'font-awesome/css/font-awesome.min.css' // Font awesome import

/* eslint-disable no-new */
new Vue({
  el: '#molgenis-menu',
  template: '<MolgenisMenu />',
  components: {MolgenisMenu}
})
