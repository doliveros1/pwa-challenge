<template>
  <div id="contentView">
    <h1>Favoritos</h1>
    <v-btn fab dark color="#fd0015" fixed right bottom>
      <v-icon dark>mdi-file-delimited</v-icon>
    </v-btn>
  </div>
</template>
<script>
export default {
  name: 'Favorites',
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
  }
}
</script>
<style>
#contentView {
  margin: 2em;
}
</style>
