<template>
  <li v-bind:class="['nav-item', 'dropdown', selected?'show':'' ]">

    <a class="nav-link dropdown-toggle" v-bind:id="id" data-toggle="dropdown"
       aria-haspopup="true" v-bind:aria-expanded="selected" v-on:click="callback(index)" href="#">
      {{label}}
    </a>
    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
      <template v-for="(item, index) in items">
        <sub-menu-content v-bind:parent="id" v-bind:id="item.id" v-bind:href="item.href" v-bind:label="item.label"
                          v-bind:type="item.type" v-bind:items="item.items" :depth="0"></sub-menu-content>
      </template>
    </div>
  </li>
</template>

<script>
  import SubMenuContent from './SubMenuContent'
  export default {
    components: {SubMenuContent},
    name: 'sub-menu',
    props: ['selected', 'id', 'label', 'callback', 'index', 'items']
  }
</script>
