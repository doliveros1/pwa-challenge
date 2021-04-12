<template>
  <div id="contentView">
    <v-data-table
      :headers="headers"
      :items="profiles"
      item-key="name"
      class="elevation-1"
    >
    <template v-slot:item.detail="props">
        <v-btn class="mx-2" fab dark small color="#fd0015" @click="onDetail(props.item)">
          <v-icon dark>mdi-information</v-icon>
        </v-btn>
      </template>
      <template v-slot:item.controls="props">
        <v-btn class="mx-2" fab dark small color="#fd0015" @click="onNewFavorite(props.item)">
          <v-icon dark>mdi-heart</v-icon>
        </v-btn>
      </template>
    <template v-slot:body.append>
        <tr>
          <td></td>
          <td></td>
          <td>
            <v-text-field
              v-model="gender"
              type="string"
              label="Género"
            ></v-text-field>
          </td>
          <td>
            <v-text-field
              v-model="nat"
              type="string"
              label="Nacionalidad"
            ></v-text-field>
          </td>
          <td></td>
          <td>
            <v-text-field
              v-model="age"
              type="number"
              label="Edad"
            ></v-text-field>
          </td>
          <td colspan="4"></td>
        </tr>
      </template>
    </v-data-table>
    <ProfileTemplate :visible="showProfile" :profile="currentProfile" @close="showProfile=false" />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import ProfileTemplate from '../components/ProfileTemplate'

export default {
  name: 'Profiles',
  components: {
    ProfileTemplate
  },
  data () {
    return {
      profiles: [],
      showProfile: false,
      currentProfile: {},
      gender: '',
      nat: '',
      age: ''
    }
  },
  computed: {
    headers () {
      return [
        { text: 'Nombre', value: 'name' },
        { text: 'Email', value: 'email' },
        {
          text: 'Género',
          value: 'gender',
          filter: value => {
            if (!this.gender) return true
            return value === this.gender
          }
        },
        {
          text: 'Nacionalidad',
          value: 'nat',
          filter: value => {
            if (!this.nat) return true
            return value.includes(this.nat)
          }
        },
        { text: 'Fecha nac.', value: 'dob' },
        {
          text: 'Edad',
          value: 'age',
          filter: value => {
            if (!this.age) return true
            return value === parseInt(this.age)
          }
        },
        { text: 'Fecha reg.', value: 'dor' },
        { text: '', value: 'detail', sortable: false },
        { text: '', value: 'controls', sortable: false }
      ]
    }
  },
  methods: {
    ...mapActions(['getProfiles', 'addFavorite', 'setCurrentProfile']),
    exitApp () {
      this.$router.push('/')
    },
    filterOnlyCapsText (value, search, item) {
      return value != null &&
        search != null &&
        typeof value === 'string' &&
        value.toString().indexOf(search) !== -1
    },
    onDetail (row) {
      this.currentProfile = row
      this.showProfile = true
    },
    onNewFavorite (row) {
      this.addFavorite(row.wrapper).then(() => {
        alert('Añadido a favoritos')
      }, error => {
        alert(error)
      })
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
