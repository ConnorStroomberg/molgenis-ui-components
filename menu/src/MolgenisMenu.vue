<template>
  <div>
    <template v-if="topLogo">
      <div id="TopLogo">
        <a href="/"><img :src="topLogo" alt='' border='0'
                         height="150"></a>
      </div>
    </template>
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              aria-controls="navbarNavDropdown" aria-expanded="false"
              aria-label="Toggle navigation" v-on:click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <a v-if="navBarLogo" class="navbar-brand" :href="'/menu/main/'+menu.items[0].href"><img
        :src="navBarLogo"></a>
      <a v-else class="navbar-brand" href="#"></a>

      <div :class="{collapse:collapse, 'navbar-collapse':collapse}" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto">
          <template v-for="(item, index) in menu.items">

            <template v-if="item.type == 'PLUGIN' && (index != 0 || !navBarLogo)">
              <!--index == 0 AND toplogo is set: show logo-->
              <li class="nav-item" :class="{active:isSelectedPlugin(item.id)}">
                <a class="nav-link" :href="'/menu/main/'+item.href">{{item.label}}</a>
              </li>
            </template>
            <template v-else>
              <template v-if="item.type == 'MENU' && index != 0">
                <sub-menu :id="item.id" :label="item.label" :index="index"
                          :selected="index == selectedIndex" :callback="setIndex"
                          :items="item.items"></sub-menu>
              </template>
            </template>
          </template>
        </ul>
        <!--right side menu items-->
        <ul class="nav navbar-nav">
          <li class="nav-link">
            <!--Add language dropdown-->
            <div id="language-select-box" class="navbar-right"></div>
          </li>
          <li class="nav-item">
            <a class="nav-link navbar-right" :href=helpLink.href
               target='_blank'>{{helpLink.label}}</a>
          </li>
          <li v-if="authenticated" class="nav-link">
            <form id="logout-form" class="navbar-form navbar-right" method="post" action="/logout">
              <button id="signout-button" type="button" class="btn btn-primary btn-sm" v-on:click="logout">Sign out
              </button>
            </form>
          </li>
          <li v-else class="nav-item">
            <a class='nav-link navbar-right btn btn-secondary' v-on:click="login">Sign in</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
  import SubMenu from './SubMenu'
  export default {
    components: {SubMenu},
    name: 'molgenis-menu',
    data: function () {
      return {
        menu: window.__INITIAL_STATE__.menu,
        topLogo: window.__INITIAL_STATE__.topLogo,
        navBarLogo: window.__INITIAL_STATE__.navBarLogo,
        helpLink: window.__INITIAL_STATE__.helpLink,
        authenticated: window.__INITIAL_STATE__.authenticated,
        selectedPlugin: window.__INITIAL_STATE__.selectedPlugin,
        showLanguageDropdown: window.__INITIAL_STATE__.showLanguageDropdown,
        logoutFunction: window.__INITIAL_STATE__.logoutFunction,
        googleSignIn: window.__INITIAL_STATE__.googleSignIn,
        collapse: true,
        selectedIndex: {
          default: -1,
          type: Number
        }
      }
    },
    methods: {
      setIndex: function (index) {
        if (this.selectedIndex === index) {
          this.selectedIndex = -1
        } else {
          this.selectedIndex = index
        }
      },
      toggleNavbar: function () {
        this.collapse = !this.collapse
      },
      isSelectedPlugin: function (plugin) {
        return plugin === this.selectedPlugin
      },
      logout: function () {
        if (this.logoutFunction) {
          this.logoutFunction()
        }
        document.getElementById('logout-form').submit()
      },
      login: function () {
        document.getElementById('login-modal').classList.add('show')
      }
    },
    mounted: function () {
      let setIndex = this.setIndex
      window.addEventListener('click', function (e) { if (e.target.className !== 'nav-link dropdown-toggle') { setIndex(-1) } }, false)
    }
  }
</script>
