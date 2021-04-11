<template>
<div id="contentView">
  <v-content>
    <h1>Login</h1>
    <form>
      <v-text-field
        v-model="nickname"
        label="Nickname"
        required
      ></v-text-field>
      <v-btn
        class="mr-4"
        @click="enterNickname"
      >
        Entrar
      </v-btn>
    </form>
  </v-content>
</div>
</template>

<script>
import Base from '../components/mixins/Base'
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      nickname: ''
    }
  },
  mixins: [
    Base
  ],
  props: {
    source: String
  },
  methods: {
    ...mapActions(['setNickName']),
    enterNickname () {
      if (this.nickname === '') {
        this.showToast('Introduzca un nickname')
      } else {
        this.setNickName(this.nickname)
        this.$emit('onLogin', true)
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
#contentView {
  margin: 2em;
}
</style>
