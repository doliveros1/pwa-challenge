<template>
<v-app>
    <v-navigation-drawer
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
          <v-list-item link @click="$router.push({ path: item.route })">
            <v-list-item-icon>
              <v-icon>mdi-account-group-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Perfiles</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-star</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Favoritos</v-list-item-title>
          </v-list-item>
          <v-list-item link @click="exitApp">
            <v-list-item-icon>
              <v-icon>mdi-exit-to-app</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Salir</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
      <v-toolbar-title>Application</v-toolbar-title>
    </v-toolbar>
</v-app>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data () {
    return {
      nickname: this.$store.state.nickname,
      mini: true
    }
  },
  methods: {
    exitApp () {
      this.$router.push('/')
    }
  },
  created () {
    if (this.nickname === '') {
      this.exitApp()
    }
  }
}
</script>
