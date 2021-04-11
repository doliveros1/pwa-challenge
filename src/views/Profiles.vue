<template>
  <div id="contentView">
    <v-data-table
      :headers="headers"
      :items="profiles"
      item-key="name"
      class="elevation-1"
      @click:row="handleClick"
    >
    </v-data-table>
  </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'Profiles',
  components: {
  },
  data () {
    return {
      profiles: []
    }
  },
  computed: {
    headers () {
      return [
        { text: 'Nombre', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Género', value: 'gender' },
        { text: 'Nacionalidad', value: 'nat' },
        { text: 'Fecha nac.', value: 'dob' },
        { text: 'Edad', value: 'age' },
        { text: 'Fecha reg.', value: 'dor' }
      ]
    }
  },
  methods: {
    ...mapActions(['getProfiles']),
    exitApp () {
      this.$router.push('/')
    },
    filterOnlyCapsText (value, search, item) {
      return value != null &&
        search != null &&
        typeof value === 'string' &&
        value.toString().indexOf(search) !== -1
    },
    handleClick (row) {
      alert(JSON.stringify(row.wrapper))
    }
  },
  created () {
    this.getProfiles().then(profiles => {
      this.profiles = profiles
    }, error => {
      alert(error)
    })
  }
}
</script>
<style>
#contentView {
  margin: 2em;
}
</style>
