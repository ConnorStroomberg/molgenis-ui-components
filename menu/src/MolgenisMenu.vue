<template>
  <header id="molgenis-header-container" class="fixed-top">
    <div v-if="topLogo" id="top-logo-vue-banner">
      <a href="/"><img id="logo-top" :src="topLogo" alt="" border="0"></a>
    </div>

    <nav class="navbar navbar-expand-md navbar-light bg-light" role="navigation">
        <a v-if="navBarLogo" class="navbar-brand" :href="'/menu/main/'+menu.items[0].href">
          <img :src="navBarLogo" height="30">
        </a>
        <a v-else class="navbar-brand" href="#"></a>

        <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-content"
                aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbar-content">
          <ul class="navbar-nav mr-auto">

            <template v-for="item in menu.items">
              <li v-if="item.type === 'PLUGIN' && item.id !== 'home'"
                  :class="['nav-item', {'active': isSelectedPlugin(item.id)}]">

                <a class="nav-link" :href="'/menu/main/'+item.href">
                  {{ item.label }}
                </a>
              </li>

              <li v-else-if="item.id !== 'home'" class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" :id="item.id" data-toggle="dropdown" aria-haspopup="true"
                   aria-expanded="false">
                  {{ item.label }}
                </a>
                <drop-down-items :parent="item" :items="item.items"/>
              </li>
            </template>

          </ul>

          <ul class="navbar-nav justify-content-end">
            <li class="nav-item">
              <div id="language-select-box"></div>
            </li>

            <li class="nav-item">
              <a class="nav-link" :href="helpLink.href" target="_blank">
                {{ helpLink.label }}
              </a>
            </li>

            <li class="nav-item">
              <form id="logout-form" class="navbar-form" method="post" action="/logout">
                <button v-if="authenticated" id="signout-button" type="button" class="btn btn-outline-secondary" @click="logout">
                  Sign out
                </button>

                <button v-else class='btn btn btn-outline-primary' type="button" @click="login">Sign in</button>
              </form>
            </li>
          </ul>
        </div>
    </nav>
  </header>
</template>

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
