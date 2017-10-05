<template>
  <a v-if="type == 'PLUGIN'"class="dropdown-item" :href="'/menu/'+parent+'/'+href">{{label}}</a>
  <span v-else>
    <h6 class="dropdown-header" :class="'menu-depth-'+depth">{{label}}</h6>
    <template v-for="item in items">
      <sub-menu-content v-bind:parent="id" v-bind:id="item.id" v-bind:href="item.href" v-bind:label="item.label"
                        v-bind:type="item.type" v-bind:items="item.items" v-bind:depth="depth+1"></sub-menu-content>
    </template>
  </span>
</template>


<script>
  export default {
    name: 'sub-menu-content',
    props: ['parent', 'id', 'href', 'label', 'type', 'items', 'depth']
  }
</script>
