<template>
<v-dialog v-model="show" max-width="600px">
  <v-card>
    <h2> {{ profile }}</h2>
    <v-card-actions>
      <v-btn color="#fd0015" flat @click.stop="show=false">Cerrar</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script>

export default {
  props: {
    visible: Boolean,
    profile: Object
  },
  computed: {
    show: {
      get () {
        return this.visible
      },
      set (value) {
        if (!value) {
          this.$emit('close')
        }
      }
    }
  },
  watch: {
    show (visible) {
      if (visible) {
        // alert(JSON.stringify(this.profile))
      }
    }
  }
}
</script>
