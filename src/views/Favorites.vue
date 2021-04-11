<template>
  <div id="contentView">
    <v-data-table
      :headers="headers"
      :items="profiles"
      item-key="name"
      class="elevation-1"
      @click:row="handleClick"
    >
      <template v-slot:item.detail="props">
        <v-btn class="mx-2" fab dark small color="#fd0015" @click="onDetail(props.item)">
          <v-icon dark>mdi-information</v-icon>
        </v-btn>
      </template>
    <template v-slot:item.controls="props">
        <v-btn class="mx-2" fab dark small color="#fd0015" @click="onDeleteFavorite(props.item)">
          <v-icon dark>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <ProfileTemplate :visible="showProfile" :profile="currentProfile" @close="showProfile=false" />
    <v-btn fab dark color="#fd0015" fixed right bottom @click="downloadCSV()">
      <v-icon dark >mdi-file-delimited</v-icon>
    </v-btn>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import ProfileTemplate from '../components/ProfileTemplate'

export default {
  name: 'Favorites',
  components: {
    ProfileTemplate
  },
  data () {
    return {
      profiles: [],
      showProfile: false,
      currentProfile: {}
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
        { text: 'Fecha reg.', value: 'dor' },
        { text: '', value: 'detail', sortable: false },
        { text: '', value: 'controls', sortable: false }
      ]
    }
  },
  methods: {
    ...mapActions(['getProfiles', 'getFavorites', 'deleteFavorites']),
    exitApp () {
      this.$router.push('/')
    },
    onDetail (row) {
      this.currentProfile = row.wrapper
      this.showProfile = true
    },
    onDeleteFavorite (row) {
      this.deleteFavorites(row.id).then(profiles => {
        this.profiles = profiles
      }, error => {
        alert(error)
      })
    },
    downloadCSV () {
      let csv = 'name;email;gender;nat;dob;age;dor\n'
      this.profiles.forEach((row) => {
        csv += row.name + ';' + row.email + ';' + row.gender + ';' + row.nat + ';' + row.dob + ';' + row.age + ';' + row.dor
        csv += '\n'
      })

      const anchor = document.createElement('a')
      anchor.href = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv)
      anchor.target = '_blank'
      anchor.download = 'favorites.csv'
      anchor.click()
    }
  },
  created () {
    this.getFavorites().then(profiles => {
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
