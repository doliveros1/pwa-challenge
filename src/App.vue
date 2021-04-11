<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-if="nickname !== ''"
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
    >
      <v-list-item class="px-2">

        <v-list-item-title>{{ nickname }}</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider>

              <v-list
          nav
          dense
        >
          <v-list-item link @click="showProfiles">
            <v-list-item-icon>
              <v-icon>mdi-account-group-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Perfiles</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="showFavorites">
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favoritos</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="showLogin">
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
      <v-content>
        <router-view @onLogin="onLogin"></router-view>
      </v-content>
    </v-app>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      nickname: this.$store.state.nickname,
      mini: true
    }
  },
  methods: {
    ...mapActions(['setNickName']),
    showLogin () {
      this.nickname = ''
      this.setNickName(this.nickname)
      this.$router.push('/login')
    },
    showProfiles () {
      this.$router.push('/profiles')
      this.mini = true
    },
    showFavorites () {
      this.$router.push('/favorites')
      this.mini = true
    },
    onLogin (show) {
      if (show) {
        this.nickname = this.$store.state.nickname
        this.mini = true
      } else {
        this.nickname = ''
      }
    }
  },
  created () {
    if (this.nickname === '') {
      this.showLogin()
    }
  }
}
</script>
<style>
#app {
  font-family: "Acciona";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d2d2d;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2d2d2d;
}

#nav a.router-link-exact-active {
  color: #fd0015;
}
h1 {
  color: #fd0015;
  margin-bottom: 2em;
}
</style>
<style>
@font-face {
  font-family: "Acciona";
  src: local("Acciona"),
   url(./fonts/Acciona-Regular.woff2) format("truetype");
}
</style>
