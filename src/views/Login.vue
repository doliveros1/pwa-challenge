<template>
<div id="contentView">
  <v-content>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="#2d2d2d">
                        <v-toolbar-title>Enter nickname</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                           <v-text-field
                              v-model="nickname"
                              name="login"
                              label="Nickname"
                              type="text"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="#f0f0f0" @click="enterNickname">Entrar</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
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
