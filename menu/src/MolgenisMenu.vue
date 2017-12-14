<template>
  <div class="fixed-top">
    <header v-if="topLogo" id="top-logo-vue-banner">
      <a href="/"><img id="logo-top" :src="topLogo" alt="" border="0"></a>
    </header>
    <nav class="navbar navbar-expand-md navbar-light bg-faded">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
              aria-controls="navbarNavDropdown" aria-expanded="false"
              aria-label="Toggle navigation" v-on:click="toggleNavbar">
        <span class="navbar-toggler-icon"></span>
      </button>

      <a v-if="navBarLogo" class="navbar-brand" :href="'/menu/main/'+menu.items[0].href"><img
        :src="navBarLogo" height="30"></a>
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
          <li class="nav-item">
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
        menu: window.molgenisMenu.menu,
        topLogo: window.molgenisMenu.topLogo,
        navBarLogo: window.molgenisMenu.navBarLogo,
        helpLink: window.molgenisMenu.helpLink,
        authenticated: window.molgenisMenu.authenticated,
        selectedPlugin: window.molgenisMenu.selectedPlugin,
        showLanguageDropdown: window.molgenisMenu.showLanguageDropdown,
        logoutFunction: window.molgenisMenu.logoutFunction,
        googleSignIn: window.molgenisMenu.googleSignIn,
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
        const modal = document.getElementById('login-modal')
        modal.classList.add('show')
        modal.style.display = 'inline'
      }
    },
    mounted: function () {
      let setIndex = this.setIndex
      window.addEventListener('click', function (e) { if (e.target.className !== 'nav-link dropdown-toggle') { setIndex(-1) } }, false)
    }
  }
</script>
