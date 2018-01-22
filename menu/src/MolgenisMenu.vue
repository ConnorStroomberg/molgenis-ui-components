<template>
  <header class="fixed-top">
    <div v-if="topLogo" id="top-logo-vue-banner">
      <a href="/"><img id="logo-top" :src="topLogo" alt="" border="0"></a>
    </div>

    <nav class="navbar navbar-expand-md navbar-light bg-light" role="navigation">
      <a v-if="navBarLogo" class="navbar-brand" :href="'/menu/main/'+menu.items[0].href">
        <img :src="navBarLogo" height="30">
      </a>
      <a v-else class="navbar-brand" href="#"></a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content"
              aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbar-content">
        <ul class="navbar-nav mr-auto">
          <template v-for="(item, index) in menu.items">
            <li v-if="item.type === 'PLUGIN' && item.id !== 'home'"
                :class="['nav-item', {'active': isSelectedPlugin(item.id)}]">

              <a class="nav-link" :href="'/menu/main/'+item.href">
                {{ item.label }}
              </a>
            </li>

            <li class="nav-item dropdown" v-else-if="item.id !== 'home'">
              <a class="nav-link dropdown-toggle" :id="item.id"
                 role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {{ item.label }}
              </a>
              <drop-down-items :parent="item" :items="item.items"></drop-down-items>
            </li>
          </template>
        </ul>

        <ul class="navbar-nav float-right">
          <li class="nav-item">
            <div id="language-select-box"></div>
          </li>

          <li class="nav-item">
            <a class="nav-link" :href=helpLink.href target='_blank'>
              {{ helpLink.label }}
            </a>
          </li>

          <li v-if="authenticated" class="nav-link">
            <form id="logout-form" class="navbar-form" method="post" action="/logout">
              <button id="signout-button" type="button" class="btn btn-light" @click="logout">
                Sign out
              </button>
            </form>
          </li>

          <li v-else class="nav-item">
            <a class='nav-link btn btn-light' @click="login">Sign in</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style>
  .dropdown-toggle:hover {
    cursor: pointer;
  }
</style>

<script>
  import DropDownItems from './DropDownItems'

  export default {
    name: 'molgenis-menu',
    data () {
      return {
        menu: window.molgenisMenu.menu,
        topLogo: window.molgenisMenu.topLogo,
        navBarLogo: window.molgenisMenu.navBarLogo,
        helpLink: window.molgenisMenu.helpLink,
        authenticated: window.molgenisMenu.authenticated,
        selectedPlugin: window.molgenisMenu.selectedPlugin,
        showLanguageDropdown: window.molgenisMenu.showLanguageDropdown,
        logoutFunction: window.molgenisMenu.logoutFunction,
        googleSignIn: window.molgenisMenu.googleSignIn
      }
    },
    methods: {
      isSelectedPlugin (plugin) {
        return plugin === this.selectedPlugin
      },
      logout () {
        if (this.logoutFunction) {
          this.logoutFunction()
        }
        document.getElementById('logout-form').submit()
      },
      login () {
        const modal = document.getElementById('login-modal')
        modal.classList.add('show')
        modal.style.display = 'inline'
      }
    },
    components: {
      DropDownItems
    }
  }
</script>
